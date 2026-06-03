"use client";

import { useEffect, useRef, useState } from "react";

const CARE_CATEGORIES = [
  {
    label: "Soins Capillaires",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=500&fit=crop",
    count: "24 produits",
  },
  {
    label: "Soins Bébé",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=500&fit=crop",
    count: "18 produits",
  },
  {
    label: "Soins Visage",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=500&fit=crop",
    count: "36 produits",
  },
];

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
    <section ref={sectionRef} className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        
        {/* Top Services */}
        <div style={fadeUp(0)} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {TOP_SERVICES.map((s, i) => (
            <div 
              key={s.label} 
              className={`relative overflow-hidden rounded-[40px] bg-[#e09aaa] aspect-[2/1] shadow-md group ${i === 1 ? 'md:-translate-y-8' : ''}`}
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
        <div style={fadeUp(0.1)} className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-[#e0296a] tracking-tight leading-[1.1] mb-4">
            RETROUVEZ NOS SOINS EN LIGNE
          </h2>
          <p className="text-gray-900 font-medium text-[14px] leading-[1.7] mb-8">
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
        <div style={fadeUp(0.2)} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {BOTTOM_SERVICES.map((s, i) => (
            <div 
              key={s.label} 
              className={`relative overflow-hidden rounded-[40px] bg-[#e09aaa] aspect-[2/1] shadow-md group ${i === 1 ? 'md:translate-y-8' : ''}`}
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
    </section>
  );
}
