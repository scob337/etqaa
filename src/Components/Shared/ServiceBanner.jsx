import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const ServiceBanner = ({ title, backgroundImage }) => {
  return (
    <div className="relative h-[60vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-[#0A162C]/70"></div>
      </div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
        <Link
          to="/services"
          className="inline-flex items-center text-white mb-6 hover:text-cyan-400 transition-colors w-fit"
        >
          <FaArrowLeft className="mr-2" />
          Back to Services
        </Link>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white max-w-2xl"
        >
          {title}
        </motion.h1>
      </div>
    </div>
  )
}

export default ServiceBanner