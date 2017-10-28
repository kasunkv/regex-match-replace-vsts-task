
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

    //Task.debug(`File path: ${filePath}`);
    Helper.WriteConsoleInformation('File path: ', filePath);
    //Task.debug(`Regular Expression: ${regExString}`);
    Helper.WriteConsoleInformation('Regular Expression: ', regExString);
    //Task.debug(`Replacement Value: ${valueToReplace}`);
    Helper.WriteConsoleInformation('Replacement Value: ', valueToReplace);

    //const regEx: RegExp = new RegExp(regExString, 'g');

    fs.readFile(filePath, 'utf8', (readError, data) => {
        if (readError) {
            Task.setResult(Task.TaskResult.Failed, `Failed to read the file. File path: ${filePath}`);
            return;
        }

        //const modifiedContent = data.replace(regEx, valueToReplace);
        const modifiedContent = RegExMatch.MatchAndReplace(data, regExString, valueToReplace);

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