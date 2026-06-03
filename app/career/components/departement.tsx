'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';

const DEPARTMENTS = [
  {
    id: 'rse',
    title: 'RSE',
    img : "/img/dep1.png"
  },
  {
    id: 'digital',
    title: 'DIGITAL',
    img : "/img/dep2.png"
  },
  {
    id: 'consulting',
    title: 'CONSULTING',
    img : "/img/dep3.png"
  },
  {
    id: 'distribution',
    title: 'DISTRIBUTION',
    img : "/img/dep4.png"
  },
  {
    id: 'academy',
    title: 'ACADEMY',
    img : "/img/dep5.png"
  },
];

export default function DepartmentsSection() {
  const scrollRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // --- DESKTOP MOUSE SWIPE LOGIC ---
  const handleMouseDown = (e:React.MouseEvent<HTMLDivElement>) => {
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e:React.MouseEvent<HTMLDivElement>) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="bg-[#f2f7f6] py-16 px-4 overflow-hidden select-none">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-extrabold text-black tracking-tight uppercase mb-3">
          Les départements qui <br className="md:hidden" /> donnent vie à l'innovation
        </h2>
        <p className="text-gray-600 text-sm md:text-base font-medium">
          Des expertises complémentaires réunies autour d'une même vision.
        </p>
      </div>

      {/* --- HORIZONTAL SCROLL CONTAINER --- */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`flex gap-6 overflow-x-auto pb-8 pt-2 px-4 scrollbar-hide snap-x snap-mandatory mx-auto max-w-[70%] ${
          isDown ? 'cursor-grabbing' : 'cursor-grab'
        } scroll-smooth`}
        style={{ WebkitOverflowScrolling: 'touch' }} // Smooth momentum scrolling on iOS
      >
        {DEPARTMENTS.map((dept) => (
          <div
            key={dept.id}
            className={`flex-none w-[260px] md:w-[300px] aspect-3/4 rounded-[24px] border-12 ${dept.borderColor} ${dept.bgColor} relative overflow-hidden shadow-xl snap-center`}
          >
 

            {/* Card Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between text-white z-10">
              {/* Top Branding Block */}
              <div className="flex justify-between items-center">
                <img src={dept.img} alt="" className='w-full h-full object-cover' draggable={false}/>
              </div>

              {/* Central/Bottom Large Typography aligned precisely like the graphic
              <div className="w-full">
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[0.85] break-words whitespace-pre-line max-w-[150px]">
                  {dept.title.match(/.{1,4}/g)?.join('\n')}
                </h3>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}