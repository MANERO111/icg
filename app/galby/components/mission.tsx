import Image from 'next/image';

export default function GalbyMissionApproach() {
  return (
    <section className="bg-white  px-4 max-w-7xl mx-auto font-sans text-[#1a1a1a]">
      {/* Top Split: Eye Image & Mission Text */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div className="w-full h-80 overflow-hidden rounded-2xl shadow-sm">
          <Image
            src="/img/mission_pic.jpg" // Replace with your main eye image from image_4a0f24.png
            alt="Galby Dermatech Eye"
            width={800}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-3 md:pl-6">
          <h2 className="text-xl font-bold uppercase tracking-wider text-black">
            MISSION
          </h2>
          <p className="text-[16px] leading-relaxed text-gray-900">
            Apporter des soins dermocosmétiques haute performance qui soignent, rééquilibrent, nourrissent, protègent la peau , tout en respectant son écosystème naturel.
          </p>
        </div>
      </div>

      {/* Bottom Container: Complete Approach Card */}
      <div className="bg-[#f9fafc] rounded-3xl mb-10 p-10 md:p-14 text-center">
        <div className="mb-12">
          <h2 className="text-xl font-bold uppercase tracking-wide text-black mb-2">
            UNE APPROCHE DERMOCOSMÉTIQUE COMPLÈTE
          </h2>
          <p className="text-[17px] text-gray-600">
            Galby Dermatech repose sur 3 piliers essentiels
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 max-w-4xl mx-auto">
          {/* Pillar 1: La Science */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-[#ebeeef] flex items-center justify-center mb-5">
              <Image 
                src="/img/mis1.png" // Replace with your science PNG icon
                alt="La Science" 
                width={50} 
                height={50} 
              />
            </div>
            <h3 className="text-[17px] font-bold uppercase tracking-wide text-black mb-2">
              LA SCIENCE
            </h3>
            <p className="text-[16px] text-gray-900 leading-relaxed max-w-[200px]">
              Résultats visibles et durables
            </p>
          </div>

          {/* Pillar 2: L'Innovation */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-[#ebeeef] flex items-center justify-center mb-5">
              <Image 
                src="/img/mis2.png" // Replace with your innovation PNG icon
                alt="L'Innovation" 
                width={50} 
                height={50} 
              />
            </div>
            <h3 className="text-[17px] font-bold uppercase tracking-wide text-black mb-2">
              L&apos;INNOVATION
            </h3>
            <p className="text-[16px] text-gray-900 leading-relaxed max-w-[200px]">
              Soins précis sans compromis
            </p>
          </div>

          {/* Pillar 3: Le Bien-Être */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-[#ebeeef] flex items-center justify-center mb-5">
              <Image 
                src="/img/mis3.png" // Replace with your bien-être PNG icon
                alt="Le Bien-Être" 
                width={50} 
                height={50} 
              />
            </div>
            <h3 className="text-[17px] font-bold uppercase tracking-wide text-black mb-2">
              LE BIEN-ÊTRE
            </h3>
            <p className="text-[16px] text-gray-900 leading-relaxed max-w-[200px]">
              Respect de l'équilibre de la peau
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}