export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-12 text-sm text-zinc-400">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 border-b border-zinc-800 pb-8 md:flex-row">
          <span className="text-xl font-bold tracking-tight text-white">
            METAL<span className="text-amber-500">COS</span>ART S.R.L.
          </span>
          <div className="flex gap-6 text-xs text-zinc-400">
            <span>Sediu: Stroești, Botoșani</span>
            <span>•</span>
            <a
              href="https://anpc.ro"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              ANPC
            </a>
            <span>•</span>
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              SOL (ODR)
            </a>
          </div>
        </div>
        <div className="mt-8 text-xs text-zinc-500">
          <p>
            © {new Date().getFullYear()} Metalcosart S.R.L. Toate drepturile
            rezervate.
          </p>
          <p className="mt-1">
            Date de identificare fiscală: Metalcosart S.R.L. | Sediu: Stroești,
            Botoșani | CUI: 52565326 | J2025072827009 | Capital social: 200 RON
          </p>
        </div>
      </div>
    </footer>
  );
}
