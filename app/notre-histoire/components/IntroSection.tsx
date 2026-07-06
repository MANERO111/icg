import React from "react";

export default function IntroSection() {
  return (
    <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-5 md:gap-20 text-gray-800 md:leading-relaxed text-xs lg:text-xl max-md:text-justify">
        <p>
          <span className="font-bold">Depuis 2021</span>, Intelligence Cosmétique Groupe s&apos;est donné
          pour mission de construire un groupe cosmétique marocain innovant,
          capable de créer, développer et promouvoir des marques expertes,
          efficaces et en phase avec les attentes du marché.
        </p>
        <p>
          Avec le lancement de Galby en 2022, puis l&apos;évolution de son identité et
          de sa vision, ICG a affirmé son ambition d&apos;être l&apos;acteur incontournable
          de cet écosystème 360° : en unissant la force de l&apos;action pour un
          besoin précis, soutenu par la science, l&apos;innovation et le digital.
        </p>
      </div>
    </div>
  );
}
