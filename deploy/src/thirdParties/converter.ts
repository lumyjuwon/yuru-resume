import puppeteer, { PaperFormat } from 'puppeteer';
import { promises as fs } from 'fs';
import path from 'path';

export module Converter {
  export async function pdf(options: { htmlPath: string; outputPath: string; format: PaperFormat }) {
    console.log('Running Converting html to pdf');

    const outputDirPath = path.dirname(options.outputPath);
    try {
      await fs.access(outputDirPath);
    } catch (error) {
      await fs.mkdir(outputDirPath, { recursive: true });
    }

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(`file:${options.htmlPath}`);
    await page.pdf({
      path: options.outputPath,
      format: options.format
    });

    await browser.close();

    console.log('Complete Converting html to pdf');
  }
}
