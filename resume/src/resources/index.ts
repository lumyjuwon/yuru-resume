export interface Profile {
  name: string;
  email: string;
  github: string;
  linkedin: string;
  about: string;
}

export interface Skills {
  main: {
    [key: string]: string;
  };
  additional: {
    [key: string]: string;
  };
}

export interface IProject {
  name: string;
  description: string;
  whatIdo: string[];
  whatIdoTitle: string;
  period: string;
  skills: string[];
  urls?: string[];
}

export interface Experience {
  company: string;
  startDate: string;
  endDate?: string;
  projects: IProject[];
}

export interface Education {
  title: string;
  period: string;
}

export interface Resume {
  profile: Profile;
  skills: Skills;
  experiences: Experience[];
  toyProjects: IProject[];
  education: Education[];
}

export const Resources = {
  icons: {
    gmail: require('./icons/gmail_512.png').default,
    github: require('./icons/github_512.png').default,
    linkedin: require('./icons/linkedin_512.png').default,
    playstore: require('./icons/playstore_512.png').default,
    appstore: require('./icons/appstore_512.png').default,
    url: require('./icons/url.png').default
  },
  resume: require('./resume.json') as Resume
};
