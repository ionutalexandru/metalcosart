import Image from 'next/image';

export default function Portfolio() {
  return (
    <section id="proiecte" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Portofoliu de Lucrări și Proiecte
          </h2>
          <p className="mt-4 text-zinc-600">
            O selecție de structuri metalice și ansambluri sudate livrate
            clienților noștri.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="group relative h-72 overflow-hidden rounded-xl">
            <Image
              src="/gallery-09.jpg"
              alt="Hala industrială"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-end bg-linear-to-t from-zinc-950/80 via-transparent to-transparent p-6">
              <span className="font-semibold text-white">
                Montaj Hală Industrială
              </span>
            </div>
          </div>

          <div className="group relative h-72 overflow-hidden rounded-xl">
            <Image
              src="/gallery-05.jpg"
              alt="Confecție și Sudură Cadru Metalic Greu"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-end bg-linear-to-t from-zinc-950/80 via-transparent to-transparent p-6">
              <span className="font-semibold text-white">
                Confecție și Sudură Cadru Metalic Greu
              </span>
            </div>
          </div>

          <div className="group relative h-72 overflow-hidden rounded-xl">
            <Image
              src="/gallery-01.jpg"
              alt="Platformă Industrială și Scări de Acces"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-end bg-linear-to-t from-zinc-950/80 via-transparent to-transparent p-6">
              <span className="font-semibold text-white">
                Confecții și Montaje Metalice Speciale
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
