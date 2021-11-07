import styled from 'styled-components';
import { resources } from '../../resources';
import { IProject } from '../../resources/resumes/type';

const SkillShieldContainer = styled.div({
  display: 'inline-block',
  backgroundColor: '#eee',
  borderRadius: '4px',
  marginTop: '16px',
  marginRight: '8px',
  padding: '3px 6px 3px 6px',
  '@media screen and (max-width: 768px)': {
    marginTop: '8px'
  }
});

function SkillShield(props: { children: string }) {
  return (
    <SkillShieldContainer>
      <span>{props.children}</span>
    </SkillShieldContainer>
  );
}

const ProjectInfoWrappwer = styled.div({
  display: 'flex',
  alignItems: 'center',
  '@media screen and (max-width: 768px)': {
    display: 'block'
  }
});

const ProjectTitle = styled.span({
  fontSize: '16px',
  fontWeight: 'bold',
  '@media screen and (max-width: 768px)': {
    display: 'block'
  }
});

const ProjectPeriod = styled.span({
  marginLeft: '4px',
  '@media screen and (max-width: 768px)': {
    marginLeft: '0px'
  }
});

function ProjectInfo(props: { title: string; description: string; period: string; urls?: string[] }) {
  function UrlIcon(urlIconProps: { url: string }) {
    let icon;
    if (urlIconProps.url.includes('google')) {
      icon = resources.icons.playstore;
    } else if (urlIconProps.url.includes('apple')) {
      icon = resources.icons.appstore;
    } else if (urlIconProps.url.includes('github.com')) {
      icon = resources.icons.github;
    } else {
      icon = resources.icons.url;
    }

    return (
      <a style={{ marginLeft: '8px' }} href={urlIconProps.url} target='_blank' rel='noreferrer'>
        <img src={icon} width={36} alt={'Icon'} />
      </a>
    );
  }

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <ProjectInfoWrappwer>
          <ProjectTitle>{props.title}</ProjectTitle>
          <ProjectPeriod>({props.period})</ProjectPeriod>
        </ProjectInfoWrappwer>
        {props.urls &&
          props.urls.map((url: string) => {
            return <UrlIcon key={url} url={url} />;
          })}
        <div style={{ display: 'flex', flex: 1, height: '2px', backgroundColor: '#bbb', marginLeft: '16px' }} />
      </div>
      <span>{props.description}</span>
    </>
  );
}

const DoDescriptionTitle = styled.span({
  display: 'block',
  fontSize: '16px',
  fontWeight: 'bold',
  marginBottom: '4px'
});

const DoDescriptionContainer = styled.div({
  marginTop: '16px'
});

function DoDescription(props: { descriptions: string[]; descriptionTitle?: string }) {
  return (
    <DoDescriptionContainer>
      <DoDescriptionTitle>{props.descriptionTitle}</DoDescriptionTitle>
      {props.descriptions.map((description: string) => {
        return (
          <div key={description}>
            <span>{description}</span>
          </div>
        );
      })}
    </DoDescriptionContainer>
  );
}

const Container = styled.div({
  margin: '16px 0 0 16px'
});

interface Props {
  project: IProject;
}

export function Project({ project }: Props) {
  return (
    <Container>
      <ProjectInfo title={project.name} description={project.description} period={project.period} urls={project.urls} />
      <DoDescription descriptions={project.whatIdo} descriptionTitle={project.whatIdoTitle} />
      {project.skills.map((skill: string) => {
        return <SkillShield key={skill}>{skill}</SkillShield>;
      })}
    </Container>
  );
}
