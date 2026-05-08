'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PartyPopper, Users, Gift, ChefHat, ArrowUpRight, Phone, CheckCircle2 } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import CallbackModal from '@/components/CallbackModal';

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    title: 'Свадьбы на Алтае',
    desc: 'Отпразднуйте создание новой семьи вдали от городской суеты, на фоне потрясающих горных пейзажей. Летняя веранда и банкетный зал до 50 гостей, а также зеленая зона для выездных регистраций. Мы организуем банкет, декор и размещение ваших гостей.',
    icon: PartyPopper,
    image: '/optimized/Мероприятия/Свадьбы/Свадьбы-02.webp',
    features: ['Площадка для регистрации', 'Летняя веранда', 'Праздничный банкет'],
    reverse: false
  },
  {
    title: 'Корпоративы и Тимбилдинг',
    desc: 'Выездные корпоративы на базе ГЛК «Яковка» — это идеальный баланс работы и активного отдыха. Спортивные состязания, горные лыжи зимой и походы летом. Для официальной части есть пространство с проектором и Wi-Fi.',
    icon: Users,
    image: '/optimized/Мероприятия/Корпоративы/Корпоратив-01.png',
    features: ['Активный отдых', 'Пространство для тренингов', 'Организация питания'],
    reverse: true
  },
  {
    title: 'Дни Рождения и Юбилеи',
    desc: 'Проведите свой особенный день в кругу близких. Арендуйте шале или коттедж, закажите праздничный ужин в домашняя кухняе или устройте барбекю в оборудованной мангальной зоне. Именинникам предоставляются специальные скидки.',
    icon: Gift,
    image: '/optimized/Мероприятия/Дни_рождения/День_рождения-01.png',
    features: ['Скидки именинникам', 'Аренда коттеджа', 'Мангальные зоны'],
    reverse: false
  }
];

export default function EventsClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;
      
      gsap.utils.toArray('.event-block').forEach((block: any) => {
        gsap.fromTo(block, 
          { y: isMobile ? 20 : 50, opacity: 0 }, 
          { 
            y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: block, start: 'top 85%' }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 pb-24" ref={containerRef}>
      <PageHero
        title="Мероприятия"
        subtitle="Свадьбы, корпоративы, дни рождения и тимбилдинги на фоне потрясающей природы Алтая. Мы организуем ваше идеальное событие."
        badge="🎉 Праздник в горах"
        imageSrc="/optimized/Мероприятия/Свадьбы/Свадьбы-01.webp"
        imageAlt="Свадьбы и Мероприятия Яковка"
        breadcrumbs={[{ label: 'Мероприятия' }]}
      />

      <div className="container mx-auto px-6 mt-24">
        {events.map((ev, idx) => (
          <div key={idx} className={`event-block max-w-6xl mx-auto bg-white rounded-[3rem] overflow-hidden shadow-sm border border-stone-100 hover:shadow-premium transition-shadow mb-16 flex flex-col ${ev.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
            <div className="lg:w-1/2 relative h-80 lg:h-auto">
              <Image 
                src={ev.image} 
                alt={ev.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center bg-white">
              <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-stone-100">
                <ev.icon className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-stone-900 mb-6">{ev.title}</h2>
              <p className="text-stone-500 leading-relaxed font-light mb-8 text-lg">
                {ev.desc}
              </p>
              <ul className="space-y-4 mb-10">
                {ev.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
              <Button onClick={() => setIsCallbackModalOpen(true)} className="self-start px-8 py-6 rounded-2xl bg-stone-900 text-white hover:bg-primary text-lg font-bold shadow-xl transition-colors">
                Оставить заявку
              </Button>
            </div>
          </div>
        ))}

        {/* Банкетное меню (Ссылка на домашняя кухня) */}
        <div className="event-block max-w-6xl mx-auto mt-24">
          <Link href="/infrastructure/restaurant" className="group block relative rounded-[3rem] overflow-hidden shadow-xl shadow-stone-200/50 border border-stone-100 h-[400px]">
            <Image 
              src="/optimized/Виды/Кухня/Кухня-01.webp" 
              alt="Банкетное меню домашняя кухняа Яковка"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-[1500ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/60 to-transparent" />
            <div className="absolute inset-0 p-10 md:p-16 flex flex-col justify-center w-full md:w-2/3">
              <ChefHat className="w-12 h-12 text-primary mb-6" />
              <h3 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Банкетное меню</h3>
              <p className="text-stone-300 text-lg md:text-xl font-light leading-relaxed mb-8">
                Наш шеф-повар подготовил специальное банкетное меню с блюдами алтайской кухни из свежайших фермерских продуктов. Мы учтем все ваши пожелания и вкусовые предпочтения.
              </p>
              <div className="flex items-center gap-3 text-white font-bold text-lg group-hover:text-primary transition-colors">
                Посмотреть меню домашняя кухняа <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>
          </Link>
        </div>

      </div>

      <CallbackModal isOpen={isCallbackModalOpen} onClose={() => setIsCallbackModalOpen(false)} />
    </div>
  );
}
