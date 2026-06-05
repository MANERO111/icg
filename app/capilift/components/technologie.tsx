import React from 'react';
import Image from 'next/image';

export default function CapiliftSection() {
  return (
    <section className="bg-white text-[#111111] font-sans px-4 py-16 max-w-6xl mx-auto selection:bg-purple-200">
      
      {/* ==========================================
          HEADER SECTION
         ========================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-md sm:text-md text-gray-900 leading-relaxed">
        <div>
          <p >
            Capilift est une marque experte en soins capillaires qui cible deux besoins essentiels :
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>la chute des cheveux</li>
            <li>la coloration sans compromis sur la santé capillaire</li>
          </ul>
        </div>
        <div>
          <p>
            Grâce à des technologies avancées comme <span className="font-bold text-black">ADN moléculaire et V-PLEX + Arginine</span>, Capilift agit en profondeur pour renforcer, protéger et sublimer les cheveux.
          </p>
        </div>
      </div>

      {/* ==========================================
          TECHNOLOGY SECTION (3 Cards)
         ========================================== */}
      <div className="text-center mb-10">
        <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mb-2 uppercase">
          Une Technologie Ciblée et Performante
        </h2>
        <p className="text-gray-900 text-sm sm:text-base max-w-3xl mx-auto">
          Capilift repose sur des actifs puissants pour traiter les problématiques capillaires à la racine :
        </p>
      </div>

      {/* 3-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        
        {/* Card 1: ADN Moléculaire */}
        <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black text-white p-6 flex flex-col justify-between group shadow-xl">
          <Image 
            src="/img/technologie.png" 
            alt="ADN Moléculaire + Tripeptides" 
            fill
            className="object-cover object-center opacity-90 group-hover:scale-105 transition-transform duration-500"
            priority
          />
          <div className="relative z-10">
            <h3 className="font-bold text-lg sm:text-xl tracking-tight">ADN Moléculaire + Tripeptides</h3>
          </div>
          <div className="relative z-10 text-xs sm:text-sm text-gray-300 space-y-1 pl-2 border-l border-purple-500/40">
            <p>• stimule les follicules pileux</p>
            <p>• favorise la repousse</p>
            <p>• améliore la densité capillaire</p>
          </div>
        </div>

        {/* Card 2: HeraVitx5 */}
        <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black text-white p-6 flex flex-col justify-between group shadow-xl">
          <Image 
            src="/img/technologie2.png" 
            alt="HeraVitx5 + Niacinamide" 
            fill
            className="object-cover object-center opacity-90 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="relative z-10">
            <h3 className="font-bold text-lg sm:text-xl tracking-tight">HeraVitx5 + Niacinamide</h3>
          </div>
          <div className="relative z-10 text-xs sm:text-sm text-gray-300 space-y-1 pl-2 border-l border-blue-500/40">
            <p>• renforce le cuir chevelu</p>
            <p>• réduit les inflammations</p>
            <p>• améliore l'hydratation</p>
          </div>
        </div>

        {/* Card 3: V-PLEX */}
        <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black text-white p-6 flex flex-col justify-between group shadow-xl">
          <Image 
            src="/img/technologie3.png" 
            alt="V-PLEX + Arginine" 
            fill
            className="object-cover object-center opacity-90 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="relative z-10">
            <h3 className="font-bold text-lg sm:text-xl tracking-tight">V-PLEX + Arginine</h3>
          </div>
          <div className="relative z-10 text-xs sm:text-sm text-gray-300 space-y-1 pl-2 border-l border-cyan-500/40">
            <p>• protège la fibre capillaire</p>
            <p>• renforce le cheveu</p>
            <p>• protège pendant la coloration</p>
          </div>
        </div>

      </div>

      {/* ==========================================
          ROUTINE SECTION (2 Large Cards)
         ========================================== */}
      <div className="text-center mb-10">
        <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black uppercase">
          Une Routine Simple et Efficace
        </h2>
      </div>

      {/* 2-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Anti-Chute Card */}
        <div className="relative rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[1/1] md:aspect-[4/5] lg:aspect-[1/1] bg-[#0b0518] text-white p-8 flex flex-col justify-between shadow-2xl">
          <Image 
            src="/img/antichute.png" 
            alt="Gamme Anti-Chute" 
            fill
            className="object-cover object-bottom"
          />
          <div className="relative z-10 max-w-xl">
            <h3 className="font-semibold text-2xl sm:text-3xl tracking-wide uppercase mb-3">
              Anti-Chute
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              cette gamme offre une réduction efficace de la chute des cheveux tout en renforçant la résistance des follicules. elle favorise également la repousse de nouveaux cheveux, pour une chevelure visiblement plus dense et plus volumineuse.
            </p>
          </div>
          {/* Empty div to balance flex layout, ensuring content stays at top while image is at bottom */}
          <div></div>
        </div>

        {/* Coloration Protectrice Card */}
        <div className="relative rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[1/1] md:aspect-[4/5] lg:aspect-[1/1] bg-[#0d0d11] text-white p-8 flex flex-col justify-between shadow-2xl">
          <Image 
            src="/img/coloration.png" 
            alt="Gamme Coloration Protectrice" 
            fill
            className="object-cover object-bottom"
          />
          <div className="relative z-10 max-w-xl">
            <h3 className="font-semibold text-2xl sm:text-3xl tracking-wide uppercase mb-3">
              Coloration Protectrice
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              cette gamme assure une couvrance parfaite des cheveux blancs tout en offrant une couleur intense, lumineuse et durable. elle nourrit la fibre capillaire pour des cheveux plus doux et brillants, tout en protégeant efficacement le cuir chevelu.
            </p>
          </div>
          <div></div>
        </div>

      </div>

    </section>
  );
}