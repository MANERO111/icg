import React from 'react';
import Image from 'next/image';

export default function AlfadermSection() {
    return (
        <section className="bg-white text-[#111111] font-sans px-4 py-16 max-w-7xl mx-auto selection:bg-green-100">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 text-[18px] leading-relaxed text-gray-900 text-justify">
                <p>
                    Alfaderm est une gamme de compléments alimentaires innovants, conçus pour nourrir le corps en profondeur et améliorer durablement la qualité de la peau, des cheveux et des ongles.
                </p>
                <p>
                    Grâce à une synergie d’actifs naturels et essentiels, la marque agit au cœur des cellules pour renforcer, protéger et sublimer la beauté naturelle, chez la femme comme chez l’homme.
                </p>
            </div>
            {/* ==========================================
          TOP SECTION: UNE SYNERGIE D'ACTIFS
         ========================================== */}
            <div className="bg-[#f8f9fa] rounded-2xl p-8 mb-16 border border-gray-100">
                <div className="text-center mb-10">
                    <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-black uppercase mb-2">
                        Une Synergie d&apos;Actifs Essentiels
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base">
                        Les formules Alfaderm associent des ingrédients reconnus pour leur efficacité
                    </p>
                </div>

                {/* 6-Column Grid for Ingredients */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-gray-200/60">

                    {/* Actif 1 */}
                    <div className="flex flex-col items-center p-2 pt-4 lg:pt-2">
                        <div className="relative w-24 h-24 mb-4">
                            <Image src="/img/alfas1.png" alt="Acide Hyaluronique" fill className="object-cover rounded-full" />
                        </div>
                        <h3 className="font-bold text-sm uppercase tracking-tight text-gray-900 mb-1 leading-tight h-8 flex items-center justify-center">
                            Acide Hyaluronique
                        </h3>
                        <p className="text-[13px] text-gray-800 leading-normal max-w-[160px]">
                            Hydrate intensément et améliore l&apos;élasticité de la peau
                        </p>
                    </div>

                    {/* Actif 2 */}
                    <div className="flex flex-col items-center p-2 pt-4 lg:pt-2">
                        <div className="relative w-24 h-24 mb-4">
                            <Image src="/img/alfas2.png" alt="Vitamine C" fill className="object-cover rounded-full" />
                        </div>
                        <h3 className="font-bold text-sm uppercase tracking-tight text-gray-900 mb-1 leading-tight h-8 flex items-center justify-center">
                            Vitamine C
                        </h3>
                        <p className="text-[13px] text-gray-800 leading-normal max-w-[160px]">
                            stimule le collagène et protège du vieillissement
                        </p>
                    </div>

                    {/* Actif 3 */}
                    <div className="flex flex-col items-center p-2 pt-4 lg:pt-2">
                        <div className="relative w-24 h-24 mb-4 bg-[#eaeaf6] rounded-full">
                            
                        </div>
                        <h3 className="font-bold text-sm uppercase tracking-tight text-gray-900 mb-1 leading-tight h-8 flex items-center justify-center">
                            Biotine (Vit B7)
                        </h3>
                        <p className="text-[13px] text-gray-800 leading-normal max-w-[160px]">
                            favorise la croissance des cheveux et des ongles
                        </p>
                    </div>

                    {/* Actif 4 */}
                    <div className="flex flex-col items-center p-2 pt-4 lg:pt-2">
                        <div className="relative w-24 h-24 mb-4">
                            <Image src="/img/alfas3.png" alt="Zinc" fill className="object-cover rounded-full" />
                        </div>
                        <h3 className="font-bold text-sm uppercase tracking-tight text-gray-900 mb-1 leading-tight h-8 flex items-center justify-center">
                            Zinc
                        </h3>
                        <p className="text-[13px] text-gray-800 leading-normal max-w-[160px]">
                            régule le sébum et renforce cheveux et ongles
                        </p>
                    </div>

                    {/* Actif 5 */}
                    <div className="flex flex-col items-center p-2 pt-4 lg:pt-2">
                        <div className="relative w-24 h-24 mb-4">
                            <Image src="/img/alfas4.png" alt="Sélénium" fill className="object-cover rounded-full" />
                        </div>
                        <h3 className="font-bold text-sm uppercase tracking-tight text-gray-900 mb-1 leading-tight h-8 flex items-center justify-center">
                            Sélénium
                        </h3>
                        <p className="text-[13px] text-gray-800 leading-normal max-w-[160px]">
                            puissant antioxydant
                        </p>
                    </div>

                    {/* Actif 6 */}
                    <div className="flex flex-col items-center p-2 pt-4 lg:pt-2">
                        <div className="relative w-24 h-24 mb-4">
                            <Image src="/img/alfas5.png" alt="Fer" fill className="object-cover rounded-full" />
                        </div>
                        <h3 className="font-bold text-sm uppercase tracking-tight text-gray-900 mb-1 leading-tight h-8 flex items-center justify-center">
                            Fer
                        </h3>
                        <p className="text-[13px] text-gray-800 leading-normal max-w-[160px]">
                            améliore l&apos;oxygénation cellulaire
                        </p>
                    </div>

                </div>
            </div>

            {/* ==========================================
          PRODUCT ROWS SECTION
         ========================================== */}
            <div className="space-y-16">

                {/* ROW 1: EXPERT BEAUTÉ (Image Left, Text Right) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                        <Image
                            src="/img/alfa_p1.png"
                            alt="Expert Beauté - 3 en 1"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-4 px-2">
                        <h3 className="text-2xl font-bold text-[#2e7d32] uppercase tracking-wide">
                            Expert Beauté – 3 en 1
                        </h3>
                        <p className="text-sm sm:text-lg text-gray-900 leading-relaxed font-normal text-justify">
                            Un complément alimentaire complet conçu pour améliorer la qualité de la peau, renforcer les cheveux et solidifier les ongles. Une solution quotidienne pensée pour révéler une beauté visible de l&apos;intérieur.
                        </p>
                    </div>
                </div>

                {/* ROW 2: EXPERT ÉNERGIE 5G (Text Left, Image Right) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* On mobile, we use visual order utilities to put the image on top if desired, or let text stay on top. Here text stays first on mobile. */}
                    <div className="space-y-4 px-2 order-2 md:order-1">
                        <h3 className="text-2xl font-bold text-[#e53935] uppercase tracking-wide">
                            Expert Énergie 5G
                        </h3>
                        <p className="text-sm sm:text-lg text-gray-700 leading-relaxed font-normal text-justify">
                            Une formule ciblée pour les personnes en manque d&apos;énergie, conçue pour réduire la fatigue, améliorer les performances physiques et mentales, et booster la vitalité ainsi que la libido. Elle repose sur une synergie d&apos;actifs naturels tels que le <span className="font-bold text-black">ginseng, la maca, le guarana, la vitamine C et l&apos;ashwagandha</span>, offrant une approche complète avec 5 composants pour 5 actions dédiées à l&apos;énergie globale.
                        </p>
                    </div>
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md order-1 md:order-2">
                        <Image
                            src="/img/alfa_p2.png"
                            alt="Expert Énergie 5G"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* ROW 3: ROLL-ON PEAU SENSIBLE (Image Left, Text Right) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                        <Image
                            src="/img/alfa_p3.png"
                            alt="Roll-On Peau Sensible"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-4 px-2">
                        <h3 className="text-2xl font-bold text-[#c5a059] uppercase tracking-wide">
                            Roll-On Peau Sensible
                        </h3>
                        <p className="text-sm sm:text-lg text-gray-700 leading-relaxed font-normal text-justify">
                            Un soin quotidien doux et efficace conçu pour neutraliser les odeurs tout en apaisant et purifiant la peau. Sa formule sans alcool, enrichie en actifs apaisants et purifiants, respecte les peaux sensibles et procure une sensation de fraîcheur durable tout au long de la journée.
                        </p>
                    </div>
                </div>

            </div>

        </section>
    );
}