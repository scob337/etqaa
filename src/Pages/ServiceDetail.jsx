import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import ServiceBanner from '../Components/Shared/ServiceBanner'
import servicesData from '../data/services.json'

const ServiceDetail = () => {
  const { id } = useParams()
  const [service, setService] = useState(null)
  const [randomServices, setRandomServices] = useState([])

  useEffect(() => {
    const currentService = servicesData.services.find(s => s.id === id)
    setService(currentService)

    // Get 2 random services excluding current one
    const otherServices = servicesData.services.filter(s => s.id !== id)
    const shuffled = [...otherServices].sort(() => 0.5 - Math.random())
    setRandomServices(shuffled.slice(0, 2))
  }, [id])

  if (!service) return null

  return (
    <div className="bg-[#0A162C]">
      <ServiceBanner title={service.title} backgroundImage={service.bannerImg} />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-lg prose-invert max-w-none"
        >
          <h2 className="text-3xl font-bold text-white mb-6">{service.title}</h2>
          <p className="text-gray-300">{service.longDesc}</p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {randomServices.map((relatedService, index) => (
            <motion.div
              key={relatedService.id}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-[#101d37] rounded-2xl p-6 border border-[#223366]"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                {relatedService.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">{relatedService.desc}</p>
              <Link
                to={`/services/${relatedService.id}`}
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceDetail