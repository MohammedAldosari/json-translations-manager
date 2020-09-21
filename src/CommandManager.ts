import { WebViewManager } from './WebViewManager';
import * as vscode from 'vscode';

const namespace = 'json-translations-manager';
export class CommandManager {
  private webViewManager: WebViewManager;
  constructor(_webViewManager: WebViewManager) {
    this.webViewManager = _webViewManager;
  }
  Translate = async () => {
    await this.checkConfigration();
    vscode.window
      .showInputBox({
        prompt: 'Enter Translation key',
        placeHolder: 'Use dot (.) notation to make the key a Nested objects',
      })
      .then((key) => this.webViewManager.showTreanslationPanel(key!));
  };

  TranslateSelected = async () => {
    await this.checkConfigration();
    this.webViewManager.showTreanslationPanel(this.getSelectedText());
  };

  TranslateTreeSelectedValue = async (value: any) => {
    await this.checkConfigration();
    this.webViewManager.showTreanslationPanel(value, true);
  };

  private getSelectedText(): string {
    const editor = vscode.window.activeTextEditor;
    let selectedText = '';
    if (editor) {
      selectedText = editor.document.getText(editor.selection);
    }
    return selectedText;
  }

  private async checkConfigration() {
    if (
      !this.webViewManager.translationManager.configurationManager.configuration
    ) {
      await vscode.commands.executeCommand('json-translations-manager.init');
      vscode.commands.executeCommand(
        'setContext',
        `${namespace}:noConfig`,
        false
      );
    }
  }
}
