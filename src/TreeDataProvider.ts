import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import * as jsonfile from 'jsonfile';
import _ from 'lodash';

export class TreeDataProvider implements vscode.TreeDataProvider<Translation> {
  translationFileList: string[];
  constructor(private translationPath: string) {
    this.translationFileList = this.getLanguagesfiles();
  }

  getTreeItem(element: Translation): vscode.TreeItem {
    return element;
  }

  getChildren(element?: Translation): Thenable<Translation[]> {
    if (!this.translationPath) {
      vscode.window.showInformationMessage('No Translation in empty workspace');
      return Promise.resolve([]);
    }
    if (!element) {
      return Promise.resolve(this.getTranslationsKeys());
    } else if (element.isObject) {
      return Promise.resolve(this.getObjectKeys(element));
    }

    return Promise.resolve([]);
  }

  /**
   * Given the path to package.json, read all its dependencies and devDependencies.
   */
  private getTranslationsKeys(): Translation[] {
    let translationKeys: string[] = [];
    if (this.pathExists(this.translationPath)) {
      this.translationFileList.forEach((translationFile) => {
        const translation = JSON.parse(
          fs.readFileSync(translationFile, 'utf-8')
        );
        translationKeys = _.union(translationKeys, Object.keys(translation));
      });

      const translations: Translation[] = [];
      translationKeys.forEach((element) => {
        if (this.isObject(element)) {
          translations.push(
            new Translation(
              element,
              vscode.TreeItemCollapsibleState.Collapsed,
              undefined,
              true
            )
          );
        } else {
          translations.push(
            new Translation(
              element,
              vscode.TreeItemCollapsibleState.None,
              {
                command: 'json-translations-manager.translateTreeSelectedValue',
                title: 'JTM: Adding translation from tree selected value',
                arguments: [element],
              },
              false
            )
          );
        }
      });
      return translations;
    } else {
      return [];
    }
  }

  private getObjectKeys(element: Translation): Translation[] {
    let translationKeys: string[] = [];
    let path = '';
    if (element.perent) {
      path = element.perent + '.';
    }
    if (this.pathExists(this.translationPath)) {
      this.translationFileList.forEach((translationFile) => {
        const translation = JSON.parse(
          fs.readFileSync(translationFile, 'utf-8')
        );

        translationKeys = _.union(
          translationKeys,
          Object.keys(_.get(translation, path + element.label!))
        );
      });

      const translations: Translation[] = [];
      if (translationKeys) {
        translationKeys.forEach((key) => {
          if (this.isObject(path + element.label! + '.' + key)) {
            translations.push(
              new Translation(
                key,
                vscode.TreeItemCollapsibleState.Collapsed,
                undefined,
                true,
                element.label
              )
            );
          } else {
            translations.push(
              new Translation(
                key,
                vscode.TreeItemCollapsibleState.None,
                {
                  command:
                    'json-translations-manager.translateTreeSelectedValue',
                  title: 'JTM: Adding translation from tree selected value',
                  arguments: [path + element.label! + '.' + key],
                },
                false
              )
            );
          }
        });
      }
      return translations;
    } else {
      return [];
    }
  }

  private pathExists(p: string): boolean {
    try {
      fs.accessSync(p);
    } catch (err) {
      return false;
    }
    return true;
  }

  private getLanguagesfiles() {
    const dir = this.translationPath;
    const fileList: string[] = [];
    fs.readdirSync(dir).forEach((file) => {
      fileList.push(path.join(this.translationPath, file));
    });
    fileList.sort();
    return fileList;
  }
  private isObject(val: any) {
    let translation: any;
    let object;
    for (var element of this.translationFileList) {
      translation = JSON.parse(fs.readFileSync(element, 'utf-8'));
      object = _.get(translation, val);
      if (object) {
        break;
      }
    }
    return object !== null && object.constructor.name === 'Object';
  }

  private _onDidChangeTreeData: vscode.EventEmitter<
    Translation | undefined | void
  > = new vscode.EventEmitter<Translation | undefined | void>();
  readonly onDidChangeTreeData: vscode.Event<
    Translation | undefined | void
  > = this._onDidChangeTreeData.event;

  refresh(): void {
    this._onDidChangeTreeData.fire();
  }
  add(): void {
    vscode.commands.executeCommand('json-translations-manager.translate');
  }
  rename(value: Translation): void {
    vscode.window
      .showInputBox({
        prompt: 'Rename Translation key',
        value: value.label!,
      })
      .then((key) => {
        this.translationFileList.forEach((element) => {
          const translateion = JSON.parse(fs.readFileSync(element, 'utf-8'));
          translateion[key!] = translateion[value.label!];
          delete translateion[value.label!];
          jsonfile.writeFileSync(element, translateion, {
            spaces: 2,
            EOL: '\r\n',
          });
        });
        this._onDidChangeTreeData.fire();
        vscode.commands.executeCommand(
          'json-translations-manager.translateTreeSelectedValue',
          key!
        );
      });
  }
  delete(value: Translation): void {
    this.translationFileList.forEach((element) => {
      const translateion = JSON.parse(fs.readFileSync(element, 'utf-8'));
      delete translateion[value.label!];
      jsonfile.writeFileSync(element, translateion, {
        spaces: 2,
        EOL: '\r\n',
      });
    });
    this._onDidChangeTreeData.fire();
  }
}

class Translation extends vscode.TreeItem {
  isObject: boolean;
  perent: string;
  constructor(
    _label: string,
    _collapsibleState: vscode.TreeItemCollapsibleState,
    _command?: vscode.Command,
    _isObject: boolean = false,
    _perent: string = ''
  ) {
    super(_label, _collapsibleState);
    this.command = _command;
    this.isObject = _isObject;
    this.perent = _perent;
  }

  get tooltip(): string {
    return `${this.label}`;
  }

  // iconPath = {
  //   light: path.join(
  //     __filename,
  //     '..',
  //     '..',
  //     'resources',
  //     'light',
  //     'dependency.svg'
  //   ),
  //   dark: path.join(
  //     __filename,
  //     '..',
  //     '..',
  //     'resources',
  //     'dark',
  //     'dependency.svg'
  //   ),
  // };
}
