import i18n from 'i18next';

export const switchLanguage = (lang: 'en' | 'pt') => {
  i18n.changeLanguage(lang);
};
