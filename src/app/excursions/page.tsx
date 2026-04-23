import { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import { Map, Clock, Users, Camera, Mountain, TreePine, Sun, CheckCircle2, Bus, ShieldCheck, Route, Coins } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Авторские экскурсии по Алтаю | Отель «Яковка» Белокуриха',
  description: 'Эксклюзивные экскурсии и трансфер совместно с «Як и Панты»: Чуйский тракт, Чемал, Церковка. Комфортные мини-группы и отправление прямо из отеля.',
  alternates: { canonical: 'https://yakovka.ru/excursions' },
};

const premiumExcursions = [
  {
    id: 'vip-1',
    title: 'Чуйский тракт: Гордость Алтая',
    subtitle: 'Главная артерия Алтая, признанная одной из красивейших дорог мира.',
    duration: 'Весь день (12-14 ч)',
    level: 'Авто-тур',
    description: 'Отправляемся прямо из Шале Яковка. Вас ждет невероятное путешествие через перевалы и долины до знаковых мест Горного Алтая.',
    features: [
      'Семинский и Чике-Таман Перевалы',
      'Слияние Катуни и уникальные смотровые площадки',
      'Остановки в Таежной Сказке'
    ],
    priceAdult: '4 500 ₽',
    priceChild: '4 000 ₽',
    note: 'Цена при наборе группы от 4 чел. Стоимость для другого количества — 18 000 руб. за весь автомобиль.',
    img: '/optimized/Виды/Природа/Природа-01.webp',
    icon: Route
  },
  {
    id: 'vip-2',
    title: 'Большой Чемал',
    subtitle: 'Сильнейшее место для полной перезагрузки (Лето / Осень).',
    duration: 'Весь день (10-12 ч)',
    level: 'Авто-тур + пеший',
    description: 'Погружение в энергетику Чемальского района. Мы заберем вас от отеля и покажем самые впечатляющие места.',
    features: [
      'Ороктойский мост (самое глубокое место Катуни)',
      'Камышлинский Водопад (с заброской на моторафтинге)',
      'Остров Патмос и прогулка по Козьей Тропе'
    ],
    priceAdult: '5 000 ₽',
    priceChild: '4 700 ₽',
    note: 'Цена от 4 чел. Индивидуально — 20 000 руб./авто. Внимание: доставка до водопада (~1000 руб.) и питание оплачиваются отдельно.',
    img: '/optimized/Виды/Природа/Природа-02.webp',
    icon: Mountain
  },
  {
    id: 'vip-3',
    title: 'Знакомство с Белокурихой',
    subtitle: 'Активная транспортно-пешая экскурсия по курорту.',
    duration: 'Полдня (3-4 ч)',
    level: 'Легкий',
    description: 'Идеально для первого дня на курорте. Изучим Белокуриху Горную, поднимемся на канатке и попьем целебной воды.',
    features: [
      'Белокуриха Горная (музей шоколада, Андреевская слобода)',
      'Канатная дорога на гору Церковка',
      'Прогулка по терренкуру до Дуняшкиного ключа'
    ],
    priceAdult: '2 000 ₽',
    priceChild: '1 500 ₽',
    note: 'Цена от 4 чел. Индивидуально — 8 000 руб./авто. Внимание: вход в Андреевскую слободу (150 руб.) и канатная дорога (700 руб.) оплачиваются отдельно.',
    img: '/optimized/Мероприятия/Катание на лошадях/Катание на лошадях-03.webp',
    icon: Map
  }
];

const additionalExcursions = [
  { id: 4, title: 'Скала «Четыре брата»', duration: '3-4 часа', level: 'Средний', category: 'Пешие', icon: TreePine, img: '/optimized/Виды/Природа/Природа-01.webp' },
  { id: 5, title: 'Конные прогулки', duration: 'от 1 часа', level: 'Для всех', category: 'Конные', icon: Users, img: '/optimized/Виды/Природа/Природа-03.webp' },
  { id: 6, title: 'Алтайский Аил (Этно-тур)', duration: '3-4 часа', level: 'Легкий', category: 'Этно', icon: Users, img: '/optimized/Мероприятия/Свадьбы/Свадьбы-01.webp' },
  { id: 7, title: 'Прокат Квадроциклов', duration: 'от 1 часа', level: 'Активный', category: 'Мото', icon: Route, img: '/optimized/Виды/Природа/Природа-02.webp' },
];

export default function ExcursionsPage() {
  // TouristAttraction JSON-LD for each excursion
  const excursionsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Авторские экскурсии по Алтаю — Отель «Яковка»",
    "url": "https://yakovka.ru/excursions",
    "numberOfItems": premiumExcursions.length + additionalExcursions.length,
    "itemListElement": premiumExcursions.map((ex, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "TouristAttraction",
        "name": ex.title,
        "description": ex.description,
        "touristType": ex.level,
        "isAccessibleForFree": false,
        "offers": {
          "@type": "Offer",
          "price": ex.priceAdult.replace(/[^\d]/g, ''),
          "priceCurrency": "RUB",
          "description": `Взрослый: ${ex.priceAdult}, Ребёнок: ${ex.priceChild}`
        },
        "provider": {
          "@type": "Organization",
          "name": "Як и Панты / Отель «Яковка»"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 51.993,
          "longitude": 84.983
        }
      }
    }))
  };

  return (
    <div className="flex flex-col bg-stone-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(excursionsSchema) }}
      />
      <PageHero
        title="Авторские Экскурсии"
        subtitle="Откройте для себя настоящий Алтай. Эксклюзивные маршруты в комфортабельных мини-группах с выездом прямо от дверей отеля."
        badge="⛰️ Познакомьтесь с Алтаем"
        imageSrc="/optimized/Мероприятия/Катание на лошадях/Катание на лошадях-01.webp"
        imageAlt="Экскурсии отеля Яковка"
        breadcrumbs={[{ label: 'Экскурсии' }]}
      />

      {/* Партнерский Блок "Як и Панты" */}
      <section className="py-20 md:py-28 bg-white overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
            <div className="md:w-1/2 space-y-6">
              <span className="text-primary font-bold tracking-widest uppercase text-sm block">Партнерская программа</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
                Официальный партнер<br />«Як и Панты»
              </h2>
              <p className="text-stone-500 text-lg md:text-xl font-light leading-relaxed">
                Мы приглашаем гостей отеля на премиальные экскурсии по Белокурихе и Горному Алтаю. Трансфер до/из аэропорта и выезд на маршруты прямо из Шале Яковка.
              </p>
              
              <div className="pt-6 grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Bus className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-stone-900 font-bold text-lg">Комфортный автопарк</h4>
                    <p className="text-stone-500 text-sm">Новые комфортабельные 7-местные микроавтобусы.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-stone-900 font-bold text-lg">VIP-подход</h4>
                    <p className="text-stone-500 text-sm">Нет больших групп. Возможность поехать только вашей компанией.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-stone-900 font-bold text-lg">Свобода времени</h4>
                    <p className="text-stone-500 text-sm">Нет строгих ограничений по времени на объектах показа.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 relative w-full h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-stone-200 to-stone-50 rounded-[3rem] transform rotate-3" />
              <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl transform -rotate-2 transition-transform hover:rotate-0 duration-500">
                <Image
                  src="/optimized/Виды/Фасады/Фасады-02.webp"
                  alt="Автомобиль для экскурсий на фоне гор Алтая"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Эксклюзивные маршруты (Топ 3) */}
      <section className="py-20 md:py-28 bg-stone-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">Для тех, кто хочет познакомиться с настоящим Алтаем</span>
            <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Главные Маршруты
            </h2>
          </div>

          <div className="space-y-12 md:space-y-24 max-w-6xl mx-auto">
            {premiumExcursions.map((exc, idx) => (
              <div key={exc.id} className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}>
                {/* Image Block */}
                <div className="w-full md:w-1/2 relative h-[400px] md:h-[550px] rounded-[2rem] overflow-hidden group">
                  <Image 
                    src={exc.img} 
                    alt={exc.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                    <span className="bg-white/20 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Clock size={16} /> {exc.duration}
                    </span>
                    <span className="bg-primary px-4 py-2 rounded-full text-sm font-bold text-stone-900 flex items-center gap-2 shadow-lg">
                      {exc.level}
                    </span>
                  </div>
                </div>

                {/* Content Block */}
                <div className="w-full md:w-1/2 space-y-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-stone-800 border border-stone-700 mb-2">
                    <exc.icon className="text-primary w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-3xl md:text-5xl font-bold leading-tight">{exc.title}</h3>
                  <p className="text-stone-400 text-lg md:text-xl font-light italic">{exc.subtitle}</p>
                  <p className="text-stone-300 text-base md:text-lg leading-relaxed">{exc.description}</p>
                  
                  <ul className="space-y-3 pt-4">
                    {exc.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3 text-stone-200">
                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-8 border-t border-stone-800 mt-8">
                    <div className="flex flex-wrap gap-8 items-end mb-4">
                      <div>
                        <span className="block text-stone-500 text-sm uppercase tracking-wider mb-1">Взрослый билет</span>
                        <span className="text-3xl font-heading font-bold text-white">{exc.priceAdult}</span>
                      </div>
                      <div>
                        <span className="block text-stone-500 text-sm uppercase tracking-wider mb-1">Детский (до 12 лет)</span>
                        <span className="text-3xl font-heading font-bold text-white">{exc.priceChild}</span>
                      </div>
                    </div>
                    <p className="text-stone-500 text-sm leading-relaxed max-w-lg">
                      {exc.note}
                    </p>
                  </div>
                  
                  <a href="tel:+79609552100" className="mt-8 inline-block text-center bg-white text-stone-900 hover:bg-primary px-8 py-4 rounded-full font-bold transition-colors w-full md:w-auto text-lg">
                    Оставить заявку
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Дополнительные маршруты (Грид) */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-stone-900">Дополнительные направления</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {additionalExcursions.map(item => (
              <div key={item.id} className="bg-white rounded-3xl p-6 border border-stone-100 shadow-sm hover:shadow-premium transition-shadow group">
                <div className="w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <item.icon className="text-stone-700 group-hover:text-primary transition-colors" />
                </div>
                <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                <div className="flex flex-wrap gap-2 text-xs text-stone-500 mt-4">
                  <span className="bg-stone-100 px-3 py-1 rounded-full">{item.duration}</span>
                  <span className="bg-stone-100 px-3 py-1 rounded-full">{item.level}</span>
                  <span className="bg-stone-100 px-3 py-1 rounded-full">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner 
        title="Хотите индивидуальный маршрут?" 
        subtitle="Свяжитесь с нами, и мы организуем трансфер и экскурсию только для вашей компании."
        buttonText="Связаться с нами"
        buttonLink="/contacts"
        variant="nature"
      />
    </div>
  );
}
