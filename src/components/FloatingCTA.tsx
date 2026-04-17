'use client';

import { Phone } from 'lucide-react';

export default function FloatingCTA() {
  const openWidget = () => {
    if (typeof window !== 'undefined' && (window as any).HotelWidget) {
      (window as any).HotelWidget.open();
    } else {
      window.open('https://bookonline24.ru/widget.js?hotelId=2774874f-1347-4c7d-a835-9791d5814751', '_blank');
    }
  };

  return (
    <>
      {/* Desktop floating CTA */}
      <div className="fixed bottom-8 right-8 z-40 hidden md:flex flex-col gap-3">
        <a
          href="tel:+79609552100"
          className="w-14 h-14 bg-stone-900 text-white rounded-full flex items-center justify-center shadow-premium hover:scale-110 hover:bg-primary transition-all duration-300"
          aria-label="Позвонить"
        >
          <Phone size={22} />
        </a>
        <button
          onClick={openWidget}
          className="px-6 py-4 bg-primary text-white rounded-full font-bold shadow-premium-lg animate-pulse-glow hover:scale-105 transition-all duration-300 text-sm tracking-wide"
        >
          Забронировать
        </button>
      </div>

      {/* Mobile sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/80 backdrop-blur-xl border-t border-stone-200/50 p-3 flex gap-2">
        <a
          href="tel:+79609552100"
          className="flex-1 py-3.5 bg-stone-900 text-white rounded-2xl flex items-center justify-center gap-2 font-semibold text-sm"
        >
          <Phone size={16} />
          Позвонить
        </a>
        <button
          onClick={openWidget}
          className="flex-1 py-3.5 bg-primary text-white rounded-2xl font-semibold text-sm"
        >
          Забронировать
        </button>
      </div>
    </>
  );
}
