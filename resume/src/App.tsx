import './App.css';
import styled from 'styled-components';
import { Profile, Experience, Education, SideProject, Skills } from './components';
import { Resources } from './resources';

const Container = styled.div({
  width: '50%',
  display: 'flex',
  flexDirection: 'column'
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
      {/* <Border />
      <SideProject /> */}
      <Border />
      <Education />
    </Container>
  );
}

export default App;
