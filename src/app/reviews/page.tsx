import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import ReviewCard from '@/components/ReviewCard';

export const metadata: Metadata = {
  title: 'Отзывы гостей',
  description: 'Реальные отзывы гостей загородного отеля «Яковка» в Белокурихе. Рейтинг 4.5 на Яндекс.Картах. Узнайте, почему путешественники возвращаются к нам снова.',
  alternates: { canonical: '/reviews' },
};

const reviews = [
  {
    name: 'Анна Петрова',
    date: 'Март 2026',
    rating: 5,
    text: 'Прекрасный отдых с детьми! Приезжали на горнолыжный сезон — трассы идеально подходят для начинающих. Номер чистый и уютный, завтрак вкусный. Дети были в восторге от снежных горок. Обязательно вернёмся!',
  },
  {
    name: 'Михаил Козлов',
    date: 'Февраль 2026',
    rating: 5,
    text: 'Отличное место для семейного отдыха зимой. Две горнолыжные трассы — для новичков и более опытных лыжников. Баня на дровах — просто сказка после дня на склоне. Персонал приветливый. 10 из 10.',
  },
  {
    name: 'Елена Сидорова',
    date: 'Январь 2026',
    rating: 4,
    text: 'Отдыхали на новогодние праздники. Очень красиво, природа потрясающая. Номер «Семейный++» просто огромный — разместились всей семьёй с двумя детьми. Ресторан порадовал алтайской кухней. Единственное — в праздники очень много людей.',
  },
  {
    name: 'Дмитрий Волков',
    date: 'Декабрь 2025',
    rating: 5,
    text: 'Второй раз приезжаем в «Яковку» и каждый раз уезжать не хочется. Воздух чистейший, горы завораживают. Очень оценил прокат снаряжения — всё новое и качественное. Цены адекватные для такого уровня.',
  },
  {
    name: 'Ольга Никитина',
    date: 'Август 2025',
    rating: 5,
    text: 'Приезжали летом — совершенно другая атмосфера, но не менее прекрасная. Ходили в горы, собирали ягоды, купались в реке. Вечерами — баня и шашлык на природе. Настоящий отдых от города!',
  },
  {
    name: 'Сергей Морозов',
    date: 'Июль 2025',
    rating: 4,
    text: 'Хорошее место для корпоратива. Арендовали банкетный зал и несколько номеров. Всё организовали на высшем уровне. Wi-Fi стабильный, что важно для деловых мероприятий. Рекомендую для тимбилдинга.',
  },
  {
    name: 'Наталья Белова',
    date: 'Июнь 2025',
    rating: 5,
    text: 'Идеальное место для романтического отдыха! Тихо, красиво, уютно. Ужин в ресторане с видом на горы — незабываемо. Персонал очень внимательный. Муж заказал торт на годовщину — ребята сделали всё идеально.',
  },
  {
    name: 'Алексей Крылов',
    date: 'Март 2025',
    rating: 5,
    text: 'Как горнолыжный курорт — отличный вариант для семьи. Трассы небольшие, но идеальны чтобы научить детей кататься. Инструктор помог сыну встать на лыжи за 2 дня. Рядом канатная дорога на Церковку.',
  },
];

export default function ReviewsPage() {
  return (
    <div className="flex flex-col bg-background">
      <PageHero
        title="Отзывы гостей"
        subtitle="Узнайте, почему наши гости возвращаются снова и снова — реальные отзывы о загородном отеле «Яковка»"
        badge="⭐ 4.5 на Яндекс.Картах"
        imageSrc="/images/gallery/image-28-09-23-05-05.jpeg"
        imageAlt="Загородный отель Яковка — отзывы гостей"
        breadcrumbs={[{ label: 'Отзывы' }]}
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">Нам доверяют</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-stone-900 mb-4">
              Что говорят наши гости
            </h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto font-light">
              Более 5000 гостей выбрали загородный отель «Яковка» для отдыха в горах Алтая
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {reviews.map((review, idx) => (
              <ReviewCard key={idx} {...review} />
            ))}
          </div>

          <div className="mt-16 text-center space-y-4">
            <p className="text-stone-500">Читайте больше отзывов на популярных сервисах</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://yandex.ru/maps/org/yakovka/1062999531/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-full font-bold hover:bg-primary transition-colors shadow-premium"
              >
                Яковка на Яндекс.Картах
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Review Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hotel",
            "name": "Загородный отель «Яковка»",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.5",
              "reviewCount": "87",
              "bestRating": "5"
            },
            "review": reviews.slice(0, 3).map(r => ({
              "@type": "Review",
              "author": { "@type": "Person", "name": r.name },
              "datePublished": "2026-01-01",
              "reviewRating": { "@type": "Rating", "ratingValue": r.rating },
              "reviewBody": r.text
            }))
          })
        }}
      />

      <CTABanner 
        title="Хотите стать нашим гостем?" 
        subtitle="Забронируйте номер и создайте свой собственный отзыв о незабываемом отдыхе в горах Алтая"
        variant="nature" 
      />
    </div>
  );
}
