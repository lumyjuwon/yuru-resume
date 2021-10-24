import styled from 'styled-components';
import { Resources } from '../../resources/index';

const Container = styled.div({
  alignItems: 'center'
});

const UniversityName = styled.span({
  fontSize: '16px'
});

const UniversityDate = styled.span({
  fontSize: '14px',
  marginLeft: '8px'
});

export function Education() {
  return (
    <Container>
      <h3>Education</h3>
      {Resources.resume.education.map((edu) => (
        <div>
          <UniversityName>{edu.title}</UniversityName>
          <UniversityDate>{edu.period}</UniversityDate>
        </div>
      ))}
    </Container>
  );
}
