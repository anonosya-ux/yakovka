'use client';

import React, { useRef } from 'react';

export default function HeroReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Critical Requirement: Update CSS variables directly via ref to bypass React state
    // and guarantee high FPS without re-renders.
    containerRef.current.style.setProperty('--x', `${x}px`);
    containerRef.current.style.setProperty('--y', `${y}px`);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen overflow-hidden bg-white cursor-crosshair"
      style={{
        '--x': '50%',
        '--y': '50%',
      } as React.CSSProperties}
    >
      {/* Middle Layer: Base Noise that covers the white background */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none opacity-60 mix-blend-multiply"
        style={{
          backgroundImage: 'url(/base-noise.png)',
          backgroundRepeat: 'repeat',
        }}
      />
      
      {/* Top Layer: Highly detailed 3D bas-relief, revealed by the brush mask */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-1000"
        style={{
          backgroundImage: 'url(/reveal-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // Use the grunge brush mask with large size
          WebkitMaskImage: 'url(/brush-mask.png)',
          maskImage: 'url(/brush-mask.png)',
          WebkitMaskSize: '600px',
          maskSize: '600px',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          // Position mask centered on the cursor via CSS variables
          WebkitMaskPosition: 'calc(var(--x) - 300px) calc(var(--y) - 300px)',
          maskPosition: 'calc(var(--x) - 300px) calc(var(--y) - 300px)',
        }}
      />
      
      {/* Text Content Overlay */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none">
        <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter uppercase text-black/90 mix-blend-overlay">
          Yakovka
        </h1>
        <p className="mt-6 text-xl md:text-3xl font-light text-black/70 mix-blend-overlay max-w-3xl text-center px-4">
          Discover the art within
        </p>
      </div>
    </section>
  );
}
