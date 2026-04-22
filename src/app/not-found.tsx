'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Home, Map } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { YakovkaLogo } from '@/components/Logo';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image - Stunning Altai Nature */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/optimized/Виды/Природа/Природа-01.webp" 
          alt="Алтай природа" 
          fill 
          className="object-cover"
          priority
        />
        {/* Elegant light overlay instead of heavy dark */}
        <div className="absolute inset-0 bg-stone-100/30 backdrop-blur-[8px]" />
      </div>

      {/* Glassmorphism Content Card */}
      <div className="relative z-10 w-full max-w-3xl px-6">
        <div className="bg-white/80 backdrop-blur-2xl border border-white p-12 md:p-20 rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] text-center flex flex-col items-center">
          
          <YakovkaLogo className="w-16 h-16 mb-8 text-stone-900 opacity-80" />
          
          <div className="relative inline-block mb-6">
            <h1 className="font-heading text-8xl md:text-9xl font-black text-stone-900 tracking-tighter mix-blend-multiply opacity-10">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-heading text-3xl md:text-4xl font-bold text-stone-900 whitespace-nowrap">
                Свернули не туда?
              </span>
            </div>
          </div>
          
          <p className="text-stone-600 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-lg">
            Похоже, этой страницы не существует. Но в горах Алтая даже заблудившись, можно найти прекрасное. Давайте вернемся на основную тропу.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-stone-900 hover:bg-primary text-white rounded-2xl py-7 px-10 text-lg font-bold shadow-xl transition-all duration-300">
                <Home className="mr-3 w-5 h-5" />
                На главную
              </Button>
            </Link>
            
            <Link href="/rooms" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full border-stone-200 bg-white/50 text-stone-700 hover:text-stone-900 hover:border-stone-400 hover:bg-white rounded-2xl py-7 px-10 text-lg font-bold transition-all duration-300 shadow-sm">
                <Map className="mr-3 w-5 h-5" />
                Каталог номеров
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
