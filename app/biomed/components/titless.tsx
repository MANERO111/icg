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
          Une gamme dentaire professionnelle conçue pour offrir blancheur, fraîcheur et protection au quotidien.
        </p>
        <p>
          Biomed propose des soins dentaires efficaces qui allient technologie avancée et expérience sensorielle pour un sourire éclatant et une haleine fraîche durable.
        </p>
      </div>

      {/* Core Technology Section */}
      <div className="text-center max-w-4xl mx-auto mb-10">

      </div>
    {/* Row 2: Mission Text (Left) & Handing Bottle Image (Right) */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="space-y-1 ml-10 order-2 md:order-1 md:pr-8">
            <h2 className="text-xl font-bold uppercase tracking-wider mb-6  text-black">
                Une technologie avancée pour une efficacité visible
            </h2>
            <p className='text-[17px] leading-relaxed text-gray-900 mb-4'>

              Biomed repose sur des technologies innovantes permettant d’améliorer l’hygiène bucco-dentaire tout en respectant l’émail et les gencives. <br />
              Les formules sont conçues pour éliminer les impuretés, améliorer la blancheur et protéger les dents.
            </p>
            </div>
            <div className="w-full h-80 overflow-hidden rounded-2xl shadow-sm order-1 md:order-2">
            <Image
                src="/img/titless.png" // Replace with your second image from image_3d5157.png
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