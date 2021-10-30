import { promises as fs } from 'fs';
import path from 'path';
import { PaperFormat } from 'puppeteer';

import { PathMap } from './pathMap';

interface Config {
  setting: {
    build: {
      pagePath: string;
    };
    pdf: {
      htmlPath: string;
      outputPath: string;
      format: PaperFormat;
    };
  };
}

export module User {
  export const config: Config = {
    setting: {
      build: {
        pagePath: ''
      },
      pdf: {
        htmlPath: '',
        outputPath: '',
        format: 'a1'
      }
    }
  };

  async function mergeConfig() {
    const dirs = await fs.readdir(PathMap.userPath);

    for (const dir of dirs) {
      const filePath = `${PathMap.userPath}/${dir}`;

      const extname = path.extname(filePath);
      if (extname === '.json') {
        const fileName = dir.replace('.json', '');
        config[fileName as keyof Config] = require(filePath);
      }
    }
  }

  export async function load() {
    mergeConfig();
  }
}
