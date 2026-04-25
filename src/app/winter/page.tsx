'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Snowflake, ThermometerSnowflake, Coffee, Mountain, Compass, Activity, Calendar, Info, Clock } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';

gsap.registerPlugin(ScrollTrigger);

export default function WinterPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple, lightweight fade-in animations instead of heavy canvas
    const ctx = gsap.context(() => {
      gsap.fromTo('.anim-fade-up', 
        { y: 40, opacity: 0 }, 
        { 
          y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.features-grid', start: 'top 80%' }
        }
      );
      
      gsap.fromTo('.image-reveal', 
        { scale: 1.05, opacity: 0 }, 
        { 
          scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out',
          scrollTrigger: { trigger: '.content-section', start: 'top 75%' }
        }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-stone-50 min-h-screen" ref={containerRef}>
      <PageHero
        title="Зимняя Яковка"
        subtitle="Погрузитесь в атмосферу сказки. Заснеженные вершины, чистый горный воздух и идеальные трассы прямо у порога вашего номера."
        badge="❄️ Ski-in / Ski-out"
        imageSrc="/optimized/Мероприятия/Горные лыжи/Горные лыжи-02.webp"
        imageAlt="Зимний отдых в отеле Яковка"
        breadcrumbs={[{ label: 'Зимний отдых' }]}
      />

      {/* Intro Features */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-stone-900 mb-6">Идеальная зима на Алтае</h2>
            <p className="text-stone-500 text-lg md:text-xl max-w-2xl mx-auto">
              Мы создали все условия, чтобы ваш зимний отдых был не только активным, но и максимально комфортным.
            </p>
          </div>

          <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Mountain, title: 'Трассы у отеля', desc: 'Свой бугельный подъемник и прокат снаряжения. Вышел из номера — и сразу на склон.' },
              { icon: ThermometerSnowflake, title: 'Жаркая баня', desc: 'Настоящая русская баня на дровах с летний неподогреваемый бассейню для восстановления сил.' },
              { icon: Snowflake, title: 'Чистый снег', desc: 'Ежедневная подготовка склонов ратраком и пушки для искусственного оснежения.' },
              { icon: Coffee, title: 'Теплые вечера', desc: 'Авторская сибирская кухня и согревающие напитки в уютном домашняя кухняе с камином.' }
            ].map((feature, idx) => (
              <div key={idx} className="anim-fade-up bg-stone-50 p-8 rounded-[2rem] border border-stone-100 hover:shadow-premium transition-shadow">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-primary">
                  <feature.icon size={28} />
                </div>
                <h3 className="font-heading font-bold text-xl text-stone-900 mb-3">{feature.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section 1: Skiing */}
      <section className="content-section py-24 bg-stone-950 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Катание для всех</span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">Снежные склоны Яковки</h2>
              <p className="text-stone-300 text-lg leading-relaxed font-light">
                Наши трассы идеально подходят как для уверенных райдеров, так и для тех, кто только встает на лыжи или сноуборд. Профессиональные инструкторы помогут сделать первые шаги безопасными и уверенными.
              </p>
              <ul className="space-y-4 mt-8">
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary" /> Две трассы разного уровня сложности</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary" /> Бугельный подъемник</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary" /> Прокат современного снаряжения</li>
              </ul>
              <div className="pt-6">
                <a href="#ski-prices" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-white hover:text-stone-900 transition-colors">
                  Смотреть цены на подъемники
                </a>
              </div>
            </div>
            <div className="image-reveal relative aspect-square rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <Image 
                src="/optimized/Мероприятия/Горные лыжи/Горные лыжи-01.webp" 
                alt="Горные лыжи" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Info grid & Pricing Tables from Ski */}
      <section id="ski-prices" className="py-24 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="mb-16 max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-stone-900 mb-6 tracking-tight">Горнолыжный комплекс</h2>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed font-light">
              Северный склон горы гарантирует продолжительный сезон качественного снежного покрова.
            </p>
          </div>

          {/* Info grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-[1.5rem] shadow-sm hover:shadow-md transition-shadow border border-stone-200/60 flex flex-col items-center text-center">
              <div className="bg-primary/5 text-primary p-4 rounded-full mb-4">
                <Mountain size={28} />
              </div>
              <h3 className="font-heading font-bold text-stone-900 mb-2">4 Трассы</h3>
              <p className="text-sm text-stone-500">Различного уровня сложности</p>
            </div>
            <div className="bg-white p-6 rounded-[1.5rem] shadow-sm hover:shadow-md transition-shadow border border-stone-200/60 flex flex-col items-center text-center">
              <div className="bg-primary/5 text-primary p-4 rounded-full mb-4">
                <Activity size={28} />
              </div>
              <h3 className="font-heading font-bold text-stone-900 mb-2">1000 метров</h3>
              <p className="text-sm text-stone-500">Длина основных трасс</p>
            </div>
            <div className="bg-white p-6 rounded-[1.5rem] shadow-sm hover:shadow-md transition-shadow border border-stone-200/60 flex flex-col items-center text-center">
              <div className="bg-primary/5 text-primary p-4 rounded-full mb-4">
                <Compass size={28} />
              </div>
              <h3 className="font-heading font-bold text-stone-900 mb-2">Склоны</h3>
              <p className="text-sm text-stone-500">Северный склон, перепад 200 м</p>
            </div>
            <div className="bg-white p-6 rounded-[1.5rem] shadow-sm hover:shadow-md transition-shadow border border-stone-200/60 flex flex-col items-center text-center">
              <div className="bg-primary/5 text-primary p-4 rounded-full mb-4">
                <Calendar size={28} />
              </div>
              <h3 className="font-heading font-bold text-stone-900 mb-2">Режим работы</h3>
              <p className="text-sm text-stone-500">Вт-Вс: 10:00 - 18:00 (Пн - выходной)</p>
            </div>
          </div>

          {/* Pricing Tables */}
          <div className="max-w-5xl mx-auto mb-20">
            <h2 className="font-heading text-3xl font-bold text-center text-stone-900 mb-10">Тарифы на подъемники</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Бугельный подъемник */}
              <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg shadow-stone-200/50 border border-stone-200/60 relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-2 bg-primary"></div>
                <h3 className="font-heading text-2xl font-bold text-stone-900 mb-6">Бугельный подъемник</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center pb-4 border-b border-stone-100">
                    <span className="text-stone-600 font-medium tracking-wide">1 подъем</span>
                    <span className="font-heading text-lg font-bold text-stone-900">100 ₽</span>
                  </li>
                  <li className="flex justify-between items-center pb-4 border-b border-stone-100">
                    <span className="text-stone-600 font-medium tracking-wide">1 час</span>
                    <span className="font-heading text-lg font-bold text-stone-900">700 ₽</span>
                  </li>
                  <li className="flex justify-between items-center pb-4 border-b border-stone-100">
                    <span className="text-stone-600 font-medium tracking-wide">2 часа</span>
                    <span className="font-heading text-lg font-bold text-stone-900">1000 ₽</span>
                  </li>
                  <li className="flex justify-between items-center pb-4 border-b border-stone-100">
                    <span className="text-stone-600 font-medium tracking-wide">3 часа</span>
                    <span className="font-heading text-lg font-bold text-stone-900">1200 ₽</span>
                  </li>
                  <li className="flex justify-between items-center pb-2">
                    <span className="text-stone-600 font-medium tracking-wide">Дневной абонемент</span>
                    <span className="font-heading text-lg font-bold text-stone-900">1500 ₽</span>
                  </li>
                </ul>
                <p className="text-xs text-stone-400 mt-6">* Цены указаны для ознакомления, тарифы могут быть изменены.</p>
              </div>

              {/* Беби-лифт */}
              <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg shadow-stone-200/50 border border-stone-200/60 relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-2 bg-stone-800"></div>
                <h3 className="font-heading text-2xl font-bold text-stone-900 mb-6">Беби-лифт (Учебный склон)</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center pb-4 border-b border-stone-100">
                    <span className="text-stone-600 font-medium tracking-wide">1 подъем</span>
                    <span className="font-heading text-lg font-bold text-stone-900">50 ₽</span>
                  </li>
                  <li className="flex justify-between items-center pb-4 border-b border-stone-100">
                    <span className="text-stone-600 font-medium tracking-wide">1 час</span>
                    <span className="font-heading text-lg font-bold text-stone-900">300 ₽</span>
                  </li>
                  <li className="flex justify-between items-center pb-4 border-b border-stone-100">
                    <span className="text-stone-600 font-medium tracking-wide">2 часа</span>
                    <span className="font-heading text-lg font-bold text-stone-900">500 ₽</span>
                  </li>
                  <li className="flex justify-between items-center pb-4 border-b border-stone-100">
                    <span className="text-stone-600 font-medium tracking-wide">3 часа</span>
                    <span className="font-heading text-lg font-bold text-stone-900">700 ₽</span>
                  </li>
                  <li className="flex justify-between items-center pb-2">
                    <span className="text-stone-600 font-medium tracking-wide">Полдня <span className="text-sm font-normal text-stone-400">(до/после 14:00)</span></span>
                    <span className="font-heading text-lg font-bold text-stone-900">800 ₽</span>
                  </li>
                </ul>
                <div className="mt-6 flex items-start gap-2 text-sm text-stone-700 bg-stone-50 p-3 rounded-lg border border-stone-200">
                  <Info size={18} className="shrink-0 mt-0.5 text-stone-400" />
                  <p>Экскурсионный подъем («банан» и «ватрушки» не предоставляются) — 150 ₽</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 2: After Skiing */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row-reverse">
            <div className="space-y-6">
              <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">Apres-Ski</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-stone-900">Уют и тепло после гор</h2>
              <p className="text-stone-500 text-lg leading-relaxed">
                Завершите активный день правильно. Настоящая русская баня на дровах поможет восстановить мышцы, а сытный ужин из алтайских фермерских продуктов в нашем домашняя кухняе восполнит запас энергии.
              </p>
              <div className="pt-6">
                <Link href="/infrastructure/banya" className="inline-flex items-center justify-center px-8 py-4 bg-stone-100 text-stone-900 rounded-full font-bold hover:bg-stone-200 transition-colors">
                  Забронировать баню
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-premium-lg">
              <Image 
                src="/optimized/Виды/Кухня/Кухня-01.webp" 
                alt="Уют и тепло после гор" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CTABanner 
        title="Зимняя сказка ждет вас"
        subtitle="Выберите свой идеальный номер — от уютного стандарта до просторного семейного коттеджа."
        buttonText="Смотреть номера"
        buttonLink="/rooms"
        variant="primary"
      />
    </div>
  );
}
