import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'Об отеле — Загородный отель «Яковка» в Белокурихе',
  description: 'История загородного отеля и горнолыжного комплекса «Яковка». Эко-отдых, премиальный сервис у подножия горы, семейный отдых на Алтае.',
  keywords: ['отель Яковка', 'о курорте Яковка', 'история Яковка Белокуриха', 'семейный отдых Алтай'],
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return <AboutClient />;
}
