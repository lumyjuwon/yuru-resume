import { useEffect } from 'react';
import styled from 'styled-components';

import { Profile, Experience, Education, Skills, ToyProject } from './components';
import { changeLang } from './lang';
import { useTranslation } from 'react-i18next';
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

function parseSearchParams(search: string) {
  const params: { [key: string]: any } = {};

  const searchParams = search.substr(1).split('&');
  for (const searchParam of searchParams) {
    const [key, value] = searchParam.split('=');
    params[key] = value;
  }

  return params;
}

function App() {
  const searchParams = parseSearchParams(document.location.search);

  useTranslation();

  useEffect(() => {
    changeLang(searchParams['lang']);
  }, []);

  return (
    <Container>
      <ToolHeader />

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
