'use client';

import { useEffect } from 'react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let cleanup: (() => void) | undefined;

    const initLenis = async () => {
      const [{ default: Lenis }, { default: gsap }, { ScrollTrigger }] = await Promise.all([
        import('lenis'),
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);

      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      });

      // Expose lenis on window for external control
      (window as any).__lenis = lenis;

      lenis.on('scroll', ScrollTrigger.update);

      const updateLenis = (time: number) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(updateLenis);
      gsap.ticker.lagSmoothing(0);

      // ─── Kontur.Hotel Modal Detection ───
      let savedScrollY = 0;
      let wasModalOpen = false;

      const observer = new MutationObserver(() => {
        const modalOpen = !!document.querySelector(
          '[class*="react-ui-Modal-root"], [class*="react-ui-Modal"], [class*="ModalStack"]'
        );
        const widgetOverlay = !!document.querySelector(
          'div[style*="position: fixed"][style*="z-index"][style*="9999"]'
        );

        const isOpen = modalOpen || widgetOverlay;

        if (isOpen && !wasModalOpen) {
          savedScrollY = window.scrollY;
          lenis.stop();
          document.body.style.top = `-${savedScrollY}px`;
        } else if (!isOpen && wasModalOpen) {
          document.body.style.top = '';
          window.scrollTo(0, savedScrollY);
          lenis.start();
        }

        wasModalOpen = isOpen;
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class', 'style'],
      });

      cleanup = () => {
        observer.disconnect();
        lenis.destroy();
        gsap.ticker.remove(updateLenis);
        delete (window as any).__lenis;
      };
    };

    // Defer Lenis initialization to after first paint
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => initLenis());
    } else {
      setTimeout(() => initLenis(), 100);
    }

    return () => cleanup?.();
  }, []);

  return <>{children}</>;
}
