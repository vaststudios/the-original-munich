import Image from "next/image";

export function Navigation() {
  return (
    <nav className="w-full bg-[var(--color-primary-light)] border-b-2 border-[var(--color-primary)]">
      <div className="flex items-center justify-between h-[80px] px-12 max-w-[1180px] mx-auto">
        <a href="/" className="flex items-center gap-3 transition-transform duration-200 hover:scale-105">
          <Image src="/logo.png" alt="The Original" width={120} height={40} className="object-contain" />
        </a>

        <div className="flex h-[80px]">
          <a href="/#menu" className="flex items-center px-6 h-[80px] border-l-2 border-[var(--color-primary)] text-[var(--color-dark)] text-lg hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200">
            MENU
          </a>
          <a href="/#about" className="flex items-center px-6 h-[80px] border-l-2 border-[var(--color-primary)] text-[var(--color-dark)] text-lg hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200">
            ABOUT
          </a>
          <a href="/#locations" className="flex items-center px-6 h-[80px] border-l-2 border-[var(--color-primary)] text-[var(--color-dark)] text-lg hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200">
            LOCATIONS
          </a>
          <a href="/catering" className="flex items-center px-6 h-[80px] border-l-2 border-[var(--color-primary)] text-[var(--color-dark)] text-lg hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200">
            CATERING
          </a>
          <a href="/#order" className="flex items-center px-8 h-[80px] border-l-2 border-[var(--color-primary)] bg-[var(--color-primary)] text-white text-lg hover:bg-[#d91f3a] transition-all duration-200 shadow-[var(--shadow-button)]">
            ORDER NOW
          </a>
        </div>
      </div>
    </nav>
  );
}
