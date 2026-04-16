'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Users, PartyPopper, HeartHandshake, Tent, Award, Building, Phone } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/button';
import CallbackModal from '@/components/CallbackModal';
import gsap from 'gsap';

export default function EventsPage() {
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);
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
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Проведение мероприятий</h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Шикарная природа, чистейший горный воздух и развитая инфраструктура: Загородный отель «Яковка» 
            — это идеальное место для вашего торжества, выездного корпоратива или спортивных сборов.
          </p>
        </div>

        {/* Corporate Section */}
        <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 mb-16 anim-fade flex flex-col md:flex-row border border-slate-100">
          <div className="md:w-1/2 relative h-64 md:h-auto">
            <Image 
              src="https://xn--80adxbs4h.xn--p1ai/wp-content/uploads/2024/02/slide-st-plus-1.webp" 
              alt="Корпоративы"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
            <div className="bg-blue-50 text-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Building size={24} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Корпоративы</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Около 80% компаний — это компании, деятельность которых основана на командной работе. Известный всем
              Тимбилдинг на сплочение коллектива как правило проводят в формате выездного мероприятия.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              У ГЛК «Яковка» есть огромный опыт и подходящая площадка для проведения летних и зимних корпоративов на природе. 
              Корпоративное мероприятие на нашей базе — это отличный шанс совместить приятное с полезным.
            </p>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <span className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Нам доверяют</span>
              <p className="font-semibold text-slate-800">
                «Алтайская Бурёнка», «Барнаульский пивоваренный завод», «Курорт Белокуриха», Санаторий «Россия» и многие другие.
              </p>
            </div>
          </div>
        </div>

        {/* Weddings Section */}
        <div className="max-w-6xl mx-auto bg-slate-900 text-white rounded-[2.5rem] overflow-hidden shadow-2xl mb-16 anim-fade flex flex-col md:flex-row-reverse border border-slate-800">
          <div className="md:w-1/2 relative h-64 md:h-auto">
            <Image 
              src="https://xn--80adxbs4h.xn--p1ai/wp-content/uploads/2024/02/slide-family-1.webp" 
              alt="Свадьбы на Алтае"
              fill
              className="object-cover opacity-80 mix-blend-screen"
            />
          </div>
          <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
            <div className="bg-white/10 text-pink-400 w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-white/20">
              <PartyPopper size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Свадьбы на Алтае</h2>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Отпразднуйте создание новой семьи в кругу самых близких людей вдали от городской суеты, 
              на фоне потрясающих горных пейзажей. Наш комплекс предлагает две живописные площадки:
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1"><Tent className="text-pink-400" size={24} /></div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Летняя веранда</h4>
                  <p className="text-white/60">Вместимость до 60 гостей. Потрясающий вид на горы и свежий воздух.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1"><Building className="text-pink-400" size={24} /></div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Банкетный зал кафе</h4>
                  <p className="text-white/60">Вместимость до 50 гостей. Уютная атмосфера и меню от шеф-повара.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sports camps & New Year */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 anim-fade mb-16">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col h-full">
            <div className="bg-orange-50 text-orange-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Award size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Спортивные сборы</h3>
            <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
              Приглашаем команды по горнолыжным и другим видам спорта на сборы (летом, зимой и в межсезонье). 
              Мы организуем проживание в номерах различной категории, 3х-разовое питание и предоставляем доступ 
              к нашей инфраструктуре.
            </p>
            <Button onClick={() => setIsCallbackModalOpen(true)} variant="outline" className="w-full sm:w-auto self-start rounded-xl">Узнать условия для групп</Button>
          </div>

          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col h-full">
            <div className="bg-blue-50 text-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <HeartHandshake size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Новогодние праздники</h3>
            <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
              Встречайте Новый Год в настоящей зимней сказке! Бронирование на новогодние каникулы лучше 
              планировать заранее — мы готовим специальную программу, праздничный ужин и, конечно, 
              ежедневное катание по свежему снегу.
            </p>
            <Button onClick={() => setIsCallbackModalOpen(true)} variant="outline" className="w-full sm:w-auto self-start rounded-xl">Связаться с нами</Button>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto text-center anim-fade bg-blue-600 text-white rounded-3xl p-10 md:p-16 shadow-2xl shadow-blue-600/30">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Запланируйте ваше событие</h2>
          <p className="text-blue-100 mb-10 text-lg">
            Оставьте заявку, и мы подготовим для вас индивидуальное коммерческое предложение, ответим на все вопросы и поможем организовать идеальное мероприятие.
          </p>
          <Button onClick={() => setIsCallbackModalOpen(true)} size="lg" className="bg-white text-blue-600 hover:bg-slate-50 px-8 py-6 rounded-xl text-lg w-full sm:w-auto shadow-xl">
            <Phone className="mr-2" />
            Оставить заявку на мероприятие
          </Button>
        </div>
      </div>

      <CallbackModal isOpen={isCallbackModalOpen} onClose={() => setIsCallbackModalOpen(false)} />
    </div>
  );
}
