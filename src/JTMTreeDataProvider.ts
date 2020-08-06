import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

import _ from 'lodash';

export class JTMTreeDataProvider
  implements vscode.TreeDataProvider<Translation> {
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
    // if (element) {
    //   return Promise.resolve(
    //     this.getTranslationsKeys(
    //       path.join(
    //         this.translationPath,
    //         'node_modules',
    //         element.label,
    //         'package.json'
    //       )
    //     )
    //   );
    // } else {
    //   const  = path.join(this.translationPath, 'package.json');
    //   if (this.pathExists()) {
    //     return Promise.resolve(this.getTranslationsKeys());
    //   } else {
    //     vscode.window.showInformationMessage('Workspace has no package.json');
    //     return Promise.resolve([]);
    //   }
    // }
  }

  /**
   * Given the path to package.json, read all its dependencies and devDependencies.
   */
  private getTranslationsKeys(): Translation[] {
    if (this.pathExists(this.translationPath)) {
      const translation = JSON.parse(
        fs.readFileSync(this.translationFileList[0], 'utf-8')
      );
      const translationKeys = Object.keys(translation);
      const translations: Translation[] = [];
      translationKeys.forEach((element) => {
        if (this.isObject(translation[element])) {
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
    if (this.pathExists(this.translationPath)) {
      const translation = JSON.parse(
        fs.readFileSync(this.translationFileList[0], 'utf-8')
      );
      const translationKeys = Object.keys(_.get(translation, element.label!));
      const translations: Translation[] = [];
      translationKeys.forEach((key) => {
        if (this.isObject(_.get(translation, element.label! + '.' + key))) {
          translations.push(
            new Translation(
              key,
              vscode.TreeItemCollapsibleState.Collapsed,
              undefined,
              true
            )
          );
        } else {
          translations.push(
            new Translation(
              key,
              vscode.TreeItemCollapsibleState.None,
              {
                command: 'json-translations-manager.translateTreeSelectedValue',
                title: 'JTM: Adding translation from tree selected value',
                arguments: [element.label! + '.' + key],
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
    return val !== null && val.constructor.name === 'Object';
  }
}

class Translation extends vscode.TreeItem {
  isObject: boolean;
  constructor(
    public readonly _label: string,
    public readonly _collapsibleState: vscode.TreeItemCollapsibleState,
    public readonly _command?: vscode.Command,
    public readonly _isObject: boolean = false
  ) {
    super(_label, _collapsibleState);
    this.command = _command;
    this.isObject = _isObject;
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
