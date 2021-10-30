import styled from 'styled-components';
import { trans } from '../../resources/lang';
import { IEducation } from '../../resources/resumes/type';

const Container = styled.div({
  alignItems: 'center'
});

const UniversityName = styled.span({
  fontSize: '16px',
  '@media screen and (max-width: 768px)': {
    display: 'block'
  }
});

const UniversityDate = styled.span({
  fontSize: '14px',
  marginLeft: '8px',
  '@media screen and (max-width: 768px)': {
    marginLeft: '0px'
  }
});

export function Education() {
  const educations: IEducation[] = trans('educations');

  return (
    <Container>
      <h3>Education</h3>
      {educations.map((education) => (
        <div key={education.title}>
          <UniversityName>{education.title}</UniversityName>
          <UniversityDate>{education.period}</UniversityDate>
        </div>
      ))}
    </Container>
  );
}
