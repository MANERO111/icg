"use client"; // Required for useRef and event listeners in Next.js
import { Quote } from 'lucide-react';
import React, { useRef, useState } from 'react';

const TestimonialsSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse Drag Logic
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // The multiplier '2' controls scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const testimonials = [
    { name: "Rachid El Idrissi", role: "Directeur Commercial", image: "img/conf1.png", type: "image-card" },
    { name: "Karim El Mansouri", role: "Directeur de marque Partenaire", quote: "“ICG nous a permis d’accélérer notre implantation au Maroc avec une vision claire du marché et une exécution structurée.”", image: "img/conf1Avatar.png", type: "text-card" },
    { name: "Nadia Tazi", role: "Pharmacienne – Rabat", image: "img/conf2.png", type: "image-card" },
    { name: "Sofia Benali", role: "Brand Manager – Cosmétique Internationale", quote: "Collaborer avec ICG, c'est travailler avec une équipe qui comprend les réalités du terrain.", image: "img/conf2Avatar.png", type: "text-card" },
    // { name: "Omar Kassimi", role: "Distributeur", quote: "Un partenaire fiable pour toute marque cosmétique souhaitant réussir au Maroc.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100", type: "image-card" },
  ];

  return (
    <section className="md:py-20 bg-white overflow-hidden select-none">
      <div className="w-full md:max-w-[80%] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-start items-start mb-4 md:mb-12 md:gap-48">
          <h2 className="text-4xl md:text-5xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#e0296a] to-[#B54182]  leading-tight">
            Ils nous font <br /> confiance
          </h2>
          <p className="text-gray-900 text-lg max-w-3xl pb-2 max-md:hidden">
            Découvrez les retours de pharmacies, distributeurs et partenaires qui collaborent avec Intelligence Cosmétique Groupe à travers le Maroc.

          </p>
        </div>

        {/* Scroll Container */}
        <div 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
          className={`
            flex gap-6 overflow-x-auto pb-10 
            cursor-grab active:cursor-grabbing
            scrollbar-hide snap-x snap-mandatory md:snap-none
          `}
          style={{ 
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE/Edge
            WebkitOverflowScrolling: 'touch' // Smooth mobile
          }}
        >
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[45vw] md:w-[380px] md:h-[500px] h-[300px] snap-center"
            >
              {item.type === 'image-card' ? (
                <div className="relative h-full w-full md:rounded-3xl overflow-hidden shadow-sm pointer-events-none">
                  <img src={item.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="font-semibold text-sm md:text-2xl">{item.name}</h3>
                    <p className="md:text-sm text-xs opacity-70 tracking-widest">{item.role}</p>
                  </div>
                </div>
              ) : (
                <div className="h-full w-full relative bg-[#F9F9F9] rounded-3xl p-3 md:p-10 flex flex-col justify-end pointer-events-none border border-gray-100">
                  {/* <div className="text-[#B54182] opacity-20">
                    <svg width="45" height="45" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9125 16 16.0171 16H19.0171C19.5694 16 20.0171 15.5523 20.0171 15V9C20.0171 8.44772 19.5694 8 19.0171 8H15.0171C14.4648 8 14.0171 8.44772 14.0171 9V11M14.017 21H11.017L11.017 11H14.017M4.01711 21L4.01711 18C4.01711 16.8954 4.91254 16 6.01711 16H9.01711C9.56939 16 10.0171 15.5523 10.0171 15V9C10.0171 8.44772 9.56939 8 9.01711 8H5.01711C4.46483 8 4.01711 8.44772 4.01711 9V11M4.01711 21H1.01711L1.01711 11H4.01711" /></svg>
                  </div> */}
                  <Quote className=" md:w-16 md:h-16 w-10 h-10 text-gray-300  mb-4 absolute top-5 right-10 opacity-50" />
                  <p className="text-[10px] md:text-xl text-gray-700 md:mt-40 mt-24 mb-8 leading-relaxed md:italic">
                  <img src={item.image} alt="" className="md:w-17 md:h-17 w-10 h-10 object-cover object-top rounded-full max-md:mb-4 border-2 border-white shadow-sm" />
                    {item.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <div>
                      <h4 className="font-semibold text-sm md:text-2xl text-gray-900">{item.name}</h4>
                      <p className="text-[7px] md:text-xs text-gray-400  font-medium">{item.role}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;