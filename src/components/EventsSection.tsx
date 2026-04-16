'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PartyPopper, Users, TreePine } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface EventsSectionProps {
  onOpenCallback: () => void;
}

export default function EventsSection({ onOpenCallback }: EventsSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin text section on desktop while cards scroll
      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          gsap.to(textRef.current, {
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top+=100",
              end: "bottom bottom",
              pin: textRef.current,
              pinSpacing: false,
            }
          });
        }
      });

      // Cards staggered entrance
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, x: 100, rotationY: -15 },
          {
            opacity: 1,
            x: 0,
            rotationY: 0,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 70%",
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="events" className="py-24 relative bg-slate-50 overflow-hidden" ref={containerRef}>
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-70 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Text Sticky Content */}
          <div className="lg:col-span-5 flex flex-col justify-center" ref={textRef}>
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-100/50 text-blue-700 text-sm font-medium mb-6 border border-blue-200">
              <PartyPopper size={16} />
              <span>Мероприятия & Отдых</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
              Идеальное место для ваших <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">событий</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Горнолыжный комплекс «Яковка» — это не только отдых, но и великолепная локация для корпоративов, свадеб и семейных торжеств в любое время года.
            </p>
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4 text-slate-700 font-medium bg-white/60 p-4 rounded-2xl border border-slate-100 shadow-sm backdrop-blur-md hover:-translate-y-1 transition-transform">
                <div className="bg-blue-100 p-3 rounded-xl text-blue-600"><Users size={20} /></div>
                Уютный банкетный зал
              </div>
              <div className="flex items-center gap-4 text-slate-700 font-medium bg-white/60 p-4 rounded-2xl border border-slate-100 shadow-sm backdrop-blur-md hover:-translate-y-1 transition-transform">
                <div className="bg-green-100 p-3 rounded-xl text-green-600"><TreePine size={20} /></div>
                Зелёная зона для выездных регистраций
              </div>
            </div>
            
            <Button onClick={onOpenCallback} size="lg" className="w-full sm:w-fit rounded-full px-8 bg-slate-900 hover:bg-slate-800 text-white shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all group overflow-hidden relative">
               <span className="relative z-10 flex items-center gap-2">Связаться с менеджером</span>
               {/* Hover Magic Effect */}
               <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
            </Button>
          </div>

          {/* Right Cards Content */}
          <div className="lg:col-span-7 flex flex-col gap-8 [perspective:1000px]" ref={cardsRef}>
            
            {/* Card 1 */}
            <div className="relative rounded-[2rem] overflow-hidden group bg-white p-2 border border-slate-100 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.05)] transform-style-3d">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 z-20 pointer-events-none" />
              <div className="relative h-72 lg:h-80 w-full overflow-hidden rounded-[1.5rem]">
                <Image 
                  src="https://xn--80adxbs4h.xn--p1ai/wp-content/uploads/2024/02/slide-st-1.webp" /* Replace with actual banquet photo */
                  alt="Банкетный зал"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 text-white z-10">
                  <h3 className="text-2xl font-bold mb-2">Зимний банкетный зал</h3>
                  <p className="text-sm text-white/80 max-w-sm">Теплая атмосфера для проведения мероприятий до 50 человек.</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-[2rem] overflow-hidden group bg-white p-2 border border-slate-100 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.05)] transform-style-3d lg:ml-12">
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 z-20 pointer-events-none" />
              <div className="relative h-72 lg:h-80 w-full overflow-hidden rounded-[1.5rem]">
                <Image 
                  src="https://xn--80adxbs4h.xn--p1ai/wp-content/uploads/2024/11/0T5A0962-scaled.jpg" /* Replace with actual summer photo */
                  alt="Летняя веранда"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 text-white z-10">
                  <h3 className="text-2xl font-bold mb-2">Летняя веранда</h3>
                  <p className="text-sm text-white/80 max-w-sm">Идеально для свадебных церемоний и вечеринок на открытом воздухе.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
