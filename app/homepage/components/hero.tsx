"use client";

import { useEffect, useRef, useState } from "react";

/* ── Brand logos for the infinite slider ──────────────────────────────── */
const SLIDER_BRANDS = [
  {
    name: "Davaj",
    logo: "/img/davaj.png",
  },
  {
    name: "Biomed",
    logo: "/img/biomed.png",
  },
  {
    name: "cosmetix",
    logo: "/img/cosmetix.png",
  },
  {
    name: "Evoluderm",
    logo: "/img/evoluderm.png",
  },
  {
    name: "dentyucral",
    logo: "/img/dentyucral.png",
  },
  {
    name: "aifa",
    logo: "/img/aifa.png",
  },
  {
    name: "cipollino",
    logo: "/img/cipollino.png",
  },
  {
    name: "cleare",
    logo: "/img/cleare.png",
  },
  {
    name: "mira",
    logo: "/img/mira.png",
  },
  {
    name: "reistill",
    logo: "/img/reistill.png",
  },
  {
    name: "volumax",
    logo: "/img/volumax.png",
  },
];

const PHOTOS_COL1 = [
  {
    src: "/img/p3.jpg",
    alt: "Enfant",
  },
  {
    src: "/img/p2.png",
    alt: "Femme profil",
  },
  {
    src: "/img/p6.jpg",
    alt: "Femme souriante",
  },
];

const PHOTOS_COL2 = [
  {
    src: "/img/p5.jpg",
    alt: "Femme asiatique",
  },
  {
    src: "/img/p1.png",
    alt: "Femme souriante",
  },
  {
    src: "/img/p4.jpg",
    alt: "Homme",
  },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  /* Entrance mount trigger */
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  /* Infinite slider RAF loop */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let x = 0;
    let raf: number;
    const step = () => {
      x -= 0.7;
      const half = track.scrollWidth / 2;
      if (Math.abs(x) >= half) x = 0;
      track.style.transform = `translateX(${x}px)`;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  /* Fade-up helper */
  const fadeUp = (delay: number): React.CSSProperties => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(34px)",
    transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
  });

  /* Scale-in helper for photos */
  const photoIn = (delay: number): React.CSSProperties => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "scale(1)" : "scale(0.92)",
    transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
  });

  return (
    <>
      {/* ── Global keyframes ───────────────────────────────────────── */}
      <style>{`
        @keyframes heroFloatUp {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-42px); }
        }
        @keyframes heroFloatDown {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(42px); }
        }
        .hero-col-a { animation: heroFloatUp   7s ease-in-out infinite; }
        .hero-col-b { animation: heroFloatDown  7s ease-in-out infinite; }

        .hero-card img {
          transition: transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .hero-card:hover img { transform: scale(1.08); }

        /* Slider: pause on hover */
        .brand-slider-track { will-change: transform; }
        .brand-slider-wrap:hover .brand-slider-track {
          animation-play-state: paused;
        }
      `}</style>

      <section className="w-full bg-white min-h-[calc(100vh-72px)] flex items-center overflow-hidden relative">
        <div
          className="pointer-events-none absolute top-0 left-0 right-0 h-68 z-10"
          style={{ background: "linear-gradient(to bottom, white 0%, transparent 100%)" }}
        />
        {/* Radial pink glow (decorative) */}
        <div
          className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.045]"
          style={{ background: "radial-gradient(circle, #e0296a 0%, transparent 70%)" }}
        />

        <div className=" max-w-[1480px] mx-auto py-14 lg:py-0 flex flex-col lg:flex-row justify-evenly items-center gap-10 lg:gap-14 w-full">

          {/* ── LEFT ───────────────────────────────────────────────── */}
          <div className="flex-1 max-w-xl z-10 flex items-center lg:items-start flex-col">

            {/* Heading */}
            <h1
              style={fadeUp(0.1)}
              className="text-4xl sm:text-5xl lg:text-[3.3rem] xl:text-[3.7rem] font-black uppercase leading-[1.06] text-[#e0296a] mb-6 tracking-tight"
            >
              International
              <br />
              Expertise.&nbsp;Proudly
              <br />
              Moroccan.
            </h1>

            {/* Subtitle */}
            <p
              style={fadeUp(0.3)}
              className="text-gray-500 text-[15px] leading-[1.7] mb-10 max-w-[420px]"
            >
              ICG est un écosystème dermo-cosmétique marocain qui allie
              science, innovation, expertise et vision 360° pour développer
              des marques performantes, accessibles et adaptées aux
              besoins réels du marché.
            </p>

            {/* CTA Buttons */}
            <div style={fadeUp(0.5)} className="flex items-center gap-4 mb-10 flex-wrap">
              <a
                href="#"
                className="inline-flex items-center gap-2.5 bg-linear-to-r from-[#e0296a] to-[#756DAD] hover:shadow-xl hover:shadow-pink-200/60 transition-all duration-500 ease-out transform hover:scale-[1.04] text-white text-[13px] font-semibold tracking-wide px-6 py-3 rounded-[4px]"
              >
                Découvrir nos marques
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-2.5 border border-gray-300 text-gray-600 hover:border-[#e0296a] hover:text-[#e0296a] hover:scale-[1.04] transition-all duration-500 cursor-pointer text-[13px] font-semibold tracking-wide px-6 py-3 rounded-[4px]"
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

            {/* ── Infinite brand-logo slider ───────────────────────── */}
            <div style={fadeUp(0.7)} className="w-full">
              <div className="brand-slider-wrap relative overflow-hidden py-2">
                {/* Left fade */}
                <div
                  className="pointer-events-none absolute left-0 top-0 bottom-0 w-14 z-10"
                  style={{ background: "linear-gradient(to right, white, transparent)" }}
                />
                {/* Right fade */}
                <div
                  className="pointer-events-none absolute right-0 top-0 bottom-0 w-14 z-10"
                  style={{ background: "linear-gradient(to left, white, transparent)" }}
                />

                {/* Scrolling track (doubled for seamless loop) */}
                <div
                  ref={trackRef}
                  className="brand-slider-track flex items-center"
                  style={{ width: "max-content" }}
                >
                  {[...SLIDER_BRANDS, ...SLIDER_BRANDS].map((brand, i) => (
                    <div key={i} className="flex items-center px-5">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="h-8 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer grayscale hover:grayscale-0"
                        draggable={false}
                      />
                      <svg
                        className="ml-5 text-[#e0296a] flex-shrink-0"
                        width="10" height="10" viewBox="0 0 14 14" fill="none"
                      >
                        <path d="M4 7h6M7 4l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* ── RIGHT — Photo grid with top/bottom white blur ──────── */}
          <div className="flex w-full max-w-lg lg:max-w-[600px] relative hidden md:block">


            <div className="grid grid-cols-2 gap-3">

              {/* Column A — floats upward */}
              <div className="hero-col-a flex flex-col gap-3" style={{ marginTop: "-28px" }}>
                {PHOTOS_COL1.map((photo, i) => (
                  <div
                    key={i}
                    className="hero-card overflow-hidden rounded-2xl"
                    style={photoIn(0.15 + i * 0.14)}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full object-cover"
                      style={{ height: i === 1 ? "400px" : "355px" }}
                    />
                  </div>
                ))}
              </div>

              {/* Column B — floats downward */}
              <div className="hero-col-b flex flex-col gap-3" style={{ marginTop: "38px" }}>
                {PHOTOS_COL2.map((photo, i) => (
                  <div
                    key={i}
                    className="hero-card overflow-hidden rounded-2xl"
                    style={photoIn(0.3 + i * 0.14)}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full object-cover"
                      style={{ height: i === 1 ? "400px" : "355px" }}
                    />
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-68 z-10"
          style={{ background: "linear-gradient(to top, white 0%, transparent 100%)" }}
        />
      </section>
    </>
  );
}