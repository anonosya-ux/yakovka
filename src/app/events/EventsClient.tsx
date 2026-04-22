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
    <div className="min-h-screen bg-background pt-24 pb-24" ref={containerRef}>
      <div className="container mx-auto px-6">
        <Breadcrumbs variant="light" />
        
        <div className="mb-16 mt-8 max-w-4xl mx-auto text-center anim-fade">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-stone-900 mb-6 tracking-tight">Проведение мероприятий</h1>
          <p className="text-lg text-stone-600 mb-8 leading-relaxed font-light">
            Шикарная природа, чистейший горный воздух и развитая инфраструктура: Загородный отель «Яковка» 
            — это идеальное место для вашего торжества, выездного корпоратива или спортивных сборов.
          </p>
        </div>

        {/* Corporate Section */}
        <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-stone-200/50 mb-16 anim-fade flex flex-col md:flex-row border border-stone-200/60">
          <div className="md:w-1/2 relative h-64 md:h-auto">
            <Image 
              src="/images/gallery/IMG_4760.jpg" 
              alt="Корпоративы"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
            <div className="bg-primary/5 text-primary w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Building size={24} />
            </div>
            <h2 className="font-heading text-3xl font-bold text-stone-900 mb-4">Корпоративы</h2>
            <p className="text-stone-600 mb-6 leading-relaxed font-light">
              Около 80% компаний — это компании, деятельность которых основана на командной работе. Известный всем
              Тимбилдинг на сплочение коллектива как правило проводят в формате выездного мероприятия.
            </p>
            <p className="text-stone-600 mb-8 leading-relaxed font-light">
              У ГЛК «Яковка» есть огромный опыт и подходящая площадка для проведения летних и зимних корпоративов на природе. 
              Корпоративное мероприятие на нашей базе — это отличный шанс совместить приятное с полезным.
            </p>
            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
              <span className="block text-sm font-bold text-stone-400 uppercase tracking-widest mb-3">Нам доверяют</span>
              <p className="font-semibold text-stone-800">
                «Алтайская Бурёнка», «Барнаульский пивоваренный завод», «Курорт Белокуриха», Санаторий «Россия» и многие другие.
              </p>
            </div>
          </div>
        </div>

        {/* Weddings Section */}
        <div className="max-w-6xl mx-auto bg-stone-900 text-stone-50 rounded-[2.5rem] overflow-hidden shadow-2xl mb-16 anim-fade flex flex-col md:flex-row-reverse border border-stone-800">
          <div className="md:w-1/2 relative h-64 md:h-auto">
            <Image 
              src="/images/gallery/_6-1.jpg" 
              alt="Свадьбы на Алтае"
              fill
              className="object-cover opacity-80 mix-blend-screen"
            />
          </div>
          <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
            <div className="bg-white/10 text-amber-500 w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-white/20">
              <PartyPopper size={24} />
            </div>
            <h2 className="font-heading text-3xl font-bold text-white mb-4">Свадьбы на Алтае</h2>
            <p className="text-stone-300 mb-8 leading-relaxed tracking-wide font-light">
              Отпразднуйте создание новой семьи в кругу самых близких людей вдали от городской суеты, 
              на фоне потрясающих горных пейзажей. Наш комплекс предлагает две живописные площадки:
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1"><Tent className="text-amber-500" size={24} /></div>
                <div>
                  <h4 className="font-heading font-bold text-xl mb-1">Летняя веранда</h4>
                  <p className="text-white/60">Вместимость до 60 гостей. Потрясающий вид на горы и свежий воздух.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1"><Building className="text-amber-500" size={24} /></div>
                <div>
                  <h4 className="font-heading font-bold text-xl mb-1">Банкетный зал кафе</h4>
                  <p className="text-white/60">Вместимость до 50 гостей. Уютная атмосфера и меню от шеф-повара.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1"><PartyPopper className="text-amber-500" size={24} /></div>
                <div>
                  <h4 className="font-heading font-bold text-xl mb-1">Зеленая зона для регистраций</h4>
                  <p className="text-white/60">Живописная лужайка на фоне хвойного леса, идеально для выездной регистрации.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sports camps & New Year */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 anim-fade mb-16">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-md transition-shadow border border-stone-200/60 flex flex-col h-full">
            <div className="bg-primary/5 text-primary w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Award size={24} />
            </div>
            <h3 className="font-heading text-2xl font-bold text-stone-900 mb-4">Спортивные сборы</h3>
            <p className="text-stone-600 leading-relaxed mb-6 font-light flex-grow">
              Приглашаем команды по горнолыжным и другим видам спорта на сборы (летом, зимой и в межсезонье). 
              Мы организуем проживание в номерах различной категории, 3х-разовое питание и предоставляем доступ 
              к нашей инфраструктуре.
            </p>
            <Button onClick={() => setIsCallbackModalOpen(true)} variant="outline" className="w-full border-stone-200 text-stone-700 hover:text-primary hover:border-primary sm:w-auto self-start rounded-xl font-medium shadow-sm">Узнать условия для групп</Button>
          </div>

          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-md transition-shadow border border-stone-200/60 flex flex-col h-full">
            <div className="bg-primary/5 text-primary w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <HeartHandshake size={24} />
            </div>
            <h3 className="font-heading text-2xl font-bold text-stone-900 mb-4">Новогодние праздники</h3>
            <p className="text-stone-600 leading-relaxed font-light mb-6 flex-grow">
              Встречайте Новый Год в настоящей зимней сказке! Бронирование на новогодние каникулы лучше 
              планировать заранее — мы готовим специальную программу, праздничный ужин и, конечно, 
              ежедневное катание по свежему снегу.
            </p>
            <Button onClick={() => setIsCallbackModalOpen(true)} variant="outline" className="w-full border-stone-200 text-stone-700 hover:text-primary hover:border-primary sm:w-auto self-start rounded-xl font-medium shadow-sm">Связаться с нами</Button>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto text-center anim-fade bg-primary text-primary-foreground rounded-[2.5rem] p-10 md:p-16 shadow-2xl shadow-primary/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-stone-900/10" />
          <div className="relative z-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Запланируйте ваше событие</h2>
            <p className="text-primary-foreground/90 mb-10 text-lg font-light">
              Оставьте заявку, и мы подготовим для вас индивидуальное коммерческое предложение, ответим на все вопросы и поможем организовать идеальное мероприятие.
            </p>
            <Button onClick={() => setIsCallbackModalOpen(true)} size="lg" className="bg-white text-primary hover:bg-stone-50 px-8 py-6 rounded-xl text-lg font-bold w-full sm:w-auto shadow-xl transition-transform hover:-translate-y-1">
              <Phone className="mr-2" />
              Оставить заявку
            </Button>
          </div>
        </div>
      </div>

      <CallbackModal isOpen={isCallbackModalOpen} onClose={() => setIsCallbackModalOpen(false)} />
    </div>
  );
}
