'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Snowflake, Mountain, LocateFixed, Zap } from 'lucide-react';
import CallToActionButton from '@/components/CallToActionButton'; // We will create a simple CTA component or reuse modal
import Breadcrumbs from '@/components/ui/Breadcrumbs';

gsap.registerPlugin(ScrollTrigger);

export default function SkiResortPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.ski-card', 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.15, duration: 1, ease: 'power3.out' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white pt-24" ref={containerRef}>
      <div className="container mx-auto px-6 py-12">
        <Breadcrumbs variant="light" />
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6 uppercase tracking-widest border border-blue-100 shadow-sm ski-card mt-8">
            <Snowflake size={16} /> Зимний сезон
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight ski-card">Сердце Горнолыжной Белокурихи</h1>
          <p className="text-xl text-slate-600 leading-relaxed ski-card">
            В зимний сезон "Яковка" — это полноценный комплекс услуг для активного горнолыжного отдыха. Наши склоны прекрасно подходят как для начинающих, так и для опытных райдеров.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="ski-card bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 hover:shadow-xl transition-shadow text-center flex flex-col items-center">
            <Mountain size={48} className="text-blue-500 mb-6"/>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Северный склон</h3>
            <p className="text-slate-600 leading-relaxed">
              Расположение трасс на северной стороне гарантирует, что снежный покров держится дольше и остается качественным до самой весны.
            </p>
          </div>
          <div className="ski-card bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 hover:shadow-xl transition-shadow text-center flex flex-col items-center">
            <LocateFixed size={48} className="text-teal-500 mb-6"/>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Для начинающих</h3>
            <p className="text-slate-600 leading-relaxed">
              Очень удобные, пологие и широкие сбросы помогут вам освоить горные лыжи в кратчайшие сроки без стресса.
            </p>
          </div>
          <div className="ski-card bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 hover:shadow-xl transition-shadow text-center flex flex-col items-center">
            <Zap size={48} className="text-amber-500 mb-6"/>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ski-in / Ski-out</h3>
            <p className="text-slate-600 leading-relaxed">
              Вам не нужно никуда ехать. Выходите из дверей вашего шале, надеваете лыжи и вы уже на склоне у подъемника!
            </p>
          </div>
        </div>

        {/* Massive Image Block */}
        <div className="ski-card relative rounded-[3rem] overflow-hidden aspect-[21/9] shadow-2xl mb-24 max-h-[600px]">
           <Image 
             src="https://xn--80adxbs4h.xn--p1ai/wp-content/uploads/2024/02/Гора-1.webp" 
             alt="Горнолыжный склон Яковка"
             fill
             className="object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-12 lg:p-20 text-white">
             <h2 className="text-3xl lg:text-5xl font-bold mb-6">Прокат и обучение</h2>
             <p className="text-lg lg:text-xl text-slate-200 max-w-2xl mb-8 leading-relaxed">
               В комплексе работает современный пункт проката снаряжения. У нас есть всё: от лыж и сноубордов до шлемов и защитной экипировки. Опытные инструкторы научат вас кататься с абсолютного нуля.
             </p>
             <button className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg w-fit hover:scale-105 transition-transform">
               Узнать цены на прокат
             </button>
           </div>
        </div>

      </div>
    </div>
  );
}
