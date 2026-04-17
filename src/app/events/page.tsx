import { Metadata } from 'next';
import EventsClient from './EventsClient';

export const metadata: Metadata = {
  title: 'Мероприятия и свадьбы — Отель «Яковка» Белокуриха',
  description: 'Организация корпоративов, свадеб, юбилеев и ретритов в загородном отеле на Алтае. До 80 человек. Банкетный зал, живая музыка, индивидуальное меню.',
  keywords: ['свадьба Белокуриха', 'корпоратив база отдыха Алтай', 'банкетный зал Яковка', 'проведение мероприятий'],
  alternates: { canonical: '/events' },
};

export default function EventsPage() {
  return <EventsClient />;
}
