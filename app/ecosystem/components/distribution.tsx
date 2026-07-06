import Image from "next/image";

const values = [
  {
    icon: <Image src="/img/couverture.png" alt="couverture nationale" width={55} height={55} className="w-[55px] h-[55px] object-contain flex-shrink-0" />,
    title: "COUVERTURE NATIONALE",
    description: "Une présence sur l’ensemble du territoire marocain.",
  },
  {
    icon: <Image src="/img/logistique.png" alt="logistique performante" width={45} height={45} className="w-[45px] h-[45px] object-contain flex-shrink-0" />,
    title: "LOGISTIQUE PERFORMANTE",
    description: "Une chaîne d’approvisionnement fiable, réactive et optimisée.",
  },
  {
    icon: <Image src="/img/reseau.png" alt="reseau structure" width={50} height={50} className="w-[50px] h-[50px] object-contain flex-shrink-0" />,
    title: "RÉSEAU STRUCTURÉ",
    description: "Un maillage de partenaires solides et engagés.",
  },
  {
    icon: <Image src="/img/service.png" alt="service et suivi" width={50} height={50} className="w-[50px] h-[50px] object-contain flex-shrink-0" />,
    title: "SERVICE & SUIVI",
    description: "Un accompagnement de proximité et un suivi continu",
  },
];

export default function DistributionSection() {
  return (
    <section className="w-full bg-white mt-12 md:mt-40 py-6 md:py-16 px-4 md:px-12 lg:px-24">
      {/* Top block: image on top for mobile (flex-col-reverse), left + right layout on desktop */}
      <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-16 items-center w-full md:w-[90%] mx-auto mb-10 md:mb-14">
        {/* Left Content Column */}
        <div className="flex-1 space-y-4 text-center md:text-left w-full font-sans">
          <p className="text-xs md:text-lg font-bold tracking-[0.15em] text-gray-900 uppercase">
            Distribution & réseau
          </p>
          <h2 className="text-[1.8rem] sm:text-3xl md:text-5xl font-bold text-[#e0296a] uppercase leading-[1.15] md:leading-normal">
            Présent sur l’ensemble du royaume
          </h2>
          <p className="text-gray-900 text-[15px] md:text-2xl leading-relaxed text-center md:text-justify font-normal">
            ICG développe un maillage structuré pour assurer une couverture efficace,
            une présence cohérente et une capacité de déploiement rapide. Notre réseau de distribution
            constitue un levier stratégique majeur dans l’accessibilité et la visibilité de nos marques. 
          </p>
        </div>

        {/* Right Content Column: Placed first on mobile */}
        <div className="flex-1 w-full">
          <div className="relative w-full h-64 sm:h-80 md:h-[500px] rounded-[1rem] md:rounded-2xl overflow-hidden shadow-none md:shadow-md bg-gray-100">
            <Image
              src="/img/distribution_pic.png"
              alt="Distribution ICG"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Reordered Wrapper: Grouped values grid followed by the bottom text block on mobile */}
      <div className="flex flex-col w-full md:w-auto font-sans">
        {/* Values grid - Renders as 2-column on mobile, 4-columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 md:gap-x-8 md:gap-y-6 max-w-full md:max-w-[80%] mx-auto mb-14 md:mb-16 order-1 md:order-2 px-2 md:px-0">
          {values.map((v, i) => (
            <div key={i} className="flex items-center gap-1 md:gap-4 text-left">
              <div className="text-gray-800 flex-shrink-0 w-16 flex justify-center">{v.icon}</div>
              <div className="flex flex-col justify-center">
                <h4 className="text-[11px] md:text-sm md:font-bold font-semibold text-black tracking-wide mb-0.5">
                  {v.title}
                </h4>
                <p className="text-gray-900 text-[10px] md:text-[16px] leading-snug">{v.description}</p>                
              </div>
            </div>
          ))}
        </div>

        {/* Culture quote - positioned below the values items on mobile layouts */}
        <div className="text-center w-full md:w-[80%] mx-auto mb-2 md:mb-14 order-2 md:order-1 px-2">
          <p className="text-[16px] md:text-2xl tracking-[0.20em] md:tracking-[0.18em] text-black uppercase md:leading-tight text-center">
            Cette présence nationale s’accompagne d’une volonté constante
            <br className="hidden md:block" />
            d’optimisation du service, du suivi et de la relation partenaire
          </p>
        </div>
      </div>

      {/* Bottom divider */}
      {/* <div className="flex justify-center px-4">
        <div className="w-full md:w-5xl h-[1.5px] bg-black" />
      </div> */}
    </section>
  );
}