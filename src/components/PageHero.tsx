'use client';

import Image from 'next/image';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  imageSrc: string;
  imageAlt: string;
  videoSrc?: string;
  breadcrumbs?: { label: string; href?: string }[];
  children?: React.ReactNode;
  overlay?: 'light' | 'dark' | 'gradient';
}

export default function PageHero({
  title,
  subtitle,
  badge,
  imageSrc,
  imageAlt,
  videoSrc,
  breadcrumbs,
  children,
  overlay = 'gradient',
}: PageHeroProps) {
  const overlayClasses = {
    light: 'bg-white/30',
    dark: 'bg-stone-950/50',
    gradient: 'bg-gradient-to-t from-stone-950 via-stone-900/50 to-stone-900/20',
  };

  return (
    <section className="relative h-[60vh] md:h-[70vh] min-h-[400px] w-full overflow-hidden flex items-end">
      {/* Background Media */}
      <div className="absolute inset-0 z-0 bg-stone-900">
        {videoSrc ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={imageSrc}
            className="absolute inset-0 w-full h-full object-cover object-center"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            priority
          />
        )}
        <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 pb-12 md:pb-16">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-white/70">
              <li>
                <a href="/" className="hover:text-white transition-colors">Главная</a>
              </li>
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-white/40">/</span>
                  {crumb.href ? (
                    <a href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</a>
                  ) : (
                    <span className="text-white">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {badge && (
          <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-sm font-medium text-white mb-6">
            {badge}
          </span>
        )}

        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
          {title}
        </h1>

        {subtitle && (
          <p className="text-lg md:text-2xl text-white/85 max-w-3xl font-light leading-relaxed">
            {subtitle}
          </p>
        )}

        {children}
      </div>
    </section>
  );
}
