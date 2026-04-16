'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TrendingUp, BarChart3, Users, Building } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function InvestPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.invest-card', 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out', delay: 0.3 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 pt-32 pb-24" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="mb-12 flex justify-center"><Breadcrumbs variant="dark" /></div>
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6 uppercase tracking-widest">
            <TrendingUp size={16} /> Инвестиции
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">Yakovka Land</h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Уникальный девелоперский проект в санаторно-курортной зоне Белокурихи. Развитие премиальной инфраструктуры Горнолыжного комплекса «Яковка».
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="invest-card bg-slate-800/50 backdrop-blur-md border border-slate-700 p-10 rounded-[2.5rem] hover:bg-slate-800 transition-colors">
            <Building className="text-blue-500 mb-6" size={48} />
            <h3 className="text-2xl font-bold text-white mb-4">Строительство Шале</h3>
            <p className="text-slate-400">Возведение новых эко-домов из кедра, проектирование видовых апартаментов на склоне горы.</p>
          </div>
          <div className="invest-card bg-slate-800/50 backdrop-blur-md border border-slate-700 p-10 rounded-[2.5rem] hover:bg-slate-800 transition-colors">
            <BarChart3 className="text-pink-500 mb-6" size={48} />
            <h3 className="text-2xl font-bold text-white mb-4">Высокая рентабельность</h3>
            <p className="text-slate-400">Стабильный круглогодичный спрос (летом — здоровье и экскурсии, зимой — горные лыжи) гарантирует высокую доходность.</p>
          </div>
          <div className="invest-card bg-slate-800/50 backdrop-blur-md border border-slate-700 p-10 rounded-[2.5rem] hover:bg-slate-800 transition-colors">
            <Users className="text-emerald-500 mb-6" size={48} />
            <h3 className="text-2xl font-bold text-white mb-4">Партнерская модель</h3>
            <p className="text-slate-400">Приглашаем со-инвесторов для расширения курорта. Комплексное юридическое сопровождение сделки и прозрачная отчетность.</p>
          </div>
        </div>

        <div className="mt-20 p-12 bg-gradient-to-br from-blue-900/50 to-indigo-900/50 border border-blue-500/20 rounded-[3rem] text-center invest-card">
          <h2 className="text-3xl font-bold text-white mb-6">Готовы стать частью проекта?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для получения подробной презентации проекта Yakovka Land, расчетов окупаемости и генерального плана развития территории.
          </p>
          <a href="mailto:info@yakovka.ru" className="inline-flex items-center justify-center px-10 py-5 bg-blue-600 text-white hover:bg-blue-500 rounded-full text-lg font-semibold transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)]">
            Получить презентацию
          </a>
        </div>
      </div>
    </div>
  );
}
