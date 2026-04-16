'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Users, GlassWater, Building, ChevronRight, Check } from 'lucide-react';
import { CallbackModal } from '@/components/CallbackModal';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function EventsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white pt-24 pb-24">
      <div className="container mx-auto px-6">
        <Breadcrumbs variant="light" />
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24 mt-8">
          <div className="w-full lg:w-1/2">
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
              Ваше идеальное <span className="text-blue-600">мероприятие</span> на Алтае
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Мы предлагаем уникальную загородную локацию для проведения корпоративов, свадеб, юбилеев, ретритов и тимбилдингов. 
              Природа, премиальный сервис и индивидуальный подход к каждому гостю.
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-lg text-slate-700 font-medium">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0"><Check size={16}/></div>
                Вместимость банкетного зала до 60 человек
              </li>
              <li className="flex items-center gap-3 text-lg text-slate-700 font-medium">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0"><Check size={16}/></div>
                Варианты рассадки под ваш формат
              </li>
              <li className="flex items-center gap-3 text-lg text-slate-700 font-medium">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0"><Check size={16}/></div>
                Размещение гостей в номерах и шале
              </li>
            </ul>

            <button onClick={() => setIsModalOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:-translate-y-1 shadow-[0_10px_25px_rgba(37,99,235,0.4)]">
              Рассчитать стоимость
            </button>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4 h-[600px]">
              <div className="relative rounded-3xl overflow-hidden shadow-lg h-full">
                <Image src="https://xn--80adxbs4h.xn--p1ai/wp-content/uploads/2024/02/Ресторан-1.webp" alt="Банкет Ресторан" fill className="object-cover" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="relative rounded-3xl overflow-hidden shadow-lg h-1/2">
                  <Image src="https://xn--80adxbs4h.xn--p1ai/wp-content/uploads/2024/02/slide-family-plus-1.webp" alt="Размещение гостей" fill className="object-cover" />
                </div>
                <div className="bg-slate-900 rounded-3xl p-8 h-1/2 text-white flex flex-col justify-center">
                  <Sparkles className="text-yellow-400 mb-4" size={32} />
                  <h3 className="text-2xl font-bold mb-2">Под ключ</h3>
                  <p className="text-slate-400">Организуем банкет, подберем ведущего и оформим зал.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="p-8 border border-slate-100 bg-slate-50 rounded-[2rem] hover:shadow-xl transition-shadow">
              <Users className="text-indigo-500 mb-6" size={40}/>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Корпоративы</h3>
              <p className="text-slate-600">Командообразующие мероприятия, новогодние корпоративы и выездные сессии для вашего бизнеса.</p>
           </div>
           <div className="p-8 border border-slate-100 bg-slate-50 rounded-[2rem] hover:shadow-xl transition-shadow">
              <GlassWater className="text-pink-500 mb-6" size={40}/>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Свадьбы и юбилеи</h3>
              <p className="text-slate-600">Организация торжества по индивидуальному сценарию с праздничным меню от шеф-повара.</p>
           </div>
           <div className="p-8 border border-slate-100 bg-slate-50 rounded-[2rem] hover:shadow-xl transition-shadow">
              <Building className="text-teal-500 mb-6" size={40}/>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Ретриты</h3>
              <p className="text-slate-600">Тишина, природа и чистый воздух Горного Алтая — идеальные условия для йога-туров и ретритов.</p>
           </div>
        </div>

      </div>
      <CallbackModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
