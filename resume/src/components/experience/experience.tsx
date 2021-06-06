import styled from 'styled-components';
import { CompanyInfo } from './companyInfo';
import { ProjectProps, Project } from '../common/project';

interface CompanyExperience {
  [companyName: string]: {
    startDate: Date;
    projects: ProjectProps[];
    endDate?: Date;
  };
}

const companyExperience: CompanyExperience = {
  PearlAbyss: {
    startDate: new Date('2019-08'),
    projects: [
      {
        name: '사내 Slack Server',
        description: 'Slack Interaction 핸들링 Server',
        whatIdo: ['Slack Interaction을 Handle하는 Server 구축', '반복적인 사내 업무를 Slack으로 업무 자동화 구현'],
        whatIdoTitle: '담당 업무',
        skills: ['Nodejs', 'Typescript', 'Mongoose', 'Slack API']
      },
      {
        name: 'Game Automation',
        description: 'Android, iOS, Windows 게임 자동화 Framework ',
        whatIdo: [
          'Jest 기반의 게임 자동화 Framework 설계 및 개발',
          'Appium을 이용해 Android, iOS, Windows 플랫폼 제어 개발',
          'Node.js와 게임간의 TCP Socket 통신 구현',
          'Jenkins CI 구축'
        ],
        whatIdoTitle: '담당 업무',
        skills: ['Nodejs', 'Typescript', 'Jest', 'Appium', 'TCP Socket', 'Flatbuffer']
      },
      {
        name: '검은사막 모바일',
        description: '검은사막 모바일 게임',
        whatIdo: [
          'Android, iOS 소셜 로그인 유지보수',
          'Android, iOS 정책 업데이트에 따른 라이브러리 마이그레이션 및 업데이트',
          'Android, iOS CI/CD 운영 및 개발'
        ],
        whatIdoTitle: '담당 업무',
        skills: ['Android', 'iOS', 'Java', 'Object-c', 'C++', 'Python', 'CI/CD'],
        urls: [
          'https://play.google.com/store/apps/details?id=com.pearlabyss.blackdesertm&hl=ko&gl=US',
          'https://apps.apple.com/kr/app/%EA%B2%80%EC%9D%80%EC%82%AC%EB%A7%89-%EB%AA%A8%EB%B0%94%EC%9D%BC/id1323002999'
        ]
      },
      {
        name: '검은사막+',
        description: '검은사막 온라인 및 검은사막 콘솔 게임 유틸리티 애플리케이션',
        whatIdo: ['검은사막+ 설계 담당', 'Front-End 개발', 'Push Notification 개발', '로그인 개발'],
        whatIdoTitle: '담당 업무',
        skills: [
          'React-Native',
          'Typescript',
          'Android',
          'iOS',
          'React',
          'Firebase',
          'Redux',
          'Redux-Saga',
          'Redux-Persist'
        ],
        urls: [
          'https://play.google.com/store/apps/details?id=com.pearlabyss.pearlapp&hl=ko&gl=US',
          'https://apps.apple.com/kr/app/%EA%B2%80%EC%9D%80%EC%82%AC%EB%A7%89/id1460559702'
        ]
      }
    ]
  },
  Cizion: {
    startDate: new Date('2018-07'),
    endDate: new Date('2018-08'),
    projects: [
      {
        name: 'Comment Classifier',
        description: '댓글 데이터를 긍정 또는 부정으로 판별하는 프로젝트',
        whatIdoTitle: '담당 업무',
        whatIdo: [
          '모델 효율 검증을 위한 대용량의 학습 데이터 수집',
          'Bi-LSTM 모델을 이용하여 수집한 학습 데이터를 이용해 학습',
          '사내 데이터를 학습한 모델에 입력하여 정확도 검증'
        ],
        skills: ['Python', 'Tensorflow', 'Scraping']
      }
    ]
  }
};

const companyExperienceKeys = Object.keys(companyExperience);

const Container = styled.div({});

export function Experience() {
  return (
    <Container>
      <h2>Experience</h2>
      {companyExperienceKeys.map((companyName: string) => {
        return (
          <>
            <CompanyInfo
              key={companyName}
              companyName={companyName}
              startDate={companyExperience[companyName].startDate}
              endDate={companyExperience[companyName].endDate}
            >
              {companyExperience[companyName].projects.map((project: ProjectProps) => {
                return <Project key={project.name} project={project} />;
              })}
            </CompanyInfo>
          </>
        );
      })}
    </Container>
  );
}
