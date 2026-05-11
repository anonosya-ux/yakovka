'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mountain, Flame, Utensils, Snowflake, Heart, ShieldCheck } from 'lucide-react';
import dynamic from 'next/dynamic';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';

// Lazy loading тяжелого компонента галереи
const PhotoGallery = dynamic(() => import('@/components/ui/PhotoGallery'), {
  ssr: false, // Отключаем SSR для GSAP-зависимых компонентов
  loading: () => <div className="w-full h-64 bg-stone-100 animate-pulse rounded-3xl" />
});

gsap.registerPlugin(ScrollTrigger);

const timeline = [
  { year: '2015', title: 'Основание', desc: 'Открытие первых шале у подножия горы Яковка. Зарождение концепции семейного эко-отдыха.' },
  { year: '2018', title: 'Горнолыжный спуск', desc: 'Открытие собственной горнолыжной трассы и бугельного подъемника на прилегающей территории отеля.' },
  { year: '2021', title: 'Расширение', desc: 'Постройка новых премиальных номеров, запуск русской бани на дровах и домашней алтайской кухни.' },
  { year: '2024', title: 'Реновация', desc: 'Полное обновление номерного фонда, переход на стандарты сервиса премиум-класса и дальнейшее внедрение здоровой домашней пищи.' }
];

const advantages = [
  { icon: Mountain, title: 'У подножия горы', desc: 'Прямой доступ к склону и подъемникам.' },
  { icon: Flame, title: 'Русская баня', desc: 'Настоящая баня на дровах с летний неподогреваемый бассейню и зоной отдыха.' },
  { icon: Utensils, title: 'Домашняя кухня', desc: 'Блюда алтайской кухни из фермерских продуктов.' },
  { icon: Snowflake, title: 'Зимние трассы', desc: '2 собственные трассы: для новичков и опытных.' },
  { icon: Heart, title: 'Pet-Friendly', desc: 'Мы рады гостям с воспитанными питомцами.' },
  { icon: ShieldCheck, title: 'Безопасность', desc: 'Закрытая территория и видеонаблюдение.' },
];

export default function AboutClient() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline animation
      gsap.fromTo('.timeline-item', 
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power2.out',
          scrollTrigger: { trigger: '.timeline-container', start: 'top 80%' }
        }
      );
      
      // Adv animations
      gsap.fromTo('.adv-card', 
        { scale: 0.9, opacity: 0 },
        { 
          scale: 1, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.2)',
          scrollTrigger: { trigger: '.adv-container', start: 'top 80%' }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col bg-stone-50 min-h-screen">
      {/* Schema.org AboutPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "О загородном отеле «Яковка»",
            "description": "История и философия загородного отеля Яковка в Белокурихе.",
            "mainEntity": {
              "@type": "Hotel",
              "name": "Загородный отель «Яковка»"
            }
          })
        }}
      />

      <PageHero
        title="О курорте"
        subtitle="Место, где первозданная природа Алтая встречается с безупречным комфортом, а сибирское гостеприимство становится философией."
        badge="🌿 Философия отдыха"
        imageSrc="/optimized/Мероприятия/Горные лыжи/Горные лыжи-02.webp"
        imageAlt="Курорт Яковка"
        breadcrumbs={[{ label: 'О курорте' }]}
      />

      {/* История / Философия */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">Сердце Алтая</h2>
            <p className="text-lg text-stone-500 leading-relaxed font-light">
              Загородный отель «Яковка» находится в знаменитом курортном городе Белокуриха, у подножия одноименной горы. Мы предлагаем нашим гостям комплексный зимний и летний отдых в условиях невероятного домашнего уюта.
            </p>
            <p className="text-lg text-stone-500 leading-relaxed font-light">
              Чистейший горный воздух, журчание лесного ручья и пушистый снег зимой — идеальные составляющие для перезагрузки вдали от городского шума.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-stone-200 mt-8">
              <div>
                <span className="block font-heading text-4xl font-bold text-primary mb-2">9+</span>
                <span className="text-sm font-semibold text-stone-500 uppercase tracking-wider">Лет принимаем гостей</span>
              </div>
              <div>
                <span className="block font-heading text-4xl font-bold text-primary mb-2">30</span>
                <span className="text-sm font-semibold text-stone-500 uppercase tracking-wider">Уютных номеров</span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative h-[500px] md:h-[650px] rounded-[3rem] overflow-hidden shadow-2xl">
            <Image 
              src="/optimized/Виды/Природа/Природа-03.webp"
              alt="Уютные номера" 
              fill
              className="object-cover"
            />
            {/* Glassmorphism Philosophy Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/20 backdrop-blur-xl border border-white/40 p-8 rounded-3xl text-white">
              <p className="font-heading font-medium text-xl md:text-2xl italic leading-relaxed">
                "Наша миссия — создать пространство, где каждый гость чувствует себя как дома, но с сервисом премиум-отеля."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Наши преимущества */}
      <section className="py-24 bg-white border-y border-stone-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">Почему мы</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-stone-900">
              Наши преимущества
            </h2>
          </div>

          <div className="adv-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {advantages.map((adv, i) => (
              <div key={i} className="adv-card bg-stone-50 p-8 rounded-[2rem] border border-stone-100 hover:shadow-premium transition-shadow group">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <adv.icon className="text-primary w-7 h-7" />
                </div>
                <h4 className="font-bold text-xl text-stone-900 mb-3">{adv.title}</h4>
                <p className="text-stone-500 leading-relaxed font-light">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Таймлайн истории */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">Развитие</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              История Яковки
            </h2>
          </div>

          <div className="timeline-container max-w-4xl mx-auto relative">
            {/* Вертикальная линия */}
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-stone-800 transform md:-translate-x-1/2" />
            
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div key={i} className={`timeline-item flex flex-col md:flex-row items-start ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 relative`}>
                  <div className="hidden md:block w-1/2" />
                  
                  {/* Dot */}
                  <div className="absolute left-[15px] md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 mt-2 shadow-[0_0_15px_rgba(202,138,4,0.5)] z-10" />
                  
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 flex flex-col pt-1">
                    <span className="text-primary font-heading text-2xl font-bold mb-2">{item.year}</span>
                    <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                    <p className="text-stone-400 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Галерея (переиспользуем PhotoGallery) */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6 mb-12 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-stone-900">Атмосфера курорта</h2>
        </div>
        <PhotoGallery images={[
          '/optimized/Виды/Фасады/Фасады-01.webp',
          '/optimized/Виды/Природа/Природа-01.webp',
          '/optimized/Виды/Бассейн/Бассейн-01.webp',
          '/optimized/Виды/Кухня/Кухня-01.webp',
          '/optimized/Виды/Фасады/Фасады-03.webp',
          '/optimized/Виды/Природа/Природа-02.webp',
        ]} columns={3} />
      </section>

      <CTABanner 
        title="Готовы отдохнуть?" 
        subtitle="Забронируйте номер прямо сейчас и окунитесь в атмосферу настоящего алтайского уюта."
        buttonText="Подобрать номер"
        buttonLink="/rooms"
        variant="primary"
      />
    </div>
  );
}
