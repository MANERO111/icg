"use client";
import React, { useState } from "react";

export default function InnovationHero() {
  // Track which tab is active (defaulting to the first one)
  const [activeTab, setActiveTab] = useState("technologies");

  const tabs = [
    {
      id: "technologies",
      label: "Nos technologies",
      icon: "🧬",
      href: "#nos-technologie",
      pic : "/img/lampe.png"
    },
    {
      id: "laboratoires",
      label: "Nos laboratoires",
      icon: "🧪",
      href: "#nos-laboratoires",
      pic : "/img/labo_icon.png"
    },
    {
      id: "synergie",
      label: "Synergie Dermatech",
      icon: "✨",
      href: "#synergie-dermatech",
      pic : "/img/plus.png"
    },
  ];

  return (
    <section className="relative w-[90%] mx-auto  mt-10">
      {/* Main Hero Container */}
      <div
        className="relative w-full h-[600px] md:h-[700px] flex flex-col justify-end overflow-hidden rounded-[2.5rem] z-10"
        style={{
          backgroundImage: "url('/img/innovation_hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        <div className="relative z-20 px-10 md:px-20">
          <p className="text-white md:text-xl text-lg font-medium tracking-widest uppercase mb-4">
            INNOVATION & SCIENCE
          </p>
          <h1 className="text-white text-4xl md:text-7xl font-bold uppercase leading-[1.1] mb-20">
            L&apos;intelligence au <br />
            cœur de chaque <br />
            formule
          </h1>
        </div>
      </div>

      {/* The Floating Navigation Bar */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-30 w-[90%] ">
        <div className="bg-white rounded-xl shadow-xl flex flex-col md:flex-row items-stretch overflow-hidden min-h-[100px]">
          {tabs.map((tab, index) => (
            <React.Fragment key={tab.id}>
              <button
                onClick={() => {
                  setActiveTab(tab.id);
                  // Optional: Smooth scroll to section
                  document.querySelector(tab.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`flex-1 flex items-center justify-center gap-3 p-6 transition-all duration-300
                  ${activeTab === tab.id 
                    ? "border-pink-600 border-b-4 md:border-b-[6px]" 
                    : "border-transparent border-b-4 md:border-b-[6px] hover:bg-gray-50"
                  }`}
              >
                <span className="text-3xl"><img src={tab.pic} alt="" /></span>
                <span className={`font-bold  text-xl tracking-tight text-gray-800`}>
                  {tab.label}
                </span>
              </button>

              {/* Add vertical divider between buttons, but not after the last one */}
              {index < tabs.length - 1 && (
                <div className="hidden md:block w-px bg-gray-500 my-6" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}