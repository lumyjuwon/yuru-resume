import { useState, useRef } from 'react';
import styled from 'styled-components';

import { Resources, resumeDownloadFiles } from '../../resources';
import { getCurrentLanguage, langCodes, changeLang } from '../../lang';
import { FocusWrapper } from './focusWrapper';

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

const Button = styled.button<{ isOpen: boolean }>((props) => ({
  padding: '8px',
  borderRadius: '8px',
  outline: 'none',
  border: 'none',
  backgroundColor: 'inherit',
  '&:hover': {
    backgroundColor: '#eee',
    cursor: 'pointer'
  },
  '& > span': {
    display: 'inline-block',
    marginRight: '8px',
    fontSize: '1rem'
  },
  '& > b': {
    display: 'inline-block',
    transform: props.isOpen ? 'rotate(270deg)' : 'rotate(90deg)',
    transition: '.2s all'
  }
}));

const LanguageContainer = styled.ul({
  position: 'absolute',
  top: '-8px',
  right: '0px',
  width: '100%',
  padding: '0px',
  backgroundColor: '#eee',
  borderRadius: '8px',
  listStyleType: 'none',
  zIndex: 1
});

const LanguageItem = styled.li({
  width: '100%',
  padding: '8px',
  wordBreak: 'break-all',
  textAlign: 'center',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: '#ddd',
    cursor: 'pointer'
  }
});

function LanguageMenu() {
  const [langMenuOpen, setLangMemuOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  function closeLangMenu() {
    setLangMemuOpen(false);
  }

  return (
    <div>
      <Button onClick={() => setLangMemuOpen(true)} isOpen={langMenuOpen}>
        <span>Languages</span>
        <b>&gt;</b>
      </Button>
      <FocusWrapper ref={langRef} visible={langMenuOpen} onClickOutside={closeLangMenu}>
        <LanguageContainer>
          {Object.keys(langCodes).map((code) => (
            <LanguageItem key={code} onClick={() => changeLang(code)}>
              {code}
            </LanguageItem>
          ))}
        </LanguageContainer>
      </FocusWrapper>
    </div>
  );
}

const Container = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center'
});

export function ToolHeader() {
  if (navigator.userAgent === 'Deploy') {
    return null;
  }

  return (
    <Container>
      <LanguageMenu />
      <DownloadHeader lang={getCurrentLanguage()} />
    </Container>
  );
}
