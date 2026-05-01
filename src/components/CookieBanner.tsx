'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Cookie, X } from 'lucide-react';

/**
 * CookieBanner — баннер уведомления о файлах cookie.
 * Требование: 152-ФЗ ст. 18.1 п. 4, рекомендации РКН.
 * 
 * Сохраняет выбор пользователя в localStorage.
 * При согласии устанавливает window.__cookieConsent = true,
 * что может использоваться другими скриптами (Яндекс.Метрика и пр.).
 */
export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Проверяем, давал ли пользователь согласие ранее
    const consent = localStorage.getItem('yakovka_cookie_consent');
    if (!consent) {
      // Показываем баннер с небольшой задержкой, чтобы не мешать первому рендеру
      const timer = setTimeout(() => {
        setIsVisible(true);
        requestAnimationFrame(() => setIsAnimating(true));
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      // Если согласие уже было — ставим флаг
      (window as any).__cookieConsent = consent === 'accepted';
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('yakovka_cookie_consent', 'accepted');
    (window as any).__cookieConsent = true;
    // Диспатчим событие, чтобы другие скрипты могли подхватить согласие
    window.dispatchEvent(new CustomEvent('cookieConsentChanged', { detail: { accepted: true } }));
    closeBanner();
  };

  const handleDecline = () => {
    localStorage.setItem('yakovka_cookie_consent', 'declined');
    (window as any).__cookieConsent = false;
    window.dispatchEvent(new CustomEvent('cookieConsentChanged', { detail: { accepted: false } }));
    closeBanner();
  };

  const closeBanner = () => {
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 400);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[9999] transition-all duration-400 ease-out ${
        isAnimating
          ? 'translate-y-0 opacity-100'
          : 'translate-y-full opacity-0'
      }`}
      role="dialog"
      aria-label="Уведомление о файлах cookie"
    >
      {/* Backdrop gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/20 to-transparent pointer-events-none -top-20" />

      <div className="relative mx-auto max-w-5xl px-4 pb-4 md:px-6 md:pb-6">
        <div className="bg-white/95 backdrop-blur-xl border border-stone-200/80 rounded-2xl md:rounded-3xl shadow-[0_-10px_60px_rgba(0,0,0,0.12)] p-5 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            {/* Icon + Text */}
            <div className="flex items-start gap-3 flex-1 min-w-0">
              <div className="shrink-0 w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mt-0.5">
                <Cookie size={20} className="text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-sm md:text-[15px] text-stone-700 leading-relaxed">
                  Мы используем файлы cookie и сервисы аналитики для улучшения работы сайта
                  и удобства бронирования. Продолжая использовать сайт, вы соглашаетесь
                  с{' '}
                  <Link
                    href="/legal/privacy"
                    className="text-primary font-medium underline underline-offset-2 hover:text-stone-900 transition-colors"
                  >
                    Политикой конфиденциальности
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-2 shrink-0 ml-auto">
              <button
                onClick={handleDecline}
                className="px-4 py-2.5 text-sm font-medium text-stone-500 hover:text-stone-800 hover:bg-stone-100 rounded-xl transition-all"
              >
                Отклонить
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-2.5 text-sm font-bold text-white bg-primary hover:bg-stone-900 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-[0.97]"
              >
                Принять
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
