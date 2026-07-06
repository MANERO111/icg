'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';

const DEPARTMENTS = [
  {
    id: 'rse',
    title: 'RSE',
    img : "/img/dep1.png",
    borderColor: '',
    bgColor: ''
  },
  {
    id: 'digital',
    title: 'DIGITAL',
    img : "/img/dep2.png",
    borderColor: '',
    bgColor: ''
  },
  {
    id: 'consulting',
    title: 'CONSULTING',
    img : "/img/dep3.png",
    borderColor: '',
    bgColor: ''
  },
  {
    id: 'distribution',
    title: 'DISTRIBUTION',
    img : "/img/dep4.png",
    borderColor: '',
    bgColor: ''
  },
  {
    id: 'academy',
    title: 'ACADEMY',
    img : "/img/dep5.png",
    borderColor: '',
    bgColor: ''
  },
];

export default function DepartmentsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // --- DESKTOP MOUSE SWIPE LOGIC ---
  const handleMouseDown = (e:React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
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
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="bg-[#f2f7f6] py-6 md:py-16 md:px-4 overflow-hidden font-sans select-none">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-black tracking-tight uppercase mb-3">
          Les départements qui <br className="md:hidden" /> donnent vie à l&apos;innovation
        </h2>
        <p className="text-gray-600 text-xs md:text-base font-medium">
          Des expertises complémentaires réunies autour d&apos; une même vision.
        </p>
      </div>

      {/* --- HORIZONTAL SCROLL CONTAINER --- */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`flex md:gap-6 gap-2 overflow-x-auto pb-8 pt-2 md:px-4 scrollbar-hide snap-x snap-mandatory mx-auto md:max-w-[70%] max-w-full ${
          isDown ? 'cursor-grabbing' : 'cursor-grab'
        } scroll-smooth`}
        style={{WebkitOverflowScrolling: 'touch'}}
      >
        {DEPARTMENTS.map((dept) => (
          <div
            key={dept.id}
            className={`flex-none w-[180px] md:w-[300px] aspect-3/4 rounded-[12px] md:rounded-[24px] border-4 md:border-12 ${dept.borderColor} ${dept.bgColor} relative overflow-hidden shadow-xl snap-center`}
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