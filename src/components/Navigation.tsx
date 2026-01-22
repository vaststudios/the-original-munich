"use client";

import Image from "next/image";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[var(--color-primary-light)] border-b-2 border-[var(--color-primary)]">
      <div className="flex items-center justify-between h-[80px] px-4 md:px-12 max-w-[1180px] mx-auto">
        <a href="/" className="flex items-center gap-3 transition-transform duration-200 hover:scale-105">
          <Image src="/logo.png" alt="The Original" width={120} height={40} className="object-contain w-20 md:w-[120px]" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex h-[80px]">
          <a href="/#menu" className="flex items-center px-6 h-[80px] border-l-2 border-[var(--color-primary)] text-[var(--color-dark)] text-lg hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200">
            MENU
          </a>
          <a href="/#locations" className="flex items-center px-6 h-[80px] border-l-2 border-[var(--color-primary)] text-[var(--color-dark)] text-lg hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200">
            STANDORTE
          </a>
          <a href="/catering" className="flex items-center px-6 h-[80px] border-l-2 border-[var(--color-primary)] text-[var(--color-dark)] text-lg hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200">
            CATERING
          </a>
          <a 
            href="https://wolt.com/de/deu/munich/restaurant/the-original-burger-tacos?srsltid=AfmBOopl7TuwZAm90WNUXuZZ527bvjniVn-tqqHHSESrxagdy-TK9hVS" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center px-8 h-[80px] border-l-2 border-[var(--color-primary)] bg-[var(--color-primary)] text-white text-lg hover:bg-[#d91f3a] transition-all duration-200 shadow-[var(--shadow-button)]"
          >
            JETZT BESTELLEN
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`w-6 h-0.5 bg-[var(--color-primary)] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-[var(--color-primary)] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-[var(--color-primary)] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t-2 border-[var(--color-primary)] bg-[var(--color-primary-light)]">
          <div className="flex flex-col">
            <a 
              href="/#menu" 
              onClick={() => setIsOpen(false)}
              className="px-4 py-4 border-b border-[var(--color-primary)] text-[var(--color-dark)] text-lg hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200"
            >
              MENU
            </a>
            <a 
              href="/#locations" 
              onClick={() => setIsOpen(false)}
              className="px-4 py-4 border-b border-[var(--color-primary)] text-[var(--color-dark)] text-lg hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200"
            >
              STANDORTE
            </a>
            <a 
              href="/catering" 
              onClick={() => setIsOpen(false)}
              className="px-4 py-4 border-b border-[var(--color-primary)] text-[var(--color-dark)] text-lg hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200"
            >
              CATERING
            </a>
            <a 
              href="https://wolt.com/de/deu/munich/restaurant/the-original-burger-tacos?srsltid=AfmBOopl7TuwZAm90WNUXuZZ527bvjniVn-tqqHHSESrxagdy-TK9hVS" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="px-4 py-4 bg-[var(--color-primary)] text-white text-lg hover:bg-[#d91f3a] transition-all duration-200"
            >
              JETZT BESTELLEN
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
