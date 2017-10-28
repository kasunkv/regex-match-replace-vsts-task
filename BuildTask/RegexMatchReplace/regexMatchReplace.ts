
import * as Task from 'vsts-task-lib';
import * as path from 'path';
import * as fs from 'fs';

import { Helper } from './helper';
import { RegExMatch } from './regExMatch';

Task.setResourcePath(path.join(__dirname, 'task.json'));

async function run(): Promise<void> {
    const filePath: string = Task.getPathInput('PathToFile', true);
    const regExString: string = Task.getInput('RegEx', true);
    const valueToReplace: string = Task.getInput('ValueToReplace', true);
    const global: boolean = Task.getBoolInput('Global');
    const ignoreCase: boolean = Task.getBoolInput('IgnoreCase');
    const multiLine: boolean = Task.getBoolInput('MultiLine');

    Helper.WriteConsoleInformation('File path: ', filePath);
    Helper.WriteConsoleInformation('Regular Expression: ', regExString);
    Helper.WriteConsoleInformation('Replacement Value: ', valueToReplace);

    fs.readFile(filePath, 'utf8', (readError, data) => {
        if (readError) {
            Task.setResult(Task.TaskResult.Failed, `Failed to read the file. File path: ${filePath}`);
            return;
        }

        // Match and Replace
        const modifiedContent = RegExMatch.MatchAndReplace(data, regExString, valueToReplace, global, ignoreCase, multiLine);

        fs.writeFile(filePath, modifiedContent, 'utf8', writeError => {
            if (writeError) {
                Task.setResult(Task.TaskResult.Failed, `Failed to write the file. Error: ${writeError.message}`);
                return;
            }

            Task.setResult(Task.TaskResult.Succeeded, 'RegEx Match Replace Complete.');
        });
    });

}

run();