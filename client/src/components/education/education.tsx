import styled from 'styled-components';
import { Resources } from '../../resources/index';

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

interface Props {
  lang: string;
}

export function Education({ lang }: Props) {
  return (
    <Container>
      <h3>Education</h3>
      {Resources.resumeResources[`resume-${lang}`].educations.map((education) => (
        <div key={education.title}>
          <UniversityName>{education.title}</UniversityName>
          <UniversityDate>{education.period}</UniversityDate>
        </div>
      ))}
    </Container>
  );
}
