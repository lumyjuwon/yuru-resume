import styled from 'styled-components';
import { Project } from '../common/project';
import { trans } from '../../lang';
import { IProject } from '../../resources/resumes/type';

const Container = styled.div({});

export function ToyProject() {
  const projects: IProject[] = trans('toyProjects');

  return (
    <Container>
      <h3>Toy Project</h3>
      {projects.map((project) => {
        return <Project key={project.name} project={project} />;
      })}
    </Container>
  );
}
