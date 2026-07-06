"use client";

import { useEffect, useRef, useState } from "react";
import { ShoppingCart } from "lucide-react";

export default function OnlineServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const fadeUp = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(30px)",
    transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
  });

  const TOP_SERVICES = [
    { label: "MAQUILLAGE", img: "/img/online1.png" },
    { label: "NUTRITION", img: "/img/online2.png" },
    { label: "SOINS DENTAIRES", img: "/img/online3.jpg" },
  ];

  const BOTTOM_SERVICES = [
    { label: "SOINS CAPILLAIRES", img: "/img/online4.jpg" },
    { label: "SOINS VISAGE", img: "/img/online5.png" },
    { label: "SOINS BÉBÉ", img: "/img/online6.jpg" },
  ];

  return (
    <section ref={sectionRef} className="w-full bg-white py-16 md:py-24 overflow-hidden">

      {/* ── DESKTOP LAYOUT (Unchanged, hidden on mobile) ── */}
      <div className="hidden md:block max-w-[1200px] mx-auto px-10">
        {/* Top Services */}
        <div style={fadeUp(0)} className="grid grid-cols-3 gap-8 mb-16">
          {TOP_SERVICES.map((s, i) => (
            <div
              key={s.label}
              className={`relative overflow-hidden rounded-[40px] bg-[#e09aaa] aspect-[2/1] shadow-md group ${i === 1 ? '-translate-y-8' : ''}`}
            >
              <img src={s.img} alt={s.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <span className="text-white font-bold tracking-widest text-[13px] uppercase">
                  {s.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Center Text Block */}
        <div style={fadeUp(0.1)} className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold uppercase text-[#e0296a] tracking-tight leading-[1.1] mb-4">
            RETROUVEZ NOS SOINS EN LIGNE
          </h2>
          <p className="text-gray-900 font-normal text-[16px] leading-[1.7] mb-8 max-w-3xl mx-auto">
            À travers nos services de télé-consultation et sur nos plateformes e-commerce pour une expérience d&apos;achat simple, claire et sans contrainte.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#e0296a] text-white hover:bg-[#c92060] transition-colors duration-300 px-8 py-3.5 rounded-full text-[13px] font-bold tracking-wide uppercase"
          >
            Accéder à la boutique
          </a>
        </div>

        {/* Bottom Services */}
        <div style={fadeUp(0.2)} className="grid grid-cols-3 gap-8">
          {BOTTOM_SERVICES.map((s, i) => (
            <div
              key={s.label}
              className={`relative overflow-hidden rounded-[40px] bg-[#e09aaa] aspect-[2/1] shadow-md group ${i === 1 ? 'translate-y-8' : ''}`}
            >
              <img src={s.img} alt={s.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <span className="text-white font-bold tracking-widest text-[13px] uppercase">
                  {s.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MOBILE LAYOUT (Exactly matches image_50285f.png) ── */}
      <div style={fadeUp(0.05)} className="block md:hidden relative w-full min-h-[600px] mx-auto px-4 flex flex-col items-center justify-center">

        {/* Background Orbit/Circular Ring Graphics */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
          <div className="w-[310px] h-[310px] rounded-full border border-blue-50/60 absolute" />
          <div className="w-[440px] h-[440px] rounded-full border border-blue-50/40 absolute" />
          <div className="w-[580px] h-[580px] rounded-full border border-blue-50/20 absolute" />
        </div>

        {/* Card 1: NUTRITION (Top Center) */}
        <div className="absolute top-[2%] left-1/2 -translate-x-[40%] w-[135px] aspect-[1.6/1] bg-gray-100 rounded-lg overflow-hidden shadow-xs z-10">
          <img src="/img/online2.png" alt="Nutrition" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-2.5">
            <span className="text-white font-extrabold text-[10px] tracking-wide uppercase leading-tight">NUTRITION</span>
          </div>
        </div>

        {/* Card 2: MAQUILLAGE (Mid Left-Top) */}
        <div className="absolute top-[16%] left-[3%] w-[135px] aspect-[1.6/1] bg-gray-100 rounded-lg overflow-hidden shadow-xs z-10">
          <img src="/img/online1.png" alt="Maquillage" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-2.5">
            <span className="text-white font-extrabold text-[10px] tracking-wide uppercase leading-tight">MAQUILLAGE</span>
          </div>
        </div>

        {/* Card 3: SOINS DENTAIRES (Mid Right-Top) */}
        <div className="absolute top-[19%] right-[3%] w-[135px] aspect-[1.6/1] bg-gray-100 rounded-lg overflow-hidden shadow-xs z-10">
          <img src="/img/online3.jpg" alt="Soins Dentaires" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-2.5">
            <span className="text-white font-extrabold text-[10px] tracking-wide uppercase leading-tight">SOINS DENTAIRES</span>
          </div>
        </div>

        {/* Central Core Text Content Structure */}
        <div className="text-center z-20  mx-auto mt-[40px] mb-[20px]">
          <h2 className="text-4xl font-bold uppercase text-[#e2286b] tracking-tight  mb-4">
            RETROUVEZ NOS <br /> SOINS EN LIGNE
          </h2>
          <p className="text-gray-800 text-[12.5px] font-medium leading-[1.6] px-2 mb-5">
            Accédez facilement à nos gammes et découvrez des solutions adaptées aux différents besoins de peau, dans une expérience d&apos;achat simple, claire et orientée conseil.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#e2286b] hover:bg-[#c92060] transition-colors duration-300 text-white pl-2 pr-5 py-2 rounded-full text-[11px] font-semibold tracking-wide"
          >
            <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
              <ShoppingCart size={12} fill="white" stroke="none" />
            </span>
            Accéder à la boutique
          </a>
        </div>

        {/* Card 4: SOINS CAPILLAIRES (Mid Left-Bottom) */}
        <div className="absolute bottom-[23%] left-[3%] w-[135px] aspect-[1.6/1] bg-gray-100 rounded-lg overflow-hidden shadow-xs z-10">
          <img src="/img/online4.jpg" alt="Soins Capillaires" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-2.5">
            <span className="text-white font-extrabold text-[10px] tracking-wide uppercase leading-tight">SOINS CAPILLAIRES</span>
          </div>
        </div>

        {/* Card 5: SOINS BÉBÉ (Mid Right-Bottom) */}
        <div className="absolute bottom-[21%] right-[3%] w-[135px] aspect-[1.6/1] bg-gray-100 rounded-lg overflow-hidden shadow-xs z-10">
          <img src="/img/online6.jpg" alt="Soins Bébé" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-2.5">
            <span className="text-white font-extrabold text-[10px] tracking-wide uppercase leading-tight">SOINS BÉBÉ</span>
          </div>
        </div>

        {/* Card 6: SOINS VISAGE (Bottom Center) */}
        <div className="absolute bottom-[2%] left-1/2 -translate-x-[60%] w-[135px] aspect-[1.6/1] bg-gray-100 rounded-lg overflow-hidden shadow-xs z-10">
          <img src="/img/online5.png" alt="Soins Visage" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-2.5">
            <span className="text-white font-extrabold text-[10px] tracking-wide uppercase leading-tight">SOINS VISAGE</span>
          </div>
        </div>

      </div>

    </section>
  );
}