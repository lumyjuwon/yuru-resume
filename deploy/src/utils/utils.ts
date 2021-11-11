import childProcess from 'child_process';

export module Utils {
  export function exec(command: string): Promise<string> {
    return new Promise((resolve, reject) => {
      console.log(`Running Command: ${command}`);
      childProcess.exec(command, (error, stdout, stderr) => {
        if (error) {
          reject(error);
        }

        if (stderr) {
          console.error(stderr);
        }

        resolve(stdout);
      });
    });
  }
}
