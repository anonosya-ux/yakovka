'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Mail, MessageCircle, ShieldCheck } from 'lucide-react';
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
          <h4 className="text-white font-heading font-bold mb-6 text-lg tracking-wide">О курорте</h4>
          <ul className="space-y-3.5 text-sm text-stone-400">
            <li><Link href="/about" className="hover:text-white transition-colors">Об отеле</Link></li>
            <li><Link href="/rooms" className="hover:text-white transition-colors">Номера и цены</Link></li>
            <li><Link href="/about/history" className="hover:text-white transition-colors">История Яковки</Link></li>
            <li><Link href="/gallery" className="hover:text-white transition-colors">Фотогалерея</Link></li>
            <li><Link href="/reviews" className="hover:text-white transition-colors">Отзывы гостей</Link></li>
            <li><Link href="/offers" className="hover:text-white transition-colors">Спецпредложения</Link></li>
          </ul>
        </div>
        
        {/* Чем заняться */}
        <div>
          <h4 className="text-white font-heading font-bold mb-6 text-lg tracking-wide">Чем заняться</h4>
          <ul className="space-y-3.5 text-sm text-stone-400">
            <li><Link href="/winter" className="hover:text-white transition-colors">Зимний отдых и гора</Link></li>
            <li><Link href="/summer" className="hover:text-white transition-colors">Летний отдых</Link></li>
            <li><Link href="/infrastructure/banya" className="hover:text-white transition-colors">Русская баня</Link></li>
            <li><Link href="/infrastructure/restaurant" className="hover:text-white transition-colors">Домашняя кухня</Link></li>
            <li><Link href="/excursions" className="hover:text-white transition-colors">Экскурсии по Алтаю</Link></li>
            <li><Link href="/events" className="hover:text-white transition-colors">События и корпоративы</Link></li>
          </ul>
        </div>

        {/* Правовая информация */}
        <div>
          <h4 className="text-white font-heading font-bold mb-6 text-lg tracking-wide">Правовая информация</h4>
          <ul className="space-y-3.5 text-sm text-stone-400">
            <li><Link href="/legal/rules" className="hover:text-white transition-colors">Правила размещения</Link></li>
            <li><Link href="/legal/privacy" className="hover:text-white transition-colors">Политика конфиденциальности</Link></li>
            <li><Link href="/legal/offer" className="hover:text-white transition-colors">Публичная оферта</Link></li>
            <li><Link href="/legal/payment" className="hover:text-white transition-colors">Способы оплаты</Link></li>
            <li><Link href="/faq" className="hover:text-white transition-colors">Вопросы и ответы</Link></li>
            <li><Link href="/contacts" className="hover:text-white transition-colors">Контакты</Link></li>
          </ul>
        </div>
      </div>

      {/* Аккредитация и реквизиты */}
      <div className="container relative z-10 mx-auto px-6 mt-12 pt-8 border-t border-white/10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Данные организации */}
          <div className="flex-1 space-y-3 text-xs text-stone-500 leading-relaxed">
            <div className="flex items-center gap-2 text-stone-400 font-bold text-sm mb-3">
              <ShieldCheck size={16} className="text-primary" />
              Сведения об организации
            </div>
            <p>ИП Валынкина Елена Васильевна</p>
            <p>Адрес: 659900, Алтайский край, г. Белокуриха, ул. Угрюмова, д. 4</p>
            <p>Тел.: +7 (960) 955-21-00 &nbsp;|&nbsp; E-mail: valynkina.44@mail.ru</p>
            <p>Режим работы: круглосуточно</p>
          </div>

          {/* Аккредитация */}
          <div className="flex-shrink-0 bg-white/5 border border-white/10 rounded-2xl p-5 max-w-sm">
            <p className="text-stone-400 text-xs font-bold uppercase tracking-wider mb-2">Аккредитация</p>
            <p className="text-stone-300 text-sm mb-1">Объект прошёл классификацию</p>
            <p className="text-stone-400 text-xs mb-2">Реестровая запись:</p>
            <a 
              href="https://tourism.fsa.gov.ru/ru/resorts/hotels/a9a801a0-c609-11ef-92da-25cf7d872c83/about-resort"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold text-sm hover:text-white transition-colors underline underline-offset-4"
            >
              С222024015126
            </a>
          </div>
        </div>
      </div>
      
      {/* Нижняя полоска копирайт */}
      <div className="container relative z-10 mx-auto px-6 mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[13px] text-stone-500">
        <div className="flex flex-col gap-1 mb-4 md:mb-0">
          <p>
            © {new Date().getFullYear()} Загородный отель «Яковка». Белокуриха, Алтайский край.
            <Link href="/lost-route" className="ml-2 text-[10px] text-stone-700/50 hover:text-primary hover:text-stone-300 transition-all inline-flex items-center gap-1 uppercase tracking-widest opacity-0 hover:opacity-100 focus:opacity-100">маршрут вне карты ↗</Link>
          </p>
        </div>
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          {/* Social Links */}
          <a href="https://t.me/+79609552100" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="hover:text-white transition-colors" title="Telegram">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
          </a>
          <a href="tel:+79090975209" aria-label="MAX" className="hover:text-white transition-colors" title="MAX">
            <MessageCircle className="w-5 h-5" />
          </a>
          <a href="https://yandex.ru/maps/org/yakovka/1062999531/" target="_blank" rel="noopener noreferrer" aria-label="Яндекс.Карты" className="hover:text-white transition-colors" title="Яковка на Яндекс.Картах">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          </a>
          <span className="text-stone-700">|</span>
          <Link href="/legal/privacy" className="hover:text-stone-300 transition-colors">Политика конфиденциальности</Link>
          <span className="text-stone-700 hidden md:inline">|</span>
          <Link href="/legal/rules" className="hover:text-stone-300 transition-colors hidden md:inline">Правила размещения</Link>
        </div>
      </div>
    </footer>
  );
}
