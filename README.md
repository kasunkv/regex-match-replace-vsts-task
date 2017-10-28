![Visual Studio Team Services](https://kasunkodagoda.visualstudio.com/_apis/public/build/definitions/a6819d70-02f9-4711-8ff6-ae44bb52a8d1/32/badge)
[![Visual Studio Marketplace](https://img.shields.io/badge/Visual%20Studio%20Marketplace-install-brightgreen.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=kasunkodagoda.regex-match-replace)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/kasunkv/owasp-zap-vsts-task/blob/master/LICENSE.md)
# RegEx Match & Replace Task
Visual Studio Team Services Task to replace file content with a regular expression match.

## Using RegEx Match & Replace Task

Follow the instructions given below to add and configure RegEx Match & Replace Task in your build/release pipeline.

### Add the RegEx Match & Replace Task
Install the RegEx Match & Replace Task in to your Visual Studio Team Services account and search for the task in the available tasks. The task will appear in the _Utility_ section of the task list. Add it to your build/release task.

## Required Configuration
RegEx Match & Replace Task has some required configuration options that needed to be provided. The required configuration options are;
* Path to File
* Regular Expression to use
* Replacement value

These configurations are found in the _**RegEx Match & Replace**_ section.

![Required Configuration Options](https://raw.githubusercontent.com/kasunkv/regex-match-replace-vsts-task/master/screenshots/screenshot-1.png)

### Configuration Options
* **Path to File** : _(Required)_ Select the file to run the Regular Expression search. 
* **Regular Expression to use** : _(Required)_ Enter the regular expression without the modifiers. _(Eg. (?:\d*\.)?\d+)_ Learn more about Regular Expressions from [Microsoft RegEx Quick Reference](https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference) and test your Regular Expressions online using [RegExr](https://regexr.com/)
* **Replacement value** : _(Required)_ Enter the value to replace with the regex match.

![Required Configuration Options Supplied](https://raw.githubusercontent.com/kasunkv/regex-match-replace-vsts-task/master/screenshots/screenshot-2.png)