import path from 'path';
import { promises as fs } from 'fs';

import { PathMap } from '../pathMap';
import { User } from '../user';

export module Prebuild {
  async function applyPageConfig() {
    function searchTarget(target: string, regex: RegExp): string {
      const execed = regex.exec(target);

      if (execed === null) {
        throw new Error(`${regex} does not matched`);
      }

      const replaceTarget = target.substr(execed.index, execed[0].length);

      return replaceTarget;
    }

    const page = require(`${PathMap.userPath}/page.json`);

    const destIndexHtmlPath = path.resolve(PathMap.clientPath, './public/index.html');
    const indexHtml = (await fs.readFile(destIndexHtmlPath)).toString();

    const searchPair = [
      {
        targetRegex: /<title>.+<\/title>/,
        replacedText: `<title>${page.title}</title>`
      },
      {
        targetRegex: /      content=".+"/,
        replacedText: `      content="${page.description}"`
      }
    ];
    let replacedIndexHtml = indexHtml;
    for (const searh of searchPair) {
      const replaceTarget = searchTarget(indexHtml, searh.targetRegex);
      replacedIndexHtml = replacedIndexHtml.replace(replaceTarget, searh.replacedText);
    }

    await fs.writeFile(destIndexHtmlPath, replacedIndexHtml);
  }

  async function applyResumeConfig() {
    const resumeNames = await fs.readdir(`${PathMap.userPath}/resumes`);

    for (const resumeName of resumeNames) {
      const sourceResumePath = `${PathMap.userPath}/resumes/${resumeName}`;
      const destResumePath = `${PathMap.clientPath}/src/resources/resumes/${resumeName}`;
      let source;

      if (resumeName.includes('resume-config.json')) {
        const resumeConfig = require(sourceResumePath);
        const langs = resumeConfig['filenames'].map((fileName: string) => {
          return fileName.replace('.json', '');
        });

        resumeConfig['downloadFiles'] = {};

        const setting = User.config.setting;
        const downloadUrl = `${setting.host.url}/raw/${setting.host.branch}`;
        for (const lang of langs) {
          resumeConfig['downloadFiles'][lang] = {
            png: `${downloadUrl}${setting.image.outputPath}/${lang}.png`,
            pdf: `${downloadUrl}${setting.pdf.outputPath}/${lang}.pdf`
          };
        }

        source = JSON.stringify(resumeConfig);
      } else {
        source = await fs.readFile(sourceResumePath);
      }

      await fs.writeFile(destResumePath, source);
    }
  }

  export async function run() {
    console.log('Running Prebuild');

    const applies = [applyPageConfig(), applyResumeConfig()];
    await Promise.all(applies);

    console.log('Complete Prebuild');
  }
}
