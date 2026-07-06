import Image from "next/image";

interface Article {
  id: number;
  badge: string;
  badgeColor: "pink" | "teal" | "purple";
  image: string;
  date: string;
  title: string;
  excerpt: string;
}

const articles: Article[] = [
  {
    id: 1,
    badge: "CAMPAGNE",
    badgeColor: "pink",
    image: "/img/a1.png",
    date: "Aug 23, 2026",
    title: '"Chnou Mazal Khass ?" s\'impose sur le digital avec une campagne de notoriété immersive',
    excerpt:
      "À travers une série de vidéos branding, contenus pharmaciens et capsules digitales créatives, la campagne \"Chnou Mazal Khass ?\" a renforcé la visibilité de Galby Dermatech sur les réseaux sociaux.",
  },
  {
    id: 2,
    badge: "DERMOCONSEIL",
    badgeColor: "teal",
    image: "/img/a2.png",
    date: "Aug 23, 2026",
    title: "Une expérience conseil personnalisée au cœur de nos activations terrain",
    excerpt:
      "Nos DCS expertes ont accompagné les clientes à travers des diagnostics sur place et des conseils personnalisés adaptés à chaque besoin.",
  },
  {
    id: 3,
    badge: "INNOVATION",
    badgeColor: "purple",
    image: "/img/a3.png",
    date: "Aug 23, 2026",
    title: "Les laboratoires partenaires au cœur du développement produit",
    excerpt:
      "Découvrez comment ICG collabore avec ses partenaires techniques pour développer des solutions innovantes et adaptées aux besoins du marché.",
  },
  {
    id: 4,
    badge: "CAMPAGNE",
    badgeColor: "pink",
    image: "/img/a4.png",
    date: "Aug 23, 2026",
    title: 'Galby Dermatech dévoile "Chnou Mazal Khass ?"',
    excerpt:
      "À travers une campagne immersive et émotionnelle, Galby Dermatech met en avant l'importance de l'hygiène dans la routine skincare avec le lancement de ses nouveaux gels nettoyants.",
  },
  {
    id: 5,
    badge: "ÉVÉNEMENT",
    badgeColor: "teal",
    image: "/img/a5.png",
    date: "Aug 23, 2026",
    title: "Retour sur notre voyage partenaires à Zanzibar",
    excerpt:
      "Pharmaciens, médecins partenaires et équipes ICG se sont réunis à Zanzibar pour une expérience exclusive placée sous le signe du partage, de la proximité et de la collaboration.",
  },
  {
    id: 6,
    badge: "INNOVATION",
    badgeColor: "purple",
    image: "/img/a6.png",
    date: "Aug 23, 2026",
    title: "Les nouveaux gels nettoyants Galby Dermatech arrivent au Maroc",
    excerpt:
      "Galby Dermatech lance une nouvelle génération de gels nettoyants conçus pour nettoyer, équilibrer et respecter les besoins spécifiques de chaque type de peau.",
  },
];

function Badge({ label }: { label: string }) {
  return (
    <span
      className="absolute top-2 left-2 lg:top-3 lg:left-3 z-10 text-[8px] lg:text-[12px] font-bold tracking-wider uppercase px-1.5 lg:px-2.5 py-0.5 lg:py-1 rounded-sm bg-[#e0296a]/90 text-white"
    >
      {label}
    </span>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="flex flex-col group cursor-pointer font-sans">
      {/* Image wrapper */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 mb-2 lg:mb-4">
        <Badge label={article.badge} />
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 400px"
        />
      </div>

      {/* Meta */}
      <p className="text-[9px] lg:text-xs text-gray-400 mb-1 lg:mb-2 font-medium">{article.date}</p>

      {/* Title */}
      <h3 className="text-[13px] md:text-[24px] font-bold text-black tracking-tight leading-[1.25] md:leading-8 mb-1.5 lg:mb-2 group-hover:text-[#e0296a] transition-colors duration-200 line-clamp-3 md:line-clamp-none">
        {article.title}
      </h3>

      {/* Excerpt */}
      <p className="text-[10px] md:text-sm text-gray-500 leading-normal md:leading-relaxed line-clamp-4 font-normal">
        {article.excerpt}
      </p>
    </article>
  );
}

export default function IcgNewsSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 lg:px-6 py-8 lg:py-12">
      {/* Section heading */}
      <h2 className="text-xl lg:text-2xl font-extrabold text-[#e0296a] mb-6 lg:mb-8 tracking-tight font-sans">
        À la une chez ICG
      </h2>

      {/* Grid: 2 columns on mobile, 3 columns on desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-10">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}