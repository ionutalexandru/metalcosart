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
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
              alt="Hala industrială"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-end bg-linear-to-t from-zinc-950/80 via-transparent to-transparent p-6">
              <span className="font-semibold text-white">
                Montaj Hală Industrială pe Structură Metalică
              </span>
            </div>
          </div>

          <div className="group relative h-72 overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
              alt="Sudură de precizie"
              fill
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
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
              alt="Estructura metálica detallada"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-end bg-linear-to-t from-zinc-950/80 via-transparent to-transparent p-6">
              <span className="font-semibold text-white">
                Platformă Industrială și Scări de Acces
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
