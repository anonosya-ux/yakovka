'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, BarChart3, Users, Building, Map, CheckCircle2, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import AnimatedCounter from '@/components/AnimatedCounter';
import CallbackModal from '@/components/CallbackModal';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const blocks = [
  {
    title: 'Строительство Шале',
    desc: 'Возведение новых эко-домов из кедра и проектирование видовых апартаментов на склоне горы. Уникальное сочетание современного дизайна и алтайских традиций.',
    icon: Building,
    features: ['Эко-материалы', 'Панорамные виды', 'Высокий спрос'],
  },
  {
    title: 'Высокая рентабельность',
    desc: 'Стабильный круглогодичный спрос (летом — здоровье и экскурсии, зимой — горные лыжи) гарантирует высокую доходность и быструю окупаемость вложений.',
    icon: BarChart3,
    features: ['Круглогодичная загрузка', 'Рост турпотока', 'Быстрая окупаемость'],
  },
  {
    title: 'Партнерская модель',
    desc: 'Мы предлагаем прозрачные условия сотрудничества для со-инвесторов. Комплексное юридическое сопровождение сделки и полное управление объектом после сдачи.',
    icon: Users,
    features: ['Прозрачная отчетность', 'Пассивный доход', 'Юридическая защита'],
  }
];

export default function InvestClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.invest-card', 
        { y: 50, opacity: 0 }, 
        { 
          y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.invest-grid', start: 'top 85%' }
        }
      );
      
      gsap.fromTo('.map-block', 
        { scale: 0.95, opacity: 0 }, 
        { 
          scale: 1, opacity: 1, duration: 1, ease: 'power2.out',
          scrollTrigger: { trigger: '.map-block', start: 'top 80%' }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 pb-24" ref={containerRef}>
      <PageHero
        title="Инвестиции"
        subtitle="Уникальный девелоперский проект в санаторно-курортной зоне Белокурихи. Станьте частью развития премиального Горнолыжного комплекса «Яковка»."
        badge="📈 Проект Yakovka Land"
        imageSrc="/optimized/Виды/Фасады/Фасады-03.webp"
        imageAlt="Yakovka Land"
        breadcrumbs={[{ label: 'Инвесторам' }]}
      />

      {/* Цифры и факты */}
      <div className="mt-[-2rem] relative z-20">
        <AnimatedCounter />
      </div>

      <div className="container mx-auto px-6 mt-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">Направления</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-stone-900 mb-6">Возможности для партнеров</h2>
          <p className="text-stone-500 text-lg">
            Мы постоянно развиваем инфраструктуру курорта и предлагаем несколько форматов инвестирования с гарантированной доходностью.
          </p>
        </div>

        <div className="invest-grid grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {blocks.map((block, idx) => (
            <div key={idx} className="invest-card bg-white p-10 rounded-[2.5rem] shadow-sm border border-stone-100 hover:shadow-premium transition-all duration-300 flex flex-col group">
              <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-primary/5 transition-transform">
                <block.icon className="text-primary w-8 h-8" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-stone-900 mb-4">{block.title}</h3>
              <p className="text-stone-500 font-light leading-relaxed mb-8 flex-grow">
                {block.desc}
              </p>
              <ul className="space-y-3 pt-6 border-t border-stone-100">
                {block.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-700 text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Визуальная карта развития */}
        <div className="map-block bg-stone-900 rounded-[3rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden mb-24">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row gap-12 relative z-10 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary font-bold text-sm mb-6">
                <Map size={18} /> Генеральный план
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Развитие территории</h2>
              <p className="text-stone-300 text-lg leading-relaxed font-light mb-8">
                Генеральный план включает строительство 15 новых премиальных эко-шале, спа-комплекса с панорамным бассейном и расширение горнолыжной инфраструктуры (новая канатная дорога и система искусственного оснежения).
              </p>
              <Button onClick={() => setIsCallbackModalOpen(true)} className="bg-primary hover:bg-white hover:text-stone-900 text-stone-900 font-bold px-8 py-6 rounded-xl text-lg shadow-xl transition-colors">
                Запросить план
              </Button>
            </div>
            
            <div className="lg:w-1/2 w-full h-[400px] relative rounded-3xl overflow-hidden border border-white/10 group">
              <Image 
                src="/optimized/Виды/Фасады/Фасады-01.webp" 
                alt="Генеральный план Яковка"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000 opacity-60 mix-blend-luminosity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-stone-900/80 backdrop-blur-md px-8 py-4 rounded-full border border-stone-700 flex items-center gap-3">
                  <TrendingUp className="text-primary" />
                  <span className="font-heading font-bold text-xl tracking-wider">МАСТЕР ПЛАН 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto bg-primary text-stone-900 rounded-[2.5rem] p-10 md:p-16 shadow-2xl shadow-primary/20 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Готовы стать частью проекта?</h2>
          <p className="text-stone-800/80 mb-10 text-lg font-medium">
            Свяжитесь с нами для получения подробной презентации проекта Yakovka Land, расчетов окупаемости и генерального плана развития территории.
          </p>
          <Button onClick={() => setIsCallbackModalOpen(true)} size="lg" className="bg-stone-900 text-white hover:bg-stone-800 px-10 py-7 rounded-2xl text-lg font-bold shadow-xl transition-transform hover:-translate-y-1">
            Связаться с нами <ArrowRight className="ml-2" />
          </Button>
        </div>

      </div>

      <CallbackModal isOpen={isCallbackModalOpen} onClose={() => setIsCallbackModalOpen(false)} />
    </div>
  );
}
