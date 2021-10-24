import { Afterbuild } from './src/afterbuild';
import { Build } from './src/build';
import { Prebuild } from './src/prebuild';

(async () => {
  await Prebuild.run();
  await Build.run();
  await Afterbuild.run();
})();
