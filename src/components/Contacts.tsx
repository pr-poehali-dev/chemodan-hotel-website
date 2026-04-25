import Icon from '@/components/ui/icon';

const info = [
  {
    icon: 'MapPin',
    label: 'Адрес',
    value: 'ул. Примерная, 1, Москва',
  },
  {
    icon: 'Phone',
    label: 'Телефон',
    value: '+7 (495) 000-00-00',
  },
  {
    icon: 'Mail',
    label: 'Email',
    value: 'info@chemodan-hotel.ru',
  },
  {
    icon: 'Clock',
    label: 'Ресепшн',
    value: 'Круглосуточно',
  },
];

export default function Contacts() {
  return (
    <section id="contacts" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">Как нас найти</p>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground">
            Контакты
          </h2>
          <div className="w-12 h-px bg-accent mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            {info.map((item) => (
              <div key={item.label} className="flex items-start gap-5">
                <div className="w-10 h-10 flex items-center justify-center border border-border flex-shrink-0">
                  <Icon name={item.icon as 'MapPin'} size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-foreground">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="pt-4 border-t border-border">
              <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">Мы в социальных сетях</p>
              <div className="flex gap-4">
                {['Instagram', 'Facebook', 'Send'].map((name) => (
                  <button
                    key={name}
                    className="w-10 h-10 border border-border flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <Icon name={name as 'Send'} size={16} className="text-foreground" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-muted aspect-[4/3] flex items-center justify-center overflow-hidden">
            <div className="text-center text-muted-foreground">
              <Icon name="Map" size={48} className="mx-auto mb-4 opacity-30" />
              <p className="text-sm tracking-wider">Карта отеля</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
