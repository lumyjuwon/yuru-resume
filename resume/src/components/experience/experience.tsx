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
        description: `유저와 Slack간의 상호작용을 처리하는 서버입니다.
        Slack을 통해 젠킨스 빌드, 에러 로그 열람 등의 기능을 제공하고 있으며 Slack을 통해 다양한 기능들을 사용할 수 있도록 개발하고 있습니다.`,
        whatIdo: ['Jenkins 빌드, 에러 로그 열람 기능 개발'],
        whatIdoTitle: '담당 업무',
        period: '2021.05 ~ 현재',
        skills: ['Node.js', 'Typescript', 'Mongoose', 'Slack API']
      },
      {
        name: 'Game Automation',
        description: `Android, iOS, Windows 게임 자동화 프레임워크입니다. Platform 및 Game을 제어할 수 있으며 Game Automation을 이용해 자동화 스크립트를 작성하여 반복적인 업무를 자동화할 수 있도록 기능을 제공하고 있습니다.`,
        whatIdo: [
          'Jest 기반의 게임 자동화 Framework 설계 및 개발',
          'Appium을 이용한 Android, iOS, Windows 플랫폼 제어 개발',
          '검은사막 모바일 프로파일링, 컨텐츠 검증 등의 CI 구축'
        ],
        whatIdoTitle: '담당 업무',
        period: '2020.10 ~ 현재',
        skills: ['Node.js', 'Typescript', 'Jest', 'Appium', 'TCP Socket', 'Flatbuffer', 'Adb', 'Idb', 'WinAppDriver']
      },
      {
        name: '검은사막 모바일',
        description: `검은사막 모바일 소셜로그인, SDK 관리, CI/CD 등과 같은 Android, iOS 플랫폼 업무를 담당하고 있습니다.`,
        whatIdo: ['Android, iOS SDK 유지보수', 'Android, iOS 소셜 로그인 유지보수', 'Android, iOS CI/CD 운영 및 개발'],
        whatIdoTitle: '담당 업무',
        skills: ['Android', 'iOS', 'Firebase', 'Java', 'Object-c', 'C++', 'Python'],
        period: '2020.01 ~ 현재',
        urls: [
          'https://play.google.com/store/apps/details?id=com.pearlabyss.blackdesertm&hl=ko&gl=US',
          'https://apps.apple.com/kr/app/%EA%B2%80%EC%9D%80%EC%82%AC%EB%A7%89-%EB%AA%A8%EB%B0%94%EC%9D%BC/id1323002999'
        ]
      },
      {
        name: '검은사막+',
        description: `검은사막 온라인 및 콘솔 플레이에 유틸리티 기능을 제공해주는 애플리케이션입니다.
        해당 애플리케이션을 통해 유저분들이 어느 공간에서든 휴대폰만 있으면 길드원들과 채팅 및 아이템 거래 등을 할 수 있도록 유저분들에게 편리성을 제공하고 있습니다.`,
        whatIdoTitle: '담당 업무',
        whatIdo: ['검은사막+ 앱 구조 설계', 'UI/UX 개발', 'Push Notification 개발', '로그인 개발'],
        skills: ['React-Native', 'Typescript', 'Android', 'iOS', 'Firebase', 'Redux', 'Redux-Saga', 'Redux-Persist'],
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
        description: `댓글에 대한 내용이 긍정인지 부정인지 판별하는 판별기입니다.
        인턴으로 재직했던 회사라 모델을 상용 서비스까지 반영은 못했으나 충분히 회사가 긍정 및 부정 판별 기능을 고도화하여 상용 서비스에 반영할 수 있다는 것을 보여줬습니다.`,
        whatIdoTitle: '담당 업무',
        whatIdo: [
          '모델 효율 검증을 위한 대용량 학습 데이터 수집',
          'Bi-LSTM 모델을 이용하여 수집한 학습 데이터를 이용해 학습',
          '학습된 모델 정확도 검증'
        ],
        period: '2018.07 ~ 2018.08',
        skills: ['Python', 'Tensorflow']
      }
    ]
  }
};

const companyExperienceKeys = Object.keys(companyExperience);

const Container = styled.div({});

export function Experience() {
  return (
    <Container>
      <h2>Work Experience</h2>
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
