import React from 'react'
import { motion } from 'framer-motion'
import { FaShieldAlt, FaUsers, FaCertificate, FaHandshake } from 'react-icons/fa'
import { MdSecurity, MdArchitecture } from 'react-icons/md'
import { RiGovernmentFill } from 'react-icons/ri'
import { BiSolidBrain } from 'react-icons/bi'
import { useTranslation } from 'react-i18next'



const About = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const services = [
    { icon: <RiGovernmentFill className="text-4xl" />, title: t('about.services.grc') },
    { icon: <MdArchitecture className="text-4xl" />, title: t('about.services.enterprise') },
    { icon: <MdSecurity className="text-4xl" />, title: t('about.services.security') },
    { icon: <FaShieldAlt className="text-4xl" />, title: t('about.services.soc') },
  ];

  const stats = [
    { icon: <FaUsers />, label: t('about.stats.team') },
    { icon: <FaHandshake />, label: t('about.stats.partners') },
    { icon: <FaCertificate />, label: t('about.stats.certifications') },
    { icon: <BiSolidBrain />, label: t('about.stats.innovation') }
  ];

  return (
    <div className="bg-cyber-primary text-white" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
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
      {t('about.title')}
    </motion.h1>
    
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-gray-300 max-w-xl text-lg leading-relaxed"
    >
      {t('about.subtitle')}
    </motion.p>
    
    <motion.div 
      initial={{ width: 0 }}
      animate={{ width: '180px' }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className={`h-1.5 bg-cyber-gradient mt-7 rounded-full shadow-glow-sm `}
    />
  </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Introduction */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            {t('about.intro')}
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-cyber-secondary rounded-2xl p-8 mb-20 border border-cyber-gray-dark"
        >
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {t('about.mission.title')}
          </h2>
          <p className="text-gray-300 leading-relaxed">
            {t('about.mission.content')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {t('about.services.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-cyber-secondary p-6 rounded-xl border border-cyber-gray-dark hover:border-cyber-accent/30 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision Section */}
        <motion.div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 mb-20 border border-[#223366]">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {t('about.vision.title')}
          </h2>
          <p className="text-gray-300 leading-relaxed">
            {t('about.vision.content')}
          </p>
        </motion.div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-cyan-400 text-4xl mb-4 flex justify-center">
                {stat.icon}
              </div>
              <h3 className="text-lg font-semibold">{stat.label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
