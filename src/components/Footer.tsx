import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-[var(--color-primary-light)] border-t-2 border-[var(--color-primary)]">
      <div className="flex flex-col gap-12 px-12 pt-16 pb-8 max-w-[1180px] mx-auto">
        {/* Top Section */}
        <div className="flex justify-between w-full">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a href="/" className="flex items-center gap-3 transition-transform duration-200 hover:scale-105">
              <Image src="/logo.png" alt="The Original" width={150} height={50} className="object-contain" />
            </a>
            <p className="text-base leading-[1.4] text-[var(--color-dark)] w-[300px]">
              HANDGEMACHTE SMASH BURGERS UND
              <br />
              AUTHENTIC TACOS IN MÜNCHEN.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            {/* Quick Links */}
            <div className="flex flex-col gap-3">
              <span className="text-sm text-[var(--color-primary)] tracking-[2px]">QUICK LINKS</span>
              <a href="/#menu" className="text-base text-[var(--color-dark)] hover:text-[var(--color-primary)] hover:translate-x-1 transition-all duration-200">MENU</a>
              <a href="/#locations" className="text-base text-[var(--color-dark)] hover:text-[var(--color-primary)] hover:translate-x-1 transition-all duration-200">STANDORTE</a>
              <a href="/catering" className="text-base text-[var(--color-dark)] hover:text-[var(--color-primary)] hover:translate-x-1 transition-all duration-200">CATERING</a>
              <a href="#" className="text-base text-[var(--color-dark)] hover:text-[var(--color-primary)] hover:translate-x-1 transition-all duration-200">ÜBER UNS</a>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-3">
              <span className="text-sm text-[var(--color-primary)] tracking-[2px]">FOLLOW US</span>
              <a href="#" className="text-base text-[var(--color-dark)] hover:text-[var(--color-primary)] hover:translate-x-1 transition-all duration-200">INSTAGRAM</a>
              <a href="#" className="text-base text-[var(--color-dark)] hover:text-[var(--color-primary)] hover:translate-x-1 transition-all duration-200">TIKTOK</a>
              <a href="#" className="text-base text-[var(--color-dark)] hover:text-[var(--color-primary)] hover:translate-x-1 transition-all duration-200">FACEBOOK</a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between w-full pt-6 border-t border-[var(--color-primary)]">
          <span className="text-xs text-[var(--color-dark)]">
            © 2026 THE ORIGINAL MÜNCHEN. ALLE RECHTE VORBEHALTEN.
          </span>
          <div className="flex gap-6">
            <a href="/datenschutz" className="text-xs text-[var(--color-dark)] hover:text-[var(--color-primary)] transition-colors">DATENSCHUTZ</a>
            <a href="/impressum" className="text-xs text-[var(--color-dark)] hover:text-[var(--color-primary)] transition-colors">IMPRESSUM</a>
          </div>
        </div>

        {/* Coded with a Vibe Section */}
        <div className="flex justify-center items-center gap-3 w-full pt-6 border-t border-[var(--color-primary)]">
          <a 
            href="https://vaststudios.com?utm_source=theoriginal-munich&utm_medium=website&utm_campaign=footer-link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 group opacity-70 hover:opacity-100 transition-all duration-300"
          >
            <span className="text-xs text-[var(--color-dark)] tracking-wider font-medium">CODED WITH A VIBE</span>
            <span className="text-[var(--color-primary)] text-lg leading-none">•</span>
            <div className="flex items-center">
              <Image 
                src="/vast-logo.svg" 
                alt="Vast Studios" 
                width={90} 
                height={17} 
                className="h-[17px] w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
