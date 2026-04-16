'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { PhoneCall, CreditCard, Clock, CheckCircle2 } from 'lucide-react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BookingInfoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".info-card",
        { y: 50, opacity: 0, rotationX: 10 },
        { 
          y: 0, opacity: 1, rotationX: 0, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 relative bg-white" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Как забронировать и оплатить?</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">Мы сделали процесс бронирования максимально простым и удобным для вас.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 [perspective:1000px]">
          
          {/* Card 1 */}
          <div className="info-card group relative bg-slate-50 rounded-[2rem] p-8 border border-slate-100 hover:bg-white hover:border-slate-200 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] transition-all duration-300">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <PhoneCall size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Связь с агентом</h3>
            <p className="text-slate-500 mb-6 text-sm leading-relaxed">
              Вы всегда можете связаться с нами напрямую для уточнения деталей. При бронировании от 3х суток действует скидка.
            </p>
            <div className="space-y-3">
              <a href="tel:+79609552100" className="flex items-center gap-3 text-slate-700 hover:text-blue-600 font-semibold bg-white p-3 rounded-xl border border-slate-100 shadow-sm transition-colors" aria-label="Позвонить на первый номер">
                +7 (960) 955-21-00
              </a>
              <a href="tel:+79090975209" className="flex items-center gap-3 text-slate-700 hover:text-blue-600 font-semibold bg-white p-3 rounded-xl border border-slate-100 shadow-sm transition-colors" aria-label="Позвонить на второй номер">
                +7 (909) 097-52-09
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="info-card group relative bg-slate-50 rounded-[2rem] p-8 border border-slate-100 hover:bg-white hover:border-slate-200 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] transition-all duration-300">
            <div className="w-14 h-14 bg-green-100 text-green-600 flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
              <CreditCard size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Оплата</h3>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                <span>Бронь осуществляется по предоплате 30% на сайте или агенту.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                <span>Оплата возможна картой, наличными при заселении.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                <span>Сотрудничаем с юридическими лицами (безналичный расчёт).</span>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="info-card group relative bg-slate-50 rounded-[2rem] p-8 border border-slate-100 hover:bg-white hover:border-slate-200 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] transition-all duration-300">
            <div className="w-14 h-14 bg-purple-100 text-purple-600 flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Заезд и выезд</h3>
            <div className="space-y-6 text-sm text-slate-500">
              <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                <span className="font-medium text-slate-600">Заезд (Check-in)</span>
                <span className="text-lg font-bold text-slate-900">с 14:00</span>
              </div>
              <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                <span className="font-medium text-slate-600">Выезд (Check-out)</span>
                <span className="text-lg font-bold text-slate-900">до 12:00</span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                *Ранний заезд и поздний выезд возможны по предварительному согласованию.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
