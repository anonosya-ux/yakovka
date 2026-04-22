import { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import { Map, Clock, Users, Camera, Mountain, TreePine, Sun } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Экскурсии на Алтае | Отель «Яковка» Белокуриха',
  description: 'Увлекательные экскурсии по Алтаю для гостей отеля Яковка: гора Церковка, Четыре брата, Белокуриха-2, Чуйский тракт и многое другое.',
  alternates: { canonical: '/excursions' },
};

const excursions = [
  {
    id: 1,
    title: 'Гора Церковка (Канатная дорога)',
    duration: '2-3 часа',
    level: 'Лёгкий',
    category: 'Пешие / Канатная дорога',
    description: 'Подъем на кресельном подъемнике на вершину горы Церковка. Оттуда открывается панорамный вид на горы Алтая и курортную зону.',
    features: ['Панорамные виды', 'Легенды Алтая', 'Кафе на вершине', 'Канатная дорога'],
    icon: Mountain,
    img: '/images/gallery/_6-12.jpg'
  },
  {
    id: 2,
    title: 'Скала «Четыре брата»',
    duration: '3-4 часа',
    level: 'Средний',
    category: 'Пешие / Авто',
    description: 'Знаменитый природный памятник Белокурихи. Живописный маршрут проходит по красивому хвойному лесу, наполняя легкие свежим воздухом.',
    features: ['Природный памятник', 'Лесная тропа', 'Свежий воздух', 'Место силы'],
    icon: TreePine,
    img: '/images/gallery/image-28-09-23-05-16-4.jpeg'
  },
  {
    id: 3,
    title: 'Горный серпантин «Белокуриха-2»',
    duration: '3 часа',
    level: 'Лёгкий',
    category: 'Авто',
    description: 'Поездка по живописному серпантину с арт-объектами (байкер-топор, пепелац). Посещение музея под открытым небом «Андреевская слобода».',
    features: ['Арт-объекты', 'Серпантин', 'Музейный комплекс', 'Красивые фото'],
    icon: Camera,
    img: '/images/gallery/_6-59.jpg'
  },
  {
    id: 4,
    title: 'Скала «Врата любви»',
    duration: '2 часа',
    level: 'Легкий',
    category: 'Пешие',
    description: 'Легкая прогулка к красивой скале, окутанной романтическими легендами. Идеально для утренней или вечерней прогулки.',
    features: ['Романтическое место', 'Легкий маршрут', 'Много фотолокаций'],
    icon: Sun,
    img: '/images/gallery/image-14-03-24-11-18.jpeg'
  },
  {
    id: 5,
    title: 'Конные прогулки',
    duration: 'от 1 часа',
    level: 'Для всех',
    category: 'Конные',
    description: 'Увлекательные прогулки верхом на лошадях по окрестностям Яковки. Подходит как для новичков, так и для опытных наездников.',
    features: ['Инструктаж', 'Спокойные лошади', 'Маршруты разной длины'],
    icon: Users,
    img: '/images/gallery/image-28-09-23-05-05.jpeg'
  },
  {
    id: 6,
    title: 'Алтайский Аил (Этно-тур)',
    duration: '3-4 часа',
    level: 'Легкий',
    category: 'Этно',
    description: 'Погружение в культуру коренных алтайцев. Вы узнаете о традициях, обычаях и попробуете национальные блюда.',
    features: ['Национальная кухня', 'Шаманские истории', 'Горловое пение'],
    icon: Users,
    img: '/images/gallery/FullSizeRender (10).jpeg'
  },
  {
    id: 7,
    title: 'Чемал и Остров Патмос',
    duration: 'Весь день (10-12 ч)',
    level: 'Дальние поездки',
    category: 'Авто (Микроавтобус)',
    description: 'Поездка в Горный Алтай. Посещение подвесного моста к острову Патмос, Чемальской ГЭС и красивейших мест слияния рек.',
    features: ['Горный Алтай', 'Храм на острове', 'Слияние Чемала и Катуни'],
    icon: Map,
    img: '/images/gallery/_6-12.jpg'
  },
  {
    id: 8,
    title: 'Путешествие по Чуйскому тракту',
    duration: 'Весь день (12-14 ч)',
    level: 'Дальние поездки',
    category: 'Авто (Джип-тур)',
    description: 'Поездка по одной из самых красивых дорог мира по версии National Geographic. Красочные горы, горные реки и перевалы.',
    features: ['Перевалы', 'Наскальные рисунки', 'Гейзерное озеро'],
    icon: Mountain,
    img: '/images/gallery/image-28-09-23-05-16-4.jpeg'
  },
  {
    id: 9,
    title: 'Квадроциклы и снегоходы',
    duration: 'от 1 часа',
    level: 'Экстрим',
    category: 'Техника',
    description: 'Драйв и адреналин! Разнообразные маршруты от простых по полям до сложных с преодолением бродов и грязи.',
    features: ['Инструктаж', 'Экипировка', 'Разные маршруты', 'Адреналин'],
    icon: Mountain,
    img: '/images/gallery/_6-59.jpg'
  }
];

export default function ExcursionsPage() {
  return (
    <div className="flex flex-col bg-stone-50 min-h-screen">
      <PageHero
        title="Экскурсии"
        subtitle="Откройте для себя красоты Алтая вместе с нами. От легких прогулок по Белокурихе до поездок по Чуйскому тракту."
        badge="🗺️ Маршруты по Алтаю"
        imageSrc="/images/gallery/_6-12.jpg"
        imageAlt="Экскурсии отеля Яковка"
        breadcrumbs={[{ label: 'Экскурсии' }]}
        variant="primary"
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">Впечатления</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-stone-900 mb-6">
              9 экскурсий для наших гостей
            </h2>
            <p className="text-stone-500 text-lg leading-relaxed">
              Мы сотрудничаем с лучшими гидами Белокурихи. Вы можете выбрать любую экскурсию, и мы организуем её для вас. Отправление прямо от ворот отеля «Яковка».
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {excursions.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-lg transition-all duration-300 border border-stone-100 flex flex-col group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill 
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold tracking-wide text-primary shadow-sm">
                    {item.category}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-heading text-2xl font-bold text-stone-800 mb-4">{item.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-6 flex-grow">{item.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6 pt-6 border-t border-stone-100">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-stone-400 font-medium uppercase tracking-wider">Длительность</span>
                      <span className="text-sm font-semibold text-stone-700 flex items-center gap-1.5">
                        <Clock size={14} className="text-primary" /> {item.duration}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-stone-400 font-medium uppercase tracking-wider">Уровень</span>
                      <span className="text-sm font-semibold text-stone-700 flex items-center gap-1.5">
                        <Mountain size={14} className="text-primary" /> {item.level}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-0">
                    {item.features.slice(0,3).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-stone-600">
                        <div className="w-1.5 h-1.5 bg-primary/40 rounded-full shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner 
        title="Помочь с выбором?" 
        subtitle="Свяжитесь с нами, и мы подберем экскурсионную программу под ваши пожелания."
        buttonText="Связаться с нами"
        buttonLink="/contacts"
        variant="primary"
      />
    </div>
  );
}
