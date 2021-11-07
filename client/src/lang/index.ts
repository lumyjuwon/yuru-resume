import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Detector, { DetectorOptions } from 'i18next-browser-languagedetector';

import { resumeFilenames } from '../resources';

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

for (const resumeFilename of resumeFilenames) {
  const code = resumeFilename.replace('.json', '');
  langCodes[code] = code;
  languages[code] = { translation: require(`../resources/resumes/${resumeFilename}`) };
}

const defaultLangCode = Object.keys(langCodes)[0];

const options: DetectorOptions = {
  order: ['querystring', 'navigator'],
  lookupQuerystring: 'lng'
};
const detector = new Detector();
detector.init(options);

i18n.use(detector).use(initReactI18next).init({
  resources: languages,
  fallbackLng: languages[defaultLangCode]
});

function getCurrentLanguage() {
  return i18n.language;
}

function trans(key: string) {
  return i18n.t(key, { returnObjects: true }) as any;
}

function changeLang(code: string) {
  if (langCodes[code]) {
    i18n.changeLanguage(code);
  } else {
    i18n.changeLanguage(defaultLangCode);
  }
}

export { i18n, langCodes, languages, getCurrentLanguage, trans, changeLang };
