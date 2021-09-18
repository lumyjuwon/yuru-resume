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
        description: `Slack Interaction을 처리하여 다양한 알림, 파일 열람 등과 같은 사내에 필요한 Slack 기능 등의 개발을 맡고 있습니다. 해당 작업을 통해 Slack에서 젠킨스 빌드 진행 등과 같은 다양한 업무를 Slack에서 처리할 수 있도록 개발자 분들에게 제공하고 있습니다.`,
        whatIdo: ['Slack을 통한 Jenkins 빌드, 에러 로그 열람 기능 개발'],
        whatIdoTitle: '담당 업무',
        period: '2021.05 ~ 현재',
        skills: ['Node.js', 'Typescript', 'Mongoose', 'Slack API']
      },
      {
        name: 'Game Automation',
        description: `Windows, Android, iOS 플랫폼에서 e2e 테스트인 게임 컨텐츠 검증, 프로파일링 등의 작업을 자동화 할 수 있는 프레임워크 개발을 맡고 있습니다.
        해당 프레임워크를 통해 검은사막 모바일 등 사내 게임들의 컨텐츠 검증, 프로파일링 등을 자동화하여 반복적인 수동 작업 최소화와 업무 프로세스 등을 개선하였습니다.`,
        whatIdo: [
          'Jest 기반의 게임 자동화 Framework 설계 및 개발',
          'Appium을 이용한 Android, iOS, Windows 플랫폼 제어 개발',
          '검은사막 모바일 컨텐츠 검증, 프로파일링 등의 CI 구축'
        ],
        whatIdoTitle: '담당 업무',
        period: '2020.10 ~ 현재',
        skills: ['Node.js', 'Typescript', 'Jest', 'Appium', 'TCP Socket', 'Flatbuffer', 'Adb', 'Idb', 'WinAppDriver']
      },
      {
        name: '검은사막 모바일',
        description: `Android, iOS SDK 관리, 푸시, 소셜 로그인 개발 등을 맡고 있으며 Android, iOS의 지속적인 정책 변화에 따라 필요한 것들을 대응할 뿐만 아니라 유저분들이 게임에 더 쉽게 접근할 수 있도록 다양한 플랫폼 기능들을 개발하고 있습니다.`,
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
        description: `React-Native를 사용하여 검은사막 온라인 및 검은사막 콘솔의 유틸리티 앱 설계 및 개발을 맡고 있습니다. 앱 초기부터 지금까지 개발을 담당하고 있으며 일본, 대만, 러시아, 동남아, 북미, 유럽 등의 다양한 국가에 서비스를 제공하고 있습니다.`,
        whatIdoTitle: '담당 업무',
        whatIdo: ['검은사막+ 앱 구조 설계', '앱 Front 작업', 'WebView 개발', 'Push Notification 개발', '로그인 개발'],
        skills: ['React-Native', 'Typescript', 'Android', 'iOS', 'Firebase', 'Redux', 'Redux-Saga', 'Redux-Persist', 'WebView'],
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
        description: `한글 텍스트에 대한 긍정과 부정을 판별하는 모델을 사내 시스템에 도입해 보는 작업을 했습니다. 모델을 도입하기 전, 라벨링된 데이터가 부족하여 뉴스 카테고리와 본문을 스크래핑하여 라벨링 데이터를 대량으로 수집하였고 대량의 데이터로 모델에 대한 성능을 검증한 다음 사내 시스템에 적용 테스트 하는 업무를 진행했습니다.`,
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
      <h3>Work Experience</h3>
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
