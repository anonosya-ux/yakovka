'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MobileMenu } from '@/components/MobileMenu';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const openWidget = () => {
    if (typeof window !== 'undefined' && (window as any).HotelWidget) {
      (window as any).HotelWidget.open();
    }
  };

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-white/40 backdrop-blur-xl border-b border-white/40 shadow-[0_4px_30px_rgba(0,0,0,0.05)] text-slate-800 transition-all duration-300">
        <div className="container mx-auto flex h-[72px] items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="https://xn--80adxbs4h.xn--p1ai/wp-content/uploads/2024/02/Logo-yakovka-1.webp" 
              alt="Яковка Логотип" 
              width={54} 
              height={54}
              className="object-contain drop-shadow-md"
            />
          </Link>
          <nav className="hidden md:flex gap-8 text-[15px] font-semibold tracking-wide" aria-label="Main navigation">
            {[
              { href: '/rooms', label: 'Номера' },
              { href: '/infrastructure/restaurant', label: 'Ресторан' },
              { href: '/services', label: 'Услуги' },
              { href: '/events', label: 'Мероприятия' },
              { href: '/contacts', label: 'Контакты' },
            ].map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative transition-colors ${
                    isActive ? 'text-blue-700' : 'hover:text-blue-700'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-4">
            <Button onClick={openWidget} className="hidden md:inline-flex bg-blue-600/90 backdrop-blur-md hover:bg-blue-600 text-white shadow-[0_10px_20px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.4)] rounded-full px-7 py-5 font-medium transition-all hover:-translate-y-0.5">
              Забронировать
            </Button>
            <button onClick={() => setIsMenuOpen(true)} className="md:hidden p-2 text-slate-700 bg-white/50 backdrop-blur-md rounded-xl border border-white/40 shadow-sm">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>
      
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
