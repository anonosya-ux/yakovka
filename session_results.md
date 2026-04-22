# Полный отчёт Antigravity → для проверки Gemini

> **Дата:** 22 апреля 2026, 23:00–23:30 MSK  
> **Билд:** 29 страниц / 0 ошибок / exit code 0  
> **Изменено:** 42 файла, +2 182 / −1 097 строк  

---

## 🆕 Новые файлы (10)

| Файл | Назначение |
|---|---|
| `src/app/api/callback/route.ts` | API route для отправки заявок в Telegram |
| `src/app/error.tsx` | Error Boundary — ловит краши компонентов |
| `src/app/gallery/GalleryClient.tsx` | Client-часть галереи (split из page.tsx) |
| `src/lib/config.ts` | Централизованные SITE_URL, HOTEL_* константы |
| `.env.local` | Telegram Bot Token + Chat ID (gitignored) |
| `.env.example` | Шаблон env vars для других разработчиков |
| `public/manifest.json` | PWA манифест |
| `public/llms-full.txt` | Расширенная база знаний для AI |
| `public/videos/hero-yakovka.webm` | VP9 версия hero видео (3.0 МБ) |
| `public/images/gallery/webp/` | 56 WebP файлов (конвертация из JPG/PNG) |

---

## 🔧 Изменённые файлы — по категориям

### SEO / Structured Data

| Файл | Что сделано |
|---|---|
| `src/app/faq/page.tsx` | +FAQPage JSON-LD schema |
| `src/app/infrastructure/restaurant/page.tsx` | +Restaurant JSON-LD, URL fix vercel→yakovka.ru |
| `src/app/infrastructure/ski/page.tsx` | +SkiResort JSON-LD, URL fix |
| `src/app/contacts/page.tsx` | +ContactPage JSON-LD, URL fix |
| `src/app/offers/page.tsx` | +ItemList+Offer JSON-LD, URL fix |
| `src/app/excursions/page.tsx` | +TouristAttraction JSON-LD, URL fix |
| `src/app/events/page.tsx` | +EventVenue JSON-LD |
| `src/app/gallery/page.tsx` | Server wrapper + ImageGallery JSON-LD, URL fix |
| `src/components/ui/Breadcrumbs.tsx` | URL fix: yakovka-next.vercel.app → yakovka.ru |

### Metadata / Canonical

| Файл | Что сделано |
|---|---|
| `src/app/legal/offer/page.tsx` | +Metadata (title, description, canonical) |
| `src/app/legal/payment/page.tsx` | +Metadata |
| `src/app/legal/privacy/page.tsx` | +Metadata |
| `src/app/legal/rules/page.tsx` | +Metadata |
| `src/app/layout.tsx` | +manifest link, +theme-color meta |

### Security & Backend

| Файл | Что сделано |
|---|---|
| `src/app/api/callback/route.ts` | Rate limiting (3 req/min/IP), CSRF (Origin check), escapeMarkdown (XSS prevention), input validation |
| `next.config.ts` | +Security headers: X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy |

### Performance

| Файл | Что сделано |
|---|---|
| `public/videos/hero-yakovka.mp4` | Сжат: 9.6 МБ → 2.6 МБ (H.264, CRF 32, 1280p) |
| `public/videos/hero-yakovka.webm` | Создан: 3.0 МБ (VP9, CRF 30, 1920p) |
| `src/app/page.tsx` | +`<source type="video/webm">` перед MP4 |
| `public/images/gallery/webp/` | 56 JPG/PNG → WebP: 46 МБ → 11 МБ (−76%) |

### UX & Components

| Файл | Что сделано |
|---|---|
| `src/components/CallbackModal.tsx` | Подключение к /api/callback, маска ввода телефона +7 (XXX) XXX-XX-XX |
| `src/components/FloatingCTA.tsx` | +`env(safe-area-inset-bottom)` для iOS |
| `src/components/layout/Footer.tsx` | +Telegram, WhatsApp, Яндекс.Карты ссылки |
| `src/components/layout/Header.tsx` | +/about, +/excursions в навигацию |
| `src/components/MobileMenu.tsx` | 5→9 ссылок |
| `src/components/TestimonialsSection.tsx` | Импорт marquee.tsx вместо 3d-testimonails.tsx |

### Infrastructure

| Файл | Что сделано |
|---|---|
| `src/app/sitemap.ts` | +/winter, +/rooms/standart-plus |
| `src/app/robots.ts` | URL синхронизация |
| `public/llms.txt` | 22 URL + актуальные цены |
| `task_plan.md` | Полное обновление статусов всех этапов |

### Удалённые файлы

| Файл | Причина |
|---|---|
| `extract.py` | Технический мусор |
| `optimize.py` | Технический мусор |
| `next.config.mjs` | Дубликат (есть .ts) |
| `public/.htaccess` | Артефакт Apache, не нужен на Vercel |
| `public/beget_test.txt` | Тестовый файл хостинга |
| `src/components/ui/3d-testimonails.tsx` | Переименован в marquee.tsx |

---

## 🔒 Безопасность — что именно добавлено

### `/api/callback` (rate-limit + CSRF + sanitization)
```
Rate Limit: 3 запроса в минуту с одного IP (in-memory Map)
CSRF: проверка Origin header (whitelist: yakovka.ru, vercel.app, localhost)
Input: name ≤ 100 chars, phone 10-20 digits only
XSS: escapeMarkdown() для Telegram MarkdownV2
Dev mode: console.log только при NODE_ENV=development
```

### `next.config.ts` (security headers)
```
X-Frame-Options: SAMEORIGIN (защита от clickjacking)
X-Content-Type-Options: nosniff (защита от MIME sniffing)
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(self)
```

---

## 📊 JSON-LD Schema Coverage — 10/10 страниц

| Страница | Schema.org Type | Статус |
|---|---|---|
| `/` (layout) | Hotel + LodgingBusiness | ✅ было |
| `/faq` | FAQPage | ✅ добавлено |
| `/infrastructure/restaurant` | Restaurant | ✅ добавлено |
| `/infrastructure/ski` | SkiResort | ✅ добавлено |
| `/contacts` | ContactPage + Hotel | ✅ добавлено |
| `/offers` | ItemList + Offer | ✅ добавлено |
| `/excursions` | ItemList + TouristAttraction | ✅ добавлено |
| `/events` | EventVenue | ✅ добавлено |
| `/reviews` | Hotel + AggregateRating | ✅ было |
| `/gallery` | ImageGallery | ✅ добавлено |

---

## ✅ Telegram Bot — полностью работает

```
Bot: @yakovkaleadbot
Группа: «Сайт» (chat_id: -5166368827)
Token: в .env.local (gitignored, .env* в .gitignore)
Тест: POST /api/callback → 200 OK → сообщение доставлено
```

---

## ⚠️ Что НЕ трогал (зона ответственности Gemini/клиента)

- `not-found.tsx` и `loading.tsx` — изменены пользователем вручную
- `AboutClient.tsx` — dynamic import добавлен пользователем
- Верхний `package-lock.json` — в папке Gemini
- `hero-yakovka-original.mp4` — бэкап, не удалял
- Данные номеров/экскурсий — захардкожены, нужен CMS
- YandexMetrica — нет реального ID
- OG-images — нет дизайна
