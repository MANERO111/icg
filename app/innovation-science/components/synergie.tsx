import Image from "next/image";

export default function SynergieSection() {
    return (
        <section className="w-full bg-white py-16 px-4 md:px-12 lg:px-24">
            {/* Top divider */}
            <div className="flex justify-center mb-12">
                <div className="w-3xl h-0.5 bg-gray-500" />
            </div>
            {/* Header */}
            <div className="text-center mb-12 max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-semibold text-[#e0296a] uppercase tracking-tight mb-5">
                    Synergie Dermatech
                </h2>
                <p className="text-gray-800 text-base md:text-2xl leading-relaxed">
                    Synergie Dermatech traduit une approche fondée sur la complémentarité intelligente entre actifs,
                    technologie, expertise et lecture fine du besoin cutané. L’objectif est de proposer des soins qui ne se contentent pas d’exister
                    sur le marché, mais qui répondent réellement à une problématique donnée avec précision et cohérence.

                </p>
            </div>

            {/* Content: text left, image right */}
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-[93%] mx-auto">
                {/* Left: Text */}
                <div className="flex-1 text-gray-900 text-2xl leading-8 space-y-5 text-justify">
                    <p>
                        Cette logique de synergie permet d’ancrer la performance produit dans une vision globale
                         : formuler mieux, expliquer mieux, accompagner mieux.
                    </p>
                </div>

                {/* Right: Image */}
                <div className="flex-1 w-full">
                    <div className="relative w-full h-96 md:h-96 rounded-2xl overflow-hidden shadow-md">
                        {/* Replace src with your actual image path */}
                        <Image
                            src="/img/innov_duplicated_pic.png"
                            alt="Nos Laboratoires"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}