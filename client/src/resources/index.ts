import { IResume, IResumeConfig } from './resumes/type';

const resumeConfig: IResumeConfig = require('./resumes/resume-config.json');

export const resumeFilenames = resumeConfig.filenames;
export const defaultResume = resumeConfig.default;

interface IconResources {
  icons: {
    gmail: any;
    github: any;
    linkedin: any;
    playstore: any;
    appstore: any;
    url: any;
  };
}

interface ResumeResources {
  [filename: string]: IResume;
}

function makeResources() {
  const iconResources: IconResources = {
    icons: {
      gmail: require('./icons/gmail_512.png').default,
      github: require('./icons/github_512.png').default,
      linkedin: require('./icons/linkedin_512.png').default,
      playstore: require('./icons/playstore_512.png').default,
      appstore: require('./icons/appstore_512.png').default,
      url: require('./icons/url.png').default
    }
  };

  const resumeResources: ResumeResources = {};

  resumeConfig.filenames.forEach((filename) => (resumeResources[filename.replace('.json', '')] = require(`./resumes/${filename}`)));

  return {
    iconResources,
    resumeResources
  };
}

export const Resources = makeResources();
