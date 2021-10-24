import childProcess from 'child_process';
import { PathMap } from './pathMap';

export module Build {
  export async function run() {
    childProcess.execSync(`cd ${PathMap.resumePath} & yarn build`);
  }
}
