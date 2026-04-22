'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MobileMenu } from '@/components/MobileMenu';
import { YakovkaLogo } from '@/components/Logo';

const navLinks = [
  { href: '/rooms', label: 'Номера и цены' },
  {
    href: '/infrastructure/ski',
    label: 'Отдых',
    children: [
      { href: '/winter', label: 'Зимний отдых' },
      { href: '/summer', label: 'Летний отдых' },
      { href: '/infrastructure/ski', label: 'Трассы и прокат' },
      { href: '/infrastructure/restaurant', label: 'Заказное меню' },
      { href: '/infrastructure/banya', label: 'Русская баня' },
      { href: '/gallery', label: 'Фотогалерея' },
    ],
  },
  { href: '/offers', label: 'Акции' },
  { href: '/reviews', label: 'Отзывы' },
  { href: '/contacts', label: 'Контакты' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(null), 150);
  };

  return (
    <>
      <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(41,37,36,0.08)] border-b border-stone-200/30'
          : 'bg-white/60 backdrop-blur-xl border-b border-white/40 shadow-[0_4px_30px_rgba(41,37,36,0.05)]'
      } text-stone-800`}>
        <div className="container mx-auto flex h-[72px] items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3 group">
            <YakovkaLogo className="w-[54px] h-[54px] group-hover:scale-105 transition-transform" />
            <span className="font-heading font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-stone-900 to-stone-600 hidden md:inline-block">Яковка</span>
          </Link>

          <nav className="hidden lg:flex gap-1 text-[14px] font-semibold tracking-wide" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
              const hasChildren = 'children' in link && link.children;
              
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => hasChildren && handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative px-4 py-2.5 rounded-xl transition-all font-heading flex items-center gap-1 ${
                      isActive 
                        ? 'text-primary bg-primary/5' 
                        : 'text-stone-600 hover:text-primary hover:bg-stone-50'
                    }`}
                  >
                    {link.label}
                    {hasChildren && <ChevronDown size={14} className={`transition-transform ${dropdownOpen === link.label ? 'rotate-180' : ''}`} />}
                  </Link>
                  
                  {/* Dropdown */}
                  {hasChildren && dropdownOpen === link.label && (
                    <div className="absolute top-full left-0 mt-1 bg-white/95 backdrop-blur-xl rounded-2xl shadow-premium-lg border border-stone-100 py-2 min-w-[220px] z-50">
                      {link.children!.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-3 text-sm text-stone-600 hover:text-primary hover:bg-primary/5 transition-colors first:rounded-t-xl last:rounded-b-xl"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            {/* Phone number (desktop) */}
            {/* Phone numbers (desktop) */}
            <div className="hidden xl:flex flex-col items-end gap-0.5">
              <a 
                href="tel:+79609552100" 
                className="flex items-center gap-1.5 text-sm font-bold text-stone-700 hover:text-primary transition-colors"
              >
                <Phone size={14} className="text-primary" />
                +7 (960) 955-21-00
              </a>
              <a 
                href="tel:+79090975209" 
                className="flex items-center gap-1.5 text-[13px] font-medium text-stone-500 hover:text-primary transition-colors"
              >
                +7 (909) 097-52-09
              </a>
            </div>
            
            <a href="https://bookonline24.ru/?hotelId=2774874f-1347-4c7d-a835-9791d5814751" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center justify-center bg-primary/95 backdrop-blur-md hover:bg-primary text-white shadow-[0_10px_20px_rgba(34,85,34,0.2)] hover:shadow-[0_15px_30px_rgba(34,85,34,0.3)] rounded-full px-7 py-5 font-semibold transition-all hover:-translate-y-0.5">
              Забронировать
            </a>
            <button onClick={() => setIsMenuOpen(true)} className="lg:hidden p-2 text-stone-700 bg-white/50 backdrop-blur-md rounded-xl border border-white/40 shadow-sm">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>
      
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
