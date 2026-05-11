import type { Metadata } from "next";
import { Suspense } from "react";
import { Montserrat, Manrope } from "next/font/google";
import dynamic from 'next/dynamic';
import "./globals.css";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import SmoothScroll from '@/components/ui/SmoothScroll';
import { YandexMetrica } from '@/components/YandexMetrica';

// Non-critical UI — lazy loaded to reduce initial bundle
const CustomCursor = dynamic(() => import('@/components/ui/CustomCursor'));
const FloatingCTA = dynamic(() => import('@/components/FloatingCTA'));
const CookieBanner = dynamic(() => import('@/components/CookieBanner'));
const KonturWidgetMobileButton = dynamic(
  () => import('@/components/KonturWidget').then(m => ({ default: m.KonturWidgetMobileButton }))
);

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  display: 'swap',
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yakovka.ru'),
  title: {
    default: 'Загородный отель «Яковка» — горнолыжный курорт в Белокурихе, Алтай',
    template: '%s | Отель «Яковка» — Белокуриха, Алтай',
  },
  description: 'Загородный отель «Яковка» у подножия горы — горнолыжный курорт в Белокурихе. Комфортные номера 5 800 ₽, домашняя кухня, баня, 2 горнолыжные трассы. Семейный отдых на Алтае круглый год.',
  keywords: ['отель Белокуриха', 'горнолыжный курорт Алтай', 'Яковка', 'отдых в горах Алтая', 'загородный отель', 'горнолыжный сезон Белокуриха', 'семейный отдых Алтай', 'отель у подножия горы'],
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://yakovka.ru',
    siteName: 'Загородный отель «Яковка»',
    title: 'Загородный отель «Яковка» — горнолыжный курорт в Белокурихе',
    description: 'Загородный отель у подножия горы Яковка. Горнолыжные трассы, домашняя кухня, баня, комфортные номера. Семейный отдых на Алтае.',
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
    description: 'Горнолыжный курорт и семейный отдых у подножия горы. Номера 5 800 ₽.',
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
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/icon.svg" type="image/svg+xml" />
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
                "description": "Загородный отель у подножия горы Яковка в Белокурихе. Горнолыжные трассы, домашняя кухня, русская баня, комфортные номера для семейного отдыха на Алтае.",
                "url": "https://yakovka.ru",
                "telephone": "+7 (909) 097-52-09",
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
                  { "@type": "LocationFeatureSpecification", "name": "Домашняя кухня", "value": true },
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

          <Suspense fallback={null}>
            <YandexMetrica ymid="109024189" />
          </Suspense>
          <Header />
          <main className="min-h-screen pt-[72px]">
            {children}
          </main>
          <Footer />
          <FloatingCTA />
          <KonturWidgetMobileButton />
          <CookieBanner />
        </SmoothScroll>
      </body>
    </html>
  );
}
