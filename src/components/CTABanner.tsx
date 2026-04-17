'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  variant?: 'primary' | 'dark' | 'nature';
}

export default function CTABanner({
  title = 'Готовы к отдыху в горах?',
  subtitle = 'Забронируйте номер прямо сейчас и получите лучшую цену на проживание в загородном отеле «Яковка»',
  buttonText = 'Забронировать номер',
  onButtonClick,
  variant = 'primary',
}: CTABannerProps) {
  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };

  const variants = {
    primary: 'bg-primary text-white',
    dark: 'bg-stone-900 text-white',
    nature: 'bg-gradient-to-br from-stone-800 via-stone-900 to-stone-950 text-white',
  };

  return (
    <section className={`relative py-20 md:py-28 overflow-hidden ${variants[variant]}`}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[60px] pointer-events-none" />
      
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
      }} />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          {subtitle}
        </p>
        {onButtonClick ? (
          <button
            onClick={onButtonClick}
            className="inline-flex items-center justify-center bg-white text-stone-900 hover:bg-white/90 rounded-full px-10 py-7 text-lg font-bold shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.4)] hover:scale-105 active:scale-95 transition-all group"
          >
            {buttonText} <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        ) : (
          <a
            href="https://bookonline24.ru/?hotelId=2774874f-1347-4c7d-a835-9791d5814751" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-stone-900 hover:bg-white/90 rounded-full px-10 py-7 text-lg font-bold shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.4)] hover:scale-105 active:scale-95 transition-all group"
          >
            {buttonText}
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        )}
      </div>
    </section>
  );
}
