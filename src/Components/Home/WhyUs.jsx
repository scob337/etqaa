import React from 'react'
import { motion } from 'framer-motion'
import { FaUserShield, FaAward, FaCogs, FaHeadset } from 'react-icons/fa'

const reasons = [
  {
    icon: <FaUserShield className="text-cyan-400 text-3xl mb-4" />,
    title: "Expert Team",
    desc: "Our certified cybersecurity professionals bring years of experience and deep industry knowledge to every project.",
  },
  {
    icon: <FaAward className="text-cyan-400 text-3xl mb-4" />,
    title: "Proven Track Record",
    desc: "Trusted by leading organizations in Saudi Arabia, we deliver results that exceed expectations.",
  },
  {
    icon: <FaCogs className="text-cyan-400 text-3xl mb-4" />,
    title: "Cutting-Edge Solutions",
    desc: "We leverage the latest technologies and methodologies to keep your business secure and compliant.",
  },
  {
    icon: <FaHeadset className="text-cyan-400 text-3xl mb-4" />,
    title: "24/7 Support",
    desc: "Our team is always available to assist you, ensuring peace of mind around the clock.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const WhyUs = () => {
  return (
    <section className="py-20 bg-[#0A162C] min-h-[60vh]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-6xl mx-auto px-4"
      >
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-wider"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Why Choose ETQAA?
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              className="bg-[#101d37] rounded-2xl shadow-xl flex flex-col items-center text-center border border-[#223366] hover:shadow-cyan-500/30 hover:-translate-y-2 transition-all duration-300 p-8"
              variants={cardVariants}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(0,255,255,0.18)" }}
            >
              {reason.icon}
              <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
              <p className="text-gray-300 text-sm">{reason.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default WhyUs
