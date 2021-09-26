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
      <h3>Main Skills</h3>
      <SkillDescription title={'Language'} description={'Typescript'} />
      <SkillDescription title={'Front-End'} description={'React, React-Native, Styled-Component'} />
      <SkillDescription title={'Back-End'} description={'Node.js'} />
      <SkillDescription title={'Platform'} description={'Android, iOS'} />
      <SkillDescription title={'VCS'} description={'Git, Svn'} />
      <SkillDescription title={'Technologies'} description={'Jenkins'} />

      <h3>Additional Skills</h3>
      <SkillDescription title={'Language'} description={'Python, Java, C#, C++'} />
      <SkillDescription title={'Front-End'} description={'Apollo-Client'} />
      <SkillDescription title={'Back-End'} description={'Nextjs, Express, Mongoose, Apollo-Server'} />
      <SkillDescription title={'Database'} description={'MongoDB'} />
      <SkillDescription title={'QueryLanguage'} description={'SQL, GraphQL'} />
      <SkillDescription title={'Platform'} description={'Windows, MacOS, Linux'} />
      <SkillDescription title={'VCS'} description={'Perforce'} />
    </Container>
  );
}
