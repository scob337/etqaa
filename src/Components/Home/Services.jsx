import React from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    title: "Application Security",
    desc: "Protect your applications from vulnerabilities and cyber threats with advanced security solutions.",
    img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Black Box Testing",
    desc: "Simulate real-world attacks to identify and fix security weaknesses in your systems.",
    img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Cloud Security",
    desc: "Secure your cloud infrastructure and data with comprehensive cloud security services.",
    img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Data Loss Prevention (DLP)",
    desc: "Prevent unauthorized access and leakage of sensitive business data.",
    img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Data Protection",
    desc: "Ensure the confidentiality, integrity, and availability of your critical data assets.",
    img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Digital Forensics and Incident Response (DFIR)",
    desc: "Investigate, analyze, and respond to security incidents efficiently.",
    img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "EDR Services",
    desc: "Advanced endpoint detection and response to protect your devices from threats.",
    img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Email Security",
    desc: "Protect your organization from phishing, spam, and email-borne threats.",
    img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Extended Detection and Response (XDR)",
    desc: "Unified security incident detection and response across all your environments.",
    img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "GRC Solutions",
    desc: "Governance, risk, and compliance solutions tailored to your business needs.",
    img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "GDPR Compliance",
    desc: "Achieve and maintain compliance with GDPR regulations.",
    img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Identity and Access Management (IAM)",
    desc: "Control and manage user access to critical information and systems.",
    img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Mitre Framework",
    desc: "Implement industry-standard frameworks for advanced threat detection.",
    img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Mobile Device Management (MDM)",
    desc: "Secure and manage mobile devices across your organization.",
    img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Network Posture Security Services",
    desc: "Assess and strengthen your network security posture.",
    img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Operational Technology (OT) Security",
    desc: "Protect your industrial and operational technology environments.",
    img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "PDPL Compliance",
    desc: "Comply with Saudi Arabia’s Personal Data Protection Law (PDPL).",
    img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Penetration Testing",
    desc: "Identify vulnerabilities before attackers do with expert penetration testing.",
    img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Privileged Access Management (PAM)",
    desc: "Secure, control, and monitor privileged access to critical systems.",
    img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Red Teaming",
    desc: "Simulate sophisticated attacks to test your organization’s defenses.",
    img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Risk Assessment",
    desc: "Identify, evaluate, and mitigate risks to your business.",
    img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "SIEM Services",
    desc: "Centralized security information and event management for proactive threat detection.",
    img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "SOC Services",
    desc: "24/7 Security Operations Center monitoring and incident response.",
    img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "SOAR Services",
    desc: "Automate and orchestrate your security operations for faster response.",
    img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Threat Intelligence Services",
    desc: "Stay ahead of cyber threats with actionable intelligence and insights.",
    img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "User and Entity Behavior Analytics (UEBA)",
    desc: "Detect anomalies and insider threats with behavioral analytics.",
    img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "VAPT",
    desc: "Vulnerability Assessment and Penetration Testing for comprehensive security.",
    img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Vulnerability Assessment",
    desc: "Identify and address vulnerabilities across your IT environment.",
    img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80"
  },
];

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

const Services = () => {
  return (
    <section className="py-20 bg-[#0A162C] min-h-[80vh]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
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
          {services.map((service) => (
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

export default Services
