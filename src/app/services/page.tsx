'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ArrowUpRight, Flame, ChefHat, Sparkles, Building, Car, Mountain } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.svc-card', 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power2.out' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24" ref={containerRef}>
      <div className="container mx-auto px-6">
        <Breadcrumbs variant="light" />
        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-6">Услуги</h1>
          <p className="text-xl text-slate-600 max-w-2xl font-light leading-relaxed">
            Мы позаботились о том, чтобы ваш отдых был максимально комфортным и разнообразным. Откройте для себя всю инфраструктуру курорта.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <Link href="/infrastructure/restaurant" className="svc-card group block relative p-10 bg-white rounded-[2.5rem] shadow-sm hover:shadow-xl border border-slate-100 overflow-hidden transition-all duration-300">
            <div className="absolute inset-0 bg-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col h-full">
              <ChefHat size={40} className="text-orange-500 mb-8" />
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Ресторан</h2>
              <p className="text-slate-600 mb-8">Авторская сибирская кухня, банкеты и завтраки. Фермерские продукты и уютная атмосфера.</p>
              <div className="mt-auto flex items-center gap-2 text-orange-600 font-bold group-hover:gap-4 transition-all">
                Подробнее <ArrowUpRight size={20} />
              </div>
            </div>
          </Link>

          <Link href="/infrastructure/banya" className="svc-card group block relative p-10 bg-white rounded-[2.5rem] shadow-sm hover:shadow-xl border border-slate-100 overflow-hidden transition-all duration-300">
            <div className="absolute inset-0 bg-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col h-full">
              <Flame size={40} className="text-red-500 mb-8" />
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Русская баня</h2>
              <p className="text-slate-600 mb-8">Настоящая парная на дровах, купель с ледяной водой и целебные алтайские веники для вашего здоровья.</p>
              <div className="mt-auto flex items-center gap-2 text-red-600 font-bold group-hover:gap-4 transition-all">
                Подробнее <ArrowUpRight size={20} />
              </div>
            </div>
          </Link>

          <Link href="/infrastructure/ski" className="svc-card group block relative p-10 bg-white rounded-[2.5rem] shadow-sm hover:shadow-xl border border-slate-100 overflow-hidden transition-all duration-300">
            <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col h-full">
              <Mountain size={40} className="text-blue-500 mb-8" />
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Горнолыжный склон</h2>
              <p className="text-slate-600 mb-8">Ski-in / Ski-out. Прокат инвентаря, услуги инструкторов и подготовленные трассы для всех уровней.</p>
              <div className="mt-auto flex items-center gap-2 text-blue-600 font-bold group-hover:gap-4 transition-all">
                Подробнее <ArrowUpRight size={20} />
              </div>
            </div>
          </Link>

          <div className="svc-card group block relative p-10 bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
            <div className="relative z-10 flex flex-col h-full">
              <Sparkles size={40} className="text-purple-500 mb-8" />
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Мангальные зоны</h2>
              <p className="text-slate-600 mb-8">Специально оборудованные беседки с электричеством и всем необходимым для BBQ на свежем воздухе.</p>
            </div>
          </div>

          <div className="svc-card group block relative p-10 bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
            <div className="relative z-10 flex flex-col h-full">
              <Car size={40} className="text-slate-500 mb-8" />
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Бесплатная парковка</h2>
              <p className="text-slate-600 mb-8">Круглосуточно охраняемая парковка с видеонаблюдением на территории отеля для всех гостей.</p>
            </div>
          </div>

          <Link href="/events" className="svc-card group block relative p-10 bg-zinc-900 rounded-[2.5rem] shadow-sm hover:shadow-xl overflow-hidden transition-all duration-300">
            <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col h-full text-white">
              <Building size={40} className="text-blue-400 mb-8" />
              <h2 className="text-2xl font-bold text-white mb-4">Проведение мероприятий</h2>
              <p className="text-slate-400 mb-8">Корпоративы, свадьбы, ретриты и дни рождения под ключ в загородной атмосфере.</p>
              <div className="mt-auto flex items-center gap-2 text-blue-400 font-bold group-hover:gap-4 transition-all">
                Перейти в раздел <ArrowUpRight size={20} />
              </div>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}
