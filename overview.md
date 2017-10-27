Visual Studio Team Services Task to replace file content with a regular expression match.

## Using RegEx Match & Replace Task

Follow the instructions given below to add and configure RegEx Match & Replace Task in your build/release pipeline.

### Add the RegEx Match & Replace Task
Install the RegEx Match & Replace Task in to your Visual Studio Team Services account and search for the task in the available tasks. The task will appear in the _Utility_ section of the task list. Add it to your build/release task.

## Required Configuration
RegEx Match & Replace Task has some required configuration options that needed to be provided.

These configurations are found in the _**RegEx Match & Replace**_ section.

![Required Configuration Options]()

### Required Options
* **Path to File** : Select the file/files to replace content.
* **Regular Expression to use** : Enter the regular expression. [RegEx Documentation]()
* **Replacement value** : Enter the value to replace with the regex match.