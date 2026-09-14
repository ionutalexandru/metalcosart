import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold tracking-tight text-white!">
            Contactează-ne
          </h2>
          <p className="mt-4 text-zinc-400">
            Ai nevoie de o ofertă personalizată pentru structuri metalice sau
            servicii de sudură? Trimite-ne un mesaj sau contactează-ne direct la
            sediul nostru din Stroești.
          </p>
          <div className="mt-8 space-y-4 text-zinc-300">
            <p>
              <strong className="text-white">Sediu Social:</strong> Com.
              Stroești, Jud. Botoșani, România
            </p>
            <p>
              <strong className="text-white">Email:</strong>{' '}
              <Link href="mailto:contact@metalcosart.ro">
                contact@metalcosart.ro
              </Link>
            </p>
            <p>
              <strong className="text-white">Telefon:</strong>{' '}
              <Link href="tel:+40711942020">+40 (711) 942 020</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
