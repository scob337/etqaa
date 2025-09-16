import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import clientsData from '../../data/clients.json';
import Partners from '../../data/partners.json'
const SliderMarquee = ({ 
  clients = [], 
  showTitle = true,
  animationSpeed = 25, 
  className = "" 
}) => {
const Partner_IMG = Partners.partners.map(el =>{
  return el.logo
})
  const images =  Partner_IMG

  const { t, i18n } = useTranslation();
  const [isPaused, setIsPaused] = useState(false);
  const [stats, setStats] = useState({ clients: 0, projects: 0, satisfaction: 0 });
  const isRTL = i18n.language === 'ar';

  // Use provided clients or default from JSON file
  const clientsToShow = clients.length > 0 ? clients : images;
  
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

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* العنوان والوصف */}
        {showTitle && (
          <div className="text-center mb-16 ">
            <h2 className="text-4xl py-3 md:text-5xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-4 tracking-wider">
              {isRTL ? 'شركاؤنا' : 'Our Partners'}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {isRTL ? clientsData.subtitle.ar : clientsData.subtitle.en}
            </p>
          </div>
        )}

        {/* السلايدر */}
        <div 
          className="relative overflow-hidden rounded-3xl bg-gray-800/40 backdrop-blur-sm border border-gray-700/30 shadow-2xl p-6 mx-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className={`flex space-x-6 ${isRTL ? 'space-x-reverse' : ''}`}
            style={{
              animation: `scroll-${isRTL ? 'rtl' : 'ltr'} ${animationSpeed}s linear infinite`,
              animationPlayState: isPaused ? 'paused' : 'running',
              width: 'max-content'
            }}
          >
            {repeatedClients.map((client, index) => (
              <div 
                key={`${client}-${index}`}
                className="flex-shrink-0 group cursor-pointer relative"
              >
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl overflow-hidden">
                  {/* خلفية متدرجة */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-50 opacity-95"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-50/30 via-transparent to-blue-50/30"></div>
                  
                  {/* حدود داخلية */}
                  <div className="absolute inset-1 rounded-xl border border-gray-200/50"></div>
                  
                  {/* الصورة */}
                  <img
                    src={client}
                    alt="Partner Logo"
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



 export default SliderMarquee;
