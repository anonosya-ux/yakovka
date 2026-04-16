import Link from 'next/link';
import { ArrowLeft, CreditCard, Banknote, Building2 } from 'lucide-react';

export default function PaymentPage() {
  return (
    <div className="bg-white pt-24 pb-24 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <Breadcrumbs variant="light" />
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-10">Способы оплаты</h1>
        
        <p className="text-xl text-slate-600 mb-12 leading-relaxed">
          Для вашего удобства в Загородном отеле «Яковка» предусмотрены различные способы оплаты проживания и дополнительных услуг.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 border border-slate-100 rounded-3xl bg-slate-50 shadow-sm flex flex-col h-full">
            <CreditCard size={40} className="text-blue-600 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-4">Безналичный расчет</h3>
            <p className="text-slate-600 flex-grow">К оплате принимаются банковские карты: Visa, MasterCard, Мир. Возможна оплата по QR-коду (СБП) на стойке регистрации.</p>
          </div>
          <div className="p-8 border border-slate-100 rounded-3xl bg-slate-50 shadow-sm flex flex-col h-full">
            <Banknote size={40} className="text-emerald-500 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-4">Наличные</h3>
            <p className="text-slate-600 flex-grow">Оплата наличными рублями возможна при заселении на стойке администратора.</p>
          </div>
          <div className="p-8 border border-slate-100 rounded-3xl bg-slate-50 shadow-sm flex flex-col h-full">
            <Building2 size={40} className="text-slate-500 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-4">Для юр. лиц</h3>
            <p className="text-slate-600 flex-grow">Возможна оплата по выставленному счету на расчетный счет организации. Предоставляем закрывающие документы.</p>
          </div>
        </div>

        <div className="prose prose-lg prose-slate prose-blue max-w-none">
          <h3>Бронирование</h3>
          <p>
            Для гарантированного бронирования номера необходимо внести предоплату в размере 1 суток проживания (или 30% от общей стоимости в зависимости от условий тарифа).
            В случае отмены бронирования менее чем за 3 суток до заезда, предоплата не возвращается.
          </p>
        </div>
      </div>
    </div>
  );
}
