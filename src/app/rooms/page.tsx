import { Metadata } from 'next';
import RoomsClient from './RoomsClient';

export const metadata: Metadata = {
  title: 'Номера и цены — Загородный отель «Яковка» в Белокурихе',
  description: 'Просторные номера категории Стандарт и Семейный с панорамными видами. Цены от 3000 ₽. Снять номер у подножия горы в Белокурихе.',
  keywords: ['снять номер Белокуриха', 'отель в горах бронирование', 'семейный номер Алтай', 'размещение Яковка', 'гостиница под горой'],
  alternates: { canonical: '/rooms' },
};

export default function RoomsPage() {
  return <RoomsClient />;
}
