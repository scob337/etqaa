import React from 'react'
import { motion } from 'framer-motion'
import servicesData from '../data/services.json'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Services = () => {
  return (
    <div className="bg-[#0A162C] min-h-screen">
      {/* Banner Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A162C]/80 to-[#0A162C]"></div>
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold  max-w-3xl mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
          >
            Our Cybersecurity Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 max-w-xl text-lg"
          >
            Comprehensive security solutions to protect your digital assets and ensure business continuity
          </motion.p>
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group"
            >
              <div className="bg-[#101d37] rounded-2xl overflow-hidden border border-[#223366] hover:shadow-cyan-500/30 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101d37] to-transparent opacity-60"></div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-6 flex-1">
                    {service.desc}
                  </p>
                  <Link 
                    to={`/services/${service.id}`}
                    className="inline-flex items-center justify-between px-4 py-2 bg-[#223366] text-white rounded-lg hover:bg-cyan-600 transition-all duration-300 group/btn"
                  >
                    <span>Learn More</span>
                    <FaArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Services