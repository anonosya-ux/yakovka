'use client';

import { use, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

// Mock DB since we will move to Strapi later
const roomsData: Record<string, any> = {
  'standart': {
    title: 'Категория Стандарт',
    description: 'Компактный и уютный номер для двоих. Оснащен всем необходимым для спокойного отдыха на природе. При бронировании через сайт завтрак включён в стоимость проживания.',
    size: '12 м²',
    guests: 'До 2-х человек',
    price: '5 800 ₽',
    images: [
      '/optimized/Номера/Стандарт/Стандарт-01.webp',
      '/optimized/Номера/Стандарт/Стандарт-02.webp',
      '/optimized/Номера/Стандарт/Стандарт-03.webp',
      '/optimized/Номера/Стандарт/Стандарт-04.webp',
      '/optimized/Номера/Стандарт/Стандарт-05.webp',
    ],
    features: ['2 односпальные кровати', 'Санузел, душ в номере', 'Высокоскоростной Wi-Fi', 'ЖК Телевизор', 'Регулярная уборка']
  },
  'standart-plus': {
    title: 'Категория Стандарт Улучшенный',
    description: 'Улучшенный номер с возможностью размещения до 3-х человек. Прекрасно подходит для небольших семей. При бронировании через сайт завтрак включён в стоимость проживания.',
    size: '16 м²',
    guests: 'До 3-х человек',
    price: '6 800 ₽',
    images: [
      '/optimized/Номера/Стандарт+/Стандарт+-01.webp',
      '/optimized/Номера/Стандарт+/Стандарт+-02.webp',
      '/optimized/Номера/Стандарт+/Стандарт+-03.webp',
      '/optimized/Номера/Стандарт+/Стандарт+-04.webp',
    ],
    features: ['2 односпальные кровати', 'Кресло-кровать', 'Санузел, душ в номере', 'Холодильник', 'Wi-Fi и ТВ']
  },
  'family': {
    title: 'Категория Семейный',
    description: 'Семейный номер с двуспальной кроватью. Создан для комфортного проживания пар или семей с ребенком. При бронировании через сайт завтрак включён в стоимость проживания.',
    size: '20 м²',
    guests: 'До 2-х человек',
    price: '5 800 ₽',
    images: [
      '/optimized/Номера/Семейный/Семейный-01.webp',
      '/optimized/Номера/Семейный/Семейный-02.webp',
      '/optimized/Номера/Семейный/Семейный-03.webp',
      '/optimized/Номера/Семейный/Семейный-04.webp',
    ],
    features: ['1 двуспальная кровать', 'Кресло-кровать', 'Санузел, душ в номере', 'Мини-бар']
  },
  'family-plus': {
    title: 'Категория Семейный Улучшенный',
    description: 'Просторный номер улучшенной планировки. Больше пространства для комфортного размещения вашей семьи. При бронировании через сайт завтрак включён в стоимость проживания.',
    size: '25 м²',
    guests: 'До 5 человек',
    price: '9 500 ₽',
    images: [
      '/optimized/Номера/Семейный+/Семейный+-01.webp',
      '/optimized/Номера/Семейный+/Семейный+-02.webp',
      '/optimized/Номера/Семейный+/Семейный+-03.webp',
      '/optimized/Номера/Семейный+/Семейный+-04.webp',
      '/optimized/Номера/Семейный+/Семейный+-05.webp',
      '/optimized/Номера/Семейный+/Семейный+-06.webp',
      '/optimized/Номера/Семейный+/Семейный+-07.webp',
      '/optimized/Номера/Семейный+/Семейный+-08.webp',
    ],
    features: ['1 двуспальная кровать', 'Кресло-кровать', 'Комната отдыха', 'Санузел, душ в номере', 'Завтрак включен']
  },
  'cottage': {
    title: 'Коттедж',
    description: 'Отдельный коттедж для максимального уединения. Просторная терраса, своя мангальная зона и премиальная отделка. При бронировании через сайт завтрак включён в стоимость проживания.',
    size: '60 м²',
    guests: 'До 8 человек',
    price: '12 000 ₽',
    images: [
      '/optimized/Номера/Семейный++/Семейный++-01.webp',
      '/optimized/Номера/Семейный++/Семейный++-02.webp',
      '/optimized/Номера/Семейный++/Семейный++-03.webp',
      '/optimized/Номера/Семейный++/Семейный++-04.webp',
      '/optimized/Номера/Семейный++/Семейный++-05.webp',
      '/optimized/Номера/Семейный++/Семейный++-06.webp',
      '/optimized/Номера/Семейный++/Семейный++-07.webp',
    ],
    features: ['Несколько спален', 'Личная кухня', 'Ванная комната', 'Терасса', 'Зона BBQ']
  }
};

export default function RoomDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const room = roomsData[slug];
  const [currentImage, setCurrentImage] = useState(0);

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Номер не найден</h1>
          <Link href="/rooms" className="text-primary underline">Вернуться к списку номеров</Link>
        </div>
      </div>
    );
  }

  const images = room.images;
  const prevImage = () => setCurrentImage((prev: number) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () => setCurrentImage((prev: number) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="min-h-screen bg-white pt-24 pb-32">
      <div className="container mx-auto px-6">
        
        {/* Breadcrumbs */}
        <Breadcrumbs variant="light" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Gallery Side */}
          <div className="space-y-4">
            {/* Main image with navigation */}
            <div className="relative aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 group">
              <Image 
                src={images[currentImage]} 
                alt={`${room.title} — фото ${currentImage + 1}`}
                fill
                className="object-cover transition-opacity duration-300"
                priority
              />
              
              {/* Navigation arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                aria-label="Предыдущее фото"
              >
                <ChevronLeft size={20} className="text-stone-800" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                aria-label="Следующее фото"
              >
                <ChevronRight size={20} className="text-stone-800" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      idx === currentImage
                        ? 'bg-white w-6'
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Фото ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Counter */}
              <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white text-sm px-3 py-1.5 rounded-full font-medium">
                {currentImage + 1} / {images.length}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 md:grid-cols-5 gap-2">
              {images.map((img: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                    idx === currentImage
                      ? 'border-primary ring-2 ring-primary/20'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image src={img} alt={`Миниатюра ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info Side */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex max-w-fit items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-bold mb-6 border border-primary/10">
              <span className="animate-pulse w-2 h-2 rounded-full bg-primary"></span>
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
                  <CheckCircle2 size={24} className="text-primary mr-4 shrink-0" />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto p-8 rounded-[2.5rem] bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-20 -mr-20 -mt-20"></div>
               <div>
                 <p className="text-slate-400 text-sm font-medium mb-1 uppercase tracking-wider">За сутки</p>
                 <p className="text-4xl font-extrabold">{room.price}</p>
               </div>
               <Link href="/booking" className="inline-flex items-center justify-center w-full md:w-auto bg-primary hover:bg-stone-800 text-white rounded-full px-8 py-6 text-lg font-bold shadow-[0_10px_25px_rgba(40,100,50,0.4)] hover:-translate-y-1 transition-all z-10 relative">
                 Забронировать
               </Link>
            </div>

            <Link href="/rooms" className="inline-flex items-center gap-2 mt-8 text-slate-500 hover:text-primary transition-colors font-medium">
              <ArrowLeft size={20} />
              Вернуться ко всем номерам
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
}
