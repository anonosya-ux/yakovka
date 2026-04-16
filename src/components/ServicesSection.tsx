'use client';

import { useEffect, useRef } from 'react';
import { Home, Utensils, Mountain, ShieldCheck, Coffee, Dog } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PhotoGallery from './ui/PhotoGallery';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'Домашний уют',
    description: 'Наш отель находится в далеке от городского шума. Где слышан звук ручья, где воздух чист и снег пушист.',
    icon: <Home className="text-primary" size={28} />
  },
  {
    title: 'Любимые блюда',
    description: 'Домашняя кухня порадует Вас заказными обедами и ужинами, а также исполнением Ваших пожеланий нашими поварами.',
    icon: <Utensils className="text-secondary" size={28} />
  },
  {
    title: 'Близко к склону',
    description: 'Вы всегда сможете выйти из отеля и сразу оказаться на склоне горы, здание отеля находится в пешей доступности от горнолыжного склона.',
    icon: <Mountain className="text-stone-500" size={28} />
  },
  {
    title: 'Территория под видеонаблюдением',
    description: 'Вы можете отдыхать спокойно, а мы присмотрим за вашим "железным конем".',
    icon: <ShieldCheck className="text-amber-600" size={28} />
  },
  {
    title: 'Прохладительные и горячие напитки',
    description: 'После дневного отдыха на природе вы можете позволить себе расслабиться в нашем уютном шале.',
    icon: <Coffee className="text-primary/70" size={28} />
  },
  {
    title: 'Можно с животными',
    description: 'Берите Вашего пушистого друга с собой! до 8 кг — 500 ₽/сутки, свыше 8 кг — 1000 ₽/сутки.',
    icon: <Dog className="text-stone-700" size={28} />
  }
];

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text sections
      gsap.fromTo(
        '.anim-text > *',
        { y: 30, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out",
          scrollTrigger: { trigger: '.anim-text', start: "top 80%" }
        }
      );

      // Animate features grid
      gsap.fromTo(
        '.feature-card',
        { y: 40, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: '.features-grid', start: "top 85%" }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const galleryImages = [
    '/images/gallery/IMG_4547-30-09-20-06-14.JPG',
    '/images/gallery/image-14-03-24-11-18.jpeg',
    '/images/gallery/DSC_6043.jpg',
    '/images/gallery/Красивые Девычки (1).jpg',
    '/images/gallery/FullSizeRender (10).jpeg',
    '/images/gallery/_6-59.jpg',
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative bg-white overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6">
        
        {/* Main Text Content */}
        <div className="max-w-4xl mx-auto text-center mb-24 anim-text" ref={textRef}>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-stone-900 mb-8">
            О горнолыжном курорте «Яковка»
          </h2>
          <p className="text-lg md:text-xl text-stone-600 font-light leading-relaxed mb-6">
            Загородный отель «Яковка» находится в курортном городе Белокуриха, по улице Угрюмова, у подножия одноименной горы Яковка. Предлагаем нашим гостям зимний и летний семейный отдых с детьми в условиях домашнего уюта и гостеприимства. Домашняя кухня, баня, зона барбекю, уютный зал для посиделок с друзьями.
          </p>
          <div className="flex flex-col md:flex-row gap-6 text-left my-10 bg-stone-50 rounded-3xl p-8 border border-stone-100">
            <div className="flex-1">
              <h4 className="font-heading font-bold text-xl text-stone-900 mb-3 border-b-2 border-primary/20 pb-2 inline-block">В зимний сезон</h4>
              <p className="text-stone-600 font-light text-sm leading-relaxed">
                Это полный комплекс услуг для активного горнолыжного отдыха. Расположение трасс на северной стороне – главный плюс данного склона (очень удобные спуски для начинающих, пологие и широкие склоны помогут освоить горные лыжи). Снежный покров держится дольше, чем на других склонах.
              </p>
            </div>
            <div className="flex-1">
              <h4 className="font-heading font-bold text-xl text-stone-900 mb-3 border-b-2 border-secondary/20 pb-2 inline-block">В летний период</h4>
              <p className="text-stone-600 font-light text-sm leading-relaxed">
                Работает открытый бассейн. Для спортсменов имеется гимнастический батут и спортивная площадка. Вас ждут увлекательные экскурсии и знакомство с достопримечательностями Белокурихи и Горного Алтая.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-24">
          <h3 className="font-heading text-3xl font-bold text-center text-stone-900 mb-12">У нас есть все необходимое для комфортного отдыха</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-lg transition-shadow border border-stone-200/60 flex flex-col items-start">
                <div className="bg-stone-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-stone-100">
                  {feature.icon}
                </div>
                <h4 className="font-heading font-bold text-xl text-stone-900 mb-3">{feature.title}</h4>
                <p className="text-stone-500 font-light text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Gallery Component Using the recently processed images */}
        <div className="mt-24 pt-16 border-t border-stone-100">
          <div className="text-center mb-12 anim-text">
            <h2 className="font-heading text-4xl font-bold tracking-tight text-stone-900 mb-4">Фотогалерея</h2>
            <p className="text-stone-500 font-light">Почувствуйте атмосферу отдыха на Алтае</p>
          </div>
          <PhotoGallery images={galleryImages} columns={3} />
        </div>

      </div>
    </section>
  );
}
