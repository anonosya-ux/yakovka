import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import { Flame, Droplets, Clock, Users, Sparkles, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Русская баня на дровах',
  description: 'Русская баня на дровах в загородном отеле «Яковка» в Белокурихе. Берёзовые и дубовые веники, комната отдыха, летний неподогреваемый бассейн. Аренда для компаний. Ежедневно 10:00–22:00.',
  keywords: ['баня Белокуриха', 'русская баня Алтай', 'баня на дровах', 'парная отруби'],
  alternates: { canonical: '/infrastructure/banya' },
};

const features = [
  { icon: Flame, title: 'На берёзовых дровах', desc: 'Настоящая дровяная печь — мягкий, ароматный пар без электрических аналогов' },
  { icon: Droplets, title: 'Летний неподогреваемый бассейн', desc: 'Контрастное обливание в деревянной летнего неподогреваемого бассейна с холодной горной водой' },
  { icon: Sparkles, title: 'Веники и масла', desc: 'Берёзовые, дубовые, пихтовые веники. Ароматные масла и травяные настои' },
  { icon: Users, title: 'Для компаний', desc: 'Аренда бани для компаний до 8 человек с комнатой отдыха' },
  { icon: Heart, title: 'Оздоровление', desc: 'Баня улучшает кровообращение, выводит токсины, укрепляет иммунитет' },
  { icon: Clock, title: 'Режим работы', desc: 'Ежедневно с 10:00 до 22:00. Бронирование рекомендуется заранее' },
];

export default function BanyaPage() {
  return (
    <div className="flex flex-col bg-background">
      <PageHero
        title="Русская баня"
        subtitle="Настоящая баня на берёзовых дровах с летний неподогреваемый бассейню и вениками — оздоровление после горнолыжного дня"
        badge="🔥 На дровах"
        imageSrc="/optimized/Виды/Женщины/Женщины-01.webp"
        imageAlt="Русская баня на дровах — загородный отель Яковка"
        breadcrumbs={[
          { label: 'Инфраструктура', href: '/infrastructure/ski' },
          { label: 'Баня' }
        ]}
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">Традиции</span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-stone-900 mb-6">
                Русская баня на дровах
              </h2>
              <p className="text-stone-500 text-lg font-light leading-relaxed max-w-3xl mx-auto">
                Наша баня — это не просто парная, а настоящий ритуал оздоровления и отдыха. 
                Мы используем берёзовые дрова для мягкого, ароматного пара, а после парной — 
                контрастное обливание в деревянной летнего неподогреваемого бассейна с чистой горной водой.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, idx) => {
                const Icon = f.icon;
                return (
                  <div key={idx} className="bg-white rounded-2xl p-6 shadow-premium border border-stone-100 hover:shadow-premium-lg hover:-translate-y-1 transition-all duration-500 group">
                    <div className="p-2.5 bg-primary/10 rounded-xl w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-stone-800 mb-2">{f.title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-stone-900 mb-8 text-center">Стоимость</h3>
            <div className="bg-white rounded-3xl shadow-premium overflow-hidden border border-stone-100">
              <div className="p-8 border-b border-stone-100">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-heading font-bold text-stone-800 text-lg">Аренда бани (2 часа)</h4>
                    <p className="text-stone-400 text-sm mt-1">До 4 человек</p>
                  </div>
                  <span className="font-heading text-2xl font-bold text-primary">2 500 ₽</span>
                </div>
              </div>
              <div className="p-8 border-b border-stone-100">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-heading font-bold text-stone-800 text-lg">Аренда бани (2 часа)</h4>
                    <p className="text-stone-400 text-sm mt-1">До 8 человек, с комнатой отдыха</p>
                  </div>
                  <span className="font-heading text-2xl font-bold text-primary">4 000 ₽</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-heading font-bold text-stone-800 text-lg">Веник</h4>
                    <p className="text-stone-400 text-sm mt-1">Берёзовый/дубовый</p>
                  </div>
                  <span className="font-heading text-2xl font-bold text-primary">300 ₽</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner 
        title="Забронируйте баню" 
        subtitle="Оставьте свои контакты, и мы перезвоним, чтобы подобрать удобное время. Либо звоните напрямую: +7 (960) 955-21-00."
        variant="dark"
        buttonText="Позвонить"
        buttonLink="tel:+79609552100"
      />
    </div>
  );
}
