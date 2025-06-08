import { useState, useEffect } from 'react'
import Footer from "./Footer/Footer"
import About from "./Home/About"
import EndSection from "./Home/EndSection"
import HeroSection from "./Home/HeroSection"
import ScopeWork from "./Home/ScopeWork"
import Services from "./Home/Services"
import WhyUs from "./Home/WhyUs"
import NavBar from "./NavBar.jsx/NavBar"
import { FaArrowUp } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const Layout = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <NavBar/>
      <HeroSection/>
      <About/>
      <Services/>
      <WhyUs/>
      <ScopeWork/>
      <EndSection />
      <Footer/>

      <AnimatePresence>
        {showButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex items-center justify-center shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp className="text-xl" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

export default Layout
