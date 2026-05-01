import { defineField, defineType } from 'sanity';

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Настройки сайта',
  type: 'document',
  icon: () => '⚙️',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Заголовок на главной',
      type: 'string',
      initialValue: 'ЯКОВКА',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Подзаголовок на главной',
      type: 'text',
      rows: 2,
      initialValue: 'Загородный эко-курорт в Белокурихе. Идеальное место для восстановления сил, семейного отдыха и погружения в природу Алтая.',
    }),
    defineField({
      name: 'heroBadge',
      title: 'Бейдж на главной',
      type: 'string',
      initialValue: 'Выгодные предложения на лето',
    }),
    defineField({
      name: 'aboutTitle',
      title: 'Заголовок блока «О нас»',
      type: 'string',
    }),
    defineField({
      name: 'aboutText',
      title: 'Текст блока «О нас»',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'aboutImage',
      title: 'Фото блока «О нас»',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'phone',
      title: 'Телефон',
      type: 'string',
      initialValue: '+7 (960) 955-21-00',
    }),
    defineField({
      name: 'email',
      title: 'E-mail',
      type: 'string',
      initialValue: 'valynkina.44@mail.ru',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Настройки сайта' };
    },
  },
});
