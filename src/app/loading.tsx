import { YakovkaLogo } from '@/components/Logo';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-50">
      <div className="flex flex-col items-center animate-pulse-glow">
        <div className="relative w-24 h-24 mb-6">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
          <YakovkaLogo className="w-full h-full text-stone-900 relative z-10 drop-shadow-xl" />
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
          <div className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
          <div className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce" />
        </div>
        
        <span className="mt-4 font-heading text-stone-500 font-bold tracking-widest uppercase text-sm">
          Загрузка...
        </span>
      </div>
    </div>
  );
}
