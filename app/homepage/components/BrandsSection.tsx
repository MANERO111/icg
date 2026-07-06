"use client";

import { useEffect, useRef, useState } from "react";
import { ShoppingCart } from "lucide-react";

const BRANDS = [
  { name: "Galby", logo: "/img/galby.png" },
  { name: "Evoluderm", logo: "/img/evoluderm1.png" },
  { name: "MAGICLEAR", logo: "/img/magiclear.png" },
  { name: "Galby Alt", logo: "/img/galby.png" },
  { name: "Evoluderm Alt", logo: "/img/evoluderm1.png" },
  { name: "soivre", logo: "/img/soivre.png" },
  { name: "CAPI LIFT", logo: "/img/capilift.png" },
  { name: "pauldevartens", logo: "/img/pauldevartens.png" },
];

export default function BrandsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

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
    transform: visible ? "translateY(0)" : "translateY(60px)",
    transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
  });

  const BRANDS_COL1 = BRANDS.slice(0, 4);
  const BRANDS_COL2 = BRANDS.slice(4, 8);

  return (
    <>
      <style>{`
        /* Desktop: Vertical Marquees */
        @keyframes brandsMarqueeVerticalUp {
          0%   { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(0, -50%, 0); }
        }
        @keyframes brandsMarqueeVerticalDown {
          0%   { transform: translate3d(0, -50%, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }

        /* Mobile: Horizontal Marquees */
        @keyframes brandsMarqueeHorizontalLeft {
          0%   { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes brandsMarqueeHorizontalRight {
          0%   { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }

        @media (min-width: 768px) {
          .brands-marquee-up {
            animation: brandsMarqueeVerticalUp 20s linear infinite;
          }
          .brands-marquee-down {
            animation: brandsMarqueeVerticalDown 20s linear infinite;
          }
          .desktop-marquee-container:hover .brands-marquee-up,
          .desktop-marquee-container:hover .brands-marquee-down {
            animation-play-state: paused;
          }
        }

        @media (max-width: 767px) {
          .brands-marquee-mobile-left {
            animation: brandsMarqueeHorizontalLeft 18s linear infinite;
          }
          .brands-marquee-mobile-right {
            animation: brandsMarqueeHorizontalRight 18s linear infinite;
          }
          .mobile-marquee-container:hover .brands-marquee-mobile-left,
          .mobile-marquee-container:hover .brands-marquee-mobile-right {
            animation-play-state: paused;
          }
        }

        .brands-card img {
          transition: transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .brands-card:hover img { transform: scale(1.08); }
      `}</style>

      <section ref={sectionRef} className="w-full bg-[#E5E7EB] md:bg-white pb-4 md:pb-0 overflow-hidden">
        <div className="flex justify-between flex-col md:flex-row min-h-[500px]">
          
          {/* Left — text */}
          <div 
            className="flex-1 bg-[#6974b4] px-8 md:px-8 py-12 md:py-24 flex flex-col justify-center items-center text-white relative z-10"
            style={fadeUp(0)}
          >
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-semibold uppercase tracking-tight leading-[1.1] mb-6">
                Des Marques <br className="md:hidden" /> Pensées Pour <br className="md:hidden" /> Chaque Besoin
              </h2>
              <p className="text-white/80 text-[15px] leading-[1.8] mb-10 max-md:text-justify">
                ICG développe et accompagne des marques expertes sur l&apos;ensemble de la chaîne de valeur, avec une stratégie de segmentation claire, afin d&apos;offrir un positionnement cohérent et de qualité.
              </p>
              <div className="flex sm:flex-row items-start sm:items-center gap-2">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-3 py-3 border border-white/40 text-white hover:bg-white hover:text-[#6a739e] transition-colors rounded-sm text-[10px] font-medium tracking-wide uppercase"
                >
                  Voir toutes les marques
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="ml-1"><path d="M8 5v14l11-7z"/></svg>
                </a>
                <button className="inline-flex items-center justify-center gap-3 text-white font-medium text-[10px] hover:text-white/70 transition-colors uppercase">
                  <span className="h-10 px-4 border border-white/50 rounded-full flex items-center justify-center gap-2">
                    <ShoppingCart size={14} />
                    Acheter en ligne
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right — brand grids & rows */}
          <div className="flex-1 bg-[#e2e3ed] py-6 md:py-0 flex items-center justify-center relative z-0 overflow-hidden md:h-[700px]">
            
            {/* Top/bottom gradient masks for Desktop */}
            <div
              className="pointer-events-none absolute top-0 left-0 right-0 h-24 z-10 hidden md:block"
              style={{ background: "linear-gradient(to bottom, #e2e3ed 0%, transparent 100%)" }}
            />
            <div
              className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 z-10 hidden md:block"
              style={{ background: "linear-gradient(to top, #e2e3ed 0%, transparent 100%)" }}
            />

            {/* Left/Right gradient masks for Mobile */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-r from-[#e2e3ed] to-transparent md:hidden" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-l from-[#e2e3ed] to-transparent md:hidden" />

            {/* ── MOBILE ONLY: HORIZONTAL SCROLLING ROWS ── */}
            <div className="mobile-marquee-container flex flex-col gap-4 w-full md:hidden px-4">
              
              {/* Row 1 — Slides Left */}
              <div className="brands-marquee-mobile-left flex gap-4 w-max">
                {[...BRANDS_COL1, ...BRANDS_COL1, ...BRANDS_COL1].map((brand, i) => (
                  <div
                    key={`mob-col1-${i}`}
                    className="brands-card bg-white rounded-2xl flex items-center justify-center p-6 shadow-sm flex-shrink-0"
                    style={{ width: "170px", height: "170px" }}
                  >
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="h-15 w-full object-contain"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>

              {/* Row 2 — Slides Right */}
              <div className="brands-marquee-mobile-right flex gap-4 w-max">
                {[...BRANDS_COL2, ...BRANDS_COL2, ...BRANDS_COL2].map((brand, i) => (
                  <div
                    key={`mob-col2-${i}`}
                    className="brands-card bg-white rounded-2xl flex items-center justify-center p-6 shadow-sm flex-shrink-0"
                    style={{ width: "170px", height: "170px" }}
                  >
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="h-15 w-full object-contain"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ── DESKTOP ONLY: VERTICAL SCROLLING MARQUEE GRID ── */}
            <div className="desktop-marquee-container hidden md:grid grid-cols-2 gap-4 h-full w-full max-w-[440px] overflow-hidden relative">
              
              {/* Column A — Infinite scroll UP */}
              <div className="flex flex-col gap-4 brands-marquee-up will-change-transform">
                {[...BRANDS_COL1, ...BRANDS_COL1].map((brand, i) => (
                  <div
                    key={`desk-col1-${i}`}
                    className="brands-card bg-white rounded-2xl flex items-center justify-center p-6 shadow-sm hover:shadow-md cursor-pointer w-full flex-shrink-0 h-[160px]"
                  >
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="h-12 w-full object-contain"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>

              {/* Column B — Infinite scroll DOWN */}
              <div className="flex flex-col gap-4 brands-marquee-down will-change-transform">
                {[...BRANDS_COL2, ...BRANDS_COL2].map((brand, i) => (
                  <div
                    key={`desk-col2-${i}`}
                    className="brands-card bg-white rounded-2xl flex items-center justify-center p-6 shadow-sm hover:shadow-md cursor-pointer w-full flex-shrink-0 h-[160px]"
                  >
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="h-12 w-full object-contain"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}