import { Outlet } from 'react-router-dom'
import Footer from "./Footer/Footer"
import NavBar from "./NavBar.jsx/NavBar"
import {motion  } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import ScrollToTop from './ToTopButton'

const Layout = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';




  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="bg-cyber-dark min-h-screen flex flex-col">
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
