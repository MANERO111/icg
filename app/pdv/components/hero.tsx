'use client';

import React from 'react';
import { Globe } from 'lucide-react';

export default function HeroSection() {
  return (
    <div 
      className="relative w-[90%] sm:w-[85%] mx-auto h-[500px] sm:h-[600px] md:h-[750px] flex flex-col justify-end bg-cover bg-center bg-no-repeat overflow-hidden my-10 md:my-20 rounded-3xl md:rounded-4xl shadow-sm font-sans"
      style={{ 
        backgroundImage: "url('/img/paul_bg.png')" 
      }}
    >
      {/* Optional subtle overlay to ensure content pops if the background image is too bright */}
      <div className="absolute inset-0 bg-black/5 pointer-events-none" />

      {/* --- CENTER BOTTOM: PRODUCT PICTURE GROUP --- */}
      <div className="absolute bottom-0 md:bottom-5 left-1/2 -translate-x-1/2 z-10 w-[85%] sm:w-[70%] md:w-auto flex justify-center items-end select-none">
        <img 
          src="/img/Group_229_w.png" 
          alt="Galby Dermatech Products"
          className="object-contain object-bottom max-h-[220px] sm:max-h-[300px] md:max-h-[380px]"
          draggable="false"
        />
      </div>

      {/* --- BOTTOM LEFT: DECOUVRIR & SOCIAL BUTTONS --- */}
      <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 md:left-12 z-20 flex flex-col gap-2.5 sm:gap-3">
        
        {/* "Découvrir la marque" Button */}
        <button className="flex items-center justify-center gap-2 bg-black/35 hover:bg-black/50 backdrop-blur-md text-white text-[11px] sm:text-xs md:text-sm font-medium py-2 px-3 sm:py-2.5 sm:px-4 rounded-lg border border-white/10 transition-all active:scale-95 shadow-sm">
          <Globe size={14} className="opacity-90 sm:w-4 sm:h-4" />
          <span>Découvrir la marque</span>
        </button>

        {/* Social Icons Row */}
        <div className="flex items-center gap-2">
          {/* Instagram */}
          <a 
            href="#" 
            className="flex items-center justify-center w-8 h-8 sm:w-9 h-9 rounded-lg bg-black/35 hover:bg-black/50 backdrop-blur-md text-white border border-white/10 transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          
          {/* TikTok */}
          <a 
            href="#" 
            className="flex items-center justify-center w-8 h-8 sm:w-9 h-9 rounded-lg bg-black/35 hover:bg-black/50 backdrop-blur-md text-white border border-white/10 transition-colors"
            aria-label="TikTok"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.01 1.56 4.15.94 1.18 2.33 1.95 3.79 2.15v3.83c-1.36-.06-2.71-.53-3.8-1.37-.62-.48-1.15-1.08-1.54-1.78v6.29c.01 2.35-.91 4.67-2.58 6.31-1.76 1.73-4.24 2.58-6.69 2.29-2.43-.24-4.66-1.68-5.88-3.84-1.35-2.31-1.33-5.32.06-7.6 1.25-2.11 3.52-3.48 5.96-3.64v3.88c-.85.1-1.69.49-2.31 1.1-.73.74-1.07 1.83-.9 2.87.16 1.09.89 2.05 1.89 2.45.98.41 2.14.24 2.96-.44.75-.63 1.13-1.62 1.1-2.6V0z"/>
            </svg>
          </a>

          {/* Facebook */}
          <a 
            href="#" 
            className="flex items-center justify-center w-8 h-8 sm:w-9 h-9 rounded-lg bg-black/35 hover:bg-black/50 backdrop-blur-md text-white border border-white/10 transition-colors"
            aria-label="Facebook"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a 
            href="#" 
            className="flex items-center justify-center w-8 h-8 sm:w-9 h-9 rounded-lg bg-black/35 hover:bg-black/50 backdrop-blur-md text-white border border-white/10 transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Top Right Mini Accent Flag matching image_55dd63.jpg layout */}
      <div className="absolute top-4 right-4 md:top-6 md:right-8 w-8 h-4 md:w-10 md:h-5 bg-[#d94545] rounded-md" />
    </div>
  );
}