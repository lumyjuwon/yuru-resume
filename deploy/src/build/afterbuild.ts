import fsExtra from 'fs-extra';

import { PathMap } from '../pathMap';

interface Options {
  pagePath: string;
}

export module Afterbuild {
  async function release(pagePath: string) {
    const buildNames = fsExtra.readdirSync(`${PathMap.clientPath}/build`);
    const moves = [];

    for (const name of buildNames) {
      const srcPath = `${PathMap.clientPath}/build/${name}`;
      const destPath = `${PathMap.root}/${pagePath}/${name}`;

      moves.push(fsExtra.move(srcPath, destPath, { overwrite: true }));
    }

    await Promise.all(moves);
  }

  export async function run(options: Options) {
    console.log('Running Afterbuild');

    await release(options.pagePath);

    console.log('Complete Afterbuild');
  }
}
