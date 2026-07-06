"use client";

import { useEffect, useRef, useState } from "react";

const TIMELINE = [
  {
    year: "2021",
    title: "Fondation d'ICG",
    description:
      "Naissance d’une vision ambitieuse : créer un groupe cosmétique marocain capable de développer et promouvoir des marques expertes, efficaces et innovantes.",
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
      "ICGROUPE accélère son développement avec l’introduction de several nouvelles marques, élargissant son portefeuille et couvrant les univers cosmétique, capillaire et bucco-dentaire.",
  },
  {
    year: "2024",
    title: "Rayonnement International",
    description:
      "Année stratégique marquée par une transformation globale : nouvelle identité visuelle du groupe, début de distribution de nouvelles marques partenaires et relancement de Galby Dermatech.",
  },
  {
    year: "2025",
    title: "Consolidation & Expansion",
    description:
      "ICG poursuit son expansion avec le lancement de nouvelles gammes et l’intégration de marques telles qu’Evoluderm et Alfa, renforçant son positionnement.",
  },
  {
    year: "2026",
    title: "Lancements Stratégiques",
    description: "ICG amorce une nouvelle phase de développement avec le lancement de marques stratégiques — Clearé Institute, Reistill, Davaj et Cipollino.",
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

  const scrollByAmount = (amount: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

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
    const walk = (x - startX) * 1.5; 
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handlePrevMobile = () => {
    setActiveYear((prev) => (prev > 0 ? prev - 1 : TIMELINE.length - 1));
  };

  const handleNextMobile = () => {
    setActiveYear((prev) => (prev < TIMELINE.length - 1 ? prev + 1 : 0));
  };

  return (
    <>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .drag-area { cursor: grab; }
        .drag-area:active { cursor: grabbing; }
      `}</style>
      <section ref={sectionRef} className="w-full">
        <div
          className="w-full"
          style={{ background: "linear-gradient(to right, #d43071 , #706faf )" }}
        >
          <div className="max-w-[1380px] mx-auto px-6 md:px-10 py-16 md:py-20">
            
            {/* ── HEADER (Shared base layout, matching mobile button alignment perfectly) ── */}
            <div className="flex justify-between items-start mb-14 md:mb-16">
              <div className="max-w-xl text-white">
                <h2 style={fadeUp(0.05)} className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-3">
                  Notre <br /> Évolution
                </h2>
                <p style={fadeUp(0.1)} className="text-white/80 text-[15px] md:text-[17px] leading-relaxed">
                  Une croissance guidée par la science, l&apos;innovation <br className="hidden sm:inline" /> et une vision 360°
                </p>
              </div>

              {/* Navigation Arrows (Top right on desktop AND mobile now) */}
              <div style={fadeUp(0.15)} className="flex gap-2.5 mt-1">
                <button
                  onClick={handlePrevMobile}
                  aria-label="Scroll left"
                  className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                <button
                  onClick={handleNextMobile}
                  aria-label="Scroll right"
                  className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                </button>
              </div>
            </div>

            {/* ── MOBILE ONLY DISPLAY BLOCK ── */}
            <div style={fadeUp(0.2)} className="flex md:hidden flex-col w-full text-white">
              
              {/* Year Headliner sequence with adjacent preview */}
              <div className="flex justify-between items-baseline gap-8 mb-4 pr-6 select-none overflow-hidden whitespace-nowrap">
                <span className="text-[4rem] font-bold tracking-tight leading-none text-white transition-all duration-300">
                  {TIMELINE[activeYear].year}
                </span>
                {activeYear < TIMELINE.length - 1 && (
                  <span className="text-[4rem] font-bold tracking-tight leading-none text-white/20 transition-all duration-300">
                    {TIMELINE[activeYear + 1].year}
                  </span>
                )}
              </div>

              {/* Timeline Horizontal Line Node Indicator */}
              <div className="relative w-full h-[1.5px] bg-white/20 mb-12">
                {/* Active node coordinate tracking marker */}
                <div 
                  className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white transition-all duration-300 ease-out"
                  style={{ 
                    // left: `${(activeYear / (TIMELINE.length - 1)) * 95}%` 
                    left:"17%"
                  }}
                />
              </div>

              {/* Dynamic Information Context */}
              <div className="min-h-[140px]">
                <h3 className="text-3xl font-bold mb-4 tracking-tight">
                  {TIMELINE[activeYear].title}
                </h3>
                <p className="text-white/90 text-[16px] leading-relaxed font-normal">
                  {TIMELINE[activeYear].description}
                </p>
              </div>
            </div>

            {/* ── DESKTOP ONLY TIMELINE & CONTENT AREA (Untouched) ── */}
            <div className="hidden md:block">
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
                      </div>
                    ))}
                  </div>
                </div>
              </div>

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
        </div>
      </section>
    </>
  );
}