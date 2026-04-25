const images = [
  {
    src: 'https://cdn.poehali.dev/projects/58491503-dcb9-45d1-b60d-b5f4994360b8/files/ddad493a-e2a1-413b-8f33-bab2e85f6f5a.jpg',
    alt: 'Фасад отеля',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: 'https://cdn.poehali.dev/projects/58491503-dcb9-45d1-b60d-b5f4994360b8/files/802e331b-66d8-4f7f-b9d5-ecb614ac09eb.jpg',
    alt: 'Номер',
    span: '',
  },
  {
    src: 'https://cdn.poehali.dev/projects/58491503-dcb9-45d1-b60d-b5f4994360b8/files/77a409bc-f721-4084-b919-6767993a1bb2.jpg',
    alt: 'Лобби',
    span: '',
  },
  {
    src: 'https://cdn.poehali.dev/projects/58491503-dcb9-45d1-b60d-b5f4994360b8/files/faf56708-e5b7-49cb-9999-084862c75c87.jpg',
    alt: 'СПА',
    span: 'md:col-span-2',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">Атмосфера</p>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground">
            Галерея
          </h2>
          <div className="w-12 h-px bg-accent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 auto-rows-[220px]">
          {images.map((img) => (
            <div
              key={img.alt}
              className={`overflow-hidden group ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
