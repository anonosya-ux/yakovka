'use client';

import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="relative bg-zinc-950 text-slate-300 py-20 overflow-hidden">
      {/* Subtle glowing orb in footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-blue-900/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="container relative z-10 mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
        <div className="lg:col-span-1">
          <Image 
            src="https://xn--80adxbs4h.xn--p1ai/wp-content/uploads/2024/02/Logo-yakovka-1.webp" 
            alt="Яковка Логотип" 
            width={72} 
            height={72}
            className="mb-6 opacity-90 brightness-200 grayscale"
          />
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-8">
            Алтайский край, г. Белокуриха<br/>
            ул. Угрюмова, д. 4
          </p>
          <div className="space-y-4">
            <a href="tel:+79609552100" className="block text-2xl font-bold text-white hover:text-blue-400 transition-colors">+7 (960) 955-21-00</a>
            <a href="tel:+79090975209" className="block text-xl text-slate-300 hover:text-blue-400 transition-colors">+7 (909) 097-52-09</a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-lg tracking-wide">Курорт</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><Link href="/about" className="hover:text-white transition-colors">О курорте</Link></li>
            <li><Link href="/rooms" className="hover:text-white transition-colors">Номера и цены</Link></li>
            <li><Link href="/season" className="hover:text-white transition-colors">Горнолыжный сезон</Link></li>
            <li><Link href="/invest" className="hover:text-white transition-colors">Инвестиционный проект</Link></li>
            <li><Link href="/gallery" className="hover:text-white transition-colors">Фотогалерея</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 text-lg tracking-wide">Услуги</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><Link href="/infrastructure/restaurant" className="hover:text-white transition-colors">Ресторан</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Дополнительные услуги</Link></li>
            <li><Link href="/offers" className="hover:text-white transition-colors">Спецпредложения</Link></li>
            <li><Link href="/events" className="hover:text-white transition-colors">Проведение мероприятий</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-lg tracking-wide">Информация</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><Link href="/legal/rules" className="hover:text-white transition-colors">Правила проживания</Link></li>
            <li><Link href="/legal/payment" className="hover:text-white transition-colors">Способы оплаты</Link></li>
            <li><Link href="/legal/offer" className="hover:text-white transition-colors">Публичная оферта</Link></li>
            <li><Link href="/contacts" className="hover:text-white transition-colors">Контакты</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="container relative z-10 mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-[13px] text-slate-500">
        <p>© {new Date().getFullYear()} Загородный отель «Яковка». Создано с использованием Antigravity Design.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/legal/privacy" className="hover:text-slate-300 transition-colors">Политика конфиденциальности</Link>
        </div>
      </div>
    </footer>
  );
}
