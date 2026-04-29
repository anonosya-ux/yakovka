'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Tag, Snowflake, ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Existing Sections to keep at the bottom
import ServicesSection from '@/components/ServicesSection';
import MapSection from '@/components/MapSection';
import CTABanner from '@/components/CTABanner';
import CallbackModal from '@/components/CallbackModal';

gsap.registerPlugin(ScrollTrigger);

const RoomSlider = ({ images, title }: { images: string[], title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full group/slider">
      <Image 
        src={images[currentIndex]} 
        alt={`${title} - Фото ${currentIndex + 1}`}
        fill
        className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
      />
      
      {images.length > 1 && (
        <>
          <button onClick={prev} aria-label="Предыдущее фото" className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/30 hover:bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all z-20 hover:scale-110 shadow-lg">
            <ChevronLeft size={28} className="text-stone-900" />
          </button>
          <button onClick={next} aria-label="Следующее фото" className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/30 hover:bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all z-20 hover:scale-110 shadow-lg">
            <ChevronRight size={28} className="text-stone-900" />
          </button>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20 pointer-events-none">
            {images.map((_, i) => (
              <div key={i} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-white scale-125 shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'bg-white/50'}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const offers = [
  { id: 1, title: 'Раннее бронирование', desc: 'Забронируйте отдых за 30 дней и получите скидку 15% на проживание.', bg: '/optimized/Виды/Фасады/Фасады-01.webp' },
  { id: 2, title: 'Семейный отдых', desc: 'Детская площадка, просторные шале и чистый горный воздух.', bg: '/optimized/Виды/Природа/Природа-01.webp' },
  { id: 3, title: 'Банный релакс', desc: 'При бронировании от 5 ночей — 2 часа русской бани в подарок.', bg: '/optimized/Виды/Бассейн/Бассейн-02.webp' },
];

export default function Home() {
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // prefers-reduced-motion check
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (!prefersReducedMotion) {
        // SVG Mountain Draw
        const path = document.querySelector('.mountain-path') as SVGPathElement;
        if (path) {
          const length = path.getTotalLength();
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
          gsap.to(path, { strokeDashoffset: 0, duration: 3, ease: 'power3.inOut', delay: 0.5 });
        }

        // Hero Content Fade In
        gsap.fromTo('.animate-fade-in-up', 
          { y: 30, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.8 }
        );

        // Hero Parallax
        gsap.to('.hero-video', {
          yPercent: 30,
          ease: 'none',
          scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          }
        });

        // About Parallax
        gsap.fromTo('.about-bg', 
          { yPercent: -15 },
          { yPercent: 15, ease: 'none', scrollTrigger: { trigger: '.about-section', scrub: true } }
        );

        // Glass Box Enter
        gsap.fromTo('.glass-box', 
          { y: 100, opacity: 0, rotateX: -10 },
          { y: 0, opacity: 1, rotateX: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '.about-section', start: 'top 70%' } }
        );

        // Offers Stagger
        gsap.fromTo('.offer-card',
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.15, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.offers-section', start: 'top 75%' } }
        );
      }
    }, mainRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>, target: HTMLElement | null) => {
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(target, {
      rotateY: x * 0.05,
      rotateX: -y * 0.05,
      transformPerspective: 1000,
      ease: 'power2.out',
      duration: 0.5
    });
  };

  const handleMouseLeave = (target: HTMLElement | null) => {
    if (!target) return;
    gsap.to(target, { rotateY: 0, rotateX: 0, ease: 'power3.out', duration: 0.7 });
  };

  return (
    <div ref={mainRef} className="font-sans overflow-x-hidden bg-background text-stone-900">
      
      {/* 1. HERO SECTION (Контуры горы Яковка) */}
      <section className="hero-section relative h-screen w-full flex items-center justify-center overflow-hidden bg-stone-950">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video autoPlay loop muted playsInline className="hero-video w-full h-full object-cover object-center scale-110 opacity-70">
            <source src="/videos/hero-yakovka.webm" type="video/webm" />
            <source src="/videos/hero-yakovka.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/40 to-transparent" />
        </div>

        {/* Mountain Contour SVG */}
        <svg viewBox="0 0 1000 300" className="absolute bottom-0 left-0 w-full h-auto z-10 pointer-events-none drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]" preserveAspectRatio="none">
          <path 
            className="mountain-path"
            d="M0,300 L0,200 L120,160 L240,210 L380,90 L520,150 L680,60 L850,130 L1000,80 L1000,300 Z" 
            fill="rgba(255,255,255,0.02)" 
            stroke="rgba(255,255,255,0.8)" 
            strokeWidth="2" 
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div className="relative z-20 flex flex-col items-center justify-center text-center px-6">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold tracking-widest uppercase mb-8 animate-fade-in-up">
            <Tag size={16} className="text-primary" /> Выгодные предложения на лето
          </div>
          <h1 className="font-heading text-6xl md:text-8xl lg:text-[120px] font-bold text-white tracking-tighter drop-shadow-2xl mb-4 leading-none">
            ЯКОВКА<span className="text-primary block text-4xl md:text-6xl mt-2 tracking-normal font-light">RESORT</span>
          </h1>
          <p className="text-lg md:text-2xl text-stone-200 font-light max-w-3xl mx-auto mb-12 drop-shadow-md">
            Загородный эко-курорт в Белокурихе. Идеальное место для восстановления сил, семейного отдыха и погружения в природу Алтая.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              onClick={() => {
                if (typeof window !== 'undefined' && window.HotelWidget && typeof window.HotelWidget.open === 'function') {
                  window.HotelWidget.open();
                } else {
                  window.open('https://bookonline24.ru/?hotelId=2774874f-1347-4c7d-a835-9791d5814751', '_blank');
                }
              }}
              className="group relative inline-flex items-center justify-center px-12 py-5 bg-primary text-white rounded-full font-bold text-lg md:text-xl transition-all duration-500 hover:bg-white hover:text-stone-900 hover:scale-105 hover:shadow-[0_20px_40px_rgba(255,255,255,0.2)]"
              style={{ willChange: 'transform' }}
            >
              Забронировать номер
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link 
              href="/summer" 
              className="group relative inline-flex items-center justify-center px-12 py-5 bg-white/10 backdrop-blur-xl border border-white/30 text-white rounded-full font-bold text-lg md:text-xl transition-all duration-500 hover:bg-white hover:text-stone-900 hover:scale-105"
            >
              Летний отдых
            </Link>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION (Прозрачный фон природы + Лого + Текст) */}
      <section className="about-section relative min-h-screen py-32 flex items-center justify-center overflow-hidden bg-stone-900">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image 
            src="/optimized/Виды/Природа/Природа-03.webp" 
            alt="Природа Алтая" 
            fill 
            className="about-bg object-cover scale-125 opacity-70" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/40" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="glass-box max-w-3xl mx-auto bg-stone-950/80 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 md:p-16 text-center shadow-[0_30px_60px_rgba(0,0,0,0.5)] will-change-transform">
            <div className="mb-10 inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/20 text-primary">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Эко-курорт у подножия легендарной горы
            </h2>
            <div className="space-y-6 text-lg text-stone-300 font-light leading-relaxed max-w-2xl mx-auto mb-10">
              <p>
                Отель расположен в курортной зоне города Белокуриха, в ущелье, 
                по которому протекает ручей с кристально чистой водой.
              </p>
              <p>
                Здесь, вдали от шума и суеты, вы найдете идеальные условия для восстановления 
                сил, горнолыжного спорта зимой и захватывающих эко-маршрутов летом.
              </p>
            </div>
            <Link 
              href="/about" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-stone-900 rounded-full font-bold text-lg transition-all hover:bg-primary hover:text-white"
            >
              Подробнее о курорте
            </Link>
          </div>
        </div>
      </section>

      {/* 3. OFFERS SECTION (Действующие Акции) */}
      <section className="offers-section py-32 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">Спецпредложения</span>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-stone-900">Действующие Акции</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {offers.map((offer) => (
              <div key={offer.id} className="offer-card group relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.05)] bg-white cursor-pointer will-change-transform">
                <Image src={offer.bg} alt={offer.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary">
                    <Tag size={20} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-2">{offer.title}</h3>
                  <p className="text-stone-300 text-sm font-light">{offer.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ROOMS SPLIT SECTION (2 Контейнера Гостиниц) */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-stone-900 mb-6">Варианты размещения</h2>
            <p className="text-stone-500 text-xl font-light max-w-2xl mx-auto">
              Выберите идеальное пространство: от уютных стандартов до просторных шале.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto" style={{ perspective: '1500px' }}>
            
            {/* Standard Container */}
            <Link 
              href="/rooms" 
              className="block relative rounded-[3rem] overflow-hidden h-[500px] md:h-[650px] shadow-[0_30px_60px_rgba(0,0,0,0.1)] group will-change-transform"
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
            >
              <RoomSlider 
                title="Стандартные номера" 
                images={[
                  '/optimized/Номера/Стандарт+/Стандарт+-02.webp',
                  '/optimized/Номера/Стандарт/Стандарт-03.webp',
                  '/optimized/Номера/Стандарт+/Стандарт+-01.webp',
                ]} 
              />
              <div className="absolute inset-0 bg-stone-900/30 group-hover:bg-stone-900/10 transition-colors duration-500 pointer-events-none" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white pointer-events-none z-10">
                <h3 className="font-heading text-4xl md:text-6xl font-bold drop-shadow-lg mb-4">НОМЕРА</h3>
                <span className="px-6 py-2 border border-white/50 rounded-full backdrop-blur-md text-sm uppercase tracking-widest group-hover:bg-white group-hover:text-stone-900 transition-colors">
                  от 5 800 ₽
                </span>
              </div>
            </Link>

            {/* Family Chalet Container */}
            <Link 
              href="/rooms" 
              className="block relative rounded-[3rem] overflow-hidden h-[500px] md:h-[650px] shadow-[0_30px_60px_rgba(0,0,0,0.1)] group will-change-transform"
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
            >
              <RoomSlider 
                title="Семейные шале" 
                images={[
                  '/optimized/Номера/Семейный+/Семейный+-01.webp',
                  '/optimized/Номера/Семейный++/Семейный++-02.webp',
                  '/optimized/Номера/Семейный/Семейный-03.webp',
                ]} 
              />
              <div className="absolute inset-0 bg-stone-900/30 group-hover:bg-stone-900/10 transition-colors duration-500 pointer-events-none" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white pointer-events-none z-10">
                <h3 className="font-heading text-4xl md:text-6xl font-bold drop-shadow-lg mb-4">ШАЛЕ</h3>
                <span className="px-6 py-2 border border-white/50 rounded-full backdrop-blur-md text-sm uppercase tracking-widest group-hover:bg-primary group-hover:border-primary transition-colors">
                  от 9 500 ₽
                </span>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* 5. ADDITIONAL BLOCKS (Footer-adjacent) */}
      <ServicesSection />
      <MapSection />
      <CTABanner 
        variant="nature" 
        title="Остались вопросы по бронированию?"
        subtitle="Оставьте свой номер телефона, и наш администратор свяжется с вами в течение 10 минут, чтобы подобрать идеальный номер для вашего отдыха."
        buttonText="Заказать звонок"
        onButtonClick={() => setIsCallbackModalOpen(true)}
      />
      <CallbackModal isOpen={isCallbackModalOpen} onClose={() => setIsCallbackModalOpen(false)} />
    </div>
  );
}
