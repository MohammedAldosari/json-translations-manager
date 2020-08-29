import * as fs from 'fs';
import * as path from 'path';
import * as papa from 'papaparse';
import * as jsonfile from 'jsonfile';

import _ from 'lodash';
import { ISaveMessage, IWebviewMessage } from './WebViewManager';

export class TranslationManager {
  languageDetailsList: Array<ILanguages>;
  extensionPath: string;
  languagefiles: string[] = [];
  constructor(_extensionPath: string) {
    this.extensionPath = _extensionPath;
    this.languageDetailsList = this.readCSV();
  }

  getLanguagesfiles(translationPath: string) {
    fs.readdirSync(translationPath).forEach((file) => {
      this.languagefiles.push(file.replace('.json', ''));
    });
    this.languagefiles.sort();

    return this.languagefiles;
  }

  readCSV(): Array<ILanguages> {
    const csvFilePath = path.join(
      this.extensionPath,
      'resources',
      'languages list culture.csv'
    );
    const csvFile = fs.readFileSync(csvFilePath);
    const csvData = csvFile.toString();
    const result = papa.parse<ILanguages>(csvData, {
      header: true,
    });
    return result.data;
  }

  getTranslationValue(translationPath: string, message: IWebviewMessage) {
    message.languages.forEach((element) => {
      const obj = jsonfile.readFileSync(
        path.join(translationPath, element.Culture + '.json')
      );

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
    const languageDetails = new Array<ILanguages>();
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
        } as ILanguages;
      }
      languageDetails.push(languageDetail);
    });
    return languageDetails;
  }

  saveTranslation(data: ISaveMessage, translationPath: string) {
    data.value.forEach((element) => {
      jsonfile
        .readFile(path.join(translationPath, element.culture + '.json'))
        .then((obj) => {
          _.set(obj, data.translationKey, element.translationValue);
          jsonfile.writeFileSync(
            path.join(translationPath, element.culture + '.json'),
            obj,
            {
              spaces: 2,
              EOL: '\r\n',
            }
          );
        });
    });
    //treeDataProvider.refresh();
  }
}

export interface ILanguages {
  Culture: string;
  English: string;
  Native: string;
  Direction: string;
}
