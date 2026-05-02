import { defineField, defineType } from 'sanity';

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Настройки сайта',
  type: 'document',
  icon: () => '⚙️',
  groups: [
    { name: 'hero', title: '🏠 Главный экран', default: true },
    { name: 'about', title: '📖 Блок «О нас»' },
    { name: 'contacts', title: '📞 Контакты' },
  ],
  fields: [
    // Hero section
    defineField({
      name: 'heroTitle',
      title: 'Главный заголовок',
      type: 'string',
      description: 'Большой текст на первом экране (по умолчанию "ЯКОВКА")',
      group: 'hero',
      initialValue: 'ЯКОВКА',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Подзаголовок',
      type: 'text',
      rows: 2,
      description: 'Текст под главным заголовком',
      group: 'hero',
    }),
    defineField({
      name: 'heroBadge',
      title: 'Бейдж (плашка сверху)',
      type: 'string',
      description: 'Маленькая плашка над заголовком. Пример: "Выгодные предложения на лето"',
      group: 'hero',
    }),
    // About section
    defineField({
      name: 'aboutTitle',
      title: 'Заголовок блока «О нас»',
      type: 'string',
      description: 'Показывается в стеклянном блоке на главной, под видео',
      group: 'about',
    }),
    defineField({
      name: 'aboutText',
      title: 'Текст блока «О нас»',
      type: 'text',
      rows: 5,
      description: 'Основной текст о курорте в стеклянном блоке',
      group: 'about',
    }),
    defineField({
      name: 'aboutImage',
      title: 'Фото фона блока «О нас»',
      type: 'image',
      options: { hotspot: true },
      description: 'Фоновое фото за стеклянным блоком (природа/горы)',
      group: 'about',
    }),
    // Contacts
    defineField({
      name: 'phone',
      title: 'Телефон',
      type: 'string',
      description: 'Основной номер телефона для звонков',
      group: 'contacts',
      initialValue: '+7 (960) 955-21-00',
    }),
    defineField({
      name: 'email',
      title: 'E-mail',
      type: 'string',
      group: 'contacts',
      initialValue: 'valynkina.44@mail.ru',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Настройки сайта' };
    },
  },
});
