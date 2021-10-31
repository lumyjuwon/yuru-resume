import styled from 'styled-components';
import { useLocation, withRouter, BrowserRouter } from 'react-router-dom';

import { Profile, Experience, Education, Skills, ToyProject } from './components';
import { changeLang, langCodes } from './resources/lang';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { ToolHeader } from './components/common/toolHeader';

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
  const pathname = document.location.pathname;

  useEffect(() => {
    if (pathname !== '/') {
      changeLang(pathname.replace('/', ''));
    }
  }, [pathname]);

  useTranslation();

  return (
    <Container>
      <ToolHeader />
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
