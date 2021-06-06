import styled from 'styled-components';
import { Project, ProjectProps } from '../common/project';

const projects: ProjectProps[] = [
  {
    name: 'Elaina-Blog',
    description: '블로그 플랫폼 프로젝트',
    whatIdo: ['블로그 기능 기획', 'Front-End 개발'],
    skills: ['Typescript', 'React', 'Next.js', 'Apollo-Client', 'Apollo-Server', 'Graphql', 'Mongoose'],
    whatIdoTitle: '담당 작업',
    urls: ['https://github.com/lumyjuwon/elaina-blog']
  },
  {
    name: 'Genshin-Simul',
    description: '"원신" 게임 시뮬레이터 사이트',
    whatIdo: ['Front-End 개발'],
    skills: ['Typescript', 'React', 'Redux', 'Redux-Persist'],
    whatIdoTitle: '담당 작업',
    urls: ['https://github.com/lumyjuwon/genshin', 'https://lumyjuwon.github.io/genshin']
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
