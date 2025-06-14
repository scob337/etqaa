import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaCheckCircle, FaInfoCircle, FaShieldAlt, FaLock, FaServer, FaUserShield, FaArrowRight, FaArrowLeft, FaPhoneAlt } from 'react-icons/fa'
import { MdSecurity, MdOutlinePrivacyTip } from 'react-icons/md'
import { BiTargetLock } from 'react-icons/bi'
import ServiceBanner from '../Components/Shared/ServiceBanner'
import servicesData from '../data/services.json'

const ServiceDetail = () => {
  const { id } = useParams()
  const [service, setService] = useState(null)
  const [randomServices, setRandomServices] = useState([])
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  useEffect(() => {
    const currentService = servicesData.services.find(s => s.id === id)
    setService(currentService)

    // Get 2 random services excluding current one
    const otherServices = servicesData.services.filter(s => s.id !== id)
    const shuffled = [...otherServices].sort(() => 0.5 - Math.random())
    setRandomServices(shuffled.slice(0, 2))
  }, [id])

  if (!service) return null

  // Digital circuit background pattern for cyber security theme
  const DigitalCircuitPattern = () => (
    <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit-pattern-service" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M20 20 H80 V80 H20 Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-cyber-accent" />
            <circle cx="20" cy="20" r="2" className="fill-cyber-accent" />
            <circle cx="80" cy="20" r="2" className="fill-cyber-accent" />
            <circle cx="20" cy="80" r="2" className="fill-cyber-accent" />
            <circle cx="80" cy="80" r="2" className="fill-cyber-accent" />
            <path d="M20 50 H40 V20" fill="none" stroke="currentColor" strokeWidth="1" className="text-cyber-accent" />
            <path d="M50 80 V60 H80" fill="none" stroke="currentColor" strokeWidth="1" className="text-cyber-accent" />
            <circle cx="40" cy="20" r="2" className="fill-cyber-accent" />
            <circle cx="50" cy="80" r="2" className="fill-cyber-accent" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-pattern-service)" />
      </svg>
    </div>
  );

  // Get appropriate icon for the service
  const getServiceIcon = (serviceId) => {
    const iconMap = {
      'penetration-testing': <BiTargetLock className="text-3xl text-cyber-accent" />,
      'vulnerability-assessment': <FaShieldAlt className="text-3xl text-cyber-accent" />,
      'ics-scada-testing': <FaServer className="text-3xl text-cyber-accent" />,
      'configuration-review': <FaLock className="text-3xl text-cyber-accent" />,
      'secure-code-review': <MdSecurity className="text-3xl text-cyber-accent" />,
      'red-team': <FaUserShield className="text-3xl text-cyber-accent" />,
      'social-engineering': <MdOutlinePrivacyTip className="text-3xl text-cyber-accent" />
    };
    
    return iconMap[serviceId] || <FaShieldAlt className="text-3xl text-cyber-accent" />;
  };

  return (
    <div className="bg-cyber-primary min-h-screen relative overflow-hidden">
      <ServiceBanner 
        title={isRTL ? service.title : service.englishTitle} 
        backgroundImage={service.bannerImg} 
      />
      
      <DigitalCircuitPattern />
      
      {/* Animated background elements */}
      <div className="absolute top-40 right-10 w-64 h-64 bg-cyber-blue/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-40 left-10 w-72 h-72 bg-cyber-green/10 rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`prose prose-lg max-w-none ${isRTL ? 'text-right' : 'text-left'}`}
        >
          <div className="flex items-center mb-6">
            {getServiceIcon(service.id)}
            <h2 className="text-3xl font-bold bg-cyber-gradient bg-clip-text text-transparent ml-3 font-cyber">
              {isRTL ? service.title : service.englishTitle}
            </h2>
          </div>
          
          <div className="p-6 rounded-cyber bg-cyber-secondary/30 border border-cyber-accent/20 shadow-cyber mb-8">
            <p className="text-gray-300 leading-relaxed">
              {isRTL ? service.longDesc : service.englishLongDesc}
            </p>
          </div>
          
          {service.detailedDesc && (
            <div className="mt-8">
              {(isRTL ? service.detailedDesc.ar : service.detailedDesc.en).map((section, index) => (
                <motion.div 
                  key={index} 
                  className="mb-10 p-6 rounded-cyber bg-cyber-secondary border-l-4 border-cyber-accent shadow-cyber"
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold text-white flex items-center mb-4">
                    <FaInfoCircle className={`${isRTL ? 'ml-2' : 'mr-2'} text-cyber-accent`} />
                    <span className="bg-cyber-gradient bg-clip-text text-transparent">{section.title}</span>
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{section.content}</p>
                  
                  {/* Highlight key points if the section is "Benefits" or "الفوائد" */}
                  {(section.title === "Benefits" || section.title === "الفوائد") && (
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                      {section.content.split(",").map((benefit, i) => (
                        <motion.div 
                          key={i}
                          className="flex items-center p-3 rounded-cyber bg-cyber-dark hover:bg-cyber-primary border border-cyber-gray-dark hover:border-cyber-accent transition-all duration-300"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 + 0.2 }}
                          whileHover={{ scale: 1.02, boxShadow: "0 4px 20px 0 rgba(0, 255, 255, 0.1)" }}
                        >
                          <FaCheckCircle className={`flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'} text-cyber-accent`} />
                          <span className="text-gray-200 text-sm font-medium">{benefit.trim()}</span>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Request Service CTA */}
        <motion.div 
          className="my-16 p-8 rounded-cyber bg-cyber-secondary border border-cyber-accent/30 shadow-cyber relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {/* Background decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyber-accent/5 rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyber-blue/5 rounded-full"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                {isRTL ? 'هل تحتاج إلى هذه الخدمة؟' : 'Need This Service?'}
              </h3>
              <p className="text-gray-300 max-w-xl">
                {isRTL 
                  ? 'تواصل مع فريقنا من الخبراء للحصول على استشارة مجانية وعرض سعر مخصص لاحتياجات مؤسستك الأمنية.'
                  : 'Contact our team of experts for a free consultation and customized quote tailored to your organization\'s security needs.'}
              </p>
            </div>
            <motion.button
              className="bg-cyber-gradient text-white font-semibold py-3 px-6 rounded-cyber shadow-cyber hover:shadow-cyber-hover transition-all duration-300 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPhoneAlt className={`${isRTL ? 'ml-2' : 'mr-2'}`} />
              <Link to="/contact">{isRTL ? 'طلب استشارة' : 'Request Consultation'}</Link>
            </motion.button>
          </div>
        </motion.div>
        
        <div className="mt-8">
          <h3 className={`text-2xl font-bold bg-cyber-gradient bg-clip-text text-transparent mb-6 flex items-center ${isRTL ? 'text-right justify-end' : 'text-left'} font-cyber`}>
            <FaShieldAlt className={`${isRTL ? 'ml-2' : 'mr-2'} text-cyber-accent`} />
            {isRTL ? 'خدمات ذات صلة' : 'Related Services'}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {randomServices.map((relatedService, index) => (
              <motion.div
                key={relatedService.id}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                className={`bg-cyber-secondary rounded-cyber p-6 
                  
                  border border-cyber-gray-dark hover:border-cyber-accent transition-all duration-300 shadow-cyber ${isRTL ? 'text-right' : 'text-left'}`}
                whileHover={{ scale: 1.02, boxShadow: "0 8px 32px 0 rgba(0, 255, 255, 0.15)" }}
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {isRTL ? relatedService.title : relatedService.englishTitle}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {isRTL ? relatedService.desc : relatedService.englishDesc}
                </p>
                <Link
                  to={`/services/${relatedService.id}`}
                  className={`inline-flex ${isRTL? "":"flex-row-reverse"} items-center text-cyber-accent hover:text-cyber-green transition-colors ${isRTL ? 'flex-row-reverse' : ''} mt-2 bg-cyber-dark/50 px-4 py-2 rounded-cyber border border-cyber-accent/20 hover:border-cyber-accent/50 shadow-cyber hover:shadow-cyber-hover`}
                >
                  {isRTL ? <FaArrowLeft className="mr-2" /> : <FaArrowRight className="ml-2" />}
                  <span>{t('services.learnMore') || (isRTL ? 'اقرأ المزيد' : 'Learn More')}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom CTA Section */}
      <div className="bg-cyber-secondary border-t border-cyber-accent/20 py-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-cyber-gradient opacity-30"></div>
        <div className="absolute -top-10 right-10 w-40 h-40 bg-cyber-blue/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 left-20 w-60 h-60 bg-cyber-accent/10 rounded-full filter blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-white mb-4 font-cyber"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {isRTL ? 'استكشف جميع حلول الأمن السيبراني لدينا' : 'Explore All Our Cybersecurity Solutions'}
          </motion.h3>
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {isRTL 
              ? 'نقدم مجموعة شاملة من خدمات الأمن السيبراني المصممة لحماية مؤسستك من التهديدات المتطورة.'
              : 'We offer a comprehensive range of cybersecurity services designed to protect your organization from sophisticated threats.'}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              to="/services" 
              className="bg-cyber-gradient text-white font-semibold py-3 px-8 rounded-cyber shadow-cyber hover:shadow-cyber-hover transition-all duration-300 inline-flex items-center"
            >
              {isRTL ? 'عرض جميع الخدمات' : 'View All Services'}
              {isRTL ? <FaArrowLeft className="mr-2" /> : <FaArrowRight className="ml-2" />}
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetail