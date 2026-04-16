'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Mountain, Clock, Compass, Activity, Info, Calendar } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';

export default function SkiSeasonPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.anim-fade', 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] pt-24 pb-24" ref={containerRef}>
      <div className="container mx-auto px-6">
        <Breadcrumbs variant="light" />
        
        <div className="mb-16 mt-8 max-w-4xl mx-auto text-center anim-fade">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Горнолыжный сезон</h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            ГЛК «Яковка» — это идеальное место для катания на склонах алтайских гор как для уверенных 
            сноубордистов и лыжников, так и для тех, кто делает первые шаги. Северный склон горы гарантирует 
            продолжительный сезон качественного снежного покрова.
          </p>
        </div>

        {/* Info grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 anim-fade">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="bg-blue-50 text-blue-600 p-4 rounded-full mb-4">
              <Mountain size={28} />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">4 Трассы</h3>
            <p className="text-sm text-slate-500">Различного уровня сложности</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="bg-blue-50 text-blue-600 p-4 rounded-full mb-4">
              <Activity size={28} />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">1000 метров</h3>
            <p className="text-sm text-slate-500">Длина основных трасс</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="bg-blue-50 text-blue-600 p-4 rounded-full mb-4">
              <Compass size={28} />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Склоны</h3>
            <p className="text-sm text-slate-500">Северный склон, перепад 200 м</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="bg-blue-50 text-blue-600 p-4 rounded-full mb-4">
              <Calendar size={28} />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Режим работы</h3>
            <p className="text-sm text-slate-500">Со вторника по воскресенье</p>
          </div>
        </div>

        {/* Pricing Tables */}
        <div className="max-w-5xl mx-auto mb-20 anim-fade">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">Тарифы на подъемники</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Бугельный подъемник */}
            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-2 bg-blue-600"></div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Бугельный подъемник</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center pb-4 border-b border-slate-100">
                  <span className="text-slate-600 font-medium">1 подъем</span>
                  <span className="text-lg font-bold text-slate-900">100 ₽</span>
                </li>
                <li className="flex justify-between items-center pb-4 border-b border-slate-100">
                  <span className="text-slate-600 font-medium">1 час</span>
                  <span className="text-lg font-bold text-slate-900">700 ₽</span>
                </li>
                <li className="flex justify-between items-center pb-4 border-b border-slate-100">
                  <span className="text-slate-600 font-medium">2 часа</span>
                  <span className="text-lg font-bold text-slate-900">1000 ₽</span>
                </li>
                <li className="flex justify-between items-center pb-4 border-b border-slate-100">
                  <span className="text-slate-600 font-medium">3 часа</span>
                  <span className="text-lg font-bold text-slate-900">1200 ₽</span>
                </li>
                <li className="flex justify-between items-center pb-2">
                  <span className="text-slate-600 font-medium">Дневной абонемент</span>
                  <span className="text-lg font-bold text-slate-900">1500 ₽</span>
                </li>
              </ul>
              <p className="text-xs text-slate-400 mt-6">* Цены указаны для ознакомления, тарифы могут быть изменены.</p>
            </div>

            {/* Беби-лифт */}
            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-2 bg-green-500"></div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Беби-лифт (Учебный склон)</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center pb-4 border-b border-slate-100">
                  <span className="text-slate-600 font-medium">1 подъем</span>
                  <span className="text-lg font-bold text-slate-900">50 ₽</span>
                </li>
                <li className="flex justify-between items-center pb-4 border-b border-slate-100">
                  <span className="text-slate-600 font-medium">1 час</span>
                  <span className="text-lg font-bold text-slate-900">300 ₽</span>
                </li>
                <li className="flex justify-between items-center pb-4 border-b border-slate-100">
                  <span className="text-slate-600 font-medium">2 часа</span>
                  <span className="text-lg font-bold text-slate-900">500 ₽</span>
                </li>
                <li className="flex justify-between items-center pb-4 border-b border-slate-100">
                  <span className="text-slate-600 font-medium">3 часа</span>
                  <span className="text-lg font-bold text-slate-900">700 ₽</span>
                </li>
                <li className="flex justify-between items-center pb-2">
                  <span className="text-slate-600 font-medium">Полдня (до/после 14:00)</span>
                  <span className="text-lg font-bold text-slate-900">800 ₽</span>
                </li>
              </ul>
              <div className="mt-6 flex items-start gap-2 text-sm text-amber-600 bg-amber-50 p-3 rounded-lg border border-amber-100">
                <Info size={18} className="shrink-0 mt-0.5" />
                <p>Экскурсионный подъем («банан» и «ватрушки» не предоставляются) — 150 ₽</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 anim-fade items-center">
          <div>
            <div className="relative h-80 rounded-[2rem] overflow-hidden shadow-xl">
              <Image 
                src="https://xn--80adxbs4h.xn--p1ai/wp-content/uploads/2024/02/slide-st-plus-1.webp" 
                alt="Прокат оборудования" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-900">Комфорт на горе</h3>
            <p className="text-slate-600 leading-relaxed">
              У подножия горы работает <strong>прокат горнолыжного и сноубордического оборудования</strong> (размеры от детских до взрослых). Опытные инструкторы всегда готовы поставить на лыжи новичков или помочь улучшить технику профессионалам.
            </p>
            <p className="text-slate-600 leading-relaxed">
              После активного катания гостей ждет уютное <strong>кафе</strong> с горячими напитками и выпечкой, а также настоящая <strong>Русская Баня</strong> для полного расслабления.
            </p>
            <div className="flex items-center gap-4 bg-slate-900 text-white p-4 rounded-2xl">
              <Clock size={24} className="text-blue-400" />
              <div>
                <p className="font-bold">График работы склона:</p>
                <p className="text-sm text-slate-300">Вторник-Воскресенье: 10:00 - 18:00 (Понедельник - Выходной)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
