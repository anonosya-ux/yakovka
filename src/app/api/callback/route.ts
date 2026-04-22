import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// ─── Rate Limiter (in-memory, per IP, 3 req/min) ───
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 60_000; // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  entry.count++;
  if (entry.count > RATE_LIMIT) return true;
  return false;
}

// Cleanup stale entries every 5 minutes
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, entry] of rateLimitMap) {
      if (now > entry.resetAt) rateLimitMap.delete(ip);
    }
  }, 300_000);
}

// ─── Sanitize Markdown special chars to prevent injection ───
function escapeMarkdown(text: string): string {
  return text.replace(/[_*[\]()~`>#+=|{}.!-]/g, '\\$&');
}

export async function POST(request: NextRequest) {
  try {
    // ─── Rate Limit Check ───
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
      || request.headers.get('x-real-ip')
      || 'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Слишком много запросов. Попробуйте через минуту.' },
        { status: 429 }
      );
    }

    // ─── Origin Check (CSRF protection) ───
    const origin = request.headers.get('origin') || '';
    const allowedOrigins = ['https://yakovka.ru', 'https://www.yakovka.ru', 'http://localhost:3000', 'http://localhost:3847'];
    if (origin && !allowedOrigins.some(o => origin.startsWith(o)) && !origin.includes('vercel.app')) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const body = await request.json();
    const { name, phone } = body;

    // ─── Validate ───
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Имя и телефон обязательны' },
        { status: 400 }
      );
    }

    if (typeof name !== 'string' || name.length > 100) {
      return NextResponse.json({ error: 'Некорректное имя' }, { status: 400 });
    }

    // Sanitize phone — keep only digits and formatting chars
    const cleanPhone = phone.replace(/[^\d+\-() ]/g, '');
    if (cleanPhone.length < 10 || cleanPhone.length > 20) {
      return NextResponse.json(
        { error: 'Некорректный номер телефона' },
        { status: 400 }
      );
    }

    // ─── Format message (escape user input for Markdown safety) ───
    const now = new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Barnaul' });
    const safeName = escapeMarkdown(name.trim());
    const message = [
      `🔔 *Новая заявка с сайта*`,
      ``,
      `👤 Имя: ${safeName}`,
      `📞 Телефон: ${cleanPhone}`,
      `🕐 Время: ${now}`,
      `🌐 Источник: yakovka\\.ru`,
    ].join('\n');

    // ─── Send to Telegram ───
    if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
      const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

      const telegramResponse = await fetch(telegramUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'MarkdownV2',
        }),
      });

      if (!telegramResponse.ok) {
        const err = await telegramResponse.text();
        console.error('[Telegram API Error]', err);
      }
    } else if (process.env.NODE_ENV === 'development') {
      console.log('[DEV] Callback request:', { name, phone: cleanPhone, time: now });
    }

    return NextResponse.json({ success: true, message: 'Заявка принята' });
  } catch (error) {
    console.error('[Callback API Error]', error);
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    );
  }
}
