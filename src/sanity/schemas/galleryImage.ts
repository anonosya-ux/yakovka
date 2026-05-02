import { defineField, defineType } from 'sanity';

const GALLERY_CATEGORIES = [
  { title: '🏨 Номера — страница /rooms', value: 'rooms' },
  { title: '🏔️ Территория — главная и /about', value: 'territory' },
  { title: '🌿 Природа — главная, фоны разделов', value: 'nature' },
  { title: '♨️ Баня & Бассейн — /infrastructure/banya', value: 'spa' },
  { title: '🍽️ Ресторан — /infrastructure/restaurant', value: 'restaurant' },
  { title: '🎉 Мероприятия — /events', value: 'events' },
  { title: '❄️ Зима — /winter', value: 'winter' },
  { title: '☀️ Лето — /summer', value: 'summer' },
];

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
      title: 'Что на фото',
      type: 'string',
      description: 'Пример: "Вид на бассейн", "Фасад отеля зимой", "Интерьер ресторана"',
    }),
    defineField({
      name: 'category',
      title: 'Где используется на сайте',
      type: 'string',
      description: 'Выберите раздел сайта, к которому относится это фото',
      options: {
        list: GALLERY_CATEGORIES,
        layout: 'dropdown',
      },
      validation: (rule) => rule.required().error('Укажите раздел сайта'),
    }),
    defineField({
      name: 'order',
      title: 'Порядок в галерее',
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
      const catLabel = GALLERY_CATEGORIES.find(c => c.value === category)?.title || category || 'Без раздела';
      return {
        title: alt || 'Без описания',
        subtitle: catLabel,
        media,
      };
    },
  },
});
