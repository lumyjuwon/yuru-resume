import puppeteer, { PaperFormat } from 'puppeteer';
import { promises as fs } from 'fs';
import path from 'path';

export module Converter {
  let browser: puppeteer.Browser;
  let htmlPath: string;

  export async function load(_htmlPath: string) {
    browser = await puppeteer.launch();
    htmlPath = _htmlPath;
  }

  export async function close() {
    await browser.close();
  }

  export async function pdf(options: { outputPath: string; format: PaperFormat }) {
    console.log('Running Converting html to pdf');

    const outputDirPath = path.dirname(options.outputPath);
    try {
      await fs.access(outputDirPath);
    } catch (error) {
      await fs.mkdir(outputDirPath, { recursive: true });
    }

    const page = await browser.newPage();

    await page.goto(`file:${htmlPath}`);
    await page.pdf({
      printBackground: true,
      path: options.outputPath,
      format: options.format
    });

    console.log('Complete Converting html to pdf');
  }

  export async function image(options: { outputPath: string }) {
    console.log('Running Converting html to image');

    const outputDirPath = path.dirname(options.outputPath);
    try {
      await fs.access(outputDirPath);
    } catch (error) {
      await fs.mkdir(outputDirPath, { recursive: true });
    }

    const page = await browser.newPage();

    await page.goto(`file:${htmlPath}`);
    await page.screenshot({ path: options.outputPath });

    console.log('Complete Converting html to image');
  }
}
