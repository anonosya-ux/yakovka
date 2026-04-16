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
    <div 
      id={containerId} 
      ref={containerRef}
      className="min-h-[90px] w-full flex items-center justify-center text-slate-400 bg-white/70 backdrop-blur-xl rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/40"
    >
      <div className="absolute inset-0 flex items-center justify-center -z-10">
         <span className="animate-pulse">Синхронизация с системой бронирования...</span>
      </div>
    </div>
  );
}
