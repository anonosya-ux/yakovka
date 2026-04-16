'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import TestimonialsSection from '@/components/TestimonialsSection';
import { KonturWidgetSearch } from '@/components/KonturWidget';
import ServicesSection from '@/components/ServicesSection';
import EventsSection from '@/components/EventsSection';
import BookingInfoSection from '@/components/BookingInfoSection';
import MapSection from '@/components/MapSection';
import CallbackModal from '@/components/CallbackModal';
import { Menu, MapPin, Phone, Mail, ChevronRight, Check } from 'lucide-react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const rooms = [
  {
    title: 'Стандарт',
    size: 'от 12 м²',
    guests: 'до 2 гостей',
    price: 'от 3000 ₽',
    img: '/images/gallery/image-14-03-24-11-18.jpeg',
    features: ['Двуспальная кровать', 'Wi-Fi', 'Телевизор', 'Душ'],
  },
  {
    title: 'Стандарт +',
    size: 'от 16 м²',
    guests: 'до 3 гостей',
    price: 'от 4000 ₽',
    img: '/images/gallery/image-28-09-23-05-16-4.jpeg',
    features: ['Двуспальная кровать', 'Диван', 'Телевизор', 'Душ'],
  },
  {
    title: 'Семейный',
    size: 'от 20 м²',
    guests: 'до 4 гостей',
    price: 'от 5500 ₽',
    img: '/images/gallery/image-28-09-23-05-05.jpeg',
    features: ['Двуспальная кровать', 'Раскладной диван', 'Холодильник', 'Завтрак включен'],
  },
  {
    title: 'Семейный ++',
    size: 'от 30 м²',
    guests: 'до 6 гостей',
    price: 'от 7500 ₽',
    img: '/images/gallery/FullSizeRender (10).jpeg',
    features: ['2 Кондиционера', '2 Телевизора', 'Теплые полы', 'Завтрак включен'],
  },
];

export default function Home() {
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);

  const openWidget = () => {
    if (typeof window !== 'undefined' && (window as any).HotelWidget) {
      (window as any).HotelWidget.open();
    } else {
      window.open('https://bookonline24.ru/widget.js?hotelId=2774874f-1347-4c7d-a835-9791d5814751', '_blank');
    }
  };

  const heroRef = useRef<HTMLElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const widgetProxyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background parallax
      gsap.to('.hero-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Hero content floating
      gsap.fromTo(
        heroTextRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: 'power4.out', delay: 0.2 }
      );

      // Widget floating
      gsap.fromTo(
        widgetProxyRef.current,
        { y: 100, opacity: 0, rotationX: 15 },
        { y: 48, opacity: 1, rotationX: 0, duration: 1.2, ease: 'back.out(1.2)', delay: 0.6 }
      );

      // Room cards staggered entrance
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { y: 80, opacity: 0, rotationY: 10, rotationX: 10 },
          {
            y: 0,
            opacity: 1,
            rotationY: 0,
            rotationX: 0,
            duration: 1,
            stagger: 0.15,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col font-sans overflow-x-hidden bg-background">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[85vh] min-h-[650px] w-full flex items-center justify-center [perspective:1000px]">
        <div className="absolute inset-0 z-0 overflow-hidden hero-bg bg-stone-900">
          <Image
            src="/images/gallery/_6-12.jpg"
            alt="Загородный отель Яковка"
            fill
            className="w-full h-[120%] object-cover object-center absolute -top-[10%] opacity-80 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-stone-900/20" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center text-white pb-12 pt-16">
          <div ref={heroTextRef}>
            <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-sm font-medium mb-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Белокуриха, у подножия горы
            </span>
            <h1 className="font-heading text-5xl md:text-[80px] leading-[1.1] font-bold tracking-tight mb-6 drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
              Отдых в горах Алтая
            </h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto font-light drop-shadow mb-12">
              Загородный отель «Яковка» — это семейный уют, живописные виды и по-настоящему чистый воздух.
            </p>

            <Button onClick={openWidget} size="lg" className="md:hidden bg-primary/90 backdrop-blur-md text-white text-lg rounded-full px-8 py-7 shadow-[0_20px_40px_rgba(var(--primary),0.4)] mb-8 border border-white/20 active:scale-95 transition-all">
              Найти номер
            </Button>
          </div>
          
          {/* Booking Widget Container (Desktop) - 3D Floating */}
          <div className="hidden md:block w-full max-w-5xl mx-auto absolute left-0 right-0 bottom-0 pointer-events-none" style={{ perspective: "1200px" }}>
            <div ref={widgetProxyRef} className="pointer-events-auto w-full max-w-5xl mx-auto px-4">
              <KonturWidgetSearch containerId="BookingVertical" />
            </div>
          </div>
        </div>
      </section>

      {/* spacer for widget overlap */}
      <div className="h-16 md:h-32 bg-transparent" />

      {/* Rooms Section */}
      <section id="rooms" className="py-24 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-stone-900 mb-6 drop-shadow-sm">Номера и Шале</h2>
            <p className="text-xl text-stone-500 max-w-3xl mx-auto font-light leading-relaxed">Выберите комфорт по душе — от уютных стандартов до больших семейных шале с собственной террасой.</p>
          </div>

          <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 [perspective:1000px]">
            {rooms.map((room, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col bg-white rounded-[2rem] overflow-hidden transition-all duration-700 cursor-pointer will-change-transform"
                style={{
                  boxShadow: "0 15px 40px -10px rgba(41, 37, 36, 0.08), 0 1px 3px rgba(41, 37, 36, 0.05)",
                  transformStyle: "preserve-3d"
                }}
              >
                <div className="relative h-64 w-full overflow-hidden">
                  {/* Subtle Image Blur/Zoom combo */}
                  <Image 
                    src={room.img} 
                    alt={room.title}
                    fill
                    className="object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {room.features.includes('Завтрак включен') && (
                    <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md text-stone-800 text-xs font-bold px-4 py-2 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.15)] flex items-center gap-1.5 transform group-hover:translate-z-10 transition-transform">
                      <span className="text-amber-600">☕</span> Завтрак включен
                    </div>
                  )}
                </div>
                
                <div className="p-8 flex flex-col flex-grow relative bg-white z-10 transition-transform">
                  <h3 className="font-heading text-2xl font-bold text-stone-800 mb-4 tracking-tight group-hover:text-primary transition-colors">{room.title}</h3>
                  <div className="flex items-center gap-3 text-sm font-semibold border-b border-stone-100 pb-5 mb-5">
                    <span className="bg-stone-50 text-stone-500 px-3 py-1.5 rounded-lg border border-stone-200/60">{room.size}</span>
                    <span className="bg-primary/5 text-primary px-3 py-1.5 rounded-lg border border-primary/20">{room.guests}</span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {room.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-stone-600 text-[15px] font-medium">
                        <Check size={18} className="text-primary mr-3 shrink-0" strokeWidth={3} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-end justify-between mt-auto">
                    <div>
                      <span className="block text-[11px] uppercase tracking-widest text-stone-400 font-bold mb-1">За сутки от</span>
                      <span className="font-heading text-2xl font-bold text-stone-900">{room.price}</span>
                    </div>
                    <Button onClick={openWidget} variant="outline" className="rounded-full hover:bg-primary hover:border-primary border-stone-200 text-stone-700 hover:text-white transition-all shadow-sm group-hover:shadow-[0_8px_20px_rgba(var(--primary),0.3)] hover:-translate-y-1">
                       Бронь
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Events Section */}
      <EventsSection onOpenCallback={() => setIsCallbackModalOpen(true)} />

      {/* Booking FAQ Section */}
      <BookingInfoSection />

      <div className="container mx-auto px-6 py-20 text-center bg-stone-50 rounded-3xl mb-16 shadow-inner border border-stone-100">
        <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-stone-900 mb-6">Гора «Яковка» пользуется большой популярностью</h2>
        <p className="text-stone-600 max-w-3xl mx-auto mb-8 font-light leading-relaxed">
          Большинство из них возвращается к нам снова. Реальные отзывы о нашем загородном отеле «Яковка» Вы можете прочитать в сервисах Яндекс.Карты или Гугл.Карты. Будем рады, если и Вы оставите о нас пару приятных слов!
        </p>
        <a href="https://yandex.ru/maps/org/yakovka/1062999531/" target="_blank" rel="noopener noreferrer" className="inline-flex py-4 px-8 bg-black text-white font-bold rounded-2xl hover:scale-105 transition-transform shadow-lg">
          Яковка на Яндекс Картах
        </a>
      </div>

      <MapSection />

      <CallbackModal isOpen={isCallbackModalOpen} onClose={() => setIsCallbackModalOpen(false)} />
    </div>
  );
}
