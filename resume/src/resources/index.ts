import { IResume } from './resume/type';

export const Resources = {
  icons: {
    gmail: require('./icons/gmail_512.png').default,
    github: require('./icons/github_512.png').default,
    linkedin: require('./icons/linkedin_512.png').default,
    playstore: require('./icons/playstore_512.png').default,
    appstore: require('./icons/appstore_512.png').default,
    url: require('./icons/url.png').default
  },
  resume: require('./resume/resume.json') as IResume
};
