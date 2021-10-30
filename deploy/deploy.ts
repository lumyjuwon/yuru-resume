import { Build } from './src/build/build';
import { Afterbuild } from './src/build/afterbuild';
import { Prebuild } from './src/build/prebuild';
import { Args } from './src/args';
import { User } from './src/config';
import { PathMap, validatePathMap } from './src/pathMap';
import { Converter } from './src/thirdParties/converter';

(async () => {
  await validatePathMap();
  await User.load();

  const args = Args.parseArgs(process.argv);
  if (args['-prebuild']) {
    await Prebuild.run();
    return;
  }

  await Prebuild.run();
  await Build.run();
  await Afterbuild.run({
    pagePath: User.config.setting.build.pagePath
  });

  await Converter.pdf({
    htmlPath: `${PathMap.root}${User.config.setting.pdf.htmlPath}`,
    outputPath: `${PathMap.root}${User.config.setting.pdf.outputPath}`,
    format: User.config.setting.pdf.format
  });
})();
