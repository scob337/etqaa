import Contact from "../Pages/Contact"
import Footer from "./Footer/Footer"
import About from "./Home/About"
import HeroSection from "./Home/HeroSection"
import Services from "./Home/Services"
import WhyUs from "./Home/WhyUs"
import NavBar from "./NavBar.jsx/NavBar"

const Layout = () => {
  return (
    <>
      <NavBar/>
      <HeroSection/>
      <About/>
      <Services/>
      <WhyUs/>
      <Contact/>

      <Footer/>
    </>
  )
}

export default Layout
