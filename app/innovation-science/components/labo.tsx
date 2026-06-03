import Image from "next/image";

export default function LaboratoiresSection() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-12 lg:px-24">
      {/* Top divider */}
      <div className="flex justify-center mb-12">
        <div className="w-3xl h-0.5 bg-gray-500" />
      </div>

      {/* Header */}
      <div className="text-center mb-12 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#e0296a] uppercase tracking-tight mb-5">
          Nos Laboratoires
        </h2>
        <p className="text-gray-800 text-base md:text-2xl leading-relaxed">
          Le développement de nos solutions s'inscrit dans une logique de
          rigueur, de recherche et de maîtrise. Nos laboratoires et partenaires
          techniques jouent un rôle central dans la construction de formules
          innovantes et fiables, au service de marques exigeantes et d'un marché
          en évolution.
        </p>
      </div>

      {/* Content: text left, image right */}
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-[93%] mx-auto">
        {/* Left: Text */}
        <div className="flex-1 text-gray-900 text-2xl leading-8 space-y-5 text-justify">
          <p>
            Notre démarche repose sur une approche alliant innovation, rigueur
            et compréhension approfondie des exigences du marché.
          </p>
          <p>
            Grâce à cette synergie entre science, expertise technique et vision
            marketing, ICG développe des marques capables de répondre aux
            attentes des professionnels de santé, des pharmacies, des
            parapharmacies et des consommateurs à la recherche de solutions
            fiables et innovantes.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex-1 w-full">
          <div className="relative w-full h-96 md:h-96 rounded-2xl overflow-hidden shadow-md">
            {/* Replace src with your actual image path */}
            <Image
              src="/img/innov_duplicated_pic.png"
              alt="Nos Laboratoires"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}