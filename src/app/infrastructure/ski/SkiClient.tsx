'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mountain, Snowflake, ShieldCheck, Coffee } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { PriceTable } from '@/components/PriceTable';

gsap.registerPlugin(ScrollTrigger);

export default function SkiClient() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;
      
      gsap.utils.toArray('.reveal-el').forEach((el: any) => {
        gsap.fromTo(el,
          { y: isMobile ? 20 : 50, opacity: 0 },
          { 
            y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%' }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-stone-50" ref={containerRef}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SkiResort",
            "name": "Горнолыжный склон Яковка",
            "description": "Собственный горнолыжный склон с бугельным подъемником на территории эко-курорта «Яковка».",
            "telephone": "+7 (960) 955-21-00",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "ул. Угрюмова, д. 4",
              "addressLocality": "Белокуриха",
              "addressRegion": "Алтайский край",
              "postalCode": "659900",
              "addressCountry": "RU"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.993,
              "longitude": 84.983
            }
          })
        }}
      />

      <PageHero
        title="Горнолыжный склон"
        subtitle="Идеальное место для катания на горных лыжах и сноуборде всего в двух шагах от вашего номера."
        badge="🏂 Ski-in / Ski-out"
        imageSrc="/optimized/Мероприятия/Горные лыжи/Горные лыжи-01.webp"
        imageAlt="Горнолыжный склон Яковка"
        breadcrumbs={[{ label: 'Инфраструктура', href: '/services' }, { label: 'Склон' }]}
      />

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16 reveal-el">
            <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">Характеристики</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-stone-900 mb-6">О нашем склоне</h2>
            <p className="text-stone-600 text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed">
              Наш горнолыжный склон идеально подходит как для новичков, так и для опытных райдеров. 
              Благодаря удачному расположению, сезон катания здесь длится с конца ноября до середины апреля.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 reveal-el">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Mountain className="text-primary w-8 h-8" />
              </div>
              <h4 className="font-bold text-stone-900 mb-2">Перепад высот</h4>
              <p className="text-stone-500 font-light">около 200 метров</p>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <Snowflake className="text-blue-500 w-8 h-8" />
              </div>
              <h4 className="font-bold text-stone-900 mb-2">Длина трасс</h4>
              <p className="text-stone-500 font-light">До 1000 метров</p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="text-rose-500 w-8 h-8" />
              </div>
              <h4 className="font-bold text-stone-900 mb-2">Сложность</h4>
              <p className="text-stone-500 font-light">Зеленые и синие трассы</p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
                <Coffee className="text-orange-500 w-8 h-8" />
              </div>
              <h4 className="font-bold text-stone-900 mb-2">Инфраструктура</h4>
              <p className="text-stone-500 font-light">Кафе и прокат у подножия</p>
            </div>
          </div>
          
          <div className="bg-stone-900 text-white rounded-[3rem] p-10 md:p-16 overflow-hidden relative shadow-premium-lg reveal-el">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -mt-32 -mr-32" />
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2 space-y-6">
                <h3 className="font-heading text-3xl md:text-4xl font-bold">Бугельный подъемник</h3>
                <p className="text-stone-300 font-light leading-relaxed text-lg">
                  Склон оборудован современным бугельным подъемником, который обеспечит быстрый и комфортный подъем на вершину. 
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex items-center gap-3 text-stone-300">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Пропускная способность: до 500 человек в час
                  </li>
                  <li className="flex items-center gap-3 text-stone-300">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Время подъема: 5-7 минут
                  </li>
                  <li className="flex items-center gap-3 text-stone-300">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Регулярная подготовка трассы ратраком
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2 relative h-[300px] md:h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/optimized/Мероприятия/Горные лыжи/Горные лыжи-03.webp"
                  alt="Бугельный подъемник Яковка"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Прайс-лист */}
      <section className="py-24 bg-white border-t border-stone-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16 reveal-el">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-stone-900 mb-6">Цены на услуги</h2>
            <p className="text-stone-500 text-lg">Прокат инвентаря и ски-пассы</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 reveal-el">
            <PriceTable 
              title="Ски-пассы (Подъемник)" 
              subtitle="Доступ к бугельному подъемнику"
              items={[
                { name: '1 подъем', price: 100 },
                { name: '1 час катания', price: 500 },
                { name: 'Полный день', price: 1500, highlighted: true },
                { name: 'Детский ски-пасс (до 12 лет)', price: 'Скидка 50%', description: 'При наличии свидетельства о рождении' }
              ]} 
            />

            <PriceTable 
              title="Прокат инвентаря" 
              subtitle="Комплекты горных лыж и сноубордов"
              items={[
                { name: 'Комплект горные лыжи (взрослый)', price: '800 руб./час', description: 'Лыжи, ботинки, палки' },
                { name: 'Комплект сноуборд (взрослый)', price: '800 руб./час', description: 'Сноуборд, ботинки' },
                { name: 'Детский комплект', price: '500 руб./час', description: 'Лыжи или сноуборд для детей' },
                { name: 'Комплект на полный день', price: 2000, highlighted: true, description: 'Без ограничения по времени в течение дня' },
                { name: 'Инструктор (индивидуально)', price: '2000 руб./час' }
              ]} 
            />
          </div>
          
          <p className="text-center text-stone-400 text-sm mt-8 reveal-el">
            * Цены носят ознакомительный характер и могут быть изменены. Актуальную информацию уточняйте у администратора.
          </p>
        </div>
      </section>
    </div>
  );
}
