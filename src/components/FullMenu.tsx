import Image from "next/image";

interface MenuItemProps {
  title: string;
  description: string;
  price: string;
}

function MenuItem({ title, description, price }: MenuItemProps) {
  return (
    <div className="group flex items-center justify-between w-full py-3 border-b border-[var(--color-primary)] hover:bg-white/50 hover:px-3 transition-all duration-200 cursor-pointer">
      <div className="flex flex-col gap-1">
        <span className="text-lg text-[var(--color-dark)] group-hover:text-[var(--color-primary)] transition-colors">{title}</span>
        <span className="text-xs text-[var(--color-dark)] opacity-70">{description}</span>
      </div>
      <span className="text-lg text-[var(--color-dark)] group-hover:text-[var(--color-primary)] transition-colors">{price}</span>
    </div>
  );
}

export function FullMenu() {
  const burgers = [
    { title: "THE OG SMASH", description: "DOUBLE PATTY, CHEESE, PICKLES, SECRET SAUCE", price: "€12.50" },
    { title: "DOUBLE STACK", description: "FOUR PATTIES, EXTRA CHEESE, BACON, ONION RINGS", price: "€16.00" },
    { title: "VEGGIE SMASH", description: "PLANT-BASED PATTY, AVOCADO, TOMATO, VEGAN SAUCE", price: "€13.00" },
  ];

  const tacos = [
    { title: "BIRRIA TACOS (3)", description: "SLOW-COOKED BEEF, CHEESE, CILANTRO, CONSOMMÉ", price: "€14.00" },
    { title: "CARNITAS TACOS (3)", description: "CRISPY PORK, ONION, CILANTRO, LIME", price: "€12.00" },
    { title: "LOADED FRIES", description: "CHEESE SAUCE, BACON, JALAPENOS, GREEN ONION", price: "€6.50" },
  ];

  return (
    <section className="w-full bg-[var(--color-primary-light)]">
      <div className="flex w-full max-w-[1180px] mx-auto border-x-2 border-b-2 border-[var(--color-primary)]">
        {/* Left - Image with Overlay */}
        <div className="relative flex-1 h-[700px] overflow-hidden border-r-2 border-[var(--color-primary)]">
          <Image
            src="/images/cooking.jpeg"
            alt="Kitchen"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-[var(--color-primary)] opacity-80" />
          <div className="absolute bottom-12 left-12 flex flex-col gap-6">
            <h2 className="text-[72px] leading-[0.9] text-white">FULL MENU</h2>
            <p className="text-lg leading-[1.4] text-white w-[400px] tracking-wide">
              EXPLORE OUR COMPLETE SELECTION OF SMASH BURGERS, TACOS, AND SIDES.
            </p>
          </div>
        </div>

        {/* Right - Menu Lists */}
        <div className="flex flex-col flex-1 gap-8 h-[700px] bg-[var(--color-primary-light)] p-12">
          {/* Smash Burgers Section */}
          <div className="flex flex-col gap-4 w-full">
            <h3 className="text-[28px] leading-none text-[var(--color-primary)]">SMASH BURGERS</h3>
            <div className="flex flex-col gap-3 w-full">
              {burgers.map((item) => (
                <MenuItem key={item.title} {...item} />
              ))}
            </div>
          </div>

          {/* Tacos & Sides Section */}
          <div className="flex flex-col gap-4 w-full">
            <h3 className="text-[28px] leading-none text-[var(--color-primary)]">TACOS &amp; SIDES</h3>
            <div className="flex flex-col gap-3 w-full">
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
