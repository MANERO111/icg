import React from 'react';
import { Lightbulb, Users, TrendingUp, Palette, HeartHandshake, Medal } from 'lucide-react';

const VALUES = [
  {
    icon: <img src="/img/cul1.png" alt="innovation" className='w-15' />,
    title: "INNOVATION",
    desc: "Imaginer de nouvelles approches et développer des projets innovants."
  },
  {
    icon: <img src="/img/accompagnement.png" alt="accompagnement" className='w-15' />,
    title: "Collaboration",
    desc: "Grandir ensemble dans un environnement dynamique et positif."
  },
  {
    icon: <img src="/img/developpement.png" alt="developpement" className='w-9' />,
    title: "Évolution",
    desc: "Encourager l'apprentissage et la montée en compétences."
  },
  {
    icon: <img src="/img/cul2.png" alt="creativite" className='w-15' />,
    title: "Créativité",
    desc: "Donner de la place aux idées et à l'expression créative."
  },
  {
    icon: <img src="/img/cul3.png" alt="engagement" className='w-15' />,
    title: "Engagement",
    desc: "Construire des projets avec implication et passion."
  },
  {
    icon: <img src="/img/cul4.png" alt="excellence" className='w-15' />,
    title: "Excellence",
    desc: "Viser la qualité dans chaque détail."
  }
];

export default function CultureAndCTA() {
  return (
    <section className="bg-white py-16 px-4 md:px-8 font-sans text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        
        {/* --- TOP SECTION: CULTURE HEADER --- */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-black uppercase leading-tight">
            Une culture portée par <br /> l&apos;ambition collective
          </h2>
        </div>

        {/* --- MIDDLE SECTION: VALUES GRID --- */}
        {/* Changed grid-cols-1 to grid-cols-2 on mobile to match image_9785e7.png */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-4 gap-y-12 md:gap-8 lg:gap-4 items-start relative mb-24">
          {VALUES.map((value, idx) => {
            return (
              <div key={idx} className="flex flex-col items-center text-center px-1 sm:px-2 relative group">
                {/* Icon Container */}
                <div className="mb-4 text-neutral-800 transition-transform group-hover:scale-105 duration-200">
                  {value.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-md font-bold text-[#de2672] uppercase tracking-wide mb-2">
                  {value.title}
                </h3>
                
                {/* Description - Made max-w full on mobile to allow clean multiline centering matching the image */}
                <p className="text-sm text-neutral-900 leading-relaxed max-w-full sm:max-w-[170px]">
                  {value.desc}
                </p>

                {/* Vertical Divider Lines (Visible on Desktop only) */}
                {idx < VALUES.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-4 bottom-4 w-[1px] bg-gray-200/80" />
                )}
              </div>
            );
          })}
        </div>

        {/* --- BOTTOM SECTION: HERO CALL TO ACTION (Untouched) --- */}
        <div className="relative w-full max-md:h-[550px] rounded-[24px] overflow-hidden bg-black text-white p-8 md:p-14 lg:p-20 shadow-xl">
          {/* Decorative Blurred / Graded Background Layer */}
          <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden flex justify-end">
            <div className="w-full md:w-2/3 h-full bg-gradient-to-r max-md:hidden from-black via-black/80 to-transparent absolute inset-0 z-10" />
            <div className="w-full md:w-1/2 h-full flex gap-4 items-end transform translate-x-12 scale-110">
              <img src="/img/cul_pic.png" alt="culture picture" className="w-[85%] h-[85%] max-md:object-contain max-md:object-bottom -mt-6 mr-24" />
            </div>
          </div>

          {/* Core Content */}
          <div className="relative z-20 max-w-xl flex flex-col items-start justify-start md:justify-center h-full">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight uppercase leading-[1.05] mb-4">
              Construisons <br /> ensemble la <br /> beaute de demain
            </h2>
            
            <p className="text-xs md:text-lg text-neutral-300 leading-relaxed font-light mb-8 max-w-2xl">
              Chez ICG, nous croyons que l&apos;innovation naît des talents passionnés. 
              Nous recherchons des profils pour participer au développement de 
              marques dermocosmétiques modernes, humaines et innovantes.
            </p>

            <button className="bg-[#de2672] hover:bg-[#c21e61] active:scale-95 transition-all text-white text-xs md:text-sm font-semibold tracking-wide py-2 md:py-3 px-4 md:px-6 rounded-md shadow-md">
              Search Job
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}