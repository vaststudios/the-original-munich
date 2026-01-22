import Image from "next/image";

interface MenuItemProps {
  title: string;
  description: string;
  price: string;
}

function MenuItem({ title, description, price }: MenuItemProps) {
  return (
    <a 
      href="https://wolt.com/de/deu/munich/restaurant/the-original-burger-tacos?srsltid=AfmBOopl7TuwZAm90WNUXuZZ527bvjniVn-tqqHHSESrxagdy-TK9hVS"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between w-full py-2 md:py-3 border-b border-[var(--color-primary)] hover:bg-white/50 hover:px-2 md:hover:px-3 transition-all duration-200 cursor-pointer gap-2"
    >
      <div className="flex flex-col gap-1 flex-1 min-w-0">
        <span className="text-base md:text-lg text-[var(--color-dark)] group-hover:text-[var(--color-primary)] transition-colors break-words">{title}</span>
        {description && <span className="text-xs text-[var(--color-dark)] opacity-70 break-words">{description}</span>}
      </div>
      <span className="text-base md:text-lg text-[var(--color-dark)] group-hover:text-[var(--color-primary)] transition-colors whitespace-nowrap flex-shrink-0">{price}</span>
    </a>
  );
}

export function FullMenu() {
  const burgers = [
    { title: "ORIGINAL CHEESEBURGER", description: "BAVARIAN BEEF, AMERICAN CHEESE, ONIONS, TOMATOES, BURGER SAUCE", price: "€10.50" },
    { title: "VEGGIE BURGER", description: "BEYOND MEAT, AMERICAN CHEESE, TOMATOES, ONIONS, BURGER SAUCE", price: "€10.50" },
  ];

  const tacos = [
    { title: "STEAK TACO", description: "BAVARIAN STEAK, GESCHMOLZENEM KÄSE, ZWIEBELN UND KORIANDER (1 STK)", price: "€3.90" },
    { title: "VEGGIE TACO", description: "PILZE, GESCHMOLZENEN KÄSE, ZWIEBEL UND KORIANDER (1 STK)", price: "€3.90" },
    { title: "GUACAMOLE MIT CHIPS", description: "", price: "€6.50" },
    { title: "POMMES", description: "", price: "€3.90" },
  ];

  return (
    <section className="w-full bg-[var(--color-primary-light)]">
      <div className="flex flex-col md:flex-row w-full max-w-[1180px] mx-auto border-x-2 border-b-2 border-[var(--color-primary)]">
        {/* Left - Image with Overlay */}
        <div className="relative flex-1 min-h-[300px] md:h-[700px] overflow-hidden border-b-2 md:border-b-0 md:border-r-2 border-[var(--color-primary)]">
          <Image
            src="/images/cooking.jpeg"
            alt="Kitchen"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-[var(--color-primary)] opacity-80" />
          <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 flex flex-col gap-3 md:gap-6">
            <h2 className="text-[36px] md:text-[72px] leading-[0.9] text-white">FULL MENU</h2>
            <p className="text-sm md:text-lg leading-[1.4] text-white w-full md:w-[400px] tracking-wide">
              ENTDECKE UNSERE KOMPLETTE AUSWAHL AN SMASH BURGERS, TACOS UND SIDES.
            </p>
          </div>
        </div>

        {/* Right - Menu Lists */}
        <div className="flex flex-col flex-1 gap-6 md:gap-8 min-h-0 md:h-[700px] bg-[var(--color-primary-light)] p-6 md:p-12 overflow-y-auto">
          {/* Smash Burgers Section */}
          <div className="flex flex-col gap-3 md:gap-4 w-full">
            <h3 className="text-xl md:text-[28px] leading-none text-[var(--color-primary)]">SMASH BURGERS</h3>
            <div className="flex flex-col gap-2 md:gap-3 w-full">
              {burgers.map((item) => (
                <MenuItem key={item.title} {...item} />
              ))}
            </div>
          </div>

          {/* Tacos & Sides Section */}
          <div className="flex flex-col gap-3 md:gap-4 w-full">
            <h3 className="text-xl md:text-[28px] leading-none text-[var(--color-primary)]">TACOS &amp; SIDES</h3>
            <div className="flex flex-col gap-2 md:gap-3 w-full">
              {tacos.map((item) => (
                <MenuItem key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
