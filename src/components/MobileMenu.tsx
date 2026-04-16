'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, MapPin, Phone, Mail } from 'lucide-react';
import gsap from 'gsap';

export function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Animate container in
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, backdropFilter: 'blur(0px)' },
        { opacity: 1, backdropFilter: 'blur(20px)', duration: 0.4, ease: 'power3.out' }
      );
      // Animate links staggered
      if (linksRef.current?.children) {
        gsap.fromTo(
          linksRef.current.children,
          { y: 40, opacity: 0, rotationX: 20 },
          { y: 0, opacity: 1, rotationX: 0, duration: 0.5, stagger: 0.1, delay: 0.1, ease: 'back.out(1.2)' }
        );
      }
    } else {
      document.body.style.overflow = '';
      if (containerRef.current) {
        gsap.to(containerRef.current, { opacity: 0, backdropFilter: 'blur(0px)', duration: 0.3, ease: 'power2.in' });
      }
    }
    
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return <div ref={containerRef} className="fixed inset-0 pointer-events-none opacity-0 z-50"></div>;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-white/70 flex flex-col justify-between"
    >
      <div className="flex justify-end p-6">
        <button 
          onClick={onClose}
          className="p-3 bg-white/50 backdrop-blur-md rounded-full shadow-lg border border-white/40 hover:bg-white/80 active:scale-90 transition-all text-slate-800"
        >
          <X size={28} />
        </button>
      </div>

      <div className="px-8 pb-10 flex-grow flex flex-col justify-center perspective-[1000px]">
        <ul ref={linksRef} className="space-y-6 text-[32px] font-extrabold tracking-tight text-slate-900" aria-label="Mobile navigation">
          {[
            { href: '/rooms', label: 'Номера и цены' },
            { href: '/services', label: 'Услуги' },
            { href: '/infrastructure/restaurant', label: 'Ресторан' },
            { href: '/contacts', label: 'Контакты' }
          ].map(link => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <li key={link.href} style={{ transformStyle: 'preserve-3d' }}>
                <Link 
                  href={link.href} 
                  onClick={onClose} 
                  aria-current={isActive ? 'page' : undefined}
                  className={`block hover:translate-x-3 transition-all ${isActive ? 'text-blue-600' : 'hover:text-blue-600'}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li style={{ transformStyle: 'preserve-3d' }} className="pt-6">
            <button onClick={() => {
              onClose();
              if (typeof window !== 'undefined' && (window as any).HotelWidget) {
                (window as any).HotelWidget.open();
              }
            }} className="w-full text-center bg-blue-600 text-white rounded-[2rem] py-4 text-xl shadow-[0_15px_30px_rgba(37,99,235,0.3)] active:scale-95 transition-all">
              Забронировать
            </button>
          </li>
        </ul>
      </div>

      <div className="px-8 pb-12 opacity-80">
        <div className="flex flex-col gap-4 text-slate-700 font-medium">
          <div className="flex items-center gap-3">
            <Phone className="text-blue-600" size={20} />
            <a href="tel:+79609552100">+7 (960) 955-21-00</a>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-blue-600" size={20} />
            <span>г. Белокуриха, ул. Угрюмова, д. 4</span>
          </div>
        </div>
      </div>
    </div>
  );
}
