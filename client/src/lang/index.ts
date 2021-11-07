import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Detector, { DetectorOptions } from 'i18next-browser-languagedetector';

import { resumeFilenames } from '../resources';

export function getCurrentLangCode() {
  return i18n.language;
}

export function trans(key: string) {
  return i18n.t(key, { returnObjects: true }) as any;
}

export function changeLangCode(code: string) {
  let changedCode = langCodes[code] ? code : defaultLangCode;
  i18n.changeLanguage(changedCode);

  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set('lang', changedCode);
  const newRelativePathQuery = `${window.location.pathname}?${searchParams.toString()}`;
  window.history.replaceState(null, '', newRelativePathQuery);
}

interface Languages {
  [code: string]: {
    translation: any;
  };
}

interface LangCodes {
  [code: string]: string;
}

export const langCodes: LangCodes = {};
export const languages: Languages = {};

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
