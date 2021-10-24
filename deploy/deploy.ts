import { Afterbuild } from './src/afterbuild';
import { Build } from './src/build';
import { validatePathMap } from './src/pathMap';
import { Prebuild } from './src/prebuild';

(async () => {
  await validatePathMap();

  await Prebuild.run();
  await Build.run();
  await Afterbuild.run();
})();
