
import React, { useState } from "react";
    
    const navLinks = [
      { label: "Home", href: "#" },
      {
        label: "Services", href:"#",
        dropdown: [
          { label: "Software Suite", href: "#" },
          { label: "Cloud Services", href: "#" },
          { label: "Mobile Apps", href: "#" },
          { label: "Featured Products", href: "#" },
        ],
      },
      { label: "About", href: "#" },
      {
        label: "Our Partner", href:"#",
        // dropdown: [
        //   { label: "Docs", href: "#" },
        //   { label: "Tutorials", href: "#" },
        //   { label: "Blog", href: "#" },
        //   { label: "Support", href: "#" },
        // ],
      },
      { label: "Contact Us", href: "#", },
    ];
    
    export default function NavBar() {
      const [mobileOpen, setMobileOpen] = useState(false);
      const [openDropdown, setOpenDropdown] = useState(null);
    
      const handleDropdown = (idx) => {
        setOpenDropdown(openDropdown === idx ? null : idx);
      };
    
      return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              {/* Logo/Brand */}
              <div className="flex items-center">
                <a href="#" className="flex items-center group">
                  <div className="bg-blue-600 group-hover:bg-blue-700 p-1.5 rounded-lg transition-colors duration-300 w-8 h-8" />
                  <span className="ml-2 text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    ETQAA
                  </span>
                </a>
              </div>
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1">
                {navLinks.map((link, idx) =>
                  link.dropdown ? (
                    <div
                      className="relative group "
                      key={link.label}
                      onMouseEnter={() => setOpenDropdown(idx)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <a href={link.href}
                        className="nav-link text-gray-700 hover:text-blue-600 px-4 py-2 flex items-center rounded-lg hover:bg-blue-50 transition-colors duration-200"
                        onClick={() => handleDropdown(idx)}
                        type="button"
                      >
                        {link.label}
                      </a>
                      {/* Dropdown */}
                      <div
                        className={`dropdown-menu absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-1 z-50 border border-gray-100 transition-all duration-300 ${
                          openDropdown === idx
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible -translate-y-2"
                        }`}
                      >
                        {link.dropdown.map((item) => (
                          <a
                            href={item.href}
                            key={item.label}
                            className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      key={link.label}
                      className="nav-link text-gray-700 hover:text-blue-600 px-4 py-2 flex items-center rounded-lg hover:bg-blue-50 transition-colors duration-200"
                    >
                      {link.label}
                      {link.badge && (
                        <span className="ml-2 bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                          {link.badge}
                        </span>
                      )}
                    </a>
                  )
                )}
              </div>
    
              {/* Mobile menu button with animated hamburger */}
              <button
                className="md:hidden p-2 text-gray-600 hover:text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 relative z-50"
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-expanded={mobileOpen}
              >
                <span className="sr-only">Menu</span>
                <div className="w-6 h-6 relative flex flex-col justify-center items-center">
                  <span
                    className={`block absolute h-0.5 w-6 bg-gray-600 transform transition-all duration-500 ease-in-out ${
                      mobileOpen ? "rotate-45 top-3" : "top-1"
                    }`}
                  ></span>
                  <span
                    className={`block absolute h-0.5 w-6 bg-gray-600 transition-all duration-500 ease-in-out ${
                      mobileOpen ? "opacity-0" : "top-3"
                    }`}
                  ></span>
                  <span
                    className={`block absolute h-0.5 w-6 bg-gray-600 transform transition-all duration-500 ease-in-out ${
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
            className={`fixed top-0 left-0 w-4/5 max-w-xs h-full bg-white shadow-2xl border-r border-gray-200 z-50 transform transition-transform duration-700 ease-in-out
            ${mobileOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
          >
            {/* Logo at the top of mobile menu */}
            <div className="flex flex-col items-center pt-6 pb-2">
              <a href="#" className="flex items-center group">
                <div className="bg-blue-600 group-hover:bg-blue-700 p-1.5 rounded-lg transition-colors duration-300 w-8 h-8" />
                <span className="ml-2 text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  AcmePro
                </span>
              </a>
            </div>
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navLinks.map((link, idx) =>
                link.dropdown ? (
                  <div key={link.label}>
                    <button
                      className="w-full flex justify-between items-center px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                      onClick={() => handleDropdown(idx)}
                      type="button"
                    >
                      <span>{link.label}</span>
                      <span
                        className={`transform transition-transform duration-500 ${
                          openDropdown === idx ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        openDropdown === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pl-4 mt-1 space-y-1">
                        {link.dropdown.map((item) => (
                          <a
                            href={item.href}
                            key={item.label}
                            className="block px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    href={link.href}
                    key={link.label}
                    className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                  >
                    {link.label}
                    {link.badge && (
                      <span className="ml-2 bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </a>
                )
              )}
            </div>
          </div>
        </nav>
      );
    }