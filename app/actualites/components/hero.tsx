import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative my-8 lg:my-24 w-full overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col-reverse lg:flex-row justify-evenly items-center min-h-[420px] py-6 lg:py-0 gap-6 lg:gap-0">
        
        {/* ── LEFT: Text content ── */}
        <div className="flex-1 flex flex-col justify-center text-left lg:pr-12 z-10 w-full font-sans">
          {/* Headline */}
          <h1 className="font-bold text-[2.2rem] sm:text-[2.6rem] lg:text-[3rem] leading-[1.15] lg:leading-[1.1] tracking-tight mb-4 text-[#e0296a] uppercase">
            L&apos;ACTUALITÉ QUI FAIT
            <br className="hidden lg:block" />{" "}
            ÉVOLUER NOS MARQUES,
            <br className="hidden lg:block" />{" "}
            NOS ÉQUIPES ET
            <br className="hidden lg:block" />{" "}
            L&apos;UNIVERS DU SOIN
          </h1>

          {/* Body */}
          <p className="text-black text-[14px] lg:text-lg leading-relaxed max-w-[360px] md:max-w-md mb-6 lg:mb-8 font-normal">
            Découvrez les lancements, campagnes, événements, innovations,
            collaborations et projets qui rythment la vie d&apos;Intelligence
            Cosmétique Groupe.
          </p>

          {/* CTAs - Arranged horizontally side-by-side with tighter mobile padding */}
          <div className="flex flex-row flex-wrap gap-2 sm:gap-4 items-center w-full">
            <button className="inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#e0296a] to-[#8761a1] hover:to-[#e0296a] hover:from-[#8761a1] text-white font-medium text-[11px] lg:text-sm px-3 lg:px-6 py-2.5 lg:py-3 rounded-sm lg:rounded-md transition-colors duration-200 shadow-md shadow-pink-200">
              Découvrir les dernières actualités
              <span className="text-[9px] lg:text-xs">▶</span>
            </button>

            <button className="inline-flex items-center justify-center bg-[#f2f2f2] hover:bg-gray-200 text-black font-medium text-[11px] lg:text-sm px-4 lg:px-6 py-2.5 lg:py-3 rounded-full transition-colors duration-200">
              Explorer nos campagnes
            </button>
          </div>
        </div>

        {/* ── RIGHT: Image ── */}
        <div className="flex-1 flex justify-center lg:justify-end items-stretch self-stretch relative min-h-[320px] sm:min-h-[450px] lg:min-h-[550px] w-full">
          {/* Decorative gradient blob behind image - Hidden on mobile view to stay identical to image_eab8e4.png */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-fuchsia-100 rounded-[2rem] lg:rounded-2xl hidden lg:block" />

          {/* Image wrapper */}
          <div className="relative w-full lg:max-w-none lg:w-full rounded-[2rem] lg:rounded-2xl overflow-hidden">
            <Image
              src="/img/actualites_hero.png"
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