"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const timelineData = [
  {
    id: "2021",
    yearLabel: "2021",
    image: "/img/2021.jpg",
    imageAlt: "Route 2021",
    items: [
      {
        title: "CRÉATION DE ICGROUPE",
        description: "Fin 2021 : Création de INTELLIGENCE COSMETIQUE GROUPE, marquant le début d'une aventure dans le domaine de la dermo-cosmétique et du bien-être."
      }
    ]
  },
  {
    id: "2022",
    yearLabel: "2022",
    image: "/img/2022.jpg",
    imageAlt: "Laboratoire 2022",
    items: [
      {
        title: "LANCEMENT DE LA 1ÈRE GAMME GALBY DERMATOLOGIE",
        description: "ICGROUPE lance sa première marque en propre : Galby Dermatologie, une marque dermatologique et innovante."
      }
    ]
  },
  {
    id: "2023",
    yearLabel: "2023",
    image: "/img/2023.png",
    imageAlt: "Crème 2023",
    items: [
      {
        title: "LANCEMENT DE SIX NOUVELLES GAMMES",
        description: "Blanca, Galab Lift, Cosmeto Dermatologic, Dermacool, Magistral et Bare Cosmetics, une avancée majeure en renforçant son identité dans les domaines cosmétiques, capillaires et de maternité."
      }
    ]
  },
  {
    id: "2024",
    yearLabel: "2024",
    image: "/img/2024.png",
    imageAlt: "Ondes 2024",
    items: [
      {
        title: "CRÉATION NOUVELLE IDENTITÉ",
        description: "ICGROUPE annonce le lancement de sa nouvelle identité marquant une charte graphique inédite, un logo innovant et des couleurs rafraîchissantes."
      },
      {
        title: "DÉBUT DE DISTRIBUTION DE ...",
        description: "ICGROUPE a lancé la distribution de la marque italienne MURALES en tant que partenaire stratégique avec la marque suisse PAUL DE VARTENS..."
      },
      {
        title: "RELANCEMENT DE GALBY DERMATECH",
        description: "ICGROUPE annonce le lancement de Galby Dermatech avec un logo moderne et une formule révolutionnaire au grand respect de la recherche en dermatologie."
      }
    ]
  },
  {
    id: "2025",
    yearLabel: "2025",
    image: "/img/2025.png",
    imageAlt: "Réseau 2025",
    items: [
      {
        title: "EXPANSION ET INNOVATION",
        description: "Cette année marque l'accélération de lancement de nouvelles gammes Galby et l'étude d'entrer en d'autres pays d'Afrique, en proposant de nouvelles identités pour des besoins spécifiques des consommateurs."
      },
      {
        title: "LANCEMENT DE NOUVELLES MARQUES",
        description: "2026 : ICG continuera son expansion en lançant sur le marché :\n• Des huiles et compléments alimentaires de très haute qualité et très performants.\n• Ainsi qu'une gamme de compléments alimentaires innovante, alliant efficacité, exigence et accessibilité pour tous."
      }
    ]
  },
  {
    id: "2026",
    yearLabel: "2026",
    image: "/img/2026.png",
    imageAlt: "Bulles 2026",
    items: [
      {
        title: "EXPANSION ET INNOVATION",
        description: "Cette phase marque une étape clé avec le lancement de nouvelles gammes Galby et l'ouverture de filiales en Europe en offrant aux dermatologues et praticiens des routines spécifiques du visage."
      }
    ]
  }
];

export default function TimelineSection() {
  const [activeYear, setActiveYear] = useState(timelineData[0].id);
  const [activeStyle, setActiveStyle] = useState<"image" | "text">("image");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const year = entry.target.getAttribute("data-year");
            const type = entry.target.getAttribute("data-type");
            if (year && type) {
              setActiveYear(year);
              setActiveStyle(type as "image" | "text");
            }
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    const elements = document.querySelectorAll(".timeline-observe");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full sm:px-2 lg:px-4 pb-32 relative ">
      {/* Sticky Overlay container */}
      <div className="sticky top-[50vh] w-full flex justify-center pointer-events-none z-20 h-0">
        {/* Stroke Style (Image overlap) */}
        <span
          className={`absolute -translate-y-1/2 text-[6rem] sm:text-[12rem] font-bold tracking-widest text-transparent select-none transition-all duration-700 ease-out ${
            activeStyle === "image" ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ WebkitTextStroke: "2px rgba(224, 41, 106, 0.9)" }}
        >
          {activeYear}
        </span>
        {/* Solid Style (Text overlap) */}
        <span
          className={`absolute -translate-y-1/2 text-[6rem] sm:text-[12rem] font-bold text-[#E74C6F] leading-none select-none transition-all duration-700 ease-out ${
            activeStyle === "text" ? "opacity-100 scale-100" : "opacity-0 scale-110"
          }`}
        >
          {activeYear}
        </span>
      </div>

      <div className="max-w-8xl mx-auto flex flex-col items-center">
        {timelineData.map((section, index) => (
          <div key={section.id} className="w-full flex flex-col items-center">
            {/* Image Banner */}
            <div 
              className="w-full lg:w-[90%] relative z-10 md:h-[400px] h-[250px] md:rounded-2xl overflow-hidden shadow-sm mb-10 timeline-observe"
              data-year={section.yearLabel}
              data-type="image"
            >
              <Image
                src={section.image}
                alt={section.imageAlt}
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Text Items and Spacer Wrapping container */}
            <div 
              className="w-full flex flex-col items-center timeline-observe font-sans"
              data-year={section.id}
              data-type="text"
            >
              <div className="w-full flex flex-col space-y-8 items-center text-center max-w-3xl mb-12 relative z-30">
                {section.items.map((item, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <h3 
                      className="text-xl md:text-4xl font-bold text-gray-900 mb-3 uppercase tracking-wide"
                      style={{ textShadow: "0px 0px 10px rgba(255,255,255,0.9)" }}
                    >
                      {item.title}
                    </h3>
                    <p 
                      className="text-gray-900 text-xs md:text-xl md:leading-relaxed whitespace-pre-line"
                      style={{ textShadow: "0px 0px 8px rgba(255,255,255,0.9)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Spacer except for the last one */}
              {index < timelineData.length - 1 && (
                <div className="w-full flex justify-center md:h-[25vh] h-[15vh] md:min-h-[200px]" />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
