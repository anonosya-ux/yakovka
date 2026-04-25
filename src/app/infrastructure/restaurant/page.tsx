'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ChefHat, Leaf, Clock, UtensilsCrossed, Wine, Users, Music } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import CTABanner from '@/components/CTABanner';

export default function RestaurantPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.reveal-el', 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: 'power3.out' }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-background" ref={heroRef}>
      {/* Restaurant JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          "name": "Домашняя кухня «Яковка»",
          "description": "Авторская алтайская кухня из натуральных местных продуктов. Фермерские эко-продукты, стейк из марала, горный мёд.",
          "url": "https://yakovka.ru/infrastructure/restaurant",
          "telephone": "+7 (960) 955-21-00",
          "servesCuisine": ["Алтайская", "Русская", "Европейская"],
          "priceRange": "₽₽",
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
            "opens": "08:30",
            "closes": "22:00"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "ул. Угрюмова, д. 4",
            "addressLocality": "Белокуриха",
            "addressRegion": "Алтайский край",
            "postalCode": "659900",
            "addressCountry": "RU"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 51.993,
            "longitude": 84.983
          },
          "hasMenu": {
            "@type": "Menu",
            "hasMenuSection": [
              { "@type": "MenuSection", "name": "Горячие блюда", "hasMenuItem": [
                { "@type": "MenuItem", "name": "Стейк из марала", "description": "С ягодным соусом и печёным картофелем" }
              ]},
              { "@type": "MenuSection", "name": "Десерты", "hasMenuItem": [
                { "@type": "MenuItem", "name": "Медовая панакота", "description": "С горным мёдом и кедровыми орехами" }
              ]}
            ]
          }
        }) }}
      />
      <div className="relative h-[65vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-stone-900 z-0">
          <Image 
            src="/optimized/Виды/Кухня/Кухня-01.webp" 
            alt="Домашняя кухня Яковка" 
            fill
            className="object-cover opacity-60 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/40 to-stone-900/20" />
        </div>
        <div className="relative z-10 text-center px-6 reveal-el pt-16">
          <div className="flex justify-center -mt-8"><Breadcrumbs variant="dark" /></div>
          <ChefHat size={64} className="mx-auto mb-8 text-primary opacity-90 drop-shadow-lg mt-8" />
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl font-heading">
            Домашняя кухня <span className="text-primary">«Яковка»</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto">
            Авторская алтайская кухня из натуральных местных продуктов с панорамным видом на горы.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 reveal-el">
            <h2 className="font-heading text-4xl font-bold text-stone-900 tracking-tight">Домашняя кухня с алтайским характером</h2>
            <div className="w-16 h-1.5 bg-primary rounded-full" />
            <p className="text-lg text-stone-600 leading-relaxed">
              Наша домашняя кухня порадует вас заказными обедами и ужинами, а также индивидуальным исполнением ваших пожеланий нашими шеф-поварами. Мы гордимся тем, что используем экологически чистые, фермерские продукты от местных алтайских производителей.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              Уютный зал с камином идеально подходит для теплых семейных посиделок после активного дня на склоне, романтических ужинов или торжественных банкетов.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-2xl shadow-premium border border-stone-100 flex items-start gap-4">
                <Leaf className="text-primary shrink-0" size={28} />
                <div>
                  <h4 className="font-heading font-bold text-stone-900 mb-1">Эко-продукты</h4>
                  <p className="text-sm text-stone-500 leading-snug">Местное фермерское хозяйство и дикоросы</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-premium border border-stone-100 flex items-start gap-4">
                <UtensilsCrossed className="text-primary shrink-0" size={28} />
                <div>
                  <h4 className="font-heading font-bold text-stone-900 mb-1">Спец. меню</h4>
                  <p className="text-sm text-stone-500 leading-snug">Детское и диетическое меню по запросу</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative aspect-square lg:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-premium-lg reveal-el">
            <Image 
              src="/optimized/Виды/Кухня/Кухня-02.webp" 
              alt="Интерьер домашней кухни" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 right-10">
              <div className="bg-white/20 backdrop-blur-xl border border-white/30 p-6 rounded-3xl flex items-center gap-6 text-white text-lg">
                <div className="bg-primary/80 p-4 rounded-2xl shrink-0">
                  <Clock size={32} />
                </div>
                <div>
                  <p className="font-bold text-xl mb-1">Режим работы</p>
                  <p className="text-white/80">Ежедневно: с 08:30 до 22:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu highlights */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl font-bold text-stone-900">Популярные блюда</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 text-center">
              <div className="text-4xl mb-4">🥩</div>
              <h4 className="font-heading font-bold text-stone-800 mb-2">Стейк из марала</h4>
              <p className="text-stone-400 text-sm">С ягодным соусом и печёным картофелем</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 text-center">
              <div className="text-4xl mb-4">🍯</div>
              <h4 className="font-heading font-bold text-stone-800 mb-2">Медовая панакота</h4>
              <p className="text-stone-400 text-sm">С горным мёдом и кедровыми орехами</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 text-center">
              <div className="text-4xl mb-4">🫖</div>
              <h4 className="font-heading font-bold text-stone-800 mb-2">Алтайский чай</h4>
              <p className="text-stone-400 text-sm">Травяной сбор с чабрецом и мятой</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-premium border border-stone-100 flex items-start gap-4">
              <Wine className="text-primary shrink-0" size={24} />
              <div>
                <h4 className="font-heading font-bold text-stone-900 mb-1">Напитки</h4>
                <p className="text-sm text-stone-500">Травяные чаи, алтайские бальзамы, хвойные лимонады</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-premium border border-stone-100 flex items-start gap-4">
              <Users className="text-primary shrink-0" size={24} />
              <div>
                <h4 className="font-heading font-bold text-stone-900 mb-1">Банкетный зал</h4>
                <p className="text-sm text-stone-500">До 50 человек для свадеб и корпоративов</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-premium border border-stone-100 flex items-start gap-4">
              <Music className="text-primary shrink-0" size={24} />
              <div>
                <h4 className="font-heading font-bold text-stone-900 mb-1">Живая музыка</h4>
                <p className="text-sm text-stone-500">По пятницам и субботам</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner 
        title="Попробуйте вкусы Алтая" 
        subtitle="Завтрак включён в номера «Семейный» и «Семейный++». Забронируйте прямо сейчас!"
        variant="nature"
      />
    </div>
  );
}
