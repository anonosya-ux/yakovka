'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import Link from 'next/link';
import gsap from 'gsap';

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CallbackModal({ isOpen, onClose }: CallbackModalProps) {
  const [isBrowser, setIsBrowser] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo(
        '.modal-overlay',
        { opacity: 0, backdropFilter: 'blur(0px)' },
        { opacity: 1, backdropFilter: 'blur(8px)', duration: 0.4, ease: 'power2.out' }
      );
      gsap.fromTo(
        '.modal-content',
        { opacity: 0, y: 50, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'back.out(1.1)', delay: 0.1 }
      );
    } else {
      document.body.style.overflow = '';
    }

    // Escape listener
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;

    try {
      const res = await fetch('/api/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone }),
      });

      if (!res.ok) {
        throw new Error('Ошибка отправки');
      }

      setIsSuccess(true);
      
      // Автозакрытие через 4 секунды
      setTimeout(() => {
        if (isOpen) onClose();
        setTimeout(() => setIsSuccess(false), 500);
      }, 4000);
    } catch (err) {
      alert('Не удалось отправить заявку. Пожалуйста, позвоните нам: +7 (960) 955-21-00');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isBrowser || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-overlay overflow-y-auto">
      {/* Background Dim */}
      <div 
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Закрыть модальное окно"
      />
      
      {/* Modal Content */}
      <div 
        className="modal-content relative w-full max-w-md bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-white/50"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-stone-100 text-stone-500 hover:bg-stone-200 hover:text-stone-800 transition-colors focus:ring-2 focus:ring-primary outline-none"
          aria-label="Закрыть"
        >
          <X size={20} />
        </button>

        {!isSuccess && (
          <>
            <h2 id="modal-title" className="text-2xl md:text-3xl font-bold text-stone-900 mb-2">Заказать звонок</h2>
            <p className="text-stone-500 text-sm mb-8">
              Оставьте свои контакты, и администратор комплекса «Яковка» перезвонит вам в ближайшее время.
            </p>
          </>
        )}

        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                Ваше имя
              </label>
              <input 
                id="name"
                type="text" 
                required
                disabled={isSubmitting}
                placeholder="Иван Иванов"
                className="w-full px-4 py-3.5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-stone-400 font-medium text-stone-800 disabled:opacity-50"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                Телефон
              </label>
              <input 
                id="phone"
                type="tel" 
                required
                disabled={isSubmitting}
                placeholder="+7 (___) ___-__-__"
                maxLength={18}
                onInput={(e) => {
                  const input = e.currentTarget;
                  let digits = input.value.replace(/\D/g, '');
                  if (digits.startsWith('8')) digits = '7' + digits.slice(1);
                  if (!digits.startsWith('7')) digits = '7' + digits;
                  digits = digits.slice(0, 11);
                  
                  let formatted = '+7';
                  if (digits.length > 1) formatted += ' (' + digits.slice(1, 4);
                  if (digits.length > 4) formatted += ') ' + digits.slice(4, 7);
                  if (digits.length > 7) formatted += '-' + digits.slice(7, 9);
                  if (digits.length > 9) formatted += '-' + digits.slice(9, 11);
                  
                  input.value = formatted;
                }}
                className="w-full px-4 py-3.5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-stone-400 font-medium text-stone-800 disabled:opacity-50"
              />
            </div>

            <Button disabled={isSubmitting} type="submit" size="lg" className="w-full rounded-xl bg-primary text-white hover:bg-stone-900 font-semibold py-6 shadow-lg shadow-primary/20 active:scale-[0.98] transition-all mt-4">
              {isSubmitting ? 'Отправка...' : 'Жду звонка'}
            </Button>

            <div className="flex items-start gap-3 mt-4">
              <input 
                type="checkbox" 
                id="consent" 
                required 
                className="mt-0.5 w-4 h-4 rounded border-stone-300 text-primary focus:ring-primary cursor-pointer shrink-0"
              />
              <label htmlFor="consent" className="text-xs text-stone-500 leading-relaxed cursor-pointer select-none">
                Я согласен на обработку персональных данных в соответствии с <Link href="/legal/privacy" className="underline hover:text-stone-800">политикой конфиденциальности</Link>
              </label>
            </div>
          </form>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-center animate-in fade-in zoom-in duration-500">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-stone-900 mb-2">Заявка принята!</h3>
            <p className="text-stone-500">Администратор свяжется с вами в течение 10 минут по указанному номеру.</p>
            <Button onClick={onClose} variant="outline" className="mt-8 w-full rounded-xl py-6 font-semibold border-stone-200">
              Закрыть окно
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
