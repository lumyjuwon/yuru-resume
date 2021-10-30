import styled from 'styled-components';
import { Profile, Experience, Education, Skills, ToyProject } from './components';

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
  return (
    <Container>
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
