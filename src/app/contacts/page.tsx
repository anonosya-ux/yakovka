import { Metadata } from 'next';
import ContactsClient from './ContactsClient';

export const metadata: Metadata = {
  title: 'Контакты — Загородный отель «Яковка» в Белокурихе',
  description: 'Свяжитесь с нами для бронирования номеров. Телефон: +7 (960) 955-21-00. Электронная почта и адрес отеля горы Яковка.',
  keywords: ['адрес отеля Яковка', 'телефон забронировать номер Белокуриха', 'как добраться гора Яковка'],
  alternates: { canonical: '/contacts' },
};

export default function ContactsPage() {
  return <ContactsClient />;
}
