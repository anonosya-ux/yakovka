import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import FAQAccordion from '@/components/FAQAccordion';
import { MapPin, Car, Plane, Train, Clock, Navigation } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Как добраться до отеля «Яковка»',
  description: 'Подробная инструкция как добраться до загородного отеля «Яковка» в Белокурихе из Барнаула, Новосибирска и Москвы. Маршруты на авто, поезде и самолёте. Трансфер.',
  alternates: { canonical: '/how-to-get' },
};

const routes = [
  {
    icon: Car,
    from: 'Из Барнаула',
    distance: '250 км',
    time: '3,5 часа',
    description: 'Выехать по трассе Р-256 «Чуйский тракт» в сторону Бийска. От Бийска — по дороге на Белокуриху (40 км). Дорога хорошего качества, асфальт. Яковка расположена на ул. Угрюмова, д. 4.',
    route: 'Барнаул → Бийск → Белокуриха'
  },
  {
    icon: Car,
    from: 'Из Новосибирска',
    distance: '450 км',
    time: '5–6 часов',
    description: 'По трассе через Барнаул или через Бийск. Рекомендуем ехать через Бийск по федеральной трассе — качество дорогое лучше. С автозаправками по пути проблем нет.',
    route: 'Новосибирск → Барнаул → Бийск → Белокуриха'
  },
  {
    icon: Plane,
    from: 'Самолётом',
    distance: 'Аэропорт Барнаул',
    time: 'Далее 3,5 ч на авто',
    description: 'Ближайший аэропорт — Барнаул (имени Г.С. Титова). Из аэропорта до Белокурихи можно добраться на такси, автобусе или трансфере. Также есть аэропорт Горно-Алтайск.',
    route: 'Аэропорт Барнаул → такси/трансфер → Белокуриха'
  },
  {
    icon: Train,
    from: 'На поезде',
    distance: 'ж/д станция Бийск',
    time: 'Далее 40 мин на авто',
    description: 'Ближайшая железнодорожная станция — Бийск. От Бийска до Белокурихи ходят регулярные автобусы и микроавтобусы. Также можно заказать трансфер.',
    route: 'Ж/д «Бийск» → автобус/такси → Белокуриха'
  },
];

const faqItems = [
  {
    question: 'Можно ли заказать трансфер?',
    answer: 'Да, мы организуем трансфер из аэропорта Барнаула или с ж/д станции Бийск. Стоимость и условия уточняйте при бронировании по телефону +7 (909) 097-52-09.',
  },
  {
    question: 'Есть ли парковка при отеле?',
    answer: 'Да, на территории отеля «Яковка» есть бесплатная парковка под видеонаблюдением.',
  },
  {
    question: 'Какое состояние дороги зимой?',
    answer: 'Дорога до Белокурихи чистится регулярно, но зимой рекомендуем зимнюю резину и осторожное вождение, особенно на участке Бийск–Белокуриха (горный серпантин).',
  },
];

export default function HowToGetPage() {
  return (
    <div className="flex flex-col bg-background">
      <PageHero
        title="Как добраться"
        subtitle="Маршруты до загородного отеля «Яковка» из Барнаула, Новосибирска и других городов"
        badge="📍 г. Белокуриха, Алтайский край"
        imageSrc="/optimized/Мероприятия/Горные лыжи/Горные лыжи-02.webp"
        imageAlt="Дорога к отелю Яковка в Белокурихе"
        breadcrumbs={[{ label: 'Как добраться' }]}
      />

      {/* Routes Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">Маршруты</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-stone-900 mb-4">
              Выберите удобный способ
            </h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto font-light">
              Белокуриха — один из самых доступных курортов Алтая, до нас легко добраться на любом транспорте
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {routes.map((route, idx) => {
              const Icon = route.icon;
              return (
                <div key={idx} className="bg-white rounded-3xl p-8 md:p-10 shadow-premium border border-stone-100 hover:shadow-premium-lg hover:-translate-y-1 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-2xl">
                      <Icon size={28} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-stone-800">{route.from}</h3>
                      <div className="flex items-center gap-3 text-sm text-stone-400 mt-1">
                        <span className="flex items-center gap-1"><Navigation size={12} />{route.distance}</span>
                        <span className="flex items-center gap-1"><Clock size={12} />{route.time}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-stone-600 leading-relaxed mb-4">{route.description}</p>
                  
                  <div className="bg-stone-50 rounded-xl px-4 py-3 text-sm text-stone-500 font-medium">
                    🗺️ {route.route}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Address Section */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-3xl p-10 md:p-16 shadow-premium max-w-4xl mx-auto text-center">
            <MapPin size={40} className="text-primary mx-auto mb-6" />
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-stone-800 mb-4">Наш адрес</h3>
            <p className="text-stone-600 text-lg mb-2">Алтайский край, г. Белокуриха</p>
            <p className="text-stone-800 text-xl font-semibold mb-6">ул. Угрюмова, д. 4</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a
                href="tel:+79090975209"
                className="inline-flex items-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-full font-bold hover:bg-primary transition-colors"
              >
                📞 +7 (909) 097-52-09
              </a>
              <a
                href="https://yandex.ru/maps/org/yakovka/1062999531/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors"
              >
                Открыть на карте
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-stone-900">
              Вопросы о дороге
            </h2>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <CTABanner 
        title="Поможем добраться!" 
        subtitle="Свяжитесь с нами для организации трансфера или получения подробных инструкций по маршруту"
        variant="dark"
      />
    </div>
  );
}
