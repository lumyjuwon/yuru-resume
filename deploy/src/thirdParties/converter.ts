import puppeteer, { PaperFormat } from 'puppeteer';
import { promises as fs } from 'fs';
import path from 'path';

export module Converter {
  let browser: puppeteer.Browser;
  let htmlPath: string;
  let page: puppeteer.Page;

  export async function load(_htmlPath: string) {
    htmlPath = _htmlPath;
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.setUserAgent('Deploy');
    await page.setViewport({
      width: 1920,
      height: 1080
    });
  }

  export async function close() {
    await browser.close();
  }

  export async function pdf(options: { lang: string; outputPath: string; format: PaperFormat }) {
    console.log('Running Converting html to pdf');

    const outputDirPath = path.dirname(options.outputPath);
    try {
      await fs.access(outputDirPath);
    } catch (error) {
      await fs.mkdir(outputDirPath, { recursive: true });
    }

    await page.goto(`file:${htmlPath}`);
    await page.evaluate((lang) => {
      localStorage.setItem('i18nextLng', lang);
    }, options.lang);
    await page.reload();
    await page.pdf({
      printBackground: true,
      path: options.outputPath,
      format: options.format
    });

    console.log('Complete Converting html to pdf');
  }

  export async function image(options: { lang: string; outputPath: string }) {
    console.log('Running Converting html to image');

    const outputDirPath = path.dirname(options.outputPath);
    try {
      await fs.access(outputDirPath);
    } catch (error) {
      await fs.mkdir(outputDirPath, { recursive: true });
    }

    await page.goto(`file:${htmlPath}`);
    await page.evaluate((lang) => {
      localStorage.setItem('i18nextLng', lang);
    }, options.lang);
    await page.reload();
    await page.screenshot({ type: 'png', path: options.outputPath, fullPage: true });

    console.log('Complete Converting html to image');
  }
}
