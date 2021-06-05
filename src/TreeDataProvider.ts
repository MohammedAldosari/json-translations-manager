
import { TranslationManager, ITranslation, KeyInfo } from './TranslationManager';
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import * as jsonfile from 'jsonfile';
import _ from 'lodash';
import { SignalDispatcher } from 'strongly-typed-events';
const sortobject = require('deep-sort-object');

export class TreeDataProvider implements vscode.TreeDataProvider<Translation> {
  translationManager: TranslationManager;
  private _onRefresh = new SignalDispatcher();
  constructor(_translationManager: TranslationManager) {
    this.translationManager = _translationManager;

    this.translationManager.onSave.clear();
    this.translationManager.onSave.subscribe(() => this.refresh());
  }

  public get onRefresh() {
    return this._onRefresh.asEvent();
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
              vscode.TreeItemCollapsibleState.Expanded,
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
    if (element.label === 'create-dc' || element.label === 'actions') {
      console.log('create-dc');
    }
    if (element.perent) {
      path = element.perent + '.';
    }
    if (this.pathExists(this.translationManager.translationPath)) {
      this.translationManager.translations.forEach((translation) => {
        const object = this.getKeyInfo(path + element.label!, translation.Translations)?.value;
        if (object) {
          translationKeys = _.union(translationKeys, Object.keys(object));
        }
      });

      const translations: Translation[] = [];
      if (translationKeys) {
        translationKeys.forEach((key) => {
          if (this.isObject(path + element.label! + '.' + key)) {
            translations.push(
              new Translation(
                key,
                vscode.TreeItemCollapsibleState.Expanded,
                undefined,
                true,
                path + element.label as string
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
                false,
                path + element.label!
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

  private isObject(val: any): boolean {
    let object = '';
    let returnValue = false;
    for (var element of this.translationManager.translations) {
      object = this.getKeyInfo(val, element.Translations)?.value;
      if (object) {
        break;
      }
    }
    if (object && object.constructor.name === 'Object') {
      returnValue = true;
    }
    return returnValue;

  }

  private getKeyInfo(key: string, translations: ITranslation): KeyInfo | undefined {
    let flag = true;
    let path = [];
    path.push(key);
    while (flag) {
      const x = _.get(translations, path, '');
      if (x) {
        flag = false;
        const returndValue: KeyInfo = { path, value: x };
        return returndValue;
      }
      else {
        if (key && key.includes('.')) {
          path = path.filter(function (e) { return e !== key; });
          path = path.concat(key.replace(/\./, '^~').split('^~'));
          key = path[path.length - 1];
        } else {
          flag = false;
          return undefined;
        }
      }
    }
  }

  private _onDidChangeTreeData: vscode.EventEmitter<
    Translation | undefined | void
  > = new vscode.EventEmitter<Translation | undefined | void>();
  readonly onDidChangeTreeData: vscode.Event<
    Translation | undefined | void
  > = this._onDidChangeTreeData.event;

  refresh(): void {
    this.translationManager.getTranslation();
    this._onRefresh.dispatch();
    this._onDidChangeTreeData.fire();
  }
  add(): void {
    vscode.commands.executeCommand('json-translations-manager.translate');
  }
  rename(translation: Translation): void {
    let path = '';
    if (translation.perent) {
      path = translation.perent + '.';
    }
    const value: string = translation.label! as string;
    vscode.window
      .showInputBox({
        prompt: 'Rename Translation key',
        value: value,
      })
      .then((newKey) => {
        this.translationManager.translations.forEach((element) => {
          let keyInfo = this.getKeyInfo(path + translation.label!, element.Translations)!;
          let newpath = [...keyInfo.path];
          newpath[newpath.length - 1] = newKey!;
          _.set(
            element.Translations,
            newpath,
            keyInfo?.value
          );
          const result = _.unset(
            element.Translations,
            keyInfo.path
          );
          if (result === true) {
            this.writeTranslation(element);
          }
        });
        this.refresh();
        vscode.commands.executeCommand(
          'json-translations-manager.translateTreeSelectedValue',
          path + newKey!
        );
      });
  }
  delete(translation: Translation): void {
    let path = '';
    if (translation.perent) {
      path = translation.perent + '.';
    }
    this.translationManager.translations.forEach((element) => {
      const keyInfo = this.getKeyInfo(path + translation.label!, element.Translations)!;
      const result = _.unset(element.Translations, keyInfo.path);
      if (result === true) {
        this.writeTranslation(element);
      }
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
    _perent: string = '',

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
