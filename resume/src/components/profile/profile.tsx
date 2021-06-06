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

const About = styled.span({
  fontSize: '14px'
});

export function Profile() {
  return (
    <Container>
      <h2>성주원</h2>
      <IconInfo
        src={Resources.gmail_512}
        alt={'GmailIcon'}
        href={'mailto:lumyjuwon@gmail.com'}
        info={'lumyjuwon@gmail.com'}
      />
      <IconInfo
        src={Resources.github_512}
        alt={'GithubIcon'}
        href={'https://github.com/lumyjuwon'}
        info={'https://github.com/lumyjuwon'}
      />
      <IconInfo
        src={Resources.linkedin_512}
        alt={'LinkedInIcon'}
        href={'https://www.linkedin.com/in/juwon-seong-a39b64170/'}
        info={'https://www.linkedin.com/in/juwon-seong-a39b64170/'}
      />
      <h2>About</h2>
      <About>제품, 자동화, 사내 툴 개발 등의 업무를 맡은 경험이 있습니다.</About>
      <About>
        스스로 회사 밖(유저)과 회사 안(개발자)에서 필요한 것들을 찾아 개발하며 사용자가 제품을 이용하는 모습을 볼 때 더
        완벽하게 만들려는 자극을 받습니다.
      </About>
      <About>개발 철학으로서 한 번 쓰고 버려지는 제품이 되지 않도록 UX를 가장 중요시 여기고 있습니다.</About>
    </Container>
  );
}
