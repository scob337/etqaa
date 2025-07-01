import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { IoLanguage } from 'react-icons/io5';
import { FaGlobe } from 'react-icons/fa';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
    document.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="fixed bottom-5 left-5 cursor-pointer bg-cyber-primary border border-cyber-accent/40 text-white hover:text-cyber-accent px-4 py-2 rounded-cyber shadow-cyber hover:shadow-cyber-hover hover:border-cyber-accent/70 transition-all duration-300 z-50 flex items-center gap-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <FaGlobe className="text-cyber-accent text-lg" />
      <span className="font-medium">{i18n.language === 'en' ? 'العربية' : 'English'}</span>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-cyber-gradient rounded-b-cyber transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    </motion.button>
  );
};

export default LanguageSwitcher;