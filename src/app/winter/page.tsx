"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function WinterPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [loadedFrames, setLoadedFrames] = useState(0);
  const totalFrames = 300;
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const images: HTMLImageElement[] = [];
    const imageInfo = { frame: 0 };

    const currentFrame = (index: number) =>
      `/assets/sequence/${(index + 1).toString().padStart(3, '0')}.webp`;

    // Preload
    for (let i = 0; i < totalFrames; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        img.onload = () => {
            setLoadedFrames((prev) => prev + 1);
        };
        images.push(img);
    }

    let ctx = gsap.context(() => {
        // Render function
        const render = () => {
            if (!images[Math.round(imageInfo.frame)]) return;
            const img = images[Math.round(imageInfo.frame)];
            if (!img.complete) return;

            // Ensure canvas matches screen dimensions
            if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }

            // Draw image centered and scaled to cover
            const hRatio = canvas.width / img.width;
            const vRatio = canvas.height / img.height;
            const ratio = Math.max(hRatio, vRatio);
            const centerShift_x = (canvas.width - img.width * ratio) / 2;
            const centerShift_y = (canvas.height - img.height * ratio) / 2;

            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(
                img,
                0,
                0,
                img.width,
                img.height,
                centerShift_x,
                centerShift_y,
                img.width * ratio,
                img.height * ratio
            );
        };

        images[0].onload = render;

        // Render on first tick just in case
        gsap.ticker.add(render);

        // Canvas GSAP sequence
        gsap.to(imageInfo, {
            frame: totalFrames - 1,
            snap: "frame",
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.5,
            },
            onUpdate: render,
        });

        // Animate text sections
        const sections = gsap.utils.toArray('.anim-section');
        sections.forEach((section: any) => {
            const content = section.querySelector('.anim-content');
            gsap.set(content, { opacity: 0, y: 50 });
            
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 70%",
                    end: "bottom 30%",
                    scrub: 1,
                }
            });

            tl.to(content, { opacity: 1, y: 0, duration: 1, ease: "power1.out" })
              .to(content, { opacity: 1, duration: 2 }) // hold
              .to(content, { opacity: 0, y: -50, duration: 1, ease: "power1.in" });
        });
    });

    const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
        gsap.ticker.remove(() => {});
        ctx.revert();
    };
  }, []);

  return (
    <div className="relative bg-black text-white min-h-screen">
      {loadedFrames < totalFrames && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
          <div className="text-center">
            <div className="mb-4 text-2xl font-heading tracking-widest text-white/90">ЗАГРУЗКА ЗИМЫ...</div>
            <div className="w-64 h-1 bg-stone-800 rounded-full overflow-hidden mx-auto">
                <div 
                  className="h-full bg-white transition-all duration-300"
                  style={{ width: `${(loadedFrames / totalFrames) * 100}%` }}
                ></div>
            </div>
            <div className="mt-4 text-stone-500 font-mono text-sm max-w-sm px-6">
                Подождите, пока мы прогружаем {totalFrames} кадров для максимальной плавности
            </div>
          </div>
        </div>
      )}

      {/* Canvas Layer */}
      <canvas 
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-screen z-0 object-cover pointer-events-none"
      />

      {/* Content Layer */}
      <div ref={containerRef} className="relative z-10">
        <section className="anim-section h-screen flex flex-col items-center justify-center relative">
          <div className="anim-content text-center px-6 mt-32">
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 drop-shadow-2xl text-white">
              Зимняя Яковка
            </h1>
            <p className="text-lg md:text-2xl font-light opacity-90 max-w-2xl mx-auto drop-shadow-xl text-stone-200">
              Погрузитесь в атмосферу сказки. Заснеженные вершины, чистый горный воздух и идеальные трассы.
            </p>
          </div>
        </section>

        <section className="anim-section h-screen flex flex-col items-center justify-center relative">
          <div className="anim-content text-center px-6">
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl text-white">
              Катание для всех
            </h2>
            <p className="text-lg md:text-2xl font-light opacity-90 max-w-2xl mx-auto drop-shadow-xl text-stone-200">
              Мы подготовили склоны как для новичков, так и для профи. Инструкторы помогут сделать первые снежные шаги.
            </p>
          </div>
        </section>

        <section className="anim-section h-screen flex flex-col items-center justify-center relative">
          <div className="anim-content text-center px-6">
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl text-white">
              После гор — баня
            </h2>
            <p className="text-lg md:text-2xl font-light opacity-90 max-w-2xl mx-auto drop-shadow-xl text-stone-200">
              Настоящая русская баня на дровах, чтобы согреться и восстановить силы после активного дня на морозе.
            </p>
          </div>
        </section>

        <section className="anim-section h-screen flex flex-col items-center justify-center relative">
          <div className="anim-content text-center px-6">
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-8 drop-shadow-2xl text-white">
              В самое сердце зимы
            </h2>
            <p className="text-lg md:text-2xl font-light opacity-90 max-w-2xl mx-auto drop-shadow-xl mb-12 text-stone-200">
              Откройте для себя зимнюю сказку в лучшем курорте Белокурихи.
            </p>
            <a href="/rooms" className="inline-flex items-center justify-center px-10 py-5 bg-white text-stone-900 font-bold rounded-full hover:scale-105 hover:bg-stone-100 transition-all text-lg shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              Выбрать номер
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
