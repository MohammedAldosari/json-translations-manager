<div align="center">

<img src="https://raw.githubusercontent.com/MohammedAldosari/json-translations-manager/master/resources/icon.png" width="300"/>

<h1>JSON Translation Manager</h1>

<h3> The fastest and simplest way manage your translation files</h3>

---

</div>

# What is JSON Translation Manager?

A visual studio code extension to manage internationalization translation files and keep them in sync. it's allow you to edit multiple languages on the same time.

# Installation

1. Open Extensions sidebar panel in Visual Studio Code. View → Extensions
2. Search for JSON Translation Manager
3. Click Install
4. Click Reload

# Usage

To start using JSON Translation Manager you need first to specify the localization (i18n) folder with one language file (e.g. en.json, ar.json, etc.).

The following commands are available in VS Code's command palette:

| ID                                            | Command                                                  |
| --------------------------------------------- | -------------------------------------------------------- |
| `JTM:Initialize or update JTM configration`            | Initialize or update JTM configration                    |
| `JTM:Add translation`         | Allow you to add translation by sipcfy the key and you can use dot (.) notation to make the key a Nested objects                                          |
| `JTM:Add translation from selected text` | Adding translation and assign the selected text as a key |

## Examples

### JTM:Initialize or update JTM configration
This command will create or update the `jtmConfig.json` file on your porject.

<div align="center">

<img src="https://raw.githubusercontent.com/MohammedAldosari/json-translations-manager/master/resources/imgs/config.gif"/>

</div>

### JTM:Add translation
This command will create a translation using the key entered and save it on your translation files on the porject.
> You can use dot (.) notation to make the key a Nested
<div align="center">

<img src="https://raw.githubusercontent.com/MohammedAldosari/json-translations-manager/master/resources/imgs/addTranslation.gif"/>

</div>

### JTM:Add translation from selected text
This command will create a translation from the the selected text and save it on your translation files on the porject.
> You can use dot (.) notation to make the key a Nested
<div align="center">

<img src="https://raw.githubusercontent.com/MohammedAldosari/json-translations-manager/master/resources/imgs/addTranslationFromSelected.gif"/>

</div>

### JTM View
The JTM view lets you manage your translation by (add, rename, delete, refresh)
<div align="center">

<img src="https://raw.githubusercontent.com/MohammedAldosari/json-translations-manager/master/resources/imgs/JTMView.gif"/>

</div>

# Upcoming Features

- Analysing translation usage

# Bugs and Feedback

To report issues with this extension for VS Code, open a bug on GitHub. If you would like to suggest a feature, create a feature request on GitHub.

# Want to Contribute?

Contributions of any kind welcome. Thanks for considering.

# Authors

Made by **Mohammed Hassan Aldosari** follow me in [Twitter](https://twitter.com/mhwdosari)

Enjoy 👍

---
