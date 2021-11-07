import path from 'path';

import { Build } from './src/build/build';
import { Afterbuild } from './src/build/afterbuild';
import { Prebuild } from './src/build/prebuild';
import { Args } from './src/args';
import { User } from './src/user';
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

  // Build
  await Prebuild.run();
  await Build.run();
  await Afterbuild.run({
    pagePath: User.config.setting.build.pagePath
  });

  // Convert
  const htmlPath = `${PathMap.root}${User.config.setting.build.htmlPath}`;
  const resumeFileNames = Object.keys(User.config.resumes).map((fileName: string) => {
    const extname = path.extname(fileName);
    return fileName.replace(extname, '');
  });

  await Converter.load(htmlPath);

  for (const resumeFileName of resumeFileNames) {
    const lang = resumeFileName.replace('.json', '');
    await Converter.pdf({
      lang: lang,
      outputPath: `${PathMap.root}${User.config.setting.pdf.outputPath}/${resumeFileName}.pdf`,
      format: User.config.setting.pdf.format
    });
    await Converter.image({
      lang: lang,
      outputPath: `${PathMap.root}${User.config.setting.image.outputPath}/${resumeFileName}.png`,
      type: 'png'
    });
  }

  await Converter.close();
})();
