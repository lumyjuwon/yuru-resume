import { Icons } from './icons/type';
import { IResumeConfig } from './resumes/type';

const resumeConfig: IResumeConfig = require('./resumes/resume-config.json');

export const resumeFilenames = resumeConfig.filenames;
export const resumeDownloadFiles = resumeConfig.downloadFiles;
export const defaultResume = resumeConfig.default;

interface IResources {
  icons: Icons;
}

export const Resources: IResources = {
  icons: {
    gmail: require('./icons/gmail_512.png').default,
    github: require('./icons/github_512.png').default,
    linkedin: require('./icons/linkedin_512.png').default,
    playstore: require('./icons/playstore_512.png').default,
    appstore: require('./icons/appstore_512.png').default,
    pdf: require('./icons/pdf-download_512.png').default,
    url: require('./icons/url.png').default
  }
};
