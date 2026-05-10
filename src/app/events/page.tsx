import { Metadata } from 'next';
import EventsClient from './EventsClient';

export const metadata: Metadata = {
  title: 'Мероприятия и свадьбы — Отель «Яковка» Белокуриха',
  description: 'Организация корпоративов, свадеб, юбилеев и ретритов в загородном отеле на Алтае. До 50 человек. Банкетный зал, живая музыка, индивидуальное меню.',
  keywords: ['свадьба Белокуриха', 'корпоратив база отдыха Алтай', 'банкетный зал Яковка', 'проведение мероприятий'],
  alternates: { canonical: '/events' },
};

export default function EventsPage() {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    "name": "Банкетный зал отеля «Яковка»",
    "description": "Организация корпоративов, свадеб, юбилеев и ретритов в загородном отеле на Алтае. Банкетный зал до 50 человек.",
    "url": "https://yakovka.ru/events",
    "telephone": "+7 (909) 097-52-09",
    "maximumAttendeeCapacity": 50,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <EventsClient />
    </>
  );
}
