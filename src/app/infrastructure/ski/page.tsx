import { Metadata } from 'next';
import SkiClient from './SkiClient';

export const metadata: Metadata = {
  title: 'Горнолыжный склон — Отель «Яковка»',
  description: 'Собственный горнолыжный склон курорта Яковка в Белокурихе. Бугельный подъемник, прокат снаряжения, трассы для новичков и профессионалов.',
  keywords: ['горнолыжный курорт Белокуриха', 'склон Яковка', 'прокат горных лыж', 'схема трасс', 'бугельный подъемник'],
  alternates: { canonical: '/infrastructure/ski' },
};

export default function SkiPage() {
  return <SkiClient />;
}
