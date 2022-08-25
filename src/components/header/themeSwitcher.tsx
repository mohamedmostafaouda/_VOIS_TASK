import * as React from 'react';
import MoonIcon from 'assets/icons/moon.svg';
import SunIcon from 'assets/icons/sun.svg';
import styles from './styles/themeSwitcher.scss';
import themes from '../../styles/_colors.scss';
import { useGetCurrentTheme } from './hooks/useGetCurrentTheme';
import { Theme } from '@types';

export const ThemeSwitcher = () => {
  const [theme, setTheme] = React.useState(useGetCurrentTheme());
  const icon = theme.currentTheme !== Theme.DARK ? <MoonIcon /> : <SunIcon />;
  const switchTheme = () => {
    const nextTheme = theme.currentTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    localStorage.setItem('theme', nextTheme);

    if (theme.preferredTheme === Theme.DARK) {
      document.body.classList.toggle(themes.light);
    } else {
      document.body.classList.toggle(themes.dark);
    }
    setTheme({ ...theme, currentTheme: nextTheme });
  };

  React.useEffect(() => {
    if (theme.preferredTheme === Theme.DARK && theme.currentTheme === Theme.LIGHT) {
      document.body.classList.add(themes.light);
    }
    if (theme.preferredTheme === Theme.LIGHT && theme.currentTheme === Theme.DARK) {
      document.body.classList.add(themes.dark);
    }
  }, []);

  return (
    <button
      onClick={() => {
        switchTheme();
      }}
      className={styles.icon}
    >
      {icon}
    </button>
  );
};
