'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, CreditCard, CalendarCheck, Users, Maximize, Check, ChevronLeft, ChevronRight, Phone, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { KonturWidgetSearch, KonturWidgetRoomsList, KonturWidgetCalendarHorizontal } from '@/components/KonturWidget';
import gsap from 'gsap';

/* ── Room data (mirrors /rooms) ── */
const rooms = [
  {
    slug: 'standart',
    title: 'Категория Стандарт',
    konturName: 'Стандарт 2-местный',
    size: '12 м²',
    guestsText: 'до 2 гостей',
    priceText: '5 800 ₽',
    images: [
      '/optimized/Номера/Стандарт/Стандарт-01.webp',
      '/optimized/Номера/Стандарт/Стандарт-02.webp',
      '/optimized/Номера/Стандарт/Стандарт-03.webp',
    ],
    description: 'Уютный номер с видом на горы и лес. 2 отдельные кровати, санузел, телевизор со спутниковыми каналами.',
    features: ['Двуспальная кровать', 'Wi-Fi', 'Телевизор', 'Душ'],
  },
  {
    slug: 'standart-plus',
    title: 'Категория Стандарт Улучшенный',
    konturName: 'Стандарт +',
    size: '12 м²',
    guestsText: 'до 3 гостей',
    priceText: '6 800 ₽',
    images: [
      '/optimized/Номера/Стандарт+/Стандарт+-01.webp',
      '/optimized/Номера/Стандарт+/Стандарт+-02.webp',
      '/optimized/Номера/Стандарт+/Стандарт+-03.webp',
    ],
    description: 'Просторный номер с дополнительным местом (кресло-кровать), отлично подходит для небольшой семьи.',
    features: ['Двуспальная кровать', 'Кресло-кровать', 'Wi-Fi', 'Телевизор'],
  },
  {
    slug: 'family',
    title: 'Категория Семейный',
    konturName: 'Семейный',
    size: '18 м²',
    guestsText: 'до 2 гостей',
    priceText: '5 800 ₽',
    images: [
      '/optimized/Номера/Семейный/Семейный-01.webp',
      '/optimized/Номера/Семейный/Семейный-02.webp',
      '/optimized/Номера/Семейный/Семейный-03.webp',
    ],
    description: 'Увеличенный номер для комфортного семейного отдыха с панорамным видом на горы.',
    features: ['Двуспальная кровать', 'Кресло-кровать', 'Холодильник', 'Завтрак включен'],
  },
  {
    slug: 'family-plus',
    title: 'Категория Семейный Улучшенный',
    konturName: 'Семейный +',
    size: '25 м²',
    guestsText: 'до 5 гостей',
    priceText: '9 500 ₽',
    images: [
      '/optimized/Номера/Семейный+/Семейный+-01.webp',
      '/optimized/Номера/Семейный+/Семейный+-02.webp',
      '/optimized/Номера/Семейный+/Семейный+-03.webp',
    ],
    description: 'Семейный номер улучшенной планировки с увеличенным пространством и зоной отдыха.',
    features: ['Двуспальная кровать', 'Кресло-кровать', 'Телевизор', 'Зона отдыха'],
  },
  {
    slug: 'cottage',
    title: 'Коттедж',
    konturName: 'Коттедж',
    size: '60 м²',
    guestsText: 'до 8 гостей',
    priceText: '12 000 ₽',
    images: [
      '/optimized/Номера/Семейный++/Семейный++-01.webp',
      '/optimized/Номера/Семейный++/Семейный++-02.webp',
      '/optimized/Номера/Семейный++/Семейный++-03.webp',
    ],
    description: 'Отдельно стоящий двухэтажный коттедж для большой компании с собственной мангальной зоной.',
    features: ['2 Этажа', 'Своя кухня', 'Несколько спален', 'Мангальная зона'],
  },
];

/* ── Image slider for room cards ── */
const RoomImageSlider = ({ images, title }: { images: string[]; title: string }) => {
  const [idx, setIdx] = useState(0);
  const next = (e: React.MouseEvent) => { e.preventDefault(); e.stopPropagation(); setIdx((i) => (i + 1) % images.length); };
  const prev = (e: React.MouseEvent) => { e.preventDefault(); e.stopPropagation(); setIdx((i) => (i - 1 + images.length) % images.length); };

  return (
    <div className="relative w-full h-full group/slider">
      <Image src={images[idx]} alt={`${title} — Фото ${idx + 1}`} fill className="object-cover transition-transform duration-700 group-hover/slider:scale-105" />
      <div className="absolute inset-0 bg-stone-900/10 group-hover/slider:bg-transparent transition-colors duration-500 pointer-events-none" />
      {images.length > 1 && (
        <>
          <button onClick={prev} aria-label="Предыдущее фото" className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/30 hover:bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all z-20">
            <ChevronLeft size={22} className="text-stone-900" />
          </button>
          <button onClick={next} aria-label="Следующее фото" className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/30 hover:bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all z-20">
            <ChevronRight size={22} className="text-stone-900" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            {images.map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === idx ? 'bg-white scale-125' : 'bg-white/50'}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default function BookingPage() {
  const containerRef = useRef<HTMLDivElement>(null);


  /* GSAP entrance animations */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.anim-room-booking',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.12, duration: 0.8, ease: 'power3.out', delay: 0.3 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-stone-50" ref={containerRef}>
      {/* Hero Section */}
      <PageHero
        title="Бронирование"
        subtitle="Выберите даты, категорию номера и забронируйте онлайн. Оплата банковской картой через ЮKassa. При бронировании через сайт — завтрак включён."
        badge="🗝️ Онлайн-бронирование"
        imageSrc="/optimized/Виды/Фасады/Фасады-01.webp"
        imageAlt="Загородный отель Яковка — бронирование"
        breadcrumbs={[{ label: 'Бронирование' }]}
      />

      {/* Trust Badges */}
      <section className="py-12 bg-white border-b border-stone-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3 text-stone-600">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <ShieldCheck size={22} className="text-primary" />
              </div>
              <div>
                <span className="block font-bold text-stone-900 text-sm">Безопасная оплата</span>
                <span className="text-xs text-stone-500">Шифрование SSL</span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-stone-600">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <CreditCard size={22} className="text-primary" />
              </div>
              <div>
                <span className="block font-bold text-stone-900 text-sm">Visa, MasterCard, МИР</span>
                <span className="text-xs text-stone-500">Через ЮKassa</span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-stone-600">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <CalendarCheck size={22} className="text-primary" />
              </div>
              <div>
                <span className="block font-bold text-stone-900 text-sm">Мгновенное подтверждение</span>
                <span className="text-xs text-stone-500">Автоматическое бронирование</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Search Widget ── */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-stone-100 p-6 md:p-10">
            <h2 className="font-heading text-2xl font-bold text-stone-900 mb-6">Поиск свободных номеров</h2>
            <KonturWidgetSearch containerId="BookingPageSearch" />
          </div>
        </div>
      </section>

      {/* ── Room Gallery with Photos ── */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">Наши номера</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-stone-900 mb-4">Варианты размещения</h2>
            <p className="text-stone-500 text-lg font-light max-w-2xl mx-auto">
              Ознакомьтесь с нашими номерами и выберите подходящий вариант для вашего отдыха
            </p>
          </div>

          <div className="space-y-10 max-w-6xl mx-auto">
            {rooms.map((room) => (
              <div
                key={room.slug}
                className="anim-room-booking flex flex-col md:flex-row bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-stone-100 hover:shadow-premium transition-all duration-500"
              >
                {/* Photo Slider */}
                <div className="relative w-full md:w-5/12 h-72 md:h-auto min-h-[280px] overflow-hidden">
                  <RoomImageSlider images={room.images} title={room.title} />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full font-bold text-sm text-stone-900 flex items-center gap-2 shadow-sm z-30 pointer-events-none">
                    <Maximize size={16} className="text-primary" /> {room.size}
                  </div>
                </div>

                {/* Info */}
                <div className="p-8 md:p-10 flex flex-col flex-grow w-full md:w-7/12">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-stone-900">{room.title}</h3>
                    <div className="text-right">
                      <span className="block text-xs text-stone-500 uppercase font-bold tracking-wider mb-1">за сутки</span>
                      <span className="font-heading text-2xl md:text-3xl font-bold text-primary">{room.priceText}</span>
                    </div>
                  </div>

                  <div className="flex gap-4 mb-4 text-sm text-stone-700 font-bold bg-stone-50 self-start px-4 py-2 rounded-xl">
                    <div className="flex items-center gap-2"><Users size={18} className="text-stone-400" /> {room.guestsText}</div>
                  </div>

                  <p className="text-stone-500 mb-6 leading-relaxed font-light">{room.description}</p>

                  <ul className="grid grid-cols-2 gap-y-2.5 gap-x-6 mb-8 mt-auto">
                    {room.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm font-medium text-stone-700">
                        <Check size={16} className="text-primary mr-2 shrink-0" strokeWidth={3} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#booking-widget"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById('BookingPageRooms');
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="self-start inline-flex items-center justify-center px-8 py-4 rounded-2xl text-base font-bold bg-primary text-white hover:bg-stone-900 transition-colors shadow-lg shadow-primary/20"
                  >
                    Забронировать
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kontur Widget: Rooms List ── */}
      <section className="pb-16" id="booking-widget">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-stone-100 p-6 md:p-10">
            <h2 className="font-heading text-2xl font-bold text-stone-900 mb-6">Доступные номера и цены</h2>
            <p className="text-stone-500 mb-8 font-light">Выберите даты и нажмите «Проверить наличие», чтобы увидеть актуальные цены и свободные номера.</p>
            <KonturWidgetRoomsList containerId="BookingPageRooms" />
          </div>
        </div>
      </section>

      {/* ── Availability Calendar ── */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-stone-100 p-6 md:p-10">
            <h2 className="font-heading text-2xl font-bold text-stone-900 mb-6">Календарь доступности</h2>
            <KonturWidgetCalendarHorizontal containerId="BookingPageCalendar" />
          </div>
        </div>
      </section>

      {/* ── Children / Extra Beds Info ── */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-stone-900 rounded-[2.5rem] shadow-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <h3 className="font-heading text-3xl font-bold text-white mb-8">Размещение с детьми и доп. места</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-colors">
                <span className="block text-4xl mb-4">👶</span>
                <h4 className="font-heading font-bold text-white mb-1">До 3 лет</h4>
                <p className="text-primary font-bold text-lg">Бесплатно</p>
                <p className="text-sm text-stone-400 mt-2">Без предоставления места</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-colors">
                <span className="block text-4xl mb-4">🧸</span>
                <h4 className="font-heading font-bold text-white mb-1">От 4 до 12 лет</h4>
                <p className="text-white font-bold text-lg">500 руб.</p>
                <p className="text-sm text-stone-400 mt-2">В сутки за ребенка</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-colors">
                <span className="block text-4xl mb-4">🎒</span>
                <h4 className="font-heading font-bold text-white mb-1">От 13 до 18 лет</h4>
                <p className="text-white font-bold text-lg">700 руб.</p>
                <p className="text-sm text-stone-400 mt-2">В сутки за подростка</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-colors">
                <span className="block text-4xl mb-4">👤</span>
                <h4 className="font-heading font-bold text-white mb-1">От 18 лет</h4>
                <p className="text-white font-bold text-lg">1000 руб.</p>
                <p className="text-sm text-stone-400 mt-2">Доп. взрослое место</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile button is already rendered globally in layout.tsx via KonturWidgetMobileButton */}

      {/* Contact fallback */}
      <section className="pb-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-lg mx-auto bg-white rounded-3xl p-10 shadow-sm border border-stone-100">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <Phone size={28} className="text-primary" />
            </div>
            <h3 className="font-heading text-xl font-bold text-stone-900 mb-3">Нужна помощь с бронированием?</h3>
            <p className="text-stone-500 mb-6 font-light">Наш администратор поможет подобрать идеальный номер и ответит на все вопросы</p>
            <a
              href="tel:+79609552100"
              className="inline-flex items-center gap-3 text-primary font-bold text-xl hover:underline"
            >
              +7 (960) 955-21-00
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
