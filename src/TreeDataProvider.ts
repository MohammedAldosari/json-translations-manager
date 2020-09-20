import { TranslationManager, ITranslation } from './TranslationManager';
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import * as jsonfile from 'jsonfile';
import _ from 'lodash';
const sortobject = require('deep-sort-object');

export class TreeDataProvider implements vscode.TreeDataProvider<Translation> {
  translationManager: TranslationManager;
  constructor(_translationManager: TranslationManager) {
    this.translationManager = _translationManager;
    this.translationManager.onSave.subscribe(() => this.refresh());
  }

  getTreeItem(element: Translation): vscode.TreeItem {
    return element;
  }

  getChildren(element?: Translation): Thenable<Translation[]> {
    if (!this.translationManager.translationPath) {
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
    if (this.pathExists(this.translationManager.translationPath)) {
      this.translationManager.translations.forEach((translation) => {
        translationKeys = _.union(
          translationKeys,
          Object.keys(translation.Translations)
        );
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
    if (this.pathExists(this.translationManager.translationPath)) {
      this.translationManager.translations.forEach((translation) => {
        translationKeys = _.union(
          translationKeys,
          Object.keys(_.get(translation.Translations, path + element.label!))
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

  private isObject(val: any) {
    let object = '';
    for (var element of this.translationManager.translations) {
      object = _.get(element.Translations, val);
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
    this.translationManager = new TranslationManager(
      this.translationManager.extensionPath,
      this.translationManager.configurationManager
    );
    this._onDidChangeTreeData.fire();
  }
  add(): void {
    vscode.commands.executeCommand('json-translations-manager.translate');
  }
  rename(translation: Translation): void {
    vscode.window
      .showInputBox({
        prompt: 'Rename Translation key',
        value: translation.label!,
      })
      .then((newKey) => {
        this.translationManager.translations.forEach((element) => {
          element.Translations = _.mapKeys(element.Translations, function (
            value,
            key
          ) {
            if (key === translation.label!) {
              return newKey;
            } else {
              return key;
            }
          });
          this.writeTranslation(element);
        });
        this.refresh();
        vscode.commands.executeCommand(
          'json-translations-manager.translateTreeSelectedValue',
          newKey!
        );
      });
  }
  delete(value: Translation): void {
    this.translationManager.translations.forEach((element) => {
      delete element.Translations[value.label!];
      this.writeTranslation(element);
    });
    this.refresh();
  }

  private writeTranslation(element: ITranslation) {
    const TranslationPath = path.join(
      this.translationManager.translationPath,
      element.Culture + '.json'
    );
    element.Translations = this.sortObject(element.Translations);
    jsonfile.writeFileSync(TranslationPath, element.Translations, {
      spaces: 2,
      EOL: '\r\n',
    });
  }
  private sortObject(unsorted: any) {
    if (this.translationManager.configurationManager.get()?.sort === false) {
      return unsorted;
    } else {
      return sortobject(unsorted);
    }
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
    if (!this.isObject) {
      this.iconPath = {
        light: path.join(
          __filename,
          '..',
          '..',
          'resources',
          'light',
          'languages.svg'
        ),
        dark: path.join(
          __filename,
          '..',
          '..',
          'resources',
          'dark',
          'languages.svg'
        ),
      };
    }
  }
}
