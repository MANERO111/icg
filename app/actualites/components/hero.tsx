import Image from "next/image";
import { ArrowRight } from "lucide-react";
export default function HeroSection() {
  return (
    <section className="relative my-24 w-full overflow-hidden bg-white">


      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 flex justify-evenly flex-col lg:flex-row items-center min-h-[420px] py-12 lg:py-0 gap-10 lg:gap-0">
        {/* ── LEFT: Text content ── */}
        <div className="flex-1 flex flex-col justify-center lg:pr-12 z-10">
          {/* Headline */}
          <h1 className="font-semibold text-[2rem] sm:text-[2.6rem] lg:text-[3rem] leading-[1.1] tracking-tight mb-5">
            <span className="text-[#e0296a]">L'ACTUALITÉ QUI FAIT</span>
            <br />
            <span className="text-[#e0296a]">ÉVOLUER NOS MARQUES,</span>
            <br />
            <span className="text-[#e0296a]">NOS ÉQUIPES ET</span>
            <br />
            <span className="text-[#e0296a]">L'UNIVERS DU SOIN</span>
          </h1>

          {/* Body */}
          <p className="text-black text-lg leading-relaxed max-w-md mb-8">
            Découvrez les lancements, campagnes, événements, innovations,
            collaborations et projets qui rythment la vie d'Intelligence
            Cosmétique Groupe.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 items-center">
            <button className="inline-flex items-center gap-2 bg-linear-to-r from-[#e0296a] to-[#8761a1] hover:to-[#e0296a] hover:from-[#8761a1] text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors duration-200 shadow-md shadow-pink-200">
              Découvrir les dernières actualités
              <ArrowRight />
            </button>

            <button className="inline-flex items-center gap-2 border bg-gray-100 border-gray-100  hover:border-black  text-gray-700 font-semibold text-sm px-6 py-3 rounded-full transition-colors duration-200">
              Explorer nos campagnes
            </button>
          </div>
        </div>

        {/* ── RIGHT: Image ── */}
        <div className="flex-1 flex justify-center lg:justify-end items-stretch self-stretch  relative min-h-[450px] lg:min-h-[550px]">
          {/* Decorative gradient blob behind image */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-fuchsia-100 rounded-2xl" />

          {/* Image wrapper */}
          <div className="relative w-full  lg:max-w-none lg:w-full rounded-none md:rounded-2xl  overflow-hidden">
            <Image
              src="/img/actualites_hero.png" // ← replace with your actual image path
              alt="Gelby Uniskin Serum depigmentant"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}