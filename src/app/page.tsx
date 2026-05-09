'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import dynamic from 'next/dynamic';

// Lazy-load below-fold sections — reduces initial JS bundle significantly
const ServicesSection = dynamic(() => import('@/components/ServicesSection'), {
  loading: () => <section className="py-32 md:py-48 bg-white" />,
});
const MapSection = dynamic(() => import('@/components/MapSection'), {
  loading: () => <section className="py-24 bg-[#fafafa]" />,
});
const CTABanner = dynamic(() => import('@/components/CTABanner'));
const CallbackModal = dynamic(() => import('@/components/CallbackModal'), {
  ssr: false,
});

// GSAP loaded lazily to avoid blocking main thread
let gsapModule: typeof import('gsap') | null = null;
const getGsap = async () => {
  if (!gsapModule) {
    const [g, st] = await Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
    ]);
    gsapModule = g;
    g.default.registerPlugin(st.ScrollTrigger);
  }
  return gsapModule.default;
};

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
  { id: 2, title: 'Семейный отдых', desc: 'Детская площадка, просторные шале и чистый горный воздух.', bg: '/optimized/Мероприятия/Свадьбы/Свадьбы-06.webp' },
  { id: 3, title: 'Банный релакс', desc: 'При бронировании от 5 ночей — 2 часа русской бани в подарок.', bg: '/optimized/Виды/Женщины/СПА-optimized.jpg' },
];

export default function Home() {
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;

    // Defer GSAP initialization to avoid blocking main thread (reduces TBT)
    const initAnimations = async () => {
      const gsap = await getGsap();
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      ctx = gsap.context(() => {
        if (!prefersReducedMotion) {
          // Hero Content Fade In
          gsap.fromTo('.animate-fade-in-up', 
            { y: 30, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.8 }
          );

          // Hero Parallax (Desktop Only for better performance)
          let mm = gsap.matchMedia();
          mm.add("(min-width: 768px)", () => {
            gsap.to('.hero-video', {
              yPercent: 20,
              ease: 'none',
              scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top',
                end: 'bottom top',
                scrub: 1, // Smooth interpolation
              }
            });
          });

          // About Parallax
          gsap.fromTo('.about-bg', 
            { yPercent: -10 },
            { yPercent: 10, ease: 'none', scrollTrigger: { trigger: '.about-section', scrub: 1 } }
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
    };

    // Use requestIdleCallback to defer to when browser is idle
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => initAnimations());
    } else {
      setTimeout(() => initAnimations(), 200);
    }

    return () => ctx?.revert();
  }, []);



  return (
    <div ref={mainRef} className="font-sans overflow-x-hidden bg-background text-stone-900">
      
      {/* 1. HERO SECTION (Контуры горы Яковка) */}
      <section className="hero-section relative h-screen w-full flex items-center justify-center overflow-hidden bg-stone-950">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video autoPlay loop muted playsInline poster="/videos/hero-poster.webp" preload="metadata" className="hero-video w-full h-full object-cover object-center scale-[1.15] opacity-80 will-change-transform">
            <source src="/videos/hero-yakovka.webm" type="video/webm" />
            <source src="/videos/hero-yakovka.mp4" type="video/mp4" />
          </video>
          {/* Subtle Radial Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-stone-950/20 to-stone-950/80 pointer-events-none" />
        </div>

        {/* Smooth Fade Transition */}
        <div className="absolute bottom-0 left-0 w-full h-32 md:h-64 bg-gradient-to-t from-stone-900 to-transparent z-10 pointer-events-none translate-y-[1px]" />

        <div className="relative z-20 flex flex-col items-center justify-center md:justify-center text-center px-6 pt-16 md:pt-0">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold tracking-widest uppercase mb-8 animate-fade-in-up hover:bg-white/20 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <span className="relative flex h-3 w-3 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            Выгодные предложения на лето
          </div>
          <h1 className="font-heading text-6xl md:text-[100px] lg:text-[130px] font-bold text-white tracking-tighter drop-shadow-2xl mb-2 leading-none">
            ЯКОВКА
            <span className="text-white/90 block text-2xl md:text-5xl mt-5 tracking-[0.35em] font-light uppercase">RESORT</span>
          </h1>
          <div className="w-16 md:w-24 h-px bg-white/30 mx-auto my-8 md:my-10"></div>
          <p className="text-lg md:text-2xl text-stone-200 font-light max-w-3xl mx-auto mb-14 drop-shadow-md tracking-wide">
            Загородный эко-курорт в Белокурихе. <br className="hidden md:block"/> Идеальное место для восстановления сил и погружения в природу Алтая.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <Link 
              href="/booking"
              className="group relative inline-flex items-center justify-center px-12 py-5 bg-white/10 backdrop-blur-xl border border-white/30 text-white rounded-full font-bold text-lg transition-all duration-500 hover:bg-white hover:text-stone-900 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] overflow-hidden"
              style={{ willChange: 'transform' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
              Забронировать номер
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/summer" 
              className="group relative inline-flex items-center justify-center px-12 py-5 bg-transparent border border-white/20 text-white/90 rounded-full font-medium text-lg transition-all duration-500 hover:bg-white/5 hover:text-white hover:border-white/40"
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
              <div key={offer.id} className="offer-card group relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-premium border border-stone-100 bg-white cursor-pointer will-change-transform">
                <Image src={offer.bg} alt={offer.title} fill className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/30 to-transparent" />
                
                <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg">
                    <Tag size={20} />
                  </div>
                  <h3 className="font-heading text-3xl font-bold mb-3">{offer.title}</h3>
                  <p className="text-stone-200 text-base font-light leading-relaxed">{offer.desc}</p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            
            {/* Standard Container */}
            <Link 
              href="/rooms" 
              className="block relative rounded-[3rem] overflow-hidden h-[500px] md:h-[650px] shadow-[0_30px_60px_rgba(0,0,0,0.1)] group"
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
                  5 800 ₽
                </span>
              </div>
            </Link>

            {/* Family Chalet Container */}
            <Link 
              href="/rooms" 
              className="block relative rounded-[3rem] overflow-hidden h-[500px] md:h-[650px] shadow-[0_30px_60px_rgba(0,0,0,0.1)] group"
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
                  9 500 ₽
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
