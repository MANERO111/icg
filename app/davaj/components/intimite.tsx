import Image from 'next/image';

export default function DermaTechSynergy() {
  return (
    <section className="bg-white py-6 px-4 max-w-6xl mx-auto font-sans text-[#1a1a1a]">
      {/* Header Logo Area */}
      <div className="flex justify-center items-center mb-10">
        <h1 className="text-6xl font-light mb-4 text-gray-600"    
        >
           Votre intimité mérite le meilleur
        </h1>
      </div>

      {/* Intro Grid */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 text-[18px] leading-relaxed text-gray-900 text-justify">
        <p>
          Des soins intimes dermatologiques conçus pour respecter le pH naturel, protéger le microbiome et garantir confort, fraîcheur et sécurité au quotidien.
        </p>
        <p>
          Développée en collaboration avec des gynécologues et des médecins, Davaj propose des solutions ciblées pour préserver l’équilibre et la santé de la zone intime.
        </p>
      </div>

      {/* Core Technology Section */}
      <div className="text-center max-w-4xl mx-auto mb-10">

      </div>
    {/* Row 2: Mission Text (Left) & Handing Bottle Image (Right) */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="space-y-1 ml-10 order-2 md:order-1 md:pr-8">
            <h2 className="text-xl font-bold uppercase tracking-wider mb-2  text-black">
                Une approche scientifique dédiée à la santé intime
            </h2>
            <p className='text-[17px] leading-relaxed text-gray-900 mb-2'>

              Davaj repose sur une expertise médicale avancée, avec des formules conçues pour respecter l’équilibre naturel de la zone intime
            </p>
            <h4 className='text-[17px] font-semibold leading-relaxed text-gray-900 '>

                Les soins agissent pour :
            </h4>
            <ul className={`list-disc pl-5 space-y-2 text-[17px] leading-relaxed text-gray-900`}>
              <li>  maintenir un pH physiologique adapté</li>
              <li>  préserver la flore intime</li>
              <li>  prévenir les déséquilibres et inconforts</li>
            </ul>
            </div>
            <div className="w-full h-80 overflow-hidden rounded-2xl shadow-sm order-1 md:order-2">
            <Image
                src="/img/intimite.png" // Replace with your second image from image_3d5157.png
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