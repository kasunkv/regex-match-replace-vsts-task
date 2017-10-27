
import * as Task from 'vsts-task-lib';
import * as path from 'path';
import * as fs from 'fs';


task.setResourcePath(path.join(__dirname, 'task.json'));

async function run(): void {
    const filePath: string = Task.getPathInput('PathToFile', true);
    const regExString: string = Task.getInput('RegEx', true);
    const valueToReplace: string = Task.getInput('ValueToReplace', true);

    const regEx: RegExp = new RegExp(regExString, 'g');
}

run();