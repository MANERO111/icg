import Image from 'next/image';

export default function DermaTechSynergy() {
    return (
        <section className="bg-white py-6 px-4 max-w-6xl mx-auto font-sans text-[#1a1a1a]">
            {/* Header Logo Area */}

            {/* Intro Grid */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 text-[18px] leading-relaxed text-gray-900 text-justify">
                <p>
                    Reistill Milano est une marque de soins capillaires professionnels inspirée du savoir-faire italien, qui associe innovation scientifique et richesse des actifs naturels pour offrir des solutions complètes adaptées à tous les types de cheveux.
                </p>
                <p>
                    Développée avec une approche moderne du soin, la marque conçoit des formules performantes qui respectent l’équilibre du cuir chevelu tout en améliorant visiblement la qualité de la fibre capillaire. Grâce à une sélection rigoureuse d’ingrédients et à une expertise avancée, Reistill propose une expérience capillaire à la fois efficace, sensorielle et durable.
                </p>
            </div>

            {/* Core Technology Section */}
            <div className="text-center max-w-5xl mx-auto mb-10">
                <h2 className="text-xl font-bold tracking-wider uppercase  text-black">
                    NOTRE EXPERTISE SCIENTIFIQUE
                </h2>
                <p className="text-[17px] leading-relaxed text-gray-900  ">
                    Reistill s’appuie sur une technologie avancée basée sur la synergie entre protéines et extraits végétaux pour agir au cœur de la fibre capillaire.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
                <div className="space-y-1 ml-10 order-2 md:order-1 md:pr-8">
                    <h2 className="text-xl font-bold uppercase tracking-wider mb-2  text-black">
                        Silk Protein Complex (Protéines de soie)
                    </h2>

                    <h4 className='text-[17px] font-semibold leading-relaxed text-gray-900 '>

                        Une technologie clé qui permet de :
                    </h4>
                    <ul className={`list-disc pl-5 space-y-2 text-[17px] leading-relaxed text-gray-900`}>
                        ✔  Renforcer la structure du cheveu <br />
                        ✔  Restaurer l’hydratation naturelle <br />
                        ✔  Améliorer la douceur et la brillance <br />
                        ✔  Protéger contre les agressions extérieures <br />
                    </ul>
                </div>
                <div className="w-full h-80 overflow-hidden rounded-2xl shadow-sm order-1 md:order-2">
                    <Image
                        src="/img/expertise1.png" // Replace with your second image from image_3d5157.png
                        alt="Passing skincare bottle"
                        width={600}
                        height={300}
                        className="w-full h-full object-cover object-right"
                    />
                </div>

            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
                <div className="w-full h-130 overflow-hidden rounded-2xl shadow-sm">
                <Image
                    src="/img/actifs.png" // Replace with your main eye image from image_4a0f24.png
                    alt="Galby Dermatech Eye"
                    width={800}
                    height={300}
                    className="w-full h-full object-cover"
                />
                </div>
                <div className="space-y-3 md:pl-6">
                <h2 className="text-xl font-bold uppercase tracking-wider text-black">
                    ACTIFS & BÉNÉFICES
                </h2>
                <p className="text-[16px] leading-relaxed text-black">
                    Les formules Reistill intègrent des actifs naturels puissants, soigneusement sélectionnés pour leur efficacité. Les huiles végétales, comme l’argan et l’amande douce, apportent nutrition et protection à la fibre capillaire, tout en préservant sa souplesse et sa vitalité. <br /> <br />
                    Les extraits botaniques, tels que le thé vert, le romarin et la menthe, contribuent à purifier le cuir chevelu et à rétablir son équilibre naturel. <br /> <br />
                    Les protéines et acides aminés jouent un rôle essentiel dans la réparation et le renforcement des cheveux, en améliorant leur résistance et leur structure. <br /> <br />
                    Enfin, les fruits et plantes comme la framboise, la vigne rouge et le cassis offrent une action protectrice tout en apportant éclat et luminosité à la chevelure. <br /> <br />
                </p>
                </div>
            </div>
        </section>
    );
}