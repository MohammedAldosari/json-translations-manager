import { WebViewManager } from './WebViewManager';
import * as vscode from 'vscode';

export class CommandManager {
  private webViewManager: WebViewManager;
  constructor(_webViewManager: WebViewManager) {
    this.webViewManager = _webViewManager;
  }
  Translate = () => {
    vscode.window
      .showInputBox({
        prompt: 'Enter Translation key',
        placeHolder: 'Use dot (.) notation to make the key a Nested objects',
      })
      .then((key) => this.webViewManager.showTreanslationPanel(key!));
  };

  TranslateSelected = () => {
    this.webViewManager.showTreanslationPanel(this.getSelectedText());
  };

  TranslateTreeSelectedValue = (value: any) => {
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
}
