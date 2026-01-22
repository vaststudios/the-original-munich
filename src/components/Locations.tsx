import Image from "next/image";

interface LocationProps {
  name: string;
  address: string;
  hours: string;
}

function Location({ name, address, hours }: LocationProps) {
  return (
    <div className="group flex flex-col gap-1 w-full pb-4 md:pb-6 border-b-2 border-[var(--color-primary)] hover:pl-2 transition-all duration-200 cursor-pointer">
      <h4 className="text-xl md:text-[28px] text-[var(--color-dark)] group-hover:text-[var(--color-primary)] transition-colors">{name}</h4>
      <span className="text-sm md:text-base text-[var(--color-dark)] break-words">{address}</span>
      <span className="text-xs md:text-sm text-[var(--color-dark)] opacity-70">{hours}</span>
    </div>
  );
}

export function Locations() {
  const locations = [
    {
      name: "FAIRPLAY SALOON",
      address: "SCHELLINGSTR. 128, 80798 MÜNCHEN",
      hours: "TÄGLICH GEÖFFNET: 11:00 - 23:00",
    },
    {
      name: "GEORG'S",
      address: "GEORGENSTR. 48, MÜNCHEN",
      hours: "TÄGLICH GEÖFFNET: 11:00 - 00:00",
    },
    {
      name: "FLUX",
      address: "BARER STR. 40, 80333 MÜNCHEN",
      hours: "TÄGLICH GEÖFFNET: 11:00 - 23:00",
    },
  ];

  return (
    <section id="locations" className="w-full bg-[var(--color-primary-light)]">
      <div className="flex flex-col md:flex-row w-full max-w-[1180px] mx-auto border-x-2 border-b-2 border-[var(--color-primary)]">
        {/* Left - Image with Badge */}
        <div className="relative flex-1 min-h-[300px] md:min-h-[600px] overflow-hidden border-b-2 md:border-b-0 md:border-r-2 border-[var(--color-primary)]">
          <Image
            src="/images/atmosphere.jpeg"
            alt="Restaurant interior"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 md:px-6 py-2 md:py-3 bg-white border-2 border-[var(--color-primary)] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <span className="text-sm md:text-lg text-[var(--color-dark)]">BESUCH UNS</span>
          </div>
        </div>

        {/* Right - Location Details */}
        <div className="flex flex-col flex-1 justify-center gap-6 md:gap-8 min-h-0 md:min-h-[600px] bg-[var(--color-primary-light)] px-6 md:px-16 py-8 md:py-12">
          <h3 className="text-[36px] md:text-[64px] leading-[0.9] text-[var(--color-primary)]">FIND US</h3>
          <div className="flex flex-col gap-4 md:gap-6 w-full">
            {locations.map((loc) => (
              <Location key={loc.name} {...loc} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
