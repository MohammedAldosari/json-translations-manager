import { WebViewManager } from './WebViewManager';
import * as vscode from 'vscode';
import { ConfigurationManager } from './ConfigurationManager';
import { TranslationManager } from './TranslationManager';
import { TreeDataProvider } from './TreeDataProvider';
import SnippetProvider from './SnippetProvider';
import { HoverProvider } from 'vscode';
import JTMHoverProvider from './JTMHoverProvider';


const namespace = 'json-translations-manager';
export class CommandManager {
  private webViewManager!: WebViewManager;
  private translationManager!: TranslationManager;

  private treeDataProvider!: TreeDataProvider;
  private hoverProvider!: HoverProvider;

  private languageIdentifiers = ['coffeescript', 'csharp', 'go', 'handlebars', 'haml', 'html', 'java', 'javascript', 'javascriptreact, jsx', 'php', 'jade, pug', 'python', 'razor', 'ruby', 'rust', 'swift', 'typescript', 'typescriptreact', 'vue', 'vue-html'];

  constructor(
    _context: vscode.ExtensionContext,
    _configurationManager: ConfigurationManager
  ) {

    this.init(_context, _configurationManager);

  }

  init(
    _context: vscode.ExtensionContext,
    configurationManager: ConfigurationManager
  ) {
    this.translationManager = new TranslationManager(
      _context.extensionPath,
      configurationManager
    );
    const snippetProvider = new SnippetProvider(this.translationManager);
    _context.subscriptions.push(
      vscode.languages.registerCompletionItemProvider(
        this.languageIdentifiers,
        snippetProvider.ItemProvider(),
        'JTM', 'jtm'
      )
    );
    if (!this.hoverProvider) {
      this.hoverProvider = new JTMHoverProvider(_context, this.translationManager).createHoverProvider();
      _context.subscriptions.push(
        vscode.languages.registerHoverProvider(this.languageIdentifiers, this.hoverProvider),
      );
    }
    this.webViewManager = new WebViewManager(_context, this.translationManager);
    this.treeDataProvider = new TreeDataProvider(this.translationManager);
    vscode.window.createTreeView(namespace, {
      treeDataProvider: this.treeDataProvider,
    });
    this.treeDataProvider.onRefresh.clear();
    this.treeDataProvider.onRefresh.subscribe(() => {
      this.treeDataProvider = new TreeDataProvider(this.translationManager);
      vscode.window.createTreeView(namespace, {
        treeDataProvider: this.treeDataProvider,
      });
      snippetProvider.createSnippets();
    }
    );
  }
  Translate = async (value?: string) => {
    await this.checkConfigration();
    let key: any;
    if (value) {
      value = value + '.';

      key = await vscode.window.showInputBox({
        prompt: 'Enter Translation key',
        placeHolder: 'Use dot (.) notation to make the key a Nested objects',
        value,
        valueSelection: [value!.length, value!.length]
      });
    }
    else {

      key = await vscode.window.showInputBox({
        prompt: 'Enter Translation key',
        placeHolder: 'Use dot (.) notation to make the key a Nested objects'
      });
    }
    if (key) {
      await this.webViewManager.showTreanslationPanel(key!);
    }
  };

  TranslateSelected = async () => {
    await this.checkConfigration();
    await this.webViewManager.showTreanslationPanel(this.getSelectedText());
  };

  TranslateTreeSelectedValue = async (value: any) => {
    await this.checkConfigration();
    await this.webViewManager.showTreanslationPanel(value, true);
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
      await this.askUserToSelectTranslationPath(
        this.webViewManager.context,
        this.webViewManager.translationManager.configurationManager
      );
    }
  }

  public RegisterCommands(
    _context: vscode.ExtensionContext,
    configurationManager: ConfigurationManager
  ) {
    _context.subscriptions.push(
      vscode.commands.registerCommand(`${namespace}.translate`, this.Translate)
    );
    _context.subscriptions.push(
      vscode.commands.registerCommand(`${namespace}.config`, async () => {
        await this.askUserToSelectTranslationPath(
          _context,
          configurationManager
        );
      })
    );

    _context.subscriptions.push(
      vscode.commands.registerCommand(
        `${namespace}.translateSelected`,
        this.TranslateSelected
      )
    );

    _context.subscriptions.push(
      vscode.commands.registerCommand(
        `${namespace}.translateTreeSelectedValue`,
        this.TranslateTreeSelectedValue
      )
    );

    _context.subscriptions.push(
      vscode.commands.registerCommand(`${namespace}.refreshEntry`, () =>
        this.treeDataProvider.refresh()
      )
    );

    _context.subscriptions.push(
      vscode.commands.registerCommand(`${namespace}.addEntry`, (value) =>
        this.treeDataProvider.add(value)
      )
    );

    _context.subscriptions.push(
      vscode.commands.registerCommand(`${namespace}.deleteEntry`, (value) =>
        this.treeDataProvider.delete(value)
      )
    );

    _context.subscriptions.push(
      vscode.commands.registerCommand(`${namespace}.editEntry`, (value) => {
        this.treeDataProvider.rename(value);
      })
    );

    _context.subscriptions.push(
      vscode.commands.registerCommand(`${namespace}.collapseEntry`, () => {
        this.treeDataProvider.collapseEntry();
      })
    );
    _context.subscriptions.push(
      vscode.commands.registerCommand(`${namespace}.expandEntry`, () => {
        this.treeDataProvider.expandEntry();
      })
    );
  }

  public async askUserToSelectTranslationPath(
    _context: vscode.ExtensionContext,
    configurationManager: ConfigurationManager
  ) {
    const fileUri = await vscode.window.showOpenDialog({
      defaultUri: vscode.workspace.workspaceFolders![0].uri,
      canSelectMany: false,
      canSelectFiles: false,
      canSelectFolders: true,
    });

    if (fileUri && fileUri[0]) {
      const folderpath = fileUri[0].fsPath.replace(
        vscode.workspace.workspaceFolders![0].uri.fsPath,
        ''
      );
      await this.askUserToEnableSort(
        _context,
        configurationManager,
        folderpath
      );
    }
  }
  public async askUserToEnableSort(
    _context: vscode.ExtensionContext,
    configurationManager: ConfigurationManager,
    folderpath: string
  ) {
    const sort = {
      enable: 'Yes',
      disable: 'No',
    };
    const selection = await vscode.window.showQuickPick(
      [sort.enable, sort.disable],
      {
        canPickMany: false,
        placeHolder: 'Do you want to Sort translation keys alphabetically?',
      }
    );

    if (selection === sort.enable) {
      configurationManager.set({
        translationFolder: folderpath,
        sort: true,
      });
    } else if (selection === sort.disable) {
      configurationManager.set({
        translationFolder: folderpath,
        sort: false,
      });
    }
    vscode.commands.executeCommand(
      'setContext',
      `${namespace}:noConfig`,
      false
    );
    this.init(_context, configurationManager);
    //  this.RegisterCommands(_context, configurationManager);
    vscode.window.showInformationMessage(
      'Translation folder configuration Saved successfully'
    );
  }
}
