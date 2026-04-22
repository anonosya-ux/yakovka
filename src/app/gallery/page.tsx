'use client';

import { useState } from 'react';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';

const filters = ['Все', 'Зима', 'Лето', 'Номера', 'Территория', 'Природа'];

const images = [
  // Зима / Горные лыжи
  { src: '/optimized/Мероприятия/Горные лыжи/Горные лыжи-01.webp', alt: 'Горнолыжный спуск Яковка', category: 'Зима', aspect: 'wide' },
  { src: '/optimized/Мероприятия/Горные лыжи/Горные лыжи-02.webp', alt: 'Катание на лыжах', category: 'Зима', aspect: 'square' },
  { src: '/optimized/Мероприятия/Горные лыжи/Горные лыжи-03.webp', alt: 'Склоны Белокурихи', category: 'Зима', aspect: 'tall' },
  { src: '/optimized/Мероприятия/Горные лыжи/Горные лыжи-04.webp', alt: 'Подъемник', category: 'Зима', aspect: 'wide' },
  { src: '/optimized/Мероприятия/Горные лыжи/Горные лыжи-05.webp', alt: 'Зимние пейзажи', category: 'Зима', aspect: 'square' },
  { src: '/optimized/Мероприятия/Горные лыжи/Горные лыжи-06.webp', alt: 'Сноубордисты', category: 'Зима', aspect: 'wide' },
  { src: '/optimized/Мероприятия/Горные лыжи/Горные лыжи-07.webp', alt: 'Горнолыжка Алтай', category: 'Зима', aspect: 'tall' },

  // Лето
  { src: '/optimized/Мероприятия/Катание на лошадях/Катание на лошадях-01.webp', alt: 'Прогулки на лошадях', category: 'Лето', aspect: 'wide' },
  { src: '/optimized/Мероприятия/Катание на лошадях/Катание на лошадях-02.webp', alt: 'Конные прогулки Алтай', category: 'Лето', aspect: 'square' },
  { src: '/optimized/Мероприятия/Катание на лошадях/Катание на лошадях-03.webp', alt: 'Лето в Белокурихе', category: 'Лето', aspect: 'tall' },
  { src: '/optimized/Мероприятия/Катание на лошадях/Катание на лошадях-04.webp', alt: 'Верховая езда', category: 'Лето', aspect: 'wide' },
  { src: '/optimized/Мероприятия/Катание на лошадях/Катание на лошадях-05.webp', alt: 'Отдых на природе', category: 'Лето', aspect: 'square' },

  // Номера
  { src: '/optimized/Номера/Семейный/Семейный-01.webp', alt: 'Семейный номер', category: 'Номера', aspect: 'wide' },
  { src: '/optimized/Номера/Семейный+/Семейный+-01.webp', alt: 'Семейный + номер', category: 'Номера', aspect: 'square' },
  { src: '/optimized/Номера/Семейный+/Семейный+-02.webp', alt: 'Интерьер семейного', category: 'Номера', aspect: 'wide' },
  { src: '/optimized/Номера/Семейный++/Семейный++-01.webp', alt: 'Коттедж (Семейный ++)', category: 'Номера', aspect: 'tall' },
  { src: '/optimized/Номера/Стандарт/Стандарт-01.webp', alt: 'Стандартный номер', category: 'Номера', aspect: 'wide' },
  { src: '/optimized/Номера/Стандарт+/Стандарт+-01.webp', alt: 'Стандарт+', category: 'Номера', aspect: 'square' },

  // Территория (Бассейн, Кухня, Фасады)
  { src: '/optimized/Виды/Бассейн/Бассейн-01.webp', alt: 'Летний бассейн отеля', category: 'Территория', aspect: 'wide' },
  { src: '/optimized/Виды/Бассейн/Бассейн-02.webp', alt: 'Зона отдыха у бассейна', category: 'Территория', aspect: 'tall' },
  { src: '/optimized/Виды/Бассейн/Бассейн-03.webp', alt: 'Подогреваемый бассейн', category: 'Территория', aspect: 'square' },
  { src: '/optimized/Виды/Бассейн/Бассейн-04.webp', alt: 'Шезлонги', category: 'Территория', aspect: 'wide' },
  { src: '/optimized/Виды/Фасады/Фасады-01.webp', alt: 'Фасад отеля Яковка', category: 'Территория', aspect: 'square' },
  { src: '/optimized/Виды/Фасады/Фасады-02.webp', alt: 'Отель у подножия горы', category: 'Территория', aspect: 'tall' },
  { src: '/optimized/Виды/Фасады/Фасады-03.webp', alt: 'Территория базы отдыха', category: 'Территория', aspect: 'wide' },
  { src: '/optimized/Виды/Фасады/Фасады-04.webp', alt: 'Домики для отдыха', category: 'Территория', aspect: 'square' },
  { src: '/optimized/Виды/Кухня/Кухня-01.webp', alt: 'Заказное меню', category: 'Территория', aspect: 'tall' },
  { src: '/optimized/Виды/Кухня/Кухня-02.webp', alt: 'Кафе и кухня', category: 'Территория', aspect: 'wide' },
  { src: '/optimized/Мероприятия/Свадьбы/Свадьбы-01.webp', alt: 'Свадьбы и банкеты', category: 'Территория', aspect: 'wide' },
  { src: '/optimized/Мероприятия/Свадьбы/Свадьбы-02.webp', alt: 'Мероприятия в отеле', category: 'Территория', aspect: 'square' },

  // Природа
  { src: '/optimized/Виды/Природа/Природа-01.webp', alt: 'Горы Алтая', category: 'Природа', aspect: 'tall' },
  { src: '/optimized/Виды/Природа/Природа-02.webp', alt: 'Лесной пейзаж', category: 'Природа', aspect: 'wide' },
  { src: '/optimized/Виды/Женщины/Женщины-01.webp', alt: 'Отдых и релакс', category: 'Природа', aspect: 'square' },
  { src: '/optimized/Виды/Женщины/Женщины-02.webp', alt: 'Гармония с природой', category: 'Природа', aspect: 'wide' },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('Все');
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filteredImages = activeFilter === 'Все' 
    ? images 
    : images.filter(img => img.category === activeFilter);

  return (
    <div className="flex flex-col bg-background">
      <PageHero
        title="Фотогалерея"
        subtitle="Загородный отель «Яковка» в Белокурихе — красота Горного Алтая в каждом кадре"
        badge="📸 Более 80 фотографий"
        imageSrc="/images/gallery/_6-57.jpg"
        imageAlt="Фотогалерея отеля Яковка"
        breadcrumbs={[{ label: 'Галерея' }]}
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-stone-900 text-white shadow-premium'
                    : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-400 hover:text-stone-900'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
            {filteredImages.map((img, idx) => (
              <div
                key={`${activeFilter}-${idx}`}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => setLightboxIdx(idx)}
              >
                <div className={`relative overflow-hidden rounded-2xl bg-stone-200 ${
                  img.aspect === 'tall' ? 'aspect-[3/4]' : 
                  img.aspect === 'wide' ? 'aspect-[4/3]' : 'aspect-square'
                }`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/30 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-white text-sm font-medium bg-stone-900/60 backdrop-blur-md px-4 py-2 rounded-full">
                      {img.alt}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/95 flex items-center justify-center p-4"
          onClick={() => setLightboxIdx(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white text-3xl z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md"
            onClick={() => setLightboxIdx(null)}
          >
            ✕
          </button>
          {lightboxIdx > 0 && (
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-2xl z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md"
              onClick={(e) => { e.stopPropagation(); setLightboxIdx(lightboxIdx - 1); }}
            >
              ←
            </button>
          )}
          {lightboxIdx < filteredImages.length - 1 && (
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-2xl z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md"
              onClick={(e) => { e.stopPropagation(); setLightboxIdx(lightboxIdx + 1); }}
            >
              →
            </button>
          )}
          <div className="relative w-full max-w-5xl aspect-[16/10]">
            <Image
              src={filteredImages[lightboxIdx].src}
              alt={filteredImages[lightboxIdx].alt}
              fill
              className="object-contain"
            />
          </div>
          <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {filteredImages[lightboxIdx].alt} — {lightboxIdx + 1}/{filteredImages.length}
          </p>
        </div>
      )}

      <CTABanner variant="nature" />
    </div>
  );
}
