import styled from 'styled-components';
import { Resources } from '../../resources';

function DownloadHeader() {
  return (
    <a
      style={{ marginLeft: '8px' }}
      href={'https://github.com/lumyjuwon/lumy-resume/raw/master/sample/files/pdf.pdf'}
      target='_blank'
      rel='noreferrer'
    >
      <img src={Resources.icons.pdf} width={36} alt={'Icon'} />
    </a>
  );
}

const Container = styled.div({});

export function Header() {
  return (
    <Container>
      <DownloadHeader />
    </Container>
  );
}
