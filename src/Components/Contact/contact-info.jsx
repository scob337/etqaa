import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactInfo = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const textAlign = isArabic ? 'text-right' : 'text-left';

  return (
    <div className="bg-white/5 p-8 rounded-lg" dir={isArabic ? 'rtl' : 'ltr'}>
      <h3 className={`text-2xl font-bold mb-6 ${textAlign}`}>{t('contact.info.title')}</h3>
      <div className="space-y-6">

        <div className="flex flex-row items-start group">
          <div className={`${isArabic ? 'ml-6' : 'mr-6'} mt-1 bg-cyber-dark p-3 rounded-xl group-hover:bg-zinc-500 transition-all duration-300`}>
            <FaMapMarkerAlt className="text-white w-6 h-6" />
          </div>
          <div className={textAlign}>
            <h4 className="font-semibold mb-2 text-lg text-white">{t('contact.info.address.label')}</h4>
            <p className="text-gray-400 leading-relaxed">{t('contact.info.address.value')}</p>
          </div>
        </div>

        <div className="flex flex-row items-start group">
          <div className={`${isArabic ? 'ml-6' : 'mr-6'} mt-1 bg-cyber-dark p-3 rounded-xl group-hover:bg-zinc-500 transition-all duration-300`}>
            <FaPhone className="text-white w-6 h-6" />
          </div>
          <div className={textAlign}>
            <h4 className="font-semibold mb-2 text-lg text-white">{t('contact.info.phone.label')}</h4>
            <p className="text-gray-400 leading-relaxed">{t('contact.info.phone.value')}</p>
          </div>
        </div>

        <div className="flex flex-row items-start group">
          <div className={`${isArabic ? 'ml-6' : 'mr-6'} mt-1 bg-cyber-dark p-3 rounded-xl group-hover:bg-zinc-500 transition-all duration-300`}>
            <FaEnvelope className="text-white w-6 h-6" />
          </div>
          <div className={textAlign}>
            <h4 className="font-semibold mb-2 text-lg text-white">{t('contact.info.email.label')}</h4>
            <p className="text-gray-400 leading-relaxed">{t('contact.info.email.value')}</p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h4 className={`font-semibold mb-6 text-lg text-white ${textAlign}`}>
          {t('contact.info.social')}
        </h4>
        <div className="flex gap-4 flex-row justify-start">
        <div className="flex gap-4 flex-row justify-start">
          <a href="http://linkedin.com/company/etqaa-company-for-cyber-%E2%80%8B%E2%80%8Bsecurity/" target="_blank" rel="noopener noreferrer" className="bg-cyber-dark p-4 rounded-xl hover:bg-zinc-500 transition-all duration-300 group">
            <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://x.com/etqaaco?s=21" target="_blank" rel="noopener noreferrer" className="bg-cyber-dark p-4 rounded-xl hover:bg-zinc-500 transition-all duration-300 group">
            <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>

        </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
