import styled from 'styled-components';
import { Resources } from '../../resources';

const IconInfoContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  marginTop: '4px',
  marginBottom: '4px'
});

const Icon = styled.img({
  width: '28px'
});

const Info = styled.a({
  fontSize: '14px'
});

interface IconInfoProps {
  src: string;
  alt: string;
  href: string;
  info: string;
}

function IconInfo(props: IconInfoProps) {
  return (
    <IconInfoContainer>
      <a href={props.href} target='_blank' rel='noreferrer'>
        <Icon src={props.src} alt={props.alt} />
      </a>
      <div style={{ margin: '5px' }}></div>
      <Info href={props.info.startsWith('http') ? props.info : undefined} target='_blank'>
        {props.info}
      </Info>
    </IconInfoContainer>
  );
}

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column'
});

const Context = styled.span({
  fontSize: '14px'
});

export function Profile() {
  return (
    <Container>
      <h3>{Resources.resume.profile.name}</h3>
      <IconInfo
        src={Resources.icons.gmail}
        alt={'GmailIcon'}
        href={`mailto:${Resources.resume.profile.email}`}
        info={Resources.resume.profile.email}
      />
      <IconInfo
        src={Resources.icons.github}
        alt={'GithubIcon'}
        href={Resources.resume.profile.github}
        info={Resources.resume.profile.github}
      />
      <IconInfo
        src={Resources.icons.linkedin}
        alt={'LinkedInIcon'}
        href={Resources.resume.profile.linkedin}
        info={Resources.resume.profile.linkedin}
      />
      <h3>About</h3>
      <Context>{Resources.resume.profile.about}</Context>
    </Container>
  );
}
