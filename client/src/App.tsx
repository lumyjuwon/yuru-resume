import { useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { Profile, Experience, Education, Skills, ToyProject } from './components';
import { Header } from './components/common/Header';
import { changeLangCode } from './lang';

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
    if (searchParams['lang']) {
      changeLangCode(searchParams['lang']);
    }
  }, []);

  return (
    <Container>
      <Header />

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
