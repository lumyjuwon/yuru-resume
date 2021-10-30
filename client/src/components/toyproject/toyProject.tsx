import styled from 'styled-components';
import { Project } from '../common/project';
import { Resources } from '../../resources';

const Container = styled.div({});

interface Props {
  lang: string;
}

export function ToyProject({ lang }: Props) {
  const projects = Resources.resumeResources[`resume-${lang}`].toyProjects;

  return (
    <Container>
      <h3>Toy Project</h3>
      {projects.map((project) => {
        return <Project key={project.name} project={project} />;
      })}
    </Container>
  );
}
