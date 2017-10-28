import * as Task from 'vsts-task-lib';

export class Helper {
    constructor() {}

    static WriteConsoleInformation(message: string, param?: any, debug: boolean = false): void {
        const combinedMessage = param ? message + param : message;
        console.info(combinedMessage);
        if (debug) {
            Task.debug(combinedMessage);
        }
    }

    static WriteConsoleError(message: string, param?: any): void {
        const combinedMessage = param ? message + param : message;
        console.error(combinedMessage);
        Task.error(combinedMessage);
    }
}