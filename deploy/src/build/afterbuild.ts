import fsExtra from 'fs-extra';

import { PathMap } from '../pathMap';
import { User } from '../user';

export module Afterbuild {
  export interface Options {}

  async function release() {
    const buildNames = fsExtra.readdirSync(`${PathMap.clientPath}/build`);
    const moves = [];

    for (const name of buildNames) {
      const srcPath = `${PathMap.clientPath}/build/${name}`;
      const destPath = `${PathMap.root}/${User.config.setting.build.pagePath}/${name}`;

      moves.push(fsExtra.move(srcPath, destPath, { overwrite: true }));
    }

    await Promise.all(moves);
  }

  export async function run(options?: Options) {
    console.log('Running Afterbuild');

    await release();

    console.log('Complete Afterbuild');
  }
}
