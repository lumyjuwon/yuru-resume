import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link, RouteComponentProps } from 'react-router-dom';

import { Profile, Experience, Education, Skills, ToyProject } from './components';
import { resumeFilenames, defaultResume } from './resources';

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

interface ResumeProps extends RouteComponentProps {}

function Resume({ location }: ResumeProps) {
  const lang = location.pathname === '/' ? defaultResume.replace('resume-', '').replace('.json', '') : location.pathname.replace('/', '');
  return (
    <Container>
      <Profile lang={lang} />
      <Border />
      <Skills lang={lang} />
      <Border />
      <Experience lang={lang} />
      <Border />
      <ToyProject lang={lang} />
      <Border />
      <Education lang={lang} />
    </Container>
  );
}

function App() {
  const languages = resumeFilenames.map((filename) => filename.replace('resume-', '').replace('.json', ''));

  return (
    <Router>
      <div>
        <ul>
          {languages.map((lang) => (
            <li key={lang}>
              <Link to={`${lang}`}>{lang}</Link>
            </li>
          ))}
        </ul>
      </div>

      <Switch>
        <Route exact path='/' component={Resume} />
        <Route exact path='/:code' component={Resume} />
      </Switch>
    </Router>
  );
}

export default App;
