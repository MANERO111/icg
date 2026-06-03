import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-[90%] mx-auto h-[700px] flex flex-col justify-between overflow-hidden rounded-[2.5rem] mt-10"
      style={{
        backgroundImage: "url('/img/vision_hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",

      }}
    >
      {/* <div className="absolute inset-0 bg-black/20"></div> */}

      <div className="relative w-full h-full z-10 flex flex-col text-black justify-end p-12 text-sm space-y-2">
        <span className="text-white md:text-2xl text-2xl  pt-10 ml-10 mt-10 tracking-[0.15em] font-normal">NOTRE PHILOSOPHIE</span>
        <span className="font-semibold text-white md:text-7xl text-4xl  text-left ml-10 leading-15">TRANSFORMER L’EXPERTISE <br /> EN RÉSULTATS VISIBLES</span>
      </div>
    </section>
  );
}
