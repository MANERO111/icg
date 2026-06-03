import Image from "next/image";

const values = [
  {
    icon: <Image src="/img/expertise.png" alt="equipe" width={64} height={64} />,
    title: "EXPERTISE",
    description: "Des contenus fiables, clairs et à jour.",
  },
  {
    icon: <Image src="/img/competence.png" alt="developpement" width={128} height={128} />,
    title: "COMPÉTENCES",
    description: "Des équipes et partenaires mieux formés, plus performants.",
  },
  {
    icon: <Image src="/img/credibilite.png" alt="engagement" width={100} height={100} />,
    title: "CRÉDIBILITÉ",
    description: "Une posture professionnelle et un accompagnement de qualité.",
  },
  {
    icon: <Image src="/img/developpement.png" alt="innovation" width={64} height={64} />,
    title: "PERFORMANCE",
    description: "Des messages justes pour des résultats concrets.",
  },
];

export default function FormationSection() {
  return (
    <section className="w-full bg-white mt-10 py-16 px-4 md:px-12 lg:px-24">
      {/* Top block: text left + image right */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center w-[90%] mx-auto mb-14">
        {/* Left */}
        <div className="flex-1 space-y-4">
          <p className="text-lg font-sans tracking-widest text-gray-900 uppercase">
              Formation & Academy
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#e0296a] uppercase ">
            La formation fait partie 

            <br />
            intégrante de la 
            <br />
            stratégie ICG

          </h2>
          <p className="text-gray-900 text-xl md:text-2xl leading-relaxed text-justify ">
            Nous croyons qu’un produit performant doit être accompagné d’un discours
            juste, d’une compréhension claire et d’un relais terrain bien préparé.
            C’est pourquoi nous investissons dans la montée en compétence continue de nos équipes et de nos partenaires.
          </p>
        </div>

        {/* Right: image */}
        <div className="flex-1 w-full">
          <div className="relative w-full h-72 md:h-[500px] rounded-2xl overflow-hidden shadow-md bg-gray-100">
            <Image
              src="/img/formation_pic.png"
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
        <p className="text-xl md:text-2xl font-medium tracking-[0.18em] text-gray-900 uppercase ">
          Former, c’est structurer la croissance, renforcer la crédibilité et 
          <br className="hidden md:block" />
          améliorer durablement la qualité de l’accompagnement.
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