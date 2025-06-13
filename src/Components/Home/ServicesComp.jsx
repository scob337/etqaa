import React from 'react'
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ServicesData from './../ServicesData';

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.09,
      duration: 0.7,
      ease: "easeOut"
    }
  }
};



const ServicesComp = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section className="py-20 bg-cyber-primary min-h-[80vh]" dir={isRTL ? 'rtl' : 'ltr'}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4"
      >
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-cyber-gradient bg-clip-text text-transparent tracking-wider"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {t('services.title')}
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8"
          variants={containerVariants}
        >
<ServicesData/>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ServicesComp
