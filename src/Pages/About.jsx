import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Helmet } from 'react-helmet'
import { FaShieldAlt, FaUsers, FaCertificate, FaHandshake, FaLock, FaCloud, FaNetworkWired, FaUserShield } from 'react-icons/fa'
import { MdSecurity, MdArchitecture, MdOutlineVerified } from 'react-icons/md'
import { RiGovernmentFill, RiShieldKeyholeFill } from 'react-icons/ri'
import { BiSolidBrain } from 'react-icons/bi'
import { GiCyberEye } from 'react-icons/gi'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Services with icons
  const services = [
    { key: 'penetrationTesting', icon: <GiCyberEye className="text-4xl" />, title: t('about.services.penetrationTesting') },
    { key: 'vulnerabilityAssessment', icon: <MdOutlineVerified className="text-4xl" />, title: t('about.services.vulnerabilityAssessment') },
    { key: 'grc', icon: <RiGovernmentFill className="text-4xl" />, title: t('about.services.grc') },
    { key: 'enterprise', icon: <MdArchitecture className="text-4xl" />, title: t('about.services.enterprise') },
    { key: 'cloudSecurity', icon: <FaCloud className="text-4xl" />, title: t('about.services.cloudSecurity') },
    { key: 'identityAccess', icon: <RiShieldKeyholeFill className="text-4xl" />, title: t('about.services.identityAccess') },
    { key: 'networkSecurity', icon: <FaNetworkWired className="text-4xl" />, title: t('about.services.networkSecurity') },
    { key: 'soc', icon: <FaShieldAlt className="text-4xl" />, title: t('about.services.soc') },
  ];

  // Stats with icons
  const stats = [
    { icon: <FaUsers className="text-3xl" />, label: t('about.stats.team'), value: '25+' },
    { icon: <FaHandshake className="text-3xl" />, label: t('about.stats.partners'), value: '15+' },
    { icon: <FaCertificate className="text-3xl" />, label: t('about.stats.certifications'), value: '50+' },
    { icon: <BiSolidBrain className="text-3xl" />, label: t('about.stats.innovation'), value: '100%' }
  ];

  return (
    <div className="bg-cyber-primary text-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <Helmet>
        <title>{t('about.title')} | ETQAA</title>
        <meta name="description" content={t('about.subtitle')} />
        <meta property="og:title" content={`${t('about.title')} | ETQAA`} />
        <meta property="og:description" content={t('about.subtitle')} />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80)` }}>
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-primary/80 to-transparent"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-bold max-w-3xl mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent font-cyber py-4">
            {t('about.title')}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-gray-300 max-w-xl text-lg leading-relaxed">
            {t('about.subtitle')}
          </motion.p>
          <motion.div initial={{ width: 0 }} animate={{ width: '180px' }} transition={{ delay: 0.3, duration: 0.6 }} className="h-1.5 bg-cyber-gradient mt-7 rounded-full shadow-glow-sm" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* About & Stats Section */}
        <motion.section ref={ref} initial="hidden" animate={controls} variants={fadeIn} className="mb-20 relative">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">
              {t('about.title')}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">{t('about.intro')}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={controls}
                      variants={{
                        hidden: { opacity: 0, scale: 0.9 },
                        visible: { opacity: 1, scale: 1, transition: { delay: 0.2 + index * 0.1 } }
                      }}
                      className="bg-cyber-secondary/50 p-4 rounded-xl border border-[var(--cyber-accent)]/10 hover:border-[var(--cyber-accent)]/30 transition-all duration-300"
                    >
                      <div className="text-cyan-400 mb-2 flex justify-center">{stat.icon}</div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                        <h3 className="text-sm font-medium text-gray-400">{stat.label}</h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Mission + Vision side by side */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={controls}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0, transition: { delay: 0.3 } }
                    }}
                    className="bg-cyber-secondary rounded-2xl p-6 border border-[var(--cyber-accent)]/10 hover:border-[var(--cyber-accent)]/30 transition-all duration-300 shadow-cyber"
                  >
                    <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      {t('about.mission.title')}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm">{t('about.mission.content')}</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={controls}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0, transition: { delay: 0.4 } }
                    }}
                    className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-6 border border-[var(--cyber-accent)]/10 hover:border-[var(--cyber-accent)]/30 transition-all duration-300 shadow-cyber"
                  >
                    <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      {t('about.vision.title')}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm">{t('about.vision.content')}</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Services Grid with Improved Layout */}
        <motion.section 
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="mb-20 relative overflow-hidden"
        >
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl z-0"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">
                {t('about.services.title')}
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                {t('about.services.description')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <motion.div
                  key={service.key}
                  variants={fadeIn}
                  className="bg-cyber-secondary/70 p-6 rounded-xl border border-[var(--cyber-accent)]/10 hover:border-[var(--cyber-accent)]/30 hover:bg-cyber-secondary transition-all duration-300 group"
                >
                  <div className="text-cyan-400 mb-4 group-hover:scale-110 transform transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors duration-300">{service.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Expertise Section */}
        <motion.section
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          className="relative"
        >
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl z-0"></div>
          
          <div className="relative z-10 bg-cyber-secondary/30 rounded-2xl p-8 border border-[var(--cyber-accent)]/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {t('Scop.title')}
                </h2>
                <ul className="space-y-3">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={controls}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0, transition: { delay: 0.2 + (index * 0.1) } }
                      }}
                      className="flex items-start"
                    >
                      <span className="text-cyan-400 mr-2 mt-1"><FaLock /></span>
                      <span className="text-gray-300">{t(`Scop.items.${index}`)}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl transform rotate-3"></div>
                <div className="absolute inset-0 bg-cyber-secondary/80 backdrop-blur-sm rounded-xl transform -rotate-3 border border-[var(--cyber-accent)]/20"></div>
                <div className="relative p-6">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {t('about.stats.certifiedExperts')}
                  </h3>
                  <ul className="space-y-3">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <motion.li 
                        key={`cert-${index}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={controls}
                        variants={{
                          hidden: { opacity: 0, x: 20 },
                          visible: { opacity: 1, x: 0, transition: { delay: 0.3 + (index * 0.1) } }
                        }}
                        className="flex items-start"
                      >
                        <span className="text-cyan-400 mr-2 mt-1"><FaUserShield /></span>
                        <span className="text-gray-300">{t(`Scop.items.${index + 5}`)}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default About
