/**
 * Централизованная конфигурация URL и констант проекта.
 * Все компоненты должны использовать SITE_URL отсюда, а не хардкодить.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://yakovka.ru';

export const HOTEL_NAME = 'Загородный отель «Яковка»';
export const HOTEL_ADDRESS = {
  street: 'ул. Угрюмова, д. 4',
  city: 'Белокуриха',
  region: 'Алтайский край',
  country: 'RU',
  postalCode: '659900',
  geo: { lat: 51.993, lng: 84.983 },
};
export const HOTEL_PHONE = ['+7 (909) 097-52-09'];
export const HOTEL_EMAIL = 'valynkina.44@mail.ru';
export const KONTUR_HOTEL_ID = '2774874f-1347-4c7d-a835-9791d5814751';
export const BOOKING_URL = `https://bookonline24.ru/?hotelId=${KONTUR_HOTEL_ID}`;
