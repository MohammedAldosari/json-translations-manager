import * as vscode from 'vscode';
import { ConfigurationManager } from './ConfigurationManager';
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

if(vscode.workspace.workspaceFolders !== undefined){
  const configurationManager = new ConfigurationManager(
    vscode.workspace.workspaceFolders![0].uri.fsPath
  );

  if (!configurationManager.configuration) {
    vscode.commands.executeCommand('setContext', `${namespace}:noConfig`, true);
  }

  const commandManager = new CommandManager(_context, configurationManager);
  commandManager.RegisterCommands(_context, configurationManager);
  }
}

// this method is called when your extension is deactivated
export function deactivate() {}
