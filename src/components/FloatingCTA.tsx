'use client';

import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingCTA() {


  return (
    <>
      {/* Desktop floating CTA */}
      <div className="fixed bottom-8 right-8 z-40 hidden md:flex flex-col gap-3">
        {/* TODO: добавить корректную deep-link ссылку MAX после уточнения */}
        <a
          href="tel:+79090975209"
          className="w-14 h-14 bg-stone-800 text-white rounded-full flex items-center justify-center shadow-premium hover:scale-110 hover:bg-stone-700 transition-all duration-300"
          aria-label="Написать в MAX"
          title="Написать в MAX"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a
          href="tel:+79609552100"
          className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-premium hover:scale-110 hover:bg-primary/90 transition-all duration-300"
          aria-label="Позвонить"
          title="Позвонить"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>

      {/* Mobile sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/90 backdrop-blur-xl border-t border-stone-200/50 p-3 flex gap-2 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]" style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}>
        {/* TODO: добавить корректную deep-link ссылку MAX после уточнения */}
        <a
          href="tel:+79090975209"
          className="flex-none w-[4.5rem] bg-stone-800 text-white rounded-2xl flex flex-col items-center justify-center shadow-sm hover:bg-stone-700 transition-colors"
          aria-label="MAX"
        >
          <MessageCircle className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-bold">MAX</span>
        </a>
        <a
          href="tel:+79609552100"
          className="flex-1 bg-primary text-white rounded-2xl font-bold text-[15px] flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
        >
          Позвонить
        </a>
      </div>
    </>
  );
}
