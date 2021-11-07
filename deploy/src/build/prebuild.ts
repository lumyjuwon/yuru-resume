import path from 'path';
import { promises as fs } from 'fs';

import { PathMap } from '../pathMap';
import { User } from '../user';

type ResumeConfig = { filenames: string[]; downloadFiles: { [lang: string]: { png: string; pdf: string } } };

export module Prebuild {
  export interface Options {
    repo_url: string;
    branch: string;
  }

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

  async function applyResumeConfig(repoUrl: string, branch: string) {
    const resumeNames = await fs.readdir(`${PathMap.userPath}/resumes`);

    // Create resume-config.json
    const resumeConfig: ResumeConfig = {
      filenames: resumeNames,
      downloadFiles: {}
    };

    const langs = resumeNames.map((fileName: string) => {
      return fileName.replace('.json', '');
    });

    const setting = User.config.setting;
    const downloadUrl = `${repoUrl}/raw/${branch}`;
    for (const lang of langs) {
      resumeConfig['downloadFiles'][lang] = {
        png: `${downloadUrl}${setting.image.outputPath}/${lang}.png`,
        pdf: `${downloadUrl}${setting.pdf.outputPath}/${lang}.pdf`
      };
    }

    const destResumeConfigPath = `${PathMap.clientPath}/src/resources/resumes/resume-config.json`;
    await fs.writeFile(destResumeConfigPath, JSON.stringify(resumeConfig));

    for (const resumeName of resumeNames) {
      const sourceResumePath = `${PathMap.userPath}/resumes/${resumeName}`;
      const destResumePath = `${PathMap.clientPath}/src/resources/resumes/${resumeName}`;
      let source;

      source = await fs.readFile(sourceResumePath);
      await fs.writeFile(destResumePath, source);
    }
  }

  export async function run(options: Options) {
    console.log('Running Prebuild');

    const applies = [applyPageConfig(), applyResumeConfig(options.repo_url, options.branch)];
    await Promise.all(applies);

    console.log('Complete Prebuild');
  }
}
