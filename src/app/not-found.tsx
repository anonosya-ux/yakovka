'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Home, Compass, MessageCircle, Route } from 'lucide-react';

export default function NotFound() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      
      // Smooth animation via requestAnimationFrame could be added here, 
      // but native CSS transition on transform is lighter.
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#0a0a0a] text-stone-300 overflow-hidden flex items-center justify-center font-sans selection:bg-primary/30 selection:text-white"
    >
      {/* 1. Background Grid & Noise */}
      <div 
        className="absolute inset-0 z-0 opacity-20 transition-transform duration-700 ease-out"
        style={{ transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)` }}
      >
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Radial Glow */}
      <div 
        className="absolute w-[800px] h-[800px] rounded-full blur-[120px] opacity-20 bg-primary/40 pointer-events-none transition-transform duration-[1500ms] ease-out mix-blend-screen"
        style={{ transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)` }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      {/* 2. Main Content Card */}
      <div className="relative z-10 w-full max-w-4xl px-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
        
        {/* Left Side: Typography & Info */}
        <div 
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left transition-transform duration-700 ease-out"
          style={{ transform: `translate(${mousePos.x * 5}px, ${mousePos.y * 5}px)` }}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Route status: lost
          </div>

          {/* Big 404 Typography */}
          <div className="relative mb-6">
            <h1 className="font-heading text-8xl sm:text-[10rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 select-none">
              404
            </h1>
            <h1 className="absolute inset-0 font-heading text-8xl sm:text-[10rem] font-black leading-none text-transparent text-stroke-white opacity-30 blur-sm select-none">
              404
            </h1>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Маршрут потерян
          </h2>
          <p className="text-stone-400 text-lg max-w-md mb-10 font-light leading-relaxed">
            Страница, которую вы ищете, ушла в обходной путь. Но навигация ещё работает. Вернитесь на главную или выберите один из безопасных маршрутов.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/" className="group relative w-full sm:w-auto">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-primary rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
              <button className="relative w-full flex items-center justify-center gap-3 px-8 py-4 bg-stone-900 border border-stone-800 text-white rounded-xl font-medium hover:bg-stone-800 transition-colors">
                <Home className="w-5 h-5 text-primary" />
                Вернуться на главную
              </button>
            </Link>
            <Link href="/contacts" className="w-full sm:w-auto">
              <button className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-stone-800 text-stone-300 rounded-xl font-medium hover:bg-stone-900 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
                Связаться
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side: Status Panel */}
        <div 
          className="hidden md:flex flex-col w-64 shrink-0 transition-transform duration-700 ease-out"
          style={{ transform: `translate(${mousePos.x * -8}px, ${mousePos.y * -8}px) perspective(1000px) rotateY(${mousePos.x * 5}deg) rotateX(${mousePos.y * -5}deg)` }}
        >
          <div className="bg-stone-900/50 backdrop-blur-xl border border-stone-800/80 p-6 rounded-2xl shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <h3 className="text-stone-500 text-xs font-mono uppercase tracking-wider mb-6 flex items-center gap-2">
              <Route className="w-4 h-4" />
              Diagnostics
            </h3>
            
            <ul className="space-y-4 font-mono text-sm">
              <li className="flex justify-between items-center border-b border-stone-800 pb-2">
                <span className="text-stone-500">Signal:</span>
                <span className="text-amber-400">unstable</span>
              </li>
              <li className="flex justify-between items-center border-b border-stone-800 pb-2">
                <span className="text-stone-500">Index:</span>
                <span className="text-red-400">not found</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-stone-500">Recovery:</span>
                <span className="text-primary">available</span>
              </li>
            </ul>
            
            <div className="mt-8 pt-6 border-t border-stone-800 flex items-center justify-center">
              <Compass className="w-12 h-12 text-stone-700 animate-[spin_10s_linear_infinite]" />
            </div>
          </div>
        </div>

      </div>

      {/* Decorative Bottom Log */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] text-stone-600 tracking-widest uppercase opacity-50">
        /unknown-route &rarr; fallback &rarr; home
      </div>
      
      {/* Required text-stroke utility style */}
      <style dangerouslySetInnerHTML={{__html: `
        .text-stroke-white {
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
        }
      `}} />
    </div>
  );
}
