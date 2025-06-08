import Contact from "../Pages/Contact"
import Footer from "./Footer/Footer"
import About from "./Home/About"
import HeroSection from "./Home/HeroSection"
import NavBar from "./NavBar.jsx/NavBar"

const Layout = () => {
  return (
    <>
      <NavBar/>
      <HeroSection/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Layout
