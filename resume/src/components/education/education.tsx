import styled from 'styled-components';

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
      <UniversityName>국민대학교 소프트웨어학부 (군휴학)</UniversityName>
      <UniversityDate>(2018 ~)</UniversityDate>
    </Container>
  );
}
