import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import ServicesData from '../Components/ServicesData'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};



const Services = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div  className="bg-cyber-primary min-h-screen">
      {/* Banner Section */}
      <div className="relative h-[50vh] overflow-hidden">
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

        <div  className={`relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center `}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold max-w-3xl mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent font-cyber"
          >
            {t('services.title')}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 max-w-xl text-lg leading-relaxed"
          >
            {t('services.subtitle')}
          </motion.p>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '180px' }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={`h-1.5 bg-cyber-gradient mt-7 rounded-full shadow-glow-sm ${isRTL ? 'mr-0 ml-auto' : 'ml-0 mr-auto'}`}
          />
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >

<ServicesData/>
        </motion.div>
      </div>
    </div>
  )
}

export default Services
