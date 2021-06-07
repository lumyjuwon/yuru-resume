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
  fontSize: '16px'
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
      <About>
        제품, 자동화, 사내 툴 개발 등의 업무를 맡고 있으며 스스로 필요한 것을 찾아 개발하며 사용자가 제품을 이용하는
        모습을 볼 때 더 완벽하게 만들려는 자극을 받습니다. Front-End 분야에 관심이 많으며 좋은 코드, 클린 코드란
        무엇인가에 대해서 계속 생각하며 코드를 작성합니다. 제품 개발만 아니라 제품의 유지 보수에 따른 시간 소비를 최대한
        줄일 수 있도록 자동화 하는 것을 좋아합니다.
      </About>
    </Container>
  );
}
