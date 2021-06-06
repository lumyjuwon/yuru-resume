const fsExtra = require('fs-extra');
const path = require('path')

const srcDir = path.resolve(__dirname, '../resume_src/build');
const destDir = path.resolve(__dirname, '../resume')

fsExtra.removeSync(destDir)

// To copy a folder or file  
fsExtra.moveSync(srcDir, destDir, function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log("Release Success");
  }
});