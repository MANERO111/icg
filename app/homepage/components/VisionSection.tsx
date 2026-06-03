"use client";

import { useEffect, useRef, useState } from "react";

export default function VisionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

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
    <section
      ref={sectionRef}
      className="relative bg-white w-full overflow-hidden"
    >
      <div className="relative bg-white z-10 max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10 lg:gap-14">
        {/* Left — image */}
        <div style={fadeUp(0)} className="flex-1 w-full md:w-1/2">
          <div className="relative overflow-hidden w-full h-[300px] md:h-[450px]">
            <img
              src="img/map.jpg"
              alt="Vision ICG"
              className="w-full h-full object-cover rounded-none"
            />
          </div>
        </div>

        {/* Right — text */}
        <div className="flex-1 w-full md:w-1/2 max-w-lg">
          <h2
            style={fadeUp(0.1)}
            className="text-3xl text-[#e0296a] sm:text-4xl md:text-[3rem] font-semibold uppercase leading-[1.1] mb-6 tracking-"
          >
            Une Vision Née Au
            <br />
            Maroc, Pensée
            <br />
            Pour Le Monde
          </h2>
          <p
            style={fadeUp(0.25)}
            className="text-gray-900 text-[16px] leading-[1.7] mb-8 font-medium"
          >
Dans un marché en pleine croissance, porté par la digitalisation et une demande croissante en soins performants, ICG s&apos;impose comme un acteur clé de la dermocosmétique au Maroc.
          </p>
          <div style={fadeUp(0.35)}>
            <a
              href="#"
              className="inline-flex items-center gap-2 border border-[#e0296a] text-black hover:bg-[#e0296a] hover:text-white transition-colors duration-300 px-6 py-3 text-[12px] font-bold tracking-wide uppercase"
            >
              En savoir plus
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
