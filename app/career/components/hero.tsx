import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative my-4 md:my-24 w-full overflow-hidden bg-white">
      {/* Changed max-w-full on mobile to match the image padding layout, while keeping max-w-[70%] on lg screens */}
      <div className="relative w-full lg:max-w-[70%] mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center min-h-[420px] py-6 lg:py-0 gap-8 lg:gap-0">
        
        {/* ── LEFT: Text content ── */}
        <div className="w-full flex-1 flex flex-col justify-center lg:pr-12 z-10 text-left">
          {/* Headline - Removed <br /> on mobile so text flows naturally like the image */}
          <h1 className="font-bold uppercase text-[1.85rem] sm:text-[2.6rem] lg:text-[3rem] leading-[1.15] tracking-tight mb-5 text-[#e0296a]">
            Une carrière qui évolue aussi vite que vos ambitions
          </h1>

          {/* Body - Left aligned instead of justified to match the picture */}
          <p className="text-gray-900 text-sm md:text-2xl leading-relaxed mb-8 text-left max-md:text-justify">
            Chez ICG, chaque journée est une opportunité de créer, apprendre, lancer, développer et transformer des idées en projets concrets. <br className="hidden md:inline" />
            <span className="font-semibold block mt-2 md:inline md:mt-0">
              Nous recherchons des talents passionnés par la beauté, l&apos;innovation, le digital et l&apos;expérience humaine.
            </span>
          </p>
        </div>

        {/* ── RIGHT: Image (Placed top on mobile via flex-col-reverse) ── */}
        <div className="w-full flex-1 flex justify-center lg:justify-end items-stretch self-stretch relative min-h-[300px] sm:min-h-[450px] lg:min-h-[550px]">
          {/* Decorative gradient blob behind image - HIDDEN on mobile to match image_9691c0.png */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-fuchsia-100 rounded-3xl hidden lg:block" />

          {/* Image wrapper - Added rounded corners for mobile view */}
          <div className="relative w-full lg:max-w-none lg:w-full rounded-[2rem] lg:rounded-none overflow-hidden">
            <Image
              src="/img/career_hero.png" 
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