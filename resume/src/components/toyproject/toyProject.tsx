import styled from 'styled-components';
import { Project, ProjectProps } from '../common/project';

const projects: ProjectProps[] = [
  {
    name: 'Elaina-Blog',
    description: `카테고리에 따른 Card 형식의 블로그 플랫폼입니다.
    유저단에게 보여지는 화면부터 시작하여 블로그 주인이 블로그를 관리하기 위해 사용하는 관리 화면까지 퀄리티 높은 UI/UX를 만들어 보고 싶었고 만들어서 제 기술 블로그로 사용하기 위해 개발 중인 블로그 플랫폼입니다.`,
    whatIdo: ['블로그 기능 설계 및 개발', 'UI/UX 작업', 'Back-End 작업'],
    whatIdoTitle: '담당 작업',
    skills: ['Typescript', 'React', 'Styled-Component', 'Next.js', 'Apollo-Client', 'Apollo-Server', 'Graphql', 'Mongoose'],
    period: '2020.12 ~ 현재',
    urls: ['https://github.com/lumyjuwon/elaina-blog']
  },
  {
    name: 'Genshin-Simul',
    description: `"원신"게임의 가챠, 파티 조합 등의 시뮬레이션을 할 수 있는 사이트입니다.
    "원신"을 매우 재밌게 플레이 해서 "원신"과 관련된 무언가를 만들어 재미를 공감하고 있는 다른 플레이어에게 게임을 플레이함에 있어 도움이 되는 도구를 제공하고 싶어 만들게 됐습니다.`,
    whatIdo: ['Static SPA 배포 및 Front-Server 구축', 'Front-End 개발'],
    whatIdoTitle: '담당 작업',
    skills: ['Typescript', 'React', 'Styled-Component', 'Redux', 'Redux-Persist'],
    period: '2020.10 ~ 2020.12',
    urls: ['https://github.com/lumyjuwon/genshin', 'https://lumyjuwon.github.io/genshin']
  },
  {
    name: 'KoreaNewsCrawler',
    description: `학습을 위한 라벨링된 데이터를 수집하기 위해 개발한 네이버 뉴스 스크래퍼입니다.
    인턴으로 'Cizion'에 재직중이었을 때 판별 모델에 대해 검증을 하고 싶었지만 충분한 데이터가 없어 학습에 적합한 데이터를 찾던 중 네이버 뉴스의 카테고리와 본문 내용 및 제목을 라벨링시킬 수 있어 개발하게 됐습니다.`,
    whatIdo: ['네이버 뉴스 스크래핑', '네이버 뉴스 URL 패턴 파악'],
    whatIdoTitle: '담당 작업',
    skills: ['Python'],
    period: '2018.08 ~ 2019.05',
    urls: ['https://github.com/lumyjuwon/KoreaNewsCrawler']
  },
  {
    name: 'Rock Civilization RPG (개명, 이그노레스 서버)',
    description: `중학생 때 RPG 게임을 만들고 싶었으나 Unity 등의 엔진등을 다루기에는 어려움이 있어 마인크래프트를 이용해 RPG 게임을 만들고 싶어 시작하게 된 프로젝트입니다.
    1년간의 개발을 진행했고 2015년 1월에 오픈하여 유저분들을 맞이하였으나 RPG라는 게임 특성상 지속적인 업데이트 및 버그 수정, 운영 등의 업무에 벅차 아쉽게 2달간의 운영 이후 멈추게 됐습니다.
    하지만 해당 프로젝트를 진행하면서 쌓인 경험은 프로그래머가 되는데 있어 많은 영향을 미쳤습니다.`,
    whatIdoTitle: '담당 작업',
    whatIdo: ['게임 기획', '게임 컨텐츠 개발', '서버 구축', '인력 관리'],
    skills: ['Java'],
    period: '2014.01 ~ 2015.02',
    urls: ['https://tv.naver.com/v/476282']
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
