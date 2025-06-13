import React from "react";
import BG from '../../assets/HeroBanner.webp';
import { motion } from "framer-motion";
import SliderMarquee from "./HeroSlider";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaShieldAlt, FaLock, FaServer } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const securityFeatures = [
    {
      icon: <FaShieldAlt className="text-cyber-accent" />,
      titleEn: "Advanced Protection",
      titleAr: "حماية متقدمة"
    },
    {
      icon: <MdSecurity className="text-cyber-accent" />,
      titleEn: "Threat Intelligence",
      titleAr: "ذكاء التهديدات"
    },
    {
      icon: <FaLock className="text-cyber-accent" />,
      titleEn: "Data Security",
      titleAr: "أمن البيانات"
    },
    {
      icon: <FaServer className="text-cyber-accent" />,
      titleEn: "Infrastructure Security",
      titleAr: "أمن البنية التحتية"
    }
  ];

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)] pt-3" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="flex-1">
        <div
          className="h-full bg-cover bg-center bg-no-repeat bg-fixed flex items-center text-white lg:pl-[137px] lg:pr-[137px] relative"
          style={{ backgroundImage: `url(${BG})` }}
        >
          {/* Overlay أسود شفاف لتحسين وضوح النص */}
          <div className="absolute inset-0 bg-black/60 z-0"></div>

          {/* Digital circuit pattern overlay */}
          <div className="absolute inset-0 bg-cyber-dark/30 z-0 overflow-hidden opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="circuit-hero" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M20 20 H80 V80 H20 Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-cyber-accent/40" />
                <circle cx="20" cy="20" r="2" className="fill-cyber-accent/40" />
                <circle cx="80" cy="20" r="2" className="fill-cyber-accent/40" />
                <circle cx="20" cy="80" r="2" className="fill-cyber-accent/40" />
                <circle cx="80" cy="80" r="2" className="fill-cyber-accent/40" />
                <path d="M20 50 H40 V20" fill="none" stroke="currentColor" strokeWidth="1" className="text-cyber-accent/40" />
                <path d="M50 80 V60 H80" fill="none" stroke="currentColor" strokeWidth="1" className="text-cyber-accent/40" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#circuit-hero)" />
            </svg>
          </div>

          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden z-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyber-accent/5 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-cyber-blue/10 blur-3xl animate-pulse-slow"></div>
            <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-cyber-green/10 blur-3xl animate-pulse-slow animation-delay-2000"></div>
          </div>

          {/* المحتوى */}
          <motion.div
            className="flex flex-col gap-5 max-md:p-1 relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="inline-flex w-[320px] lg:w-[362px] h-[43px] items-center rounded-[50px] border border-cyber-accent/30 justify-around pl-[10px] pr-[10px] relative overflow-hidden bg-gradient-to-r from-cyber-blue/15 to-cyber-green/15"
              variants={itemVariants}
            >
              <button className="flex justify-center items-center rounded-[36.667px] shadow-cyber"
                style={{
                  width: "66px",
                  height: "25.667px",
                  padding: "14.667px 22px",
                  background: "linear-gradient(90deg, var(--tw-gradient-stops))",
                  "--tw-gradient-from": "var(--cyber-accent)",
                  "--tw-gradient-to": "var(--cyber-green)",
                  "--tw-gradient-stops": "var(--tw-gradient-from), var(--tw-gradient-to)"
                }}>{t('hero.best') || (isRTL ? 'أفضل' : 'Best')}</button>
              <p className="text-[17px] text-center">{t('hero.company') || (isRTL ? 'شركة أمن سيبراني' : 'Cyber Security Company')}</p>
            </motion.div>

            <motion.h1 className="lg:text-[48px] max-md:text-[36px] font-bold lg:w-[480px] text-white font-cyber" variants={itemVariants}>
              {isRTL ? (
                <>شركة <span className="bg-cyber-gradient bg-clip-text text-transparent">الأمن السيبراني</span> الرائدة في المملكة العربية السعودية</>
              ) : (
                <>Top <span className="bg-cyber-gradient bg-clip-text text-transparent">Cyber Security</span> Company in Saudi Arabia</>
              )}
            </motion.h1>

            <motion.p className="w-[350px] lg:w-[500px] text-gray-300 max-md:text-[16px] lg:text-[17px] leading-relaxed" variants={itemVariants}>
              {isRTL ? (
                <>إتقاء هي <span className="font-bold text-cyber-accent">شركة الأمن السيبراني الرائدة في المملكة</span> المتخصصة في حماية المؤسسات من التهديدات السيبرانية المتطورة...</>
              ) : (
                <>ETQAA is the <span className="font-bold text-cyber-accent">leading cybersecurity company in Saudi Arabia</span> specializing in protecting organizations from sophisticated cyber threats...</>
              )}
            </motion.p>

            <motion.div className="flex gap-[16px]" variants={itemVariants}>
              <Link to="services" className="rounded-cyber text-[20px] font-semibold p-[12px] text-white bg-cyber-gradient hover:shadow-cyber-hover transition-all duration-300">
                {t('hero.services_btn') || (isRTL ? 'خدماتنا' : 'Our Services')}
              </Link>
              <Link to="contact" className="rounded-cyber text-[20px] font-semibold p-[12px] text-white border border-cyber-accent/50 hover:bg-cyber-accent/20 hover:border-cyber-accent transition-all duration-300">
                {t('hero.contact_btn') || (isRTL ? 'تواصل معنا' : 'Contact Us')}
              </Link>
            </motion.div>

            <motion.div className="flex flex-wrap gap-4 mt-8" variants={itemVariants}>
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 bg-cyber-secondary/30 px-3 py-2 rounded-cyber border border-cyber-accent/20">
                  <span className="text-lg">{feature.icon}</span>
                  <span className="text-sm font-medium text-gray-200">{t(`hero.features.${index}`) || (isRTL ? feature.titleAr : feature.titleEn)}</span>
                </div>
              ))}
            </motion.div>

            <SliderMarquee />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
