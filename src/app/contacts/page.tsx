import { Metadata } from 'next';
import ContactsClient from './ContactsClient';

export const metadata: Metadata = {
  title: 'Контакты — Загородный отель «Яковка» в Белокурихе',
  description: 'Свяжитесь с нами для бронирования номеров. Телефон: +7 (960) 955-21-00. Электронная почта и адрес отеля горы Яковка.',
  keywords: ['адрес отеля Яковка', 'телефон забронировать номер Белокуриха', 'как добраться гора Яковка'],
  alternates: { canonical: '/contacts' },
};

export default function ContactsPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Контакты — Загородный отель «Яковка»",
    "url": "https://yakovka.ru/contacts",
    "mainEntity": {
      "@type": "Hotel",
      "name": "Загородный отель «Яковка»",
      "telephone": ["+7 (960) 955-21-00", "+7 (909) 097-52-09"],
      "email": "valynkina.44@mail.ru",
      "checkinTime": "14:00",
      "checkoutTime": "12:00",
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
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactsClient />
    </>
  );
}
