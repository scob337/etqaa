import React from 'react'
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaShieldAlt, FaUserShield, FaLock, FaAward } from 'react-icons/fa';
import { MdSecurity } from 'react-icons/md';
import { Link } from 'react-router-dom';

const About = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: isRTL ? -40 : 40 },
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  const textVariants = {
    hidden: { opacity: 0, x: isRTL ? 40 : -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Digital circuit background pattern for cyber security theme
  const DigitalCircuitPattern = () => (
    <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit-pattern-about" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
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
        <rect width="100%" height="100%" fill="url(#circuit-pattern-about)" />
      </svg>
    </div>
  );

  // Key achievements data
  const achievements = [
    {
      icon: <FaShieldAlt className="text-cyber-accent text-3xl" />,
      valueEn: "500+",
      valueAr: "+500",
      labelEn: "Security Assessments",
      labelAr: "تقييم أمني"
    },
    {
      icon: <FaUserShield className="text-cyber-accent text-3xl" />,
      valueEn: "100+",
      valueAr: "+100",
      labelEn: "Certified Experts",
      labelAr: "خبير معتمد"
    },
    {
      icon: <MdSecurity className="text-cyber-accent text-3xl" />,
      valueEn: "50+",
      valueAr: "+50",
      labelEn: "Enterprise Clients",
      labelAr: "عميل مؤسسي"
    },
    {
      icon: <FaAward className="text-cyber-accent text-3xl" />,
      valueEn: "15+",
      valueAr: "+15",
      labelEn: "Industry Awards",
      labelAr: "جائزة صناعية"
    }
  ];

  return (
    <section className="w-full mx-auto py-14 bg-cyber-primary relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      <DigitalCircuitPattern />
      
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-cyber-blue/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-cyber-purple/20 rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
      {/* Title */}
      <motion.div
        className="flex w-[320px] lg:w-[362px] h-[43px] mx-auto items-center rounded-cyber border border-cyber-accent/30 justify-around pl-[10px] pr-[10px] relative overflow-hidden z-10"
        style={{
          background: "linear-gradient(90deg, rgba(0, 198, 255, 0.15) 0%, rgba(0, 255, 140, 0.15) 99.93%)"
        }}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <p className="text-[24px] text-center text-white font-semibold font-cyber">{isRTL ? 'من نحن' : 'Who We Are'}</p>
      </motion.div>

      <div className="w-full h-full flex flex-col items-center md:py-4 py-10 relative z-10">
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
            className="md:w-[52%] w-full bg-cyber-secondary text-gray-200 md:p-8 p-4 rounded-xl flex flex-col justify-center shadow-cyber border border-cyber-accent/20"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold bg-cyber-gradient bg-clip-text text-transparent mb-4 font-cyber">
              {isRTL ? 'حلول الأمن السيبراني الرائدة في المملكة العربية السعودية' : 'Leading Cybersecurity Solutions in Saudi Arabia'}
            </h2>
            <p className="text-md md:text-lg leading-relaxed">
              {isRTL ? (
                <>إتقاء هي اسم موثوق به في مجال الأمن السيبراني، مكرسة لحماية المؤسسات والشركات في جميع أنحاء المملكة العربية السعودية. مهمتنا هي تمكين المؤسسات بحلول أمنية متقدمة تتوافق مع معايير الهيئة الوطنية للأمن السيبراني (NCA)، مما يضمن حماية أصولها الرقمية وبياناتها وعملياتها من التهديدات المتطورة.
                <br /><br />
                نجمع بين الخبرة العميقة في الصناعة والمهنيين المعتمدين وأحدث التقنيات لتقديم حماية شاملة ضد الهجمات السيبرانية المتقدمة، بما في ذلك هجمات التصيد والبرمجيات الخبيثة وبرامج الفدية.</>
              ) : (
                <>ETQAA is a trusted name in cybersecurity, dedicated to protecting organizations across the Kingdom of Saudi Arabia. 
                Our mission is to empower organizations with advanced security solutions aligned with National Cybersecurity Authority (NCA) standards, ensuring their digital assets, data, and operations are protected from sophisticated threats.
                <br /><br />
                We combine deep industry expertise, certified professionals, and cutting-edge technologies to deliver comprehensive protection against advanced cyber attacks, including phishing, malware, and ransomware.</>
              )}
            </p>
          </motion.div>
        </div>
        {/* Second Row */}
        <div className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col-reverse lg:gap-10 gap-6 justify-center lg:items-stretch md:items-center mt-10">
          <motion.div
            className="md:w-[52%] w-full bg-cyber-secondary text-gray-200 md:p-8 p-4 rounded-xl flex flex-col justify-center shadow-cyber border border-cyber-accent/20"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold bg-cyber-gradient bg-clip-text text-transparent mb-4 font-cyber">
              {isRTL ? 'فريقنا ونهجنا' : 'Our Team & Approach'}
            </h2>
            <p className="text-md md:text-lg leading-relaxed">
              {isRTL ? (
                <>يتكون فريقنا من خبراء مؤهلين تأهيلاً عالياً حاصلين على شهادات عالمية مثل CISSP وCEH وCISA وخبرة عملية في قطاعات متعددة بما في ذلك المالية والحكومة والصحة والطاقة.
                نتعاون مع مزودي التكنولوجيا الرائدين مثل Microsoft وCisco وPalo Alto Networks ونستخدم منهجيات مثبتة لتقديم استراتيجيات أمنية مخصصة.
                <br /><br />
                في إتقاء، نتبنى نهج الأمن متعدد الطبقات الذي يشمل الدفاع الاستباقي والمراقبة المستمرة على مدار الساعة طوال أيام الأسبوع والاستجابة السريعة للحوادث - مما يتيح لك التركيز على أعمالك بثقة تامة.</>
              ) : (
                <>Our team consists of highly qualified experts with global certifications such as CISSP, CEH, CISA, and hands-on experience across multiple sectors including finance, government, healthcare, and energy.
                We partner with leading technology providers like Microsoft, Cisco, and Palo Alto Networks and utilize proven methodologies to deliver tailored security strategies.
                <br /><br />
                At ETQAA, we embrace a multi-layered security approach that includes proactive defense, 24/7 continuous monitoring, and rapid incident response—allowing you to focus on your business with complete confidence.</>
              )}
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
        
        {/* Achievements Section */}
        <motion.div 
          className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.h3 
            className="text-2xl text-center font-bold text-white mb-10"
            variants={itemVariants}
          >
            {isRTL ? 'إنجازاتنا بالأرقام' : 'Our Achievements in Numbers'}
          </motion.h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-cyber-secondary rounded-cyber p-6 text-center border border-cyber-accent/20 shadow-cyber hover:shadow-cyber-hover transition-all duration-300"
                variants={itemVariants}
              >
                <div className="w-16 h-16 mx-auto bg-cyber-dark rounded-full flex items-center justify-center mb-4 border border-cyber-accent/30">
                  {item.icon}
                </div>
                <h4 className="text-3xl font-bold text-cyber-accent mb-2">{isRTL ? item.valueAr : item.valueEn}</h4>
                <p className="text-gray-300">{isRTL ? item.labelAr : item.labelEn}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div
          className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto mt-16 bg-cyber-secondary rounded-cyber p-8 border border-cyber-accent/30 shadow-cyber text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            {isRTL ? 'جاهزون لتأمين مؤسستك؟' : 'Ready to Secure Your Organization?'}
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            {isRTL 
              ? 'تواصل معنا اليوم للحصول على تقييم أمني مجاني واكتشف كيف يمكن لإتقاء مساعدتك في حماية أصولك الرقمية من التهديدات المتطورة.'
              : 'Contact us today for a free security assessment and discover how ETQAA can help you protect your digital assets from sophisticated threats.'}
          </p>
          <motion.button 
            className="bg-cyber-gradient text-white font-semibold py-3 px-8 rounded-cyber shadow-cyber hover:shadow-cyber-hover transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link to="/contact">{isRTL ? 'تواصل معنا' : 'Contact Us'}</Link>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default About
