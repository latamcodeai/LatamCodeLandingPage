import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      translation: new Proxy({}, {
        get: (target, prop) => prop // Devuelve la clave como valor
      })
    }
  },
  interpolation: { escapeValue: false },
});

export default i18n; 