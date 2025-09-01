
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaShieldAlt, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import ServicesList from '../../data/services.json'
// Replace the navLinks array with:


export default function NavBar() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
    const getNavLinks = (t) => [

    { label: t('nav.home'), href: "/" },
    {
      label: t('nav.services'), 
      href: "/services",
      dropdown: ServicesList.services.map(service => ({
        label: isRTL ? service.title : service.englishTitle,
        href: `/services/${service.id}`
      }))
      
    },
    { label: t('nav.partners'), href: "/partners" },
    { label: t('nav.about'), href: "/about" },
    { label: t('nav.contact'), href: "/contact" },
  ];

  const navLinks = getNavLinks(t);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(path);
    setMobileOpen(false);
  };

  const handleDropdown = (idx) => {
    setOpenDropdown(openDropdown === idx ? null : idx);
  };

  return (
    <nav className="bg-cyber-dark shadow-cyber-lg sticky top-0 w-full z-50" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 ">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <div 
              onClick={() => handleNavigation('/')} 
              className="flex items-center group cursor-pointer"
            >
              <img src="./Logo.png" alt="Website Logo" className="w-20 h-20" />
            </div>
          </div>
          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse' : 'space-x-1'}`}>
            {navLinks.map((link, idx) =>
              link.dropdown ? (
                <div
                  className="relative group"
                  key={link.label}
                  onMouseEnter={() => setOpenDropdown(idx)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div
                    onClick={() => handleNavigation(link.href)}
                    className="nav-link text-white hover:text-cyber-accent px-4 py-2 flex items-center rounded-lg hover:bg-cyber-secondary transition-all duration-200 cursor-pointer"
                  >
                    {link.label}
                  </div>
                  {/* Dropdown */}
                  <div
                    className={`dropdown-menu absolute left-0 mt-2 w-56 bg-cyber-secondary rounded-cyber shadow-cyber py-1 z-50 border border-cyber-gray-dark transition-all duration-300 ${
                      openDropdown === idx
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        to={item.href}
                        key={item.label}
                        className="block px-4 py-1 text-gray-300 hover:text-cyber-accent
                        hover:border-l-1 hover:border-[var(--cyber-green)] transition-all duration-200 relative group"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div
                    onClick={() => handleNavigation(link.href)}
                    key={link.label}
                    className="nav-link text-gray-300 hover:text-cyber-accent px-4 py-2 flex items-center rounded-lg hover:bg-cyber-secondary transition-all duration-200 cursor-pointer"
                  >
                  {link.label}
                  {link.badge && (
                    <span className="ml-2 bg-cyber-accent text-cyber-dark text-xs font-bold px-2 py-0.5 rounded-full">
                      {link.badge}
                    </span>
                  )}
                </div>
              )
            )}
          </div>

          {/* Mobile menu button with animated hamburger */}
          <button
            className="md:hidden p-2 text-gray-300 cursor-pointer hover:text-cyber-accent rounded-lg hover:bg-cyber-secondary transition-colors duration-200 relative z-50"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
          >
            <span className="sr-only">Menu</span>
            <div className="w-6 h-6 relative flex flex-col justify-center items-center">
              <span
                className={`block absolute h-0.5 w-6 bg-gray-300 transform transition-all duration-500 ease-in-out ${
                  mobileOpen ? "rotate-45 top-3" : "top-1"
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-6 bg-gray-300 transition-all duration-500 ease-in-out ${
                  mobileOpen ? "opacity-0" : "top-3"
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-6 bg-gray-300 transform transition-all duration-500 ease-in-out ${
                  mobileOpen ? "-rotate-45 top-3" : "top-5"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Backdrop overlay for mobile menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-500 z-40 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } md:hidden`}
        onClick={() => setMobileOpen(false)}
      ></div>

      {/* Mobile Menu with animation */}
      <div
        className={`fixed top-0 ${isRTL ? 'right-0' : 'left-0'} w-4/5 max-w-xs h-full bg-cyber-secondary shadow-cyber-lg border-r border-cyber-gray-dark z-50 transform transition-transform duration-700 ease-in-out
        ${mobileOpen ? 'translate-x-0' : isRTL ? 'translate-x-full' : '-translate-x-full'} md:hidden`}
      >
        {/* Logo at the top of mobile menu */}
        <div className="flex flex-col items-center pt-6 pb-2">
          <div 
            onClick={() => handleNavigation('/')} 
            className="flex items-center group cursor-pointer"
          >
            <div className="bg-cyber-accent group-hover:bg-cyber-accent-dark p-1.5 rounded-lg transition-colors duration-300 w-8 h-8 flex items-center justify-center">
              <FaShieldAlt className="text-cyber-dark" />
            </div>
            <span className="ml-2 text-lg font-bold text-white group-hover:text-cyber-accent transition-colors duration-300">
              ETQAA
            </span>
          </div>
        </div>
        <div className="px-2 pt-2 pb-4 space-y-1">
          {navLinks.map((link, idx) =>
            link.dropdown ? (
              <div key={link.label}>
                <button
                  className="w-full flex justify-between items-center px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-cyber-accent hover:bg-cyber-primary transition-colors duration-200"
                  onClick={() => handleDropdown(idx)}
                  type="button"
                >
                  <span>{link.label}</span>
                  <span
                    className={`transform transition-transform duration-500 ${
                      openDropdown === idx ? "rotate-180" : ""
                    }`}
                  >
                    <IoIosArrowDown />

                  </span>
                </button>
                <div
                  className={`overflow-y-auto transition-all duration-500 ${
                    openDropdown === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-4 mt-1 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link
                        to={item.href}
                        key={item.label}
                        className="block px-4 py-2 rounded-lg text-sm text-gray-300 hover:text-cyber-accent hover:bg-cyber-primary hover:border-l-2 hover:border-cyber-green transition-all duration-200"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div
                onClick={() => handleNavigation(link.href)}
                key={link.label}
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-cyber-accent hover:bg-cyber-primary transition-colors duration-200"
              >
                {link.label}
                {link.badge && (
                  <span className="ml-2 bg-cyber-accent text-cyber-dark text-xs font-bold px-2 py-0.5 rounded-full">
                    {link.badge}
                  </span>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </nav>
  );
}