import { WebViewManager } from './WebViewManager';
import * as vscode from 'vscode';

export class CommandManager {
  private translationPath: string;
  private webViewManager: WebViewManager;
  constructor(_translationPath: string, _webViewManager: WebViewManager) {
    this.translationPath = _translationPath;
    this.webViewManager = _webViewManager;
  }
  Translate = () => {
    vscode.window
      .showInputBox({
        prompt: 'Enter Translation key',
        placeHolder: '',
      })
      .then((key) =>
        this.webViewManager.showTreanslationPanel(key!, this.translationPath)
      );
  };

  TranslateSelected = () => {
    this.webViewManager.showTreanslationPanel(
      this.getSelectedText(),
      this.translationPath
    );
  };

  TranslateTreeSelectedValue = (value: any) => {
    this.webViewManager.showTreanslationPanel(
      value,
      this.translationPath,
      true
    );
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
