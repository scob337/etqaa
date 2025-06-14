import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaArrowRight, FaShieldAlt, FaLock } from 'react-icons/fa'
import { MdSecurity } from 'react-icons/md'
import { useTranslation } from 'react-i18next'

const ServiceBanner = ({ title, backgroundImage }) => {
  const {  i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div className="relative h-[60vh] overflow-hidden bg-cyber-dark">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark/90 to-cyber-primary/90 z-10"></div>
        <div className="absolute inset-0 opacity-20 z-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyber-accent/30" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-grid)" />
          </svg>
        </div>
      </div>

      {/* Cyber elements */}
      <div className="absolute inset-0 overflow-hidden z-30">
        <div className={`absolute top-20 ${isRTL ? 'right-10' : 'left-10'} w-48 h-48 bg-cyber-accent/10 rounded-full filter blur-3xl animate-pulse-slow`}></div>
        <div className={`absolute bottom-10 ${isRTL ? 'left-20' : 'right-20'} w-56 h-56 bg-cyber-blue/10 rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000`}></div>
        <div className={`absolute top-1/2 ${isRTL ? 'left-1/4' : 'right-1/4'} w-32 h-32 bg-cyber-green/10 rounded-full filter blur-2xl animate-pulse-slow animation-delay-1000`}></div>

        <motion.div 
          className={`absolute top-1/4 ${isRTL ? 'right-1/4' : 'left-1/4'} text-cyber-accent/10 text-5xl`}
          animate={{ y: [0, -10, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaLock />
        </motion.div>

        <motion.div 
          className={`absolute bottom-1/4 ${isRTL ? 'left-1/3' : 'right-1/3'} text-cyber-blue/10 text-6xl`}
          animate={{ y: [0, 10, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <MdSecurity />
        </motion.div>

        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-dark via-cyber-accent/30 to-cyber-dark"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-dark via-cyber-blue/30 to-cyber-dark"></div>

        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyber-dark via-cyber-accent/20 to-cyber-dark"></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-cyber-dark via-cyber-blue/20 to-cyber-dark"></div>
      </div>

      <div dir={isRTL ? "rtl" : "ltr"} className={`relative h-full max-w-7xl mx-auto px-8 flex flex-col justify-center z-40 `}>
        {/* Security badge - تم نقلها هنا فوق العنوان */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className={`absolute ${isRTL ? 'max-md:left-5 left-8' : 'max-md:right-2 right-8'} max-lg:top-7 top-10 bg-cyber-secondary/80 px-3 py-3 rounded-cyber border border-cyber-accent/30 shadow-cyber z-50`}
        >
          <div className={`flex items-center `}>
            <div className={`w-3 h-3 rounded-full bg-cyber-accent animate-pulse ${isRTL ? 'ml-3' : 'mr-3'}`}></div>
            <span className="text-cyber-accent text-sm font-medium">
              {isRTL ? 'حماية متقدمة' : 'Advanced Protection'}
            </span>
          </div>
        </motion.div> 
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <Link
            to="/services"
            className={`inline-flex ${isRTL? "flex-row-reverse" : "flex-row"} gap-5 items-center
              hover:text-[var(--cyber-accent)]
              text-white  transition-all duration-300 bg-cyber-primary/50 px-6 py-3 rounded-cyber border border-cyber-accent/20 shadow-cyber hover:shadow-cyber-hover hover:border-cyber-accent/50 ${isRTL ? 'mr-auto' : 'ml-auto'}`}
          >
            {isRTL ? <FaArrowRight className="ml-3" /> : < FaArrowLeft className="mr-3" />}
            <span className="font-medium">{(isRTL ? 'العودة إلى الخدمات' : 'Back to Services')}</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white max-w-2xl flex items-center font-cyber"
          >
            <FaShieldAlt className={`text-cyber-accent ${isRTL ? 'ml-4' : 'mr-4'} text-3xl`} />
            <span className="bg-cyber-gradient bg-clip-text text-transparent">{title}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 mt-6 max-w-xl text-lg leading-relaxed"
          >
            {isRTL 
              ? 'حلول أمنية متقدمة مصممة خصيصًا لحماية مؤسستك من التهديدات السيبرانية المتطورة'
              : 'Advanced security solutions tailored to protect your organization from sophisticated cyber threats'}
          </motion.p>

          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '220px' }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className={`h-1.5 bg-cyber-gradient mt-8 rounded-full shadow-glow-sm ${isRTL ? 'mr-0 ml-auto' : 'ml-0 mr-auto'}`}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default ServiceBanner
