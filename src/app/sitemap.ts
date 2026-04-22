import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yakovka.ru';

  // Core pages (Highest priority)
  const coreRoutes = [
    '',
    '/about',
    '/rooms',
    '/season',
    '/winter',
    '/summer',
    '/offers',
    '/gallery',
    '/reviews',
    '/faq',
    '/how-to-get',
    '/services',
    '/events',
    '/contacts',
    '/excursions',
    '/invest',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route === '/rooms' ? 0.95 : 0.9,
  }));

  // Infrastructure (Medium-high priority)
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

  // Room subpages
  const roomRoutes = [
    '/rooms/standart',
    '/rooms/standart-plus',
    '/rooms/family',
    '/rooms/family-plus',
    '/rooms/cottage',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Legal pages (Low priority)
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
