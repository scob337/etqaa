import React, { useEffect } from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaShieldAlt, FaHome, FaInfoCircle, FaEnvelope, FaPhone, FaLock, FaUserShield, FaCloudDownloadAlt, FaServer } from 'react-icons/fa'
import { SiSnapchat } from 'react-icons/si'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const footerLinks = [
    { label: t('nav.home') || (isRTL ? 'الرئيسية' : 'Home'), href: "/" },
    { label: t('nav.services') || (isRTL ? 'خدماتنا' : 'Services'), href: "/services" },
    { label: t('nav.about') || (isRTL ? 'من نحن' : 'About'), href: "/about" },
    { label: t('nav.contact') || (isRTL ? 'تواصل معنا' : 'Contact'), href: "/contact" },
  ];
  
  const servicesLinks = [
    { 
      icon: <FaLock className="text-cyber-accent mr-2" />,
      label: t('services.items.ics-scada-testing.title') || "", 
      href: "/services/ics-scada-testing" 
    },
    { 
      icon: <FaCloudDownloadAlt className="text-cyber-accent mr-2" />,
      label: t('services.items.risk-assessment.title') || "", 
      href: "/services/risk-assessment" 
    },
    { 
      icon: <FaUserShield className="text-cyber-accent mr-2" />,
      label: t('services.items.grc-service.title') || "", 
      href: "/services/grc-service" 
    },
    { 
      icon: <FaServer className="text-cyber-accent mr-2" />,
      label: t('services.items.secure-code-review.title') || "", 
      href: "/services/secure-code-review" 
    },
  ];
  
  const socialLinks = [
    { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/company/etqaa", label: "LinkedIn" },
    { icon: <SiSnapchat />, href: "https://www.snapchat.com/add/etqaa", label: "Snapchat" },
    { icon: <FaTwitter />, href: "https://twitter.com/etqaa", label: "Twitter" },
  ];

  useEffect(() => {
    // Orb follow effect
    const orb = document.querySelector('.orb');
    const handleMouseMove = (e) => {
      if (orb) {
        orb.style.left = `${e.clientX}px`;
        orb.style.top = `${e.clientY}px`;
      }
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <footer className="relative bg-gradient-to-br from-cyber-dark to-cyber-primary text-white overflow-hidden pt-12" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyber-blue rounded-full filter blur-3xl animate-float1"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-cyber-purple rounded-full filter blur-3xl animate-float2"></div>
        <div className="absolute bottom-10 left-1/2 w-48 h-48 bg-cyber-accent rounded-full filter blur-3xl animate-float3"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-cyber-green rounded-full filter blur-2xl animate-float2"></div>
        <div className="absolute bottom-1/4 left-1/4 w-36 h-36 bg-cyber-blue/50 rounded-full filter blur-2xl animate-float1"></div>
      </div>
      
      {/* Digital circuit pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Digital circuit lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-dark via-cyber-accent/30 to-cyber-dark"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-dark via-cyber-blue/30 to-cyber-dark"></div>

      {/* Main footer content */}
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Logo and Socials */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-cyber-gradient p-3 rounded-cyber inline-block shadow-cyber-hover">
              <FaShieldAlt className="text-white text-2xl" />
            </div>
            <span className="text-3xl font-bold bg-cyber-gradient bg-clip-text text-transparent font-cyber">ETQAA</span>
          </div>
          <p className="text-center text-gray-300 max-w-md mb-5">
            {t('footer.description') || (isRTL ? 'حلول أمن سيبراني متكاملة لحماية بياناتك وأنظمتك من التهديدات المتطورة' : 'Comprehensive cybersecurity solutions to protect your data and systems from advanced threats')}
          </p>
          <div className="flex space-x-4 mt-2">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="w-10 h-10 rounded-cyber bg-cyber-secondary flex items-center justify-center hover:bg-cyber-accent hover:text-cyber-dark transition-all duration-300 text-xl shadow-cyber group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="group-hover:scale-110 transition-transform">{item.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Grid layout */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-cyber-gray-dark">
          {/* Main Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-5 tracking-wide text-cyber-accent">{t('footer.main_links') || (isRTL ? 'روابط رئيسية' : 'Main Links')}</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className={`text-gray-300 hover:text-cyber-accent transition-all duration-200 ${isRTL ? 'pr-1 border-r-2' : 'pl-1 border-l-2'} border-transparent hover:border-cyber-accent flex items-center`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Services Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-5 tracking-wide text-cyber-accent">{t('footer.services') || (isRTL ? 'الخدمات' : 'Services')}</h3>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className={`text-gray-300 hover:text-cyber-accent transition-all duration-200 ${isRTL ? 'pr-1 border-r-2' : 'pl-1 border-l-2'} border-transparent hover:border-cyber-accent flex items-center group`}
                  >
                    <span className={`${isRTL ? 'ml-2' : 'mr-2'} text-cyber-accent/70 group-hover:text-cyber-accent transition-colors`}>
                      {link.icon}
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-5 tracking-wide text-cyber-accent">{t('footer.get_in_touch') || (isRTL ? 'تواصل معنا' : 'Get in Touch')}</h3>
            <ul className="space-y-4">
              <li className="flex items-center group">
                <span className="w-9 h-9 bg-cyber-primary rounded-cyber flex items-center justify-center mr-3 group-hover:bg-cyber-accent/20 transition-colors">
                  <FaEnvelope className="text-cyber-accent" />
                </span>
                <a href="mailto:info@etqaa.com" className="text-white hover:text-cyber-accent  group-hover:translate-x-1 transition-all inline-block">info@etqaa.com</a>
              </li>
              <li className="flex items-center group">
                <span className="w-9 h-9 bg-cyber-primary rounded-cyber flex items-center justify-center mr-3 group-hover:bg-cyber-accent/20 transition-colors">
                  <FaPhone className="text-cyber-accent" />
                </span>
                <a href="tel:+966531100366" className="text-white hover:text-cyber-accent group-hover:translate-x-1 transition-all inline-block">+966 53 110 0366</a>
              </li>
              <li className="mt-4 pt-4 border-t border-cyber-gray-dark">
                <p className="text-sm text-gray-400">
                  {t('footer.commitment') || (isRTL ? 'نحن ملتزمون بتوفير أعلى مستويات الحماية والأمان لعملائنا' : 'We are committed to providing the highest levels of protection and security for our clients')}
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; <span className="text-cyber-accent">{new Date().getFullYear()}</span> ETQAA. {t('footer.all_rights') || (isRTL ? 'جميع الحقوق محفوظة.' : 'All rights reserved.')}
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-gray-400 hover:text-cyber-accent transition-colors hover:underline underline-offset-4 decoration-cyber-accent/30"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Floating orb that follows cursor */}
      <div className="orb absolute w-64 h-64 rounded-full bg-gradient-to-r from-cyber-blue/10 to-cyber-accent/10 filter blur-3xl pointer-events-none"></div>

      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, 20px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-15px, 15px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(0, -20px); }
        }
        .animate-float1 { animation: float1 8s ease-in-out infinite; }
        .animate-float2 { animation: float2 10s ease-in-out infinite; }
        .animate-float3 { animation: float3 12s ease-in-out infinite; }
        .orb {
          transform: translate(-50%, -50%);
          opacity: 0.3;
          transition: transform 0.1s ease-out;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
