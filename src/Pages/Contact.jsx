import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import LocationMap from '../Components/Contact/location-map';
import ContactInfo from '../Components/Contact/contact-info';
import ContactForm from '../Components/Contact/contact-form';

const Contact = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  // تأثيرات الأنيميشن
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="contact" 
      className={`py-16 px-4 md:px-8 bg-[#0A162C] text-white`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <Helmet>
        <title>{t('contact.meta.title')}</title>
        <meta name="description" content={t('contact.meta.description')} />
        <meta name="keywords" content="cybersecurity, ETQAA, information security, network protection, cyber defense, data security, Saudi Arabia" />
        <meta property="og:title" content={t('contact.meta.title')} />
        <meta property="og:description" content={t('contact.meta.description')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://etqaa.com/contact" />
      </Helmet>

      <div className="max-w-screen-2xl mx-auto">
        <motion.div className="text-center mb-16">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            {t('contact.title')}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16`}
        >
          <motion.div variants={itemVariants} className="lg:order-1">
            <ContactForm />
          </motion.div>
          <motion.div variants={itemVariants} className="lg:order-2">
            <ContactInfo />
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="rounded-lg overflow-hidden"
        >
          <LocationMap />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
