const fs = require('fs-extra');
const resumePath = '../resume/build';
const outputPath = '..';

(async () => {
  // Delete Old Build
  const removePromises = [];
  const targets = ['static', 'asset-manifest.json', 'favicon.ico', 'index.html', 'manifest.json', 'robots.txt'];

  for (const target of targets) {
    const srcPath = `${outputPath}/${target}`;
    if (fs.existsSync(srcPath)) {
      removePromises.push(fs.remove(srcPath));
    }
  }

  await Promise.all(removePromises);

  const movePromises = []

  // Release
  const files = fs.readdirSync(`${resumePath}`);
  for (const file of files) {
    const srcPath = `${resumePath}/${file}`;
    if(fs.existsSync(srcPath))
    movePromises.push(fs.move(srcPath, `${outputPath}/${file}`));
  }

  await Promise.all(movePromises)

  fs.removeSync(resumePath)
})();
