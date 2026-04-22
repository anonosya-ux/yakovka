'use client';

import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import MapSection from '@/components/MapSection';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function ContactsPage() {
  return (
    <div className="bg-[#fafafa] pt-32 pb-0">
      <div className="container mx-auto px-6 mb-20">
        <Breadcrumbs variant="light" />
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-12 tracking-tight">Контакты</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col">
             <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
               <Phone size={24} />
             </div>
             <h3 className="text-lg font-bold text-slate-400 mb-2 uppercase tracking-wider text-sm">Телефон</h3>
             <a href="tel:+79609552100" className="text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors">+7 (960) 955-21-00</a>
             <a href="tel:+79090975209" className="text-xl font-medium text-slate-600 hover:text-blue-600 transition-colors mt-2">+7 (909) 097-52-09</a>
           </div>

           <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col">
             <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
               <Mail size={24} />
             </div>
             <h3 className="text-lg font-bold text-slate-400 mb-2 uppercase tracking-wider text-sm">Email</h3>
             <a href="mailto:valynkina.44@mail.ru" className="text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors">valynkina.44@mail.ru</a>
           </div>

           <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col">
             <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
               <MapPin size={24} />
             </div>
             <h3 className="text-lg font-bold text-slate-400 mb-2 uppercase tracking-wider text-sm">Адрес</h3>
             <p className="text-xl font-bold text-slate-900">Алтайский край,<br/>г. Белокуриха, ул. Угрюмова, д. 4</p>
           </div>

           <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col">
             <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
               <Clock size={24} />
             </div>
             <h3 className="text-lg font-bold text-slate-400 mb-2 uppercase tracking-wider text-sm">Режим работы</h3>
             <p className="text-xl font-bold text-slate-900">Круглосуточно</p>
             <p className="text-slate-500 mt-2">Заезд: с 14:00<br/>Выезд: до 12:00</p>
           </div>
        </div>

        {/* Route Block */}
        <div className="mt-16 bg-white p-10 md:p-12 rounded-[3xl] shadow-sm border border-stone-100 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none" />
           <h2 className="text-3xl font-bold text-stone-900 mb-8 border-b border-stone-100 pb-6">Как добраться</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             <div>
               <h3 className="flex items-center gap-2 font-bold text-lg mb-4 text-stone-800">
                 <span className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 text-sm">🚗</span>
                 На автомобиле
               </h3>
               <p className="text-stone-600 leading-relaxed">
                 Двигайтесь по улице Академика Мясникова до поворота на улицу Угрюмова. Далее следуйте вверх по указателям отеля «Яковка». 
                 <br/><br/>
                 <strong className="text-amber-600 font-bold flex items-center gap-2 mt-2">
                   ⚠️ Важно знать о дороге:
                 </strong>
                 <span className="text-sm mt-1 block">Последний участок пути (около 500 метров) — это крутой подъем в гору по гравийной дороге. В зависимости от погодных условий, в зимнее время для проезда может потребоваться уверенный навык вождения или полноприводный автомобиль. Мы всегда готовы организовать для вас трансфер от нижней площадки.</span>
               </p>
             </div>
             <div>
               <h3 className="flex items-center gap-2 font-bold text-lg mb-4 text-stone-800">
                 <span className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 text-sm">🚌</span>
                 Общественным транспортом
               </h3>
               <p className="text-stone-600 leading-relaxed mb-4">
                 До автовокзала г. Белокуриха регулярно ходят комфортабельные межгородские автобусы из Новосибирска (около 7 ч.), Барнаула (4 ч.), Бийска (1.5 ч.).
               </p>
               <p className="text-stone-600 leading-relaxed">
                 По прибытии на автовокзал Белокурихи рекомендуем воспользоваться местным такси (Яндекс.Такси/Местные службы) — время в пути до подножия горы Яковка составит примерно 10 минут.
               </p>
             </div>
           </div>
        </div>

        {/* Company Requisites Block */}
        <div className="mt-16 bg-slate-900 text-slate-300 p-10 md:p-16 rounded-[3rem] shadow-xl">
           <h2 className="text-3xl font-bold text-white mb-8">Реквизиты</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:text-base leading-relaxed">
             <div>
               <p className="mb-2"><span className="text-slate-500 w-32 inline-block">Организация:</span> <span className="text-white font-medium">ООО «Яковка»</span></p>
               <p className="mb-2"><span className="text-slate-500 w-32 inline-block">ИНН:</span> <span className="text-white font-medium">2203006670</span></p>
               <p className="mb-2"><span className="text-slate-500 w-32 inline-block">КПП:</span> <span className="text-white font-medium">220301001</span></p>
               <p className="mb-2"><span className="text-slate-500 w-32 inline-block">ОГРН:</span> <span className="text-white font-medium">1022200534272</span></p>
             </div>
             <div>
               <p className="mb-2"><span className="text-slate-500 w-40 inline-block">Юридический адрес:</span> <span className="text-white font-medium">659900, Алтайский край, город Белокуриха, улица Угрюмова, дом 4</span></p>
             </div>
           </div>
        </div>
      </div>
      
      {/* Shared Map Component */}
      <MapSection />
    </div>
  );
}
