import { Metadata } from 'next';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
  title: 'Фотогалерея — Загородный отель «Яковка» Белокуриха',
  description: 'Более 80 фотографий загородного отеля «Яковка» в Белокурихе: горнолыжные трассы, номера, ресторан, баня, бассейн, природа Алтая. Смотрите и убедитесь сами!',
  keywords: ['фото отель Яковка', 'фотогалерея Белокуриха', 'горнолыжный курорт фото Алтай', 'отель у горы фото'],
  alternates: { canonical: '/gallery' },
};

export default function GalleryPage() {
  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Фотогалерея загородного отеля «Яковка»",
    "description": "Более 80 фотографий: горнолыжные трассы, номера, ресторан, баня, бассейн, природа Алтая",
    "url": "https://yakovka.ru/gallery",
    "about": {
      "@type": "Hotel",
      "name": "Загородный отель «Яковка»",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Белокуриха",
        "addressRegion": "Алтайский край",
        "addressCountry": "RU"
      }
    },
    "numberOfItems": 33
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
      <GalleryClient />
    </>
  );
}
