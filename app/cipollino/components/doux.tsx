import Image from 'next/image';

export default function DermaTechSynergy() {
  return (
    <section className="bg-white py-6 px-4 max-w-6xl mx-auto font-sans text-[#1a1a1a]">
      {/* Header Logo Area */}
      <div className="flex justify-center items-center mb-10">
        <h1 className="text-6xl font-light mb-4 text-[#6db76e]" style={{fontFamily : "allura"}}
        >
           Doux comme les caresses des mamans
        </h1>
      </div>

      {/* Intro Grid */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 text-[18px] leading-relaxed text-gray-900 text-justify">
        <p>
          Des soins naturels et sûrs conçus pour protéger, apaiser et accompagner la peau délicate des bébés et des enfants.
        </p>
        <p>
          Cipollino transforme chaque moment de soin en un instant de douceur, de sécurité et de complicité entre parents et enfants.
        </p>
      </div>

      {/* Core Technology Section */}
      <div className="text-center max-w-4xl mx-auto mb-10">

      </div>
    {/* Row 2: Mission Text (Left) & Handing Bottle Image (Right) */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="space-y-1 ml-10 order-2 md:order-1 md:pr-8">
            <h2 className="text-xl font-bold uppercase tracking-wider mb-2  text-black">
                Des formules douces adaptées aux peaux les plus sensibles
            </h2>
            <p className='text-[17px] leading-relaxed text-gray-900 mb-4'>

              Cipollino développe des soins spécialement conçus pour respecter la peau fragile des bébés et des enfants.
            </p>
            <h4 className='text-[17px] font-semibold leading-relaxed  text-gray-900 '>

                Les formules sont pensées pour :
            </h4>
            <ul className={`list-disc pl-5 space-y-2 text-[17px] leading-relaxed text-gray-900`}>
              <li>  protéger la barrière cutanée</li>
              <li>  limiter les réactions et irritations</li>
              <li>  garantir une tolérance maximale dès la naissance</li>
            </ul>
            </div>
            <div className="w-full h-80 overflow-hidden rounded-2xl shadow-sm order-1 md:order-2">
            <Image
                src="/img/doux.png" // Replace with your second image from image_3d5157.png
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