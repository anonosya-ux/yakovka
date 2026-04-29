'use client';

import { KonturWidgetSearch, KonturWidgetRoomsList, KonturWidgetCalendarVertical } from '@/components/KonturWidget';
import { ArrowLeft, ShieldCheck, CreditCard, CalendarCheck } from 'lucide-react';
import Link from 'next/link';

export default function BookingPage() {
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

          {/* Trust badges */}
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

      {/* Booking Widget */}
      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-stone-100 p-6 md:p-10">
            <h2 className="text-xl font-bold text-stone-800 mb-6">Поиск свободных номеров</h2>
            <KonturWidgetSearch containerId="BookingPageSearchWidget" />
          </div>
        </div>
      </section>

      {/* Rooms List */}
      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-stone-100 p-6 md:p-10">
            <h2 className="text-xl font-bold text-stone-800 mb-6">Доступные номера</h2>
            <KonturWidgetRoomsList containerId="BookingPageRoomsList" />
          </div>
        </div>
      </section>

      {/* Calendar */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-stone-100 p-6 md:p-10">
            <h2 className="text-xl font-bold text-stone-800 mb-6">Календарь доступности</h2>
            <KonturWidgetCalendarVertical containerId="BookingPageCalendar" />
          </div>
        </div>
      </section>

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
