import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export interface ActivityPriceItem {
  name: string;
  price: string | number;
  description?: string;
  highlighted?: boolean;
}

interface ActivityCardProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  items: ActivityPriceItem[];
  actionLink?: string;
  actionText?: string;
}

export function ActivityCard({ title, subtitle, imageSrc, items, actionLink = '/booking', actionText = 'Забронировать' }: ActivityCardProps) {
  return (
    <div className="relative group rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-premium-lg transition-all duration-700 w-full min-h-[500px] flex flex-col justify-end">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 md:p-10 w-full flex flex-col h-full justify-end">
        <div className="mb-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight drop-shadow-md">
            {title}
          </h3>
          {subtitle && (
            <p className="text-stone-300 text-lg font-light max-w-md drop-shadow-sm">
              {subtitle}
            </p>
          )}
        </div>

        {/* Pricing List - Glassmorphism */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[1.5rem] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
          <div className="flex flex-col gap-1">
            {items.map((item, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-white/10 last:border-0 ${
                  item.highlighted ? 'bg-primary/20 -mx-4 px-4 rounded-xl border-transparent shadow-[0_0_15px_rgba(152,193,217,0.2)]' : ''
                }`}
              >
                <div className="flex flex-col gap-0.5 pr-4">
                  <span className={`font-semibold ${item.highlighted ? 'text-white' : 'text-stone-100'}`}>
                    {item.name}
                  </span>
                  {item.description && (
                    <span className="text-stone-400 text-sm font-light">
                      {item.description}
                    </span>
                  )}
                </div>
                
                <div className="mt-1 sm:mt-0 whitespace-nowrap">
                  <span className={`font-heading text-xl font-bold ${item.highlighted ? 'text-primary-light drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]' : 'text-white'}`}>
                    {typeof item.price === 'number' ? `${item.price.toLocaleString()} ₽` : item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Action Button */}
          {actionLink && (
            <div className="mt-6 pt-2 h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 group-hover:overflow-visible transition-all duration-500 ease-in-out">
              <Link 
                href={actionLink}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-white rounded-xl font-bold hover:bg-white hover:text-stone-900 transition-colors shadow-lg"
              >
                {actionText}
                <ArrowRight size={18} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
