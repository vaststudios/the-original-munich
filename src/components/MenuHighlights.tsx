import Image from "next/image";

interface MenuCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

function MenuCard({ image, title, description, price }: MenuCardProps) {
  return (
    <div className="group flex flex-col flex-1 bg-white border-2 border-[var(--color-primary)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-all duration-300">
      <div className="relative h-[280px] w-full border-b-2 border-[var(--color-primary)] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-3 p-6 pb-5">
        <h3 className="text-[32px] leading-none text-[var(--color-dark)]">{title}</h3>
        <p className="text-sm leading-[1.4] text-[var(--color-dark)] opacity-80">{description}</p>
        <div className="flex items-center justify-between w-full">
          <span className="text-[28px] text-[var(--color-primary)]">{price}</span>
          <button className="px-5 py-2.5 bg-[var(--color-primary)] text-white text-sm hover:bg-[#d91f3a] hover:shadow-md active:scale-95 transition-all duration-200">
            HINZUFÜGEN
          </button>
        </div>
      </div>
    </div>
  );
}

export function MenuHighlights() {
  const menuItems = [
    {
      image: "/images/og-smash.jpeg",
      title: "ORIGINAL CHEESEBURGER",
      description: "BAVARIAN BEEF, AMERICAN CHEESE, ONIONS, TOMATOES, BURGER SAUCE.",
      price: "€10.50",
    },
    {
      image: "/images/birria-tacos.jpeg",
      title: "STEAK TACO",
      description: "BAVARIAN STEAK, GESCHMOLZENEM KÄSE, ZWIEBELN UND KORIANDER (1 STK).",
      price: "€3.90",
    },
    {
      image: "/images/fish-tacos.jpeg",
      title: "GUACAMOLE MIT CHIPS",
      description: "FRISCH GEMACHTE GUACAMOLE MIT CRISPY CHIPS.",
      price: "€6.50",
    },
  ];

  return (
    <section id="menu" className="w-full bg-[var(--color-primary-light)] border-b-2 border-[var(--color-primary)]">
      <div className="flex flex-col gap-12 p-12 pt-16 max-w-[1180px] mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between w-full">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-[var(--color-primary)] tracking-[2px]">UNSERE SPECIALTIES</span>
            <h2 className="text-[64px] leading-[0.9] text-[var(--color-dark)]">FAN FAVORITES</h2>
          </div>
          <a
            href="#"
            className="px-7 py-3.5 bg-[var(--color-primary)] text-white text-base rounded-full border-2 border-[var(--color-primary)] hover:bg-[#d91f3a] hover:-translate-y-0.5 transition-all duration-200 shadow-[var(--shadow-button)]"
          >
            ALLES ANSEHEN
          </a>
        </div>

        {/* Cards Row */}
        <div className="flex gap-6 w-full">
          {menuItems.map((item) => (
            <MenuCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
