import React from 'react'
import HeroSection from '../Components/Home/HeroSection'
import About from '../Components/Home/About'
import ServicesComp from '../Components/Home/ServicesComp'
import WhyUs from '../Components/Home/WhyUs'
import ScopeWork from '../Components/Home/ScopeWork'
import EndSection from '../Components/Home/EndSection'

const Home = () => {
  return (
    <>
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
