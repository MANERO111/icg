import Image from 'next/image';

export default function DermaTechSynergy() {
  return (
    <section className="bg-white py-6 px-4 max-w-6xl mx-auto font-sans text-[#1a1a1a]">
      {/* Header Logo Area */}
      <div className="flex justify-center items-center mb-10">
        {/* <h1 className="text-6xl font-light mb-4 text-[#6db76e]" style={{fontFamily : "allura"}}
        >
           Doux comme les caresses des mamans
        </h1> */}
      </div>

      {/* Intro Grid */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 text-[18px] leading-relaxed text-gray-900 text-justify">
        <p>
          Des soins innovants sous forme de poudre et de dentifrice, conçus pour répondre aux besoins spécifiques de la santé bucco-dentaire.
        </p>
        <p>
          DentYucral propose des solutions complètes pour nettoyer, protéger et améliorer l’hygiène bucco-dentaire, avec des formules adaptées à chaque besoin : fumeurs, blancheur et antiplaque
        </p>
      </div>

      {/* Core Technology Section */}
      <div className="text-center max-w-4xl mx-auto mb-10">

      </div>
    {/* Row 2: Mission Text (Left) & Handing Bottle Image (Right) */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="space-y-1 ml-10 order-2 md:order-1 md:pr-8">
            <h2 className="text-xl font-bold uppercase tracking-wider mb-6  text-black">
                Une technologie adaptée à chaque besoin bucco-dentaire
            </h2>
            <p className='text-[17px] leading-relaxed text-gray-900 mb-4'>

              DentYucral développe des soins spécifiques sous forme de poudre et de pâte pour agir efficacement sur les problématiques dentaires ciblées
            </p>
            <h4 className='text-[17px] font-semibold leading-relaxed  text-gray-900 '>

                Les formules sont conçues pour :
            </h4>
            <ul className={`list-disc pl-5 space-y-2 text-[17px] leading-relaxed text-gray-900`}>
              <li>  éliminer la plaque bactérienne</li>
              <li>  renforcer les dents</li>
              <li>  améliorer la santé des gencives</li>
              <li>  neutraliser la mauvaise haleine</li>
            </ul>
            </div>
            <div className="w-full h-80 overflow-hidden rounded-2xl shadow-sm order-1 md:order-2">
            <Image
                src="/img/titless2.png" // Replace with your second image from image_3d5157.png
                alt="Passing skincare bottle"
                width={600}
                height={300}
                className="w-full h-full object-cover object-right"
            />
            </div>
        </div>
    </section>
  );
}