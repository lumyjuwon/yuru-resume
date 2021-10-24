import styled from 'styled-components';
import { Project } from '../common/project';
import { Resources } from '../../resources';

const projects = Resources.resume.toyProjects;

const Container = styled.div({});

export function ToyProject() {
  return (
    <Container>
      <h3>Toy Project</h3>
      {projects.map((project) => {
        return <Project project={project} />;
      })}
    </Container>
  );
}
