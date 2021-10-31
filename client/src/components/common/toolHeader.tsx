import styled from 'styled-components';

import { Resources, resumeDownloadFiles } from '../../resources';
import { getCurrentLanguage } from '../../resources/lang';

interface DownloadHeaderProps {
  lang: string;
}

function DownloadHeader(props: DownloadHeaderProps) {
  return (
    <a href={resumeDownloadFiles[props.lang].pdf} target='_blank' rel='noreferrer'>
      <img src={Resources.icons.pdf} width={36} alt={'Icon'} />
    </a>
  );
}

const Container = styled.div({
  display: 'flex',
  justifyContent: 'flex-end'
});

export function ToolHeader() {
  if (navigator.userAgent === 'Deploy') {
    return null;
  }

  return (
    <Container>
      <DownloadHeader lang={getCurrentLanguage()} />
    </Container>
  );
}
