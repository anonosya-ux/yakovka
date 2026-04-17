import type { Metadata } from "next";
import { Montserrat, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import SmoothScroll from '@/components/ui/SmoothScroll';
import CustomCursor from '@/components/ui/CustomCursor';
import FloatingCTA from '@/components/FloatingCTA';

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin", "cyrillic"],
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yakovka-next.vercel.app'),
  title: {
    default: 'Загородный отель «Яковка» — горнолыжный курорт в Белокурихе, Алтай',
    template: '%s | Отель «Яковка» — Белокуриха, Алтай',
  },
  description: 'Загородный отель «Яковка» у подножия горы — горнолыжный курорт в Белокурихе. Комфортные номера от 3000 ₽, ресторан, баня, 2 горнолыжные трассы. Семейный отдых на Алтае круглый год.',
  keywords: ['отель Белокуриха', 'горнолыжный курорт Алтай', 'Яковка', 'отдых в горах Алтая', 'загородный отель', 'горнолыжный сезон Белокуриха', 'семейный отдых Алтай', 'отель у подножия горы'],
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://yakovka-next.vercel.app',
    siteName: 'Загородный отель «Яковка»',
    title: 'Загородный отель «Яковка» — горнолыжный курорт в Белокурихе',
    description: 'Загородный отель у подножия горы Яковка. Горнолыжные трассы, ресторан, баня, комфортные номера. Семейный отдых на Алтае.',
    images: [
      {
        url: '/images/gallery/_6-12.jpg',
        width: 1200,
        height: 630,
        alt: 'Загородный отель «Яковка» в Белокурихе — вид на горы Алтая',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Загородный отель «Яковка» — Белокуриха, Алтай',
    description: 'Горнолыжный курорт и семейный отдых у подножия горы. Номера от 3000 ₽.',
    images: ['/images/gallery/_6-12.jpg'],
  },
  alternates: {
    canonical: 'https://yakovka-next.vercel.app',
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
                "url": "https://yakovka-next.vercel.app",
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
                  "https://yakovka-next.vercel.app/images/gallery/_6-12.jpg",
                  "https://yakovka-next.vercel.app/images/gallery/image-14-03-24-11-18.jpeg"
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
                    "item": "https://yakovka-next.vercel.app"
                  }
                ]
              })
            }}
          />

          <Header />
          <main className="min-h-screen pt-[72px]">
            {children}
          </main>
          <Footer />
          <FloatingCTA />
        </SmoothScroll>
      </body>
    </html>
  );
}
