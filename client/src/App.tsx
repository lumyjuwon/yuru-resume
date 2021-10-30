import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { Profile, Experience, Education, Skills, ToyProject } from './components';
import { changeLang, langCodes } from './resources/lang';
import { useTranslation } from 'react-i18next';

const Container = styled.div({
  width: '52%',
  display: 'flex',
  flexDirection: 'column',
  '@media screen and (max-width: 768px)': {
    width: '90%'
  }
});

const Border = styled.div({
  borderBottom: '2px groove',
  margin: '24px 0 6px 0'
});

function App() {
  // 기본 도메인일 시:
  //   기본 언어 디텍
  //   컴포넌트 -> i18n -> 리소스
  //   기본 언어 -> 영어 -> 맨 위 레쥬메

  //   언어 버튼 -> translate

  // 아닐 시:
  //   url parsing -> 언어 translate
  useTranslation();

  return (
    <Container>
      <div>
        <ul>
          {Object.keys(langCodes).map((code) => (
            <li key={code} onClick={() => changeLang(code)}>
              {code}
            </li>
          ))}
        </ul>
      </div>

      <Profile />
      <Border />
      <Skills />
      <Border />
      <Experience />
      <Border />
      <ToyProject />
      <Border />
      <Education />
    </Container>
  );
}

export default App;
