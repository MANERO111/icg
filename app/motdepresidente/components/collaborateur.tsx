import Image from "next/image";
import { Quote } from "lucide-react";
export default function FounderSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-16 max-w-7xl mx-auto max-md:pb-20">
      {/* Quote Header — large typographic open-quote block matching the screenshot */}
      <div className="flex items-start gap-5 mb-14">
        {/* Bold red quote block (two stacked rectangles like the pic) */}
        <div className="flex flex-col gap-1 flex-shrink-0 mt-1">
          <Quote className="text-[#e63660] md:w-20 md:h-20 w-10 h-10" />
        </div>
        <h2 className="text-md md:text-3xl font-medium uppercase tracking-wide text-gray-900 ">
          Nous innovons pour enrichir votre quotidien
          <br className="hidden md:block" />
          et élever votre bien-être.
        </h2>
      </div>

      {/* Body */}
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Left: Letter */}
        <div className="flex-1 text-gray-900 text-md md:text-lg max-md:leading-5 text-justify">
          <p className="text-[#e0296a] font-semibold not-italic mb-4 font-sans">
            Chers collaborateurs,
          </p>
          <p>
            Chez ICG, notre vision est de transformer le quotidien par
            l&apos;innovation. Chaque jour est une opportunité de réinventer le
            bien-être en répondant aux besoins et aux rêves de nos
            consommateurs.
          </p>
          <br />
          <p>
            Mon équipe dynamique et moi-même sommes dédiés à créer des solutions
            qui surpassent les attentes, en intégrant la beauté et la santé dans
            chaque foyer.
          </p>
          <br />
          <p>
            Nous sommes guidés par une passion pour l&apos;innovation et
            l&apos;excellence, tout en maintenant des standards de qualité
            irréprochables et en respectant la diversité.
          </p>
          <br />
          <p>
            Nous aspirons également à un avenir durable, où chaque geste et
            chaque innovation comptent.
          </p>
          <br />
          <p>
            Ensemble, faisons de chaque jour une célébration, avec toute ma
            gratitude et mon enthousiasme.
          </p>
          <br />
          <p>Du bien-être pour nous-mêmes et pour les générations futures.</p>
        </div>

        {/* Right: Photo + floating bio card */}
        {/*
          pb-16 gives room below the image so the floating card doesn't get clipped.
          The outer div is NOT overflow-hidden so the card can hang below.
        */}
        <div className="w-full  md:w-[50%] flex-shrink-0 relative ">
          {/* Photo wrapper — rounded top corners, overflow hidden only for the image */}
          <div className="relative h-[400px] w-[400px] md:h-[700px] md:w-full mx-auto rounded-xl overflow-hidden shadow-lg bg-gray-200 ">
            <Image
              src="/img/presidente_pic.png"
              alt="Jihane Hrichi"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Floating bio card — sits half outside the bottom edge of the photo */}
          <div className="absolute -bottom-10 w-[80%] md:w-[80%] mx-auto  left-4 right-4 bg-[#e0296a] rounded-xl px-8 py-4 shadow-xl">
            <h3 className="text-white text-xl md:text-3xl font-bold font-sans">
              Jihane Hrichi
            </h3>
            <p className="text-white/90 md:text-xs text-[8px] font-sans mt-0.5">
              Fondatrice &amp; Dirigeante — Intelligence Cosmétique Groupe
            </p>
            <p className="text-white/80 md:text-xs text-[8px] font-sans mt-2 leading-relaxed">
              Femme d&apos;affaires accomplie, animée par l&apos;ambition et la
              persévérance, forte de plus de 15 ans d&apos;expertise au cœur
              des univers de la cosmétique et de la parapharmacie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}