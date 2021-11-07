import { PathMap } from '../pathMap';
import { Args } from '../utils/args';
import { Utils } from '../utils/utils';

export module Build {
  async function buildReact(): Promise<void> {
    if (!Args.args.boolean['-is_github_action']) {
      await Utils.exec(`cd ${PathMap.clientPath} && yarn`);
    }
    await Utils.exec(`cd ${PathMap.clientPath} && yarn run build`);
  }

  export async function run() {
    console.log('Running Build');

    await buildReact();

    console.log('Complete Build');
  }
}
