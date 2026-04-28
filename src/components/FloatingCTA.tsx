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
          href="https://t.me/+79609552100"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#2AABEE] text-white rounded-full flex items-center justify-center shadow-premium hover:scale-110 hover:bg-[#229ED9] transition-all duration-300"
          aria-label="Telegram"
          title="Telegram"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
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
          href="https://t.me/+79609552100"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-none w-[4.5rem] bg-[#2AABEE] text-white rounded-2xl flex flex-col items-center justify-center shadow-sm hover:bg-[#229ED9] transition-colors"
          aria-label="Telegram"
        >
          <svg className="w-5 h-5 mb-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
          <span className="text-[10px] font-bold">TG</span>
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
