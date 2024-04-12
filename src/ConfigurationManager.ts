import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";

export class ConfigurationManager {
  private path: string = "";
  translationPath: string = "";
  configuration: IConfiguration | undefined = undefined;
  private configFileName = "jtmConfig.json";
  constructor(_path: string) {
    this.path = _path;
    this.get();
  }
  get(): IConfiguration | undefined {
    try {
      if (!this.configuration) {
        const rawdata = fs.readFileSync(
          path.join(this.path, this.configFileName)
        );
        if (rawdata) {
          this.configuration = JSON.parse(rawdata.toString());
          this.setTranslationPath();
        }
      }
    } catch (err) {
      console.error(err);
      vscode.window.showErrorMessage("No translation configration found");
    }
    return this.configuration;
  }

  set(_configration: IConfiguration) {
    this.configuration = _configration;
    this.setTranslationPath();
    fs.writeFileSync(
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
