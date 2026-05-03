import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'История Яковки — Загородный отель в Белокурихе',
  description: 'Узнайте историю создания загородного отеля «Яковка» у подножия одноименной горы в Белокурихе.',
  alternates: { canonical: '/about/history' },
};

export default function HistoryPage() {
  return (
    <div className="bg-white pt-24 pb-24 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <Breadcrumbs variant="light" />
        
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">История Яковки</h1>
        <p className="text-xl text-slate-500 mb-12">Как мы строили место для идеального отдыха на Алтае.</p>

        <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-12 shadow-2xl">
          <Image
            src="/optimized/Виды/Природа/Природа-01.webp"
            alt="Природа вокруг горы Яковка"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <span className="text-white/80 font-medium tracking-wider uppercase text-sm mb-2 block">С чего всё началось</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Место силы у подножия горы</h2>
          </div>
        </div>

        <div className="prose prose-lg md:prose-xl prose-slate max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-blue-600">
          <p className="lead text-2xl md:text-3xl text-slate-800 font-medium mb-12 leading-relaxed">
            История загородного отеля «Яковка» неразрывно связана с историей освоения горнолыжных склонов Белокурихи. Гора Яковка всегда привлекала любителей активного отдыха своими мягкими снежными зимами и живописными видами.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-start mt-16">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Зарождение легенды</h3>
              <p className="text-slate-600 mb-6">
                Изначально на этом месте располагалась лишь небольшая база для лыжников, которая предлагала базовые услуги проката и обогрева. Мы видели, с каким энтузиазмом люди приезжают сюда покорять склоны, и поняли, что этому месту нужно нечто большее.
              </p>
              <p className="text-slate-600">
                Со временем популярность склона росла экспоненциально, и возникла естественная необходимость в создании полноценной инфраструктуры для отдыха, где гости могли бы остаться на несколько дней.
              </p>
            </div>
            <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/optimized/Мероприятия/Горные лыжи/Горные лыжи-02.webp"
                alt="Горнолыжные трассы на Яковке"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="my-16 p-10 bg-slate-50 rounded-3xl border border-slate-100">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Эволюция комфорта</h3>
            <p className="text-slate-600 mb-6">
              Мы начали с возведения первых уютных деревянных домиков, которые моментально полюбились нашим гостям за их атмосферу уединения и тепло. С каждым годом мы прислушивались к пожеланиям посетителей и расширялись.
            </p>
            <p className="text-slate-600">
              Позже был построен центральный комплекс с фирменной домашней кухней «Рум Яковка» и аутентичная русская баня, чтобы гости могли согреться, вкусно поужинать и восстановить силы после активного дня на морозном воздухе.
            </p>
          </div>

          <h3 className="text-3xl font-bold text-slate-900 mb-6 mt-16">«Яковка» сегодня</h3>
          <p className="text-slate-600">
            Сегодня «Яковка» — это современный, полностью укомплектованный загородный отель, предлагающий комфортное размещение в номерах различных категорий, от демократичных стандартов до просторных уединенных коттеджей для больших компаний. 
          </p>
          <p className="text-slate-600 mt-4">
            Несмотря на масштабное развитие инфраструктуры, мы гордимся тем, что смогли сохранить главное — дух уединения с дикой природой Алтая, обеспечив при этом сервис высочайшего уровня.
          </p>
        </div>

        <Link href="/about" className="inline-flex items-center gap-2 mt-16 text-stone-500 hover:text-primary transition-colors font-medium">
          <ArrowLeft size={20} />
          Вернуться в раздел «О курорте»
        </Link>
      </div>
    </div>
  );
}
