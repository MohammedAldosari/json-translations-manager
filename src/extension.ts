import { TranslationManager } from './TranslationManager';
import { TreeDataProvider } from './TreeDataProvider';
import * as vscode from 'vscode';
import { ConfigurationManager } from './ConfigurationManager';
import { WebViewManager } from './WebViewManager';
import { CommandManager } from './CommandManager';

const namespace = 'json-translations-manager';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(_context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "json-translations-manager" is now active!'
  );
  console.log('version 20.07.18.4');

  const configurationManager = new ConfigurationManager(
    vscode.workspace.workspaceFolders![0].uri.fsPath
  );
  if (!configurationManager.configuration) {
    askUserToSelectTranslationPath(configurationManager);
  }
  const translationManager = new TranslationManager(
    _context.extensionPath,
    configurationManager.translationPath
  );
  const commandManager = new CommandManager(
    new WebViewManager(_context, translationManager)
  );

  _context.subscriptions.push(
    vscode.commands.registerCommand(
      `${namespace}.translate`,
      commandManager.Translate
    )
  );

  _context.subscriptions.push(
    vscode.commands.registerCommand(
      `${namespace}.translateSelected`,
      commandManager.TranslateSelected
    )
  );

  const treeDataProvider = new TreeDataProvider(translationManager);
  vscode.window.createTreeView(namespace, {
    treeDataProvider,
  });

  vscode.commands.registerCommand(
    `${namespace}.translateTreeSelectedValue`,
    commandManager.TranslateTreeSelectedValue
  );
  vscode.commands.registerCommand(`${namespace}.refreshEntry`, () =>
    treeDataProvider.refresh()
  );
  vscode.commands.registerCommand(`${namespace}.addEntry`, () =>
    treeDataProvider.add()
  );
  vscode.commands.registerCommand(`${namespace}.deleteEntry`, (value) =>
    treeDataProvider.delete(value)
  );
  vscode.commands.registerCommand(`${namespace}.editEntry`, (value) => {
    treeDataProvider.rename(value);
  });
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
        vscode.window.showInformationMessage(
          'Translation folder configuration Saved successfully'
        );
      }
    });
}

// this method is called when your extension is deactivated
export function deactivate() {}
