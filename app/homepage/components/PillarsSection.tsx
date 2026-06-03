"use client";

import { useEffect, useRef, useState } from "react";

const PILLARS = [
  {
    id: "beauty",
    label: "Allier Beauté & Confort",
    description:
      "Chez ICG, nous proposons une formulation avancée et confortable pour la peau. Nos produits sont conçus pour offrir une expérience sensorielle unique tout en respectant l'équilibre cutané. Chaque texture, chaque parfum est pensé pour transformer le soin quotidien en un véritable moment de plaisir.",
  },
  {
    id: "purity",
    label: "Rituels de Pureté",
    description:
      "Inspirés par la nature et validés par la science, nos rituels de pureté proposent des soins nettoyants, exfoliants et purifiants qui respectent l'équilibre naturel de la peau. Des protocoles de beauté complets pour révéler l'éclat de chaque type de peau.",
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
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const fadeUp = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
  });

  return (
    <section ref={sectionRef} className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Pills */}
        <div style={fadeUp(0)} className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-10">
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

        {/* Text */}
        <div style={fadeUp(0.15)} className="text-center max-w-4xl mx-auto">
          <p className="text-black text-[15px] font-medium leading-[1.8]">
            {PILLARS[activeTab].description}
          </p>
        </div>
      </div>
    </section>
  );
}
