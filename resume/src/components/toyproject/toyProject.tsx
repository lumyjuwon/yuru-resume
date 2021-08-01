import styled from 'styled-components';
import { Project, ProjectProps } from '../common/project';

const projects: ProjectProps[] = [
  {
    name: 'Elaina-Blog',
    description: `카테고리에 따른 Card 형식의 블로그 플랫폼입니다.
    유저단에게 보여지는 화면부터 시작하여 블로그 어드민이 블로그를 관리하기 위해 사용하는 관리 화면까지 퀄리티 높은 UI/UX를 만들어 보고 싶었고, 저의 기술 블로그를 만들기 위해 개발 중인 블로그 플랫폼입니다.`,
    whatIdo: ['블로그 설계 및 개발'],
    whatIdoTitle: '담당 작업',
    skills: ['Typescript', 'React', 'Styled-Component', 'Next.js', 'Apollo-Client', 'Apollo-Server', 'Graphql', 'Mongoose'],
    period: '2020.12 ~ 현재',
    urls: ['https://github.com/lumyjuwon/elaina-blog']
  },
  {
    name: 'Genshin-Simul',
    description: `"원신"게임의 가챠, 파티 조합 등의 시뮬레이션을 할 수 있는 사이트입니다.
    "원신"을 매우 재밌게 플레이 해서 "원신"과 관련된 무언가를 만들어 재미를 공감하고 있는 다른 플레이어에게 게임을 플레이함에 있어 도움이 되는 도구를 제공하고 싶어 만들게 됐습니다.`,
    whatIdo: ['컨텐츠 설계 및 개발'],
    whatIdoTitle: '담당 작업',
    skills: ['Typescript', 'React', 'Styled-Component', 'Redux', 'Redux-Persist'],
    period: '2020.10 ~ 2020.12',
    urls: ['https://github.com/lumyjuwon/genshin', 'https://lumyjuwon.github.io/genshin']
  },
  {
    name: 'KoreaNewsCrawler',
    description: `학습을 위한 라벨링된 데이터를 수집하기 위해 개발한 네이버 뉴스 스크래퍼입니다.
    인턴으로 'Cizion'에 재직중이었을 때 판별 모델에 대해 검증을 하고 싶었지만 충분한 데이터가 없어 학습에 적합한 데이터를 찾던 중 네이버 뉴스의 카테고리와 본문 내용 및 제목을 라벨링시킬 수 있어 개발하게 됐습니다.`,
    whatIdo: ['네이버 뉴스 스크래핑', '네이버 뉴스 페이지 구조 파악'],
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
