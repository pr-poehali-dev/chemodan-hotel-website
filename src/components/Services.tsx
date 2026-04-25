import Icon from '@/components/ui/icon';

const services = [
  { icon: 'UtensilsCrossed', title: 'Ресторан', desc: 'Авторская кухня от шеф-повара. Завтрак включён в стоимость проживания.' },
  { icon: 'Dumbbell', title: 'Фитнес-центр', desc: 'Современный спортивный зал с персональными тренерами. Работает круглосуточно.' },
  { icon: 'Waves', title: 'СПА & Бассейн', desc: 'Расслабляющие процедуры, массажи, сауна и подогреваемый бассейн.' },
  { icon: 'Car', title: 'Парковка', desc: 'Охраняемая парковка на территории отеля. Трансфер из аэропорта.' },
  { icon: 'Wifi', title: 'Быстрый Wi-Fi', desc: 'Высокоскоростной интернет на всей территории отеля — в номерах и общественных зонах.' },
  { icon: 'ConciergeBell', title: 'Консьерж', desc: 'Круглосуточный консьерж-сервис. Организуем экскурсии, билеты и мероприятия.' },
  { icon: 'Baby', title: 'Детский клуб', desc: 'Профессиональные воспитатели, игровые зоны и развлекательные программы для детей.' },
  { icon: 'Briefcase', title: 'Конференц-зал', desc: 'Переговорные комнаты и конференц-залы с полным техническим оснащением.' },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">Что мы предлагаем</p>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground">
            Услуги отеля
          </h2>
          <div className="w-12 h-px bg-accent mx-auto mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-background p-8 group hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-5">
                <Icon name={s.icon} size={28} className="text-primary" />
              </div>
              <h3 className="font-serif text-xl mb-3 text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}