'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Car, Bus, CheckCircle2 } from 'lucide-react';
import MapSection from '@/components/MapSection';
import PageHero from '@/components/PageHero';
import { Button } from '@/components/ui/button';

export default function ContactsClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="flex flex-col bg-stone-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Контакты отеля «Яковка»",
            "description": "Свяжитесь с нами для бронирования или по любым вопросам.",
            "mainEntity": {
              "@type": "Hotel",
              "telephone": "+7 (909) 097-52-09",
              "email": "valynkina.44@mail.ru",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ул. Угрюмова, д. 4",
                "addressLocality": "Белокуриха",
                "addressRegion": "Алтайский край",
                "postalCode": "659900",
                "addressCountry": "RU"
              }
            }
          })
        }}
      />

      <PageHero
        title="Контакты"
        subtitle="Свяжитесь с нами для бронирования или по любым вопросам. Мы находимся у подножия горы Яковка и всегда рады гостям!"
        badge="📞 На связи 24/7"
        imageSrc="/optimized/Виды/Фасады/Фасады-02.webp"
        imageAlt="Контакты отеля Яковка"
        breadcrumbs={[{ label: 'Контакты' }]}
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Контактные карточки */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
             <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 flex flex-col hover:shadow-premium transition-shadow">
               <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center mb-6">
                 <Phone size={24} className="text-primary" />
               </div>
               <h3 className="text-sm font-bold text-stone-400 mb-2 uppercase tracking-wider">Телефон</h3>
               <a href="tel:+79090975209" className="text-2xl font-bold text-stone-900 hover:text-primary transition-colors">+7 (909) 097-52-09</a>
               <a href="tel:+79090975209" className="text-xl font-medium text-stone-500 hover:text-primary transition-colors mt-2">+7 (909) 097-52-09</a>
             </div>

             <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 flex flex-col hover:shadow-premium transition-shadow">
               <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center mb-6">
                 <Mail size={24} className="text-primary" />
               </div>
               <h3 className="text-sm font-bold text-stone-400 mb-2 uppercase tracking-wider">Email</h3>
               <a href="mailto:valynkina.44@mail.ru" className="text-2xl font-bold text-stone-900 hover:text-primary transition-colors truncate">valynkina.44@mail.ru</a>
             </div>

             <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 flex flex-col hover:shadow-premium transition-shadow">
               <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center mb-6">
                 <MapPin size={24} className="text-primary" />
               </div>
               <h3 className="text-sm font-bold text-stone-400 mb-2 uppercase tracking-wider">Адрес</h3>
               <p className="text-xl font-bold text-stone-900">Алтайский край,<br/>г. Белокуриха, ул. Угрюмова, д. 4</p>
             </div>

             <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 flex flex-col hover:shadow-premium transition-shadow">
               <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center mb-6">
                 <Clock size={24} className="text-primary" />
               </div>
               <h3 className="text-sm font-bold text-stone-400 mb-2 uppercase tracking-wider">Режим работы</h3>
               <p className="text-xl font-bold text-stone-900">Круглосуточно</p>
               <p className="text-stone-500 mt-2 font-medium">Заезд: с 14:00<br/>Выезд: до 12:00</p>
             </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Форма обратной связи */}
            <div className="w-full lg:w-5/12">
              <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-premium border border-stone-100 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none" />
                
                {!isSuccess ? (
                  <>
                    <h2 className="font-heading text-3xl font-bold text-stone-900 mb-2 relative z-10">Остались вопросы?</h2>
                    <p className="text-stone-500 mb-8 relative z-10">Оставьте заявку, и мы свяжемся с вами в течение 10 минут.</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-bold text-stone-700 uppercase tracking-wider">Ваше имя</label>
                        <input 
                          id="name"
                          type="text" 
                          required
                          disabled={isSubmitting}
                          placeholder="Иван Иванов"
                          className="w-full px-4 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-stone-400 font-medium text-stone-800 disabled:opacity-50"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-xs font-bold text-stone-700 uppercase tracking-wider">Телефон</label>
                        <input 
                          id="phone"
                          type="tel" 
                          required
                          disabled={isSubmitting}
                          placeholder="+7 (999) 000-00-00"
                          className="w-full px-4 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-stone-400 font-medium text-stone-800 disabled:opacity-50"
                        />
                      </div>

                      <Button disabled={isSubmitting} type="submit" size="lg" className="w-full rounded-2xl bg-primary text-white hover:bg-stone-900 font-bold py-7 shadow-lg shadow-primary/20 active:scale-[0.98] transition-all mt-6 text-lg">
                        {isSubmitting ? 'Отправка...' : 'Связаться со мной'}
                      </Button>

                      <p className="text-center text-xs text-stone-400 mt-4">
                        Нажимая кнопку, вы соглашаетесь с <Link href="/legal/privacy" className="underline hover:text-stone-600">политикой конфиденциальности</Link>.
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center animate-in fade-in zoom-in duration-500 min-h-[300px]">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="font-heading text-3xl font-bold text-stone-900 mb-3">Заявка принята!</h3>
                    <p className="text-stone-500 text-lg">Мы уже получили ваши контакты и скоро перезвоним.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Как добраться */}
            <div className="w-full lg:w-7/12 flex flex-col justify-between">
              <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-sm border border-stone-100 flex-grow">
                <h2 className="font-heading text-3xl font-bold text-stone-900 mb-8 border-b border-stone-100 pb-6">Как добраться</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="flex items-center gap-3 font-bold text-xl mb-4 text-stone-800">
                      <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-primary shrink-0">
                        <Car size={20} />
                      </div>
                      На автомобиле
                    </h3>
                    <p className="text-stone-600 leading-relaxed font-light">
                      Двигайтесь по улице Академика Мясникова до поворота на улицу Угрюмова. Далее следуйте вверх по указателям отеля «Яковка». 
                    </p>
                    <div className="mt-4 bg-amber-50 border border-amber-200/50 p-5 rounded-2xl">
                      <strong className="text-amber-700 font-bold flex items-center gap-2 mb-1">
                        ⚠️ Важно знать о дороге:
                      </strong>
                      <span className="text-sm text-amber-800/80 leading-relaxed block">
                        Последний участок пути (около 500 метров) — это подъем в гору по гравийной дороге. Зимой для комфортного проезда желателен полный привод. Мы всегда готовы организовать бесплатный трансфер от нижней площадки!
                      </span>
                    </div>
                  </div>
                  
                  <div className="pt-8 border-t border-stone-50">
                    <h3 className="flex items-center gap-3 font-bold text-xl mb-4 text-stone-800">
                      <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-primary shrink-0">
                        <Bus size={20} />
                      </div>
                      Общественным транспортом
                    </h3>
                    <p className="text-stone-600 leading-relaxed font-light mb-3">
                      До автовокзала Белокурихи регулярно ходят автобусы из Новосибирска (~7 ч.), Барнаула (~4 ч.) и Бийска (~1.5 ч.).
                    </p>
                    <p className="text-stone-600 leading-relaxed font-light">
                      С автовокзала мы рекомендуем вызвать местное такси (Яндекс Go) — время в пути до отеля составит всего 10 минут.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Requisites Block */}
          {/* TODO: Обновить данные после предоставления карточки ИП */}
          <div className="mt-12 bg-stone-900 p-10 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
             <h2 className="font-heading text-3xl font-bold text-white mb-6">Реквизиты организации</h2>
             <div className="bg-stone-800/50 p-6 rounded-2xl border border-stone-700">
               <p className="text-stone-400">Реквизиты организации будут добавлены после предоставления карточки ИП.</p>
             </div>
          </div>

        </div>
      </section>
      
      {/* Shared Map Component */}
      <MapSection />
    </div>
  );
}
