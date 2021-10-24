import path from 'path';
import { promises as fs } from 'fs';
import { PathMap } from './pathMap';

export module Prebuild {
  async function applySettingConfig() {
    const config = require(`${PathMap.userPath}/setting.json`);
  }

  async function applyPageConfig() {
    const page = require(`${PathMap.userPath}/page.json`);

    const indexHtmlPath = path.resolve(PathMap.resumePath, './public/index.html');
    let indexHtml = (await fs.readFile(indexHtmlPath)).toString();
    indexHtml = indexHtml
      .replace('<title>title</title>', `<title>${page.title}</title>`)
      .replace('content="content"', `content="${page.description}"`);

    await fs.writeFile(indexHtmlPath, indexHtml);
  }

  export async function run() {
    await applySettingConfig();
    await applyPageConfig();
  }
}
