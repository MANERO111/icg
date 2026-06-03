"use client";

import { useEffect, useRef, useState } from "react";

const ECOSYSTEM_ITEMS = [
  {
    label: "Maquillage",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop",
    color: "#e0296a",
  },
  {
    label: "Nutrition",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=400&fit=crop",
    color: "#ff6b9d",
  },
  {
    label: "Soins Capillaires",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=400&h=400&fit=crop",
    color: "#c92060",
  },
];

export default function EcosystemSection() {
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

  return (
    <section ref={sectionRef} className="w-full relative  overflow-hidden py-24 md:py-64 bg-white">
      <style>{`
        .eco-bg {
          background-image: radial-gradient(circle, #e0296a 1px, transparent 1px);
          background-size: 20px 20px;
          opacity: 0.05;
          mask-image: radial-gradient(ellipse at center, white 20%, transparent 70%);
          -webkit-mask-image: radial-gradient(ellipse at center, white 20%, transparent 70%);
        }
      `}</style>
      
      {/* Background Map Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.9] pointer-events-none">
         <img src="img/Mask Group.png" alt="Map" className="w-full h-full max-w-[1200px] object-cover" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 text-center">
        {/* Title */}
        <div style={fadeUp(0)}>
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-black uppercase text-black tracking-tighter leading-none flex items-center justify-center gap-4 flex-wrap">
            UN ÉCOSYSTÈME
          </h2>
          <div className="relative inline-block mt-2 mb-6">
             <span className="text-5xl md:text-6xl lg:text-[5rem] font-black text-[#e0296a] tracking-tighter relative z-10">
               360°
             </span>
             {/* Ellipse overlay */}
             <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[160%] text-[#e0296a] pointer-events-none" viewBox="0 0 200 100" fill="none">
               <ellipse cx="100" cy="50" rx="90" ry="30" stroke="currentColor" strokeWidth="3" transform="rotate(-5 100 50)" />
             </svg>
          </div>
          
          <p className="text-black font-semibold text-[15px] max-w-2xl mx-auto leading-[1.8]">
            ICG déploie ses ambitions de collaboration et d&apos;expertise à travers ses différentes marques dermo-cosmétiques pour englober l&apos;ensemble de l&apos;écosystème corporel et de l&apos;hygiène, avec des solutions curatives et performantes adaptées à tous.
          </p>
        </div>
      </div>
    </section>
  );
}
