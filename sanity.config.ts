'use client';

/**
 * Sanity Studio configuration
 * This file is used to define the structure of the studio
 */
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { projectId, dataset } from '@/sanity/env';
import { roomType, offerType, galleryImageType, siteSettingsType } from '@/sanity/schemas';

// Custom desk structure for a clean admin experience
const deskStructure = (S: any) =>
  S.list()
    .title('Управление сайтом')
    .items([
      // Site Settings (singleton)
      S.listItem()
        .title('⚙️ Настройки сайта')
        .id('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Настройки сайта')
        ),
      S.divider(),
      // Rooms
      S.listItem()
        .title('🏨 Номера')
        .schemaType('room')
        .child(S.documentTypeList('room').title('Номера')),
      // Offers
      S.listItem()
        .title('🎁 Спецпредложения')
        .schemaType('offer')
        .child(S.documentTypeList('offer').title('Спецпредложения')),
      // Gallery
      S.listItem()
        .title('📸 Галерея')
        .schemaType('galleryImage')
        .child(S.documentTypeList('galleryImage').title('Фото галереи')),
    ]);

export default defineConfig({
  name: 'yakovka-studio',
  title: 'Яковка — Админка',
  
  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: deskStructure,
    }),
    visionTool({ defaultApiVersion: '2026-05-01' }),
  ],

  schema: {
    types: [roomType, offerType, galleryImageType, siteSettingsType],
  },
});
