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

        {/* TODO: Заменить на реальный исторический текст от Михаила */}
        <div className="bg-amber-50 border border-amber-200 text-amber-800 p-6 rounded-2xl mb-12">
          <p className="font-bold flex items-center gap-2 mb-2">
            ⚠️ Страница в стадии наполнения
          </p>
          <p className="text-sm">
            Подробная история создания комплекса будет добавлена после получения материалов.
          </p>
        </div>

        <div className="prose prose-lg prose-slate max-w-none opacity-80 pointer-events-none">
          <p>
            История загородного отеля «Яковка» неразрывно связана с историей освоения горнолыжных склонов Белокурихи. Гора Яковка всегда привлекала любителей активного отдыха своими мягкими снежными зимами и живописными видами.
          </p>
          <h2>Начало пути</h2>
          <p>
            Изначально на этом месте располагалась лишь небольшая база для лыжников, которая предлагала базовые услуги проката и обогрева. Со временем популярность склона росла, и возникла необходимость в создании полноценной инфраструктуры для отдыха.
          </p>
          <h2>Развитие инфраструктуры</h2>
          <p>
            Мы начали с возведения первых уютных номеров, которые быстро полюбились нашим гостям. Позже был построен комплекс с домашней кухней и традиционная русская баня, чтобы гости могли согреться и восстановить силы после активного дня на склоне.
          </p>
          <h2>Сегодняшний день</h2>
          <p>
            Сегодня «Яковка» — это современный загородный отель, предлагающий комфортное размещение в номерах различных категорий, от стандартов до просторных коттеджей. Мы гордимся тем, что смогли сохранить дух уединения с природой, обеспечив при этом высокий уровень сервиса.
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
