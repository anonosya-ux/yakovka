import { Metadata } from 'next';
import ExcursionsClient from './ExcursionsClient';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Авторские экскурсии по Алтаю | Отель «Яковка» Белокуриха',
  description: 'Эксклюзивные экскурсии и трансфер совместно с «Як и Панты»: Чуйский тракт, Чемал, Церковка. Комфортные мини-группы и отправление прямо из отеля.',
  alternates: { canonical: 'https://yakovka.ru/excursions' },
};

const premiumExcursions = [
  {
    id: 'vip-1',
    title: 'Чуйский тракт: Гордость Алтая',
    description: 'Отправляемся прямо из Шале Яковка. Вас ждет невероятное путешествие через перевалы и долины до знаковых мест Горного Алтая.',
    level: 'Авто-тур',
    priceAdult: '4 500 ₽',
    priceChild: '4 000 ₽',
  },
  {
    id: 'vip-2',
    title: 'Большой Чемал',
    description: 'Погружение в энергетику Чемальского района. Мы заберем вас от отеля и покажем самые впечатляющие места.',
    level: 'Авто-тур + пеший',
    priceAdult: '5 000 ₽',
    priceChild: '4 700 ₽',
  },
  {
    id: 'vip-3',
    title: 'Знакомство с Белокурихой',
    description: 'Идеально для первого дня на курорте. Изучим Белокуриху Горную, поднимемся на канатке и попьем целебной воды.',
    level: 'Легкий',
    priceAdult: '2 000 ₽',
    priceChild: '1 500 ₽',
  }
];

export default function ExcursionsPage() {
  // TouristAttraction JSON-LD for rich snippets
  const excursionsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Авторские экскурсии по Алтаю — Отель «Яковка»",
    "url": "https://yakovka.ru/excursions",
    "numberOfItems": premiumExcursions.length + 4,
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

      <ExcursionsClient />
    </div>
  );
}
