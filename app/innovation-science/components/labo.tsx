import Image from "next/image";

export default function LaboratoiresSection() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-12 lg:px-24">
      {/* Top divider */}
      <div className="flex justify-center mb-12">
        <div className="w-[300px]  md:w-3xl h-0.5 bg-gray-500" />
      </div>

      {/* Header */}
      <div className="text-center mb-4 md:mb-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold text-[#e0296a] uppercase tracking-tight mb-5"
        id="nosLaboratoire">
          Nos Laboratoires
        </h2>
        <p className="text-gray-900 text-[15px] md:text-2xl leading-relaxed">
          Le développement de nos solutions s&apos;inscrit dans une logique de
          rigueur, de recherche et de maîtrise. Nos laboratoires et partenaires
          techniques jouent un rôle central dans la construction de formules
          innovantes et fiables, au service de marques exigeantes et d&apos;un marché
          en évolution.
        </p>
      </div>

      {/* Content: text left, image right */}
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-[93%] mx-auto">
        {/* Left: Text */}


        {/* Right: Image */}
        <div className="flex-1 w-full">
          <div className="relative w-full h-96 md:h-96 rounded-2xl overflow-hidden shadow-md">
            {/* Replace src with your actual image path */}
            <Image
              src="/img/nos_labo_pic.png"
              alt="Nos Laboratoires"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="flex-1 text-gray-900 text-sm md:text-2xl md:leading-8 space-y-5 max-md:text-center md:text-justify">
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
      </div>
    </section>
  );
}