"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";

// Placeholder data - using generic high quality placeholders for the brand logos and images
const BRANDS = [
  { name: "MURALES", logo: "/img/capilift.png", bgImage: "/img/caplift_bg.png" },
  { name: "PAUL",     logo: "/img/pauldevartens.png", bgImage: "/img/paul_bg.png" },
  { name: "evoluderm",logo: "/img/evoluderm1.png", bgImage: "/img/evoluderm_bg.png" },
  { name: "Galby",    logo: "/img/galby.png", bgImage: "/img/galby_bg.png" },
  { name: "SOI VRE",  logo: "/img/soivre.png", bgImage: "/img/soivre_bg.png" },
  { name: "ALFA",     logo: "/img/alfa_b.png", bgImage: "/img/alfa_bg.png" },
  { name: "COSMETIX", logo: "/img/cosmetix_b.png", bgImage: "/img/cosmetix_bg.png" },
];

export default function BrandShowcase() {
  const [activeIndex, setActiveIndex] = useState(3); // Start with 'Galby' active

  return (
    <section className="relative w-full h-[850px] md:h-[950px] overflow-hidden bg-white flex flex-col pt-8">
      
      {/* Top Carousel Bar */}
      <div className="w-full absolute z-20 pb-8 flex items-center justify-center px-2 md:px-4">
        
        {/* Left Arrow */}
        <button 
           className="w-8 h-8 md:w-10 md:h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm text-gray-500 hover:bg-gray-50 mx-1 md:mx-4 transition-colors"
           onClick={() => setActiveIndex(prev => Math.max(0, prev - 1))}
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
        </button>

        {/* Brand Logos */}
        <div className="flex items-center space-x-2 md:space-x-6 overflow-hidden max-w-[90%] md:max-w-5xl justify-center py-4">
          {BRANDS.map((brand, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div 
                key={idx}
                className={`flex-shrink-0 bg-white rounded-full flex flex-col items-center justify-center shadow-sm transition-all duration-300 cursor-pointer border border-gray-100 ${
                  isActive ? "w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 drop-shadow-md z-10" : "w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 opacity-60 hover:opacity-100"
                }`}
                onClick={() => setActiveIndex(idx)}
              >
                <div className={`relative flex items-center justify-center overflow-hidden w-full h-full rounded-full`}>
                   <Image 
                     src={brand.logo} 
                     alt={brand.name} 
                     fill 
                     className={`object-contain transition-all duration-300 ${isActive ? 'p-3 md:p-6' : 'p-2 md:p-4'}`}
                   />
                </div>
              </div>
            )
          })}
        </div>

        {/* Right Arrow */}
        <button 
          className="w-8 h-8 md:w-10 md:h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm text-gray-500 hover:bg-gray-50 mx-1 md:mx-4 transition-colors"
          onClick={() => setActiveIndex(prev => Math.min(BRANDS.length - 1, prev + 1))}
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="relative flex-1 w-full flex overflow-hidden">
        {/* Background Image / Model Image */}
        <div className="absolute inset-0 z-0 bg-[#eaeaeb]">
          {BRANDS.map((brand, idx) => (
            <Image 
              key={idx}
              src={brand.bgImage}
              alt={`${brand.name} Campaign`}
              fill
              className={`object-cover object-center transition-opacity duration-700 ease-in-out ${
                activeIndex === idx ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          {/* Subtle gradient to ensure buttons pop */}
          <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent md:bg-none pointer-events-none" />
        </div>

        {/* Inner Content overlay for Buttons and Products */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 flex items-end pb-12 md:pb-24">
          
          {/* Left side actions */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full md:w-auto z-20">
            <button className="bg-[#B6507A] hover:bg-[#974064] text-white px-8 py-3.5 rounded-md font-medium text-lg flex items-center transition-colors shadow-lg w-full sm:w-auto justify-center group">
              Découvrir
              <div className="ml-4 border-l border-white/30 pl-4 transition-transform group-hover:translate-x-1">
                <ChevronRight className="w-5 h-5" />
              </div>
            </button>
            
            <button className="bg-[#e2d5c4]/60 hover:bg-[#e2d5c4]/80 backdrop-blur-md text-gray-900 border border-white/30 px-6 py-3.5 rounded-full font-medium text-lg flex items-center transition-colors shadow-lg w-full sm:w-auto justify-center">
              <div className="w-7 h-7 border border-gray-800 rounded-full flex items-center justify-center mr-3">
                <ShoppingCart className="w-4 h-4 text-gray-800" />
              </div>
              Acheter
            </button>
          </div>

          {/* Right side product cluster placeholder */}
          {/* <div className="absolute right-0 bottom-0 w-[50%] h-full hidden md:flex items-end justify-end pointer-events-none">

            <div className="relative w-[90%] h-[80%]">
              <Image 
                src=""
                alt="Brand Products Cluster"
                fill
                className="object-contain object-bottom drop-shadow-[0_20px_20px_rgba(0,0,0,0.3)]"
              />
            </div>
          </div> */}
          
        </div>
      </div>
      
    </section>
  );
}
