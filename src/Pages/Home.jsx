import React from 'react'
import HeroSection from '../Components/Home/HeroSection'
import About from '../Components/Home/About'
import ServicesComp from '../Components/Home/ServicesComp'
import WhyUs from '../Components/Home/WhyUs'
import ScopeWork from '../Components/Home/ScopeWork'
import EndSection from '../Components/Home/EndSection'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <>
      <Helmet>
        <title>{isRTL ? 'إتقاء - شركة الأمن السيبراني الرائدة في المملكة العربية السعودية' : 'ETQAA - Leading Cybersecurity Company in Saudi Arabia'}</title>
        <meta 
          name="description" 
          content={isRTL ? 'إتقاء هي شركة الأمن السيبراني الرائدة في المملكة المتخصصة في حماية المؤسسات من التهديدات السيبرانية المتطورة' : 'ETQAA is the leading cybersecurity company in Saudi Arabia specializing in protecting organizations from sophisticated cyber threats'} 
        />
        <link rel="canonical" href="https://etqaa.com/" />
      </Helmet>
      <HeroSection/>
      <About/>
      <ServicesComp/>
      <WhyUs/>
      <ScopeWork/>
      <EndSection />
    </>
  )
}

export default Home
