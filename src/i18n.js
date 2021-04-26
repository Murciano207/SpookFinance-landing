import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const locales = ["bg", "cs", "da", "de", "el", "en", "es", "fi", "fr", "he", "hi", "hr", "hu", "id", "it", "ja", "ko", "lt", "nl", "pl", "pt", "ro", "ru", "sk", "sr", "sv", "th", "tr", "uk", "vi", "zh"];

const resources = {};
for (let i = 0; i< locales.length; i++ ){
  const locale = locales[i];
  resources[locale] = require(`locales/${locale}`); 
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
