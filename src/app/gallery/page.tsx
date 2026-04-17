'use client';

import { useState } from 'react';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';

const filters = ['Все', 'Зима', 'Лето', 'Номера', 'Территория', 'Природа'];

const images = [
  // Зима / горы
  { src: '/images/gallery/_6-12.jpg', alt: 'Панорама зимних гор Белокурихи', category: 'Зима', aspect: 'tall' },
  { src: '/images/gallery/_6-57.jpg', alt: 'Снежные вершины Алтая', category: 'Зима', aspect: 'wide' },
  { src: '/images/gallery/_6-14.jpg', alt: 'Горнолыжная трасса горы Яковка', category: 'Зима', aspect: 'square' },
  { src: '/images/gallery/_6-78.jpg', alt: 'Зимний лес у подножия горы', category: 'Зима', aspect: 'tall' },
  { src: '/images/gallery/_6-85.jpg', alt: 'Заснеженные горы Белокурихи', category: 'Зима', aspect: 'wide' },
  { src: '/images/gallery/_6-90.jpg', alt: 'Зимний пейзаж курорта', category: 'Зима', aspect: 'square' },
  { src: '/images/gallery/IMG_20230103_165134.jpg', alt: 'Новогодний отдых в горах', category: 'Зима', aspect: 'wide' },

  // Номера
  { src: '/images/gallery/image-14-03-24-11-18.jpeg', alt: 'Номер Стандарт — уютный интерьер', category: 'Номера', aspect: 'wide' },
  { src: '/images/gallery/image-28-09-23-05-16-4.jpeg', alt: 'Номер Стандарт+ — просторная комната', category: 'Номера', aspect: 'square' },
  { src: '/images/gallery/image-28-09-23-05-05.jpeg', alt: 'Семейный номер с двумя кроватями', category: 'Номера', aspect: 'wide' },
  { src: '/images/gallery/FullSizeRender (10).jpeg', alt: 'Семейный++ — теплые полы', category: 'Номера', aspect: 'tall' },
  { src: '/images/gallery/FullSizeRender (11).jpeg', alt: 'Интерьер семейного номера', category: 'Номера', aspect: 'square' },
  { src: '/images/gallery/FullSizeRender (3).jpeg', alt: 'Спальня с видом на горы', category: 'Номера', aspect: 'wide' },
  { src: '/images/gallery/FullSizeRender (5).jpeg', alt: 'Кровать и гладильный столик', category: 'Номера', aspect: 'tall' },
  { src: '/images/gallery/FullSizeRender (7).jpeg', alt: 'Ванная комната в номере', category: 'Номера', aspect: 'square' },
  { src: '/images/gallery/FullSizeRender (8).jpeg', alt: 'Гостиная зона в семейном номере', category: 'Номера', aspect: 'wide' },

  // Территория
  { src: '/images/gallery/DSC06763.jpg', alt: 'Территория отеля — фасад здания', category: 'Территория', aspect: 'wide' },
  { src: '/images/gallery/DSC06766.jpg', alt: 'Вход в отель Яковка', category: 'Территория', aspect: 'square' },
  { src: '/images/gallery/DSC06775.jpg', alt: 'Парковая зона отеля', category: 'Территория', aspect: 'tall' },
  { src: '/images/gallery/DSC06801.jpg', alt: 'Детская площадка на территории', category: 'Территория', aspect: 'wide' },
  { src: '/images/gallery/DSC07162.jpg', alt: 'Зона барбекю и мангал', category: 'Территория', aspect: 'square' },
  { src: '/images/gallery/DSC07186.jpg', alt: 'Беседка для отдыха', category: 'Территория', aspect: 'wide' },
  { src: '/images/gallery/IMG_4498.JPG', alt: 'Территория зимой — освещение', category: 'Территория', aspect: 'tall' },
  { src: '/images/gallery/IMG_4532.JPG', alt: 'Корпус отеля зимой', category: 'Территория', aspect: 'square' },

  // Лето / Природа
  { src: '/images/gallery/DSC07904.jpg', alt: 'Летний Алтай — зелёные горы', category: 'Лето', aspect: 'wide' },
  { src: '/images/gallery/DSC07916.jpg', alt: 'Горная река Белокурихи', category: 'Лето', aspect: 'tall' },
  { src: '/images/gallery/DSC08301.jpg', alt: 'Панорама летних гор', category: 'Лето', aspect: 'square' },
  { src: '/images/gallery/DSC_5250.jpg', alt: 'Алтайские цветы и луга', category: 'Лето', aspect: 'wide' },
  { src: '/images/gallery/DSC_6022.jpg', alt: 'Горная тропа — пешие маршруты', category: 'Лето', aspect: 'tall' },
  { src: '/images/gallery/DSC_6043.jpg', alt: 'Лесная дорога к горе', category: 'Лето', aspect: 'wide' },

  // Природа
  { src: '/images/gallery/_6-1.jpg', alt: 'Восход в горах Алтая', category: 'Природа', aspect: 'wide' },
  { src: '/images/gallery/_6-5.jpg', alt: 'Закат над Чергинским хребтом', category: 'Природа', aspect: 'tall' },
  { src: '/images/gallery/_6-59.jpg', alt: 'Туман в горной долине', category: 'Природа', aspect: 'square' },
  { src: '/images/gallery/_ (103).jpg', alt: 'Панорама горного Алтая', category: 'Природа', aspect: 'wide' },
  { src: '/images/gallery/_ (83).jpg', alt: 'Хвойный лес Белокурихи', category: 'Природа', aspect: 'tall' },
  { src: '/images/gallery/IMG_7822.jpg', alt: 'Вид на долину с горы Яковка', category: 'Природа', aspect: 'wide' },
  { src: '/images/gallery/DSC_9733.JPG', alt: 'Горная панорама на рассвете', category: 'Природа', aspect: 'square' },
  { src: '/images/gallery/DSC_0054.JPG', alt: 'Дикая природа Горного Алтая', category: 'Природа', aspect: 'tall' },
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
