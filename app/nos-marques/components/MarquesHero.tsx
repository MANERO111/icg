import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function MarquesHero() {
  return (
    <section className="relative w-[90%] mx-auto h-[700px] flex flex-col justify-end overflow-hidden rounded-[2.5rem] mt-10"
      style={{
        backgroundImage: "url('/img/brand_hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <div className="absolute inset-0 bg-black/20"></div> */}
      
      <div className="w-full  mb-20  ">
        <span className="text-[#e0296a] md:text-2xl text-lg pb-10 pt-10 ml-20 mt-20 font-normal">NOS MARQUES</span><br /><br />
        <span className="ml-20 mt-10 md:text-7xl text-4xl font-bold uppercase text-white"
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
          la science au
        </span><br />
        <span className="ml-20 md:text-7xl text-4xl font-bold uppercase text-white"
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
          service de
        </span><br />
        <span className="ml-20 md:text-7xl text-4xl font-bold uppercase text-white"
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
          votre beauté
        </span>
      </div>
    </section>
  );
}
