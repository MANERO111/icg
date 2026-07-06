"use client";

import { useEffect, useRef, useState } from "react";

/* ── Brand logos for the infinite slider ──────────────────────────────── */
const SLIDER_BRANDS = [
  { name: "Davaj", logo: "/img/davaj.png" },
  { name: "Biomed", logo: "/img/biomed.png" },
  { name: "cosmetix", logo: "/img/cosmetix.png" },
  { name: "Evoluderm", logo: "/img/evoluderm.png" },
  { name: "dentyucral", logo: "/img/dentyucral.png" },
  { name: "aifa", logo: "/img/aifa.png" },
  { name: "cipollino", logo: "/img/cipollino.png" },
  { name: "cleare", logo: "/img/cleare.png" },
  { name: "mira", logo: "/img/mira.png" },
  { name: "reistill", logo: "/img/reistill.png" },
  { name: "volumax", logo: "/img/volumax.png" },
];

const PHOTOS_COL1 = [
  { src: "/img/p3.jpg", alt: "Enfant" },
  { src: "/img/p2.png", alt: "Femme profil" },
  { src: "/img/p6.jpg", alt: "Femme souriante" },
];

const PHOTOS_COL2 = [
  { src: "/img/p5.jpg", alt: "Femme asiatique" },
  { src: "/img/p1.png", alt: "Femme souriante" },
  { src: "/img/p4.jpg", alt: "Homme" },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const brandTrackRef = useRef<HTMLDivElement>(null);

  /* Entrance mount trigger */
  useEffect(() => {
    setMounted(true);
  }, []);

  /* Horizontal Brand slider RAF loop */
  useEffect(() => {
    const track = brandTrackRef.current;
    if (!track) return;
    
    let x = 0;
    let raf: number;
    
    const step = () => {
      x -= 0.7;
      const half = track.scrollWidth / 2;
      if (Math.abs(x) >= half) x = 0;
      track.style.transform = `translate3d(${x}px, 0, 0)`;
      raf = requestAnimationFrame(step);
    };
    
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [mounted]);

  /* Fade-up helper */
  const fadeUp = (delay: number): React.CSSProperties => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(34px)",
    transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
  });

  /* Scale-in helper for layout containers */
  const wrapperIn = (delay: number): React.CSSProperties => ({
    opacity: mounted ? 1 : 0,
    transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
  });

  return (
    <>
      {/* ── Seamless Marquee Animations — Pure CSS hardware accelerated loops ── */}
      <style>{`
        /* Desktop: Vertical Marquees */
        @keyframes marqueeVerticalUp {
          0%   { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(0, -50%, 0); }
        }
        @keyframes marqueeVerticalDown {
          0%   { transform: translate3d(0, -50%, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }

        /* Mobile: Horizontal Marquees */
        @keyframes marqueeHorizontalLeft {
          0%   { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes marqueeHorizontalRight {
          0%   { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }

        @media (min-width: 768px) {
          .animate-marquee-up {
            animation: marqueeVerticalUp 24s linear infinite;
          }
          .animate-marquee-down {
            animation: marqueeVerticalDown 24s linear infinite;
          }
          .desktop-marquee-container:hover .animate-marquee-up,
          .desktop-marquee-container:hover .animate-marquee-down {
            animation-play-state: paused;
          }
        }

        @media (max-width: 767px) {
          .animate-marquee-mobile-left {
            animation: marqueeHorizontalLeft 22s linear infinite;
          }
          .animate-marquee-mobile-right {
            animation: marqueeHorizontalRight 22s linear infinite;
          }
          .mobile-marquee-container:hover .animate-marquee-mobile-left,
          .mobile-marquee-container:hover .animate-marquee-mobile-right {
            animation-play-state: paused;
          }
        }

        .hero-card img {
          transition: transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .hero-card:hover img { transform: scale(1.06); }
        .brand-slider-track { will-change: transform; }
      `}</style>

      <section className="w-full bg-white min-h-[calc(100vh-72px)] flex items-center overflow-hidden relative py-2 md:py-0">
        
        {/* Top & Bottom gradient mask panels to smoothly fade out columns on Desktop */}
        <div
          className="pointer-events-none absolute top-0 left-0 right-0 h-40 z-20 hidden md:block"
          style={{ background: "linear-gradient(to bottom, white 10%, transparent 100%)" }}
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 z-20 hidden md:block"
          style={{ background: "linear-gradient(to top, white 10%, transparent 100%)" }}
        />

        {/* Decorative background glow */}
        <div
          className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.045]"
          style={{ background: "radial-gradient(circle, #e0296a 0%, transparent 70%)" }}
        />

        <div className="max-w-[1480px] mx-auto flex flex-col lg:flex-row justify-evenly items-center gap-4 lg:gap-14 w-full px-4 sm:px-6 md:px-12">
          
          {/* ── MOBILE TWO-ROW HORIZONTAL PHOTO SLIDER (Visible only on Mobile) ── */}
          <div 
            style={wrapperIn(0.15)} 
            className="mobile-marquee-container w-full overflow-hidden md:hidden order-first relative flex flex-col gap-3 py-2"
          >
            {/* Soft Edge Overlays */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-l from-white to-transparent" />
            
            {/* Row 1: Moves Left */}
            <div className="animate-marquee-mobile-left flex gap-3 w-max">
              {[...PHOTOS_COL1, ...PHOTOS_COL1, ...PHOTOS_COL1].map((photo, i) => (
                <div
                  key={i}
                  className="hero-card overflow-hidden rounded-xl bg-gray-100 flex-shrink-0"
                  style={{ width: "160px", height: "200px" }}
                >
                  <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* Row 2: Moves Right */}
            <div className="animate-marquee-mobile-right flex gap-3 w-max">
              {[...PHOTOS_COL2, ...PHOTOS_COL2, ...PHOTOS_COL2].map((photo, i) => (
                <div
                  key={i}
                  className="hero-card overflow-hidden rounded-xl bg-gray-100 flex-shrink-0"
                  style={{ width: "160px", height: "200px" }}
                >
                  <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* ── LEFT (Text Content & Brand Sliders) ─────────────────── */}
          <div className="flex-1 max-w-xl z-10 flex items-start flex-col w-full">

            {/* Heading */}
            <h1
              style={fadeUp(0.1)}
              className="text-4xl sm:text-5xl lg:text-[3.3rem] xl:text-[3.7rem] font-semibold uppercase leading-[1.06] text-[#e0296a] mb-2 tracking-tight"
            >
              INTERNATIONALLY

              <br />
              EXPERT. Proudly
              <br />
              Moroccan.
            </h1>

            {/* Subtitle */}
            <p
              style={fadeUp(0.3)}
              className="text-gray-900 text-[15px] leading-[1.7] mb-5 max-w-[420px]"
            >
              ICG est un écosystème dermo-cosmétique marocain qui allie
              science, innovation, expertise et vision 360° pour développer
              des marques performantes, accessibles et adaptées aux
              besoins réels du marché.
            </p>

            {/* CTA Buttons */}
            <div style={fadeUp(0.5)} className="flex items-center gap-4 mb-10 flex-wrap w-full sm:w-auto">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2.5 bg-linear-to-r from-[#e0296a] to-[#756DAD] hover:shadow-xl hover:shadow-pink-200/60 transition-all duration-500 ease-out transform hover:scale-[1.04] text-white text-[12px] font-normal tracking-wide px-3 py-3 rounded-[4px] w-[47%] sm:w-auto"
              >
                Découvrir nos marques
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center gap-2.5 border border-gray-300 text-gray-600 hover:border-[#e0296a] hover:text-[#e0296a] hover:scale-[1.04] transition-all duration-500 cursor-pointer text-[12px] font-normal tracking-wide px-3 py-3 rounded-[4px] w-[45%] sm:w-auto"
              >
                <svg
                  width="15" height="15" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="1.8"
                  strokeLinecap="round" strokeLinejoin="round"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                Acheter en ligne
              </a>
            </div>

            {/* ── Infinite Brand-Logo Marquee ───────────────────────── */}
            <div style={fadeUp(0.7)} className="w-full overflow-hidden">
              <div className="brand-slider-wrap relative overflow-hidden py-2 w-full">
                <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-14 z-10 bg-gradient-to-r from-white to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-14 z-10 bg-gradient-to-l from-white to-transparent" />

                <div
                  ref={brandTrackRef}
                  className="brand-slider-track flex flex-nowrap items-center w-max"
                >
                  {[...SLIDER_BRANDS, ...SLIDER_BRANDS].map((brand, i) => (
                    <div key={i} className="flex items-center px-5 flex-shrink-0">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="h-8 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer grayscale hover:grayscale-0"
                        draggable={false}
                      />
                      <svg
                        className="ml-5 text-[#e0296a] flex-shrink-0"
                        width="5" height="5" viewBox="0 0 14 14" fill="none"
                      >
                        <path d="M4 7h6M7 4l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* ── DESKTOP ONLY VERTICAL MARQUEE GRID (Completely hidden on mobile) ── */}
          <div 
            style={wrapperIn(0.3)} 
            className="desktop-marquee-container hidden md:grid grid-cols-2 gap-4 h-[840px] w-full max-w-lg lg:max-w-[540px] overflow-hidden relative"
          >
            {/* Column A — Infinite scroll UP */}
            <div className="flex flex-col gap-4 animate-marquee-up will-change-transform">
              {[...PHOTOS_COL1, ...PHOTOS_COL1].map((photo, i) => (
                <div
                  key={i}
                  className="hero-card overflow-hidden rounded-2xl w-full flex-shrink-0"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full object-cover h-[340px]"
                  />
                </div>
              ))}
            </div>

            {/* Column B — Infinite scroll DOWN */}
            <div className="flex flex-col gap-4 animate-marquee-down will-change-transform">
              {[...PHOTOS_COL2, ...PHOTOS_COL2].map((photo, i) => (
                <div
                  key={i}
                  className="hero-card overflow-hidden rounded-2xl w-full flex-shrink-0"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full object-cover h-[340px]"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
} 