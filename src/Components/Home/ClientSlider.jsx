import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import clientsData from '../../data/clients.json';

const ClientSlider = ({ 
  clients = [], 
  showTitle = true,
  animationSpeed = 25, 
  className = "" 
}) => {
  const { t, i18n } = useTranslation();
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredClient, setHoveredClient] = useState(null);
  const [stats, setStats] = useState({ clients: 0, projects: 0, satisfaction: 0 });
  const isRTL = i18n.language === 'ar';

  // Use provided clients or default from JSON file
  const clientsToShow = clients.length > 0 ? clients : clientsData.clients;
  
  // تكرار العملاء للحصول على تمرير لا نهائي سلس
  const repeatedClients = [...clientsToShow, ...clientsToShow, ...clientsToShow];

  // إحصائيات متحركة
  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        clients: clientsToShow.length,
        projects: 150,
        satisfaction: 98
      });
    }, 500);
    return () => clearTimeout(timer);
  }, [clientsToShow.length]);

  const animatedStats = {
    clients: stats.clients,
    projects: stats.projects,
    satisfaction: stats.satisfaction
  };

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-20 ${className}`}>
      {/* خطوط الإضاءة المتحركة */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-500/10 to-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* نقاط ضوئية متحركة */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/60 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-400/60 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-1/4 left-2/3 w-1.5 h-1.5 bg-purple-400/60 rounded-full animate-ping delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* العنوان والوصف */}
        {showTitle && (
          <div className="text-center mb-16 ">
            <h2 className="text-4xl py-3 md:text-5xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-4 tracking-wider">
              {isRTL ? clientsData.title.ar : clientsData.title.en}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {isRTL ? clientsData.subtitle.ar : clientsData.subtitle.en}
            </p>
          </div>
        )}

        {/* السلايدر */}
        <div 
          className="relative overflow-hidden rounded-3xl bg-gray-800/40 backdrop-blur-sm border border-gray-700/30 shadow-2xl p-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className={`flex space-x-8 ${isRTL ? 'space-x-reverse' : ''}`}
            style={{
              animation: `scroll-${isRTL ? 'rtl' : 'ltr'} ${animationSpeed}s linear infinite`,
              animationPlayState: isPaused ? 'paused' : 'running'
            }}
          >
            {repeatedClients.map((client, index) => (
              <div 
                key={`${client.id}-${index}`}
                className="flex-shrink-0 group cursor-pointer relative"
                onMouseEnter={() => setHoveredClient(client)}
                onMouseLeave={() => setHoveredClient(null)}
              >
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl
                
                shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl overflow-hidden">
                  {/* خلفية متدرجة */}

                  {/* الصورة */}
                  <img
                    src={client.logo}
                    alt={isRTL ? client.name : client.nameEn}
                    className="relative z-10 w-full h-full object-contain p-4 transition-all duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  
                  {/* تأثير الإضاءة عند التمرير */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* نقاط ضوئية صغيرة */}
                  <div className="absolute top-2 right-2 w-1 h-1 bg-cyan-400/60 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                </div>
                
                {/* معلومات العميل عند التمرير */}
                {hoveredClient && hoveredClient.id === client.id && (
                  <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-gray-900/95 via-slate-800/95 to-gray-900/95 backdrop-blur-lg rounded-xl shadow-2xl border border-cyan-400/40 p-5 min-w-72 max-w-sm z-[9999] animate-in fade-in duration-300">
                    {/* خلفية متدرجة داخلية */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 rounded-xl"></div>
                    
                    {/* المحتوى */}
                    <div className="relative z-10">
                      <div className="text-center mb-3">
                        <div className="inline-block p-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-lg mb-2">
                          <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                      </div>
                      
                      <h3 className="font-bold text-lg bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-2 text-center leading-tight">
                        {isRTL ? client.name : client.nameEn}
                      </h3>
                      
                      <div className="flex items-center justify-center mb-3">
                        <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent flex-1"></div>
                        <div className="px-3">
                          <span className="text-xs font-medium bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            {isRTL ? client.sector : client.sectorEn}
                          </span>
                        </div>
                        <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent flex-1"></div>
                      </div>
                      
                      <p className="text-gray-300 text-center leading-relaxed text-sm font-light">
                        {isRTL ? client.description : client.descriptionEn}
                      </p>
                      
                      {/* نقاط ضوئية متحركة */}
                      <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-ping"></div>
                      <div className="absolute bottom-3 left-3 w-1 h-1 bg-blue-400/60 rounded-full animate-ping delay-500"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
 

      </div>

      {/* CSS للأنيميشن */}
      <style jsx>{`
        @keyframes scroll-ltr {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        @keyframes scroll-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(33.333%);
          }
        }
      `}</style>
    </div>
  );
};

export default ClientSlider;