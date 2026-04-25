import { useState } from 'react';
import Icon from '@/components/ui/icon';

const roomTypes = [
  { id: 'standard', name: 'Стандарт', price: 4500 },
  { id: 'deluxe', name: 'Делюкс', price: 7200 },
  { id: 'suite', name: 'Люкс', price: 12000 },
];

function calcNights(checkin: string, checkout: string) {
  if (!checkin || !checkout) return 0;
  const d1 = new Date(checkin).getTime();
  const d2 = new Date(checkout).getTime();
  const diff = Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
  return diff > 0 ? diff : 0;
}

export default function Booking() {
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [form, setForm] = useState({
    checkin: today,
    checkout: tomorrow,
    guests: '2',
    roomType: 'standard',
    name: '',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const nights = calcNights(form.checkin, form.checkout);
  const room = roomTypes.find((r) => r.id === form.roomType)!;
  const total = nights * room.price;

  const isAvailable = nights > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAvailable || !form.name || !form.phone) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="booking" className="py-24 px-6 bg-muted">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">Онлайн-бронирование</p>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground">
            Забронировать номер
          </h2>
          <div className="w-12 h-px bg-accent mx-auto mt-6" />
        </div>

        {submitted ? (
          <div className="bg-background p-16 text-center">
            <Icon name="CheckCircle" size={48} className="text-primary mx-auto mb-6" />
            <h3 className="font-serif text-3xl mb-4 text-foreground">Заявка принята!</h3>
            <p className="text-muted-foreground mb-2">
              Спасибо, <strong>{form.name}</strong>! Мы свяжемся с вами по номеру <strong>{form.phone}</strong> в ближайшее время для подтверждения бронирования.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              {room.name} · {form.checkin} – {form.checkout} · {nights} {nights === 1 ? 'ночь' : nights < 5 ? 'ночи' : 'ночей'}
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-8 text-xs tracking-[0.2em] uppercase text-primary border-b border-primary pb-0.5"
            >
              Новое бронирование
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-background p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="font-serif text-xl text-foreground mb-2">Параметры бронирования</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">
                      Заезд
                    </label>
                    <input
                      type="date"
                      min={today}
                      value={form.checkin}
                      onChange={(e) => set('checkin', e.target.value)}
                      className="w-full bg-muted border-0 border-b border-border px-0 py-2 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">
                      Выезд
                    </label>
                    <input
                      type="date"
                      min={form.checkin || today}
                      value={form.checkout}
                      onChange={(e) => set('checkout', e.target.value)}
                      className="w-full bg-muted border-0 border-b border-border px-0 py-2 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">
                    Тип номера
                  </label>
                  <select
                    value={form.roomType}
                    onChange={(e) => set('roomType', e.target.value)}
                    className="w-full bg-muted border-0 border-b border-border px-0 py-2 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                  >
                    {roomTypes.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.name} — {r.price.toLocaleString()} ₽/ночь
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">
                    Количество гостей
                  </label>
                  <select
                    value={form.guests}
                    onChange={(e) => set('guests', e.target.value)}
                    className="w-full bg-muted border-0 border-b border-border px-0 py-2 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                  >
                    {['1', '2', '3', '4'].map((n) => (
                      <option key={n} value={n}>{n} {n === '1' ? 'гость' : Number(n) < 5 ? 'гостя' : 'гостей'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-serif text-xl text-foreground mb-2">Контактные данные</h3>

                <div>
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    placeholder="Иван Иванов"
                    value={form.name}
                    onChange={(e) => set('name', e.target.value)}
                    required
                    className="w-full bg-muted border-0 border-b border-border px-0 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    placeholder="+7 (900) 000-00-00"
                    value={form.phone}
                    onChange={(e) => set('phone', e.target.value)}
                    required
                    className="w-full bg-muted border-0 border-b border-border px-0 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="bg-muted p-5 mt-4">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">Итого</p>
                  {isAvailable ? (
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{room.name}</span>
                        <span>{room.price.toLocaleString()} ₽/ночь</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Ночей</span>
                        <span>{nights}</span>
                      </div>
                      <div className="h-px bg-border my-3" />
                      <div className="flex justify-between font-serif text-xl text-foreground">
                        <span>Итого</span>
                        <span>{total.toLocaleString()} ₽</span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">Выберите даты для расчёта стоимости</p>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <button
                type="submit"
                disabled={!isAvailable || loading}
                className="px-16 py-4 bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {loading ? 'Отправляем...' : 'Подтвердить бронирование'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
