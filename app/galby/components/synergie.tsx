import Image from 'next/image';

export default function DermaTechSynergy() {
  return (
    <section className="bg-white py-6 px-4 w-[95%] md:max-w-6xl mx-auto font-sans text-[#1a1a1a]">
      {/* Header Logo Area */}
      <div className="flex justify-center items-center  md:mb-10">
        <Image
          src="/img/synergie_dermatech.png" // Replace with your logo path
          alt="La Synergie DermaTech"
          width={800}
          height={400}
          className="object-contain"
        />
      </div>

      {/* Intro Grid */}
      <div className="grid md:grid-cols-2 gap-4 md:gap-12 mb-4 md:mb-12 text-[14px] md:text-[18px] md:leading-relaxed text-gray-900 text-center md:text-justify">
        <p>
          Des soins dermocosmétiques suisses qui allient actifs puissants et respect du microbiome cutané pour des résultats visibles, durables et adaptés aux peaux, même sensibles.
        </p>
        <p>
          Née d&apos;une émotion et construite par la science, Galby Dermatech place l&apos;équilibre biologique de la peau au cœur de la performance.
        </p>
      </div>

      {/* Core Technology Section */}
      <div className="text-center max-w-4xl mx-auto mb-10">
        <h2 className="text-md font-bold tracking-wider uppercase md:mb-4 mb-2 text-black">
          UNE TECHNOLOGIE AU CŒUR DE CHAQUE SOIN
        </h2>
        <p className="text-[13px] md:text-[15px] md:leading-relaxed text-gray-900 mb-4">
          La Synergie DermaTech™ repose sur une combinaison intelligente d&apos;actifs dermatologiques puissants et de la technologie Microbiome-Tech, associant prébiotiques et postbiotiques pour optimiser l&apos;efficacité tout en respectant l&apos;équilibre cutané.
        </p>
        <p className="text-[13px] md:text-[15px] md:leading-relaxed text-gray-900 max-md:hidden">
          Cette synergie permet d&apos;agir efficacement tout en respectant l&apos;équilibre naturel de la peau.
        </p>
      </div>

      {/* 4 Pillars Feature Box */}
      <div className="border border-pink-300 md:rounded-2xl rounded-sm md:p-8 p-4 bg-white shadow-[0_4px_20px_rgba(255,192,203,0.1)] mb-12">
        <div className="grid grid-cols-4  md:gap-4 divide-x-0 md:divide-x divide-pink-300">
          {/* Item 1 */}
          <div className="flex flex-col items-center text-center px-2 md:px-4 max-md:border-r max-md:border-pink-300">
            <div className="md:h-16 md:w-16 h-10 w-10 mb-4 flex items-center justify-center">
              <Image src="/img/sy1.png" alt="Pénétration" width={56} height={56} />
            </div>
            <p className="text-[9px] md:text-[15px] text-gray-700 leading-snug">
              Meilleure <br /><span className="font-bold text-black">pénétration</span> <br />des actifs
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center text-center px-2 md:px-4 max-md:border-r max-md:border-pink-300">
            <div className="md:h-16 md:w-16 h-7 w-7 mb-4 flex items-center justify-center">
              <Image src="/img/sy2.png" alt="Réduction" width={56} height={56} />
            </div>
            <p className="text-[9px] md:text-[15px] text-gray-700 leading-snug">
              <span className="font-bold text-black">Réduction</span> <br />de l&apos;inflammation
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center text-center px-2 md:px-4 max-md:border-r max-md:border-pink-300">
            <div className="md:h-16 md:w-16 h-9 w-9 mb-4 flex items-center justify-center">
              <Image src="/img/sy3.png" alt="Protection" width={56} height={56} />
            </div>
            <p className="text-[9px] md:text-[15px] text-gray-700 leading-snug">
              <span className="font-bold text-black">Protection</span> <br />durable
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center text-center px-2 md:px-4">
            <div className="md:h-16 md:w-16 h-10 w-10 mb-4 flex items-center justify-center">
              <Image src="/img/sy4.png" alt="Équilibre" width={56} height={56} />
            </div>
            <p className="text-[9px] md:text-[15px] text-gray-700 leading-snug">
              <span className="font-bold text-black">Équilibre</span> du <br />microbiome <br />cutané
            </p>
          </div>
        </div>
      </div>

      {/* Footer Breakdown Text */}
      <div className="text-center max-w-4xl mx-auto md:text-[15px] text-[14px] leading-relaxed text-gray-800">
        <p>
          Les formules reposent sur une sélection d&apos;actifs ciblés, choisis en fonction des besoins spécifiques de la peau. Pour les{' '}
          <span className="bg-[#ffdec2] px-1 rounded-sm text-black">taches pigmentaires</span>
          , des ingrédients reconnus tels que l&apos;acide tranexamique, l&apos;alpha-arbutine et les AHA contribuent à unifier et illuminer le teint.{' '}
          <span className="bg-[#a8efa6] px-1 rounded-sm text-black">Les imperfections</span>{' '}
          sont prises en charge grâce à des actifs régulateurs comme la niacinamide et le zinc, qui aident à purifier et apaiser la peau. Enfin, pour{' '}
          <span className="bg-[#c2e2ff] px-1 rounded-sm text-black">la déshydratation</span>
          , l&apos;acide hyaluronique apporte une hydratation intense et durable, tout en améliorant le confort cutané.
        </p>
      </div>
    </section>
  );
}