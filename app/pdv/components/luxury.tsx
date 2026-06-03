import Image from 'next/image';

export default function DermaTechSynergy() {
  return (
    <section className="bg-white py-6 px-4 max-w-6xl mx-auto font-sans text-[#1a1a1a]">
      {/* Header Logo Area */}
      <div className="flex justify-center items-center mb-10">
        <h1 className="text-4xl font-bebas-neue font-semibold uppercase mb-4 text-[#273B73]"
          style={{ transform: "scaleY(1.5)", letterSpacing: "-0.04em" }}
        >
           Luxury skincare, powered by diamond !
        </h1>
      </div>

      {/* Intro Grid */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 text-[18px] leading-relaxed text-gray-900 text-justify">
        <p>
          Des soins dermocosmétiques haute performance alliant science avancée et élégance pour révéler et préserver la beauté naturelle de la peau.
        </p>
        <p>
          Depuis plus de 40 ans, Paul de Vartens développe des soins d’exception, pensés pour répondre aux exigences des peaux les plus sophistiquées.
        </p>
      </div>

      {/* Core Technology Section */}
      <div className="text-center max-w-4xl mx-auto mb-10">
        <h2 className="text-xl font-bold tracking-wider uppercase mb-4 text-black">
          Une technologie au cœur de la performance
        </h2>
        <p className="text-[17px] leading-relaxed text-gray-900 ">
          Le Bioconcept Paul de Vartens est le fruit de décennies de recherche scientifique avancée.
        </p>
        <p className="text-[17px] leading-relaxed text-gray-900">
          Il agit au cœur de la peau pour :
        </p>
      </div>

      {/* 4 Pillars Feature Box */}
      <div className="border border-pink-200 rounded-2xl p-8 bg-white shadow-[0_4px_20px_rgba(255,192,203,0.1)] mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 divide-x-0 md:divide-x divide-pink-200">
          {/* Item 1 */}
          <div className="flex flex-col items-center text-center px-4">
            <div className="h-24 w-24 mb-4 flex items-center justify-center">
              <Image src="/img/lux1.png" alt="Pénétration" width={80} height={80} /> 
            </div>
            <p className="text-[15px] text-gray-700 leading-snug">
            Stimuler la<br /> régénération cellulaire les 
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center text-center px-4">
            <div className="h-24 w-24 mb-4 flex items-center justify-center">
              <Image src="/img/lux2.png" alt="Réduction" width={80} height={80} />
            </div>
            <p className="text-[15px] text-gray-700 leading-snug">
              Améliorer <br /> l’oxygénation
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center text-center px-4">
            <div className="h-24 w-24 mb-4 flex items-center justify-center">
              <Image src="/img/lux3.png" alt="Protection" width={80} height={80} />
            </div>
            <p className="text-[15px] text-gray-700 leading-snug">
              Restaurer l’équilibre <br /> biologique
            </p>
          </div>

          {/* Item 4 */}
          {/* <div className="flex flex-col items-center text-center px-4">
            <div className="h-16 w-16 mb-4 flex items-center justify-center">
              <Image src="/img/diff4.png" alt="Équilibre" width={56} height={56} />
            </div>
            <p className="text-[15px] text-gray-700 leading-snug">
              <span className="font-bold text-black">de protéger </span>la peau  <br />des agressions  <br />extérieures
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}