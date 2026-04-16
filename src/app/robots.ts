import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://yakovka-next.vercel.app';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/private/'], // Стандартные запреты
      },
      {
        userAgent: ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'PerplexityBot'],
        allow: '/', // Открыт доступ для AI-сервисов (GEO SEO)
      },
      {
        userAgent: ['CCBot', 'anthropic-ai', 'Bytespider', 'cohere-ai'],
        disallow: '/', // Запрет для парсеров, создающих датасеты обучения без отсылок
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
