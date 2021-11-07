import styled from 'styled-components';
import { CompanyInfo } from './companyInfo';
import { Project } from '../common/project';
import { IExperience, IProject } from '../../resources/resumes/type';
import { trans } from '../../lang';

const Container = styled.div({});

export function Experience() {
  const experiences: IExperience[] = trans('experiences');

  return (
    <Container>
      <h3>Work Experience</h3>
      {experiences.map((experience) => (
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
      ))}
    </Container>
  );
}
