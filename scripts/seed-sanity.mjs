/**
 * Import script to seed Sanity CMS with initial room data + offers + settings.
 * Uploads images from local /public folder to Sanity CDN.
 * 
 * Usage: node scripts/seed-sanity.mjs
 */

import { createClient } from '@sanity/client';
import { readFileSync, readdirSync } from 'fs';
import { resolve, join } from 'path';

const client = createClient({
  projectId: 'z035cmz2',
  dataset: 'production',
  apiVersion: '2026-05-01',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

const PUBLIC_DIR = resolve(process.cwd(), 'public');

// ─── Upload Image ───
async function uploadImage(relativePath, filename) {
  const fullPath = join(PUBLIC_DIR, relativePath);
  try {
    const imageBuffer = readFileSync(fullPath);
    const asset = await client.assets.upload('image', imageBuffer, {
      filename: filename || relativePath.split('/').pop(),
    });
    console.log(`  ✅ Uploaded: ${relativePath}`);
    return {
      _type: 'image',
      asset: { _type: 'reference', _ref: asset._id },
    };
  } catch (err) {
    console.error(`  ❌ Failed to upload ${relativePath}:`, err.message);
    return null;
  }
}

// ─── Rooms Data ───
const ROOMS = [
  {
    title: 'Категория Стандарт',
    slug: 'standart',
    price: 5800,
    area: 12,
    guests: 2,
    description: 'Уютный однокомнатный номер, идеальный для комфортного размещения одного или двух гостей. Оснащен всем необходимым для спокойного отдыха на природе. При бронировании через сайт завтрак включён в стоимость проживания.',
    features: ['Двуспальная кровать', 'Wi-Fi', 'Телевизор', 'Душ', 'Чайник', 'Панорамные окна'],
    imageDir: 'optimized/Номера/Стандарт',
    order: 1,
  },
  {
    title: 'Категория Стандарт Улучшенный',
    slug: 'standart-plus',
    price: 6800,
    area: 16,
    guests: 3,
    description: 'Просторный однокомнатный номер с дополнительным местом (диван-кровать), отлично подходящий для небольшой семьи или компании. При бронировании через сайт завтрак включён в стоимость проживания.',
    features: ['Двуспальная кровать', 'Диван-кровать', 'Wi-Fi', 'Телевизор', 'Душ', 'Чайник'],
    imageDir: 'optimized/Номера/Стандарт+',
    order: 2,
  },
  {
    title: 'Категория Семейный',
    slug: 'family',
    price: 5800,
    area: 20,
    guests: 4,
    description: 'Увеличенный номер для комфортного семейного отдыха. Пространство разделено таким образом, чтобы каждому члену семьи было уютно. При бронировании через сайт завтрак включён в стоимость проживания.',
    features: ['Двуспальная кровать', 'Диван-кровать', 'Холодильник', 'Завтрак включен', 'Чайная станция', 'Душ и санузел'],
    imageDir: 'optimized/Номера/Семейный',
    order: 3,
  },
  {
    title: 'Категория Семейный Улучшенный',
    slug: 'family-plus',
    price: 9500,
    area: 25,
    guests: 5,
    description: 'Семейный номер улучшенной планировки. Больше пространства для комфортного размещения вашей семьи. При бронировании через сайт завтрак включён в стоимость проживания.',
    features: ['Двуспальная кровать', 'Диван-кровать', 'Телевизор', 'Завтрак включен', 'Холодильник', 'Зона отдыха'],
    imageDir: 'optimized/Номера/Семейный+',
    order: 4,
  },
  {
    title: 'Коттедж',
    slug: 'cottage',
    price: 12000,
    area: 60,
    guests: 8,
    description: 'Отдельно стоящий двухэтажный коттедж для большой компании. Собственная мангальная зона, кухня и большая гостиная. При бронировании через сайт завтрак включён в стоимость проживания.',
    features: ['2 Этажа', 'Своя кухня', 'Несколько спален', 'Мангальная зона', 'Холодильник', 'Парковка под видеонаблюдением'],
    imageDir: 'optimized/Номера/Семейный++',
    order: 5,
  },
];

// ─── Offers Data ───
const OFFERS = [
  {
    title: 'Раннее бронирование',
    description: 'Забронируйте отдых за 30 дней и получите скидку 15% на проживание.',
    imagePath: 'optimized/Виды/Фасады/Фасады-01.webp',
    order: 1,
  },
  {
    title: 'Семейный отдых',
    description: 'Детская площадка, просторные шале и чистый горный воздух.',
    imagePath: 'optimized/Виды/Природа/Природа-01.webp',
    order: 2,
  },
  {
    title: 'Банный релакс',
    description: 'При бронировании от 5 ночей — 2 часа русской бани в подарок.',
    imagePath: 'optimized/Виды/Бассейн/Бассейн-02.webp',
    order: 3,
  },
];

// ─── Main ───
async function main() {
  console.log('🚀 Starting Sanity CMS seed...\n');

  // 1. Create Site Settings
  console.log('⚙️  Creating site settings...');
  await client.createOrReplace({
    _id: 'siteSettings',
    _type: 'siteSettings',
    heroTitle: 'ЯКОВКА',
    heroSubtitle: 'Загородный эко-курорт в Белокурихе. Идеальное место для восстановления сил, семейного отдыха и погружения в природу Алтая.',
    heroBadge: 'Выгодные предложения на лето',
    aboutTitle: 'Эко-курорт у подножия легендарной горы',
    aboutText: 'Отель расположен в курортной зоне города Белокуриха, в ущелье, по которому протекает ручей с кристально чистой водой. Здесь, вдали от шума и суеты, вы найдете идеальные условия для восстановления сил, горнолыжного спорта зимой и захватывающих эко-маршрутов летом.',
    phone: '+7 (960) 955-21-00',
    email: 'valynkina.44@mail.ru',
  });
  console.log('  ✅ Site settings created\n');

  // 2. Create Rooms
  console.log('🏨 Creating rooms...');
  for (const room of ROOMS) {
    console.log(`\n  📌 ${room.title}`);
    
    // Upload room images
    const imageDir = join(PUBLIC_DIR, room.imageDir);
    let imageFiles = [];
    try {
      imageFiles = readdirSync(imageDir)
        .filter(f => f.endsWith('.webp') || f.endsWith('.jpg') || f.endsWith('.png'))
        .sort();
    } catch {
      console.warn(`  ⚠️ Image dir not found: ${room.imageDir}`);
    }

    const images = [];
    for (const file of imageFiles) {
      const img = await uploadImage(join(room.imageDir, file), file);
      if (img) {
        images.push({
          ...img,
          _key: file.replace(/[^a-zA-Z0-9]/g, ''),
          alt: `${room.title} - ${file}`,
        });
      }
    }

    await client.create({
      _type: 'room',
      title: room.title,
      slug: { _type: 'slug', current: room.slug },
      price: room.price,
      area: room.area,
      guests: room.guests,
      description: room.description,
      features: room.features,
      images,
      order: room.order,
    });
    console.log(`  ✅ Room "${room.title}" created with ${images.length} photos`);
  }

  // 3. Create Offers
  console.log('\n🎁 Creating offers...');
  for (const offer of OFFERS) {
    console.log(`  📌 ${offer.title}`);
    const image = await uploadImage(offer.imagePath, offer.imagePath.split('/').pop());
    
    await client.create({
      _type: 'offer',
      title: offer.title,
      description: offer.description,
      image,
      isActive: true,
      order: offer.order,
    });
    console.log(`  ✅ Offer "${offer.title}" created`);
  }

  // 4. Create Gallery Images
  console.log('\n📸 Creating gallery...');
  const galleryDirs = [
    { dir: 'optimized/Виды/Фасады', category: 'territory' },
    { dir: 'optimized/Виды/Природа', category: 'nature' },
    { dir: 'optimized/Виды/Бассейн', category: 'spa' },
  ];

  let galleryOrder = 1;
  for (const { dir, category } of galleryDirs) {
    const fullDir = join(PUBLIC_DIR, dir);
    let files = [];
    try {
      files = readdirSync(fullDir)
        .filter(f => f.endsWith('.webp') || f.endsWith('.jpg') || f.endsWith('.png'))
        .sort();
    } catch {
      console.warn(`  ⚠️ Gallery dir not found: ${dir}`);
      continue;
    }

    for (const file of files) {
      const image = await uploadImage(join(dir, file), file);
      if (image) {
        await client.create({
          _type: 'galleryImage',
          image,
          alt: `${category} - ${file}`,
          category,
          order: galleryOrder++,
        });
        console.log(`  ✅ Gallery: ${file} (${category})`);
      }
    }
  }

  console.log('\n\n🎉 CMS seeding complete!');
  console.log('Open /admin on your site to manage content.');
}

main().catch(console.error);
