'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Users, Maximize, Check } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';

const rooms = [
  {
    slug: 'standart',
    title: 'Стандарт',
    size: 'от 12 м²',
    guests: 'до 2 гостей',
    price: 'от 3000 ₽',
    img: 'https://xn--80adxbs4h.xn--p1ai/wp-content/uploads/2024/02/slide-st-1.webp',
    description: 'Уютный однокомнатный номер, идеальный для комфортного размещения одного или двух гостей. Оснащен всем необходимым для отдыха после активного дня в горах.',
    features: ['Двуспальная кровать', 'Wi-Fi', 'Телевизор', 'Душ', 'Чайник', 'Панорамные окна'],
  },
  {
    slug: 'standart-plus',
    title: 'Стандарт +',
    size: 'от 16 м²',
    guests: 'до 3 гостей',
    price: 'от 4000 ₽',
    img: 'https://xn--80adxbs4h.xn--p1ai/wp-content/uploads/2024/02/slide-st-plus-1.webp',
    description: 'Просторный однокомнатный номер с дополнительным местом (диван), отлично подходящий для небольшой семьи или компании друзей.',
    features: ['Двуспальная кровать', 'Раскладной диван', 'Wi-Fi', 'Телевизор', 'Душ', 'Чайник'],
  },
  {
    slug: 'family',
    title: 'Семейный',
    size: 'от 20 м²',
    guests: 'до 4 гостей',
    price: 'от 5500 ₽',
    img: 'https://xn--80adxbs4h.xn--p1ai/wp-content/uploads/2024/02/slide-family-1.webp',
    description: 'Увеличенный номер для комфортного семейного отдыха. Пространство разделено таким образом, чтобы каждому члену семьи было уютно.',
    features: ['Двуспальная кровать', 'Раскладной диван', 'Холодильник', 'Завтрак включен', 'Чайная станция', 'Душ и санузел'],
  },
  {
    slug: 'family-plus',
    title: 'Семейный ++',
    size: 'от 30 м²',
    guests: 'до 6 гостей',
    price: 'от 7500 ₽',
    img: 'https://xn--80adxbs4h.xn--p1ai/wp-content/uploads/2024/02/slide-family-plus-1.webp',
    description: 'Большой семейный номер повышенной комфортности с зонами отдыха и сна. Идеально для больших семей.',
    features: ['2 Кондиционера', '2 Телевизора', 'Теплые полы', 'Завтрак включен', 'Холодильник', 'Диванная зона'],
  },
  {
    slug: 'cottage',
    title: 'Коттедж',
    size: 'от 60 м²',
    guests: 'до 8 гостей',
    price: 'от 15 000 ₽',
    img: 'https://xn--80adxbs4h.xn--p1ai/wp-content/uploads/2024/02/slide-st-1.webp', // fallback img, will update if needed
    description: 'Отдельно стоящий двухэтажный коттедж для большой компании. Собственная мангальная зона, кухня и большая гостиная.',
    features: ['2 Этажа', 'Своя кухня', 'Несколько спален', 'Мангальная зона', 'Холодильник', 'Своя парковка', 'Завтрак включен'],
  }
];

export default function RoomsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.anim-up', 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power3.out' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const openWidget = () => {
    if (typeof window !== 'undefined' && (window as any).HotelWidget) {
      (window as any).HotelWidget.open();
    } else {
      window.open('https://bookonline24.ru/widget.js?hotelId=2774874f-1347-4c7d-a835-9791d5814751', '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-24" ref={containerRef}>
      <div className="container mx-auto px-6">
        <Breadcrumbs variant="light" />
        
        {/* Header Block */}
        <div className="mb-16 mt-8 max-w-4xl mx-auto text-center anim-up">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-stone-900 mb-6 tracking-tight">Номера и Цены</h1>
          <p className="text-lg text-stone-600 mb-8 font-light">
            Загородный отель «Яковка» предлагает размещение в комфортабельных номерах различной вместимости 
            у подножия одноименной горы. Всего в 150 метрах от бугельного подъемника.
          </p>
          <p className="text-base font-medium text-stone-800 bg-primary/5 p-6 rounded-2xl border border-primary/20">
            В нашем отеле работает кафе, русская баня, прокат горнолыжного инвентаря.
            Наши двери открыты для тех, кто ищет гармонию, тишину, чистейший воздух и новые впечатления.
          </p>
        </div>

        {/* Children Prices Rule Block */}
        <div className="mb-20 anim-up max-w-5xl mx-auto bg-white rounded-3xl shadow-lg shadow-stone-200/50 border border-stone-200/60 p-8 md:p-10">
          <h3 className="font-heading text-2xl font-bold text-stone-900 mb-6 text-center">Размещение с детьми и доп. места</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-stone-50/50 rounded-2xl p-5 text-center border border-stone-100">
              <span className="block text-4xl mb-3">👶</span>
              <h4 className="font-heading font-bold text-stone-900 mb-1">До 3 лет</h4>
              <p className="text-primary font-bold">Бесплатно</p>
              <p className="text-xs text-stone-500 mt-1">Без предост. места</p>
            </div>
            <div className="bg-stone-50/50 rounded-2xl p-5 text-center border border-stone-100">
              <span className="block text-4xl mb-3">🧸</span>
              <h4 className="font-heading font-bold text-stone-900 mb-1">От 4 до 12 лет</h4>
              <p className="text-stone-700 font-bold">500 руб.</p>
              <p className="text-xs text-stone-500 mt-1">В сутки</p>
            </div>
            <div className="bg-stone-50/50 rounded-2xl p-5 text-center border border-stone-100">
              <span className="block text-4xl mb-3">🎒</span>
              <h4 className="font-heading font-bold text-stone-900 mb-1">От 13 до 18 лет</h4>
              <p className="text-stone-700 font-bold">700 руб.</p>
              <p className="text-xs text-stone-500 mt-1">В сутки</p>
            </div>
            <div className="bg-stone-50/50 rounded-2xl p-5 text-center border border-stone-100">
              <span className="block text-4xl mb-3">👤</span>
              <h4 className="font-heading font-bold text-stone-900 mb-1">От 18 лет</h4>
              <p className="text-stone-800 font-bold">1000 руб.</p>
              <p className="text-xs text-stone-500 mt-1">Взрослое место</p>
            </div>
          </div>
        </div>

        {/* Room List */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {rooms.map((room) => (
            <div key={room.slug} className="anim-up flex flex-col md:flex-row bg-white rounded-[2rem] overflow-hidden shadow-lg shadow-stone-200/50 border border-stone-200/60 hover:shadow-2xl hover:shadow-stone-200 transition-all duration-500">
              <div className="relative w-full md:w-5/12 h-64 md:h-auto overflow-hidden">
                <Image 
                  src={room.img} 
                  alt={room.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-grow w-full md:w-7/12">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <h2 className="font-heading text-3xl font-bold text-stone-900">{room.title}</h2>
                  <div className="text-right">
                    <span className="block text-sm text-stone-500 uppercase font-semibold">за сутки</span>
                    <span className="font-heading text-2xl font-bold text-primary">{room.price}</span>
                  </div>
                </div>
                
                <div className="flex gap-4 mb-6 text-sm text-stone-600 font-medium">
                  <div className="flex items-center gap-1.5"><Maximize size={16} className="text-stone-400"/> {room.size}</div>
                  <div className="flex items-center gap-1.5"><Users size={16} className="text-stone-400"/> {room.guests}</div>
                </div>

                <p className="text-stone-600 mb-8 leading-relaxed font-light">
                  {room.description}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-8 mt-auto">
                  {room.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm font-medium text-stone-700">
                      <Check size={16} className="text-primary mr-2 shrink-0" strokeWidth={3} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div>
                  <Button onClick={openWidget} className="w-full md:w-auto px-8 py-6 rounded-xl text-lg font-semibold bg-primary text-white hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30">
                    Забронировать номер
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
