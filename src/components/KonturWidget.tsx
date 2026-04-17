'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    HotelWidget: any;
  }
}

const HOTEL_ID = '2774874f-1347-4c7d-a835-9791d5814751';

let isScriptLoaded = false;
let isInitialized = false;

function loadKonturScript(callback: () => void) {
  if (isScriptLoaded) {
    callback();
    return;
  }

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://bookonline24.ru/widget.js';
  script.async = true;
  (script as any).onload = (script as any).onreadystatechange = function () {
    const rs = (this as any).readyState;
    if (!isScriptLoaded && (!rs || rs === 'complete')) {
      isScriptLoaded = true;
      callback();
    }
  };
  const firstScript = document.getElementsByTagName('script')[0];
  if (firstScript && firstScript.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript);
  } else {
    document.head.appendChild(script);
  }
}

function initWidget() {
  if (isInitialized || !window.HotelWidget) return;
  isInitialized = true;

  window.HotelWidget.init({
    hotelId: HOTEL_ID,
    version: '2',
    hooks: {
      onError: function (e: any) { console.error('Kontur onError', e); },
      onInit: function () { console.log('Kontur onInit'); },
      onBooking: function (v: any) { console.log('Kontur onBooking', v); },
    },
  });
}

function addWidget(config: any) {
  if (window.HotelWidget && typeof window.HotelWidget.add === 'function') {
    window.HotelWidget.add(config);
  }
}

/**
 * Поиск и бронирование номеров — вертикальный блок (для Hero / Sidebar)
 */
export function KonturWidgetSearch({ containerId = 'WidgetVerticalBlockId' }: { containerId?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadKonturScript(() => {
      initWidget();
      addWidget({
        type: 'bookingForm',
        inline: false,
        appearance: { container: containerId },
      });
    });
  }, [containerId]);

  return (
    <div className="relative min-h-[90px] w-full flex items-center justify-center rounded-2xl">
      <div
        id={containerId}
        ref={containerRef}
        className="w-full z-10"
      />
      <div className="absolute inset-0 -z-10 flex items-center justify-center gap-3">
        <div className="flex space-x-2 animate-pulse bg-white/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/40 shadow-sm">
          <div className="w-2 h-2 bg-primary/40 rounded-full"></div>
          <div className="w-2 h-2 bg-primary/60 rounded-full"></div>
          <div className="w-2 h-2 bg-primary/80 rounded-full"></div>
          <span className="text-sm font-medium text-stone-500 ml-2">Загрузка системы бронирования...</span>
        </div>
      </div>
    </div>
  );
}

/**
 * Список номеров с ценами (для страницы /rooms)
 */
export function KonturWidgetRoomsList({ containerId = 'WidgetRoomsListId' }: { containerId?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadKonturScript(() => {
      initWidget();
      addWidget({
        type: 'roomsList',
        appearance: { container: containerId },
      });
    });
  }, [containerId]);

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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadKonturScript(() => {
      initWidget();
      addWidget({
        type: 'availabilityCalendar',
        months: 1,
        appearance: { container: containerId },
      });
    });
  }, [containerId]);

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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadKonturScript(() => {
      initWidget();
      addWidget({
        type: 'availabilityCalendar',
        months: 2,
        appearance: { container: containerId },
      });
    });
  }, [containerId]);

  return (
    <div className="w-full min-h-[300px]">
      <div id={containerId} ref={containerRef} className="w-full" />
    </div>
  );
}

/**
 * Кнопка «Проверить наличие» для мобильных (мобильная CTA)
 */
export function KonturWidgetMobileButton({ containerId = 'WidgetShowCheckAvailabilityButtonForMobileDevicesId' }: { containerId?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadKonturScript(() => {
      initWidget();
      addWidget({
        type: 'showCheckAvailabilityButtonForMobileDevices',
        appearance: { container: containerId },
      });
    });
  }, [containerId]);

  return <div id={containerId} ref={containerRef} />;
}
