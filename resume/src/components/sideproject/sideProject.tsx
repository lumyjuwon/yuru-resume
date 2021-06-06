import styled from 'styled-components';

interface Project {
  name: string;
  description: string;
  whatIdo: string[];
  skills: string[];
  urls?: string[];
}

const projects: Project[] = [
  {
    name: 'Elaina-Blog',
    description: '기술 블로그',
    whatIdo: ['dsa', 'dsa'],
    skills: ['dsa', 'dsa'],
    urls: ['github.com']
  }
];

const Container = styled.div({});

export function SideProject() {
  return (
    <Container>
      <h2>SideProject</h2>
      {projects.map((project: Project) => {
        return <div key={project.name}>{project.name}</div>;
      })}
    </Container>
  );
}
