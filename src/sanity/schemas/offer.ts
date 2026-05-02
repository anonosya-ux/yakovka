import { defineField, defineType } from 'sanity';

export const offerType = defineType({
  name: 'offer',
  title: 'Спецпредложение',
  type: 'document',
  icon: () => '🎁',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок акции',
      type: 'string',
      description: 'Пример: "Раннее бронирование", "Банный релакс"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Текст акции',
      type: 'text',
      rows: 3,
      description: 'Краткое описание что входит в акцию. Видно на карточке на главной странице.',
    }),
    defineField({
      name: 'image',
      title: '📸 Фоновое фото карточки',
      type: 'image',
      options: { hotspot: true },
      description: 'Фото которое будет на фоне карточки акции на главной странице сайта.',
    }),
    defineField({
      name: 'isActive',
      title: 'Показывать на сайте',
      type: 'boolean',
      description: 'Выключите чтобы скрыть акцию с сайта (не удаляя)',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Порядок отображения',
      type: 'number',
      description: 'Чем меньше число, тем левее на сайте',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      desc: 'description',
      active: 'isActive',
      media: 'image',
    },
    prepare({ title, desc, active, media }) {
      return {
        title: `${active ? '✅' : '❌'} ${title}`,
        subtitle: desc ? desc.substring(0, 80) + '...' : 'Нет описания',
        media,
      };
    },
  },
});
