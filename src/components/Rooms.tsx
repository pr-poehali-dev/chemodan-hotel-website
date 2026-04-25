import { useState } from 'react';
import Icon from '@/components/ui/icon';

const rooms = [
  {
    id: 1,
    name: 'Стандарт',
    area: '22 м²',
    capacity: '2 гостя',
    price: 4500,
    image: 'https://cdn.poehali.dev/projects/58491503-dcb9-45d1-b60d-b5f4994360b8/files/802e331b-66d8-4f7f-b9d5-ecb614ac09eb.jpg',
    features: ['Двуспальная кровать', 'Wi-Fi', 'Кондиционер', 'Мини-бар'],
    description: 'Уютный номер с тёплой атмосферой и всем необходимым для комфортного отдыха.',
  },
  {
    id: 2,
    name: 'Делюкс',
    area: '35 м²',
    capacity: '2 гостя',
    price: 7200,
    image: 'https://cdn.poehali.dev/projects/58491503-dcb9-45d1-b60d-b5f4994360b8/files/77a409bc-f721-4084-b919-6767993a1bb2.jpg',
    features: ['Кинг-сайз кровать', 'Wi-Fi', 'Джакузи', 'Лаундж-зона'],
    description: 'Просторный номер с изысканным интерьером и панорамным видом на город.',
  },
  {
    id: 3,
    name: 'Люкс',
    area: '55 м²',
    capacity: '3 гостя',
    price: 12000,
    image: 'https://cdn.poehali.dev/projects/58491503-dcb9-45d1-b60d-b5f4994360b8/files/faf56708-e5b7-49cb-9999-084862c75c87.jpg',
    features: ['Спальня + гостиная', 'Ванная с видом', 'Butler-сервис', 'Терраса'],
    description: 'Апартаменты высшего класса с персональным дворецким и эксклюзивными удобствами.',
  },
];

export default function Rooms() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="rooms" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">Наши номера</p>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground">
            Пространство для отдыха
          </h2>
          <div className="w-12 h-px bg-accent mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="group cursor-pointer"
              onClick={() => setSelected(selected === room.id ? null : room.id)}
            >
              <div className="overflow-hidden mb-5 aspect-[4/3]">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-serif text-2xl text-foreground">{room.name}</h3>
                  <p className="text-xs text-muted-foreground tracking-wider mt-1">
                    {room.area} · {room.capacity}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-serif text-xl text-primary">{room.price.toLocaleString()} ₽</p>
                  <p className="text-[10px] text-muted-foreground tracking-wider">за ночь</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{room.description}</p>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  selected === room.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="border-t border-border pt-4 mb-4">
                  <ul className="grid grid-cols-2 gap-2">
                    {room.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Icon name="Check" size={12} className="text-accent-foreground" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href="#booking"
                onClick={(e) => e.stopPropagation()}
                className="inline-block text-xs tracking-[0.2em] uppercase text-primary border-b border-primary pb-0.5 hover:opacity-70 transition-opacity"
              >
                Забронировать
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
