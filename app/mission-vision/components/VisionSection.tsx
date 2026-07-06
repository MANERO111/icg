import Image from "next/image";

export default function VisionSection() {
  return (
    <section className="w-full max-w-[90%] mx-auto py-6 px-6 flex flex-col md:flex-row md:grid-cols-[1fr_1.5fr] md:gap-24 gap-6 items-center">
      <div className="order-2 md:order-1 lg:w-[50%] w-full max-md:text-center">
        <h2 className="text-[#e0296a] text-2xl md:text-3xl font-bold  md:mb-4 font-sans ">Notre vision</h2>
        <p className="text-gray-900 max-md:mx-auto  w-[95%] md:w-[80%] font-normal text-[13px] md:text-[24px] leading-[1.8]">
          Devenir une référence incontournable dans le secteur cosmétique, aussi bien au Maroc qu’à l’international. <br className="md:hidden" /> ICG porte une vision de leadership construite sur l’innovation, la structuration, la proximité marché et la capacité à évoluer avec son temps.
        </p>
      </div>
      <div className="order-1 md:order-2 relative h-[200px] md:h-[400px]  w-full lg:max-w-[50%] max-w-full justify-self-center rounded-lg md:rounded-4xl overflow-hidden bg-[#0c163b]">
        <Image 
          src="/img/icg.png" 
          alt="Vision Map Background"
          fill
          className="object-cover mix-blend-screen"
        />
        {/* <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 z-10">

           <div className="flex items-center gap-3">
             <div className="text-white text-right leading-tight max-w-[120px]">
               <span className="font-semibold text-xs tracking-wider block">INTELLIGENCE</span>
               <span className="font-semibold text-xs tracking-wider block">COSMETIQUE</span>
               <span className="font-semibold text-xs tracking-wider block">GROUPE</span>
             </div>
             <div className="relative w-24 h-24">
                 <Image src="/img/logo_white.png" alt="ICG Logo" fill className="object-contain" />
             </div>
           </div>
        </div> */}
      </div>
    </section>
  );
}
