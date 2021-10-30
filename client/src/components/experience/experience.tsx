import styled from 'styled-components';
import { CompanyInfo } from './companyInfo';
import { Project } from '../common/project';
import { Resources } from '../../resources';
import { IProject } from '../../resources/resume/type';

const Container = styled.div({});

export function Experience() {
  return (
    <Container>
      <h3>Work Experience</h3>
      {Resources.resume.experiences.map((experience) => (
        <>
          <CompanyInfo
            key={experience.company}
            companyName={experience.company}
            startDate={new Date(experience.startDate)}
            endDate={experience.endDate ? new Date(experience.endDate) : undefined}
          >
            {experience.projects.map((project: IProject) => {
              return <Project key={project.name} project={project} />;
            })}
          </CompanyInfo>
        </>
      ))}
    </Container>
  );
}
