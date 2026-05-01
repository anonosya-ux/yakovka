import { defineField, defineType } from 'sanity';

export const roomType = defineType({
  name: 'room',
  title: 'Номер',
  type: 'document',
  icon: () => '🏨',
  fields: [
    defineField({
      name: 'title',
      title: 'Название',
      type: 'string',
      description: 'Например: Стандарт, Семейный+, Коттедж',
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
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'description',
      title: 'Краткое описание',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'features',
      title: 'Удобства',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Например: Wi-Fi, Кондиционер, Мини-кухня',
    }),
    defineField({
      name: 'area',
      title: 'Площадь (м²)',
      type: 'number',
    }),
    defineField({
      name: 'guests',
      title: 'Макс. гостей',
      type: 'number',
    }),
    defineField({
      name: 'images',
      title: 'Фотографии номера',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Описание фото',
              type: 'string',
            },
          ],
        },
      ],
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: 'order',
      title: 'Порядок сортировки',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'По порядку',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      price: 'price',
      media: 'images.0',
    },
    prepare({ title, price, media }) {
      return {
        title,
        subtitle: price ? `${price.toLocaleString('ru-RU')} ₽/сутки` : '',
        media,
      };
    },
  },
});
