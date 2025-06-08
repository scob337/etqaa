import React from 'react';
// import { useTranslation } from 'react-i18next';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactInfo = () => {
  // const { t } = useTranslation();
  // const isRTL = false;
  // const isRTL = i18n.language === 'ar';

  return (
    <div 
      dir="ltr"
      className="bg-[#061224] p-8 rounded-lg shadow-xl h-full text-left border border-gray-800"
    >
      <h3 className="text-2xl font-bold mb-8 text-white text-left">
        Contact Information
      </h3>
      
      <div className="space-y-8">
        <div className="flex flex-row items-start group">
          <div className="mr-6 mt-1 bg-[#0A162C] p-3 rounded-xl group-hover:bg-zinc-500 transition-all duration-300">
            <FaMapMarkerAlt className="text-white w-6 h-6" />
          </div>
          <div className="text-left">
            <h4 className="font-semibold mb-2 text-lg text-white">Address</h4>
            <p className="text-gray-400 leading-relaxed">شارع ابن كثير، السليمانية، الرياض 12234، المملكة العربية السعودية</p>
          </div>
        </div>
        
        <div className="flex flex-row items-start group">
          <div className="mr-6 mt-1 bg-[#0A162C] p-3 rounded-xl group-hover:bg-zinc-500 transition-all duration-300">
            <FaPhone className="text-white w-6 h-6" />
          </div>
          <div className="text-left">
            <h4 className="font-semibold mb-2 text-lg text-white">Phone</h4>
            <p className="text-gray-400 leading-relaxed">+966544450138</p>
          </div>
        </div>
        
        <div className="flex flex-row items-start group">
          <div className="mr-6 mt-1 bg-[#0A162C] p-3 rounded-xl group-hover:bg-zinc-500 transition-all duration-300">
            <FaEnvelope className="text-white w-6 h-6" />
          </div>
          <div className="text-left">
            <h4 className="font-semibold mb-2 text-lg text-white">Email</h4>
            <p className="text-gray-400 leading-relaxed">etqaa.com/</p>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <h4 className="font-semibold mb-6 text-lg text-white text-left">
          Social Media
        </h4>
        <div className="flex gap-4 flex-row justify-start">
          <a 
            to="https://www.linkedin.com/company/divaniworldcom/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#0A162C] p-4 rounded-xl hover:bg-zinc-500 transition-all duration-300 group"
          >
            <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a 
            to="https://www.instagram.com/divaniworld?igsh=dWprbmQwdjFvdjRv&utm_source=qr" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#0A162C] p-4 rounded-xl hover:bg-zinc-500 transition-all duration-300 group"
          >
            <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          <a 
            to="https://www.snapchat.com/add/divanidesigns?share_id=ePpwSdeaL4k&locale=ar-AE" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#0A162C] p-4 rounded-xl hover:bg-zinc-500 transition-all duration-300 group"
          >
            <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;