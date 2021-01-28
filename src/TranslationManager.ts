
import * as fs from 'fs';
import * as path from 'path';
import * as papa from 'papaparse';
import * as jsonfile from 'jsonfile';

import _ from 'lodash';
import { ISaveMessage, IWebviewMessage } from './WebViewManager';
import { SignalDispatcher } from 'strongly-typed-events';
import { ConfigurationManager } from './ConfigurationManager';
const sortobject = require('deep-sort-object');
export class TranslationManager {
  languageDetailsList: Array<ILanguage> = [];
  extensionPath: string;
  translationPath: string;
  translations: Array<ITranslation> = [];
  languagefiles: string[] = [];
  private _onSave = new SignalDispatcher();
  configurationManager: ConfigurationManager;
  constructor(
    _extensionPath: string,
    _configurationManager: ConfigurationManager
  ) {
    this.extensionPath = _extensionPath;
    this.translationPath = _configurationManager.translationPath;
    this.configurationManager = _configurationManager;
    if (_configurationManager.configuration) {
      this.languageDetailsList = this.readCSV();
      this.getLanguages();
      this.getTranslation();
    }
  }

  public get onSave() {
    return this._onSave.asEvent();
  }

  getLanguages() {
    fs.readdirSync(this.translationPath).forEach((file) => {
      if (file.toLowerCase().includes('.json')) {
        this.languagefiles.push(file.replace('.json', ''));
      }
    });
    this.languagefiles.sort();
  }

  readCSV(): Array<ILanguage> {
    const csvFilePath = path.join(
      this.extensionPath,
      'resources',
      'languages list culture.csv'
    );
    const csvFile = fs.readFileSync(csvFilePath);
    const csvData = csvFile.toString();
    const result = papa.parse<ILanguage>(csvData, {
      header: true,
    });
    return result.data;
  }
  getTranslation() {
    this.translations = [];
    this.languagefiles.forEach((lang) => {
      const obj = jsonfile.readFileSync(
        path.join(this.translationPath, lang + '.json')
      );
      this.translations.push({ Culture: lang, Translations: obj });
    });
  }

  getTranslationValue(message: IWebviewMessage) {
    message.languages.forEach((element) => {
      const obj = this.translations.find(
        (x) => x.Culture.toLowerCase() === element.Culture.toLowerCase()
      )?.Translations;

      if (!message.value) {
        message.value = [
          {
            culture: element.Culture,
            translationValue: this.getKeyInfo(message.TranslationKey, obj)?.value
          },
        ];
      } else {
        message.value.push({
          culture: element.Culture,
          translationValue: this.getKeyInfo(message.TranslationKey, obj)?.value
        });
      }
    });
  }

  getTranslationValuesFromText(text: string) {
    let translationValues: any = {};
    this.translations.forEach(element => {
      translationValues[element.Culture] = this.getKeyInfo(text, element.Translations)?.value;
    });

    return translationValues;
  }

  getLanguageDetails() {
    const languageDetails = new Array<ILanguage>();

    this.languagefiles.forEach((lang) => {
      let languageDetail = this.languageDetailsList.find(
        (item) => item['Culture'].toLowerCase() === lang.toLowerCase()
      );
      if (!languageDetail) {
        languageDetail = {
          Culture: lang,
          Direction: 'ltr',
          English: lang,
          Native: lang,
        } as ILanguage;
      }
      languageDetails.push(languageDetail);
    });
    return languageDetails;
  }

  saveTranslation(data: ISaveMessage) {
    data.value.forEach((element) => {
      let obj = this.translations.find(
        (x) => x.Culture.toLowerCase() === element.culture.toLowerCase()
      )?.Translations;
      const keyInfo = this.getKeyInfo(data.translationKey, obj);
      if (keyInfo) {
        _.set(obj!, keyInfo.path, element.translationValue);
      } else {
        _.set(obj!, data.translationKey, element.translationValue);
      }
      obj = this.sortObject(obj);
      jsonfile.writeFileSync(
        path.join(this.translationPath, element.culture + '.json'),
        obj,
        {
          spaces: 2,
          EOL: '\r\n',
        }
      );
    });
    this._onSave.dispatch();
  }
  private sortObject(unsorted: any) {
    if (this.configurationManager.get()?.sort === false) {
      return unsorted;
    } else {
      return sortobject(unsorted);
    }
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
        if (key) {
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
}

export interface KeyInfo {
  path: Array<string>,
  value: any
}

export interface ILanguage {
  Culture: string;
  English: string;
  Native: string;
  Direction: string;
}
export interface ITranslation {
  Culture: string;
  Translations: any;
}
