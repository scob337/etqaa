import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
    document.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 z-50"
    >
      {i18n.language === 'en' ? 'العربية' : 'English'}
    </button>
  );
};

export default LanguageSwitcher;