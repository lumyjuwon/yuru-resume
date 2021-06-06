import styled from 'styled-components';

const Container = styled.div({
  alignItems: 'center'
});

const UniversityName = styled.span({
  fontSize: '18px'
});

const UniversityDate = styled.span({
  fontSize: '16px',
  marginLeft: '8px'
});

export function Education() {
  return (
    <Container>
      <h2>Education</h2>
      <UniversityName>국민대학교 소프트웨어학부</UniversityName>
      <UniversityDate>(2018 ~)</UniversityDate>
    </Container>
  );
}
