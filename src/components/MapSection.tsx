'use client';

import { MapPin } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function MapSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' } // Start loading 300px before section enters viewport
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 relative bg-[#fafafa]" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-[2.5rem] p-4 md:p-8 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 px-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                <MapPin className="text-primary" />
                Как до нас добраться
              </h2>
              <p className="text-slate-500 font-medium">Белокуриха, ул. Угрюмова, д. 20</p>
            </div>
            
            {/* Yandex Reviews Badge — lazy loaded */}
            <div className="mt-4 md:mt-0 flex shrink-0">
              {isVisible ? (
                <iframe 
                  src="https://yandex.ru/sprav/widget/rating-badge/1126685827?type=rating" 
                  width="150" 
                  height="50" 
                  frameBorder="0" 
                  className="rounded-xl"
                  aria-label="Рейтинг Яндекса"
                ></iframe>
              ) : (
                <div className="w-[150px] h-[50px] bg-slate-100 rounded-xl animate-pulse" />
              )}
            </div>
          </div>

          <div className="w-full h-[400px] md:h-[500px] rounded-[1.5rem] overflow-hidden relative shadow-inner bg-slate-100">
             {/* Map loading placeholder */}
             <div className="absolute inset-0 flex items-center justify-center -z-10">
               <div className="w-8 h-8 rounded-full border-4 border-slate-200 border-t-primary animate-spin"></div>
             </div>
             
             {isVisible ? (
               <iframe 
                 src="https://yandex.ru/map-widget/v1/?ll=84.984%2C51.996&z=15&l=map&pt=84.984%2C51.996%2Cpm2gnm" 
                 width="100%" 
                 height="100%" 
                 frameBorder="0"
                 loading="lazy"
                 className="w-full h-full relative z-10"
                 title="Карта проезда до комплекса Яковка"
               ></iframe>
             ) : (
               <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                 <div className="text-center text-slate-400">
                   <MapPin size={32} className="mx-auto mb-2 opacity-50" />
                   <p className="text-sm">Загрузка карты...</p>
                 </div>
               </div>
             )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
