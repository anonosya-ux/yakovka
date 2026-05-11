/**
 * Data layer with Sanity CMS fallback to hardcoded data.
 * If Sanity is configured and has data → use CMS data.
 * If not → use hardcoded fallback (site works without CMS).
 */

import { getRooms, getOffers, getSiteSettings, getGalleryImages } from './queries';
import { urlFor } from './client';

// ─── Types ───

export interface RoomData {
  slug: string;
  title: string;
  size: string;
  guestsText: string;
  maxGuests: number;
  priceText: string;
  priceNum: number;
  images: string[];
  description: string;
  features: string[];
}

export interface OfferData {
  id: string;
  title: string;
  desc: string;
  bg: string;
}

export interface SiteSettingsData {
  heroTitle: string;
  heroSubtitle: string;
  heroBadge: string;
  aboutTitle: string;
  aboutText: string;
  phone: string;
  email: string;
}

// ─── Hardcoded Fallback Data ───

const FALLBACK_ROOMS: RoomData[] = [
  {
    slug: 'standart',
    title: 'Категория Стандарт',
    size: '12 м²',
    guestsText: 'до 2 гостей',
    maxGuests: 2,
    priceText: '5 800 ₽',
    priceNum: 5800,
    images: [
      '/optimized/Номера/Стандарт/Стандарт-01.webp',
      '/optimized/Номера/Стандарт/Стандарт-02.webp',
      '/optimized/Номера/Стандарт/Стандарт-03.webp',
      '/optimized/Номера/Стандарт/Стандарт-04.webp',
      '/optimized/Номера/Стандарт/Стандарт-05.webp',
    ],
    description: 'Уютный однокомнатный номер, идеальный для комфортного размещения одного или двух гостей. Оснащен всем необходимым для спокойного отдыха на природе. При бронировании через сайт завтрак включён в стоимость проживания.',
    features: ['Двуспальная кровать', 'Wi-Fi', 'Телевизор', 'Душ', 'Чайник', 'Панорамные окна'],
  },
  {
    slug: 'standart-plus',
    title: 'Категория Стандарт Улучшенный',
    size: '16 м²',
    guestsText: 'до 3 гостей',
    maxGuests: 3,
    priceText: '6 800 ₽',
    priceNum: 6800,
    images: [
      '/optimized/Номера/Стандарт+/Стандарт+-01.webp',
      '/optimized/Номера/Стандарт+/Стандарт+-02.webp',
      '/optimized/Номера/Стандарт+/Стандарт+-03.webp',
      '/optimized/Номера/Стандарт+/Стандарт+-04.webp',
      '/optimized/Номера/Стандарт+/Стандарт+-05.webp',
    ],
    description: 'Просторный однокомнатный номер с дополнительным местом (диван-кровать), отлично подходящий для небольшой семьи или компании. При бронировании через сайт завтрак включён в стоимость проживания.',
    features: ['Двуспальная кровать', 'Диван-кровать', 'Wi-Fi', 'Телевизор', 'Душ', 'Чайник'],
  },
  {
    slug: 'family',
    title: 'Категория Семейный',
    size: '20 м²',
    guestsText: 'до 2 гостей',
    maxGuests: 2,
    priceText: '5 800 ₽',
    priceNum: 5800,
    images: [
      '/optimized/Номера/Семейный/Семейный-01.webp',
      '/optimized/Номера/Семейный/Семейный-02.webp',
      '/optimized/Номера/Семейный/Семейный-03.webp',
      '/optimized/Номера/Семейный/Семейный-04.webp',
      '/optimized/Номера/Семейный/Семейный-05.webp',
    ],
    description: 'Увеличенный номер для комфортного семейного отдыха. Пространство разделено таким образом, чтобы каждому члену семьи было уютно. При бронировании через сайт завтрак включён в стоимость проживания.',
    features: ['Двуспальная кровать', 'Диван-кровать', 'Холодильник', 'Завтрак включен', 'Чайная станция', 'Душ и санузел'],
  },
  {
    slug: 'family-plus',
    title: 'Категория Семейный Улучшенный',
    size: '25 м²',
    guestsText: 'до 5 гостей',
    maxGuests: 5,
    priceText: '9 500 ₽',
    priceNum: 9500,
    images: [
      '/optimized/Номера/Семейный+/Семейный+-01.webp',
      '/optimized/Номера/Семейный+/Семейный+-02.webp',
      '/optimized/Номера/Семейный+/Семейный+-03.webp',
      '/optimized/Номера/Семейный+/Семейный+-04.webp',
      '/optimized/Номера/Семейный+/Семейный+-05.webp',
    ],
    description: 'Семейный номер улучшенной планировки. Больше пространства для комфортного размещения вашей семьи. При бронировании через сайт завтрак включён в стоимость проживания.',
    features: ['Двуспальная кровать', 'Диван-кровать', 'Телевизор', 'Завтрак включен', 'Холодильник', 'Зона отдыха'],
  },
  {
    slug: 'cottage',
    title: 'Коттедж',
    size: '60 м²',
    guestsText: 'до 8 гостей',
    maxGuests: 8,
    priceText: '12 000 ₽',
    priceNum: 12000,
    images: [
      '/optimized/Номера/Семейный++/Семейный++-01.webp',
      '/optimized/Номера/Семейный++/Семейный++-02.webp',
      '/optimized/Номера/Семейный++/Семейный++-03.webp',
      '/optimized/Номера/Семейный++/Семейный++-04.webp',
      '/optimized/Номера/Семейный++/Семейный++-05.webp',
    ],
    description: 'Отдельно стоящий двухэтажный коттедж для большой компании. Собственная мангальная зона, кухня и большая гостиная. При бронировании через сайт завтрак включён в стоимость проживания.',
    features: ['2 Этажа', 'Своя кухня', 'Несколько спален', 'Мангальная зона', 'Холодильник', 'Парковка под видеонаблюдением'],
  },
];

const FALLBACK_OFFERS: OfferData[] = [
  { id: '1', title: 'Раннее бронирование', desc: 'Забронируйте отдых за 30 дней и получите скидку 15% на проживание.', bg: '/optimized/Виды/Фасады/Фасады-01.webp' },
  { id: '2', title: 'Семейный отдых', desc: 'Детская площадка, просторные шале и чистый горный воздух.', bg: '/optimized/Виды/Природа/Природа-01.webp' },
  { id: '3', title: 'Банный релакс', desc: 'При бронировании от 5 ночей — 2 часа русской бани в подарок.', bg: '/optimized/Виды/Бассейн/Бассейн-02.webp' },
];

const FALLBACK_SETTINGS: SiteSettingsData = {
  heroTitle: 'ЯКОВКА',
  heroSubtitle: 'Загородный эко-курорт в Белокурихе. Идеальное место для восстановления сил, семейного отдыха и погружения в природу Алтая.',
  heroBadge: 'Выгодные предложения на лето',
  aboutTitle: 'Эко-курорт у подножия легендарной горы',
  aboutText: 'Отель расположен в курортной зоне города Белокуриха, в ущелье, по которому протекает ручей с кристально чистой водой. Здесь, вдали от шума и суеты, вы найдете идеальные условия для восстановления сил, горнолыжного спорта зимой и захватывающих эко-маршрутов летом.',
  phone: '+7 (909) 097-52-09',
  email: 'valynkina.44@mail.ru',
};

// ─── Data Fetchers with Fallback ───

export async function fetchRooms(): Promise<RoomData[]> {
  try {
    const sanityRooms = await getRooms();
    if (sanityRooms && sanityRooms.length > 0) {
      return sanityRooms.map((r: any) => ({
        slug: r.slug || '',
        title: r.title || '',
        size: r.area ? `${r.area} м²` : '',
        guestsText: r.guests ? `до ${r.guests} гостей` : '',
        maxGuests: r.guests || 2,
        priceText: r.price ? `${r.price.toLocaleString('ru-RU')} ₽` : '',
        priceNum: r.price || 0,
        images: r.images?.map((img: any) => img.url || urlFor(img).width(800).url()) || [],
        description: r.description || '',
        features: r.features || [],
      }));
    }
  } catch (e) {
    console.warn('[Sanity] Failed to fetch rooms, using fallback:', e);
  }
  return FALLBACK_ROOMS;
}

export async function fetchOffers(): Promise<OfferData[]> {
  try {
    const sanityOffers = await getOffers();
    if (sanityOffers && sanityOffers.length > 0) {
      return sanityOffers.map((o: any) => ({
        id: o._id,
        title: o.title || '',
        desc: o.description || '',
        bg: o.image?.url || urlFor(o.image).width(800).url() || '',
      }));
    }
  } catch (e) {
    console.warn('[Sanity] Failed to fetch offers, using fallback:', e);
  }
  return FALLBACK_OFFERS;
}

export async function fetchSiteSettings(): Promise<SiteSettingsData> {
  try {
    const settings = await getSiteSettings();
    if (settings) {
      return {
        heroTitle: settings.heroTitle || FALLBACK_SETTINGS.heroTitle,
        heroSubtitle: settings.heroSubtitle || FALLBACK_SETTINGS.heroSubtitle,
        heroBadge: settings.heroBadge || FALLBACK_SETTINGS.heroBadge,
        aboutTitle: settings.aboutTitle || FALLBACK_SETTINGS.aboutTitle,
        aboutText: settings.aboutText || FALLBACK_SETTINGS.aboutText,
        phone: settings.phone || FALLBACK_SETTINGS.phone,
        email: settings.email || FALLBACK_SETTINGS.email,
      };
    }
  } catch (e) {
    console.warn('[Sanity] Failed to fetch settings, using fallback:', e);
  }
  return FALLBACK_SETTINGS;
}
