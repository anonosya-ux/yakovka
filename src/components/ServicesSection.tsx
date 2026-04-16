'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChefHat, Flame, Snowflake, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 'restaurant',
    title: 'Ресторан «Яковка»',
    description: 'Авторская кухня, местные фермерские продукты и потрясающий вид на горы. Идеально подходит для романтических ужинов и семейных обедов.',
    icon: <ChefHat className="text-orange-500" size={24} />,
    image: 'https://xn--80adxbs4h.xn--p1ai/wp-content/uploads/2024/02/Ресторан-1.webp',
    accentColor: 'bg-orange-100',
    tags: ['Завтраки', 'Детское меню', 'Панорамный вид']
  },
  {
    id: 'banya',
    title: 'Русская баня на дровах',
    description: 'Настоящая кедровая баня с холодной купелью. Отличный способ расслабиться после активного дня на склонах или прогулок по алтайскому лесу.',
    icon: <Flame className="text-red-500" size={24} />,
    image: 'https://xn--80adxbs4h.xn--p1ai/wp-content/uploads/2024/02/Баня-1.webp',
    accentColor: 'bg-red-100',
    tags: ['Кедровый сруб', 'Веники', 'Купель']
  },
  {
    id: 'ski',
    title: 'Горнолыжный склон',
    description: 'Комплекс находится прямо у подножия бугельного подъемника. Прокат снаряжения, услуги инструкторов и подготовленные трассы.',
    icon: <Snowflake className="text-blue-500" size={24} />,
    image: 'https://xn--80adxbs4h.xn--p1ai/wp-content/uploads/2024/02/Гора-1.webp',
    accentColor: 'bg-blue-100',
    tags: ['Бугельный подъемник', 'Прокат', 'Инструкторы']
  }
];

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.service-row').forEach((row, i) => {
        const isEven = i % 2 === 0;
        const imageBlock = row.querySelector('.service-image');
        const textBlock = row.querySelector('.service-text');

        gsap.fromTo(
          imageBlock,
          { opacity: 0, x: isEven ? -50 : 50, scale: 0.95 },
          { 
            opacity: 1, x: 0, scale: 1, 
            duration: 1, 
            ease: "power2.out",
            scrollTrigger: {
              trigger: row,
              start: "top 75%",
            }
          }
        );

        gsap.fromTo(
          textBlock,
          { opacity: 0, x: isEven ? 50 : -50 },
          { 
            opacity: 1, x: 0, 
            duration: 1, 
            ease: "power2.out",
            delay: 0.2,
            scrollTrigger: {
              trigger: row,
              start: "top 75%",
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="py-24 md:py-32 relative bg-white overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">Инфраструктура комплекса</h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
            Всё, что нужно для полноценного курортного отдыха круглый год.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={service.id} 
                id={service.id === 'restaurant' ? 'restaurant' : undefined}
                className={`service-row flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-20`}
              >
                
                {/* Image Block */}
                <div className="service-image w-full lg:w-1/2 relative">
                  <div className={`absolute inset-0 ${service.accentColor} rounded-[3rem] -rotate-3 scale-105 opacity-50 blur-lg`} />
                  <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
                    <Image 
                      src={service.image} 
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </div>

                {/* Text Block */}
                <div className="service-text w-full lg:w-1/2 flex flex-col justify-center">
                  <div className={`w-14 h-14 ${service.accentColor} rounded-2xl flex items-center justify-center mb-6 shadow-sm`}>
                    {service.icon}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">{service.title}</h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-10">
                    {service.tags.map((tag, i) => (
                      <span key={i} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium border border-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors group self-start">
                    <span>Подробнее</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
