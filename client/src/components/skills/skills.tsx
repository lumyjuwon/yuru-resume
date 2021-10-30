import styled from 'styled-components';
import { Resources } from '../../resources';

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
      {Object.keys(Resources.resume.skills.main).map((title) => (
        <SkillDescription key={title} title={title} description={Resources.resume.skills.main[title]} />
      ))}

      <h3>Additional Skills</h3>
      {Object.keys(Resources.resume.skills.additional).map((title) => (
        <SkillDescription key={title} title={title} description={Resources.resume.skills.additional[title]} />
      ))}
    </Container>
  );
}
