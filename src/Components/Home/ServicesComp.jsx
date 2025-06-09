import React from 'react'
import { motion } from 'framer-motion'

import servicesData from '../../data/services.json'

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

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const ServicesComp = () => {
  return (
    <section className="py-20 bg-[#0A162C] min-h-[80vh]">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4"
      >
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-wider"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Cyber Security Services
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {servicesData.services.map((service) => (
            <motion.div
              key={service.title}
              className="bg-[#101d37] rounded-2xl shadow-xl flex flex-col items-center text-center border border-[#223366] hover:shadow-cyan-500/30 hover:-translate-y-2 transition-all duration-300 overflow-hidden group"
              variants={cardVariants}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(0,255,255,0.18)" }}
            >
              <div className="w-full h-40 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ServicesComp
