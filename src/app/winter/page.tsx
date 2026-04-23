'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Snowflake, ThermometerSnowflake, Coffee, Mountain } from 'lucide-react';
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
              { icon: ThermometerSnowflake, title: 'Жаркая баня', desc: 'Настоящая русская баня на дровах с купелью для восстановления сил.' },
              { icon: Snowflake, title: 'Чистый снег', desc: 'Ежедневная подготовка склонов ратраком и пушки для искусственного оснежения.' },
              { icon: Coffee, title: 'Теплые вечера', desc: 'Авторская сибирская кухня и согревающие напитки в уютном ресторане с камином.' }
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
                <Link href="/infrastructure/ski" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-white hover:text-stone-900 transition-colors">
                  Узнать цены на подъемник
                </Link>
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

      {/* Content Section 2: After Skiing */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row-reverse">
            <div className="space-y-6">
              <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">Apres-Ski</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-stone-900">Уют и тепло после гор</h2>
              <p className="text-stone-500 text-lg leading-relaxed">
                Завершите активный день правильно. Настоящая русская баня на дровах поможет восстановить мышцы, а сытный ужин из алтайских фермерских продуктов в нашем ресторане восполнит запас энергии.
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
