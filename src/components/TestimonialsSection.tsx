import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Marquee } from '@/components/ui/marquee';

const testimonials = [
    {
      name: 'Евгений С.',
      username: 'Уют альпийского шале',
      body: 'Потрясающее место у подножия горы! Уют альпийского шале, очень чистые и комфортные номера, а вкусная домашняя кухня - выше всяких похвал.',
      img: 'https://randomuser.me/api/portraits/men/32.jpg',
      source: 'Яндекс Карты'
    },
    {
      name: 'Марина Иванова',
      username: 'Доброжелательный персонал',
      body: 'Всё на высшем уровне. Персонал невероятно доброжелательный, готовы помочь в любую минуту. Обязательно вернемся.',
      img: 'https://randomuser.me/api/portraits/women/51.jpg',
      source: 'Яндекс Карты'
    },
    {
      name: 'Алексей Д.',
      username: 'Жаркая баня',
      body: 'Семейный номер оказался очень просторным. Отдельное спасибо за жаркую русскую баню на дровах! То что нужно после катания.',
      img: 'https://randomuser.me/api/portraits/men/45.jpg',
      source: '2ГИС'
    },
    {
      name: 'Дмитрий Соколов',
      username: 'Шикарные виды',
      body: 'За свои деньги - топовый выбор в Белокурихе. Вкусная еда, тишина и шикарные виды на гору Яковка прямо из окна.',
      img: 'https://randomuser.me/api/portraits/men/33.jpg',
      source: 'Яндекс Карты'
    },
     {
      name: 'Анна Т.',
      username: 'Идеальное расположение',
      body: 'Прекрасные виды и тишина. Удобно добираться до подъемников - они буквально в двух шагах. Завтраки очень сытные.',
      img: 'https://randomuser.me/api/portraits/women/68.jpg',
      source: '2ГИС'
    },
     {
      name: 'Михаил',
      username: 'Отличный отдых',
      body: 'Качественный сервис, удобные матрасы, завтраки превзошли ожидания. Настоятельно рекомендую шале для спокойного семейного отдыха.',
      img: 'https://randomuser.me/api/portraits/men/22.jpg',
      source: 'Яндекс Карты'
    }
];

function TestimonialCard({ img, name, username, body, source }: (typeof testimonials)[number]) {
  return (
    <Card className="w-72 md:w-80 border-stone-200">
      <CardContent>
        <div className="flex items-center gap-2.5">
          <Avatar className="size-10 shadow-sm border border-stone-100">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <figcaption className="text-sm font-semibold text-stone-800 flex items-center gap-1">
              {name}
            </figcaption>
            <p className="text-xs font-medium text-stone-500">{username} • {source}</p>
          </div>
        </div>
        <div className="flex gap-1 mt-3 mb-2 text-yellow-400 text-xs">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
        <blockquote className="text-sm text-stone-600 leading-relaxed">"{body}"</blockquote>
      </CardContent>
    </Card>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-stone-50 overflow-hidden w-full">
        <div className="container mx-auto px-4 mb-10 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-stone-900 mb-6">Честные отзывы наших гостей</h2>
            
            <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
              <div className="bg-white text-stone-800 py-2 px-5 rounded-full shadow-sm text-sm font-medium border border-stone-200 flex items-center gap-2">
                <div className="w-5 h-5 bg-red-500 text-white rounded flex items-center justify-center font-bold text-xs">Я</div>
                <span>Яндекс: <strong className="text-stone-900">5.0</strong> (370 оценок)</span>
              </div>
              <div className="bg-white text-stone-800 py-2 px-5 rounded-full shadow-sm text-sm font-medium border border-stone-200 flex items-center gap-2">
                <div className="w-5 h-5 bg-blue-500 text-white rounded flex items-center justify-center font-bold text-xs">2Г</div>
                <span>2ГИС: <strong className="text-stone-900">4.7</strong></span>
              </div>
            </div>

            <p className="text-stone-600 max-w-2xl mx-auto flex items-center justify-center gap-2 font-medium">
              <span className="text-xl">🏆</span> Победитель премии «Хорошее место 2026» по версии пользователей Яндекса.
            </p>
        </div>
        
        <div className="border border-stone-200/50 bg-white rounded-2xl shadow-xl relative flex h-[500px] w-full max-w-[1000px] mx-auto flex-row items-center justify-center overflow-hidden gap-1.5 [perspective:400px]">
        <div
            className="flex flex-row items-center gap-4"
            style={{
            transform:
                'translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)',
            }}
        >
            {/* Vertical Marquee (downwards) */}
            <Marquee vertical pauseOnHover repeat={4} className="[--duration:60s]">
            {testimonials.map((review, i) => (
                <TestimonialCard key={i + 'a'} {...review} />
            ))}
            </Marquee>
            {/* Vertical Marquee (upwards) */}
            <Marquee vertical pauseOnHover reverse repeat={4} className="[--duration:60s]">
            {testimonials.map((review, i) => (
                <TestimonialCard key={i + 'b'} {...review} />
            ))}
            </Marquee>
            {/* Vertical Marquee (downwards) */}
            <Marquee vertical pauseOnHover repeat={4} className="[--duration:60s]">
            {testimonials.map((review, i) => (
                <TestimonialCard key={i + 'c'} {...review} />
            ))}
            </Marquee>
            {/* Vertical Marquee (upwards) */}
            <Marquee vertical pauseOnHover reverse repeat={4} className="[--duration:60s]">
            {testimonials.map((review, i) => (
                <TestimonialCard key={i + 'd'} {...review} />
            ))}
            </Marquee>
            {/* Gradient overlays */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white"></div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white"></div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white"></div>
        </div>
        </div>
    </section>
  );
}
