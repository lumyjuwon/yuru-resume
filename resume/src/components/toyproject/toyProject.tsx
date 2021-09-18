import styled from 'styled-components';
import { Project, ProjectProps } from '../common/project';

const projects: ProjectProps[] = [
  {
    name: 'Elaina-Blog',
    description: `Github 디자인과 비슷하며 개발자를 위한 블로그 프로젝트입니다. 기존에 운영하던 WordPress의 블로그 디자인이 마음에 안 들어 수정하던 중 수정하는 것보다 내가 만족할 만한 블로그를 만들고 싶어져 진행하고 있는 프로젝트입니다.`,
    whatIdo: ['블로그 설계 및 개발'],
    whatIdoTitle: '담당 작업',
    skills: ['Typescript', 'React', 'Styled-Component', 'Next.js', 'Apollo-Client', 'Apollo-Server', 'Graphql', 'Mongoose'],
    period: '2020.12 ~ 현재',
    urls: ['https://github.com/lumyjuwon/elaina-blog']
  },
  {
    name: 'Genshin-Simul',
    description: `'원신'게임의 가챠, 파티 조합 등의 시뮬레이션을 할 수 있는 사이트입니다.
    원신을 매우 재밌게 플레이 해서 원신과 관련된 무언가를 만들어 재미를 공감하고 있는 다른 플레이어에게 게임을 플레이함에 있어 도움이 되는 기능을 제공하고 싶어 만들게 됐습니다.`,
    whatIdo: ['컨텐츠 설계 및 개발'],
    whatIdoTitle: '담당 작업',
    skills: ['Typescript', 'React', 'Styled-Component', 'Redux', 'Redux-Persist'],
    period: '2020.10 ~ 2020.12',
    urls: ['https://github.com/lumyjuwon/genshin', 'https://lumyjuwon.github.io/genshin']
  },
  {
    name: 'KoreaNewsCrawler',
    description: `학습을 위한 라벨링된 데이터를 수집하기 위해 개발한 네이버 뉴스 스크래퍼입니다.
    인턴으로 'Cizion'에 재직중이었을 때 판별 모델에 대해 검증을 하고 싶었지만 충분한 데이터가 없어 학습에 적합한 데이터를 찾던 중 네이버 뉴스의 카테고리와 본문 내용 및 제목을 라벨링시켜 효율적인 대량의 데이터를 모을 수 있어 개발하게 된 스크래퍼입니다.`,
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
      <h3>Toy Project</h3>
      {projects.map((project: ProjectProps) => {
        return <Project project={project} />;
      })}
    </Container>
  );
}
