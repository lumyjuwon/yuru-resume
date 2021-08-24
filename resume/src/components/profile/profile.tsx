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
      <h3>성주원 (SeongJuWon)</h3>
      <IconInfo src={Resources.gmail_512} alt={'GmailIcon'} href={'mailto:lumyjuwon@gmail.com'} info={'lumyjuwon@gmail.com'} />
      <IconInfo src={Resources.github_512} alt={'GithubIcon'} href={'https://github.com/lumyjuwon'} info={'https://github.com/lumyjuwon'} />
      <IconInfo
        src={Resources.linkedin_512}
        alt={'LinkedInIcon'}
        href={'https://www.linkedin.com/in/juwon-seong-a39b64170/'}
        info={'https://www.linkedin.com/in/juwon-seong-a39b64170/'}
      />
      <h3>About</h3>
      <Context>
        {`현업에서 2년간 "개발" 🡢 "검증" 🡢 "배포" 🡢 "이슈 대응" 프로세스를 경험해 봤으며 유저분들에게 제공되는 Product 및 백오피스 Tool 개발을 맡고 있습니다.
          Product 개발 시에는 유저분들의 Need를 처리하는 것과 UI/UX를 중요시 여기며 Tool 개발 시에는 구성원 모두가 효율적으로 자주 사용하는 Tool이 되기 위해 UI/UX를 중요하게 여기고 있습니다.
          이 외에도 다양한 업무들을 자동화하여 개발 프로세스 향상 경험을 가지고 있습니다.`}
      </Context>
    </Container>
  );
}
