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
  { href: '/rooms', label: 'Проживание' },
  {
    href: '#',
    label: 'Чем заняться',
    children: [
      { href: '/winter', label: 'Зимний отдых и гора' },
      { href: '/summer', label: 'Летний отдых' },
      { href: '/infrastructure/banya', label: 'Русская баня' },
      { href: '/infrastructure/restaurant', label: 'Домашняя кухня' },
      { href: '/excursions', label: 'Экскурсии по Алтаю' },
    ],
  },
  { 
    href: '/about', 
    label: 'О курорте',
    children: [
      { href: '/about', label: 'Об отеле' },
      { href: '/gallery', label: 'Фотогалерея' },
      { href: '/offers', label: 'Спецпредложения' },
      { href: '/reviews', label: 'Отзывы гостей' },
      { href: '/about/history', label: 'История Яковки' }
    ]
  },
  { href: '/events', label: 'События' },
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
      <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled 
          ? 'bg-stone-950/60 backdrop-blur-lg shadow-lg border-b border-white/10 py-1'
          : 'bg-gradient-to-b from-stone-950/80 to-transparent border-b border-transparent py-3'
      }`}>
        <div className="container mx-auto flex h-[72px] items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3 group">
            <YakovkaLogo className="w-[54px] h-[54px] group-hover:scale-105 transition-transform" />
            <span className="font-heading font-bold text-xl tracking-tight hidden md:inline-block transition-colors text-white drop-shadow-md">Яковка</span>
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
                        ? 'text-white bg-white/20 backdrop-blur-sm'
                        : 'text-white/90 hover:text-white hover:bg-white/10 drop-shadow-sm'
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
            <div className="hidden xl:flex flex-col items-end gap-0.5 mr-4">
              <a 
                href="tel:+79090975209" 
                className="flex items-center gap-1.5 text-[15px] font-bold transition-colors text-white hover:text-primary drop-shadow-md"
              >
                <Phone size={15} className="text-primary" />
                +7 (909) 097-52-09
              </a>
              <a 
                href="tel:+79090975209" 
                className="flex items-center gap-1.5 text-[12px] font-medium transition-colors text-white/70 hover:text-white"
              >
                +7 (909) 097-52-09
              </a>
            </div>
            
            <Link href="/booking" className="hidden md:inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white shadow-[0_10px_20px_rgba(34,85,34,0.3)] hover:shadow-[0_15px_30px_rgba(34,85,34,0.4)] rounded-full px-7 py-4 font-bold text-sm uppercase tracking-wide transition-all hover:-translate-y-0.5 border border-primary/20">
              Забронировать
            </Link>
            <button onClick={() => setIsMenuOpen(true)} className="lg:hidden p-2 rounded-xl border transition-colors text-white bg-white/10 border-white/20 backdrop-blur-md hover:bg-white/20">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>
      
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
