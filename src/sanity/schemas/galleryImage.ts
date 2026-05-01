import { defineField, defineType } from 'sanity';

export const galleryImageType = defineType({
  name: 'galleryImage',
  title: 'Фото галереи',
  type: 'document',
  icon: () => '📸',
  fields: [
    defineField({
      name: 'image',
      title: 'Фотография',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Описание',
      type: 'string',
      description: 'Что изображено на фото',
    }),
    defineField({
      name: 'category',
      title: 'Категория',
      type: 'string',
      options: {
        list: [
          { title: 'Номера', value: 'rooms' },
          { title: 'Территория', value: 'territory' },
          { title: 'Природа', value: 'nature' },
          { title: 'Баня & Бассейн', value: 'spa' },
          { title: 'Ресторан', value: 'restaurant' },
          { title: 'Мероприятия', value: 'events' },
          { title: 'Зима', value: 'winter' },
          { title: 'Лето', value: 'summer' },
        ],
      },
    }),
    defineField({
      name: 'order',
      title: 'Порядок',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      alt: 'alt',
      category: 'category',
      media: 'image',
    },
    prepare({ alt, category, media }) {
      return {
        title: alt || 'Без описания',
        subtitle: category || '',
        media,
      };
    },
  },
});
