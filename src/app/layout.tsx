import type { Metadata } from "next";
import { Montserrat, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin", "cyrillic"],
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Загородный отель «Яковка» в Белокурихе",
  description: "Зимний и летний семейный отдых с детьми у подножия горы Яковка. Комфортные номера, ресторан, баня и живописная природа Горного Алтая.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} ${montserrat.variable} antialiased text-stone-900 bg-stone-50`}>
        {/* SEO Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Hotel", "LocalBusiness"],
              "name": "Загородный отель «Яковка»",
              "description": "Зимний и летний семейный отдых с детьми у подножия горы Яковка. Комфортные номера, ресторан, баня.",
              "url": "https://yakovka-next.vercel.app",
              "telephone": "+7 (960) 955-21-00",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Белокуриха",
                "addressCountry": "RU"
              },
              "starRating": {
                "@type": "Rating",
                "ratingValue": "4"
              },
              "image": "https://yakovka-next.vercel.app/hero.webp" 
            })
          }}
        />
        <Header />
        <main className="min-h-screen pt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
