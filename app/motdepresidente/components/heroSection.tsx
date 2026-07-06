import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-[90%] mx-auto h-[300px] md:h-[650px] flex flex-col md:object-center object-left justify-between overflow-hidden rounded-[2.5rem] mt-10 font-sans"
      style={{
        backgroundImage: "url('/img/presidente_hero.png')",
        backgroundSize: "cover",
      }}
    >
      {/* <div className="absolute inset-0 bg-black/20"></div> */}

      <div className="relative w-full h-full md:mb-10 z-10 flex flex-col text-black justify-end p-6 md:p-12 text-sm md:space-y-2">
        <span className="text-white md:text-2xl text-[8px]  pt-10 md:ml-10 mt-10 tracking-[0.15em] font-normal">MOT DE LA PRÉSIDENTE</span>
        <span className="font-semibold md:font-semibold text-white md:text-7xl text-2xl  text-left md:ml-10 leading-none md:leading-15">QUAND EXPERTISE <br /> RIME AVEC PASSION</span>
      </div>
    </section>
  );
}
