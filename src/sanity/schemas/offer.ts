import { defineField, defineType } from 'sanity';

export const offerType = defineType({
  name: 'offer',
  title: 'Спецпредложение',
  type: 'document',
  icon: () => '🎁',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Описание',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Фоновое фото',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'isActive',
      title: 'Активно',
      type: 'boolean',
      initialValue: true,
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
      title: 'title',
      active: 'isActive',
      media: 'image',
    },
    prepare({ title, active, media }) {
      return {
        title,
        subtitle: active ? '✅ Активно' : '❌ Скрыто',
        media,
      };
    },
  },
});
