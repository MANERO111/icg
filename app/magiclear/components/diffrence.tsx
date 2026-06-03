import Image from 'next/image';

export default function DifferenceSection() {
  return (
    <section className="bg-white py-6 px-4 max-w-6xl mx-auto font-sans text-[#1a1a1a]">
      {/* Header Logo Area */}
      <div className="flex justify-center items-center mb-10">
        <h1 className="text-5xl font-light tracking-wider uppercase mb-4 text-black"
          style={{ transform: "scaleY(1.2)" }}
        >
          La différence <span className="font-semibold text-[#bf4e51]"> est claire</span>
        </h1>
      </div>

      {/* Intro Grid */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 text-[18px] leading-relaxed text-gray-900 text-justify">
        <p>
          Des soins dermocosmétiques suisses experts de l’unification du teint, conçus pour corriger les taches, illuminer la peau et révéler son éclat naturel.
        </p>
        <p>
          Née d’un besoin réel et portée par la science suisse, Magiclear propose une approche complète pour traiter, protéger et prévenir les déséquilibres pigmentaires, tout en respectant la peau.
        </p>
      </div>

      {/* Core Technology Section */}
      <div className="text-center max-w-4xl mx-auto mb-10">
        <h2 className="text-xl font-bold tracking-wider uppercase mb-4 text-black">
          Une expertise ciblée sur les taches et l’unification du teint
        </h2>
        <p className="text-[17px] leading-relaxed text-gray-900 mb-4">
          Magiclear repose sur une approche scientifique dédiée aux problématiques pigmentaires, en agissant <br className='hidden md:inline'/> 
          directement sur les causes des irrégularités du teint.
        </p>
        <p className="text-[17px] leading-relaxed text-gray-900">
          Cette synergie permet :
        </p>
      </div>

      {/* 4 Pillars Feature Box */}
      <div className="border border-pink-200 rounded-2xl p-8 bg-white shadow-[0_4px_20px_rgba(255,192,203,0.1)] mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-x-0 md:divide-x divide-pink-200">
          {/* Item 1 */}
          <div className="flex flex-col items-center text-center px-4">
            <div className="h-16 w-16 mb-4 flex items-center justify-center">
              <Image src="/img/diff1.png" alt="Pénétration" width={56} height={56} /> 
            </div>
            <p className="text-[15px] text-gray-700 leading-snug">
                <span className="font-bold text-black">de corriger </span>les <br />taches existantes
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center text-center px-4">
            <div className="h-16 w-16 mb-4 flex items-center justify-center">
              <Image src="/img/diff2.png" alt="Réduction" width={56} height={56} />
            </div>
            <p className="text-[15px] text-gray-700 leading-snug">
              <span className="font-bold text-black">d’unifier </span>le teint
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center text-center px-4">
            <div className="h-16 w-16 mb-4 flex items-center justify-center">
              <Image src="/img/diff3.png" alt="Protection" width={56} height={56} />
            </div>
            <p className="text-[15px] text-gray-700 leading-snug">
              <span className="font-bold text-black">de prévenir </span>leur <br />réapparition
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center text-center px-4">
            <div className="h-16 w-16 mb-4 flex items-center justify-center">
              <Image src="/img/diff4.png" alt="Équilibre" width={56} height={56} />
            </div>
            <p className="text-[15px] text-gray-700 leading-snug">
              <span className="font-bold text-black">de protéger </span>la peau  <br />des agressions  <br />extérieures
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}