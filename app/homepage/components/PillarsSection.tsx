"use client";

import { useEffect, useRef, useState } from "react";

const PILLARS = [
  {
    id: "beauty",
    label: "Aujourd'hui la science",
    description:
      "Chez ICG, nous croyons qu’une marque forte naît à la rencontre de la science, de l’écoute du besoin et de la capacité à créer des solutions utiles, modernes et inspirantes. Notre ADN s’exprime à travers une vision exigeante, humaine et tournée vers l’évolution du marché.",
  },
  {
    id: "purity",
    label: "Allier Beauté & Confort",
    description:
      "Chez ICG, nous proposons une formulation avancée et confortable pour la peau. Nos produits sont conçus pour offrir une expérience sensorielle unique tout en respectant l'équilibre cutané. Chaque texture, chaque parfum est pensé pour transformer le soin quotidien en un véritable moment de plaisir.",
  },
  {
    id: "technology",
    label: "Technologie & Sécurité",
    description:
      "La sécurité est au cœur de notre démarche. Chaque produit est soumis à des contrôles rigoureux, des tests dermatologiques et des certifications internationales avant sa mise en marché. Nous utilisons les dernières technologies pour garantir efficacité et innocuité.",
  },
];

export default function PillarsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  // Drag & Swipe states
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Centrer automatiquement le bouton actif sur mobile au changement d'onglet
  useEffect(() => {
    if (scrollContainerRef.current && window.innerWidth < 768) {
      const activeChild = scrollContainerRef.current.children[activeTab] as HTMLElement;
      if (activeChild) {
        const containerWidth = scrollContainerRef.current.offsetWidth;
        const childOffset = activeChild.offsetLeft;
        const childWidth = activeChild.offsetWidth;
        scrollContainerRef.current.scrollTo({
          left: childOffset - containerWidth / 2 + childWidth / 2,
          behavior: "smooth",
        });
      }
    }
  }, [activeTab]);

  const fadeUp = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
  });

  // Navigation Logic
  const scrollLeft = () => {
    setActiveTab((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const scrollRight = () => {
    setActiveTab((prev) => (prev < PILLARS.length - 1 ? prev + 1 : prev));
  };

  // Touch handlers
  const handleTouchStart = (e: any) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: any) => {
    if (!isDragging) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      return;
    }
    const distance = touchStart - touchEnd;
    if (distance > 50) scrollRight();
    else if (distance < -50) scrollLeft();
    setIsDragging(false);
  };

  // Mouse drag handlers
  const handleMouseDown = (e: any) => {
    setTouchStart(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: any) => {
    if (!isDragging || !touchStart) return;
    e.preventDefault();
    setTouchEnd(e.clientX);
  };

  const handleMouseUp = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      return;
    }
    const distance = touchStart - touchEnd;
    if (distance > 50) scrollRight();
    else if (distance < -50) scrollLeft();
    setIsDragging(false);
    setTouchStart(null);
    setTouchEnd(null);
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
      `}</style>
      
      <section ref={sectionRef} className="w-full bg-white py-16 md:py-24 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          
          {/* ── DESKTOP PILLS PANEL (Untouched) ── */}
          <div style={fadeUp(0)} className="hidden md:flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-10">
            {PILLARS.map((pillar, i) => (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(i)}
                className="text-[12px] md:text-[14px] font-bold uppercase tracking-[1px] px-6 md:px-8 py-3 rounded-full transition-all duration-300"
                style={{
                  border: activeTab === i ? "2px solid #000" : "1px solid #d1d5db",
                  background: "white",
                  color: activeTab === i ? "#000" : "#6b7280",
                  boxShadow: activeTab === i ? "0 4px 14px rgba(0,0,0,0.05)" : "none"
                }}
              >
                {pillar.label}
              </button>
            ))}
          </div>

          {/* ── MOBILE HORIZONTAL SCROLLABLE TIMELINE PILLS (Matches Image) ── */}
          <div 
            style={fadeUp(0)} 
            className="block md:hidden w-full mb-10 select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={() => setIsDragging(false)}
          >
            <div 
              ref={scrollContainerRef}
              className="flex items-center gap-3 overflow-x-auto hide-scrollbar px-[15%] py-2 transition-all duration-300"
            >
              {PILLARS.map((pillar, i) => (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(i)}
                  className="text-[14px] font-medium tracking-[0.5px] px-6 py-2.5 rounded-full border whitespace-nowrap transition-all duration-300 flex-shrink-0"
                  style={{
                    border: "1px solid #111111",
                    background: "white",
                    color: "#111111",
                    opacity: activeTab === i ? 1 : 0.25,
                    transform: activeTab === i ? "scale(1)" : "scale(0.93)",
                  }}
                >
                  {pillar.label.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* ── TEXT CONTENT AREA ── */}
          <div style={fadeUp(0.15)} className="text-center max-w-2xl mx-auto px-2 md:max-w-4xl">
            <p className="text-[#111111] text-[15px] md:text-[16px] font-normal leading-[1.75] md:leading-[1.8]">
              {PILLARS[activeTab].description}
            </p>
          </div>

        </div>
      </section>
    </>
  );
}