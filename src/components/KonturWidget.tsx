'use client';

import { useEffect, useRef } from 'react';

export function KonturWidgetSearch({ containerId = 'HotelWidgetBookingFormId' }: { containerId?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // We need to inject the Kontur initialization script exactly as provided
    const loadKonturWidget = () => {
      // If already initialized globally, just add the block
      if (typeof window !== 'undefined' && (window as any).HotelWidget) {
         try {
           (window as any).HotelWidget.add({
             type: 'bookingForm',
             inline: false,
             appearance: { container: containerId }
           });
         } catch (e) {
           console.error("Kontur Add error:", e);
         }
         return;
      }

      // Initialize global HotelWidget queuing function
      const win = window as any;
      win.HotelWidgetApp = "HotelWidget";
      win.HotelWidget = win.HotelWidget || function() {
        (win.HotelWidget.q = win.HotelWidget.q || []).push(arguments);
      };

      // Load script exactly as required
      const script = document.createElement('script');
      script.src = "https://widget.bookonline24.ru/widget/js/init.js?v=" + new Date().getTime();
      script.async = true;
      script.onload = () => {
         const hw = win.HotelWidget;
         if (hw && typeof hw.init === 'function') {
            hw.init({
               hotelId: "2774874f-1347-4c7d-a835-9791d5814751",
               version: "2",
               hooks: {
                  onError: function(e: any) { console.error("onError", e); },
                  onInit: function() { console.log("onInit widget loaded"); },
                  onBooking: function(v: any) { console.log("onBooking", v); }
               }
            });
            hw.add({
               type: "bookingForm",
               inline: false,
               appearance: { container: containerId }
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
