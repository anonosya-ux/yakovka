// Sanity configuration
// Project ID и Dataset нужно получить после создания проекта на sanity.io
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'z035cmz2';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = '2026-05-01';

// Used for preview mode
export const useCdn = process.env.NODE_ENV === 'production';
