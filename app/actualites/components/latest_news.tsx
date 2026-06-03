import Image from "next/image";

const articles = [
  {
    id: 1,
    image: "/img/news1.png",
    category: "MARKETING",
    date: "1 Jan 2026",
    title: "BLACK SIMANA 2026 : une campagne nationale à fort impact",
  },
  {
    id: 2,
    image: "/img/news2.png",
    category: "DIGITAL",
    date: "1 Jan 2026",
    title: "ICG élargit son portefeuille de marques",
  },
  {
    id: 3,
    image: "/img/news3.png",
    category: "ÉVÉNEMENT",
    date: "1 Jan 2026",
    title: "Les équipes DCS renforcent leur expertise terrain",
  },
  {
    id: 4,
    image: "/img/news4.png",
    category: "ÉVÉNEMENT",
    date: "1 Jan 2026",
    title: "Une immersion scientifique au sein des laboratoires partenaires suisses",
  },
];

const categoryColors: Record<string, string> = {
  MARKETING: "bg-pink-50 text-pink-600",
  DIGITAL: "bg-blue-50 text-blue-600",
  ÉVÉNEMENT: "bg-purple-50 text-purple-600",
};

export default function LatestNews() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-12">
      {/* Section title */}
      <h2 className="text-gray-900 font-semibold text-2xl mb-6">
        Dernières actualités
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((article) => (
          <article
            key={article.id}
            className="group flex flex-col cursor-pointer"
          >
            {/* Image */}
            <div className="relative w-full aspect-[4/3] bg-black  overflow-hidden mb-4">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Meta: category + date */}
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`text-[10px] font-semibold tracking-wider px-2 py-0.5 rounded-full ${
                  categoryColors[article.category] ??
                  "bg-gray-100 text-gray-600"
                }`}
              >
                {article.category}
              </span>
              <span className="text-xs text-gray-400">{article.date}</span>
            </div>

            {/* Title + arrow */}
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-gray-900 font-sans font-semibold text-xl leading-snug group-hover:text-[#E91E8C] transition-colors duration-200">
                {article.title}
              </h3>
              <span className="mt-0.5 shrink-0 text-gray-400 group-hover:text-[#E91E8C] transition-colors duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}