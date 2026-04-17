import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Услуги и инфраструктура — Отель «Яковка»',
  description: 'Все услуги загородного отеля Яковка: русская баня, ресторан, горнолыжные трассы, прокат, парковка и детская площадка.',
  keywords: ['русская баня Белокуриха', 'услуги отеля Яковка', 'ресторан алтайской кухни', 'детская площадка', 'прокат лыж Белокуриха'],
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
