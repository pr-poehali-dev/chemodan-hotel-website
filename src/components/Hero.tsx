export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://cdn.poehali.dev/projects/58491503-dcb9-45d1-b60d-b5f4994360b8/files/ddad493a-e2a1-413b-8f33-bab2e85f6f5a.jpg)`,
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase mb-6 text-white/70">
          Добро пожаловать в
        </p>
        <h1 className="text-6xl md:text-8xl font-serif font-light tracking-wider mb-6">
          Chemodan
        </h1>
        <div className="w-16 h-px bg-white/50 mx-auto mb-6" />
        <p className="text-base md:text-lg font-light tracking-widest text-white/80 mb-12 max-w-xl mx-auto">
          Изысканный отдых в сердце города. Уют и элегантность в каждой детали.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#booking"
            className="px-10 py-4 bg-white text-foreground text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-colors"
          >
            Забронировать номер
          </a>
          <a
            href="#rooms"
            className="px-10 py-4 border border-white text-white text-xs tracking-[0.2em] uppercase hover:bg-white/10 transition-colors"
          >
            Наши номера
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-[10px] tracking-[0.3em] uppercase">Листайте вниз</span>
        <div className="w-px h-10 bg-white/30 animate-pulse" />
      </div>
    </section>
  );
}
