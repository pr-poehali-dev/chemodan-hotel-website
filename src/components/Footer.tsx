export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <p className="font-serif text-2xl tracking-widest uppercase mb-1">Chemodan</p>
            <p className="text-xs tracking-[0.3em] uppercase opacity-60">Hotel</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 text-xs tracking-[0.2em] uppercase opacity-70">
            <a href="#home" className="hover:opacity-100 transition-opacity">Главная</a>
            <a href="#rooms" className="hover:opacity-100 transition-opacity">Номера</a>
            <a href="#services" className="hover:opacity-100 transition-opacity">Услуги</a>
            <a href="#gallery" className="hover:opacity-100 transition-opacity">Галерея</a>
            <a href="#contacts" className="hover:opacity-100 transition-opacity">Контакты</a>
          </div>
        </div>

        <div className="h-px bg-primary-foreground/20 my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-50">© 2024 Chemodan Hotel. Все права защищены.</p>
          <p className="text-xs opacity-50">Политика конфиденциальности</p>
        </div>
      </div>
    </footer>
  );
}
