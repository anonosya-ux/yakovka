import { Metadata } from 'next';
import InvestClient from './InvestClient';

export const metadata: Metadata = {
  title: 'Инвестиционный проект — Загородный отель «Яковка»',
  description: 'Инвестируйте в развитие круглогодичного горнолыжного курорта «Яковка». Планы по строительству подъемников, новых трасс и туристической инфраструктуры в Белокурихе.',
  keywords: ['инвестиции Белокуриха', 'инвестиции в туризм Алтай', 'развитие курорта Яковка', 'гостиничный бизнес Алтай'],
  alternates: { canonical: '/invest' },
};

export default function InvestPage() {
  return <InvestClient />;
}
