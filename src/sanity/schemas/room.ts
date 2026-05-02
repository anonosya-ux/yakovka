import { defineField, defineType } from 'sanity';

export const roomType = defineType({
  name: 'room',
  title: 'Номер',
  type: 'document',
  icon: () => '🏨',
  fields: [
    defineField({
      name: 'title',
      title: 'Название номера',
      type: 'string',
      description: 'Например: Стандарт, Семейный Улучшенный, Коттедж',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL-адрес (slug)',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Цена за сутки (₽)',
      type: 'number',
      description: 'Число без пробелов. Пример: 5800',
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'description',
      title: 'Описание номера',
      type: 'text',
      rows: 4,
      description: 'Текст который видят гости на странице номера',
    }),
    defineField({
      name: 'features',
      title: 'Удобства в номере',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Каждое удобство отдельным пунктом: Wi-Fi, Кондиционер, Мини-кухня',
    }),
    defineField({
      name: 'area',
      title: 'Площадь (м²)',
      type: 'number',
      description: 'Пример: 12, 25, 60',
    }),
    defineField({
      name: 'guests',
      title: 'Максимум гостей',
      type: 'number',
      description: 'Пример: 2, 4, 8',
    }),
    defineField({
      name: 'images',
      title: '📸 Фотографии номера (слайдер на сайте)',
      type: 'array',
      description: '⬆️ Загрузите фотографии номера. Первое фото = обложка на карточке. Можно перетаскивать для смены порядка.',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Описание фото (для SEO)',
              type: 'string',
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
      validation: (rule) => rule.min(1).error('Добавьте хотя бы одно фото номера'),
    }),
    defineField({
      name: 'order',
      title: 'Порядок на сайте',
      type: 'number',
      description: 'Чем меньше число, тем выше номер в списке. Стандарт=1, Семейный=3, Коттедж=5',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'По порядку на сайте',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'По цене',
      name: 'priceAsc',
      by: [{ field: 'price', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      price: 'price',
      area: 'area',
      guests: 'guests',
      media: 'images.0',
    },
    prepare({ title, price, area, guests, media }) {
      const parts = [];
      if (price) parts.push(`${price.toLocaleString('ru-RU')} ₽/сут`);
      if (area) parts.push(`${area} м²`);
      if (guests) parts.push(`до ${guests} гостей`);
      return {
        title: title || 'Без названия',
        subtitle: parts.join(' · '),
        media,
      };
    },
  },
});
