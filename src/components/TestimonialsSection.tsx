import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Marquee } from '@/components/ui/3d-testimonails';

const testimonials = [
    {
      name: 'Анна С.',
      username: 'Отличный отдых для всей семьи',
      body: 'Потрясающее место у подножия горы! Очень чистые и комфортные номера, а завтраки - выше всяких похвал. Обязательно вернемся.',
      img: 'https://randomuser.me/api/portraits/women/32.jpg',
      country: '⭐ 5.0'
    },
    {
      name: 'Михаил Иванов',
      username: 'Природа и комфорт',
      body: 'Всё на высшем уровне. Тепло, персонал вежливый. Шале просто супер, дети в восторге от бассейна и природы.',
      img: 'https://randomuser.me/api/portraits/men/51.jpg',
      country: '⭐ 5.0'
    },
    {
      name: 'Елена К.',
      username: 'Сервис на высоте',
      body: 'Семейный номер оказался очень просторным. Матрасы удобные, сантехника новая. То что нужно для качественного отдыха на Алтае.',
      img: 'https://randomuser.me/api/portraits/women/45.jpg',
      country: '⭐ 4.8'
    },
    {
      name: 'Дмитрий Соколов',
      username: 'Лучший выбор',
      body: 'За свои деньги - топовый выбор в Белокурихе. Вкусная еда, тишина, невероятные закаты и виды на гору Яковка.',
      img: 'https://randomuser.me/api/portraits/men/33.jpg',
      country: '⭐ 5.0'
    },
     {
      name: 'Мария Т.',
      username: 'Рекомендую всем',
      body: 'Прекрасные виды и тишина. Удобно добираться до подъемников. Завтраки сытные, шведский стол разнообразный.',
      img: 'https://randomuser.me/api/portraits/women/68.jpg',
      country: '⭐ 5.0'
    },
     {
      name: 'Алексей',
      username: 'Идеальные выходные',
      body: 'Качественный сервис, удобные матрасы, завтраки превзошли ожидания. Обязательно рекомендую шале для большой компании.',
      img: 'https://randomuser.me/api/portraits/men/22.jpg',
      country: '⭐ 4.9'
    }
];

function TestimonialCard({ img, name, username, body, country }: (typeof testimonials)[number]) {
  return (
    <Card className="w-72 md:w-80 border-slate-200">
      <CardContent>
        <div className="flex items-center gap-2.5">
          <Avatar className="size-10 shadow-sm border border-slate-100">
            <AvatarImage src={img} alt="@yakovka" />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <figcaption className="text-sm font-semibold text-slate-800 flex items-center gap-1">
              {name}
            </figcaption>
            <p className="text-xs font-medium text-slate-500">{username} • {country}</p>
          </div>
        </div>
        <blockquote className="mt-3 text-sm text-slate-600 leading-relaxed">"{body}"</blockquote>
      </CardContent>
    </Card>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden w-full">
        <div className="container mx-auto px-4 mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Честные отзывы наших гостей</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Каждый день мы стараемся делать ваш отдых лучше.</p>
        </div>
        
        <div className="border border-slate-200/50 bg-white rounded-2xl shadow-xl relative flex h-[500px] w-full max-w-[1000px] mx-auto flex-row items-center justify-center overflow-hidden gap-1.5 [perspective:400px]">
        <div
            className="flex flex-row items-center gap-4"
            style={{
            transform:
                'translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)',
            }}
        >
            {/* Vertical Marquee (downwards) */}
            <Marquee vertical pauseOnHover repeat={4} className="[--duration:50s]">
            {testimonials.map((review, i) => (
                <TestimonialCard key={i + 'a'} {...review} />
            ))}
            </Marquee>
            {/* Vertical Marquee (upwards) */}
            <Marquee vertical pauseOnHover reverse repeat={4} className="[--duration:50s]">
            {testimonials.map((review, i) => (
                <TestimonialCard key={i + 'b'} {...review} />
            ))}
            </Marquee>
            {/* Vertical Marquee (downwards) */}
            <Marquee vertical pauseOnHover repeat={4} className="[--duration:50s]">
            {testimonials.map((review, i) => (
                <TestimonialCard key={i + 'c'} {...review} />
            ))}
            </Marquee>
            {/* Vertical Marquee (upwards) */}
            <Marquee vertical pauseOnHover reverse repeat={4} className="[--duration:50s]">
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
