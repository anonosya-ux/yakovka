import { Metadata } from 'next';
import RoomsClient from './RoomsClient';
import { fetchRooms } from '@/sanity/data';

export const metadata: Metadata = {
  title: 'Номера и цены — Загородный отель «Яковка» в Белокурихе',
  description: 'Просторные номера категории Стандарт и Семейный с панорамными видами. Цены от 3000 ₽. Снять номер у подножия горы в Белокурихе.',
  keywords: ['снять номер Белокуриха', 'отель в горах бронирование', 'семейный номер Алтай', 'размещение Яковка', 'гостиница под горой'],
  alternates: { canonical: '/rooms' },
};

export default async function RoomsPage() {
  const rooms = await fetchRooms();
  return <RoomsClient initialRooms={rooms} />;
}
