import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Detector, { DetectorOptions } from 'i18next-browser-languagedetector';

import { resumeFilenames } from '.';

interface Languages {
  [code: string]: {
    translation: any;
  };
}

interface LangCodes {
  [code: string]: string;
}

const langCodes: LangCodes = {};
const languages: Languages = {};

resumeFilenames.forEach((filename) => {
  console.log(filename);
  const code = filename.replace('.json', '');
  langCodes[code.substring(0, 2)] = code;
  languages[code.substring(0, 2)] = { translation: require(`./resumes/${filename}`) };
});

const options: DetectorOptions = {
  order: ['querystring', 'navigator'],
  lookupQuerystring: 'lng'
};
const detector = new Detector();
detector.init(options);

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources: languages,
    fallbackLng: languages[Object.keys(languages)[0]]
  });

function getCurrentLanguage() {
  return i18n.language;
}

function trans(key: string) {
  return i18n.t(key, { returnObjects: true }) as any;
}

function changeLang(code: string) {
  i18n.changeLanguage(code);
}

export { i18n, langCodes, languages, getCurrentLanguage, trans, changeLang };
