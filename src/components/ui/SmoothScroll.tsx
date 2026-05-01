'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
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
    // When a Kontur widget modal opens, Lenis must stop so native
    // scroll works inside the modal overlay. We use a MutationObserver
    // to detect when Kontur injects its react-ui modal containers.
    let savedScrollY = 0;
    let wasModalOpen = false;

    const observer = new MutationObserver(() => {
      const modalOpen = !!document.querySelector(
        '[class*="react-ui-Modal-root"], [class*="react-ui-Modal"], [class*="ModalStack"]'
      );
      // Also check for any fixed overlay from bookonline24
      const widgetOverlay = !!document.querySelector(
        'div[style*="position: fixed"][style*="z-index"][style*="9999"]'
      );

      const isOpen = modalOpen || widgetOverlay;

      if (isOpen && !wasModalOpen) {
        // Modal just opened — save scroll position and stop Lenis
        savedScrollY = window.scrollY;
        lenis.stop();
        // Set body top to maintain visual position when position:fixed is applied via CSS
        document.body.style.top = `-${savedScrollY}px`;
      } else if (!isOpen && wasModalOpen) {
        // Modal just closed — restore scroll position and restart Lenis
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

    return () => {
      observer.disconnect();
      lenis.destroy();
      gsap.ticker.remove(updateLenis);
      delete (window as any).__lenis;
    };
  }, []);

  return <>{children}</>;
}
