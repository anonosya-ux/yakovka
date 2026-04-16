'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface PhotoGalleryProps {
  images: string[];
  columns?: number;
}

export default function PhotoGallery({ images, columns = 3 }: PhotoGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const columnClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  }[columns];

  return (
    <>
      <div className={`grid gap-4 ${columnClass}`}>
        {images.map((src, index) => (
          <div 
            key={index} 
            className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl bg-stone-100"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={src}
              alt={`Галерея фото ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-stone-900/0 transition-colors duration-300 group-hover:bg-stone-900/10 flex items-center justify-center">
              <Maximize2 className="text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/95 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white z-50"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>

          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-colors hidden sm:block"
            onClick={prevImage}
          >
            <ChevronLeft size={32} />
          </button>

          <div className="relative w-full max-w-6xl h-[80vh] px-4 sm:px-16 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-full">
              <Image
                src={images[currentIndex]}
                alt={`Увеличенное фото ${currentIndex + 1}`}
                fill
                className="object-contain"
                quality={100}
                priority
              />
            </div>
          </div>

          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-colors hidden sm:block"
            onClick={nextImage}
          >
            <ChevronRight size={32} />
          </button>
          
          <div className="absolute bottom-6 left-0 right-0 text-center text-white/50 text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
