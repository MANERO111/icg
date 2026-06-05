import Image from "next/image";

const values = [
  {
    icon: <Image src="/img/equipe.png" alt="equipe" width={80} height={80} />,
    title: "ESPRIT D'ÉQUIPE",
    description: "La collaboration est notre force au quotidien.",
  },
  {
    icon: <Image src="/img/developpement.png" alt="developpement" width={64} height={64} />,
    title: "DÉVELOPPEMENT",
    description: "Nous accompagnons chaque talent vers son plein potentiel.",
  },
  {
    icon: <Image src="/img/engagement.png" alt="engagement" width={100} height={100} />,
    title: "ENGAGEMENT",
    description: "Nous avançons avec passion et sens des responsabilités.",
  },
  {
    icon: <Image src="/img/innovation.png" alt="innovation" width={80} height={80} />,
    title: "INNOVATION",
    description: "Nous encourageons les idées et la créativité.",
  },
];

export default function CollaborateursSection() {
  return (
    <section className="w-full bg-white mt-40 py-16 px-4 md:px-12 lg:px-24">
      {/* Top block: text left + image right */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center w-[90%] mx-auto mb-14">
        {/* Left */}
        <div className="flex-1 space-y-4">
          <p className="text-lg font-medium tracking-widest text-gray-900 uppercase">
            Nos Collaborateurs
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#e0296a] uppercase ">
            Les Collaborateurs ICG
            <br />
            Sont au Cœur de Notre
            <br />
            Croissance.
          </h2>
          <p className="text-gray-900 text-xl md:text-2xl leading-relaxed text-justify ">
            Nous croyons en l&apos;intelligence collective, à la force de la
            complémentarité et à la nécessité de faire évoluer les talents dans
            un environnement stimulant, structuré et ambitieux.
          </p>
        </div>

        {/* Right: image */}
        <div className="flex-1 w-full">
          <div className="relative w-full h-72 md:h-[500px] rounded-2xl overflow-hidden shadow-md bg-gray-100">
            <Image
              src="/img/innov_duplicated_pic.png"
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
          Notre culture interne repose sur l&apos;engagement, la responsabilité, la
          <br className="hidden md:block" />
          progression et l&apos;envie de construire ensemble un projet durable.
        </p>
      </div>

      {/* Values grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[80%] mx-auto mb-16">
        {values.map((v, i) => (
          <div key={i} className="flex flex items-start gap-3">
            <div className="text-gray-800">{v.icon}</div>
            <div>
                <h4 className="text-sm font-extrabold text-gray-900 tracking-wide">
                {v.title}
                </h4>
                <p className="text-gray-900 text-md leading-relaxed">{v.description}</p>                
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