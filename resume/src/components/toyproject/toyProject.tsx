import styled from 'styled-components';
import { Project, ProjectProps } from '../common/project';

const projects: ProjectProps[] = [
  {
    name: 'Elaina-Blog',
    description: 'Document 템플릿 같은 블로그 플랫폼 프로젝트',
    whatIdo: ['Component 개발'],
    whatIdoTitle: '담당 작업',
    skills: [
      'Typescript',
      'React',
      'Styled-Component',
      'Next.js',
      'Apollo-Client',
      'Apollo-Server',
      'Graphql',
      'Mongoose'
    ],
    period: '2020.12 ~ 현재',
    urls: ['https://github.com/lumyjuwon/elaina-blog']
  },
  {
    name: 'Genshin-Simul',
    description: '"원신" 게임 시뮬레이터 사이트',
    whatIdo: ['Static SPA 배포 및 Front-Server 구축', 'Front-End 개발'],
    whatIdoTitle: '담당 작업',
    skills: ['Typescript', 'React', 'Styled-Component', 'Redux', 'Redux-Persist'],
    period: '2020.10 ~ 2020.12',
    urls: ['https://github.com/lumyjuwon/genshin', 'https://lumyjuwon.github.io/genshin']
  },
  {
    name: 'KoreaNewsCrawler',
    description: '네이버 뉴스 스크래핑 도구',
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
