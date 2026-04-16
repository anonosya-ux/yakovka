'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ChefHat, Leaf, Clock, UtensilsCrossed } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function RestaurantPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.reveal-el', 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: 'power3.out' }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#fafafa]" ref={heroRef}>
      <div className="relative h-[65vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-zinc-900 z-0">
          <Image 
            src="https://xn--80adxbs4h.xn--p1ai/wp-content/uploads/2024/02/Ресторан-1.webp" 
            alt="Ресторан Яковка" 
            fill
            className="object-cover opacity-60 mix-blend-overlay"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-6 reveal-el pt-16">
          <div className="flex justify-center -mt-8"><Breadcrumbs variant="dark" /></div>
          <ChefHat size={64} className="mx-auto mb-8 text-orange-400 opacity-90 drop-shadow-lg mt-8" />
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl font-serif">
            Ресторан <span className="text-orange-400">«Яковка»</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 font-medium max-w-2xl mx-auto">
            Авторская сибирская кухня с панорамным видом на алтайские горы.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 reveal-el">
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Домашняя кухня с алтайским характером</h2>
            <div className="w-16 h-1.5 bg-orange-400 rounded-full" />
            <p className="text-lg text-slate-600 leading-relaxed">
              Наш ресторан порадует вас заказными обедами и ужинами, а также индивидуальным исполнением ваших пожеланий нашими шеф-поварами. Мы гордимся тем, что используем экологически чистые, фермерские продукты от местных алтайских производителей.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Уютный зал с камином идеально подходит для теплых семейных посиделок после активного дня на склоне, романтических ужинов или торжественных банкетов.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
                <Leaf className="text-emerald-500 shrink-0" size={28} />
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Эко-продукты</h4>
                  <p className="text-sm text-slate-500 leading-snug">Местное фермерское хозяйство и дикоросы</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
                <UtensilsCrossed className="text-rose-500 shrink-0" size={28} />
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Спец. меню</h4>
                  <p className="text-sm text-slate-500 leading-snug">Детское и диетическое меню по запросу</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative aspect-square lg:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl reveal-el">
            <Image 
              src="https://xn--80adxbs4h.xn--p1ai/wp-content/uploads/2024/02/Ресторан-1.webp" 
              alt="Интерьер ресторана" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 right-10">
              <div className="bg-white/20 backdrop-blur-xl border border-white/30 p-6 rounded-3xl flex items-center gap-6 text-white text-lg">
                <div className="bg-orange-500/80 p-4 rounded-2xl shrink-0">
                  <Clock size={32} />
                </div>
                <div>
                  <p className="font-bold text-xl mb-1">Режим работы</p>
                  <p className="text-white/80">Ежедневно: с 08:30 до 22:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
