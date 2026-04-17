import { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import FAQAccordion from '@/components/FAQAccordion';
import { Snowflake, Mountain, Clock, Shield, Users, Ticket } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Горнолыжный сезон — трассы горы Яковка',
  description: 'Горнолыжный курорт у подножия горы Яковка в Белокурихе. 2 трассы для начинающих и среднего уровня, прокат снаряжения, инструкторы. Сезон декабрь–март. Цены от 500 ₽/час.',
  keywords: ['горнолыжный курорт Белокуриха', 'гора Яковка', 'горные лыжи Алтай', 'сноуборд Белокуриха', 'прокат лыж'],
  alternates: { canonical: '/season' },
};

const features = [
  { icon: Mountain, title: '2 трассы', desc: 'Для начинающих (300 м) и среднего уровня (800 м)' },
  { icon: Snowflake, title: 'Снежный покров', desc: 'Стабильный снег с декабря по март' },
  { icon: Clock, title: 'Режим работы', desc: '10:00 — 18:00 ежедневно в сезон' },
  { icon: Shield, title: 'Безопасность', desc: 'Служба спасения, огороженные трассы' },
  { icon: Users, title: 'Инструкторы', desc: 'Личные и групповые занятия для всех возрастов' },
  { icon: Ticket, title: 'Ски-пасс', desc: 'Абонементы на день, 3 дня, неделю' },
];

const pricingData = [
  { service: 'Прокат горных лыж (комплект)', hour: '500 ₽', day: '1 500 ₽' },
  { service: 'Прокат сноуборда (комплект)', hour: '600 ₽', day: '1 800 ₽' },
  { service: 'Подъёмник (1 подъём)', hour: '150 ₽', day: '—' },
  { service: 'Абонемент на подъёмник', hour: '—', day: '800 ₽' },
  { service: 'Занятие с инструктором', hour: '1 500 ₽', day: '—' },
  { service: 'Прокат ватрушки/тюбинга', hour: '300 ₽', day: '1 000 ₽' },
];

const faqItems = [
  {
    question: 'Когда открывается горнолыжный сезон?',
    answer: 'Горнолыжный сезон на горе Яковка обычно открывается в начале декабря и продолжается до конца марта. Точные даты зависят от погодных условий и толщины снежного покрова.',
  },
  {
    question: 'Подходят ли трассы для начинающих?',
    answer: 'Да! У нас есть специальная учебная трасса длиной 300 метров с пологим уклоном, идеальная для новичков и детей. Инструкторы помогут освоить основы безопасного катания.',
  },
  {
    question: 'Нужно ли своё снаряжение или есть прокат?',
    answer: 'У нас работает пункт проката с качественным снаряжением для горных лыж и сноуборда. Всё оборудование регулярно обслуживается. Вы можете приехать без своего снаряжения.',
  },
  {
    question: 'Есть ли тюбинг и другие зимние развлечения?',
    answer: 'Да! Помимо горнолыжных трасс доступны: тюбинг (ватрушки), снегоходы, прогулки на лыжах по лесу, а после катания — русская баня на дровах.',
  },
];

export default function SeasonPage() {
  return (
    <div className="flex flex-col bg-background">
      <PageHero
        title="Горнолыжный сезон"
        subtitle="Трассы у подножия горы Яковка — катание на лыжах и сноуборде в Белокурихе для всей семьи"
        badge="❄️ Сезон: декабрь — март"
        imageSrc="/images/gallery/_6-12.jpg"
        imageAlt="Горнолыжные трассы горы Яковка в Белокурихе"
        breadcrumbs={[{ label: 'Горнолыжный сезон' }]}
      />

      {/* Features Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">Наши возможности</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-stone-900 mb-4">
              Всё для горнолыжного отдыха
            </h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto font-light">
              Горнолыжный курорт «Яковка» — идеальное место для семейного катания в Белокурихе
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((f, idx) => {
              const Icon = f.icon;
              return (
                <div key={idx} className="bg-white rounded-3xl p-8 shadow-premium border border-stone-100 hover:shadow-premium-lg hover:-translate-y-1 transition-all duration-500 group">
                  <div className="p-3 bg-primary/10 rounded-2xl w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-stone-800 mb-2">{f.title}</h3>
                  <p className="text-stone-500 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-stone-900 mb-4">
              Цены на прокат и подъёмник
            </h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto font-light">
              Актуальные цены горнолыжного сезона 2025/2026
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-premium overflow-hidden border border-stone-100">
            <div className="grid grid-cols-3 bg-stone-900 text-white text-sm font-bold">
              <div className="p-5">Услуга</div>
              <div className="p-5 text-center">1 час</div>
              <div className="p-5 text-center">Весь день</div>
            </div>
            {pricingData.map((item, idx) => (
              <div key={idx} className={`grid grid-cols-3 text-sm ${idx % 2 === 0 ? 'bg-white' : 'bg-stone-50'} border-b border-stone-100 last:border-0`}>
                <div className="p-5 font-medium text-stone-700">{item.service}</div>
                <div className="p-5 text-center text-stone-600">{item.hour}</div>
                <div className="p-5 text-center font-semibold text-stone-800">{item.day}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-stone-900">
              Вопросы о горнолыжном сезоне
            </h2>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <CTABanner 
        title="Забронируйте номер на горнолыжный сезон" 
        subtitle="Пакет «Горнолыжный» — номер + прокат + обед от 4 400 ₽. Количество мест ограничено!"
        variant="dark"
      />
    </div>
  );
}
