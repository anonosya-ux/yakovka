# Research Findings & Decisions

## Architectural Decisions
1. **Performance over direct embedding**: Maps will be embedded using `loading="lazy"` inside a styled glass container to preserve the >90 Performance score targeted by `ui-ux-pro-max`.
2. **Kontur Hotel Widget**: Retained inside `KonturWidget.tsx`, uses standard lazy implementation.
3. **Typography & Styling**: Use `text-slate-900` for primary light text, strictly avoid `bg-white/10` for light mode glass (must be `bg-white/80` or higher per UI/UX Pro Max rule). Hover states should not trigger layout shifts.

## SEO Knowledge Base (Programmatic SEO)
- Base URL: `https://yakovka-next.vercel.app` (for now)
- Sitemaps in Next.js 15: Use `app/sitemap.ts` returning an array of objects.
- Structured Data: We need `https://schema.org/Resort` or `https://schema.org/Hotel` with GeoCoordinates pointing to Belokurikha.
