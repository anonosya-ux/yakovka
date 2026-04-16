'use client';

import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (isMobile) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      gsap.to(cursorRef.current, {
        x: mouseX,
        y: mouseY,
        duration: 0.2, // smooth follow
        ease: 'power2.out',
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovering(true);
        gsap.to(cursorRef.current, {
          scale: 3.5,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(2px)',
          border: '0.5px solid rgba(255,255,255,0.5)',
          duration: 0.3,
          ease: 'power2.out'
        });
      } else {
        setIsHovering(false);
        gsap.to(cursorRef.current, {
          scale: 1,
          backgroundColor: '#9ca3af', // stone-400 equivalent
          backdropFilter: 'none',
          border: 'none',
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
      style={{ backgroundColor: '#9ca3af' }}
    />
  );
}
