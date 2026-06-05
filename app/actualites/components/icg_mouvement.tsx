import React from 'react';

// Mock data for the campaigns
const campaigns = [
  {
    brand: 'Galby',
    date: '1 Jan 2026',
    title: 'GALBY DERMATECH - NOUVEAUX GELS NETTOYANTS',
    image: '/img/c1.png', // Replace with your actual image paths
  },
  {
    brand: 'Davaj',
    date: '1 Jan 2026',
    title: 'NOTRE PREMIÈRE MARQUE DE SOINS INTIMES',
    image: '/img/davaj_bg.png',
  },
  {
    brand: 'Cipollino',
    date: '1 Jan 2026',
    title: 'NOTRE PREMIÈRE GAMME BÉBÉ',
    image: '/img/cipollino_bg.png',
  },
  {
    brand: 'Reistill',
    date: '1 Jan 2026',
    title: 'NOTRE NOUVELLE MARQUE DE SOINS CAPILLAIRES',
    image: '/img/reistill_bg.png',
  },
];

// Mock data for the stats/movement section
const stats = [
  {
    value: '+20',
    label: "Ans d'expertise",
    icon: '/img/mov1.png', 
  },
  {
    value: 'MULTI',
    label: 'Univers beauté & soin',
    icon: '/img/mov2.png',
  },
  {
    value: 'NATIONAL',
    label: 'Réseau terrain',
    icon: '/img/mov3.png', // The Morocco map icon
  },
  {
    value: 'ÉQUIPES',
    label: 'Créatives & multidisciplinaires',
    icon: '/img/mov4.png',
  },
  {
    value: 'CAMPAGNES',
    label: 'Digitales & terrain',
    icon: '/img/mov5.png',
  },
];

export default function IcgSection() {
  return (
    <section className="w-full mx-auto px-4 py-12 font-sans text-[#1a1a1a]">
      
      {/* --- Top Section: Campaigns & Launches --- */}
      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-left text-neutral-800">
          Nos campagnes & lancements
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {campaigns.map((item, index) => (
            <div key={index} className="group cursor-pointer flex flex-col justify-start">
              <div>
                {/* Image Container */}
                <div className="w-full aspect-[4/3] rounded-sm overflow-hidden bg-gray-100 mb-4">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                {/* Badges */}
                <div className="flex items-center space-x-2 mb-3 text-xs font-semibold">
                  <span className="text-[#a855f7] bg-[#f3e8ff] px-2 py-0.5 rounded">
                    {item.brand}
                  </span>
                  <span className="text-gray-400">
                    {item.date}
                  </span>
                </div>
              </div>

              {/* Title & Arrow Link */}
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-2xl font-bold tracking-normal leading-snug uppercase text-neutral-800 line-clamp-3">
                  {item.title}
                </h3>
                <span className="text-xl font-light text-neutral-600 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Bottom Section: ICG En Mouvement --- */}
      <div className="bg-[#f9f9fb] rounded-2xl p-8 md:p-12 border border-gray-100/50">
        <h2 className="text-3xl font-bold text-center tracking-wide text-neutral-800 mb-12 uppercase">
          ICG en mouvement
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Circular Icon Wrapper */}
              <div className="w-25 h-25 rounded-full overflow-hidden bg-black flex items-center justify-center mb-4 shadow-sm">
                <img 
                  src={stat.icon} 
                  alt={stat.value} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Stat Value */}
              <span className="text-3xl font-bold tracking-tight text-neutral-900 uppercase">
                {stat.value}
              </span>
              
              {/* Stat Sub-label */}
              <span className="text-sm text-gray-500 mt-1 font-medium max-w-[140px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}