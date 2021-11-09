import { useState, useRef } from 'react';
import styled from 'styled-components';

import { resources, resumeDownloadFiles } from '../../resources';
import { getCurrentLangCode, langCodes, changeLangCode } from '../../lang';
import { FocusWrapper } from './focusWrapper';

interface DownloadHeaderProps {
  lang: string;
}

function DownloadHeader(props: DownloadHeaderProps) {
  return (
    <div>
      <a href={resumeDownloadFiles[props.lang].pdf} target='_blank' rel='noreferrer'>
        <img src={resources.icons.pdf} width={36} alt={'Icon'} />
      </a>
      <a href={resumeDownloadFiles[props.lang].png} target='_blank' rel='noreferrer'>
        <img src={resources.icons.png} width={36} alt={'Icon'} />
      </a>
    </div>
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

const LanguageItem = styled.li<{ isDefaultValue: boolean }>((props) => ({
  width: '100%',
  padding: '8px',
  borderRadius: '8px',
  wordBreak: 'break-all',
  textAlign: 'center',
  backgroundColor: props.isDefaultValue ? '#ddd' : '',
  '&:hover': {
    backgroundColor: '#ddd',
    cursor: 'pointer'
  }
}));

function LanguageMenu() {
  const [langMenuOpen, setLangMemuOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const currentLangCode = getCurrentLangCode();

  function closeLangMenu() {
    setLangMemuOpen(false);
  }

  return (
    <div>
      <Button onClick={() => setLangMemuOpen(true)} isOpen={langMenuOpen}>
        <span>{currentLangCode}</span>
        <b>&gt;</b>
      </Button>
      <FocusWrapper ref={langRef} visible={langMenuOpen} onClickOutside={closeLangMenu}>
        <LanguageContainer>
          {Object.keys(langCodes).map((code) => (
            <LanguageItem
              isDefaultValue={currentLangCode === code}
              key={code}
              onClick={() => {
                changeLangCode(code);
                closeLangMenu();
              }}
            >
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
  marginBottom: '36px',
  justifyContent: 'space-between',
  alignItems: 'center',
  userSelect: 'none'
});

export function Header() {
  if (navigator.userAgent === 'Deploy') {
    return null;
  }

  return (
    <Container>
      <LanguageMenu />
      <DownloadHeader lang={getCurrentLangCode()} />
    </Container>
  );
}
