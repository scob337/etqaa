import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from "./Footer/Footer"
import NavBar from "./NavBar.jsx/NavBar"
import {motion , AnimatePresence } from 'framer-motion'
import { FaArrowUp, FaShieldAlt } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Layout = () => {
  const [showButton, setShowButton] = useState(false)
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

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
    <div dir={isRTL ? 'rtl' : 'ltr'} className="bg-cyber-dark min-h-screen flex flex-col">
      <NavBar/>
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer/>
      <AnimatePresence>
        {showButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className={`fixed bottom-8 left-8 w-12 h-12 rounded-cyber bg-cyber-gradient text-white flex items-center justify-center shadow-cyber hover:shadow-cyber-lg border border-cyber-accent/30 transition-all duration-300 z-50`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp className="text-xl" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Layout
