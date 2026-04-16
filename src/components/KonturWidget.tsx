'use client';

import { useEffect, useRef } from 'react';

export function KonturWidgetSearch({ containerId = 'BookingVertical' }: { containerId?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // We need to inject the Kontur initialization script properly
    const loadKonturWidget = () => {
      // If already initialized globally, just add the block
      if (typeof window !== 'undefined' && (window as any).HotelWidget) {
         try {
           (window as any).HotelWidget.add({
             type: 'searchBlock',
             appearance: { container: containerId, layout: 'horizontal' }
           });
         } catch (e) {
           console.error("Kontur Add error:", e);
         }
         return;
      }

      // Load script exactly as required
      const script = document.createElement('script');
      script.src = 'https://bookonline24.ru/widget.js';
      script.async = true;
      script.onload = () => {
         const hw = (window as any).HotelWidget;
         if (hw) {
            hw.init({
               hotelId: "2774874f-1347-4c7d-a835-9791d5814751",
               version: "2",
               hooks: {
                  onError: (e: any) => console.error("Kontur error:", e)
               }
            });
            hw.add({
               type: 'searchBlock',
               appearance: { container: containerId, layout: 'horizontal' }
            });
         }
      };
      
      const firstScript = document.getElementsByTagName('script')[0];
      if (firstScript && firstScript.parentNode) {
         firstScript.parentNode.insertBefore(script, firstScript);
      } else {
         document.head.appendChild(script);
      }
    };

    loadKonturWidget();
  }, [containerId]);

  return (
    <div className="relative min-h-[90px] w-full flex items-center justify-center rounded-2xl">
      <div 
        id={containerId} 
        ref={containerRef}
        className="w-full z-10"
      />
      {/* Elegant Skeleton Loader instead of generic text */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center gap-3">
        <div className="flex space-x-2 animate-pulse bg-white/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/40 shadow-sm">
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          <span className="text-sm font-medium text-slate-500 ml-2">Загрузка системы бронирования...</span>
        </div>
      </div>
    </div>
  );
}
