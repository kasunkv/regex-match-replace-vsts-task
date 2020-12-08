import * as Task from "vsts-task-lib";
import * as path from "path";
import * as fs from "fs";
import * as sentry from "@sentry/node";
import { glob } from "glob";

import { Helper } from "./helper";
import { RegExMatch } from "./regExMatch";

Task.setResourcePath(path.join(__dirname, "task.json"));

async function run(): Promise<void> {
  sentry.init({
    dsn: "SENTRY_DSN",
    release: "TASK_RELEASE_VERSION",
  });

  const filePath: string = Task.getPathInput("PathToFile", true);
  const regExString: string = Task.getInput("RegEx", true);
  const valueToReplace: string = Task.getInput("ValueToReplace", true);
  const global: boolean = Task.getBoolInput("Global");
  const ignoreCase: boolean = Task.getBoolInput("IgnoreCase");
  const multiLine: boolean = Task.getBoolInput("MultiLine");
  const workingDirectory: string = Task.getPathInput("WorkingDirectory");

  Helper.WriteConsoleInformation(`File path: ${filePath}`, false);
  Helper.WriteConsoleInformation(`Regular Expression: ${regExString}`, false);
  Helper.WriteConsoleInformation(`Replacement Value: ${valueToReplace}`, false);
  glob(
    filePath,
    {
      cwd: workingDirectory === '' ? undefined : workingDirectory,
    },
    (globError, files) => {
      if (globError) {
        Task.setResult(
          Task.TaskResult.Failed,
          `Something went wrong with your filepath pattern. File path: ${filePath}`
        );
        return;
      }
      if (files.length > 0) {
        const operations = files.map((file) => {
          console.log(`File has been found: ${file}`);
          return () =>
            new Promise<string>((resolve, reject) => {
              fs.readFile(file, "utf8", (readError, data) => {
                if (readError) {
                  reject(readError);
                  return;
                }
                // Match and Replace
                const modifiedContent = RegExMatch.MatchAndReplace(
                  data,
                  regExString,
                  valueToReplace,
                  global,
                  ignoreCase,
                  multiLine
                );

                fs.writeFile(file, modifiedContent, "utf8", (writeError) => {
                  if (writeError) {
                    sentry.captureException(writeError);
                    reject(writeError);
                    return;
                  }
                  resolve(file);
                });
              });
            });
        });
        operations.forEach(async (operation) => {
          try {
            const file = await operation();
            console.log(`File has been modified: ${file}`);
          } catch (ex) {
            console.error(ex);
          }
        });
      } else {
        Task.setResult(
          Task.TaskResult.SucceededWithIssues,
          `No files have been modified. File path: ${filePath}`
        );
      }
    }
  );
}

run().catch((err: any) => {
  sentry.captureException(err);
});
