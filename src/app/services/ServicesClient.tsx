'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Flame, ChefHat, Sparkles, Building, Car, Mountain, Bus, Wifi, ShieldCheck } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { PriceTable } from '@/components/PriceTable';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: ChefHat,
    title: 'Домашняя кухня и Завтраки',
    desc: 'Авторская сибирская кухня. Вкуснейшие завтраки для гостей отеля, фермерские продукты и уютная атмосфера шале.',
    link: '/infrastructure/restaurant',
    color: 'text-orange-500',
    bg: 'group-hover:bg-orange-50'
  },
  {
    icon: Flame,
    title: 'Русская баня на дровах',
    desc: 'Настоящая парная, ледяная летний неподогреваемый бассейн и целебные алтайские веники. Идеальное восстановление после активного дня в горах.',
    link: '/infrastructure/banya',
    color: 'text-red-500',
    bg: 'group-hover:bg-red-50'
  },
  {
    icon: Mountain,
    title: 'Горнолыжный склон',
    desc: 'Формат Ski-in / Ski-out. Свой бугельный подъемник, прокат инвентаря и трассы разного уровня сложности.',
    link: '/infrastructure/ski',
    color: 'text-blue-500',
    bg: 'group-hover:bg-blue-50'
  },
  {
    icon: Bus,
    title: 'Трансфер для гостей',
    desc: 'Встретим в аэропорту или на вокзале. Комфортабельные микроавтобусы от нашего партнера «Як и Панты».',
    link: '/contacts',
    color: 'text-primary',
    bg: 'group-hover:bg-primary/10'
  },
  {
    icon: Sparkles,
    title: 'Мангальные зоны',
    desc: 'Оборудованные беседки с освещением, решетками и шампурами для идеального барбекю на свежем воздухе.',
    link: null,
    color: 'text-purple-500',
    bg: 'group-hover:bg-purple-50'
  },
  {
    icon: Wifi,
    title: 'Высокоскоростной Wi-Fi',
    desc: 'Бесплатный интернет на всей территории отеля: в номерах, домашняя кухняе и на улице.',
    link: null,
    color: 'text-cyan-500',
    bg: 'group-hover:bg-cyan-50'
  },
  {
    icon: Car,
    title: 'Парковка под видеонаблюдением',
    desc: 'Бесплатная стоянка с видеонаблюдением для автомобилей гостей на закрытой территории отеля.',
    link: null,
    color: 'text-stone-500',
    bg: 'group-hover:bg-stone-100'
  },
  {
    icon: Building,
    title: 'Мероприятия',
    desc: 'Организация корпоративов, свадеб и дней рождения под ключ на фоне потрясающей природы Алтая.',
    link: '/events',
    color: 'text-rose-500',
    bg: 'group-hover:bg-rose-50'
  }
];

export default function ServicesClient() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;
      
      gsap.fromTo('.svc-card', 
        { y: isMobile ? 20 : 50, opacity: 0 }, 
        { 
          y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.svc-grid', start: 'top 85%' }
        }
      );
      
      gsap.fromTo('.price-section', 
        { y: isMobile ? 20 : 50, opacity: 0 }, 
        { 
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.price-section', start: 'top 85%' }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-stone-50" ref={containerRef}>
      <PageHero
        title="Услуги и сервис"
        subtitle="Мы позаботились обо всем, чтобы ваш отдых был беззаботным. Изучите инфраструктуру нашего загородного комплекса."
        badge="✨ Премиальный комфорт"
        imageSrc="/optimized/Виды/Бассейн/Бассейн-01.webp"
        imageAlt="Услуги отеля Яковка"
        breadcrumbs={[{ label: 'Услуги' }]}
      />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-stone-900 mb-4">Вся инфраструктура</h2>
            <p className="text-stone-500 text-lg">Вам не нужно никуда ехать — всё самое лучшее уже здесь.</p>
          </div>

          <div className="svc-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((svc, idx) => {
              const CardWrapper = svc.link ? Link : 'div';
              return (
                <CardWrapper 
                  key={idx} 
                  href={svc.link || '#'}
                  className={`svc-card group relative p-8 bg-white rounded-[2rem] shadow-sm border border-stone-100 overflow-hidden transition-all duration-300 flex flex-col h-full ${svc.link ? 'cursor-pointer hover:shadow-premium hover:-translate-y-1' : ''}`}
                >
                  <div className={`absolute inset-0 ${svc.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                      <svc.icon className={`w-7 h-7 ${svc.color}`} />
                    </div>
                    
                    <h3 className="font-heading text-xl font-bold text-stone-900 mb-3">{svc.title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed mb-6 flex-grow">{svc.desc}</p>
                    
                    {svc.link && (
                      <div className="mt-auto flex items-center gap-2 text-stone-900 font-bold text-sm group-hover:gap-3 transition-all">
                        Подробнее <ArrowUpRight size={16} />
                      </div>
                    )}
                  </div>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Прайс-лист секция */}
      <section className="price-section py-24 bg-white border-t border-stone-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">Цены</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-stone-900 mb-4">Популярные услуги</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <PriceTable 
              title="Русская баня" 
              subtitle="Аренда комплекса (до 6 человек)"
              items={[
                { name: 'Первые 2 часа', price: 4000, description: 'Минимальное время бронирования', highlighted: true },
                { name: 'Каждый последующий час', price: 1500 },
                { name: 'Березовый веник', price: 350 },
                { name: 'Дубовый веник', price: 450 },
                { name: 'Алтайский фиточай', price: 'В подарок' }
              ]} 
            />

            <PriceTable 
              title="Дополнительный сервис" 
              subtitle="Комфорт и логистика"
              items={[
                { name: 'Трансфер от аэропорта', price: '3 000 руб.', description: 'Горно-Алтайск → Яковка (до 4 чел.)' },
                { name: 'Дрова для мангала', price: 300, description: 'Связка дров для барбекю' },
                { name: 'Уголь и розжиг', price: 500, description: 'Комплект для розжига мангала' },
                { name: 'Размещение питомца', price: 1000, description: 'Единоразовый сбор за уборку', highlighted: true },
                { name: 'Ранний заезд / Поздний выезд', price: 'По запросу', description: 'Зависит от наличия свободных номеров' }
              ]} 
            />
          </div>
        </div>
      </section>
    </div>
  );
}
