import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-[var(--color-primary-light)] border-t-2 border-[var(--color-primary)]">
      <div className="flex flex-col gap-8 md:gap-12 px-6 md:px-12 pt-8 md:pt-16 pb-6 md:pb-8 max-w-[1180px] mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between w-full gap-8 md:gap-0">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a href="/" className="flex items-center gap-3 transition-transform duration-200 hover:scale-105">
              <Image src="/logo.png" alt="The Original" width={150} height={50} className="object-contain w-24 md:w-[150px]" />
            </a>
            <p className="text-sm md:text-base leading-[1.4] text-[var(--color-dark)] w-full md:w-[300px]">
              HANDGEMACHTE SMASH BURGERS UND
              <br />
              AUTHENTIC TACOS IN MÜNCHEN.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8 md:gap-16">
            {/* Quick Links */}
            <div className="flex flex-col gap-2 md:gap-3">
              <span className="text-xs md:text-sm text-[var(--color-primary)] tracking-[2px]">QUICK LINKS</span>
              <a href="/#menu" className="text-sm md:text-base text-[var(--color-dark)] hover:text-[var(--color-primary)] hover:translate-x-1 transition-all duration-200">MENU</a>
              <a href="/#locations" className="text-sm md:text-base text-[var(--color-dark)] hover:text-[var(--color-primary)] hover:translate-x-1 transition-all duration-200">STANDORTE</a>
              <a href="/catering" className="text-sm md:text-base text-[var(--color-dark)] hover:text-[var(--color-primary)] hover:translate-x-1 transition-all duration-200">CATERING</a>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-2 md:gap-3">
              <span className="text-xs md:text-sm text-[var(--color-primary)] tracking-[2px]">FOLLOW US</span>
              <a 
                href="https://www.instagram.com/theoriginalmunich/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm md:text-base text-[var(--color-dark)] hover:text-[var(--color-primary)] hover:translate-x-1 transition-all duration-200"
              >
                INSTAGRAM
              </a>
              <a 
                href="https://wolt.com/de/deu/munich/restaurant/the-original-burger-tacos?srsltid=AfmBOopl7TuwZAm90WNUXuZZ527bvjniVn-tqqHHSESrxagdy-TK9hVS" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm md:text-base text-[var(--color-dark)] hover:text-[var(--color-primary)] hover:translate-x-1 transition-all duration-200"
              >
                JETZT BESTELLEN
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full pt-4 md:pt-6 border-t border-[var(--color-primary)] gap-4 md:gap-0">
          <span className="text-xs text-[var(--color-dark)]">
            © 2026 THE ORIGINAL MÜNCHEN. ALLE RECHTE VORBEHALTEN.
          </span>
          <div className="flex gap-4 md:gap-6">
            <a href="/datenschutz" className="text-xs text-[var(--color-dark)] hover:text-[var(--color-primary)] transition-colors">DATENSCHUTZ</a>
            <a href="/impressum" className="text-xs text-[var(--color-dark)] hover:text-[var(--color-primary)] transition-colors">IMPRESSUM</a>
          </div>
        </div>

        {/* Coded with a Vibe Section */}
        <div className="flex justify-center items-center gap-2 md:gap-3 w-full pt-4 md:pt-6 border-t border-[var(--color-primary)]">
          <a 
            href="https://vaststudios.com?utm_source=theoriginal-munich&utm_medium=website&utm_campaign=footer-link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 md:gap-3 group opacity-70 hover:opacity-100 transition-all duration-300"
          >
            <span className="text-xs text-[var(--color-dark)] tracking-wider font-medium">CODED WITH A VIBE</span>
            <span className="text-[var(--color-primary)] text-base md:text-lg leading-none">•</span>
            <div className="flex items-center">
              <Image 
                src="/vast-logo.svg" 
                alt="Vast Studios" 
                width={90} 
                height={17} 
                className="h-[15px] md:h-[17px] w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
