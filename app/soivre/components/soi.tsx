import Image from 'next/image';

export default function DermaTechSynergy() {
  return (
    <section className="bg-white py-6 px-4 max-w-6xl mx-auto font-sans text-[#1a1a1a]">
      {/* Header Logo Area */}
      <div className="flex justify-center items-center mb-10">
        <h1 className="text-6xl  font-semibold  mb-4 text-[#bd8784]" style={{fontFamily:'caveat'}}    
        >
           Soi Vrai
        </h1>
      </div>

      {/* Intro Grid */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 text-[18px] leading-relaxed text-gray-900 text-justify">
        <p>
          Une marque dermocosmétique espagnole qui allie actifs naturels et technologies de pointe pour offrir des soins efficaces, sûrs et respectueux de la peau.
        </p>
        <p>
          plus de 30 ans, Soivre développe des formules innovantes, conçues en collaboration avec des dermatologues et des pharmaciens afin de garantir efficacité, tolérance et sécurité. 
        </p>
      </div>

      {/* Core Technology Section */}
      <div className="text-center max-w-4xl mx-auto mb-10">
        {/* <h2 className="text-xl font-bold tracking-wider uppercase mb-4 text-black">
          Une technologie au cœur de la performance
        </h2> */}
        <p className="text-[17px] leading-relaxed text-gray-900 ">
          Grâce à cette expertise scientifique, la marque propose des soins adaptés aux besoins spécifiques de tous les types de peau et de cheveux, en alliant naturalité, performance et respect de l’équilibre cutané et capillaire. Chaque produit est pensé pour offrir des résultats visibles tout en s’inscrivant dans une approche moderne du soin, centrée sur le bien-être et la confiance du consommateur.
        </p>
        {/* <p className="text-[17px] leading-relaxed text-gray-900">
          Il agit au cœur de la peau pour :
        </p> */}
      </div>
    {/* Row 2: Mission Text (Left) & Handing Bottle Image (Right) */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="space-y-1 ml-10 order-2 md:order-1 md:pr-8">
            <h2 className="text-xl font-bold uppercase tracking-wider mb-2 text-black">
                L’alliance des actifs naturels et de la technologie
            </h2>
            <p className="text-[16px]  text-gray-800 max-w-xl">
                Les soins Soivre sont formulés avec des ingrédients d’origine <br /> naturelle, combinés à des technologies avancées pour garantir <br /> efficacité et sécurité. <br /> <br />

                Les formules sont pensées pour respecter l’équilibre naturel de<br /> la peau, offrir des résultats visibles et minimiser  les risques liés <br /> aux ingrédients agressifs.

            </p>
            </div>
            <div className="w-full h-80 overflow-hidden rounded-2xl shadow-sm order-1 md:order-2">
            <Image
                src="/img/soi.png" // Replace with your second image from image_3d5157.png
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