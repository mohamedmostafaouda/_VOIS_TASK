import { Languages } from '@types';
import * as React from 'react';
import { useLanguageSwitcher } from './hooks/useLanguageSwitcher';
import styles from './styles/languageSwitcher.scss';

export const LanguageSwitcher = () => {
  const { currentLang, changeLanguage } = useLanguageSwitcher();
  return (
    <div
      className={styles.langBtn}
      onClick={() => {
        changeLanguage();
      }}
    >
      {currentLang === Languages.AR ? Languages.EN : Languages.AR}
    </div>
  );
};
