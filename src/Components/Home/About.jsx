import React from 'react'
import { motion } from 'framer-motion';

const About = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 40 },
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  const textVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="w-full mx-auto py-14 bg-[#0A162C]">
      {/* Title */}
      <motion.div
        className="flex w-[320px] lg:w-[362px] h-[43px] mx-auto items-center rounded-[50px] border border-transparent justify-around pl-[10px] pr-[10px] relative overflow-hidden"
        style={{
          background: "linear-gradient(90deg, rgba(53, 109, 247, 0.3) 0%, rgba(27, 20, 100, 0.3) 99.93%)"
        }}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <p className="text-[24px] text-center text-white font-semibold">Who We Are</p>
      </motion.div>

      <div className="w-full h-full flex flex-col items-center md:py-4 py-10">
        {/* First Row */}
        <div className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-10 gap-6 justify-center lg:items-stretch md:items-center mt-8">
          <motion.img
            className="md:w-[48%] w-full rounded-xl shadow-lg object-cover min-h-[260px] max-h-[340px]"
            src="https://securitypact.net/wp-content/uploads/2024/11/Data-Loss-Prevention-DLP-Services.jpg"
            alt="Data Loss Prevention"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          />
          <motion.div
            className="md:w-[52%] w-full bg-[#101d37] text-gray-200 md:p-8 p-4 rounded-xl flex flex-col justify-center shadow-lg"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4">
              Leading Cybersecurity Solutions in Saudi Arabia
            </h2>
            <p className="text-md md:text-lg">
              ETQAA is a trusted name in cybersecurity, dedicated to protecting businesses across the Kingdom of Saudi Arabia. 
              Our mission is to empower organizations with advanced security solutions, ensuring their digital assets, data, and operations are always safeguarded.
              <br /><br />
              We combine deep industry expertise, certified professionals, and the latest technologies to deliver comprehensive protection against evolving cyber threats.
            </p>
          </motion.div>
        </div>
        {/* Second Row */}
        <div className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col-reverse lg:gap-10 gap-6 justify-center lg:items-stretch md:items-center mt-10">
          <motion.div
            className="md:w-[52%] w-full bg-[#101d37] text-gray-200 md:p-8 p-4 rounded-xl flex flex-col justify-center shadow-lg"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4">
              Our Team & Approach
            </h2>
            <p className="text-md md:text-lg">
              Our team consists of highly qualified experts with global certifications and hands-on experience in multiple industries.
              We partner with leading technology providers and utilize proven methodologies to deliver tailored security strategies.
              <br /><br />
              At ETQAA, we believe in proactive defense, continuous monitoring, and rapid incident response—so you can focus on your business with confidence.
            </p>
          </motion.div>
          <motion.img
            className="md:w-[48%] w-full rounded-xl shadow-lg object-cover min-h-[260px] max-h-[340px]"
            src="https://securitypact.net/wp-content/uploads/2024/11/Black-Box-Testing-1.jpg"
            alt="Cybersecurity Team"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          />
        </div>
      </div>
    </section>
  )
}

export default About
