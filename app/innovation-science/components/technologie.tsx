"use client";

import { useRef } from "react";

const technologies = [
    {
        title: "caviar & diamond fusion",
        description:
            "Une technologie premium associant l’extrait de caviar et des actifs illuminateurs inspirés du diamant pour offrir une expérience de soin luxueuse. Elle aide à nourrir intensément la peau, améliorer son éclat et révéler une apparence plus lisse et raffinée.",
        image: "/img/caviar.jpg",
        gradient: "from-teal-950/80 via-teal-900/40 to-transparent",
    },
    {
        title: "Microbiome-Tech",
        bold: "Tech",
        description:
            "une technologie avancée qui aide à préserver l'équilibre naturel du microbiome cutané grâce à l'association de prébiotiques et de postbiotiques. elle contribue à renforcer la barrière cutanée, limiter les déséquilibres et améliorer la tolérance de la peau, même sensible, tout en optimisant l'efficacité des soins.",
        image: "/img/microbiome.jpg", // replace with your image
        gradient: "from-blue-950/80 via-blue-900/40 to-transparent",
    },
    {
        title: "V-Plex & Arginine",
        description:
            "une technologie capillaire conçue pour renforcer la fibre capillaire, protéger les cheveux des agressions chimiques et améliorer leur résistance. l'arginine aide à revitaliser la fibre et à favoriser des cheveux plus forts, souples et éclatants.",
        image: "/img/vplex.jpg",
        gradient: "from-slate-950/80 via-slate-800/40 to-transparent",
    },
    {
        title: "ADN Moléculaire",
        description:
            "une technologie inspirée des mécanismes de réparation avancés, pensée pour aider à préserver la jeunesse et la vitalité de la fibre capillaire. elle contribue à renforcer les cheveux fragilisés, améliorer leur élasticité et protéger leur structure.",
        image: "/img/adn.jpg",
        gradient: "from-cyan-950/80 via-cyan-900/40 to-transparent",
    },
    {
        title: "Charbon Actif",
        description:
            "reconnu pour son pouvoir absorbant, le charbon actif aide à éliminer les impuretés, les taches superficielles et les résidus responsables du ternissement des dents. il contribue à une sensation de fraîcheur intense et à un sourire plus éclatant.",
        image: "/img/charbon.png",
        gradient: "from-zinc-950/80 via-zinc-800/40 to-transparent",
    },
    {
        title: "Synergie Complex Beauté & Énergie",
        description:
            "Une combinaison intelligente de nutriments, vitamines et actifs ciblés conçue pour soutenir la beauté globale et le bien-être quotidien. Cette synergie aide à améliorer l’éclat, renforcer la vitalité et accompagner les besoins énergétiques du corps.",
        image: "/img/synergie.png",
        gradient: "from-indigo-950/80 via-indigo-900/40 to-transparent",
    },
    {
        title: "TECHNOLOGIE MEA",
        description:
            "Une technologie de coloration avancée développée pour offrir une performance optimale tout en respectant la fibre capillaire. Elle contribue à une meilleure tenue de la couleur, une couvrance homogène et des cheveux plus doux et brillants après la coloration.",
        image: "/img/mea.png",
        gradient: "from-indigo-950/80 via-indigo-900/40 to-transparent",
    },
    {
        title: "SILK PROTEIN COMPLEX",
        description:
            "Un complexe enrichi en protéines de soie conçu pour lisser, protéger et sublimer la fibre capillaire. Il aide à améliorer la douceur, réduire les frisottis et apporter une brillance soyeuse aux cheveux.",
        image: "/img/silk.png",
        gradient: "from-indigo-950/80 via-indigo-900/40 to-transparent",
    },
];

// Placeholder gradient backgrounds used when no real image is available
const placeholderBg = [
    "bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-900",
    "bg-gradient-to-br from-gray-900 via-gray-700 to-slate-800",
    "bg-gradient-to-br from-cyan-900 via-teal-700 to-blue-900",
    "bg-gradient-to-br from-zinc-900 via-zinc-700 to-stone-900",
    "bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900",
    "bg-gradient-to-br from-teal-900 via-emerald-700 to-cyan-900",
];

export default function TechnologiesSection() {
    const scrollRef = useRef<HTMLDivElement>(null);

    // Mouse drag to scroll
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const onMouseDown = (e: React.MouseEvent) => {
        isDragging.current = true;
        startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
        scrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
        if (scrollRef.current) scrollRef.current.style.cursor = "grabbing";
    };

    const onMouseLeave = () => {
        isDragging.current = false;
        if (scrollRef.current) scrollRef.current.style.cursor = "grab";
    };

    const onMouseUp = () => {
        isDragging.current = false;
        if (scrollRef.current) scrollRef.current.style.cursor = "grab";
    };

    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - (scrollRef.current.offsetLeft ?? 0);
        const walk = (x - startX.current) * 1.5;
        scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };

    return (
        <section className="w-[90%] mx-auto  bg-white py-16 px-4 md:px-8 overflow-hidden">
            {/* Header */}
            <div className="text-center mb-10 mt-30 max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-semibold text-[#e0296a] uppercase tracking-tight mb-4">
                    Nos Technologies
                </h2>
                <p className="text-gray-900 text-base md:text-xl leading-relaxed">
                    L&apos;innovation chez ICG repose sur une lecture précise des besoins du
                    marché et sur l&apos;intégration de technologies capables d&apos;apporter une
                    valeur réelle aux produits. Notre approche ne consiste pas seulement à
                    suivre les tendances, mais à structurer des solutions crédibles,
                    différenciantes et performantes.
                </p>
            </div>

            {/* Subtitle */}
            <h3 className="text-center text-xl md:text-2xl font-medium tracking-[0.25em] text-gray-900 uppercase mb-8">
                Liste Technologies à Intégrer
            </h3>

            {/* Scrollable Cards */}
            <div
                ref={scrollRef}
                className="flex gap-5 overflow-x-auto scroll-smooth pb-4 px-2 md:px-4"
                style={{
                    cursor: "grab",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    WebkitOverflowScrolling: "touch",
                }}
                onMouseDown={onMouseDown}
                onMouseLeave={onMouseLeave}
                onMouseUp={onMouseUp}
                onMouseMove={onMouseMove}
            >
                {technologies.map((tech, index) => (
                    <div
                        key={index}
                        className="relative flex-shrink-0 w-64 md:w-72 h-[440px] rounded-2xl overflow-hidden select-none group"
                    >
                        {/* Background: placeholder gradient (replace with <Image> in production) */}
                        <div
                            className={`absolute inset-0 ${placeholderBg[index]} transition-transform duration-500 group-hover:scale-105`}
                            style={{ backgroundImage: `url(${tech.image})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
                        />

                        {/* Subtle noise texture overlay */}
                        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNuKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

                        {/* Dark gradient bottom overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                        {/* Title badge */}
                        <div className="absolute top-4 left-4 right-4">
                            <span className="inline-block bg-white/90 backdrop-blur-sm text-gray-900 text-md font-medium px-3 py-1.5 rounded-lg shadow-md">
                                {tech.title}
                            </span>
                        </div>

                        {/* Description */}
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                            <p className="text-white/90 text-xs leading-relaxed text-justify">
                                {tech.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Hide scrollbar globally for this element via style tag */}
            <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </section>
    );
}