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
    <section className="w-full max-w-[90%] mx-auto py-24 px-6 flex flex-col md:flex-row md:grid-cols-[1fr_1.5fr] md:gap-16 gap-6 items-start justify-evenly">
      <div className="md:sticky top-24">
        <h2 className="text-[#e0296a] md:text-2xl text-xl font-bold mb-4 font-sans uppercase">Nos valeurs</h2>
        <p className="text-gray-800 md:text-[24px] text-[16px] leading-snug md:max-w-[50%]">
          Nos valeurs définissent la façon dont nous <strong className="font-bold">créons, collaborons et avançons.</strong>
        </p>
      </div>
      
      <div className="flex flex-col gap-6 border-l border-gray-900 max-md:w-[95%]">
        {VALEURS.map((valeur, index) => (
          <div key={valeur.tag} className={`flex flex-col md:gap-2 gap-1 md:pb-6 pb-4 md:pl-8 pl-6 ${index !== VALEURS.length - 1 ? 'border-b border-gray-900' : ''}`}>
             <span className="md:text-[20px] text-[10px]  text-gray-900 uppercase tracking-widest border border-gray-900 rounded-full px-5 py-1 w-fit md:mb-1">
               {valeur.tag}
             </span>
             <h3 className="text-[#e0296a] md:text-5xl text-2xl sx:text-3xl font-bold uppercase tracking-wide font-sans">{valeur.title}</h3>
             <p className="text-gray-900 md:text-xl text-[11px] leading-[1.6]">
               {valeur.description}
             </p>
          </div>
        ))}
      </div>
    </section>
  );
}
