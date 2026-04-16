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
    } else {
      // Fallback redirect to direct booking page
      window.open('https://bookonline24.ru/widget.js?hotelId=2774874f-1347-4c7d-a835-9791d5814751', '_blank');
    }
  };

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-white/60 backdrop-blur-xl border-b border-white/40 shadow-[0_4px_30px_rgba(41,37,36,0.05)] text-stone-800 transition-all duration-300">
        <div className="container mx-auto flex h-[72px] items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="https://xn--80adxbs4h.xn--p1ai/wp-content/uploads/2024/02/Logo-yakovka-1.webp" 
              alt="Яковка Логотип" 
              width={54} 
              height={54}
              className="object-cover rounded-full mix-blend-multiply hover:scale-105 transition-transform"
            />
            <span className="font-heading font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-stone-900 to-stone-600 hidden md:inline-block">Яковка</span>
          </Link>
          <nav className="hidden md:flex gap-8 text-[15px] font-semibold tracking-wide" aria-label="Main navigation">
            {[
              { href: '/rooms', label: 'Номера и цены' },
              { href: '/infrastructure/ski', label: 'Горнолыжный сезон' },
              { href: '/events', label: 'Мероприятия' },
              { href: '/contacts', label: 'Контакты' },
            ].map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
               <Link
                 key={link.href}
                 href={link.href}
                 aria-current={isActive ? 'page' : undefined}
                 className={`relative transition-colors font-heading ${
                   isActive ? 'text-primary' : 'text-stone-600 hover:text-primary'
                 }`}
               >
                 {link.label}
               </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-4">
            <Button onClick={openWidget} className="hidden md:inline-flex bg-primary/95 backdrop-blur-md hover:bg-primary text-white shadow-[0_10px_20px_rgba(var(--primary),0.2)] hover:shadow-[0_15px_30px_rgba(var(--primary),0.4)] rounded-full px-7 py-5 font-semibold transition-all hover:-translate-y-0.5">
              Забронировать
            </Button>
            <button onClick={() => setIsMenuOpen(true)} className="md:hidden p-2 text-stone-700 bg-white/50 backdrop-blur-md rounded-xl border border-white/40 shadow-sm">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>
      
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
