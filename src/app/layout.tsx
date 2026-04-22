import type { Metadata } from "next";
import { Suspense } from "react";
import { Montserrat, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import SmoothScroll from '@/components/ui/SmoothScroll';
import CustomCursor from '@/components/ui/CustomCursor';
import FloatingCTA from '@/components/FloatingCTA';
import { KonturWidgetMobileButton } from '@/components/KonturWidget';
import { YandexMetrica } from '@/components/YandexMetrica';

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin", "cyrillic"],
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yakovka.ru'),
  title: {
    default: 'Загородный отель «Яковка» — горнолыжный курорт в Белокурихе, Алтай',
    template: '%s | Отель «Яковка» — Белокуриха, Алтай',
  },
  description: 'Загородный отель «Яковка» у подножия горы — горнолыжный курорт в Белокурихе. Комфортные номера от 5 800 ₽, ресторан, баня, 2 горнолыжные трассы. Семейный отдых на Алтае круглый год.',
  keywords: ['отель Белокуриха', 'горнолыжный курорт Алтай', 'Яковка', 'отдых в горах Алтая', 'загородный отель', 'горнолыжный сезон Белокуриха', 'семейный отдых Алтай', 'отель у подножия горы'],
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://yakovka.ru',
    siteName: 'Загородный отель «Яковка»',
    title: 'Загородный отель «Яковка» — горнолыжный курорт в Белокурихе',
    description: 'Загородный отель у подножия горы Яковка. Горнолыжные трассы, ресторан, баня, комфортные номера. Семейный отдых на Алтае.',
    images: [
      {
        url: '/optimized/Мероприятия/Горные лыжи/Горные лыжи-02.webp',
        width: 1200,
        height: 630,
        alt: 'Загородный отель «Яковка» в Белокурихе — вид на горы Алтая',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Загородный отель «Яковка» — Белокуриха, Алтай',
    description: 'Горнолыжный курорт и семейный отдых у подножия горы. Номера от 5 800 ₽.',
    images: ['/optimized/Мероприятия/Горные лыжи/Горные лыжи-02.webp'],
  },
  alternates: {
    canonical: 'https://yakovka.ru',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a3a1a" />
      </head>
      <body className={`${manrope.variable} ${montserrat.variable} antialiased text-stone-900 bg-stone-50`}>
        <CustomCursor />
        <SmoothScroll>
          {/* Comprehensive Schema.org Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": ["Hotel", "LodgingBusiness"],
                "name": "Загородный отель «Яковка»",
                "description": "Загородный отель у подножия горы Яковка в Белокурихе. Горнолыжные трассы, ресторан, русская баня, комфортные номера для семейного отдыха на Алтае.",
                "url": "https://yakovka.ru",
                "telephone": "+7 (960) 955-21-00",
                "email": "info@yakovka.ru",
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
                },
                "starRating": {
                  "@type": "Rating",
                  "ratingValue": "4"
                },
                "priceRange": "₽₽",
                "checkinTime": "14:00",
                "checkoutTime": "12:00",
                "numberOfRooms": 30,
                "amenityFeature": [
                  { "@type": "LocationFeatureSpecification", "name": "Горнолыжные трассы", "value": true },
                  { "@type": "LocationFeatureSpecification", "name": "Ресторан", "value": true },
                  { "@type": "LocationFeatureSpecification", "name": "Русская баня", "value": true },
                  { "@type": "LocationFeatureSpecification", "name": "Бесплатный Wi-Fi", "value": true },
                  { "@type": "LocationFeatureSpecification", "name": "Парковка", "value": true },
                  { "@type": "LocationFeatureSpecification", "name": "Детская площадка", "value": true }
                ],
                "image": [
                  "https://yakovka.ru/optimized/Мероприятия/Горные лыжи/Горные лыжи-02.webp",
                  "https://yakovka.ru/optimized/Виды/Природа/Природа-01.webp"
                ],
                "sameAs": [
                  "https://yandex.ru/maps/org/yakovka/1062999531/"
                ]
              })
            }}
          />

          {/* BreadcrumbList Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Главная",
                    "item": "https://yakovka.ru"
                  }
                ]
              })
            }}
          />

          {/* <Suspense fallback={null}>
  <YandexMetrica ymid="YOUR_YANDEX_METRICA_ID" />
</Suspense> */}
          <Header />
          <main className="min-h-screen pt-[72px]">
            {children}
          </main>
          <Footer />
          <FloatingCTA />
          <KonturWidgetMobileButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
