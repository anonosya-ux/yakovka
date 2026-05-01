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
  return (
    <html lang="ru">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
