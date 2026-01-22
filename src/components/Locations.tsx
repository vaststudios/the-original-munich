import Image from "next/image";

interface LocationProps {
  name: string;
  address: string;
  hours: string;
}

function Location({ name, address, hours }: LocationProps) {
  return (
    <div className="group flex flex-col gap-1 w-full pb-6 border-b-2 border-[var(--color-primary)] hover:pl-2 transition-all duration-200 cursor-pointer">
      <h4 className="text-[28px] text-[var(--color-dark)] group-hover:text-[var(--color-primary)] transition-colors">{name}</h4>
      <span className="text-base text-[var(--color-dark)]">{address}</span>
      <span className="text-sm text-[var(--color-dark)] opacity-70">{hours}</span>
    </div>
  );
}

export function Locations() {
  const locations = [
    {
      name: "SCHWABING",
      address: "LEOPOLDSTR. 42, 80802 MÜNCHEN",
      hours: "OPEN DAILY: 11:00 - 23:00",
    },
    {
      name: "MAXVORSTADT",
      address: "TÜRKENSTR. 78, 80799 MÜNCHEN",
      hours: "OPEN DAILY: 11:00 - 23:00",
    },
  ];

  return (
    <section id="locations" className="w-full bg-[var(--color-primary-light)]">
      <div className="flex w-full max-w-[1180px] mx-auto border-x-2 border-b-2 border-[var(--color-primary)]">
        {/* Left - Image with Badge */}
        <div className="relative flex-1 h-[600px] overflow-hidden border-r-2 border-[var(--color-primary)]">
          <Image
            src="/images/atmosphere.jpeg"
            alt="Restaurant interior"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-3 bg-white border-2 border-[var(--color-primary)] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <span className="text-lg text-[var(--color-dark)]">VISIT US</span>
          </div>
        </div>

        {/* Right - Location Details */}
        <div className="flex flex-col flex-1 justify-center gap-8 h-[600px] bg-[var(--color-primary-light)] px-16 py-12">
          <h3 className="text-[64px] leading-[0.9] text-[var(--color-primary)]">FIND US</h3>
          <div className="flex flex-col gap-6 w-full">
            {locations.map((loc) => (
              <Location key={loc.name} {...loc} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
