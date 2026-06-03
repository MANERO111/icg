import Image from "next/image";

const values = [
  {
    icon: <Image src="/img/confiance.png" alt="equipe" width={80} height={80} />,
    title: "CONFIANCE",
    description: "Des relations solides et durables",
  },
  {
    icon: <Image src="/img/accompagnement.png" alt="developpement" width={64} height={64} />,
    title: "ACCOMPAGNEMENT",
    description: "Un suivi stratégique et terrain",
  },
  {
    icon: <Image src="/img/clarte.png" alt="engagement" width={64} height={64} />,
    title: "CLARTÉ",
    description: "Une vision transparente et structurée.",
  },
  {
    icon: <Image src="/img/developpement.png" alt="innovation" width={64} height={64} />,
    title: "PERFORMANCE",
    description: "Des résultats mesurables et durables",
  },
];

export default function CollaborateursSection() {
  return (
    <section className="w-full bg-white mt-10 py-16 px-4 md:px-12 lg:px-24">
      {/* Top block: text left + image right */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center w-[90%] mx-auto mb-14">
        {/* Left */}
        <div className="flex-1 space-y-4">
          <p className="text-lg font-sans tracking-widest text-gray-900 uppercase">
              nos partenaires
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#e0296a] uppercase ">
            ICG construit des
            <br />
            Relations durables
            <br />
            Avec ses partenaires

          </h2>
          <p className="text-gray-900 text-xl md:text-2xl leading-relaxed text-justify ">
            en s’appuyant sur la confiance, la clarté, l’accompagnement et la performance.
            Pharmacies, parapharmacies, experts santé, relais terrain et partenaires business
            participent activement à la diffusion et à la valorisation de nos marques.
          </p>
        </div>

        {/* Right: image */}
        <div className="flex-1 w-full">
          <div className="relative w-full h-72 md:h-[500px] rounded-2xl overflow-hidden shadow-md bg-gray-100">
            <Image
              src="/img/partenaires_pic.png"
              alt="Collaborateurs ICG"
              fill
              className="object-cover"
              priority
            />

          </div>
        </div>
      </div>

      {/* Culture quote */}
      <div className="text-center w-[80%] mx-auto mb-14">
        <p className="text-xl md:text-2xl font-medium tracking-[0.18em] text-gray-900 uppercase leading-relaxed">
          Nous ne cherchons pas seulement à distribuer des produits : nous
          <br className="hidden md:block" />
          cherchons à bâtir un écosystème cohérent, efficace et porteur de valeur.
        </p>
      </div>

      {/* Values grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[80%] mx-auto mb-16">
        {values.map((v, i) => (
          <div key={i} className="flex flex items-center justify-between p-2 gap-3">
            <div className="text-gray-800">{v.icon}</div>
            <div>
                <h4 className="text-xl font-bold text-gray-900 tracking-wide">
                {v.title}
                </h4>
                <p className="text-gray-900 text-lg leading-relaxed">{v.description}</p>                
            </div>

          </div>
        ))}
      </div>

      {/* Bottom divider */}
      <div className="flex justify-center">
        <div className="w-5xl h-px bg-gray-500" />
      </div>
    </section>
  );
}