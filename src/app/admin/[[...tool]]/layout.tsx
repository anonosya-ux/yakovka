import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Админка | Яковка',
  description: 'Управление контентом сайта Яковка',
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Чистый layout без Header/Footer сайта
  // Вложенный layout — просто контейнер, parent layout (root) всё равно применяется
  return <div id="sanity-studio-root" style={{ position: 'fixed', inset: 0, zIndex: 99999 }}>{children}</div>;
}
