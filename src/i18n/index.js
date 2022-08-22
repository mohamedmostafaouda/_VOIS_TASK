import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/en.json';
import translationAR from './locales/ar/ar.json';

i18n
.use(initReactI18next)
.init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      translation: translationEN,
    },
    ar: {
      translation: translationAR,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
