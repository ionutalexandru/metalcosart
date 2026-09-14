import Image from 'next/image';

export default function About() {
  return (
    <section id="despre" className="bg-zinc-100!">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Energie Tânără, Standarde Riguroase și Pasiune pentru Oțel
            </h2>
            <p className="mt-6 leading-relaxed text-zinc-600">
              Cu sediul în județul Botoșani, <strong>Metalcosart S.R.L.</strong>{' '}
              este o companie dinamică specializată în fabricarea de construcții
              metalice (cod CAEN 2511).
            </p>
            <p className="mt-6 leading-relaxed text-zinc-600">
              Chiar dacă suntem o prezență proaspătă pe piață, venim cu o
              abordare modernă, flexibilitate maximă și o dorință accelerată de
              a livra lucrări impecabile.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-zinc-300 pt-8">
              <div>
                <p className="text-3xl font-extrabold text-amber-500">100%</p>
                <p className="mt-1 text-sm text-zinc-600">
                  Implicare directă și atenție la detalii în fiecare proiect
                </p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-amber-500">
                  Botoșani
                </p>
                <p className="mt-1 text-sm text-zinc-600">
                  Echipă locală cu deschidere și mobilitate la nivel național
                </p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-amber-500">
                  Agilitate
                </p>
                <p className="mt-1 text-sm text-zinc-600">
                  Termene de răspuns și execuție rapide
                </p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-amber-500">
                  Calitate
                </p>
                <p className="mt-1 text-sm text-zinc-600">
                  Materiale certificate și tehnici actuale de sudură
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-96 overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
              alt="Taller industrial Metalcosart"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
