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
        description: `Slack Interaction Handling Server: Slack에서 체크 기능의 양식 폼을 전송할 수 없어 포스트를 만들어 지속적으로 Send & Edit 하고 계신 사우 분을 보고 
        Slack 내에서도 반복적인 업무를 줄이기 위해 유저의 상호작용을 핸들링 할 수 있도록 개발한 사내 Slack Server입니다.
        처음에는 포스트를 대체할 수 있는 도구를 만들기 위해 시작했으나 활용도가 더 많아져 Jenkins 빌드 시작 등의 여러 작업들을 Slack에서 처리할 수 있도록 도구들을 제공하고 있습니다.`,
        whatIdo: [
          'Slack Interaction을 Handle하는 Server 구축',
          '체크리스트 폼 작성, 젠킨스 빌드와 같은 행동을 Slack 내에서 진행할 수 있도록 도구 제공'
        ],
        whatIdoTitle: '담당 업무',
        period: '2021.05 ~ 현재',
        skills: ['Node.js', 'Typescript', 'Mongoose', 'Slack API']
      },
      {
        name: 'Game Automation',
        description:
          'Android, iOS, Windows 게임 자동화 Framework: 검은사막+ 애플리케이션을 자동화하기 위해 개발을 시작했으나 검은사막+ 이외에 검은사막 모바일에서 반복적인 작업들이 많이 있다는 것을 파악하고 반복적인 업무를 줄이기 위해 개발한 프레임워크입니다.',
        whatIdo: [
          'Jest 기반의 게임 자동화 Framework 설계 및 개발',
          'Appium을 이용해 Android, iOS, Windows 플랫폼 제어 개발',
          '사내 Android, iOS, Windows 플랫폼에서 운영되는 모든 게임을 자동화 가능하도록 환경 구축(Work Bench)',
          '검은사막 모바일 Game Automation 라이브 도입 및 프로파일링, 컨텐츠 검증 Jenkins CI 구축'
        ],
        whatIdoTitle: '담당 업무',
        period: '2020.10 ~ 현재',
        skills: ['Node.js', 'Typescript', 'Jest', 'Appium', 'TCP Socket', 'Flatbuffer']
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
        period: '2020.01 ~ 현재',
        urls: [
          'https://play.google.com/store/apps/details?id=com.pearlabyss.blackdesertm&hl=ko&gl=US',
          'https://apps.apple.com/kr/app/%EA%B2%80%EC%9D%80%EC%82%AC%EB%A7%89-%EB%AA%A8%EB%B0%94%EC%9D%BC/id1323002999'
        ]
      },
      {
        name: '검은사막+',
        description:
          '검은사막 온라인 및 검은사막 콘솔 유틸리티 애플리케이션: 입사 후 담당하게 된 첫 프로젝트입니다. 검은사막+는 유저분들에게 검은사막 온라인 및 콘솔을 더 효율적으로 이용하실 수 있도록 푸시 알림, 채팅 등의 기능을 제공하고 있습니다.',
        whatIdo: [
          '검은사막+ 앱 구조 설계',
          '하이브리드 앱 UI 개발',
          'Push Notification 개발',
          'Client Oauth 2.0 로그인 개발'
        ],
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
        period: '2019.08 ~ 현재',
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
        description:
          '댓글 데이터를 긍정, 부정으로 판별하는 프로젝트: 문장을 Input 하면 해당 문장이 부정적인 성향이 강한지 긍정적인 성향이 강한지 판별하는 모델 학습 및 검증을 진행했습니다.',
        whatIdoTitle: '담당 업무',
        whatIdo: [
          '모델 효율 검증을 위한 대용량의 학습 데이터 수집',
          'Bi-LSTM 모델을 이용하여 수집한 학습 데이터를 이용해 학습',
          '사내 데이터를 학습한 모델에 입력하여 정확도 검증'
        ],
        period: '2018.07 ~ 2018.08',
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
