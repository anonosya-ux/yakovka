'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Mail } from 'lucide-react';
import { YakovkaLogo } from '@/components/Logo';

export function Footer() {
  return (
    <footer className="relative bg-stone-950 text-stone-300 py-20 overflow-hidden pb-28 md:pb-20">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-primary/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="container relative z-10 mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-10">
        {/* Brand Column */}
        <div className="lg:col-span-2">
          <YakovkaLogo className="w-[72px] h-[72px] mb-6 opacity-90" />
          <p className="text-stone-400 text-sm leading-relaxed max-w-xs mb-6">
            Загородный отель «Яковка» — семейный горнолыжный курорт у подножия горы в Белокурихе, Алтайский край.
          </p>
          <div className="space-y-3">
            <a href="tel:+79609552100" className="flex items-center gap-3 text-xl font-bold text-white hover:text-primary transition-colors">
              <Phone size={18} className="text-primary" />
              +7 (960) 955-21-00
            </a>
            <a href="tel:+79090975209" className="flex items-center gap-3 text-lg text-stone-300 hover:text-primary transition-colors">
              <Phone size={16} className="text-stone-500" />
              +7 (909) 097-52-09
            </a>
            <a href="mailto:valynkina.44@mail.ru" className="flex items-center gap-3 text-lg text-stone-300 hover:text-primary transition-colors mt-2">
              <Mail size={16} className="text-stone-500" />
              valynkina.44@mail.ru
            </a>
          </div>
          <div className="flex items-start gap-3 mt-4 text-stone-400 text-sm">
            <MapPin size={16} className="shrink-0 mt-0.5 text-stone-500" />
            <span>Алтайский край, г. Белокуриха, ул. Угрюмова, д. 4</span>
          </div>
        </div>

        {/* Курорт */}
        <div>
          <h4 className="text-white font-heading font-bold mb-6 text-lg tracking-wide">Курорт</h4>
          <ul className="space-y-3.5 text-sm text-stone-400">
            <li><Link href="/about" className="hover:text-white transition-colors">О курорте</Link></li>
            <li><Link href="/rooms" className="hover:text-white transition-colors">Номера и цены</Link></li>
            <li><Link href="/season" className="hover:text-white transition-colors">Горнолыжный сезон</Link></li>
            <li><Link href="/summer" className="hover:text-white transition-colors">Летний отдых</Link></li>
            <li><Link href="/gallery" className="hover:text-white transition-colors">Фотогалерея</Link></li>
            <li><Link href="/reviews" className="hover:text-white transition-colors">Отзывы гостей</Link></li>
            <li><Link href="/invest" className="hover:text-white transition-colors">Инвестиционный проект</Link></li>
          </ul>
        </div>
        
        {/* Услуги */}
        <div>
          <h4 className="text-white font-heading font-bold mb-6 text-lg tracking-wide">Услуги</h4>
          <ul className="space-y-3.5 text-sm text-stone-400">
            <li><Link href="/infrastructure/restaurant" className="hover:text-white transition-colors">Ресторан</Link></li>
            <li><Link href="/infrastructure/banya" className="hover:text-white transition-colors">Русская баня</Link></li>
            <li><Link href="/infrastructure/ski" className="hover:text-white transition-colors">Горнолыжные трассы</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Доп. услуги</Link></li>
            <li><Link href="/excursions" className="hover:text-white transition-colors">Экскурсии</Link></li>
            <li><Link href="/offers" className="hover:text-white transition-colors">Спецпредложения</Link></li>
            <li><Link href="/events" className="hover:text-white transition-colors">Мероприятия</Link></li>
          </ul>
        </div>

        {/* Информация */}
        <div>
          <h4 className="text-white font-heading font-bold mb-6 text-lg tracking-wide">Информация</h4>
          <ul className="space-y-3.5 text-sm text-stone-400">
            <li><Link href="/faq" className="hover:text-white transition-colors">Вопросы и ответы</Link></li>
            <li><Link href="/how-to-get" className="hover:text-white transition-colors">Как добраться</Link></li>
            <li><Link href="/contacts" className="hover:text-white transition-colors">Контакты</Link></li>
            <li><Link href="/legal/rules" className="hover:text-white transition-colors">Правила проживания</Link></li>
            <li><Link href="/legal/payment" className="hover:text-white transition-colors">Способы оплаты</Link></li>
            <li><Link href="/legal/offer" className="hover:text-white transition-colors">Публичная оферта</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="container relative z-10 mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-[13px] text-stone-500">
        <p>© {new Date().getFullYear()} Загородный отель «Яковка». Белокуриха, Алтайский край.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/legal/privacy" className="hover:text-stone-300 transition-colors">Политика конфиденциальности</Link>
        </div>
      </div>
    </footer>
  );
}
