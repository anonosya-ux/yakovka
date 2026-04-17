import { Metadata } from 'next';
import SkiClient from './SkiClient';

export const metadata: Metadata = {
  title: 'Горнолыжные трассы Яковки — Катание в Белокурихе',
  description: '2 горнолыжные трассы для новичков и опытных райдеров. Прокат лыж, сноубордов, инструкторы и подъемник. Идеальный активный отдых на Алтае.',
  keywords: ['горнолыжная трасса Яковка', 'горные лыжи Белокуриха', 'учебная трасса', 'прокат сноубордов', 'бугельный подъемник'],
  alternates: { canonical: '/infrastructure/ski' },
};

export default function SkiPage() {
  return <SkiClient />;
}
