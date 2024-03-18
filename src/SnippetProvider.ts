import * as vscode from "vscode";
import { TranslationManager } from "./TranslationManager";
import * as fs from "fs";

import { union } from "lodash";

export default class SnippetProvider {
  itemList: vscode.CompletionItem[] = [];
  private translationManager: TranslationManager;

  constructor(_translationManager: TranslationManager) {
    this.translationManager = _translationManager;
    this.createSnippets();
  }

  public ItemProvider(): vscode.CompletionItemProvider {
    return {
      provideCompletionItems: (
        document: vscode.TextDocument,
        position: vscode.Position
      ) => {
        const text = document.lineAt(position).text;
        if (text.includes("JTM") || text.includes("jtm")) {
          return this.itemList;
        }

        return undefined;
      },
    };
  }

  public createSnippets() {
    let translationKeys: string[] = [];
    this.itemList = [];
    if (this.pathExists(this.translationManager.translationPath)) {
      this.translationManager.translations.forEach((translation) => {
        translationKeys = union(
          translationKeys,
          this.getAllPaths(translation.Translations)
        );
      });
    }
    translationKeys.forEach((element) => {
      this.itemList.push({
        label: `JTM: ${element}`,
        detail: "",
        insertText: element,
        kind: vscode.CompletionItemKind.Text,
      });
    });
  }
  private pathExists(p: string): boolean {
    try {
      fs.accessSync(p);
    } catch (err) {
      return false;
    }
    return true;
  }

  getAllPaths = (() => {
    function iterate(
      path: Array<any>,
      isArray: any,
      current: any,
      [key, value]: any
    ): any {
      const currentPath = [...path];
      if (isArray) {
        currentPath.push(`${currentPath.pop()}[${key}]`);
      } else {
        currentPath.push(key);
      }
      if (typeof value === "object" && value !== null) {
        return [...current, ...iterateObject(value, currentPath)];
      } else {
        return [...current, currentPath.join(".")];
      }
    }

    function iterateObject(obj: any, path: Array<any> = []) {
      return Object.entries(obj).reduce(
        iterate.bind(null, path, Array.isArray(obj)),
        []
      );
    }

    return iterateObject;
  })();
}
