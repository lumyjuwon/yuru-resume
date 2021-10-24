import fsExtra from 'fs-extra';
import { PathMap } from './pathMap';

export module Afterbuild {
  async function release() {
    const config = require(`${PathMap.userPath}/setting.json`);

    const buildNames = fsExtra.readdirSync(`${PathMap.resumePath}/build`);
    const moves = [];

    for (const name of buildNames) {
      const srcPath = `${PathMap.resumePath}/build/${name}`;
      const destPath = `${PathMap.root}/${config.pagePath}/${name}`;
      moves.push(fsExtra.move(srcPath, destPath, { overwrite: true }));
    }

    await Promise.all(moves);
  }

  export async function run() {
    console.log('Running Afterbuild');

    await release();

    console.log('Complete Afterbuild');
  }
}
