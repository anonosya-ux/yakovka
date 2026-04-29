'use client';

import { useEffect } from 'react';
import { ArrowLeft, ShieldCheck, CreditCard, CalendarCheck } from 'lucide-react';
import Link from 'next/link';

export default function BookingPage() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if ((window as any)._konturBookingReady) return;

    // Exact Kontur code from their support team
    (function(k: () => void, o: number | null, t?: any, e?: any, l?: any) {
      l = document.createElement("script");
      l.type = "text/javascript";
      l.src = "https://bookonline24.ru/widget.js";
      l.async = true;
      l.onload = l.onreadystatechange = function() {
        e = (this as any).readyState;
        if (!o && (!e || e === "complete")) {
          o = 1;
          k();
        }
      };
      t = document.getElementsByTagName("script")[0];
      t.parentNode.insertBefore(l, t);
    })(function() {
      const HW = (window as any).HotelWidget;
      (window as any)._konturBookingReady = true;

      HW.init({
        hotelId: "2774874f-1347-4c7d-a835-9791d5814751",
        version: "2",
        hooks: {
          onError: function(e: any) { console.error("onError", e); },
          onInit: function() { console.log("onInit"); },
          onBooking: function(v: any) { console.log("onBooking", v); }
        }
      });

      // Поиск и бронирование номеров — вертикальный блок
      HW.add({
        type: "bookingForm",
        inline: false,
        appearance: {
          container: "WidgetVerticalBlockId"
        }
      });

      // Бронирование номеров
      HW.add({
        type: "roomsList",
        appearance: {
          container: "WidgetRoomsListId"
        }
      });

      // Просмотр календаря доступности — горизонтальный блок
      HW.add({
        type: "availabilityCalendar",
        months: 2,
        appearance: {
          container: "WidgetHorizontalAvailabilityCalendarId"
        }
      });

      // Кнопка «Проверить наличие номеров» для мобильных устройств
      HW.add({
        type: "showCheckAvailabilityButtonForMobileDevices",
        appearance: {
          container: "WidgetShowCheckAvailabilityButtonForMobileDevicesId"
        }
      });
    }, null);

    return () => {
      (window as any)._konturBookingReady = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Header */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="container mx-auto px-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-stone-500 hover:text-primary transition-colors mb-8 text-sm font-medium"
          >
            <ArrowLeft size={16} />
            На главную
          </Link>

          <h1 className="font-heading text-4xl md:text-6xl font-bold text-stone-900 tracking-tight mb-4">
            Бронирование номера
          </h1>
          <p className="text-lg md:text-xl text-stone-500 max-w-2xl font-light">
            Выберите даты, категорию номера и забронируйте онлайн. Оплата банковской картой через ЮKassa.
          </p>

          <div className="flex flex-wrap gap-6 mt-8">
            <div className="flex items-center gap-2 text-sm text-stone-600">
              <ShieldCheck size={18} className="text-primary" />
              Безопасная оплата
            </div>
            <div className="flex items-center gap-2 text-sm text-stone-600">
              <CreditCard size={18} className="text-primary" />
              Visa, MasterCard, МИР
            </div>
            <div className="flex items-center gap-2 text-sm text-stone-600">
              <CalendarCheck size={18} className="text-primary" />
              Мгновенное подтверждение
            </div>
          </div>
        </div>
      </section>

      {/* Поиск и бронирование номеров */}
      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-stone-100 p-6 md:p-10">
            <h2 className="text-xl font-bold text-stone-800 mb-6">Поиск свободных номеров</h2>
            <div id="WidgetVerticalBlockId" />
          </div>
        </div>
      </section>

      {/* Бронирование номеров */}
      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-stone-100 p-6 md:p-10">
            <h2 className="text-xl font-bold text-stone-800 mb-6">Доступные номера</h2>
            <div id="WidgetRoomsListId" />
          </div>
        </div>
      </section>

      {/* Календарь доступности */}
      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-stone-100 p-6 md:p-10">
            <h2 className="text-xl font-bold text-stone-800 mb-6">Календарь доступности</h2>
            <div id="WidgetHorizontalAvailabilityCalendarId" />
          </div>
        </div>
      </section>

      {/* Мобильная кнопка */}
      <div id="WidgetShowCheckAvailabilityButtonForMobileDevicesId" />

      {/* Contact fallback */}
      <section className="pb-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-stone-500 mb-3">Нужна помощь с бронированием?</p>
          <a 
            href="tel:+79609552100" 
            className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:underline"
          >
            +7 (960) 955-21-00
          </a>
        </div>
      </section>
    </div>
  );
}
