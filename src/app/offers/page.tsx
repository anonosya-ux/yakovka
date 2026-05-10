import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import { Clock, Tag, Users, Snowflake, Sun, Gift, Percent, CalendarDays } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Спецпредложения и акции',
  description: 'Актуальные акции и спецпредложения загородного отеля «Яковка» в Белокурихе. Раннее бронирование, скидки на длительное проживание, семейные пакеты. Горнолыжный сезон 5 800 ₽.',
  alternates: { canonical: '/offers' },
};

const offers = [
  {
    icon: Snowflake,
    title: 'Горнолыжный пакет',
    period: 'Декабрь – Март',
    oldPrice: '6 800 ₽',
    newPrice: '5 440 ₽',
    discount: '-20%',
    description: 'Номер «Стандарт+» + прокат горнолыжного оборудования на 4 часа + горячий обед после катания.',
    features: ['Проживание 1 ночь', 'Прокат лыж/сноуборда 4ч', 'Обед в домашняя кухняе'],
    highlight: true,
  },
  {
    icon: CalendarDays,
    title: 'Раннее бронирование',
    period: 'При бронировании за 30+ дней',
    oldPrice: null,
    newPrice: 'Скидка 15%',
    discount: '-15%',
    description: 'Забронируйте номер за 30 дней и более до заезда и получите гарантированную скидку 15% на проживание.',
    features: ['Любая категория номера', 'Бесплатная отмена за 7 дней', 'Гарантия лучшей цены'],
    highlight: false,
  },
  {
    icon: Users,
    title: 'Семейный отдых',
    period: 'Круглый год',
    oldPrice: '9 500 ₽',
    newPrice: '8 075 ₽',
    discount: '-15%',
    description: 'Семейный номер для 4+ гостей + бесплатное проживание детей до 5 лет + детское меню на завтрак.',
    features: ['Семейный номер', 'Дети до 5 лет бесплатно', 'Детское меню', 'Детская площадка'],
    highlight: false,
  },
  {
    icon: Clock,
    title: 'Длительное проживание 5+',
    period: 'При проживании от 5 ночей',
    oldPrice: null,
    newPrice: 'Скидка 20%',
    discount: '-20%',
    description: 'Остаётесь на 5 ночей и более? Получите скидку 20% на весь период проживания в любом номере.',
    features: ['Любая категория', 'Поздний выезд', 'Бронь бани со скидкой'],
    highlight: false,
  },
  {
    icon: Sun,
    title: 'Летний релакс',
    period: 'Июнь – Август',
    oldPrice: '6 800 ₽',
    newPrice: '5 440 ₽',
    discount: '-20%',
    description: 'Летний отдых в горах Алтая: номер «Стандарт+» + завтрак + экскурсия на гору Церковка.',
    features: ['Проживание 1 ночь', 'Завтрак включён', 'Экскурсия на Церковку'],
    highlight: false,
  },
  {
    icon: Gift,
    title: 'Подарочный сертификат',
    period: 'Круглый год',
    oldPrice: null,
    newPrice: '5 800 ₽',
    discount: '🎁',
    description: 'Подарите близким незабываемый отдых в горах Алтая! Подарочные сертификаты на проживание с любым номиналом.',
    features: ['Любой номинал', 'Действует 1 год', 'Красивое оформление'],
    highlight: false,
  },
];

export default function OffersPage() {
  // Generate Offer JSON-LD for each offer
  const offersSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Спецпредложения отеля «Яковка»",
    "url": "https://yakovka.ru/offers",
    "numberOfItems": offers.length,
    "itemListElement": offers.map((offer, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Offer",
        "name": offer.title,
        "description": offer.description,
        "price": offer.newPrice,
        "priceCurrency": "RUB",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Hotel",
          "name": "Загородный отель «Яковка»"
        }
      }
    }))
  };

  return (
    <div className="flex flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offersSchema) }}
      />
      <PageHero
        title="Спецпредложения"
        subtitle="Актуальные акции и выгодные пакеты для отдыха в загородном отеле «Яковка» — Белокуриха, Алтай"
        badge="🔥 Горячие предложения"
        imageSrc="/optimized/Виды/Фасады/Фасады-02.webp"
        imageAlt="Спецпредложения отеля Яковка в Белокурихе"
        breadcrumbs={[{ label: 'Спецпредложения' }]}
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">Выгодный отдых</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-stone-900 mb-4">
              Актуальные акции и пакеты
            </h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto font-light">
              Специальные условия для семейного, горнолыжного и летнего отдыха в горах Алтая
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {offers.map((offer, idx) => {
              const Icon = offer.icon;
              return (
                <div
                  key={idx}
                  className={`relative bg-white rounded-3xl p-8 md:p-10 shadow-premium border transition-all duration-500 hover:shadow-premium-lg hover:-translate-y-1 flex flex-col ${
                    offer.highlight ? 'border-primary/30 ring-2 ring-primary/10' : 'border-stone-100'
                  }`}
                >
                  {/* Discount badge */}
                  <div className="absolute top-6 right-6 bg-primary text-white text-sm font-bold px-3 py-1.5 rounded-full">
                    {offer.discount}
                  </div>

                  {/* Icon */}
                  <div className="p-3 bg-primary/10 rounded-2xl w-fit mb-6">
                    <Icon size={28} className="text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-stone-800 mb-2">{offer.title}</h3>
                  <p className="text-sm text-stone-400 font-medium mb-4">{offer.period}</p>
                  
                  {/* Price */}
                  <div className="flex items-baseline gap-3 mb-4">
                    {offer.oldPrice && (
                      <span className="text-stone-400 line-through text-lg">{offer.oldPrice}</span>
                    )}
                    <span className="font-heading text-2xl font-bold text-primary">{offer.newPrice}</span>
                  </div>

                  {/* Description */}
                  <p className="text-stone-600 text-[15px] leading-relaxed mb-6">{offer.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8 flex-grow">
                    {offer.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-stone-500">
                        <span className="text-primary">✓</span> {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="tel:+79090975209"
                    className="block w-full text-center bg-stone-900 text-white py-4 rounded-2xl font-bold hover:bg-primary transition-colors"
                  >
                    Забронировать
                  </a>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-stone-500 mb-2 text-sm">* Акции не суммируются. Подробности по телефону.</p>
          </div>
        </div>
      </section>

      <CTABanner 
        title="Не нашли подходящее предложение?" 
        subtitle="Свяжитесь с нами — мы подберём индивидуальный пакет под ваши пожелания и бюджет"
        variant="nature"
        buttonText="Позвонить"
        buttonLink="tel:+79090975209"
      />
    </div>
  );
}
