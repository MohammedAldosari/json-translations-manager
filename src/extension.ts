import { JTMTreeDataProvider } from './JTMTreeDataProvider';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import * as papa from 'papaparse';
import * as jtmSetting from './jtmSetting';
import * as jsonfile from 'jsonfile';

import _ from 'lodash';

interface WebviewMessage {
  languages: Array<Languages>;
  TranslationKey: string;
  value: [
    {
      culture: string;
      translationValue: string;
    }
  ];
}

let message: WebviewMessage;
let context: vscode.ExtensionContext;
let configuration: any;
let panel: vscode.WebviewPanel;
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(_context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "json-translations-manager" is now active!'
  );
  console.log('version 20.07.18.4');
  context = _context;
  configuration = jtmSetting.getSettings();
  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    'json-translations-manager.translate',
    () => {
      // The code you place here will be executed every time your command is executed

      // get selected text
      message = {} as WebviewMessage;
      vscode.window
        .showInputBox({
          prompt: 'Enter Translation key',
          placeHolder: '',
        })
        .then((key) => showTreanslationPanel(key!));
    }
  );

  context.subscriptions.push(disposable);

  let disposable2 = vscode.commands.registerCommand(
    'json-translations-manager.translateSelected',
    () => {
      // The code you place here will be executed every time your command is executed

      // get selected text
      message = {} as WebviewMessage;
      showTreanslationPanel(getSelectedText());
    }
  );

  context.subscriptions.push(disposable2);

  vscode.window.createTreeView('json-translations-manager', {
    treeDataProvider: new JTMTreeDataProvider(
      path.join(vscode.workspace.rootPath!, configuration.translationFolder)
    ),
  });
  vscode.commands.registerCommand(
    'json-translations-manager.translateTreeSelectedValue',
    (value) => {
      // The code you place here will be executed every time your command is executed

      // get selected text
      message = {} as WebviewMessage;
      showTreanslationPanel(value, true);
    }
  );
}

function _getHtmlForWebview(panel: any, extensionPath: any) {
  // path to dist folder
  const appDistPath = path.join(
    extensionPath,
    'src',
    'webview',
    'dist',
    'jtw-webview'
  );
  const appDistPathUri = vscode.Uri.file(appDistPath);

  // path as uri
  const baseUri = panel.webview.asWebviewUri(appDistPathUri);

  // get path to index.html file from dist folder
  const indexPath = path.join(appDistPath, 'index.html');

  // read index file from file system
  let indexHtml = fs.readFileSync(indexPath, { encoding: 'utf8' });

  // update the base URI tag
  indexHtml = indexHtml.replace(
    '<base href="/">',
    `<base href="${String(baseUri)}/">`
  );

  return indexHtml;
}

function getLanguagesfiles() {
  const dir = path.join(
    vscode.workspace.rootPath!,
    configuration.translationFolder
  );
  const fileList: string[] = [];
  fs.readdirSync(dir).forEach((file) => {
    fileList.push(file.replace('.json', ''));
  });
  fileList.sort();
  return fileList;
}

function readCSV(): Array<Languages> {
  const csvFilePath = path.join(
    context.extensionPath,
    'src',
    'languages list culture.csv'
  );
  const csvFile = fs.readFileSync(csvFilePath);
  const csvData = csvFile.toString();
  const result = papa.parse<Languages>(csvData, {
    header: true,
  });
  return result.data;
}

function showTreanslationPanel(key: string, closeActivePanel: boolean = false) {
  message.TranslationKey = key;
  if (!panel || closeActivePanel === false) {
    panel = createWebviewPanel();
  }
  panel.webview.html = _getHtmlForWebview(panel, context.extensionPath);

  message.languages = getLanguageDetails();
  getTranslationValue(message.languages, message.TranslationKey);
  panel.iconPath = vscode.Uri.file(
    path.join(context.extensionPath, 'src', 'JTM-Icon.svg')
  );
  if (closeActivePanel) {
    panel.webview.postMessage(message);
  }
  panel.webview.onDidReceiveMessage(
    (msg) => onDidReceiveMessage(msg),
    undefined,
    context.subscriptions
  );
}

function getTranslationValue(languages: Languages[], translationKey: string) {
  const dir = path.join(
    vscode.workspace.rootPath!,
    configuration.translationFolder
  );

  languages.forEach((element) => {
    const obj = jsonfile.readFileSync(
      path.join(dir, element.Culture + '.json')
    );

    if (!message.value) {
      message.value = [
        {
          culture: element.Culture,
          translationValue: _.get(obj, translationKey, ''),
        },
      ];
    } else {
      message.value.push({
        culture: element.Culture,
        translationValue: _.get(obj, translationKey, ''),
      });
    }
  });
}

function createWebviewPanel(): vscode.WebviewPanel {
  return vscode.window.createWebviewPanel(
    'angular',
    'Translate',
    vscode.ViewColumn.One,
    {
      localResourceRoots: [
        vscode.Uri.file(
          path.join(
            context.extensionPath,
            'src',
            'webview',
            'dist',
            'jtw-webview'
          )
        ),
      ],
      enableScripts: true,
      retainContextWhenHidden: true,
    }
  );
}

function getSelectedText(): string {
  const editor = vscode.window.activeTextEditor;
  let selectedText = '';
  if (editor) {
    selectedText = editor.document.getText(editor.selection);
  }
  return selectedText;
}

function getLanguageDetails() {
  const languagefiles: string[] = getLanguagesfiles();

  const languageDetailsList = readCSV();
  const languageDetails = new Array<Languages>();
  languagefiles.forEach((lang) => {
    let languageDetail = languageDetailsList.find(
      (item) => item['Culture'].toUpperCase() === lang.toUpperCase()
    );
    if (!languageDetail) {
      languageDetail = {} as Languages;
      languageDetail.Culture = lang;
      languageDetail.Direction = 'ltr';
      languageDetail.English = lang;
      languageDetail.Native = lang;
    }
    languageDetails.push(languageDetail);
  });
  return languageDetails;
}

function onDidReceiveMessage(_msg: any) {
  if (_msg === 'started') {
    panel.webview.postMessage(message);
  } else if ((_msg as SaveMessage).translationKey) {
    saveTranslation(_msg);
    panel.webview.postMessage('Saved');
  }
}

function saveTranslation(data: SaveMessage) {
  const dir = path.join(
    vscode.workspace.rootPath!,
    configuration.translationFolder
  );
  data.value.forEach((element) => {
    jsonfile.readFile(path.join(dir, element.culture + '.json')).then((obj) => {
      _.set(obj, data.translationKey, element.translationValue);
      jsonfile.writeFile(path.join(dir, element.culture + '.json'), obj, {
        spaces: 2,
        EOL: '\r\n',
      });
    });
  });
}

// this method is called when your extension is deactivated
export function deactivate() {}

interface Languages {
  Culture: string;
  English: string;
  Native: string;
  Direction: string;
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
