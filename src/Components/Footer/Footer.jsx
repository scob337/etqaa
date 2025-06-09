import React, { useEffect } from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Service", href: "services" },
  { label: "About", href: "about" },
];
const servicesLinks = [
  { label: "Visibility & Analytics", href: "/services/visibility-analytics" },
  { label: "SIEM", href: "/services/siem" },
  { label: "Endpoint Detection & Response (EDR)", href: "/services/edr" },
  { label: "Threat Intelligence", href: "/services/threat-intelligence" },
  { label: "SOC Services", href: "/services/soc" },
  { label: "Operational Technology (OT) Security", href: "/services/ot-security" },
  { label: "Digital Forensics & Incident Response (DFIR)", href: "/services/dfir" },
  { label: "User and Entity Behaviour Analytics (UEBA)", href: "/services/ueba" },
  { label: "Dark Web Threat Intelligence", href: "/services/dark-web-threat-intelligence" },
];
const socialLinks = [
  { icon: <FaFacebookF />, href: "#", label: "Facebook" },
  { icon: <FaTwitter />, href: "#", label: "Twitter" },
  { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  useEffect(() => {
    // Orb follow effect
    const orb = document.querySelector('.orb');
    const handleMouseMove = (e) => {
      if (orb) {
        orb.style.left = `${e.clientX}px`;
        orb.style.top = `${e.clientY}px`;
      }
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden pt-12">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl animate-float1"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl animate-float2"></div>
        <div className="absolute bottom-10 left-1/2 w-48 h-48 bg-cyan-500 rounded-full filter blur-3xl animate-float3"></div>
      </div>

      {/* Main footer content */}
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Logo and Socials */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-3">
            <span className="inline-block rounded-xl bg-gradient-to-r from-cyan-400
             to-blue-500 p-2 font-bold shadow-lg">
                ETQAA
            </span>
          </div>
          <div className="flex space-x-4 mt-5">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 text-xl shadow-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Grid layout */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-gray-700">
          {/* Main Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-5 tracking-wide text-cyan-300">Main Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-all duration-200 pl-1 border-l-2 border-transparent hover:border-cyan-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Services Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-5 tracking-wide text-cyan-300">Services</h3>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-all duration-200 pl-1 border-l-2 border-transparent hover:border-cyan-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-5 tracking-wide text-cyan-300">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="w-9 h-9 bg-blue-500/20 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </span>
                <a href="mailto:info@etqaa.com" className="text-white hover:text-cyan-400 transition">info@etqaa.com</a>
              </li>
              <li className="flex items-center">
                <span className="w-9 h-9 bg-blue-500/20 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </span>
                <a href="tel:+966531100366" className="text-white hover:text-cyan-400 transition">+966 53 110 0366</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; <span className="text-cyan-400">{new Date().getFullYear()}</span> ETQAA. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Floating orb that follows cursor */}
      <div className="orb absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 filter blur-3xl pointer-events-none"></div>

      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, 20px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-15px, 15px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(0, -20px); }
        }
        .animate-float1 { animation: float1 8s ease-in-out infinite; }
        .animate-float2 { animation: float2 10s ease-in-out infinite; }
        .animate-float3 { animation: float3 12s ease-in-out infinite; }
        .orb {
          transform: translate(-50%, -50%);
          opacity: 0.3;
          transition: transform 0.1s ease-out;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
