'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Home, Utensils, Mountain, ShieldCheck, Coffee, Dog } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PhotoGallery from './ui/PhotoGallery';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for bento box images
      gsap.utils.toArray('.bento-img').forEach((img: any) => {
        gsap.to(img, {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: img.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        });
      });

      // Stagger entrance of the text and boxes
      gsap.fromTo('.bento-item', 
        { y: 100, opacity: 0 },
        { 
          y: 0, opacity: 1, 
          duration: 1, 
          stagger: 0.1, 
          ease: "expo.out",
          scrollTrigger: { 
            trigger: ".bento-grid", 
            start: "top 80%" 
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const galleryImages = [
    '/optimized/Виды/Фасады/Фасады-01.webp',
    '/optimized/Виды/Природа/Природа-01.webp',
    '/optimized/Виды/Кухня/Кухня-01.webp',
    '/optimized/Номера/Семейный+/Семейный+-01.webp',
    '/optimized/Мероприятия/Свадьбы/Свадьбы-01.webp',
    '/optimized/Виды/Бассейн/Бассейн-01.webp',
  ];

  return (
    <section id="about" className="py-32 md:py-48 relative bg-white overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6">
        
        <div className="max-w-5xl mb-24">
          <span className="text-secondary font-bold tracking-widest uppercase mb-4 block">О горнолыжном курорте «Яковка»</span>
          <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-stone-900 mb-8 leading-[1.1]">
            Место, где отдыхает душа, <br className="hidden md:block"/><span className="text-stone-400 italic">а горы возвращают силы</span>
          </h2>
          <p className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed max-w-3xl">
            Вдали от городского шума, у самого подножия покрытой хвоей горы Яковка, находится наш курорт. Загородный отель, где слышен звук ручья, где воздух по-настоящему чист, а снег всегда пушист.
          </p>
        </div>

        {/* BENTO BOX GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[350px] bento-grid mb-32">
          
          {/* Winter Box - spans 2 cols, 2 rows */}
          <Link href="/winter" className="bento-item md:col-span-2 md:row-span-2 relative rounded-[3rem] overflow-hidden group cursor-pointer block">
            <div className="absolute inset-0 z-0">
              <Image 
                src="/optimized/Мероприятия/Горные лыжи/Горные лыжи-04.webp" 
                alt="Зимний сезон" 
                fill 
                className="bento-img object-cover scale-110 object-center" 
              />
              <div className="absolute inset-0 bg-stone-900/40 group-hover:bg-stone-900/50 transition-colors duration-500" />
            </div>
            <div className="relative z-10 w-full h-full flex flex-col justify-end p-10 md:p-14 text-white">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 backdrop-blur-md mb-6">
                <Mountain size={28} />
              </span>
              <h3 className="font-heading text-3xl md:text-5xl font-bold mb-4">Зимний сезон</h3>
              <p className="text-lg text-white/80 font-light max-w-md mb-4">Полный комплекс услуг для активного горнолыжного отдыха. Широкие склоны северной экспозиции держат снег дольше всех в Белокурихе.</p>
              <span className="text-sm font-bold tracking-widest uppercase flex items-center gap-2 group-hover:text-primary transition-colors">Подробнее <span className="text-xl">→</span></span>
            </div>
          </Link>

          {/* Food Box */}
          <Link href="/infrastructure/restaurant" className="bento-item bg-stone-100 rounded-[3rem] overflow-hidden p-10 flex flex-col justify-between group hover:bg-stone-200 transition-colors cursor-pointer">
            <Utensils size={32} className="text-secondary" />
            <div>
              <h3 className="font-heading text-2xl font-bold text-stone-900 mb-2">Любимые блюда</h3>
              <p className="text-stone-600 font-light mb-4">Домашняя кухня с заказными обедами и исполнением ваших кулинарных желаний.</p>
              <span className="text-xs font-bold tracking-widest uppercase text-stone-400 group-hover:text-stone-900 transition-colors">Меню ресторана →</span>
            </div>
          </Link>

          {/* Dogs Box */}
          <div className="bento-item relative rounded-[3rem] overflow-hidden group">
            <div className="absolute inset-0 z-0">
               <Image 
                src="/optimized/Виды/Природа/Природа-01.webp" 
                alt="Можно с питомцами" 
                fill 
                className="bento-img object-cover scale-125 object-center" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent" />
            </div>
            <div className="relative z-10 w-full h-full flex flex-col justify-end p-8 text-white">
              <Dog size={28} className="mb-4 text-white/80" />
              <h3 className="font-heading text-2xl font-bold mb-2">Pets Friendly</h3>
              <p className="text-sm text-white/80 font-light">Вместе с пушистым другом. До 8кг - 500₽/сутки</p>
            </div>
          </div>

          {/* Summer Box - spans 2 cols */}
          <Link href="/summer" className="bento-item md:col-span-2 relative rounded-[3rem] overflow-hidden p-10 flex items-center justify-between group bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors cursor-pointer">
            <div className="max-w-sm">
              <h3 className="font-heading text-3xl font-bold text-stone-900 mb-4">Летний период</h3>
              <p className="text-stone-700 font-light text-lg mb-6">Открытый подогреваемый бассейн, батут для спортсменов, спортивная площадка и увлекательные экскурсии по Алтаю.</p>
              <span className="inline-flex items-center justify-center px-6 py-2 border border-stone-900 rounded-full font-bold text-sm text-stone-900 group-hover:bg-stone-900 group-hover:text-white transition-colors">Посмотреть активности</span>
            </div>
            <div className="hidden lg:flex w-40 h-40 relative rounded-full overflow-hidden flex-shrink-0 shadow-xl border-4 border-white group-hover:scale-105 transition-transform duration-500">
               <Image src="/optimized/Виды/Природа/Природа-02.webp" alt="Лето" fill className="object-cover" />
            </div>
          </Link>

          {/* Security & Relax Box */}
          <div className="bento-item bg-stone-900 rounded-[3rem] overflow-hidden p-10 flex flex-col justify-between text-white">
            <ShieldCheck size={32} className="text-primary" />
            <div>
              <h3 className="font-heading text-2xl font-bold mb-2">Безопасность</h3>
              <p className="text-stone-400 font-light">Собственная территория под наблюдением. Охраняемая парковка для вашего «железного коня».</p>
            </div>
          </div>

        </div>

        {/* Gallery huge reveal */}
        <div className="mt-32 pt-24 border-t border-stone-100">
          <div className="text-center mb-20 bento-item">
            <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-stone-900 mb-6 font-primary">Архив воспоминаний</h2>
            <p className="text-xl text-stone-500 font-light max-w-2xl mx-auto">Жизнь курорта в живых кадрах наших гостей</p>
          </div>
          <PhotoGallery images={galleryImages} columns={3} />
        </div>

      </div>
    </section>
  );
}
