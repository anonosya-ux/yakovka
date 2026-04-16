'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import gsap from 'gsap';

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CallbackModal({ isOpen, onClose }: CallbackModalProps) {
  const [isBrowser, setIsBrowser] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy submit logic for UI
    alert('Заявка успешно отправлена! Мы свяжемся с вами в течение 15 минут.');
    onClose();
  };

  if (!isBrowser || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-overlay overflow-y-auto">
      {/* Background Dim */}
      <div 
        className="absolute inset-0 bg-slate-900/40"
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
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors focus:ring-2 focus:ring-blue-500 outline-none"
          aria-label="Закрыть"
        >
          <X size={20} />
        </button>

        <h2 id="modal-title" className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Заказать звонок</h2>
        <p className="text-slate-500 text-sm mb-8">
          Оставьте свои контакты, и администратор комплекса «Яковка» перезвонит вам в ближайшее время.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="name" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Ваше имя
            </label>
            <input 
              id="name"
              type="text" 
              required
              placeholder="Иван Иванов"
              className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400 font-medium text-slate-800"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Телефон
            </label>
            <input 
              id="phone"
              type="tel" 
              required
              placeholder="+7 (999) 000-00-00"
              className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400 font-medium text-slate-800"
            />
          </div>

          <Button type="submit" size="lg" className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 shadow-lg shadow-blue-600/20 active:scale-[0.98] transition-all mt-4">
            Жду звонка
          </Button>

          <p className="text-center text-xs text-slate-400 mt-4">
            Нажимая кнопку, вы соглашаетесь с <a href="#" className="underline hover:text-slate-600">политикой конфиденциальности</a>.
          </p>
        </form>
      </div>
    </div>
  );
}
