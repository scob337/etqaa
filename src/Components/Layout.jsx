import { Outlet } from 'react-router-dom'
import Footer from "./Footer/Footer"
import React from "react";
import NavBar from "./NavBar.jsx/NavBar.jsx";
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import ScrollToTop from './ToTopButton'
import { Helmet } from 'react-helmet'

const Layout = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="bg-cyber-primary min-h-screen flex flex-col">
      <Helmet>
        <html lang={i18n.language} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#f0f8ff" />
        <link rel="icon" href="/favicon.ico" />
        <title>{isRTL ? 'إتقاء - شركة الأمن السيبراني الرائدة في المملكة العربية السعودية' : 'ETQAA - Leading Cybersecurity Company in Saudi Arabia'}</title>
        <meta 
          name="description" 
          content={isRTL ? 'إتقاء هي شركة الأمن السيبراني الرائدة في المملكة المتخصصة في حماية المؤسسات من التهديدات السيبرانية المتطورة' : 'ETQAA is the leading cybersecurity company in Saudi Arabia specializing in protecting organizations from sophisticated cyber threats'} 
        />
        <meta name="keywords" content="cybersecurity, ETQAA, information security, network protection, cyber defense, data security, Saudi Arabia" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://etqaa.com/" />
        <meta property="og:title" content={isRTL ? 'إتقاء - شركة الأمن السيبراني الرائدة في المملكة العربية السعودية' : 'ETQAA - Leading Cybersecurity Company in Saudi Arabia'} />
        <meta property="og:description" content={isRTL ? 'إتقاء هي شركة الأمن السيبراني الرائدة في المملكة المتخصصة في حماية المؤسسات من التهديدات السيبرانية المتطورة' : 'ETQAA is the leading cybersecurity company in Saudi Arabia specializing in protecting organizations from sophisticated cyber threats'} />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <ScrollToTop/>
      <NavBar/>
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
