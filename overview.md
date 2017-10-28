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
* **Global Match (g)** : _(Optional)_ Perform a global match. Find all matches rather than stopping after the first match.
* **Ignore Case (i)** : _(Optional)_ Select the file to run the Regular Expression searchPerform case-insensitive matching.
* **Multi Line (m)** : _(Optional)_ Perform multi-line matching..
* **Replacement value** : _(Required)_ Enter the value to replace with the regex match.

![Required Configuration Options Supplied](https://raw.githubusercontent.com/kasunkv/regex-match-replace-vsts-task/master/screenshots/screenshot-2.png)