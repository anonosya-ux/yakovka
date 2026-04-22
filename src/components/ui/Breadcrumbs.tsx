'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import React from 'react';

// Карты маршрутов для названий крошек
const pathNames: Record<string, string> = {
  rooms: 'Номера и цены',
  standart: 'Стандарт',
  family: 'Семейный',
  'family-plus': 'Семейный ++',
  cottage: 'Коттедж',
  infrastructure: 'Инфраструктура',
  restaurant: 'Ресторан "Рум Яковка"',
  banya: 'Русская баня',
  ski: 'Горнолыжный склон',
  legal: 'Юридическая информация',
  rules: 'Правила проживания',
  offer: 'Договор-оферта',
  privacy: 'Политика конфиденциальности',
  payment: 'Способы оплаты',
  about: 'О курорте',
  invest: 'Инвестиции',
  services: 'Услуги',
  events: 'Мероприятия',
  contacts: 'Контакты',
};

interface BreadcrumbsProps {
  variant?: 'light' | 'dark'; // light = темный текст для светлого фона, dark = белый текст для темного фона
}

export default function Breadcrumbs({ variant = 'dark' }: BreadcrumbsProps) {
  const pathname = usePathname();
  
  if (pathname === '/') return null;

  const pathSegments = pathname.split('/').filter((v) => v.length > 0);
  
  // Генерация JSON-LD Schema.org BreadcrumbList для SEO
  const schemaList = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Главная',
      item: 'https://yakovka.ru/',
    },
  ];

  let currentLink = '';
  pathSegments.forEach((segment, index) => {
    currentLink += `/${segment}`;
    schemaList.push({
      '@type': 'ListItem',
      position: index + 2,
      name: pathNames[segment] || segment,
      item: `https://yakovka.ru${currentLink}`,
    });
  });

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: schemaList,
  };

  const textClass = variant === 'dark' ? 'text-white/70' : 'text-slate-500';
  const hoverClass = variant === 'dark' ? 'hover:text-white' : 'hover:text-blue-600';
  const activeClass = variant === 'dark' ? 'text-white' : 'text-slate-900';
  const iconClass = variant === 'dark' ? 'text-white/40' : 'text-slate-300';
  const ringClass = variant === 'dark' ? 'focus-visible:ring-white/50' : 'focus-visible:ring-blue-600/50';

  return (
    <nav aria-label="Breadcrumb" className="w-full relative z-10 mb-8 max-w-[1240px] px-0">
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <ol className={`flex items-center space-x-2 text-sm ${textClass} font-medium overflow-x-auto whitespace-nowrap scrollbar-hide py-2`}>
        <li className="flex items-center">
          <Link href="/" className={`${hoverClass} transition-colors flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 ${ringClass} rounded-sm`}>
            <Home size={14} />
            <span className="sr-only">Главная</span>
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1;
          const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
          
          return (
            <React.Fragment key={segment}>
              <ChevronRight size={14} className={`${iconClass} flex-shrink-0 mx-1`} />
              <li className="flex items-center">
                {!isLast ? (
                  <Link href={href} className={`${hoverClass} transition-colors focus-visible:outline-none focus-visible:ring-2 ${ringClass} rounded-sm`}>
                    {pathNames[segment] || segment}
                  </Link>
                ) : (
                  <span className={`${activeClass} font-semibold line-clamp-1`} aria-current="page">
                    {pathNames[segment] || segment}
                  </span>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
