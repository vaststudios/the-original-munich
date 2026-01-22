import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

interface ServiceItemProps {
  title: string;
  description: string;
}

function ServiceItem({ title, description }: ServiceItemProps) {
  return (
    <div className="flex flex-col gap-1 w-full py-3 md:py-4 border-b border-[var(--color-primary)]">
      <span className="text-base md:text-lg text-[var(--color-dark)]">{title}</span>
      <span className="text-xs text-[var(--color-dark)] opacity-70">{description}</span>
    </div>
  );
}

interface PriceItemProps {
  title: string;
  description: string;
}

function PriceItem({ title, description }: PriceItemProps) {
  return (
    <div className="group flex flex-col md:flex-row items-start md:items-center justify-between w-full py-3 md:py-4 border-b-2 border-[var(--color-primary)] hover:bg-white/50 hover:px-2 md:hover:px-3 transition-all duration-200 gap-2 md:gap-0">
      <div className="flex flex-col gap-1 flex-1 min-w-0">
        <span className="text-lg md:text-xl text-[var(--color-dark)] group-hover:text-[var(--color-primary)] transition-colors">{title}</span>
        <span className="text-xs text-[var(--color-dark)] opacity-70 break-words">{description}</span>
      </div>
      <a
        href="mailto:catering@original.catering?subject=CATERING%20ANFRAGE"
        className="text-base md:text-lg text-[var(--color-dark)] group-hover:text-[var(--color-primary)] transition-colors whitespace-nowrap flex-shrink-0"
      >
        AUF ANFRAGE
      </a>
    </div>
  );
}

export default function CateringPage() {
  const services = [
    { title: "FIRMENEVENTS", description: "SOMMERFEST, WEIHNACHTSFEIER, JUBILÄUM" },
    { title: "PRODUKTLAUNCH", description: "LIVE-COOKING & PREMIUM FOOD" },
    { title: "TEAMBUILDING", description: "GUTES ESSEN VERBINDET" },
    { title: "MESSEN & KONGRESSE", description: "STANDCATERING DAS AUFFÄLLT" },
  ];

  const prices = [
    { title: "EVENT CATERING", description: "KOMPLETTES BUFFET MIT LIVE-STATION • AB 20 PERSONEN" },
    { title: "FINGERFOOD", description: "SLIDER, MINI-TACOS, CHEESE FRIES & MEHR" },
    { title: "PREMIUM PACKAGE", description: "FULL SERVICE MIT PERSONAL, BAR & DEKO" },
  ];

  return (
    <main className="flex flex-col w-full min-h-full">
      <Navigation />

      {/* Hero Section */}
      <section className="w-full bg-[var(--color-primary-light)]">
        <div className="flex flex-col md:flex-row w-full min-h-[400px] md:h-[500px] max-w-[1180px] mx-auto border-x-2 border-b-2 border-[var(--color-primary)]">
          {/* Left Side - Image */}
          <div className="relative flex-1 min-h-[250px] md:min-h-0 bg-[var(--color-primary-light)] overflow-hidden border-b-2 md:border-b-0 md:border-r-2 border-[var(--color-primary)]">
            <Image
              src="/images/atmosphere.jpeg"
              alt="Event Catering"
              fill
              className="object-cover"
              priority
            />
            {/* 100% TASTE Badge */}
            <div className="absolute left-4 md:left-[40px] bottom-4 md:bottom-[40px] w-16 h-16 md:w-[100px] md:h-[100px] rounded-full bg-[var(--color-primary)] border-2 border-[var(--color-dark)] flex flex-col items-center justify-center rotate-12 shadow-lg transition-transform duration-300 hover:rotate-6 hover:scale-105">
              <span className="text-white text-xs md:text-base text-center">100%</span>
              <span className="text-white text-xs md:text-base text-center">TASTE</span>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="flex flex-col justify-between flex-1 bg-white p-6 md:p-12">
            <div className="flex flex-col gap-3 md:gap-4">
              <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 border-2 border-[var(--color-primary)] rounded-full text-xs md:text-sm text-[var(--color-primary)] tracking-[2px] w-fit">
                EXKLUSIV FÜR FIRMEN
              </span>
              <div className="flex flex-col gap-1 md:gap-2 mt-2 md:mt-4">
                <span className="text-[40px] md:text-[80px] leading-[0.85] text-[var(--color-primary)]">
                  EVENT
                </span>
                <span className="text-[40px] md:text-[80px] leading-[0.85] text-[var(--color-dark)]">
                  CATERING
                </span>
              </div>
            </div>
            <p className="text-sm md:text-lg text-[var(--color-dark)] leading-[1.4] tracking-wide mt-4 md:mt-0">
              WIR BRINGEN EUCH DIE BESTEN SMASH BURGERS &amp; TACOS DIREKT ZU EUREM EVENT.
            </p>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="w-full flex items-center h-[40px] md:h-[60px] bg-[var(--color-primary)] border-b-2 border-[var(--color-primary)] overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="text-white text-[16px] md:text-[28px] leading-none tracking-wider">
            THE ORIGINAL MUNICH • BURGER AND TACOS • 15 JAHRE ERFAHRUNG • THE ORIGINAL MUNICH • BURGER AND TACOS • 15 JAHRE ERFAHRUNG •
          </span>
          <span className="text-white text-[16px] md:text-[28px] leading-none tracking-wider">
            THE ORIGINAL MUNICH • BURGER AND TACOS • 15 JAHRE ERFAHRUNG • THE ORIGINAL MUNICH • BURGER AND TACOS • 15 JAHRE ERFAHRUNG •
          </span>
        </div>
      </section>

      {/* Menu Gallery */}
      <section className="w-full bg-[var(--color-primary-light)]">
        <div className="flex flex-col md:flex-row w-full max-w-[1180px] mx-auto border-x-2 border-b-2 border-[var(--color-primary)]">
          {/* Card 1 */}
          <div className="flex-1 bg-white border-b-2 md:border-b-0 md:border-r-2 border-[var(--color-primary)]">
            <div className="relative h-[180px] md:h-[200px] border-b-2 border-[var(--color-primary)] overflow-hidden">
              <Image src="/images/og-smash.jpeg" alt="Original Cheeseburger" fill className="object-cover" />
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl text-[var(--color-dark)]">ORIGINAL CHEESEBURGER</h3>
              <p className="text-xs text-[var(--color-dark)] opacity-70 mt-1">BAVARIAN BEEF, AMERICAN CHEESE, ONIONS, TOMATOES, BURGER SAUCE</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex-1 bg-white border-b-2 md:border-b-0 md:border-r-2 border-[var(--color-primary)]">
            <div className="relative h-[180px] md:h-[200px] border-b-2 border-[var(--color-primary)] overflow-hidden">
              <Image src="/images/birria-tacos.jpeg" alt="Steak Taco" fill className="object-cover" />
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl text-[var(--color-dark)]">STEAK TACO</h3>
              <p className="text-xs text-[var(--color-dark)] opacity-70 mt-1">BAVARIAN STEAK, GESCHMOLZENEM KÄSE, ZWIEBELN UND KORIANDER</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="flex-1 bg-white">
            <div className="relative h-[180px] md:h-[200px] border-b-2 border-[var(--color-primary)] overflow-hidden">
              <Image src="/images/WhatsApp Image 2026-01-20 at 16.09.11 (2).jpeg" alt="Guacamole mit Chips" fill className="object-cover" />
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl text-[var(--color-dark)]">GUACAMOLE MIT CHIPS</h3>
              <p className="text-xs text-[var(--color-dark)] opacity-70 mt-1">FRISCH GEMACHTE GUACAMOLE MIT CRISPY CHIPS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Discount Section */}
      <section className="w-full bg-[var(--color-primary-light)]">
        <div className="flex flex-col md:flex-row w-full max-w-[1180px] mx-auto border-x-2 border-b-2 border-[var(--color-primary)]">
          {/* Left - Discount */}
          <div className="flex-1 bg-[var(--color-primary)] p-8 md:p-12 flex flex-col items-center justify-center border-b-2 md:border-b-0 md:border-r-2 border-[var(--color-primary)]">
            <span className="text-[48px] md:text-[72px] leading-none text-white">–10%</span>
            <span className="text-xl md:text-2xl text-[var(--color-primary-light)] mt-2">FIRMENRABATT</span>
          </div>
          {/* Right - Text */}
          <div className="flex-1 bg-white p-6 md:p-12 flex items-center justify-center">
            <p className="text-sm md:text-lg text-[var(--color-dark)] text-center leading-[1.4] tracking-wide">
              EXKLUSIV FÜR FIRMEN: 10% RABATT AUF ALLE CATERING-BESTELLUNGEN. PERFEKT FÜR EVENTS, TEAMBUILDING UND FIRMENFEIERN.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-[var(--color-primary-light)]">
        <div className="flex flex-col md:flex-row w-full max-w-[1180px] mx-auto border-x-2 border-b-2 border-[var(--color-primary)]">
          {/* Left - Services List */}
          <div className="flex-1 bg-white p-6 md:p-12 border-b-2 md:border-b-0 md:border-r-2 border-[var(--color-primary)]">
            {services.map((service) => (
              <ServiceItem key={service.title} {...service} />
            ))}
          </div>
          {/* Right - Title */}
          <div className="flex-1 bg-[var(--color-primary)] p-6 md:p-12 flex flex-col justify-center">
            <h2 className="text-[32px] md:text-[48px] leading-[0.9] text-white">EVENT SERVICES</h2>
            <p className="text-sm md:text-base text-[var(--color-primary-light)] mt-3 md:mt-4 leading-[1.4] tracking-wide">
              VON KLEIN BIS GROSS – WIR CATERN EUER EVENT MIT LIEBE UND DEN BESTEN ZUTATEN.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full bg-[var(--color-primary-light)]">
        <div className="max-w-[1180px] mx-auto border-x-2 border-b-2 border-[var(--color-primary)] bg-white p-6 md:p-12">
          <h2 className="text-[32px] md:text-[48px] leading-[0.9] text-[var(--color-primary)] mb-6 md:mb-8">PREISE</h2>
          {prices.map((price) => (
            <PriceItem key={price.title} {...price} />
          ))}
        </div>
      </section>

      {/* Philosophy / CTA Section */}
      <section className="w-full bg-[var(--color-primary)] border-b-2 border-[var(--color-primary)]">
        <div className="flex flex-col items-center px-6 md:px-12 py-12 md:py-[80px] max-w-[1180px] mx-auto">
          <span className="text-xs md:text-sm text-[var(--color-primary-light)] tracking-[3px] text-center uppercase">
            UNSERE PHILOSOPHIE
          </span>
          <p className="text-[20px] md:text-[32px] leading-[1.3] text-[var(--color-primary-light)] text-center w-full mt-4 md:mt-6 max-w-[800px] tracking-wide">
            WIR MACHEN KEINE TRENDS – WIR MACHEN GESCHMACK. BURGERS UND TACOS, SO WIE SIE GEDACHT SIND: EHRLICH, FRESH UND KOMPROMISSLOS GUT.
          </p>
          <a
            href="mailto:catering@original.catering?subject=EVENT%20CATERING%20ANFRAGE"
            className="mt-6 md:mt-10 px-6 md:px-10 py-3 md:py-4 bg-white text-[var(--color-dark)] text-sm md:text-lg border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary-light)] hover:-translate-y-1 transition-all duration-300"
          >
            JETZT ANFRAGEN →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
