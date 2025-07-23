import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import partnersData from '../data/partners.json'
import { FaHandshake, FaShieldAlt, FaServer, FaCloud, FaDatabase, FaNetworkWired } from 'react-icons/fa'
import { MdSecurity } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Partners = () => {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const [activeCategory, setActiveCategory] = useState('all')
  const [filteredPartners, setFilteredPartners] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  // Filter partners based on active category
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      const filtered = activeCategory === 'all' 
        ? partnersData.partners 
        : partnersData.partners.filter(partner => partner.category === activeCategory)
      setFilteredPartners(filtered)
      setIsLoading(false)
    }, 300) // Small delay for animation effect
  }, [activeCategory])

  // Get icon for category
  const getCategoryIcon = (categoryId) => {
    switch(categoryId) {
      case 'security':
        return <MdSecurity className="text-xl" />
      case 'cloud':
        return <FaCloud className="text-xl" />
      case 'network':
        return <FaNetworkWired className="text-xl" />
      case 'technology':
        return <FaServer className="text-xl" />
      case 'database':
        return <FaDatabase className="text-xl" />
      default:
        return <FaHandshake className="text-xl" />
    }
  }

  return (
    <div className="min-h-screen bg-cyber-dark py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <Helmet>
        <title>{t('partners.meta.title')}</title>
        <meta 
          name="description" 
          content={t('partners.meta.description')} 
        />
      </Helmet>

      {/* Digital Circuit Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M0 50 H100 M50 0 V100 M25 25 H75 V75 H25 Z" stroke="currentColor" fill="none" strokeWidth="0.5" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" className="text-cyber-accent" />
        </svg>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-cyber-blue/10 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-cyber-green/10 blur-3xl animate-pulse-slow animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cyber-purple/10 blur-3xl animate-pulse-slow animation-delay-1000"></div>

      <div className="container mx-auto relative z-10">
        {/* Page Header */}
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
      {t('partners.title')}
    </motion.h1>
    
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-gray-300 max-w-xl text-lg leading-relaxed"
    >
      {t('partners.subtitle')}
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

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className={`flex flex-wrap gap-3 justify-center ${isRTL ? 'flex-row-reverse' : ''}`}>
            {partnersData.categories?.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg border transition-all
                  cursor-pointer hover:text-[var(--cyber-accent)] 
                  duration-300 flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''} ${
                  activeCategory === category.id
                    ? 'bg-cyber-accent/20 border-cyber-accent text-cyber-accent shadow-glow-sm'
                    : 'border-cyber-gray-dark text-gray-400 hover:border-cyber-accent/50 hover:text-cyber-accent/80'
                }`}
              >
                {getCategoryIcon(category.id)}
                <span>{t(`partners.categories.${category.id === 'all' ? 'all' : category.id}`)}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Partners Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-cyber-accent/30 border-t-cyber-accent rounded-full animate-spin"></div>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {filteredPartners.map((partner) => (
              <motion.div
                key={partner.id}
                variants={itemVariants}
                className="bg-gray-500 border border-cyber-gray-dark hover:border-cyber-accent/50 rounded-lg p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-cyber group"
              >
                <div className="h-24 flex items-center justify-center mb-4 w-full">
                  <img 
                    src={partner.logo} 
                    alt={isRTL ? partner.nameAr : partner.name} 
                    className="max-h-20 max-w-full object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300" 
                  />
                </div>
                <h3 className="text-xl font-medium text-white mb-2 text-center">
                  {isRTL ? partner.nameAr : partner.name}
                </h3>

              </motion.div>
            ))}
          </motion.div>
        )}

        {/* No Results Message */}
        {!isLoading && filteredPartners.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <FaShieldAlt className="text-5xl text-cyber-accent/50 mx-auto mb-4" />
            <h3 className="text-xl text-gray-300 mb-2">
              {t('partners.noResults.title')}
            </h3>
            <p className="text-gray-400">
              {t('partners.noResults.content')}
            </p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-24 bg-cyber-secondary border border-cyber-gray-dark rounded-xl p-8 relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-blue via-cyber-accent to-cyber-green"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-cyber-accent/10 blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-cyber-blue/10 blur-2xl"></div>
          
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className={`text-2xl md:text-3xl font-cyber mb-4 inline-block bg-gradient-to-r from-cyber-blue via-cyber-accent to-cyber-green bg-clip-text text-transparent ${isRTL ? 'font-arabic' : ''}`}>
              {t('partners.cta.title')}
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('partners.cta.content')}
            </p>
            <Link 
              to="/contact" 
              className="inline-block px-6 py-3 bg-gradient-to-r from-cyber-blue to-cyber-accent text-white font-medium rounded-lg hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1"
            >
              {t('partners.cta.button')}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Partners