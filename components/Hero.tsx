import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="hero dark relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40 transition-opacity duration-1000">
        <Image
          src="/gallery-12.jpg"
          loading="eager"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="Sudură industrială structuri metalice"
          fill
          className="scale-105 animate-pulse object-cover duration-[10s]"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="badge">
            Din Botoșani în toată România • CAEN 2511
          </span>
          <h1>Exelență în Structuri Metalice și Sudură Grea</h1>
          <p>
            La Metalcosart S.R.L. proiectăm, executăm și montăm structuri
            metalice de rezistență, hale industriale și confecții metalice
            complexă. Oferim soluții durabile, de înaltă precizie, adaptate
            standardelor pentru partenerii noștri din întreaga Românie.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="#contact" className="btn primary">
              Solicită Ofertă / Consultanță
            </Link>
            <Link href="#servicii" className="btn secondary">
              Descoperă Serviciile
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
