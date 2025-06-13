import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';
import { FaUserShield, FaAward, FaCogs, FaHeadset, FaLock, FaShieldAlt } from 'react-icons/fa'
import { MdSecurity, MdOutlinePrivacyTip } from 'react-icons/md'

const reasons = [
  {
    icon: <FaShieldAlt className="text-cyber-accent text-3xl mb-4" />,
    title: "Expert Team",
    titleAr: "فريق من الخبراء",
    desc: "Our certified cybersecurity professionals bring years of experience and deep industry knowledge to protect your digital assets.",
    descAr: "يضم فريقنا متخصصين معتمدين في الأمن السيبراني يتمتعون بسنوات من الخبرة والمعرفة العميقة بالصناعة لحماية أصولك الرقمية.",
  },
  {
    icon: <MdSecurity className="text-cyber-accent text-3xl mb-4" />,
    title: "Proven Track Record",
    titleAr: "سجل حافل بالإنجازات",
    desc: "Trusted by leading organizations in Saudi Arabia and the Gulf region, we deliver security solutions that exceed expectations.",
    descAr: "نحظى بثقة كبرى المؤسسات في المملكة العربية السعودية ومنطقة الخليج، ونقدم حلول أمنية تفوق التوقعات.",
  },
  {
    icon: <FaLock className="text-cyber-accent text-3xl mb-4" />,
    title: "Advanced Threat Protection",
    titleAr: "حماية متقدمة من التهديدات",
    desc: "We implement multi-layered security systems to detect, prevent, and respond to the most sophisticated cyber threats.",
    descAr: "نقوم بتنفيذ أنظمة أمنية متعددة الطبقات للكشف عن التهديدات السيبرانية المتطورة ومنعها والاستجابة لها.",
  },
  {
    icon: <MdOutlinePrivacyTip className="text-cyber-accent text-3xl mb-4" />,
    title: "Compliance & Governance",
    titleAr: "الامتثال والحوكمة",
    desc: "We ensure your systems meet local and international regulatory requirements including NCA, SAMA, and ISO standards.",
    descAr: "نضمن امتثال أنظمتك للمتطلبات التنظيمية المحلية والدولية بما في ذلك معايير الهيئة الوطنية للأمن السيبراني وساما والأيزو.",
  },
  {
    icon: <FaCogs className="text-cyber-accent text-3xl mb-4" />,
    title: "Cutting-Edge Solutions",
    titleAr: "حلول متطورة",
    desc: "We leverage AI-powered security tools and advanced methodologies to keep your business secure in an evolving threat landscape.",
    descAr: "نستخدم أدوات أمنية مدعومة بالذكاء الاصطناعي ومنهجيات متقدمة للحفاظ على أمان عملك في ظل مشهد تهديدات متطور باستمرار.",
  },
  {
    icon: <FaHeadset className="text-cyber-accent text-3xl mb-4" />,
    title: "24/7 Support",
    titleAr: "دعم على مدار الساعة",
    desc: "Our security operations center monitors your systems around the clock, ensuring immediate response to any security incidents.",
    descAr: "يراقب مركز عمليات الأمن لدينا أنظمتك على مدار الساعة، مما يضمن الاستجابة الفورية لأي حوادث أمنية.",
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

// Digital circuit background pattern for cyber security theme
const DigitalCircuitPattern = () => (
  <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
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
      <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
    </svg>
  </div>
);

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const WhyUs = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  return (
    <section className="py-20 bg-cyber-primary min-h-[60vh] relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      <DigitalCircuitPattern />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-cyber-blue/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyber-purple/20 rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-6xl mx-auto px-4 relative z-10"
      >
        <motion.div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-center mb-4 bg-cyber-gradient bg-clip-text text-transparent tracking-wider font-cyber"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {isRTL ? 'لماذا تختار إتقاء؟' : 'Why Choose ETQAA?'}
          </motion.h2>
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {isRTL 
              ? 'نحن نقدم حلول أمن سيبراني متكاملة مصممة خصيصًا لحماية مؤسستك من التهديدات المتطورة في العصر الرقمي' 
              : 'We provide comprehensive cybersecurity solutions tailored to protect your organization from sophisticated threats in the digital age'}
          </motion.p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              className="bg-cyber-secondary rounded-cyber shadow-cyber flex flex-col items-center text-center border border-cyber-accent/20 hover:border-cyber-accent/50 hover:shadow-cyan-500/30 hover:-translate-y-2 transition-all duration-300 p-8"
              variants={cardVariants}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(0,255,255,0.18)" }}
            >
              <div className="w-16 h-16 rounded-full bg-cyber-secondary border border-cyber-accent/30 flex items-center justify-center mb-4 shadow-cyber mx-auto group-hover:shadow-cyber-hover transition-all duration-300">
                {reason.icon}
              </div>
              <h3 className="text-lg font-bold text-cyber-accent mb-3">{isRTL ? reason.titleAr : reason.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{isRTL ? reason.descAr : reason.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default WhyUs
