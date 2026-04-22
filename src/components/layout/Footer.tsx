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
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          {/* Social Links */}
          <a href="https://t.me/yakovka_hotel" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="hover:text-white transition-colors" title="Telegram">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
          </a>
          <a href="https://wa.me/79609552100" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-white transition-colors" title="WhatsApp">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
          <a href="https://yandex.ru/maps/org/yakovka/1062999531/" target="_blank" rel="noopener noreferrer" aria-label="Яндекс.Карты" className="hover:text-white transition-colors" title="Яковка на Яндекс.Картах">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          </a>
          <span className="text-stone-700">|</span>
          <Link href="/legal/privacy" className="hover:text-stone-300 transition-colors">Политика конфиденциальности</Link>
        </div>
      </div>
    </footer>
  );
}
