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
      className={`py-16 px-4 md:px-8 bg-cyber-primary text-white`}
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
      <div  className="relative h-[50vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80)`,
          }}
        >
          {/* Overlay to darken the image */}
          <div className="absolute inset-0 bg-black/70"></div>
          
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-primary/80 to-transparent"></div>
          
          {/* Digital circuit pattern overlay */}
          <div className="absolute inset-0 opacity-10 z-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="circuit-grid-services" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyber-accent/30" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit-grid-services)" />
            </svg>
          </div>
        </div>

        <div className={`relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center `}>
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-5xl md:text-6xl font-bold max-w-3xl mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent font-cyber py-4"
    >
      {t('contact.title')}
    </motion.h1>
    
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-gray-300 max-w-xl text-lg leading-relaxed"
    >
      {t('contact.subtitle')}
    </motion.p>
    
    <motion.div 
      initial={{ width: 0 }}
      animate={{ width: '180px' }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className={`h-1.5 bg-cyber-gradient mt-7 rounded-full shadow-glow-sm `}
    />
  </div>
      </div>
<br/>
<br/>

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
