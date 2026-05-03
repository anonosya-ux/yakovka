'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function YandexMetrica({ ymid }: { ymid: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Notify Yandex Metrica of dynamic route changes in Next.js
    if (typeof window !== 'undefined' && (window as any).ym) {
      (window as any).ym(parseInt(ymid, 10), 'hit', window.location.href);
    }
  }, [pathname, searchParams, ymid]);

  return (
    <>
      <Script id="yandex-metrica" strategy="afterInteractive">
        {`
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(${ymid}, "init", {
               clickmap:true,
               trackLinks:true,
               accurateTrackBounce:true,
               webvisor:true,
               ecommerce:"dataLayer"
          });
        `}
      </Script>
      <noscript>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={\`https://mc.yandex.ru/watch/\${ymid}\`} style={{ position: 'absolute', left: '-9999px' }} alt="" />
        </div>
      </noscript>
    </>
  );
}
