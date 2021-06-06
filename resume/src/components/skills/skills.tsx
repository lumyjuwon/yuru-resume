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
      <h1>Main Skills</h1>
      <SkillDescription title={'Language'} description={'Typescript'} />
      <SkillDescription title={'Front-End'} description={'React, Styled-Component, Redux'} />
      <SkillDescription title={'Back-End'} description={'Node.js'} />
      <SkillDescription title={'Technologies'} description={'Jenkins, Appium'} />
      <h1>Additional Skills</h1>
      <SkillDescription title={'Language'} description={'Python, Java, C#, C++'} />
      <SkillDescription title={'Front-End'} description={'Nextjs, ApolloClient'} />
      <SkillDescription title={'Back-End'} description={'ApolloServer, Express, Mongoose'} />
      <SkillDescription title={'Technologies'} description={'MongoDB, GraphQL'} />
    </Container>
  );
}
