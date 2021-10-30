import { IResume } from './resume/type';

interface IResources {
  icons: {
    github: any;
    gmail: any;
    linkedin: any;
    playstore: any;
    appstore: any;
    url: any;
  };
  [filename: string]: any;
}

export const Resources: IResources = {
  icons: {
    gmail: require('./icons/gmail_512.png').default,
    github: require('./icons/github_512.png').default,
    linkedin: require('./icons/linkedin_512.png').default,
    playstore: require('./icons/playstore_512.png').default,
    appstore: require('./icons/appstore_512.png').default,
    url: require('./icons/url.png').default
  },
  'resume-en': require('./resume/resume-en.json') as IResume,
  'resume-ko': require('./resume/resume-ko.json') as IResume
};
