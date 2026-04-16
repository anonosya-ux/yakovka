'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

// Mock DB since we will move to Strapi later
const roomsData: Record<string, any> = {
  'standart': {
    title: 'Стандарт',
    description: 'Компактный и уютный номер для двоих. Идеален для активных туристов, которые проводят весь день на склоне.',
    size: '12 м²',
    guests: 'До 2-х человек',
    price: 'от 3000 ₽',
    img: 'https://xn--80adxbs4h.xn--p1ai/wp-content/uploads/2024/02/slide-st-1.webp',
    features: ['2 односпальные кровати', 'Санузел, душ в номере', 'Высокоскоростной Wi-Fi', 'ЖК Телевизор', 'Регулярная уборка']
  },
  'standart-plus': {
    title: 'Стандарт +',
    description: 'Улучшенный номер с возможностью размещения до 3-х человек. Прекрасно подходит для небольших семей.',
    size: '16 м²',
    guests: 'До 3-х человек',
    price: 'от 4000 ₽',
    img: 'https://xn--80adxbs4h.xn--p1ai/wp-content/uploads/2024/02/slide-st-plus-1.webp',
    features: ['2 односпальные кровати', 'Кресло-кровать', 'Санузел, душ в номере', 'Холодильник', 'Wi-Fi и ТВ']
  },
  'family': {
    title: 'Семейный',
    description: 'Полценно семейный номер с двуспальной кроватью. Создан для комфортного проживания пар или семей с ребенком.',
    size: '20 м²',
    guests: 'До 2-х человек',
    price: 'от 5500 ₽',
    img: 'https://xn--80adxbs4h.xn--p1ai/wp-content/uploads/2024/02/slide-family-1.webp',
    features: ['1 двуспальная кровать', 'Зона отдыха', 'Санузел, душ в номере', 'Мини-бар']
  },
  'family-plus': {
    title: 'Семейный ++',
    description: 'Двухкомнатный просторный номер, подходящий для больших компаний или многодетных семей.',
    size: '30 м²',
    guests: 'До 6 человек',
    price: 'от 7500 ₽',
    img: 'https://xn--80adxbs4h.xn--p1ai/wp-content/uploads/2024/02/slide-family-plus-1.webp',
    features: ['1 двуспальная кровать', 'Раскладные диваны и кресла', 'Две комнаты', 'Санузел, душ в номере', 'Завтрак включен']
  },
  'cottage': {
    title: 'Коттедж (Шале)',
    description: 'Отдельный коттедж для максимального уединения. Просторная терраса, своя мангальная зона и премиальная отделка из алтайского кедра.',
    size: '60 м²',
    guests: 'До 8 человек',
    price: 'от 15000 ₽',
    img: 'https://xn--80adxbs4h.xn--p1ai/wp-content/uploads/2024/02/slide-st-1.webp',
    features: ['Несколько спален', 'Личная кухня', 'Ванная комната', 'Терасса', 'Зона BBQ']
  }
};

export default function RoomDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const room = roomsData[slug];

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Номер не найден</h1>
          <Link href="/rooms" className="text-blue-600 underline">Вернуться к списку номеров</Link>
        </div>
      </div>
    );
  }

  const openWidget = () => {
    if (typeof window !== 'undefined' && (window as any).HotelWidget) {
      (window as any).HotelWidget.open();
    }
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-32">
      <div className="container mx-auto px-6">
        
        {/* Breadcrumbs */}
        <Breadcrumbs variant="light" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Gallery Side */}
          <div className="space-y-6">
            <div className="relative aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100">
              <Image 
                src={room.img} 
                alt={room.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Future gallery thumbnails can go here */}
          </div>

          {/* Info Side */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex max-w-fit items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-6 border border-blue-100">
              <span className="animate-pulse w-2 h-2 rounded-full bg-blue-600"></span>
              Доступно для бронирования
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">{room.title}</h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed mb-10">
              {room.description}
            </p>

            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <p className="text-sm text-slate-500 mb-1">Вместимость</p>
                <p className="text-lg font-bold text-slate-900">{room.guests}</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <p className="text-sm text-slate-500 mb-1">Площадь</p>
                <p className="text-lg font-bold text-slate-900">{room.size}</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-6">В номере:</h3>
            <ul className="space-y-4 mb-12">
              {room.features.map((feature: string, i: number) => (
                <li key={i} className="flex items-center text-slate-700">
                  <CheckCircle2 size={24} className="text-emerald-500 mr-4 shrink-0" />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto p-8 rounded-[2.5rem] bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20"></div>
               <div>
                 <p className="text-slate-400 text-sm font-medium mb-1 uppercase tracking-wider">За сутки</p>
                 <p className="text-4xl font-extrabold">{room.price}</p>
               </div>
               <Button onClick={openWidget} size="lg" className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 text-white rounded-full px-8 py-6 text-lg font-bold shadow-[0_10px_25px_rgba(37,99,235,0.4)] hover:-translate-y-1 transition-all z-10 relative">
                 Забронировать номер
               </Button>
            </div>

            <Link href="/rooms" className="inline-flex items-center gap-2 mt-8 text-slate-500 hover:text-blue-600 transition-colors font-medium">
              <ArrowLeft size={20} />
              Вернуться ко всем номерам
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
}
