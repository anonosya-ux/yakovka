'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Mountain, Heart, Star } from 'lucide-react';
import MapSection from '@/components/MapSection';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Parallax
      gsap.to('.hero-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      // Text fade in
      gsap.fromTo(
        textRef.current?.children || [],
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.2 }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col bg-[#fafafa]">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 hero-bg">
          <Image 
            src="https://xn--80adxbs4h.xn--p1ai/wp-content/uploads/2024/02/Ресторан-1.webp" 
            alt="Курорт Яковка" 
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center" ref={textRef}>
          <div className="mb-12 flex justify-center"><Breadcrumbs variant="dark" /></div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg tracking-tight">Сердце Алтая</h1>
          <p className="text-xl md:text-2xl text-blue-100 font-medium max-w-2xl mx-auto drop-shadow-md">
            Место, где природа встречается с комфортом, а сибирское гостеприимство становится философией.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">О загородном отеле «Яковка»</h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full" />
            <p className="text-lg text-slate-600 leading-relaxed">
              Загородный отель «Яковка» находится в знаменитом курортном городе Белокуриха, у подножия одноименной горы Яковка. Мы предлагаем нашим гостям комплексный зимний и летний семейный отдых в условиях невероятного домашнего уюта.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Чистейший горный воздух, журчание лесного ручья и пушистый снег зимой — идеальные составляющие для перезагрузки вдали от городского шума. Для проживающих действуют сезонные скидки и спецпредложения.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-3">
                <Mountain className="text-blue-600" size={32} />
                <h4 className="font-bold text-slate-900">У подножия горы</h4>
                <p className="text-sm text-slate-500">Прямой доступ к склону и подъемникам</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-3">
                <Heart className="text-red-500" size={32} />
                <h4 className="font-bold text-slate-900">Pet-Friendly</h4>
                <p className="text-sm text-slate-500">Возможно размещение с животными</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
            <Image 
              src="https://xn--80adxbs4h.xn--p1ai/wp-content/uploads/2024/02/slide-st-1.webp" 
              alt="Уютные номера" 
              fill
              className="object-cover"
            />
            {/* Glass Badge */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/20 backdrop-blur-xl border border-white/40 p-6 rounded-3xl text-white">
              <div className="flex items-center gap-2 mb-2">
                <Star className="fill-yellow-400 text-yellow-400" size={20} />
                <Star className="fill-yellow-400 text-yellow-400" size={20} />
                <Star className="fill-yellow-400 text-yellow-400" size={20} />
                <Star className="fill-yellow-400 text-yellow-400" size={20} />
                <Star className="fill-yellow-400 text-yellow-400" size={20} />
              </div>
              <p className="font-medium text-lg text-white/90">"Идеальное место для семейного отдыха"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Included */}
      <MapSection />
    </div>
  );
}
