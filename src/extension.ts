import { TreeDataProvider } from './TreeDataProvider';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import * as papa from 'papaparse';
import * as jsonfile from 'jsonfile';

import _ from 'lodash';
import { ConfigurationManager } from './ConfigurationManager';

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

let treeDataProvider: TreeDataProvider;
let panel: vscode.WebviewPanel | undefined;
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
  const configurationManager = new ConfigurationManager(
    vscode.workspace.workspaceFolders![0].uri.fsPath
  );
  if (!configurationManager.configuration) {
    askUserToSelectTranslationPath(configurationManager);
  }
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
        .then(async (key) =>
          showTreanslationPanel(key!, configurationManager.translationPath)
        );
    }
  );

  context.subscriptions.push(disposable);

  let disposable2 = vscode.commands.registerCommand(
    'json-translations-manager.translateSelected',
    async () => {
      // The code you place here will be executed every time your command is executed

      // get selected text
      message = {} as WebviewMessage;
      showTreanslationPanel(
        getSelectedText(),
        configurationManager.translationPath
      );
    }
  );

  context.subscriptions.push(disposable2);
  treeDataProvider = new TreeDataProvider(configurationManager.translationPath);
  const tv = vscode.window.createTreeView('json-translations-manager', {
    treeDataProvider,
  });

  vscode.commands.registerCommand(
    'json-translations-manager.translateTreeSelectedValue',
    async (value) => {
      // The code you place here will be executed every time your command is executed

      // get selected text
      message = {} as WebviewMessage;
      showTreanslationPanel(value, configurationManager.translationPath, true);
    }
  );
  vscode.commands.registerCommand(
    'json-translations-manager.refreshEntry',
    () => treeDataProvider.refresh()
  );
  vscode.commands.registerCommand('json-translations-manager.addEntry', () =>
    treeDataProvider.add()
  );
  vscode.commands.registerCommand(
    'json-translations-manager.deleteEntry',
    (value) => treeDataProvider.delete(value)
  );
  vscode.commands.registerCommand(
    'json-translations-manager.editEntry',
    (value) => {
      treeDataProvider.rename(value);
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

function getLanguagesfiles(translationPath: string) {
  const fileList: string[] = [];
  fs.readdirSync(translationPath).forEach((file) => {
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

function showTreanslationPanel(
  key: string,
  translationPath: string,
  closeActivePanel: boolean = false
) {
  message.TranslationKey = key;
  if (!panel || closeActivePanel === false) {
    panel = createWebviewPanel();
    panel.webview.onDidReceiveMessage(
      (msg) => onDidReceiveMessage(msg, translationPath),
      undefined,
      context.subscriptions
    );
    panel.onDidDispose(
      () => {
        panel = undefined;
      },
      null,
      context.subscriptions
    );
  } else {
    panel.reveal(vscode.ViewColumn.One, true);
  }
  panel.webview.html = _getHtmlForWebview(panel, context.extensionPath);

  message.languages = getLanguageDetails(translationPath);
  getTranslationValue(
    message.languages,
    message.TranslationKey,
    translationPath
  );
  panel.iconPath = vscode.Uri.file(
    path.join(context.extensionPath, 'src', 'JTM-Icon.svg')
  );
  if (closeActivePanel) {
    panel.webview.postMessage(message);
  }
}

function getTranslationValue(
  languages: Languages[],
  translationKey: string,
  translationPath: string
) {
  languages.forEach((element) => {
    const obj = jsonfile.readFileSync(
      path.join(translationPath, element.Culture + '.json')
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

function getLanguageDetails(translationPath: string) {
  const languagefiles: string[] = getLanguagesfiles(translationPath);

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

function onDidReceiveMessage(_msg: any, translationPath: string) {
  if (_msg === 'started') {
    panel!.webview.postMessage(message);
  } else if ((_msg as SaveMessage).translationKey) {
    saveTranslation(_msg, translationPath);
    panel!.webview.postMessage('Saved');
  }
}

function saveTranslation(data: SaveMessage, translationPath: string) {
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
  treeDataProvider.refresh();
}

function askUserToSelectTranslationPath(
  configurationManager: ConfigurationManager
) {
  vscode.window
    .showOpenDialog({
      canSelectMany: false,
      canSelectFiles: false,
      canSelectFolders: true,
    })
    .then((fileUri) => {
      if (fileUri && fileUri[0]) {
        const folderpath = fileUri[0].fsPath.replace(
          vscode.workspace.workspaceFolders![0].uri.fsPath,
          ''
        );

        configurationManager.set({
          translationFolder: folderpath,
          sort: false,
        });
        console.log('Settings Saved!');
        vscode.window.showInformationMessage(
          'Translation folder configuration Saved successfully'
        );
      }
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
