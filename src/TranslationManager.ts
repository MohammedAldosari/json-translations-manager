import * as fs from 'fs';
import * as path from 'path';
import * as papa from 'papaparse';
import * as jsonfile from 'jsonfile';

import _ from 'lodash';
import { ISaveMessage, IWebviewMessage } from './WebViewManager';
import { SignalDispatcher } from 'strongly-typed-events';

export class TranslationManager {
  languageDetailsList: Array<ILanguage>;
  extensionPath: string;
  translationPath: string;
  translations: Array<ITranslation> = [];
  languagefiles: string[] = [];
  private _onSave = new SignalDispatcher();
  constructor(_extensionPath: string, _translationPath: string) {
    this.extensionPath = _extensionPath;
    this.languageDetailsList = this.readCSV();
    this.translationPath = _translationPath;
    this.getLanguages();
    this.getTranslation();
  }

  public get onSave() {
    return this._onSave.asEvent();
  }

  getLanguages() {
    fs.readdirSync(this.translationPath).forEach((file) => {
      this.languagefiles.push(file.replace('.json', ''));
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
    this.languagefiles.forEach((lang) => {
      const obj = jsonfile.readFileSync(
        path.join(this.translationPath, lang + '.json')
      );
      this.translations.push({ Culture: lang, Translations: obj });
    });
  }

  getTranslationValue(message: IWebviewMessage) {
    message.languages.forEach((element) => {
      const obj = this.translations.find((x) => x.Culture === element.Culture)
        ?.Translations;

      if (!message.value) {
        message.value = [
          {
            culture: element.Culture,
            translationValue: _.get(obj, message.TranslationKey, ''),
          },
        ];
      } else {
        message.value.push({
          culture: element.Culture,
          translationValue: _.get(obj, message.TranslationKey, ''),
        });
      }
    });
  }

  getLanguageDetails() {
    const languageDetails = new Array<ILanguage>();

    this.languagefiles.forEach((lang) => {
      let languageDetail = this.languageDetailsList.find(
        (item) => item['Culture'].toUpperCase() === lang.toUpperCase()
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
      const obj = this.translations.find((x) => x.Culture === element.culture)
        ?.Translations;
      _.set(obj!, data.translationKey, element.translationValue);
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
