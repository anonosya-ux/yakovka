import { Metadata } from 'next';
import SkiClient from './SkiClient';

export const metadata: Metadata = {
  title: 'Горнолыжные трассы Яковки — Катание в Белокурихе',
  description: '2 горнолыжные трассы для новичков и опытных райдеров. Прокат лыж, сноубордов, инструкторы и подъемник. Идеальный активный отдых на Алтае.',
  keywords: ['горнолыжная трасса Яковка', 'горные лыжи Белокуриха', 'учебная трасса', 'прокат сноубордов', 'бугельный подъемник'],
  alternates: { canonical: '/infrastructure/ski' },
};

export default function SkiPage() {
  const skiSchema = {
    "@context": "https://schema.org",
    "@type": "SkiResort",
    "name": "ГЛК «Яковка»",
    "description": "Горнолыжный комплекс с 4 трассами для начинающих и среднего уровня у подножия горы Яковка в Белокурихе",
    "url": "https://yakovka.ru/infrastructure/ski",
    "telephone": "+7 (960) 955-21-00",
    "numberOfRuns": 4,
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "10:00",
      "closes": "18:00"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. Угрюмова, д. 4",
      "addressLocality": "Белокуриха",
      "addressRegion": "Алтайский край",
      "postalCode": "659900",
      "addressCountry": "RU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.993,
      "longitude": 84.983
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(skiSchema) }}
      />
      <SkiClient />
    </>
  );
}
