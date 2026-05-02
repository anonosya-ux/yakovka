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
    <div
      id="sanity-studio-root"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999999,
        background: '#101112',
        overflow: 'auto',
      }}
    >
      {children}
    </div>
  );
}
