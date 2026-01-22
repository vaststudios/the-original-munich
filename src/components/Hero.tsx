import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full bg-[var(--color-primary-light)]">
      <div className="flex flex-col md:flex-row w-full min-h-[500px] md:h-[720px] max-w-[1180px] mx-auto border-x-2 border-b-2 border-[var(--color-primary)]">
        {/* Left Side - Text Content */}
        <div className="flex flex-col justify-between flex-1 bg-white p-6 md:p-12 pb-6 md:pb-12 pt-8 md:pt-16 border-b-2 md:border-b-0 md:border-r-2 border-[var(--color-primary)]">
          <p className="text-sm md:text-lg text-[var(--color-dark)] leading-[1.4] w-full md:w-[400px] tracking-wide mb-6 md:mb-0">
            SMASH BURGERS &amp; AUTHENTIC TACOS. HANDGEMACHT MIT LIEBE IM HERZEN VON MÜNCHEN.
          </p>

          <div className="flex flex-col gap-2 md:gap-5">
            <span className="text-[48px] md:text-[128px] leading-[0.85] text-[var(--color-primary)] transition-transform duration-300 hover:translate-x-2">
              &amp; TACOS
            </span>
            <span className="text-[48px] md:text-[128px] leading-[0.85] text-[var(--color-primary)] transition-transform duration-300 delay-75 hover:translate-x-2">
              SMASH
            </span>
            <span className="text-[48px] md:text-[128px] leading-[0.85] text-[var(--color-dark)] transition-transform duration-300 delay-150 hover:translate-x-2">
              BURGERS
            </span>
          </div>
        </div>

        {/* Right Side - Image with Badge and CTA */}
        <div className="relative flex-1 min-h-[300px] md:min-h-0 bg-[var(--color-primary-light)] overflow-hidden">
          <Image
            src="/images/hero-burger.jpeg"
            alt="Delicious burger"
            fill
            className="object-cover"
            priority
          />

          {/* 100% Fresh Badge */}
          <div className="absolute right-4 md:right-[60px] bottom-4 md:bottom-[40px] w-20 h-20 md:w-[120px] md:h-[120px] rounded-full bg-[var(--color-primary)] border-2 border-[var(--color-dark)] flex flex-col items-center justify-center rotate-12 shadow-lg transition-transform duration-300 hover:rotate-6 hover:scale-105">
            <span className="text-white text-sm md:text-xl text-center">100%</span>
            <span className="text-white text-sm md:text-xl text-center">FRESH</span>
          </div>

          {/* View Menu CTA */}
          <a
            href="#menu"
            className="absolute left-4 md:left-12 bottom-20 md:bottom-[120px] px-6 md:px-8 py-3 md:py-4 bg-[var(--color-primary)] text-white text-sm md:text-lg rounded-full border-2 border-[var(--color-primary)] hover:bg-[#d91f3a] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            MENU ANSEHEN
          </a>
        </div>
      </div>
    </section>
  );
}
