import { Afterbuild } from './src/afterbuild';
import { Args } from './src/args';
import { Build } from './src/build';
import { validatePathMap } from './src/pathMap';
import { Prebuild } from './src/prebuild';

(async () => {
  const args = Args.parseArgs(process.argv);

  if (args['-prebuild']) {
    await Prebuild.run();
    return;
  }

  await validatePathMap();

  await Prebuild.run();
  await Build.run();
  await Afterbuild.run();
})();
