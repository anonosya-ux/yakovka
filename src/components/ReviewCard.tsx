'use client';

import { Star } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  date: string;
  rating: number;
  text: string;
  avatar?: string;
  source?: string;
}

export default function ReviewCard({ name, date, rating, text, avatar, source = 'Яндекс Карты' }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-premium border border-stone-100 hover:shadow-premium-lg hover:-translate-y-1 transition-all duration-500 flex flex-col h-full">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-heading font-bold text-primary text-lg uppercase shrink-0">
            {avatar || name.charAt(0)}
          </div>
          <div>
            <h4 className="font-heading font-bold text-stone-800 text-base">{name}</h4>
            <p className="text-stone-400 text-sm">{date}</p>
          </div>
        </div>
        <span className="text-xs text-stone-400 font-medium bg-stone-50 px-3 py-1.5 rounded-full">{source}</span>
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? 'text-amber-400 fill-amber-400' : 'text-stone-200 fill-stone-200'}
          />
        ))}
      </div>

      {/* Text */}
      <p className="text-stone-600 leading-relaxed text-[15px] flex-grow">
        &ldquo;{text}&rdquo;
      </p>
    </div>
  );
}
