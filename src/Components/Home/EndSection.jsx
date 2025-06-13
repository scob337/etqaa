import React from 'react'
import { motion } from 'framer-motion'
import { FaShieldAlt, FaUsers, FaCheckCircle, FaClock, FaLock } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const EndSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const stats = [
    {
      icon: <FaShieldAlt className="text-4xl text-cyber-accent" />,
      number: "500+",
      label: t('end.stats.solutions') || (isRTL ? 'حلول أمنية منفذة' : 'Security Solutions Delivered')
    },
    {
      icon: <FaUsers className="text-4xl text-cyber-accent" />,
      number: "200+",
      label: t('end.stats.clients') || (isRTL ? 'عملاء راضون' : 'Satisfied Clients')
    },
    {
      icon: <FaCheckCircle className="text-4xl text-cyber-accent" />,
      number: "99.9%",
      label: t('end.stats.success_rate') || (isRTL ? 'معدل النجاح' : 'Success Rate')
    },
    {
      icon: <FaClock className="text-4xl text-cyber-accent" />,
      number: "24/7",
      label: t('end.stats.support') || (isRTL ? 'دعم متواصل' : 'Support Available')
    }
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="bg-cyber-dark py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyber-blue/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyber-accent/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyber-primary/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Stats Section */}
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center text-center bg-cyber-secondary p-6 rounded-cyber border border-cyber-gray-dark shadow-cyber hover:shadow-cyber-lg hover:border-cyber-accent/50 transition-all duration-300"
              variants={itemVariants}
            >
              <div className="bg-cyber-primary p-3 rounded-cyber inline-block">
                {stat.icon}
              </div>
              <span className="text-3xl font-bold text-white mt-4">{stat.number}</span>
              <span className="text-gray-400 mt-2">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-cyber-primary to-cyber-secondary p-8 md:p-12 rounded-cyber shadow-cyber border border-cyber-gray relative"
          variants={itemVariants}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {t('end.cta.title') || (isRTL ? 'جاهز لتعزيز أمان أصولك الرقمية؟' : 'Ready to Secure Your Digital Assets?')}
            </h2>
            <p className="text-gray-300 mb-8">
              {t('end.cta.description') || (isRTL ? 'دعنا نعمل معًا لحماية أعمالك من التهديدات السيبرانية. فريقنا من الخبراء جاهز للمساعدة.' : "Let's work together to protect your business from cyber threats. Our team of experts is ready to help.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="px-8 py-3 bg-cyber-gradient hover:bg-cyber-gradient-hover text-white rounded-cyber font-semibold shadow-cyber-sm hover:shadow-cyber transition-all duration-300 flex items-center justify-center">
                <FaShieldAlt className={`${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t('end.cta.get_started') || (isRTL ? 'ابدأ الآن' : 'Get Started')}
              </Link>
              <Link to="/contact" className="px-8 py-3 bg-transparent hover:bg-cyber-accent/10 text-cyber-accent border border-cyber-accent/50 rounded-cyber font-semibold shadow-cyber-sm hover:shadow-cyber transition-all duration-300 flex items-center justify-center">
                <FaLock className={`${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t('end.cta.contact_us') || (isRTL ? 'تواصل معنا' : 'Contact Us')}
              </Link>
            </div>
          </div>              
        </motion.div>
      </motion.div>
    </section>
  )
}

export default EndSection