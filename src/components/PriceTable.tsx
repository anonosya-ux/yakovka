import React from 'react';

export interface PriceItem {
  name: string;
  price: string | number;
  description?: string;
  highlighted?: boolean;
}

interface PriceTableProps {
  title: string;
  subtitle?: string;
  items: PriceItem[];
}

export function PriceTable({ title, subtitle, items }: PriceTableProps) {
  return (
    <div className="bg-white rounded-[2rem] border border-stone-100 shadow-sm hover:shadow-premium transition-shadow p-8 md:p-10 w-full">
      <div className="mb-8">
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-stone-900">{title}</h3>
        {subtitle && <p className="text-stone-500 mt-2">{subtitle}</p>}
      </div>
      
      <div className="flex flex-col gap-4">
        {items.map((item, idx) => (
          <div 
            key={idx} 
            className={`flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b border-stone-100 last:border-0 ${item.highlighted ? 'bg-primary/5 -mx-4 px-4 rounded-xl border-transparent' : ''}`}
          >
            <div className="flex flex-col gap-1 pr-4">
              <span className={`text-lg font-bold ${item.highlighted ? 'text-primary' : 'text-stone-800'}`}>
                {item.name}
              </span>
              {item.description && (
                <span className="text-stone-500 text-sm">{item.description}</span>
              )}
            </div>
            
            <div className="mt-2 md:mt-0 whitespace-nowrap">
              <span className="font-heading text-xl font-bold text-stone-900 bg-stone-50 px-4 py-2 rounded-xl border border-stone-100">
                {typeof item.price === 'number' ? `${item.price.toLocaleString()} ₽` : item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
