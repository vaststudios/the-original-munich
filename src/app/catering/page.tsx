import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

interface ServiceItemProps {
  title: string;
  description: string;
}

function ServiceItem({ title, description }: ServiceItemProps) {
  return (
    <div className="flex flex-col gap-1 w-full py-4 border-b border-[var(--color-primary)]">
      <span className="text-lg text-[var(--color-dark)]">{title}</span>
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
    <div className="group flex items-center justify-between w-full py-4 border-b-2 border-[var(--color-primary)] hover:bg-white/50 hover:px-3 transition-all duration-200">
      <div className="flex flex-col gap-1">
        <span className="text-xl text-[var(--color-dark)] group-hover:text-[var(--color-primary)] transition-colors">{title}</span>
        <span className="text-xs text-[var(--color-dark)] opacity-70">{description}</span>
      </div>
      <a
        href="mailto:catering@original.catering?subject=CATERING%20ANFRAGE"
        className="text-lg text-[var(--color-dark)] group-hover:text-[var(--color-primary)] transition-colors whitespace-nowrap"
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
        <div className="flex w-full h-[500px] max-w-[1180px] mx-auto border-x-2 border-b-2 border-[var(--color-primary)]">
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-between flex-1 bg-white p-12 border-r-2 border-[var(--color-primary)]">
            <div className="flex flex-col gap-4">
              <span className="inline-block px-4 py-2 border-2 border-[var(--color-primary)] rounded-full text-sm text-[var(--color-primary)] tracking-[2px] w-fit">
                EXKLUSIV FÜR FIRMEN
              </span>
              <div className="flex flex-col gap-2 mt-4">
                <span className="text-[80px] leading-[0.85] text-[var(--color-primary)]">
                  EVENT
                </span>
                <span className="text-[80px] leading-[0.85] text-[var(--color-dark)]">
                  CATERING
                </span>
              </div>
            </div>
            <p className="text-lg text-[var(--color-dark)] leading-[1.4] tracking-wide">
              WIR BRINGEN EUCH DIE BESTEN SMASH BURGERS & TACOS DIREKT ZU EUREM EVENT.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="relative flex-1 bg-[var(--color-primary-light)] overflow-hidden">
            <Image
              src="/images/hero-burger.jpeg"
              alt="Event Catering"
              fill
              className="object-cover"
              priority
            />
            {/* 100% TASTE Badge */}
            <div className="absolute right-[40px] bottom-[40px] w-[100px] h-[100px] rounded-full bg-[var(--color-primary)] border-2 border-[var(--color-dark)] flex flex-col items-center justify-center rotate-12 shadow-lg transition-transform duration-300 hover:rotate-6 hover:scale-105">
              <span className="text-white text-base text-center">100%</span>
              <span className="text-white text-base text-center">TASTE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="w-full flex items-center h-[60px] bg-[var(--color-primary)] border-b-2 border-[var(--color-primary)] overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="text-white text-[28px] leading-none tracking-wider">
            THE ORIGINAL MUNICH • BURGER AND TACOS • 15 YEARS EXPERIENCE • THE ORIGINAL MUNICH • BURGER AND TACOS • 15 YEARS EXPERIENCE •
          </span>
          <span className="text-white text-[28px] leading-none tracking-wider">
            THE ORIGINAL MUNICH • BURGER AND TACOS • 15 YEARS EXPERIENCE • THE ORIGINAL MUNICH • BURGER AND TACOS • 15 YEARS EXPERIENCE •
          </span>
        </div>
      </section>

      {/* Menu Gallery */}
      <section className="w-full bg-[var(--color-primary-light)]">
        <div className="flex w-full max-w-[1180px] mx-auto border-x-2 border-b-2 border-[var(--color-primary)]">
          {/* Card 1 */}
          <div className="flex-1 bg-white border-r-2 border-[var(--color-primary)]">
            <div className="relative h-[200px] border-b-2 border-[var(--color-primary)] overflow-hidden">
              <Image src="/images/og-smash.jpeg" alt="Smash Burger" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl text-[var(--color-dark)]">SMASH BURGER</h3>
              <p className="text-xs text-[var(--color-dark)] opacity-70 mt-1">DOUBLE BEEF, CHEESE, SECRET SAUCE</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex-1 bg-white border-r-2 border-[var(--color-primary)]">
            <div className="relative h-[200px] border-b-2 border-[var(--color-primary)] overflow-hidden">
              <Image src="/images/birria-tacos.jpeg" alt="Birria Tacos" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl text-[var(--color-dark)]">BIRRIA TACOS</h3>
              <p className="text-xs text-[var(--color-dark)] opacity-70 mt-1">SLOW COOKED BEEF, CONSOMMÉ</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="flex-1 bg-white">
            <div className="relative h-[200px] border-b-2 border-[var(--color-primary)] overflow-hidden">
              <Image src="/images/fish-tacos.jpeg" alt="Cheese Fries" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl text-[var(--color-dark)]">CHEESE FRIES</h3>
              <p className="text-xs text-[var(--color-dark)] opacity-70 mt-1">CHEESE, BACON, JALAPEÑOS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Discount Section */}
      <section className="w-full bg-[var(--color-primary-light)]">
        <div className="flex w-full max-w-[1180px] mx-auto border-x-2 border-b-2 border-[var(--color-primary)]">
          {/* Left - Discount */}
          <div className="flex-1 bg-[var(--color-primary)] p-12 flex flex-col items-center justify-center border-r-2 border-[var(--color-primary)]">
            <span className="text-[72px] leading-none text-white">–10%</span>
            <span className="text-2xl text-[var(--color-primary-light)] mt-2">FIRMENRABATT</span>
          </div>
          {/* Right - Text */}
          <div className="flex-1 bg-white p-12 flex items-center justify-center">
            <p className="text-lg text-[var(--color-dark)] text-center leading-[1.4] tracking-wide">
              OB KLEIN ODER GROSS: JEDE BESTELLUNG ZÄHLT. OHNE MINDESTBESTELLWERT, OHNE EINSCHRÄNKUNGEN.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-[var(--color-primary-light)]">
        <div className="flex w-full max-w-[1180px] mx-auto border-x-2 border-b-2 border-[var(--color-primary)]">
          {/* Left - Services List */}
          <div className="flex-1 bg-white p-12 border-r-2 border-[var(--color-primary)]">
            {services.map((service) => (
              <ServiceItem key={service.title} {...service} />
            ))}
          </div>
          {/* Right - Title */}
          <div className="flex-1 bg-[var(--color-primary)] p-12 flex flex-col justify-center">
            <h2 className="text-[48px] leading-[0.9] text-white">EVENT SERVICES</h2>
            <p className="text-base text-[var(--color-primary-light)] mt-4 leading-[1.4] tracking-wide">
              VON KLEIN BIS GROSS – WIR CATERN EUREN EVENT MIT LIEBE UND DEN BESTEN ZUTATEN.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full bg-[var(--color-primary-light)]">
        <div className="max-w-[1180px] mx-auto border-x-2 border-b-2 border-[var(--color-primary)] bg-white p-12">
          <h2 className="text-[48px] leading-[0.9] text-[var(--color-primary)] mb-8">PREISE</h2>
          {prices.map((price) => (
            <PriceItem key={price.title} {...price} />
          ))}
        </div>
      </section>

      {/* Philosophy / CTA Section */}
      <section className="w-full bg-[var(--color-primary)] border-b-2 border-[var(--color-primary)]">
        <div className="flex flex-col items-center px-12 py-[80px] max-w-[1180px] mx-auto">
          <span className="text-sm text-[var(--color-primary-light)] tracking-[3px] text-center uppercase">
            UNSERE PHILOSOPHIE
          </span>
          <p className="text-[32px] leading-[1.3] text-[var(--color-primary-light)] text-center w-full mt-6 max-w-[800px] tracking-wide">
            WIR MACHEN KEINE TRENDS – WIR MACHEN GESCHMACK. BURGER UND TACOS, SO WIE SIE GEDACHT SIND: EHRLICH, FRISCH UND KOMPROMISSLOS GUT.
          </p>
          <a
            href="mailto:catering@original.catering?subject=EVENT%20CATERING%20ANFRAGE"
            className="mt-10 px-10 py-4 bg-white text-[var(--color-dark)] text-lg border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary-light)] hover:-translate-y-1 transition-all duration-300"
          >
            JETZT ANFRAGEN →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
