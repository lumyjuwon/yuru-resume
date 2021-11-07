import { promises as fs } from 'fs';
import path from 'path';
import { PaperFormat } from 'puppeteer';

import { PathMap } from './pathMap';

interface Config {
  setting: {
    host: {
      url: string;
      branch: string;
    };
    build: {
      pagePath: string;
      htmlPath: string;
    };
    pdf: {
      outputPath: string;
      format: PaperFormat;
    };
    image: {
      outputPath: string;
    };
  };
  resumes: {
    [lang: string]: any;
  };
}

export module User {
  export const config: Config = {
    setting: {
      host: {
        url: '',
        branch: ''
      },
      build: {
        pagePath: '',
        htmlPath: ''
      },
      pdf: {
        outputPath: '',
        format: 'a2'
      },
      image: {
        outputPath: ''
      }
    },
    resumes: {}
  };

  async function mergeConfig(_config: any, dirPath: string) {
    const dirs = await fs.readdir(dirPath);

    for (const dir of dirs) {
      const filePath = `${dirPath}/${dir}`;

      const extname = path.extname(filePath);
      const keyName = dir.replace('.json', '');
      if (extname === '.json') {
        _config[keyName] = require(filePath);
      } else if (extname === '') {
        const stat = await fs.stat(filePath);
        const isDirectory = stat.isDirectory();

        if (isDirectory) {
          await mergeConfig(_config[keyName], filePath);
        }
      }
    }
  }

  export async function load() {
    await mergeConfig(config, PathMap.userPath);
  }
}
