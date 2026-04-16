import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yakovka-next.vercel.app';

  // Статические роуты (Высокий приоритет)
  const coreRoutes = [
    '',
    '/about',
    '/invest',
    '/rooms',
    '/services',
    '/events',
    '/contacts',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.9,
  }));

  // Инфраструктура (Средне-высокий приоритет)
  const infraRoutes = [
    '/infrastructure/restaurant',
    '/infrastructure/banya',
    '/infrastructure/ski',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Номера (Временно хардкод под статические роуты, после Strapi будут тянуться fetch)
  const roomRoutes = [
    '/rooms/standart',
    '/rooms/family',
    '/rooms/family-plus',
    '/rooms/cottage',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Юридические документы (Низкий приоритет)
  const legalRoutes = [
    '/legal/rules',
    '/legal/offer',
    '/legal/privacy',
    '/legal/payment',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }));

  return [...coreRoutes, ...infraRoutes, ...roomRoutes, ...legalRoutes];
}
