import { Directions, Languages } from '@types';
import { i18n } from 'i18next';
import { useTranslation } from 'react-i18next';
import * as React from 'react';

export const useLanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = localStorage.getItem('lang') || Languages.EN;
  const changeLanguage = () => {
    currentLang === Languages.EN
      ? switchLanguage(Languages.AR, i18n)
      : switchLanguage(Languages.EN, i18n);
  };

  React.useEffect(() => {
    if (currentLang === Languages.AR) {
      switchLanguage(Languages.AR, i18n);
    }
  }, []);

  return {
    currentLang,
    changeLanguage,
  };
};

export const switchLanguage = (lang: Languages, i18n: i18n) => {
  if (lang === Languages.AR) {
    document.body.dir = Directions.RTL;
    localStorage.setItem('lang', Languages.AR);
    i18n.changeLanguage('ar');
    controlRTLStylesheet('add');
  } else {
    document.body.dir = Directions.LTR;
    localStorage.setItem('lang', Languages.EN);
    i18n.changeLanguage('en');
    controlRTLStylesheet('remove');
  }
};

export const controlRTLStylesheet = (type = 'add') => {
  const links = document.querySelectorAll('link[rel="stylesheet"]');
  if (type == 'add') {
    links.forEach((styleSheet: HTMLLinkElement) => {
      if (styleSheet.href.endsWith('.chunk.css')) {
        const link = document.createElement('link');
        link.href = styleSheet.href.replace(/\.css$/, '.rtl.css');
        link.rel = 'stylesheet';
        document.body.appendChild(link);
      }
    });
  } else {
    links.forEach((styleSheet: HTMLLinkElement) => {
      if (styleSheet.href.endsWith('.chunk.rtl.css')) {
        document.body.removeChild(styleSheet);
      }
    });
  }
};
