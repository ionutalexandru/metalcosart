'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/">
          <span className="text-2xl font-black tracking-tight text-zinc-900">
            METAL<span className="text-amber-500">COS</span>ART
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link href="#servicii">Servicii</Link>
          <Link href="#despre">Despre Noi</Link>
          <Link href="#proiecte">Proiecte</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        <div className="hidden md:block">
          <Link href="#contact" className="cta">
            Solicită Ofertă
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-zinc-700 hover:bg-zinc-100 md:hidden"
          aria-label="Deschide meniul"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-zinc-200 bg-white px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-4 text-base font-medium">
            <Link href="#servicii" onClick={() => setMobileMenuOpen(false)}>
              Servicii
            </Link>
            <Link href="#despre" onClick={() => setMobileMenuOpen(false)}>
              Despre Noi
            </Link>
            <Link href="#proiecte" onClick={() => setMobileMenuOpen(false)}>
              Proiecte
            </Link>
            <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <div className="pt-2">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="cta inline-block w-full text-center"
              >
                Solicită Ofertă
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
