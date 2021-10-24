import childProcess from 'child_process';
import { PathMap } from './pathMap';

export module Build {
  function buildReact(): Promise<void> {
    return new Promise((resolve, reject) => {
      childProcess.exec(`cd ${PathMap.resumePath} && yarn run build`, (error, stdout, stderr) => {
        if (error) {
          reject(error);
        }

        if (stderr) {
          reject(stderr);
        }

        resolve();
      });
    });
  }

  export async function run() {
    console.log('Running Build');

    await buildReact();

    console.log('Complete Build');
  }
}
