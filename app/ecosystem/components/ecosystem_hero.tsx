"use client";
import React, { useState } from "react";
import { Users , GraduationCap , Globe , Handshake } from "lucide-react";
export default function EcosystemHero() {
  // Track which tab is active (defaulting to the first one)
  const [activeTab, setActiveTab] = useState( "nos collaborations");

  const tabs = [
    {
      id: "nos collaborations",
      label: "Nos collaborations",
      icon: <Users className={`w-4 h-4 md:w-8 md:h-8 ${activeTab === "nos collaborations" ? "text-pink-600" : "text-gray-800"}`} />,
      href: "#nos-collaborations",

    },
    {
      id: "nos partenaires",
      label: "Nos partenaires",
      icon: <Handshake className={`w-4 h-4 md:w-8 md:h-8 ${activeTab === "nos partenaires" ? "text-pink-600" : "text-gray-800"}`} />,
      href: "#nos-partenaires",

    },
    {
      id: "formation & academie",
      label: "Formation & academie",
      icon: <GraduationCap className={`w-4 h-4 md:w-8 md:h-8 ${activeTab === "formation & academie" ? "text-pink-600" : "text-gray-800"}`} />,
      href: "#formation-academie",

    },
    {
      id: "distribution & réseaux",
      label: "Distribution & réseaux",
      icon: <Globe className={`w-4 h-4 md:w-8 md:h-8 ${activeTab === "distribution & réseaux" ? "text-pink-600" : "text-gray-800"}`} />,
      href: "#distribution-reseaux",

    },
  ];

  return (
    <section className="relative w-[90%] mx-auto  mt-10">
      {/* Main Hero Container */}
      <div
        className="relative w-full h-[400px] md:h-[700px] flex flex-col justify-end overflow-hidden md:rounded-[2.5rem] rounded-xl z-10"
        style={{
          backgroundImage: "url('/img/ecosystem_hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div className="w-full  md:mb-20 mb-5  ">
        <span className="text-[#e0296a] md:text-2xl text-sm md:pb-10 pt-10 md:ml-20 ml-5 mt-20 font-normal">
          ÉCOSYSTÈME ICG</span><br className="max-md:hidden"/><br />
        <span className="md:ml-20 ml-5 mt-10 md:text-7xl text-3xl font-bold uppercase text-white"
          style={
            {
              background: "linear-gradient(to right , #de2a6b , #8761a1)   ",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }
          }
        >
          grandir
        </span><br />
        <span className="md:ml-20 ml-5 md:text-7xl text-3xl font-bold uppercase text-white"
          style={
            {
              background: "linear-gradient(to right, #de2a6b , #8761a1 )",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }
          }
        >
          ensemble
        </span><br />
      </div>
      </div>

      {/* The Floating Navigation Bar */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-30 md:w-[90%] w-[97%] ">
        <div className="bg-white md:rounded-xl rounded-sm shadow-xl flex flex-row items-stretch overflow-hidden md:min-h-[100px] min-h-[40px]">
          {tabs.map((tab, index) => (
            <React.Fragment key={tab.id}>
              <button
                onClick={() => {
                  setActiveTab(tab.id);
                  // Optional: Smooth scroll to section
                  document.querySelector(tab.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`flex-1 flex items-center justify-center md:gap-3 gap-1 md:p-6 p-2 transition-all duration-300
                  ${activeTab === tab.id 
                    ? "border-pink-600 border-b-4 md:border-b-[6px]" 
                    : "border-transparent border-b-4 md:border-b-[6px] hover:bg-gray-50"
                  }`}
              >
                <span className="text-[8px] md:text-3xl">{tab.icon}</span>
                <span className={`font-normal text-[6px] md:text-xl tracking-tight text-gray-800`}>
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