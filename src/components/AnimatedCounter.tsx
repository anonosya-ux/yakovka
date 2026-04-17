'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CounterItem {
  value: number;
  suffix?: string;
  label: string;
}

const counters: CounterItem[] = [
  { value: 20, suffix: '+', label: 'Лет безупречной работы' },
  { value: 5000, suffix: '+', label: 'Довольных гостей' },
  { value: 6, label: 'Категорий номеров' },
  { value: 2, label: 'Горнолыжные трассы' },
];

export default function AnimatedCounter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      numberRefs.current.forEach((el, i) => {
        if (!el) return;
        const target = counters[i].value;
        
        gsap.fromTo(el, 
          { innerText: '0' },
          {
            innerText: target,
            duration: 2.5,
            ease: 'power2.out',
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            onUpdate: function() {
              if (el) {
                el.textContent = Math.ceil(Number(el.textContent || '0')).toLocaleString('ru-RU');
              }
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-stone-900 text-white overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {counters.map((item, idx) => (
            <div key={idx} className="text-center group">
              <div className="mb-4">
                <span
                  ref={(el) => { numberRefs.current[idx] = el; }}
                  className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-white inline-block"
                >
                  0
                </span>
                {item.suffix && (
                  <span className="font-heading text-4xl md:text-6xl font-bold text-primary">
                    {item.suffix}
                  </span>
                )}
              </div>
              <p className="text-stone-400 text-sm md:text-base font-medium tracking-wide uppercase">
                {item.label}
              </p>
              {/* Decorative line */}
              <div className="mt-4 mx-auto w-12 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent group-hover:via-primary transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
