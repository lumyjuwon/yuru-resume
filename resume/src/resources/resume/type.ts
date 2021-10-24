export interface IProfile {
  name: string;
  email: string;
  github: string;
  linkedin: string;
  about: string;
}

export interface ISkills {
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

export interface IExperience {
  company: string;
  startDate: string;
  endDate?: string;
  projects: IProject[];
}

export interface IEducation {
  title: string;
  period: string;
}

export interface IResume {
  profile: IProfile;
  skills: ISkills;
  experiences: IExperience[];
  toyProjects: IProject[];
  education: IEducation[];
}
