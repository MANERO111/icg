import Image from "next/image";
import { ArrowRight } from "lucide-react";
export default function HeroSection() {
  return (
    <section className="relative my-24 w-full overflow-hidden bg-white">


      <div className="relative max-w-[70%] mx-auto px-6 lg:px-12 flex justify-evenly flex-col lg:flex-row items-center min-h-[420px] py-12 lg:py-0 gap-10 lg:gap-0">
        {/* ── LEFT: Text content ── */}
        <div className="flex-1 flex flex-col justify-center lg:pr-12 z-10">
          {/* Headline */}
          <h1 className="font-semibold uppercase text-[2rem] sm:text-[2.6rem] lg:text-[3rem] leading-[1.1] tracking-tight mb-5">
            <span className="text-[#e0296a]">Une carrière qui</span>
            <br />
            <span className="text-[#e0296a]">évolue aussi vite que</span>
            <br />
            <span className="text-[#e0296a]">vos ambitions</span>
          </h1>

          {/* Body */}
          <p className="text-gray-900 text-2xl leading-relaxed  mb-8 text-justify">
            Chez ICG, chaque journée est une opportunité de créer, apprendre, lancer, développer et transformer des idées en projets concrets. <br className="hidden md:inline" />
            <span className="font-semibold">Nous recherchons des talents passionnés par la beauté, l’innovation, le digital et l’expérience humaine.</span>


          </p>


        </div>

        {/* ── RIGHT: Image ── */}
        <div className="flex-1 flex justify-center lg:justify-end items-stretch self-stretch  relative min-h-[450px] lg:min-h-[550px]">
          {/* Decorative gradient blob behind image */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-fuchsia-100 rounded-2xl" />

          {/* Image wrapper */}
          <div className="relative w-full  lg:max-w-none lg:w-full rounded-none md:rounded-2xl  overflow-hidden">
            <Image
              src="/img/career_hero.png" // ← replace with your actual image path
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