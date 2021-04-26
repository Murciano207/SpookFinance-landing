import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const locales = ["de", "en", "es", "fr", "hi", "id", "it", "ja", "ko", "pt", "ru", "th", "tr", "vi", "zh"];

const resources = {};
for (let i = 0; i< locales.length; i++ ){
  const locale = locales[i];
  resources[locale] = { translation: require(`locales/${locale}`)}; 
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
