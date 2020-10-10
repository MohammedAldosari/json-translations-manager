import { ILanguage, TranslationManager } from './TranslationManager';
import path from 'path';
import * as vscode from 'vscode';
import * as fs from 'fs';

export interface IWebviewMessage {
  languages: Array<ILanguage>;
  TranslationKey: string;
  value: [
    {
      culture: string;
      translationValue: string;
    }
  ];
}

export interface ISaveMessage {
  translationKey: string;
  value: [
    {
      culture: string;
      translationValue: string;
    }
  ];
}

export class WebViewManager {
  panel: vscode.WebviewPanel | undefined;
  webviewPath: string;
  message = {} as IWebviewMessage;
  context: vscode.ExtensionContext;
  translationManager: TranslationManager;
  constructor(
    _context: vscode.ExtensionContext,
    _translationManager: TranslationManager
  ) {
    this.webviewPath = path.join(
      _context.extensionPath,
      'resources',
      'jtm-webview'
    );
    this.context = _context;
    this.translationManager = _translationManager;
  }
  getHtmlForWebview() {
    const appDistPathUri = vscode.Uri.file(this.webviewPath);
    // path as uri
    const baseUri = this.panel!.webview.asWebviewUri(appDistPathUri);
    // get path to index.html file from dist folder
    const indexPath = path.join(this.webviewPath, 'index.html');

    // read index file from file system
    let indexHtml = fs.readFileSync(indexPath, { encoding: 'utf8' });

    // update the base URI tag
    indexHtml = indexHtml.replace(
      '<base href="/">',
      `<base href="${String(baseUri)}/">`
    );
    indexHtml = indexHtml.replace(
      '/JTM-Icon.svg',
      `${String(baseUri)}/JTM-Icon.svg`
    );
    return indexHtml;
  }

  createWebviewPanel(): vscode.WebviewPanel {
    return vscode.window.createWebviewPanel(
      'angular',
      'Translate',
      vscode.ViewColumn.One,
      {
        localResourceRoots: [
          vscode.Uri.file(this.webviewPath),
          vscode.Uri.file(path.join(this.webviewPath, 'JTM-Icon.svg')),
        ],
        enableScripts: true,
        retainContextWhenHidden: true,
      }
    );
  }

  showTreanslationPanel(key: string, closeActivePanel: boolean = false) {
    this.message = {} as IWebviewMessage;
    this.message.TranslationKey = key;
    if (!this.panel || closeActivePanel === false) {
      this.panel = this.createWebviewPanel();
      this.panel.webview.onDidReceiveMessage(
        (msg) => this.onDidReceiveMessage(msg),
        undefined,
        this.context.subscriptions
      );
      this.panel.onDidDispose(
        () => {
          this.panel = undefined;
        },
        null,
        this.context.subscriptions
      );
    } else {
      this.panel.reveal(vscode.ViewColumn.One, true);
    }
    this.panel.webview.html = this.getHtmlForWebview();

    this.message.languages = this.translationManager.getLanguageDetails();
    this.translationManager.getTranslationValue(this.message);

    this.panel.iconPath = {
      light: vscode.Uri.file(
        path.join(__filename, '..', '..', 'resources', 'light', 'languages.svg')
      ),
      dark: vscode.Uri.file(
        path.join(__filename, '..', '..', 'resources', 'dark', 'languages.svg')
      ),
    };
    if (closeActivePanel) {
      this.panel.webview.postMessage(this.message);
    }
  }

  onDidReceiveMessage(_msg: any) {
    if (_msg === 'started') {
      this.panel!.webview.postMessage(this.message);
    } else if ((_msg as ISaveMessage).translationKey) {
      this.translationManager.saveTranslation(_msg);
      this.panel!.webview.postMessage('Saved');
    }
  }
}
