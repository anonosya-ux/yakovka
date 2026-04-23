'use client';

import { MapPin } from 'lucide-react';

export default function MapSection() {
  return (
    <section className="py-24 relative bg-[#fafafa]">
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
            
            {/* Yandex Reviews Badge (from old site logic) */}
            <div className="mt-4 md:mt-0 flex shrink-0">
               <iframe 
                 src="https://yandex.ru/sprav/widget/rating-badge/1126685827?type=rating" 
                 width="150" 
                 height="50" 
                 frameBorder="0" 
                 className="rounded-xl"
                 aria-label="Рейтинг Яндекса"
               ></iframe>
            </div>
          </div>

          <div className="w-full h-[400px] md:h-[500px] rounded-[1.5rem] overflow-hidden relative shadow-inner bg-slate-100">
             {/* Map lazy loading mask */}
             <div className="absolute inset-0 flex items-center justify-center -z-10">
               <div className="w-8 h-8 rounded-full border-4 border-slate-200 border-t-primary animate-spin"></div>
             </div>
             
             <iframe 
               src="https://yandex.ru/map-widget/v1/?um=constructor%3A7a195e267b14068593ccf9d1469be43c3d5a498dc7170a7d90391d1eaff80b1e&amp;source=constructor" 
               width="100%" 
               height="100%" 
               frameBorder="0"
               loading="lazy"
               className="w-full h-full relative z-10"
               title="Карта проезда до комплекса Яковка"
             ></iframe>
          </div>
          
        </div>
      </div>
    </section>
  );
}
