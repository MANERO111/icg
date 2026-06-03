const VALEURS = [
  {
    tag: "VALEUR 1",
    title: "ÉTHIQUE",
    description: "Nous défendons un sourcing honnête, une fabrication intègre et une démarche responsable."
  },
  {
    tag: "VALEUR 2",
    title: "RÉACTIVITÉ",
    description: "Nous sommes à l'écoute des évolutions du marché et capables d'apporter des réponses rapides et efficaces."
  },
  {
    tag: "VALEUR 3",
    title: "PROFESSIONNALISME",
    description: "Nous plaçons l'expertise, la qualité d'exécution et l'exigence au cœur de chaque action."
  },
  {
    tag: "VALEUR 4",
    title: "ENGAGEMENT",
    description: "Nous croyons dans une innovation utile, saine et respectueuse de l'environnement et des parties prenantes."
  }
];

export default function ValeursSection() {
  return (
    <section className="w-full max-w-[90%] mx-auto py-24 px-6 flex flex-col md:flex-row md:grid-cols-[1fr_1.5fr] gap-16 items-start justify-evenly">
      <div className="sticky top-24">
        <h2 className="text-[#e0296a] text-2xl font-bold mb-4 font-sans uppercase">Nos valeurs</h2>
        <p className="text-gray-800 text-[24px] leading-snug max-w-[50%]">
          Nos valeurs définissent la façon dont nous <strong className="font-bold">créons, collaborons et avançons.</strong>
        </p>
      </div>
      
      <div className="flex flex-col gap-6 border-l border-gray-900 ">
        {VALEURS.map((valeur, index) => (
          <div key={valeur.tag} className={`flex flex-col gap-2 pb-6 pl-8 ${index !== VALEURS.length - 1 ? 'border-b border-gray-900' : ''}`}>
             <span className="text-[20px] font-bold text-gray-900 uppercase tracking-widest border border-gray-900 rounded-full px-5 py-1 w-fit mb-1">
               {valeur.tag}
             </span>
             <h3 className="text-[#e0296a] text-5xl font-semibold uppercase tracking-wide font-sans">{valeur.title}</h3>
             <p className="text-gray-900 text-xl leading-[1.6]">
               {valeur.description}
             </p>
          </div>
        ))}
      </div>
    </section>
  );
}
