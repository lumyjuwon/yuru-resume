import { Icons } from './icons/type';
import { IResumeConfig } from './resumes/type';

const resumeConfig: IResumeConfig = require('./resumes/resume-config.json');

export const resumeFilenames = resumeConfig.filenames;
export const resumeDownloadFiles = resumeConfig.downloadFiles;
export const defaultResume = resumeConfig.default;

interface Resources {
  icons: Icons;
}

export const resources: Resources = {
  icons: {
    gmail: require('./icons/gmail.png').default,
    github: require('./icons/github.png').default,
    linkedin: require('./icons/linkedin.png').default,
    playstore: require('./icons/playstore.png').default,
    appstore: require('./icons/appstore.png').default,
    pdf: require('./icons/pdf.png').default,
    png: require('./icons/png.png').default,
    url: require('./icons/url.png').default
  }
};
