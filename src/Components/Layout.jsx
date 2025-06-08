import Contact from "../Pages/Contact"
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
    </>
  )
}

export default Layout
