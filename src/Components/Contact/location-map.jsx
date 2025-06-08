
import React from 'react';

export default function LocationMap() {
  return (
    <div className="h-[400px] w-full bg-[#061224] relative">
      {/* This is a placeholder for the map. In a real application, you would use a mapping library like Google Maps, Mapbox, or Leaflet */}
      <div className="absolute inset-0 flex items-center justify-center">
        <iframe 
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.800093714988!2d46.7213225!3d24.6993978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03639b7f4d65%3A0xd0a7898d1fffa331!2sETQAA%20Cybersecurity%20Company!5e0!3m2!1sar!2seg!4v1749382157292!5m2!1sar!2seg"          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>




    </div>
  )
}