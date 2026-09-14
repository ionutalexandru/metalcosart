import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-4 md:flex-row md:items-center">
        <div className="flex items-center gap-2">
          <Link href="/">
            <span className="text-2xl font-black tracking-tight text-zinc-900">
              METAL<span className="text-primary">COS</span>ART
            </span>
          </Link>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link href="#servicii">Servicii</Link>
          <Link href="#despre">Despre Noi</Link>
          <a href="#proiecte">Proiecte</a>
          <Link href="#contact">Contact</Link>
        </nav>
        <div>
          <Link href="#contact" className="cta">
            Solicită Ofertă
          </Link>
        </div>
      </div>
    </header>
  );
}
