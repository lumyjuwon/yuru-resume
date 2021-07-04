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
  fontSize: '16px'
});

export function Profile() {
  return (
    <Container>
      <h2>성주원 (SeongJuWon)</h2>
      <IconInfo src={Resources.gmail_512} alt={'GmailIcon'} href={'mailto:lumyjuwon@gmail.com'} info={'lumyjuwon@gmail.com'} />
      <IconInfo src={Resources.github_512} alt={'GithubIcon'} href={'https://github.com/lumyjuwon'} info={'https://github.com/lumyjuwon'} />
      <IconInfo
        src={Resources.linkedin_512}
        alt={'LinkedInIcon'}
        href={'https://www.linkedin.com/in/juwon-seong-a39b64170/'}
        info={'https://www.linkedin.com/in/juwon-seong-a39b64170/'}
      />
      <h2>About</h2>
      <Context>
        {'제품 및 툴 개발에 흥미를 가지고 있으며 "개발 -> 검증 -> 배포 -> 유지보수"의 프로세스 경험을 많이 가지고 있는 개발자입니다.'}
      </Context>
      <Context>
        {
          '개발한 제품으로 사람들을 행복하게 만들며 툴 개발을 통해 제품의 안정성과 개발 생산성을 높여 유저분들에게 퀄리티 높은 제품을 제공하려고 노력하고 있습니다.'
        }
      </Context>
    </Container>
  );
}
