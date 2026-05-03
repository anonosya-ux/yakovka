'use client';

import { useState } from 'react';
import { Phone, MessageCircle, X, MessageSquarePlus } from 'lucide-react';

export default function FloatingCTA() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-40 flex flex-col-reverse items-end gap-3">
        {/* Main toggle button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-premium-lg transition-all duration-300 ${
            isExpanded
              ? 'bg-stone-800 text-white rotate-0'
              : 'bg-primary text-white animate-float-bounce hover:scale-105 hover:bg-primary/90'
          }`}
          aria-label={isExpanded ? 'Закрыть' : 'Связаться с нами'}
        >
          {isExpanded ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageSquarePlus className="w-6 h-6" />
          )}
        </button>

        {/* Expandable options */}
        <div
          className={`flex flex-col items-end gap-3 transition-all duration-300 ${
            isExpanded
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          {/* Позвонить */}
          <a
            href="tel:+79609552100"
            className="flex items-center gap-3 group"
            onClick={() => setIsExpanded(false)}
          >
            <span className="bg-white/95 backdrop-blur-md text-stone-900 text-sm font-bold px-4 py-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Позвонить
            </span>
            <div className="w-12 h-12 md:w-14 md:h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <Phone className="w-5 h-5 md:w-6 md:h-6" />
            </div>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/+79609552100"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
            onClick={() => setIsExpanded(false)}
          >
            <span className="bg-white/95 backdrop-blur-md text-stone-900 text-sm font-bold px-4 py-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Telegram
            </span>
            <div className="w-12 h-12 md:w-14 md:h-14 bg-[#2AABEE] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            </div>
          </a>

          {/* MAX */}
          <a
            href="https://max.ru/u/f9LHodD0cOJgs8-Ji8TUTWyxOWG2luEllCgGpLV267s5Hjpb6iMGSByhedg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
            onClick={() => setIsExpanded(false)}
          >
            <span className="bg-white/95 backdrop-blur-md text-stone-900 text-sm font-bold px-4 py-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              MAX
            </span>
            <div className="w-12 h-12 md:w-14 md:h-14 bg-stone-800 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
            </div>
          </a>
        </div>
      </div>

      {/* Overlay when expanded */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </>
  );
}
