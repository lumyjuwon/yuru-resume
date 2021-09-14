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
        {`현업에서 2년간 "개발", "검증", "배포", "이슈 대응" 프로세스를 경험했으며 Product 및 Game Tool 개발을 맡고 있는 Platform & Tool Programmer 입니다.
          Node.js를 기반으로 게임의 크로스 플랫폼(Windows, Android, iOS)을 지원하며 사내 업무 자동화, 게임 e2e 검증 등의 다양한 Game Tool을 개발하고
          개발된 Game Tool을 이용해 업무 프로세스를 확립 하여 낭비되는 휴먼 리소스를 줄여 업무 생산성을 높이는데 기여하고 있습니다.
          Game Tool 개발 이외에는 Windows, Android, iOS 게임 플랫폼 개발(SDK 작업)을 맡고 있습니다.`}
      </Context>
    </Container>
  );
}
