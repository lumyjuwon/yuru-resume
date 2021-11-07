import path from 'path';

import { Build } from './src/build/build';
import { Afterbuild } from './src/build/afterbuild';
import { Prebuild } from './src/build/prebuild';
import { Args } from './src/utils/args';
import { User } from './src/user';
import { PathMap, validatePathMap } from './src/pathMap';
import { Converter } from './src/thirdParties/converter';

(async () => {
  Args.parseArgs(process.argv);
  await validatePathMap();
  await User.load();

  // Build
  if (Args.args.boolean['-prebuild']) {
    await Prebuild.run();
    return;
  }

  await Prebuild.run();
  await Build.run();
  await Afterbuild.run();

  // Convert
  const resumeFileNames = Object.keys(User.config.resumes).map((fileName: string) => {
    const extname = path.extname(fileName);
    return fileName.replace(extname, '');
  });

  await Converter.load();

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
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
