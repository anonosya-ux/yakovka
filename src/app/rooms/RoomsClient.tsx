'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Maximize, Check, Filter } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';

const rooms = [
  {
    slug: 'standart',
    title: 'Стандарт',
    size: 'от 12 м²',
    guestsText: 'до 2 гостей',
    maxGuests: 2,
    priceText: 'от 5 800 ₽',
    priceNum: 5800,
    img: '/optimized/Номера/Стандарт/Стандарт-01.webp',
    description: 'Уютный однокомнатный номер, идеальный для комфортного размещения одного или двух гостей. Оснащен всем необходимым для отдыха после активного дня в горах.',
    features: ['Двуспальная кровать', 'Wi-Fi', 'Телевизор', 'Душ', 'Чайник', 'Панорамные окна'],
  },
  {
    slug: 'standart-plus',
    title: 'Стандарт +',
    size: 'от 16 м²',
    guestsText: 'до 3 гостей',
    maxGuests: 3,
    priceText: 'от 6 800 ₽',
    priceNum: 6800,
    img: '/optimized/Номера/Стандарт+/Стандарт+-01.webp',
    description: 'Просторный однокомнатный номер с дополнительным местом (диван), отлично подходящий для небольшой семьи или компании друзей.',
    features: ['Двуспальная кровать', 'Раскладной диван', 'Wi-Fi', 'Телевизор', 'Душ', 'Чайник'],
  },
  {
    slug: 'family',
    title: 'Семейный',
    size: 'от 20 м²',
    guestsText: 'до 4 гостей',
    maxGuests: 4,
    priceText: 'от 5 800 ₽',
    priceNum: 5800,
    img: '/optimized/Номера/Семейный/Семейный-01.webp',
    description: 'Увеличенный номер для комфортного семейного отдыха. Пространство разделено таким образом, чтобы каждому члену семьи было уютно.',
    features: ['Двуспальная кровать', 'Раскладной диван', 'Холодильник', 'Завтрак включен', 'Чайная станция', 'Душ и санузел'],
  },
  {
    slug: 'family-plus',
    title: 'Семейный +',
    size: 'от 25 м²',
    guestsText: 'до 5 гостей',
    maxGuests: 5,
    priceText: 'от 7 500 ₽',
    priceNum: 7500,
    img: '/optimized/Номера/Семейный+/Семейный+-01.webp',
    description: 'Семейный номер улучшенной планировки. Больше пространства для комфортного размещения вашей семьи.',
    features: ['Двуспальная кровать', 'Большой диван', 'Телевизор', 'Завтрак включен', 'Холодильник', 'Зона отдыха'],
  },
  {
    slug: 'cottage',
    title: 'Коттедж (Семейный ++)',
    size: 'от 60 м²',
    guestsText: 'до 8 гостей',
    maxGuests: 8,
    priceText: '10 000 ₽',
    priceNum: 10000,
    img: '/optimized/Номера/Семейный++/Семейный++-01.webp',
    description: 'Отдельно стоящий двухэтажный коттедж для большой компании. Собственная мангальная зона, кухня и большая гостиная.',
    features: ['2 Этажа', 'Своя кухня', 'Несколько спален', 'Мангальная зона', 'Холодильник', 'Своя парковка'],
  }
];

export default function RoomsClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('price-asc');

  const filteredRooms = useMemo(() => {
    let result = [...rooms];
    
    // Filtering
    if (filter === '1-2') result = result.filter(r => r.maxGuests <= 2);
    if (filter === '3-4') result = result.filter(r => r.maxGuests >= 3 && r.maxGuests <= 4);
    if (filter === '5+') result = result.filter(r => r.maxGuests >= 5);
    
    // Sorting
    result.sort((a, b) => {
      if (sort === 'price-asc') return a.priceNum - b.priceNum;
      if (sort === 'price-desc') return b.priceNum - a.priceNum;
      return 0;
    });
    
    return result;
  }, [filter, sort]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.anim-room', 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power3.out' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [filter, sort]); // Re-animate on filter change

  return (
    <div className="min-h-screen bg-stone-50 pb-24" ref={containerRef}>
      <PageHero
        title="Номера и Цены"
        subtitle="Загородный отель «Яковка» предлагает размещение в комфортабельных номерах различной вместимости у подножия одноименной горы."
        badge="🗝️ Размещение"
        imageSrc="/optimized/Номера/Семейный+/Семейный+-01.webp"
        imageAlt="Номера отеля Яковка"
        breadcrumbs={[{ label: 'Номера' }]}
      />

      <div className="container mx-auto px-6 mt-16">
        {/* Фильтры и сортировка */}
        <div className="max-w-6xl mx-auto bg-white p-6 rounded-3xl shadow-sm border border-stone-100 mb-12 flex flex-col md:flex-row gap-6 items-center justify-between sticky top-24 z-30">
          <div className="flex items-center gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            <span className="font-bold text-stone-900 flex items-center gap-2 mr-2">
              <Filter size={18} className="text-primary" /> Вместимость:
            </span>
            <button onClick={() => setFilter('all')} className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${filter === 'all' ? 'bg-primary text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}>
              Все номера
            </button>
            <button onClick={() => setFilter('1-2')} className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${filter === '1-2' ? 'bg-primary text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}>
              1-2 гостя
            </button>
            <button onClick={() => setFilter('3-4')} className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${filter === '3-4' ? 'bg-primary text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}>
              3-4 гостя
            </button>
            <button onClick={() => setFilter('5+')} className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${filter === '5+' ? 'bg-primary text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}>
              от 5 гостей
            </button>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <span className="font-bold text-stone-900 text-sm hidden lg:block">Сортировка:</span>
            <select 
              value={sort} 
              onChange={(e) => setSort(e.target.value)}
              className="bg-stone-100 text-stone-700 text-sm font-bold px-5 py-3 rounded-full border-none outline-none focus:ring-2 focus:ring-primary cursor-pointer w-full md:w-auto appearance-none"
            >
              <option value="price-asc">Сначала дешевле</option>
              <option value="price-desc">Сначала дороже</option>
            </select>
          </div>
        </div>

        {/* Children Prices Rule Block */}
        <div className="mb-20 max-w-6xl mx-auto bg-stone-900 rounded-[2.5rem] shadow-2xl p-8 md:p-12 relative overflow-hidden">
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

        {/* Room List */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {filteredRooms.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-stone-100">
              <p className="text-stone-500 text-lg">К сожалению, по выбранным фильтрам номеров не найдено.</p>
              <button onClick={() => setFilter('all')} className="mt-4 text-primary font-bold hover:underline">Сбросить фильтры</button>
            </div>
          ) : (
            filteredRooms.map((room) => (
              <div key={room.slug} className="anim-room flex flex-col md:flex-row bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-stone-100 hover:shadow-premium transition-all duration-500 group">
                <Link href={`/rooms/${room.slug}`} className="relative w-full md:w-5/12 h-72 md:h-auto overflow-hidden block">
                  <Image 
                    src={room.img} 
                    alt={room.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-[1500ms]"
                  />
                  <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full font-bold text-sm text-stone-900 flex items-center gap-2 shadow-sm">
                    <Maximize size={16} className="text-primary"/> {room.size}
                  </div>
                </Link>
                <div className="p-8 md:p-12 flex flex-col flex-grow w-full md:w-7/12">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <Link href={`/rooms/${room.slug}`} className="hover:text-primary transition-colors">
                      <h2 className="font-heading text-3xl font-bold text-stone-900">{room.title}</h2>
                    </Link>
                    <div className="text-left md:text-right">
                      <span className="block text-sm text-stone-500 uppercase font-bold tracking-wider mb-1">за сутки</span>
                      <span className="font-heading text-3xl font-bold text-primary">{room.priceText}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 mb-6 text-sm text-stone-700 font-bold bg-stone-50 self-start px-4 py-2 rounded-xl">
                    <div className="flex items-center gap-2"><Users size={18} className="text-stone-400"/> {room.guestsText}</div>
                  </div>

                  <p className="text-stone-500 mb-8 leading-relaxed font-light">
                    {room.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-10 mt-auto">
                    {room.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm font-medium text-stone-700">
                        <Check size={18} className="text-primary mr-3 shrink-0" strokeWidth={3} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="https://bookonline24.ru/?hotelId=2774874f-1347-4c7d-a835-9791d5814751" target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center px-8 py-5 rounded-2xl text-lg font-bold bg-primary text-white hover:bg-stone-900 transition-colors shadow-lg shadow-primary/20">
                      Забронировать
                    </a>
                    <Link href={`/rooms/${room.slug}`} className="inline-flex items-center justify-center px-8 py-5 rounded-2xl text-lg font-bold bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors">
                      Подробнее
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
