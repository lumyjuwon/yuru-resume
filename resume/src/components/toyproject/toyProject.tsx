import styled from 'styled-components';
import { Project, ProjectProps } from '../common/project';

const projects: ProjectProps[] = [
  {
    name: 'Elaina-Blog',
    description: '개인 블로그 플랫폼을 만들고 싶어 개발하기 시작한 블로그 플랫폼 프로젝트입니다.',
    whatIdo: ['Component 개발'],
    whatIdoTitle: '담당 작업',
    skills: ['Typescript', 'React', 'Styled-Component', 'Next.js', 'Apollo-Client', 'Apollo-Server', 'Graphql', 'Mongoose'],
    period: '2020.12 ~ 현재',
    urls: ['https://github.com/lumyjuwon/elaina-blog']
  },
  {
    name: 'Genshin-Simul',
    description:
      '"원신" 게임 시뮬레이터 사이트: "원신"을 플레이하는 유저분들에게 가챠, 파티 조합 등의 시뮬레이션을 할 수 있도록 개발한 웹사이트입니다. 이전에는 AWS LightSail 클라우드에서 운영하고 있었으나 이용자 감소로 인해 github.io 페이지로 옮기게 됐습니다.',
    whatIdo: ['Static SPA 배포 및 Front-Server 구축', 'Front-End 개발'],
    whatIdoTitle: '담당 작업',
    skills: ['Typescript', 'React', 'Styled-Component', 'Redux', 'Redux-Persist'],
    period: '2020.10 ~ 2020.12',
    urls: ['https://github.com/lumyjuwon/genshin', 'https://lumyjuwon.github.io/genshin']
  },
  {
    name: 'KoreaNewsCrawler',
    description: `학습을 하기 위해서는 라벨링된 데이터가 필요했는데 네이버 뉴스가 라벨링된 데이터로 적합하다 생각하여 만든 스크랩핑 프로젝트입니다.`,
    whatIdo: [
      '네이버 뉴스 DOM 구조 파악',
      'SSR인 네이버 뉴스 페이지 Request HTML 및 BeautifulSoup 라이브러리를 이용해 HTML에서 필요한 데이터 추출',
      'Python 패키징 및 배포'
    ],
    whatIdoTitle: '담당 작업',
    skills: ['Python'],
    period: '2018.08 ~ 2019.05',
    urls: ['https://github.com/lumyjuwon/KoreaNewsCrawler']
  }
];

const Container = styled.div({});

export function ToyProject() {
  return (
    <Container>
      <h2>Toy Project</h2>
      {projects.map((project: ProjectProps) => {
        return <Project project={project} />;
      })}
    </Container>
  );
}
