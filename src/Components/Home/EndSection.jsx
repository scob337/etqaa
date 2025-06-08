import React from 'react'
import { motion } from 'framer-motion'
import { FaShieldAlt, FaUsers, FaCheckCircle, FaClock } from 'react-icons/fa'

const stats = [
  {
    icon: <FaShieldAlt className="text-4xl text-cyan-400" />,
    number: "500+",
    label: "Security Solutions Delivered"
  },
  {
    icon: <FaUsers className="text-4xl text-cyan-400" />,
    number: "200+",
    label: "Satisfied Clients"
  },
  {
    icon: <FaCheckCircle className="text-4xl text-cyan-400" />,
    number: "99.9%",
    label: "Success Rate"
  },
  {
    icon: <FaClock className="text-4xl text-cyan-400" />,
    number: "24/7",
    label: "Support Available"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const EndSection = () => {
  return (
    <section className="bg-[#0A162C] py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/20 rounded-full filter blur-3xl"></div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Stats Section */}
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center text-center"
              variants={itemVariants}
            >
              {stat.icon}
              <span className="text-3xl font-bold text-white mt-4">{stat.number}</span>
              <span className="text-gray-400 mt-2">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-[#101d37] to-[#162442] p-8 md:p-12 rounded-3xl shadow-xl border border-[#223366] relative"
          variants={itemVariants}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to Secure Your Digital Assets?
            </h2>
            <p className="text-gray-300 mb-8">
              Let's work together to protect your business from cyber threats. Our team of experts is ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
                Get Started
              </button>
              <button className="px-8 py-3 bg-[#223366] text-white rounded-xl font-semibold hover:bg-[#2a3f7e] transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>


      </motion.div>
    </section>
  )
}

export default EndSection