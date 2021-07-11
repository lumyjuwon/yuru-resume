import styled from 'styled-components';

const SkillDescriptionContainer = styled.div({
  marginTop: '8px'
});

const Title = styled.span({
  fontSize: '16px'
});

const Description = styled.span({
  fontSize: '14px'
});

interface SKillDescriptionProps {
  title: string;
  description: string;
}

function SkillDescription(props: SKillDescriptionProps) {
  return (
    <SkillDescriptionContainer>
      <Title>{props.title}: </Title>
      <Description>{props.description}</Description>
    </SkillDescriptionContainer>
  );
}

const Container = styled.div({});

interface Props {}

export function Skills(props: Props) {
  return (
    <Container>
      <h2>Main Skills</h2>
      <SkillDescription title={'Language'} description={'Typescript'} />
      <SkillDescription title={'Front-End'} description={'React, Styled-Component'} />
      <SkillDescription title={'Back-End'} description={'Node.js'} />
      <SkillDescription title={'Technologies'} description={'Android, iOS, Jenkins, Appium'} />

      <h2>Additional Skills</h2>
      <SkillDescription title={'Language'} description={'Python, Java, C#'} />
      <SkillDescription title={'Front-End'} description={'Nextjs, Apollo-Client'} />
      <SkillDescription title={'Back-End'} description={'Express, Mongoose, Apollo-Server'} />
      <SkillDescription title={'Technologies'} description={'MongoDB, GraphQL'} />
    </Container>
  );
}
