'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flame, Droplets, ThermometerSun, LeafyGreen } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

gsap.registerPlugin(ScrollTrigger);

export default function BanyaPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.banya-feature', 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power2.out' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#fafafa] pt-24" ref={containerRef}>
      
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="w-full lg:w-1/2 space-y-8 banya-feature">
            <Breadcrumbs variant="light" />
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold uppercase tracking-widest border border-orange-200 mt-4">
              <Flame size={16} /> Оздоровление
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">Настоящая Русская Баня</h1>
            <p className="text-xl text-slate-600 leading-relaxed font-light">
              После активного дня на горнолыжном склоне или долгой прогулки на свежем воздухе нет ничего лучше, чем как следует попариться в настоящей русской бане. 
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Жаркая парная, березовые и дубовые веники, купель с ледяной водой — мы создали идеальные условия для глубокого восстановления и очищения организма.
            </p>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative banya-feature">
               <Image 
                 src="https://xn--80adxbs4h.xn--p1ai/wp-content/uploads/2024/02/Баня-1.webp" 
                 alt="Русская баня"
                 fill
                 className="object-cover"
                 priority
               />
            </div>
            
            {/* Info Card floating */}
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 banya-feature hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                  <Droplets size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Купель с родниковой водой</h4>
                  <p className="text-sm text-slate-500">Идеальный контраст</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
           <div className="banya-feature bg-orange-50/50 p-8 rounded-[2rem] border border-orange-100 text-center flex flex-col items-center hover:bg-orange-50 transition-colors">
             <ThermometerSun size={40} className="text-orange-500 mb-6" />
             <h3 className="text-xl font-bold text-slate-900 mb-3">Правильный пар</h3>
             <p className="text-slate-600">Печь на дровах создает мягкий и обволакивающий пар, который не обжигает дыхательные пути.</p>
           </div>
           <div className="banya-feature bg-emerald-50/50 p-8 rounded-[2rem] border border-emerald-100 text-center flex flex-col items-center hover:bg-emerald-50 transition-colors">
             <LeafyGreen size={40} className="text-emerald-500 mb-6" />
             <h3 className="text-xl font-bold text-slate-900 mb-3">Банные ритуалы</h3>
             <p className="text-slate-600">Широкий выбор качественных веников, фиточай на алтайских травах и мед с собственной пасеки.</p>
           </div>
           <div className="banya-feature bg-blue-50/50 p-8 rounded-[2rem] border border-blue-100 text-center flex flex-col items-center hover:bg-blue-50 transition-colors">
             <Droplets size={40} className="text-blue-500 mb-6" />
             <h3 className="text-xl font-bold text-slate-900 mb-3">Комната отдыха</h3>
             <p className="text-slate-600">Просторная и комфортная зона отдыха со столом, ТВ и всем необходимым для большой компании.</p>
           </div>
        </div>

      </div>
    </div>
  );
}
