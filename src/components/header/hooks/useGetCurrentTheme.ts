import { Theme } from '@types';

export const useGetCurrentTheme = () => {
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const currentTheme = localStorage.getItem('theme');
  const preferredTheme = prefersDarkScheme ? Theme.DARK : Theme.LIGHT;
  const outputTheme = currentTheme ?? preferredTheme;
  return {
    preferredTheme,
    currentTheme: outputTheme,
  };
};
