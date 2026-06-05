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
            Clearé Institute est une marque spécialisée dans la coloration capillaire nouvelle génération, qui associe performance colorante, douceur extrême et respect du cheveu.
          </p>
        </div>
        <div>
          <p>
            Grâce à des formules innovantes, la marque permet d’obtenir une couleur intense et durable, tout en préservant l’équilibre du cuir chevelu et la santé de la fibre capillaire.
          </p>
        </div>
      </div>

      {/* ==========================================
          TECHNOLOGY SECTION (3 Cards)
         ========================================== */}
      <div className="text-center mb-10">
        <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black mb-2 uppercase">
           Une technologie douce et performante
        </h2>
        <p className="text-gray-900 text-sm sm:text-base max-w-3xl mx-auto">
          Clearé Institute repose sur une approche scientifique avancée permettant de colorer efficacement tout en respectant la structure du cheveu.
        </p>
      </div>

      {/* 3-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        
        {/* Card 1: ADN Moléculaire */}
        <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black text-white p-6 flex flex-col justify-between group shadow-xl">
          <Image 
            src="/img/technologie4.png" 
            alt="ADN Moléculaire + Tripeptides" 
            fill
            className="object-cover object-bottom opacity-90 group-hover:scale-105 transition-transform duration-500"
            priority
          />
          <div className="relative z-10">
            <h3 className="font-bold text-lg sm:text-xl tracking-tight">Technologie MEA</h3>
          </div>
          <div className="relative z-10 text-xs sm:text-sm text-gray-300 space-y-1 pl-2 border-l border-purple-500/40">
            <p>Ouvre les cuticules en douceur</p>
            <p>Permet la fixation des pigments</p>
            <p>Réduit l’agression du cuir chevelu</p>
            <p>Évite les odeurs fortes</p>
          </div>
        </div>

        {/* Card 2: HeraVitx5 */}
        <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black text-white p-6 flex flex-col justify-between group shadow-xl">
          <Image 
            src="/img/technologie5.png" 
            alt="HeraVitx5 + Niacinamide" 
            fill
            className="object-cover object-bottom opacity-90 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="relative z-10">
            <h3 className="font-bold text-lg sm:text-xl tracking-tight">Micropigments purs intensifs</h3>
          </div>
          <div className="relative z-10 text-xs sm:text-sm text-gray-300 space-y-1 pl-2 border-l border-blue-500/40">
            <p>• Couleur éclatante et homogène</p>
            <p>Couverture 100% des cheveux blancs</p>
            <p>• Résultat longue durée</p>
          </div>
        </div>

        {/* Card 3: V-PLEX */}
        <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black text-white p-6 flex flex-col justify-between group shadow-xl">
          <Image 
            src="/img/technologie6.png" 
            alt="V-PLEX + Arginine" 
            fill
            className="object-cover object-bottom opacity-90 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="relative z-10">
            <h3 className="font-bold text-lg sm:text-xl tracking-tight">Formule enrichie</h3>
          </div>
          <div className="relative z-10 text-xs sm:text-sm text-gray-300 space-y-1 pl-2 border-l border-cyan-500/40">
            <p>•Acides aminés → reconstruction de la fibre</p>
            <p>•Protéines → renforcement</p>
            <p>•Huiles végétales → nutrition</p>
            <p>•Extraits botaniques → apaisement</p>
          </div>
        </div>

      </div>

      {/* ==========================================
          ROUTINE SECTION (2 Large Cards)
         ========================================== */}
      <div className="text-center mb-10">
        <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black uppercase">
          Une routine complète pour une couleur parfaite
        </h2>
      </div>

      {/* 2-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Anti-Chute Card */}
        <div className="relative rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[1/1] md:aspect-[4/5] lg:aspect-[1/1] bg-[#0b0518] text-white p-8 flex flex-col justify-between shadow-2xl">
          <Image 
            src="/img/technologie7.png" 
            alt="Gamme Anti-Chute" 
            fill
            className="object-cover object-bottom"
          />
          <div className="relative z-10 max-w-xl">
            <h3 className="font-semibold text-2xl sm:text-3xl tracking-wide uppercase mb-3">
              COLORATION PERMANENTE SANS AMMONIAQUE
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              Cette gamme offre une couverture parfaite des cheveux blancs avec une couleur intense, lumineuse et durable. Elle respecte la fibre capillaire tout en protégeant et apaisant le cuir chevelu, pour un résultat naturel sans effet agressif.
            </p>
          </div>
          {/* Empty div to balance flex layout, ensuring content stays at top while image is at bottom */}
          <div></div>
        </div>

        {/* Coloration Protectrice Card */}
        <div className="relative rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[1/1] md:aspect-[4/5] lg:aspect-[1/1] bg-[#0d0d11] text-white p-8 flex flex-col justify-between shadow-2xl">
          <Image 
            src="/img/technologie8.png" 
            alt="Gamme Coloration Protectrice" 
            fill
            className="object-cover object-bottom"
          />
          <div className="relative z-10 max-w-xl">
            <h3 className="font-semibold text-2xl sm:text-3xl tracking-wide uppercase mb-3">
              SÉRUM SPRAY POST-COLORATION 
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              Cette gamme répare les cheveux abîmés tout en prolongeant la tenue de la couleur. Elle protège efficacement la fibre capillaire contre les agressions extérieures, notamment les UV, et augmente son hydratation jusqu’à +27 %, pour des cheveux plus doux, brillants et visiblement revitalisés.
            </p>
          </div>
          <div></div>
        </div>

      </div>

    </section>
  );
}