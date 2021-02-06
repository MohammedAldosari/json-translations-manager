import * as vscode from "vscode";
import { TranslationManager } from './TranslationManager';
import * as fs from 'fs';
import _ from 'lodash';

export default class HoverProvider {

    static translationManager: TranslationManager;
    constructor(_context: vscode.ExtensionContext, _translationManager: TranslationManager) {
        HoverProvider.translationManager = _translationManager;


    }
    static getSelectedText(): string {
        const editor = vscode.window.activeTextEditor;
        let selectedText = '';
        if (editor) {
            selectedText = editor.document.getText(editor.selection);
        }

        return selectedText;
    }

    createHoverProvider(): vscode.HoverProvider {

        return {
            provideHover(document, position) {
                const selectedText = HoverProvider.getSelectedText();
                if (!selectedText) {
                    return null;
                }
                const range = document.getWordRangeAtPosition(position);
                if (range === undefined) {
                    return null;
                }

                const text = document.getText(range);
                if (selectedText.includes(text)) {
                    let isNull = true;
                    let returnValue = `${selectedText} \n`;
                    const x = HoverProvider.translationManager.getTranslationValuesFromText(selectedText);
                    for (const [key, value] of Object.entries(x)) {
                        if (value) {
                            isNull = false;
                            returnValue = returnValue + `   ${key}: ${value} \n`;
                        }

                    }
                    if (isNull) {
                        return null;
                    }
                    return new vscode.Hover({
                        language: document.languageId,
                        value: returnValue
                    },
                    );
                }
                else { return null; }
            }
        };
    }


}