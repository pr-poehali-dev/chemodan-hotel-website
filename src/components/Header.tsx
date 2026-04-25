import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const navLinks = [
  { label: 'Главная', href: '#home' },
  { label: 'Номера', href: '#rooms' },
  { label: 'Услуги', href: '#services' },
  { label: 'Галерея', href: '#gallery' },
  { label: 'Контакты', href: '#contacts' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[hsl(40,30%,97%)] shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex flex-col leading-none">
          <span
            className={`font-serif text-2xl tracking-widest uppercase transition-colors ${
              scrolled ? 'text-primary' : 'text-white'
            }`}
          >
            Chemodan
          </span>
          <span
            className={`text-[10px] tracking-[0.3em] uppercase transition-colors ${
              scrolled ? 'text-muted-foreground' : 'text-white/70'
            }`}
          >
            Hotel
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs tracking-[0.2em] uppercase transition-colors hover:opacity-70 ${
                scrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            className={`text-xs tracking-[0.2em] uppercase px-5 py-2.5 border transition-colors ${
              scrolled
                ? 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                : 'border-white text-white hover:bg-white hover:text-foreground'
            }`}
          >
            Забронировать
          </a>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon
            name={menuOpen ? 'X' : 'Menu'}
            size={24}
            className={scrolled ? 'text-foreground' : 'text-white'}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[hsl(40,30%,97%)] border-t border-border px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-xs tracking-[0.2em] uppercase text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setMenuOpen(false)}
            className="text-xs tracking-[0.2em] uppercase px-5 py-2.5 border border-primary text-primary text-center"
          >
            Забронировать
          </a>
        </div>
      )}
    </header>
  );
}
