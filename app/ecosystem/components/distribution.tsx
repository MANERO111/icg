import Image from "next/image";

const values = [
  {
    icon: <Image src="/img/couverture.png" alt="equipe" width={100} height={100} />,
    title: "COUVERTURE NATIONALE",
    description: "Une présence sur l’ensemble du territoire marocain.",
  },
  {
    icon: <Image src="/img/logistique.png" alt="developpement" width={128} height={128} />,
    title: "LOGISTIQUE PERFORMANTE",
    description: "Une chaîne d’approvisionnement fiable, réactive et optimisée.",
  },
  {
    icon: <Image src="/img/reseau.png" alt="engagement" width={100} height={100} />,
    title: "RÉSEAU STRUCTURÉ",
    description: "Un maillage de partenaires solides et engagés.",
  },
  {
    icon: <Image src="/img/service.png" alt="innovation" width={100} height={100} />,
    title: "SERVICE & SUIVI",
    description: "Un accompagnement de proximité et un suivi continu",
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
              Distribution & réseau
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#e0296a] uppercase ">
            Présent sur l’ensemble 
            <br />
            du royaume
          </h2>
          <p className="text-gray-900 text-xl md:text-2xl leading-relaxed text-justify ">
                ICG développe un maillage structuré pour assurer une couverture efficace,
                une présence cohérente et une capacité de déploiement rapide. Notre réseau de distribution
                constitue un levier stratégique majeur dans l’accessibilité et la visibilité de nos marques. 
          </p>
        </div>

        {/* Right: image */}
        <div className="flex-1 w-full">
          <div className="relative w-full h-72 md:h-[500px] rounded-2xl overflow-hidden shadow-md bg-gray-100">
            <Image
              src="/img/distribution_pic.png"
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
          Cette présence nationale s’accompagne d’une volonté constante
          <br className="hidden md:block" />
          d’optimisation du service, du suivi et de la relation partenaire
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