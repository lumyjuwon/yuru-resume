import childProcess from 'child_process';
import path from 'path';
import { promises as fs } from 'fs';

const userPath = path.resolve(__dirname, '../user');
const resumePath = path.resolve(__dirname, '../resume');

function applyConfig() {
  const config = require(`${userPath}/config.json`);
}

async function applyPage() {
  const page = require(`${userPath}/page.json`);

  const indexHtmlPath = path.resolve(resumePath, './public/index.html');
  let indexHtml = (await fs.readFile(indexHtmlPath)).toString();
  indexHtml = indexHtml
    .replace('<title>title</title>', `<title>${page.title}</title>`)
    .replace('content="content"', `content="${page.description}"`);

  await fs.writeFile(indexHtmlPath, indexHtml);
}

(async () => {
  await applyPage();

  // childProcess.execSync('cd ../ & yarn run build');
})();
