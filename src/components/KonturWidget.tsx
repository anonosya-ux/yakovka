'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    HotelWidget: any;
    _konturScriptLoaded?: boolean;
    _konturInitialized?: boolean;
  }
}

const HOTEL_ID = '2774874f-1347-4c7d-a835-9791d5814751';
const SCRIPT_URL = 'https://bookonline24.ru/widget.js';

function ensureKonturScript(): Promise<void> {
  return new Promise((resolve) => {
    // Already loaded
    if (window._konturScriptLoaded && window.HotelWidget) {
      resolve();
      return;
    }

    // Script already in DOM but not loaded yet
    const existingScript = document.querySelector(`script[src="${SCRIPT_URL}"]`);
    if (existingScript) {
      existingScript.addEventListener('load', () => {
        window._konturScriptLoaded = true;
        resolve();
      });
      if (window.HotelWidget) {
        window._konturScriptLoaded = true;
        resolve();
      }
      return;
    }

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = SCRIPT_URL;
    script.async = true;
    script.onload = () => {
      window._konturScriptLoaded = true;
      resolve();
    };
    document.head.appendChild(script);
  });
}

function ensureInit() {
  if (window._konturInitialized) return;
  if (!window.HotelWidget || typeof window.HotelWidget.init !== 'function') return;
  
  window._konturInitialized = true;
  window.HotelWidget.init({
    hotelId: HOTEL_ID,
  });
}

/**
 * Core hook: loads script, inits, and adds widget AFTER the container DOM element exists
 */
function useKonturWidget(containerId: string, widgetConfig: Record<string, any>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    
    const setup = async () => {
      await ensureKonturScript();
      if (cancelled) return;

      ensureInit();

      // Wait for DOM element to actually exist
      const waitForContainer = () => {
        return new Promise<void>((resolve) => {
          const check = () => {
            const el = document.getElementById(containerId);
            if (el) {
              resolve();
            } else {
              requestAnimationFrame(check);
            }
          };
          check();
        });
      };

      await waitForContainer();
      if (cancelled) return;

      // Small delay to ensure React hydration is complete
      await new Promise(r => setTimeout(r, 500));
      if (cancelled) return;

      if (window.HotelWidget && typeof window.HotelWidget.add === 'function') {
        try {
          window.HotelWidget.add({
            ...widgetConfig,
            appearance: { container: containerId },
          });
          setAdded(true);
        } catch (e) {
          console.error('Kontur add error:', e);
        }
      }
    };

    setup();
    return () => { cancelled = true; };
  }, [containerId, widgetConfig]);

  return { containerRef, added };
}

/**
 * Поиск и бронирование номеров — вертикальный блок
 */
export function KonturWidgetSearch({ containerId = 'WidgetVerticalBlockId' }: { containerId?: string }) {
  const config = useRef({ type: 'bookingForm', inline: false });
  const { containerRef, added } = useKonturWidget(containerId, config.current);

  return (
    <div className="relative min-h-[90px] w-full flex items-center justify-center rounded-2xl">
      <div
        id={containerId}
        ref={containerRef}
        className="w-full z-10"
      />
      {!added && (
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="flex space-x-2 animate-pulse bg-white/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/40 shadow-sm">
            <div className="w-2 h-2 bg-primary/40 rounded-full"></div>
            <div className="w-2 h-2 bg-primary/60 rounded-full"></div>
            <div className="w-2 h-2 bg-primary/80 rounded-full"></div>
            <span className="text-sm font-medium text-stone-500 ml-2">Загрузка бронирования...</span>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Список номеров с ценами
 */
export function KonturWidgetRoomsList({ containerId = 'WidgetRoomsListId' }: { containerId?: string }) {
  const config = useRef({ type: 'roomsList' });
  const { containerRef } = useKonturWidget(containerId, config.current);

  return (
    <div className="w-full min-h-[200px]">
      <div id={containerId} ref={containerRef} className="w-full" />
    </div>
  );
}

/**
 * Календарь доступности — вертикальный (1 месяц)
 */
export function KonturWidgetCalendarVertical({ containerId = 'WidgetVerticalAvailabilityCalendarId' }: { containerId?: string }) {
  const config = useRef({ type: 'availabilityCalendar', months: 1 });
  const { containerRef } = useKonturWidget(containerId, config.current);

  return (
    <div className="w-full min-h-[300px]">
      <div id={containerId} ref={containerRef} className="w-full" />
    </div>
  );
}

/**
 * Календарь доступности — горизонтальный (2 месяца)
 */
export function KonturWidgetCalendarHorizontal({ containerId = 'WidgetHorizontalAvailabilityCalendarId' }: { containerId?: string }) {
  const config = useRef({ type: 'availabilityCalendar', months: 2 });
  const { containerRef } = useKonturWidget(containerId, config.current);

  return (
    <div className="w-full min-h-[300px]">
      <div id={containerId} ref={containerRef} className="w-full" />
    </div>
  );
}

/**
 * Кнопка «Проверить наличие» для мобильных
 */
export function KonturWidgetMobileButton({ containerId = 'WidgetMobileBtnId' }: { containerId?: string }) {
  const config = useRef({ type: 'showCheckAvailabilityButtonForMobileDevices' });
  const { containerRef } = useKonturWidget(containerId, config.current);

  return <div id={containerId} ref={containerRef} />;
}
