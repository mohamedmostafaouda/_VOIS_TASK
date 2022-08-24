import * as React from 'react';
import { Logo } from '../logo/logo';
import styles from './styles/header.scss';
import { ThemeSwitcher } from './themeSwitcher';

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <Logo />
      <div>
        <ThemeSwitcher />
      </div>
    </header>
  );
};
