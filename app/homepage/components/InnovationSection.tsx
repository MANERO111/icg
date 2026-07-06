"use client";

import { useEffect, useRef, useState } from "react";

const HIGHLIGHTS = [
  { icon: "🧬", label: "Formulation avancée" },
  { icon: "🔬", label: "Tests cliniques" },
  { icon: "🌿", label: "Actifs naturels" },
  { icon: "✨", label: "Résultats prouvés" },
];

export default function InnovationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const fadeUp = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(30px)",
    transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
  });

  const fadeLeft = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateX(0)" : "translateX(40px)",
    transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
  });

  return (
    <section ref={sectionRef} className="w-full bg-white py-30 px-6 md:px-10">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-20">
          
          {/* Left: Image */}
          <div style={fadeUp(0)} className="flex-1 w-full flex justify-center">
             <div className="relative overflow-hidden w-full max-w-[650px] max-md:h-[300px]">
               <img
                  // src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=800&fit=crop"
                  src="/img/p7.png"
                  alt="Innovation cosmétique"
                  className="w-full aspect-square object-cover max-md:object-[50%_80%]"
               />
             </div>
          </div>

          {/* Right: Text */}
          <div className="flex-1">
            <h2
              style={fadeLeft(0.15)}
              className="text-4xl md:text-4xl lg:text-[2.7rem] font-semibold uppercase text-[#e0296a] tracking-tight leading-[1.1] md:mb-6 mb-2 max-w-xl"
            >
              L&apos;Innovation Au <br className="md:hidden"/> Cœur
              <br className="hidden md:block"/>
              De Notre Approche
            </h2>
            <p
              style={fadeLeft(0.25)}
              className="text-gray-900 font-medium text-[15px] md:leading-[1.3] mb-8 max-w-md text-justify"
            >
              Nos développements s&apos;appuient sur des actifs ciblés, des technologies avancées et une logique de formulation orientée efficacité, tolérance et expérience utilisateur. De la Microbiome-Tech à d&apos;autres complexes innovants, nous construisons des solutions à forte valeur ajoutée.
            </p>

            <div style={fadeLeft(0.45)}>
              <a
                href="#"
                className="inline-flex items-center gap-2 border border-[#e0296a] text-black hover:bg-[#e0296a] hover:text-white transition-colors duration-300 px-6 py-3 mb-2 rounded-md text-[12px] tracking-wide"
              >
                Lire maintenant
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#e0296a]">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
