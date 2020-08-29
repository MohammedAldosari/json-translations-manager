import * as fs from 'fs';
import * as path from 'path';

export class ConfigurationManager {
  private path: string = '';
  translationPath: string = '';
  configuration: IConfiguration | undefined = undefined;
  private configFileName = 'jtm-config.json';
  constructor(_path: string) {
    this.path = _path;
    this.get();
  }
  get(): IConfiguration | undefined {
    if (!this.configuration) {
      const rawdata = fs.readFileSync(
        path.join(this.path, this.configFileName)
      );
      if (rawdata) {
        this.configuration = JSON.parse(rawdata.toString());
        this.setTranslationPath();
      }
    }
    return this.configuration;
  }

  set(_configration: IConfiguration) {
    this.configuration = _configration;
    this.setTranslationPath();
    fs.appendFileSync(
      path.join(this.path, this.configFileName),
      JSON.stringify(_configration, null, 2)
    );
  }

  setTranslationPath() {
    this.translationPath = path.join(
      this.path,
      this.configuration!.translationFolder
    );
  }
}

export interface IConfiguration {
  translationFolder: string;
  sort: boolean;
}
