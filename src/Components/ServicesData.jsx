  import React from 'react'
  import { motion } from 'framer-motion';
  import servicesData1 from '../data/services.json'
  import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
  import { Link } from 'react-router-dom'
  import { useTranslation } from 'react-i18next'


  const ServicesData = () => {
      const { t, i18n } = useTranslation();
      const isRTL = i18n.language === 'ar';
      const cardVariants = {
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
          }
        };

    return (
      <>
                  {servicesData1.services.map((service) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group"
              >
                <div className="bg-cyber-secondary rounded-2xl overflow-hidden border border-cyber-gray-dark hover:shadow-cyber-hover hover:-translate-y-2 transition-all duration-500 flex flex-col h-full">
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-secondary to-transparent opacity-70"></div>
                    
                    {/* Decorative corner accent */}
                    <div className={`absolute top-0 ${isRTL ? 'right-0' : 'left-0'} w-10 h-10 overflow-hidden`}>
                      <div className={`absolute top-0 ${isRTL ? 'right-0 w-16 h-1.5 bg-cyber-accent/40 transform rotate-45 origin-top-right' : 'left-0 w-16 h-1.5 bg-cyber-accent/40 transform -rotate-45 origin-top-left'}`}></div>
                    </div>
                  </div>
                  <div dir={isRTL ? "rtl" : "ltr"} className="p-7 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyber-accent transition-colors font-cyber">
                      {isRTL? service.title : service.englishTitle}
                    </h3>
                    <p className="text-gray-300 text-sm mb-7 flex-1 leading-relaxed">
                    {isRTL? service.desc : service.englishDesc}
                    </p>
                    <Link 
  to={`/services/${service.id}`}
  className={`inline-flex items-center justify-between px-6 py-3  text-white rounded-cyber
    shadow-cyber
border border-[var(--cyber-accent-dark)] bg-[var(--cyber-primary)] hover:text-white transition-all duration-300 group/btn ${isRTL ? 'flex-row-reverse' : ''}`}
>
  {isRTL ? (
    <>
      <FaArrowLeft className="ml-3 group-hover/btn:-translate-x-1 transition-transform" />
      <span className="font-medium">{t('services.learnMore')}</span>
    </>
  ) : (
    <>
      <span className="font-medium">{t('services.learnMore')}</span>
      <FaArrowRight className="ml-3 group-hover/btn:translate-x-1 transition-transform" />
    </>
  )}
</Link>

                  </div>
                </div>
              </motion.div>
            ))}
      </>
    )
  }

  export default ServicesData
