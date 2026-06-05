"use client";

import { useEffect, useRef, useState } from "react";

const TIMELINE = [
  {
    year: "2021",
    title: "Fondation d'ICG",
    description:
      "ICGROUPE voit le jour, marquant le début d’une aventure ambitieuse dans l’univers de la dermo-cosmétique et du bien-être, portée par une vision axée sur l’innovation et la qualité.",
  },
  {
    year: "2022",
    title: "Premières Marques",
    description:
      "Le groupe lance sa première gamme Galby Dermatologie, posant les bases d’une expertise reconnue et d’un positionnement orienté efficacité et science.",
  },
  {
    year: "2023",
    title: "Expansion Digitale",
    description:
      "ICGROUPE accélère son développement avec l’introduction de plusieurs nouvelles marques, élargissant son portefeuille et couvrant les univers cosmétique, capillaire et bucco-dentaire.",
  },
  {
    year: "2024",
    title: "Rayonnement International",
    description:
      "Année stratégique marquée par une transformation globale : nouvelle identité visuelle du groupe, début de distribution de nouvelles marques partenaires et relancement de Galby Dermatech avec une approche innovante et des formules de nouvelle génération.",
  },
  {
    year: "2025",
    title: "Consolidation & Expansion",
    description:
      "ICG poursuit son expansion avec le lancement de nouvelles gammes et l’intégration de marques telles qu’Evoluderm et Alfa, renforçant son positionnement et sa capacité à répondre aux besoins variés du marché.",
  },
  {
    year: "2026",
    title: "",
    description: "ICG amorce une nouvelle phase de développement avec le lancement de marques stratégiques — Clearé Institute, Reistill, Davaj et Cipollino — renforçant son positionnement innovant et sa présence sur des segments clés à fort potentiel.",
  },
];

export default function EvolutionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeYear, setActiveYear] = useState(0);

  // Drag to scroll state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const fadeUp = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
  });

  // Desktop buttons scroll
  const scrollByAmount = (amount: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };
  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .drag-area {
          cursor: grab;
        }
        .drag-area:active {
          cursor: grabbing;
        }
      `}</style>
      <section ref={sectionRef} className="w-full">
        {/* Pink to Purple gradient area */}
        <div
          className="w-full"
          style={{
            background: "linear-gradient(to right, #d43071 , #706faf )",
          }}
        >
          <div className="max-w-[1380px] mx-auto px-6 md:px-10 py-16 md:py-20">
            
            <div className="flex justify-between items-start mb-16">
              <div className="max-w-xl">
                <h2 style={fadeUp(0.05)} className="text-4xl md:text-5xl font-semibold uppercase text-white tracking-tight mb-2">
                  Notre Évolution
                </h2>
                <p style={fadeUp(0.1)} className="text-white/80 text-[17px]">
                  Une croissance guidée par la science, l&apos;innovation <br /> et une vision 360°
                </p>
              </div>
              {/* Arrows */}
              <div style={fadeUp(0.15)} className="hidden md:flex gap-3">
                  <button
                    onClick={() => scrollByAmount(-200)}
                    aria-label="Scroll left"
                    className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                  </button>
                  <button
                    onClick={() => scrollByAmount(200)}
                    aria-label="Scroll right"
                    className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                  </button>
              </div>
            </div>

            {/* Timeline Line & Years */}
            <div
              ref={scrollRef}
              style={fadeUp(0.2)}
              className="relative transition-all duration-500 ease-in-out w-full mb-10 overflow-x-auto hide-scrollbar pb-4 drag-area"
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              <div className="relative min-w-[700px] xl:min-w-full group">
                {/* Line */}
                <div className="absolute top-4/4 left-0 right-0 h-[3px] bg-white/10 -translate-y-1/2 z-0" />
                <div 
                  className="absolute top-4/4 left-0 h-[3px] bg-white -translate-y-1/2 z-0 transition-all duration-500 ease-out" 
                  style={{ width: `${(activeYear / (TIMELINE.length - 1)) * 100}%` }}
                />
                
                <div className="flex justify-between relative z-10 w-full px-2">
                  {TIMELINE.map((item, i) => (
                    <div
                      key={item.year}
                      onClick={() => setActiveYear(i)}
                      className="flex flex-col items-center cursor-pointer w-[120px]"
                    >
                      <span 
                        className={`text-4xl md:text-5xl lg:text-6xl transition-all duration-300 font-bold select-none ${activeYear === i ? 'text-white' : 'text-white/20 hover:text-white/60'}`}
                      >
                        {item.year}
                      </span>
                      {/* <div className={`w-2 h-2 rounded-full mt-2 transition-all duration-300 ${activeYear === i ? 'bg-white scale-125' : 'bg-transparent'}`} /> */}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content area below timeline */}
            <div style={fadeUp(0.3)} className="max-w-xl text-white mt-8 min-h-[120px]">
              <h3 className="text-3xl font-bold mb-3">
                {TIMELINE[activeYear].title}
              </h3>
              <p className="text-white/80 text-[16px] leading-[1.8]">
                {TIMELINE[activeYear].description}
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
