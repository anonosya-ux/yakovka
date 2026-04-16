'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ArrowRight, Users, Maximize, BedDouble } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

const rooms = [
  {
    slug: 'standart',
    title: 'Стандарт',
    size: 'от 12 м²',
    guests: 'до 2 гостей',
    price: 'от 3000 ₽',
    img: 'https://xn--80adxbs4h.xn--p1ai/wp-content/uploads/2024/02/slide-st-1.webp',
  },
  {
    slug: 'standart-plus',
    title: 'Стандарт +',
    size: 'от 16 м²',
    guests: 'до 3 гостей',
    price: 'от 4000 ₽',
    img: 'https://xn--80adxbs4h.xn--p1ai/wp-content/uploads/2024/02/slide-st-plus-1.webp',
  },
  {
    slug: 'family',
    title: 'Семейный',
    size: 'от 20 м²',
    guests: 'до 4 гостей',
    price: 'от 5500 ₽',
    img: 'https://xn--80adxbs4h.xn--p1ai/wp-content/uploads/2024/02/slide-family-1.webp',
  },
  {
    slug: 'family-plus',
    title: 'Семейный ++',
    size: 'от 30 м²',
    guests: 'до 6 гостей',
    price: 'от 7500 ₽',
    img: 'https://xn--80adxbs4h.xn--p1ai/wp-content/uploads/2024/02/slide-family-plus-1.webp',
  },
  {
    slug: 'cottage',
    title: 'Коттедж',
    size: 'от 60 м²',
    guests: 'до 8 гостей',
    price: 'от 15000 ₽',
    img: 'https://xn--80adxbs4h.xn--p1ai/wp-content/uploads/2024/02/slide-st-1.webp', // fallback img
  }
];

export default function RoomsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.room-card', 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power3.out' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] pt-24 pb-24" ref={containerRef}>
      <div className="container mx-auto px-6">
        <Breadcrumbs variant="light" />
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Номера и Цены</h1>
          <p className="text-lg text-slate-600">Комфортное размещение у подножия горы. От уютных стандартов до просторных шале для больших компаний.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {rooms.map((room) => (
            <div key={room.slug} className="room-card group flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500">
              <div className="relative h-72 md:h-80 w-full overflow-hidden">
                <Image 
                  src={room.img} 
                  alt={room.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-slate-900 font-bold shadow-sm">
                  {room.price}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{room.title}</h2>
                <div className="flex gap-4 mb-6 text-sm text-slate-500 font-medium border-b border-slate-100 pb-6">
                  <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg"><Maximize size={16}/> {room.size}</div>
                  <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg"><Users size={16}/> {room.guests}</div>
                </div>
                <div className="mt-auto">
                  <Link href={`/rooms/${room.slug}`} className="inline-flex items-center justify-between w-full p-4 bg-slate-50 hover:bg-blue-600 hover:text-white text-slate-700 rounded-2xl transition-colors group/btn">
                    <span className="font-semibold">Подробнее о номере</span>
                    <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
