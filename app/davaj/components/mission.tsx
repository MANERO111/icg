import Image from 'next/image';

export default function Mission() {
  return (
    <section className="bg-white py-16 px-4 max-w-7xl mx-auto font-sans text-[#1a1a1a]">
      
      {/* Row 1: Pink DNA Image (Left) & LE + List (Right) */}
      <div className="grid md:grid-cols-2 gap-8 items-center  mb-16">
        <div className="w-full h-92 overflow-hidden rounded-2xl shadow-sm">
          <Image
            src="/img/le8.png" // Replace with your first image from image_3d5157.png
            alt="DNA Concept Illustration"
            width={600}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-4 md:pl-24">
          <h2 className="text-2xl font-bold uppercase tracking-wider text-black">
            LE +
          </h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-[16px] text-gray-800">
              <Image src="/img/le1.png" alt="" width={30} height={30} className="object-contain" />
              <span>Développé avec gynécologues</span>
            </li>
            <li className="flex items-center gap-3 text-[16px] text-gray-800">
              <Image src="/img/le2.png" alt="" width={30} height={30} className="object-contain" />
              <span>pH équilibré selon usage</span>
            </li>
            <li className="flex items-center gap-3 text-[16px] text-gray-800">
              <Image src="/img/le3.png" alt="" width={30} height={30} className="object-contain" />
              <span>Respect du microbiome</span>
            </li>
            <li className="flex items-center gap-3 text-[16px] text-gray-800">
              <Image src="/img/le4.png" alt="" width={30} height={30} className="object-contain" />
              <span>Haute tolérance</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Row 2: Mission Text (Left) & Handing Bottle Image (Right) */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div className="space-y-1 ml-10 order-2 md:order-1 md:pr-8">
          <h2 className="text-3xl font-bold uppercase tracking-wider mb-2 text-black">
            MISSION
          </h2>
          <p className="text-[18px]  text-gray-800 max-w-xl">
            Offrir des soins intimes sûrs, efficaces et respectueux <br /> de l’équilibre biologique pour améliorer le confort et la <br /> santé au quotidien.
          </p>
        </div>
        <div className="w-full h-92 overflow-hidden rounded-2xl shadow-sm order-1 md:order-2">
          <Image
            src="/img/mission9.png" // Replace with your second image from image_3d5157.png
            alt="Passing skincare bottle"
            width={600}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Bottom Container: Complete and Balanced Approach */}
      <div className="bg-[#f9fafc] rounded-3xl p-10 md:p-14 text-center">
        <div className="mb-12">
          <h2 className="text-2xl font-bold uppercase tracking-wide text-black mb-2">
             Une approche intime experte et sécurisée
          </h2>
          <p className="text-[16px] text-gray-800">
            Davaj repose sur trois piliers fondamentaux :
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 max-w-4xl mx-auto">
          {/* Pillar 1: La Science */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-[#ebeeef] flex items-center justify-center mb-5">
              <Image 
                src="/img/mis1.png" // Replace with your flask PNG icon
                alt="La Science" 
                width={60} 
                height={60} 
              />
            </div>
            <h3 className="text-[16px] font-bold uppercase tracking-wide text-black mb-2">
                Science & médecine

            </h3>
            <p className="text-[15px] text-gray-800 leading-relaxed max-w-[240px]">
                développement avec <br /> experts de santé
            </p>
          </div>

          {/* Pillar 2: La Pureté */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-[#ebeeef] flex items-center justify-center mb-5">
              <Image 
                src="/img/poids.png" // Replace with your droplet PNG icon
                alt="La Pureté" 
                width={60} 
                height={60} 
              />
            </div>
            <h3 className="text-[16px] font-bold uppercase tracking-wide text-black mb-2">
             Équilibre & pH
            </h3>
            <p className="text-[15px] text-gray-800 leading-relaxed max-w-[240px]">
               respect du microbiome <br /> intime
            </p>
          </div>

          {/* Pillar 3: La Confiance */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-[#ebeeef] flex items-center justify-center mb-5">
              <Image 
                src="/img/securite.png" // Replace with your hands PNG icon
                alt="La Confiance" 
                width={60} 
                height={60} 
              />
            </div>
            <h3 className="text-[16px] font-bold uppercase tracking-wide text-black mb-2">
              Sécurité & pureté

            </h3>
            <p className="text-[15px] text-gray-800 leading-relaxed max-w-[240px]">
              formules propres et <br /> testées
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}