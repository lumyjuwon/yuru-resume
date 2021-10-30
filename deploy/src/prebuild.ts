import path from "path";
import { promises as fs } from "fs";
import { PathMap } from "./pathMap";

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

    const indexHtmlPath = path.resolve(
      PathMap.clientPath,
      "./public/index.html"
    );
    const indexHtml = (await fs.readFile(indexHtmlPath)).toString();

    const searchPair = [
      {
        targetRegex: /<title>.+<\/title>/,
        replacedText: `<title>${page.title}</title>`,
      },
      {
        targetRegex: /      content=".+"/,
        replacedText: `      content="${page.description}"`,
      },
    ];
    let replacedIndexHtml = indexHtml;
    for (const searh of searchPair) {
      const replaceTarget = searchTarget(indexHtml, searh.targetRegex);
      replacedIndexHtml = replacedIndexHtml.replace(
        replaceTarget,
        searh.replacedText
      );
    }

    await fs.writeFile(indexHtmlPath, replacedIndexHtml);
  }

  async function applyResumeConfig() {
    const resumes = await fs.readdir(`${PathMap.userPath}/resume`);

    const destinationResumePath = `${PathMap.clientPath}/src/resources/resume`;

    resumes.forEach(
      async (resume) =>
        await fs.writeFile(`${destinationResumePath}/${resume}`, resume)
    );
  }

  export async function run() {
    console.log("Running Prebuild");

    const applies = [applyPageConfig(), applyResumeConfig()];
    await Promise.all(applies);

    console.log("Complete Prebuild");
  }
}
