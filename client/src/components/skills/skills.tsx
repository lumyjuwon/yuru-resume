import styled from 'styled-components';
import { trans } from '../../resources/lang';

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

export function Skills() {
  const mainSkills: any = trans('skills.main');
  const additionalSkills: any = trans('skills.additional');

  return (
    <Container>
      <h3>Main Skills</h3>
      {Object.keys(mainSkills).map((title) => (
        <SkillDescription key={title} title={title} description={mainSkills[title]} />
      ))}

      <h3>Additional Skills</h3>
      {Object.keys(additionalSkills).map((title) => (
        <SkillDescription key={title} title={title} description={additionalSkills[title]} />
      ))}
    </Container>
  );
}
