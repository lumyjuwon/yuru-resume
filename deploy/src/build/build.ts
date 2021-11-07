import { PathMap } from '../pathMap';

import { Utils } from '../utils/utils';

export module Build {
  async function buildReact(): Promise<void> {
    await Utils.exec(`cd ${PathMap.clientPath} && yarn`);
    await Utils.exec(`cd ${PathMap.clientPath} && yarn run build`);
  }

  export async function run() {
    console.log('Running Build');

    await buildReact();

    console.log('Complete Build');
  }
}
