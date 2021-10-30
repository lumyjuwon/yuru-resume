import childProcess from 'child_process';

export module Utils {
  export function exec(command: string): Promise<string> {
    return new Promise((resolve, reject) => {
      childProcess.exec(command, (error, stdout, stderr) => {
        if (error) {
          reject(error);
        }

        if (stderr) {
          reject(stderr);
        }

        resolve(stdout);
      });
    });
  }
}
