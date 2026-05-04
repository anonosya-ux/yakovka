export default function Loading() {
  return (
    <div className="min-h-screen bg-stone-950 flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-heading text-6xl md:text-8xl lg:text-[120px] font-bold text-white tracking-tighter leading-none animate-pulse">
          ЯКОВКА
          <span className="text-primary block text-4xl md:text-6xl mt-2 tracking-normal font-light">
            RESORT
          </span>
        </h1>
        <div className="mt-8 flex justify-center gap-2">
          <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
}
