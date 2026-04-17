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
import AnimatedCounter from '@/components/AnimatedCounter';
import FAQAccordion from '@/components/FAQAccordion';
import CTABanner from '@/components/CTABanner';
import ReviewCard from '@/components/ReviewCard';
import { MapPin, Phone, Check, ArrowRight, Star, Snowflake, Sun } from 'lucide-react';

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

const homeReviews = [
  { name: 'Анна П.', date: 'Март 2026', rating: 5, text: 'Прекрасный отдых с детьми! Трассы идеально подходят для начинающих. Обязательно вернёмся!' },
  { name: 'Михаил К.', date: 'Февраль 2026', rating: 5, text: 'Баня на дровах — сказка после дня на склоне. Персонал приветливый. 10 из 10.' },
  { name: 'Елена С.', date: 'Январь 2026', rating: 5, text: 'Номер «Семейный++» огромный — разместились всей семьёй. Ресторан порадовал алтайской кухней.' },
];

const homeFAQ = [
  { question: 'Как забронировать номер?', answer: 'Забронировать можно онлайн через наш сайт, по телефону +7 (960) 955-21-00 или в WhatsApp. Принимаем карты, переводы и наличные.' },
  { question: 'Во сколько заезд и выезд?', answer: 'Заезд с 14:00, выезд до 12:00. Ранний заезд/поздний выезд — по договорённости.' },
  { question: 'Подходит ли отель для детей?', answer: 'Да! Детская площадка, семейные номера, детское меню. Дети до 5 лет бесплатно, от 5 до 12 — скидка 50%.' },
  { question: 'Есть ли горнолыжные трассы?', answer: '2 трассы у подножия горы Яковка: для начинающих (300 м) и среднего уровня (800 м). Прокат снаряжения на месте. Сезон: декабрь–март.' },
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

  const containerGlobalRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const widgetProxyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background parallax scaling
      gsap.to('.hero-bg', {
        scale: 1,
        opacity: 0.6,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Text elements staggering up based on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        }
      });

      tl.to('.hero-badge, .hero-title-container, .hero-subtitle, .hero-btn', {
        y: -150,
        opacity: 0,
        stagger: 0.1,
        ease: 'power1.inOut'
      }, 0);

      // Widget floating disappearance
      gsap.to(widgetProxyRef.current, {
        y: 100,
        opacity: 0,
        rotationX: 15,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=500',
          scrub: true,
        }
      });

      // Room cards sticky effect
      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.set(cards, { position: 'sticky', top: '15vh' });
        
        gsap.utils.toArray(cards).forEach((card: any, i) => {
          gsap.fromTo(card, 
            { scale: 1, filter: 'brightness(1)' },
            { 
              scale: 0.9, 
              filter: 'brightness(0.5)',
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 15vh",
                end: "bottom 5vh",
                scrub: true,
              }
            }
          );
        });
      }
    }, containerGlobalRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerGlobalRef} className="flex flex-col font-sans overflow-x-hidden bg-background">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[300vh] w-full">
        {/* Sticky Container */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center [perspective:1000px]">
          
          <div className="absolute inset-0 z-0 overflow-hidden hero-bg bg-stone-900 origin-center scale-110">
            <Image
              src="/images/gallery/_6-12.jpg"
              alt="Загородный отель Яковка — горнолыжный курорт в Белокурихе, Алтай"
              fill
              className="w-full h-full object-cover object-center opacity-80 mix-blend-overlay"
              priority
            />
            <div className="hero-overlay absolute inset-0 bg-stone-950/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/40 to-stone-900/20" />
          </div>

          <div className="container relative z-10 mx-auto px-4 text-center text-white pb-12 pt-16 flex flex-col items-center justify-center h-full">
            <div ref={heroTextRef} className="relative z-20 flex flex-col items-center">
              <span className="hero-badge inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-sm font-medium mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Белокуриха, у подножия горы
              </span>
              
              <div className="hero-title-container overflow-hidden">
                <h1 className="font-heading text-6xl md:text-[120px] leading-[0.9] font-bold tracking-tight mb-2 drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
                  ОТДЫХ<br/><span className="text-primary italic">В ГОРАХ</span>
                </h1>
              </div>
              
              <p className="hero-subtitle text-xl md:text-3xl text-white/90 max-w-3xl mx-auto font-light drop-shadow mb-12 mt-6">
                Загородный отель «Яковка» — это величественная природа Алтая и первоклассный уют.
              </p>

              <Button onClick={openWidget} size="lg" className="hero-btn bg-white text-stone-900 text-lg rounded-full px-10 py-8 shadow-[0_20px_40px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all font-bold">
                Найти шале
              </Button>
            </div>
            
            {/* Booking Widget Container (Desktop) - 3D Floating */}
            <div className="hidden md:block w-full max-w-5xl mx-auto absolute left-0 right-0 bottom-12 pointer-events-none" style={{ perspective: "1200px" }}>
              <div ref={widgetProxyRef} className="pointer-events-auto w-full max-w-5xl mx-auto px-4">
                <KonturWidgetSearch containerId="BookingVertical" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* spacer for widget overlap */}
      <div className="h-16 md:h-32 bg-transparent" />

      {/* Animated Counter Section */}
      <AnimatedCounter />

      {/* Season Toggle Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">Круглый год</span>
            <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-stone-900 mb-4">
              Отдых в любой сезон
            </h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto font-light">
              Белокуриха прекрасна зимой и летом — выбирайте свой идеальный отдых
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Winter Card */}
            <Link href="/season" className="group relative overflow-hidden rounded-3xl aspect-[4/5] md:aspect-[3/4]">
              <Image
                src="/images/gallery/_6-12.jpg"
                alt="Горнолыжный сезон в Белокурихе"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm text-white mb-4">
                  <Snowflake size={14} /> Декабрь — Март
                </div>
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-2">Зима</h3>
                <p className="text-white/70 text-base md:text-lg font-light mb-4">Горные лыжи, сноуборд, тюбинг. 2 трассы с прокатом и инструкторами.</p>
                <span className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                  Подробнее <ArrowRight size={18} />
                </span>
              </div>
            </Link>

            {/* Summer Card */}
            <Link href="/summer" className="group relative overflow-hidden rounded-3xl aspect-[4/5] md:aspect-[3/4]">
              <Image
                src="/images/gallery/image-28-09-23-05-05.jpeg"
                alt="Летний отдых на Алтае"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm text-white mb-4">
                  <Sun size={14} /> Июнь — Сентябрь
                </div>
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-2">Лето</h3>
                <p className="text-white/70 text-base md:text-lg font-light mb-4">Горные походы, экскурсии, рыбалка, велопрогулки на свежем воздухе.</p>
                <span className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                  Подробнее <ArrowRight size={18} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Rooms Sticky Section */}
      <section id="rooms" className="py-32 relative bg-stone-900 border-t border-stone-800">
        <div className="container mx-auto px-6">
          <div className="mb-32 md:flex justify-between items-end">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Отдых на Алтае</span>
              <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-sm">Номера и Шале</h2>
              <p className="text-xl md:text-2xl text-stone-400 font-light leading-relaxed">
                Почувствуйте настоящий комфорт горных резиденций. Просторные террасы и вид на хвойный лес.
              </p>
            </div>
            <div className="mt-8 md:mt-0">
               <Button onClick={openWidget} variant="outline" className="rounded-full border-stone-700 text-stone-300 hover:text-white hover:bg-white/10 px-8 py-6 text-lg">
                 Смотреть все
               </Button>
            </div>
          </div>

          <div ref={cardsRef} className="relative space-y-[40vh] pb-[20vh]">
            {rooms.map((room, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col md:flex-row bg-stone-50 rounded-[3rem] overflow-hidden"
                style={{
                  boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.4)",
                  transformStyle: "preserve-3d"
                }}
              >
                <div className="relative h-80 md:h-[600px] w-full md:w-1/2 overflow-hidden bg-stone-200">
                  <Image 
                    src={room.img} 
                    alt={room.title}
                    fill
                    className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                  />
                  {room.features.includes('Завтрак включен') && (
                    <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-md text-stone-800 text-sm font-bold px-5 py-3 rounded-full flex items-center gap-2">
                       ☕ Завтрак включен
                    </div>
                  )}
                </div>
                
                <div className="p-10 md:p-16 flex flex-col justify-center w-full md:w-1/2 relative bg-stone-50 z-10 transition-transform">
                  <h3 className="font-heading text-4xl md:text-5xl font-bold text-stone-800 mb-6 tracking-tight group-hover:text-primary transition-colors">{room.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm font-semibold border-b border-stone-200 pb-8 mb-8">
                    <span className="bg-white text-stone-500 px-4 py-2 rounded-xl shadow-sm border border-stone-100">{room.size}</span>
                    <span className="bg-primary/5 text-primary px-4 py-2 rounded-xl shadow-sm border border-primary/10">{room.guests}</span>
                  </div>
                  <ul className="space-y-4 mb-12 flex-grow">
                    {room.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-stone-600 text-lg font-medium">
                        <Check size={20} className="text-primary mr-4 shrink-0" strokeWidth={3} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-end justify-between mt-auto">
                    <div>
                      <span className="block text-sm uppercase tracking-widest text-stone-400 font-bold mb-2">За сутки от</span>
                      <span className="font-heading text-4xl font-bold text-stone-900">{room.price}</span>
                    </div>
                    <Button onClick={openWidget} className="rounded-2xl bg-stone-900 text-white hover:bg-primary transition-colors px-8 py-6 text-lg font-bold shadow-xl hover:-translate-y-2">
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

      {/* Reviews Section */}
      <section className="py-24 md:py-32 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">Отзывы гостей</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-stone-900 mb-4">
              Нам доверяют
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[1,2,3,4,5].map(i => <Star key={i} size={20} className="text-amber-400 fill-amber-400" />)}
              <span className="text-stone-600 font-semibold ml-2">4.5 на Яндекс.Картах</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {homeReviews.map((r, idx) => (
              <ReviewCard key={idx} {...r} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/reviews" className="inline-flex items-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-full font-bold hover:bg-primary transition-colors shadow-premium group">
              Все отзывы <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section (for GEO/AI optimization) */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">Вопросы</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-stone-900 mb-4">
              Часто задаваемые вопросы
            </h2>
          </div>

          <FAQAccordion items={homeFAQ} />

          <div className="text-center mt-10">
            <Link href="/faq" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
              Ещё вопросы и ответы <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Booking FAQ Section */}
      <BookingInfoSection />

      {/* Map */}
      <MapSection />

      {/* CTA Banner */}
      <CTABanner variant="nature" />

      <CallbackModal isOpen={isCallbackModalOpen} onClose={() => setIsCallbackModalOpen(false)} />
    </div>
  );
}
