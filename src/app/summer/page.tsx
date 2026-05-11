import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import FAQAccordion from '@/components/FAQAccordion';
import { Sun, TreePine, Compass, Camera, Bike, UtensilsCrossed } from 'lucide-react';
import { PriceTable } from '@/components/PriceTable';

export const metadata: Metadata = {
  title: 'Летний отдых на Алтае',
  description: 'Летний отдых в загородном отеле «Яковка» в Белокурихе. Горные походы, экскурсии на Церковку, рыбалка, велопрогулки, бассейн. Семейный отдых на чистом горном воздухе.',
  keywords: ['летний отдых Алтай', 'Белокуриха лето', 'горные походы Алтай', 'семейный отдых горы', 'экскурсии Церковка'],
  alternates: { canonical: '/summer' },
};

const activities = [
  {
    icon: TreePine,
    title: 'Пешие прогулки в горы',
    desc: 'Живописные пешие маршруты и тропы Алтая, подходящие как для простых прогулок, так и для активного треккинга.',
  },
  {
    icon: Camera,
    title: 'Экскурсии',
    desc: 'Увлекательные поездки к главным достопримечательностям Белокурихи и горного Алтая — от канатной дороги до перевалов.',
  },
  {
    icon: Compass,
    title: 'Квадроциклы',
    desc: 'Захватывающие маршруты на квадроциклах для любителей активного отдыха и драйва по пересеченной местности.',
  },
  {
    icon: Bike,
    title: 'Велопрогулки',
    desc: 'Аренда велосипедов и маршруты по терренкурам Белокурихи. Идеально подходит для активного отдыха с семьей.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Шашлык на природе',
    desc: 'Мангальные зоны на территории отеля. Всё необходимое для приготовления сочного барбекю предоставляется.',
  },
  {
    icon: Sun,
    title: 'Прогулки на лошадях и отдых',
    desc: 'Шезлонги на зелёной территории отеля, детская площадка, батуты. Полный релакс на свежем воздухе для всей семьи.',
  },
];

const faqItems = [
  {
    question: 'Какая погода в Белокурихе летом?',
    answer: 'Лето в Белокурихе тёплое и солнечное. Средняя температура июня-августа — 22-28°C. Дожди редки. Горный воздух свежий и чистый, что делает отдых особенно приятным.',
  },
  {
    question: 'Какие экскурсии доступны?',
    answer: 'Самая популярная — подъём на гору Церковка на канатной дороге. Также доступны: экскурсии по Чемальскому тракту, на Телецкое озеро, к водопадам, посещение маральника и пасек.',
  },
  {
    question: 'Есть ли развлечения для детей?',
    answer: 'Конечно! На территории отеля есть детская площадка и батут. Поблизости — аквапарк, конные прогулки, верёвочный парк. Детское меню в домашняя кухняе.',
  },
];

export default function SummerPage() {
  return (
    <div className="flex flex-col bg-background">
      <PageHero
        title="Лето на Алтае"
        subtitle="Горные походы, экскурсии, рыбалка и релакс на свежем воздухе — летний отдых для всей семьи в Белокурихе"
        badge="☀️ Июнь — Сентябрь"
        imageSrc="/optimized/Виды/Природа/Природа-03.webp"
        imageAlt="Летний отдых в отеле Яковка Белокуриха"
        breadcrumbs={[{ label: 'Летний отдых' }]}
      />

      {/* Activities */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">Активности</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-stone-900 mb-4">
              Чем заняться летом
            </h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto font-light">
              Белокуриха — не только горнолыжный курорт. Лето здесь не менее прекрасно!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {activities.map((a, idx) => {
              const Icon = a.icon;
              return (
                <div key={idx} className="bg-white rounded-3xl p-8 shadow-premium border border-stone-100 hover:shadow-premium-lg hover:-translate-y-1 transition-all duration-500 group">
                  <div className="p-3 bg-primary/10 rounded-2xl w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-stone-800 mb-2">{a.title}</h3>
                  <p className="text-stone-500 leading-relaxed">{a.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Summer Section */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-stone-900 mb-8 text-center">
              Почему лето в Белокурихе?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
                <h3 className="font-heading text-lg font-bold text-stone-800 mb-3">🌿 Чистый горный воздух</h3>
                <p className="text-stone-500 leading-relaxed">Белокуриха расположена в долине, окружённой горами. Воздух насыщен фитонцидами хвойных лесов и лёгкими аэроионами — природный оздоровительный эффект.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
                <h3 className="font-heading text-lg font-bold text-stone-800 mb-3">🏔️ Потрясающие виды</h3>
                <p className="text-stone-500 leading-relaxed">Панорамы горных хребтов, альпийские луга, горные реки — пейзажи, которые невозможно передать фотографиями. Здесь нужно побывать.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
                <h3 className="font-heading text-lg font-bold text-stone-800 mb-3">👨‍👩‍👧‍👦 Для всей семьи</h3>
                <p className="text-stone-500 leading-relaxed">Развлечения для всех возрастов: от батутов для малышей до горных маршрутов для взрослых. Безопасно и комфортно.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
                <h3 className="font-heading text-lg font-bold text-stone-800 mb-3">💰 Доступные цены</h3>
                <p className="text-stone-500 leading-relaxed">Летние цены на проживание — от 5 800 ₽/сутки. Специальные пакеты «Летний релакс» со скидкой 15%.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-stone-900 mb-4">
              Цены на активности
            </h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto font-light">Насладитесь красотами Алтая на квадроциклах или верхом на лошади.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <PriceTable
              title="Квадроциклы"
              subtitle="Захватывающие маршруты по пересеченной местности"
              items={[
                { name: '1 час', price: 6500 },
                { name: '2 часа', price: 12000 },
                { name: 'Каждый последующий час', price: 6000 },
                { name: 'Дневной тур', price: 45000, highlighted: true },
              ]}
            />
            <PriceTable
              title="Конные прогулки"
              subtitle="Живописные летние маршруты"
              items={[
                { name: 'Прогулка вдоль реки (1.5ч)', price: 1750 },
                { name: 'С подъемом на гору (2ч)', price: 3000 },
                { name: 'На 3 часа', price: 4500 },
                { name: 'На 5 часов', price: 7500, highlighted: true },
              ]}
            />
          </div>
          <p className="text-sm text-stone-400 mt-8 text-center">* Цены указаны для ознакомления, тарифы могут быть изменены.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-stone-900">
              Вопросы о летнем отдыхе
            </h2>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <CTABanner 
        title="Забронируйте летний отдых" 
        subtitle="Специальный пакет «Летний релакс» со скидкой 15% на проживание."
        variant="nature"
      />
    </div>
  );
}
