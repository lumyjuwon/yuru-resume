import path from 'path';
import { promises as fs } from 'fs';
import { PathMap } from './pathMap';

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

    const indexHtmlPath = path.resolve(PathMap.resumePath, './public/index.html');
    const indexHtml = (await fs.readFile(indexHtmlPath)).toString();

    const searchPair = [
      { targetRegex: /<title>.+<\/title>/, replacedText: `<title>${page.title}</title>` },
      { targetRegex: /      content=".+"/, replacedText: `      content="${page.description}"` }
    ];
    let replacedIndexHtml = indexHtml;
    for (const searh of searchPair) {
      const replaceTarget = searchTarget(indexHtml, searh.targetRegex);
      replacedIndexHtml = replacedIndexHtml.replace(replaceTarget, searh.replacedText);
    }

    await fs.writeFile(indexHtmlPath, replacedIndexHtml);
  }

  async function applyResumeConfig() {
    const resume = await fs.readFile(`${PathMap.userPath}/resume.json`);

    const destinationResumePath = `${PathMap.resumePath}/src/resources/resume/resume.json`;
    await fs.writeFile(destinationResumePath, resume);
  }

  export async function run() {
    console.log('Running Prebuild');

    const applies = [applyPageConfig(), applyResumeConfig()];
    await Promise.all(applies);

    console.log('Complete Prebuild');
  }
}
