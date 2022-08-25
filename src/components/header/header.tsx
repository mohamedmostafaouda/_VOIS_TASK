import * as React from 'react';
import { Logo } from '../logo/logo';
import { LanguageSwitcher } from './languageSwitcher';
import styles from './styles/header.scss';
import { ThemeSwitcher } from './themeSwitcher';

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <Logo />
      <div className={styles.optionsContainer}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </header>
  );
};
