// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import * as papa from "papaparse";
import * as jtmSetting from "./jtmSetting";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "json-translations-manager" is now active!'
  );
  console.log("version 20.07.15.6");
  const message = {} as WebviewMessage;
  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "json-translations-manager.translate",
    () => {
      // The code you place here will be executed every time your command is executed
      const configuration = jtmSetting.getSettings();
      // get selected text

      const editor = vscode.window.activeTextEditor;
      let selectedText: string;
      if (editor) {
        const selection = editor.selection;
        selectedText = editor.document.getText(selection);
      }

      vscode.window
        .showInputBox({
          prompt: "Enter Translation key",
          placeHolder: selectedText!,
        })
        .then((key) => {
          // Display a message box to the user
          if (!key) {
            key = selectedText;
          }
          message.TranslationKey = key;
          const panel = vscode.window.createWebviewPanel(
            "angular",
            "Translate",
            vscode.ViewColumn.One,
            {
              localResourceRoots: [
                vscode.Uri.file(
                  path.join(
                    context.extensionPath,
                    "src",
                    "webview",
                    "dist",
                    "jtw-webview"
                  )
                ),
              ],
              enableScripts: true,
              retainContextWhenHidden: true
            }
          );

          panel.webview.html = _getHtmlForWebview(panel, context.extensionPath);

          const csvFilePath = path.join(
            context.extensionPath,
            "src",
            "languages list culture.csv"
          );

          const languagefiles: string[] = getLanguagesfiles(
            path.join(
              vscode.workspace.rootPath!,
              configuration.translationFolder
            )
          );

          const languageDetailsList = readCSV(csvFilePath);
          const languageDetails = new Array<Languages>();
          languagefiles.forEach((lang) => {
            let languageDetail = languageDetailsList.find(
              (item) => item["Culture"].toUpperCase() === lang.toUpperCase()
            );
            if (!languageDetail) {
              languageDetail = {} as Languages;
              languageDetail.Culture = lang;
              languageDetail.Direction = "ltr";
              languageDetail.English = lang;
              languageDetail.Native = lang;
            }
            languageDetails.push(languageDetail);
          });
          message.languages = languageDetails;
          panel.iconPath = vscode.Uri.file(
            path.join(context.extensionPath, "src", "JTM-Icon.svg")
          );
       
           
              panel.webview.onDidReceiveMessage(
                (msg) => {
                  if(msg === 'started'){
                    console.log("*** msg ***");
                    console.log(msg);
                    console.log("________________________________");
                    panel.webview.postMessage(message);
                  }else{
                  console.log("*** msg ***");
                  console.log(msg);
                  console.log("________________________________");
                }
                },
                undefined,
                context.subscriptions
              );
           
        });
    }
  );

  context.subscriptions.push(disposable);
}

function _getHtmlForWebview(panel: any, extensionPath: any) {
  // path to dist folder
  const appDistPath = path.join(
    extensionPath,
    "src",
    "webview",
    "dist",
    "jtw-webview"
  );
  const appDistPathUri = vscode.Uri.file(appDistPath);

  // path as uri
  const baseUri = panel.webview.asWebviewUri(appDistPathUri);

  // get path to index.html file from dist folder
  const indexPath = path.join(appDistPath, "index.html");

  // read index file from file system
  let indexHtml = fs.readFileSync(indexPath, { encoding: "utf8" });

  // update the base URI tag
  indexHtml = indexHtml.replace(
    '<base href="/">',
    `<base href="${String(baseUri)}/">`
  );

  return indexHtml;
}

function getLanguagesfiles(dir: string) {
  const fileList: string[] = [];
  fs.readdirSync(dir).forEach((file) => {
    fileList.push(file.replace(".json", ""));
  });
  fileList.sort();
  return fileList;
}

function readCSV(filePath: string): Array<Languages> {
  const csvFile = fs.readFileSync(filePath);
  const csvData = csvFile.toString();
  const result = papa.parse<Languages>(csvData, {
    header: true,
  });
  return result.data;
}

function saveTranslation() {}

// this method is called when your extension is deactivated
export function deactivate() {}

interface Languages {
  Culture: string;
  English: string;
  Native: string;
  Direction: string;
}

interface WebviewMessage {
  languages: Array<Languages>;
  TranslationKey: string;
}

interface SaveMessage {
  translationKey: string;
  value: [
    {
      culture: string;
      translationValue: string;
    }
  ];
}
