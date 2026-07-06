import Image from "next/image";

export default function HeroSection() {
  return (
    <section 
      className="w-[92%] md:w-[90%] font-sans mx-auto bg-white mt-10 h-[370px] md:h-[700px] flex flex-col justify-between rounded-3xl md:rounded-4xl relative overflow-hidden"
      style={{
        backgroundImage: "url('/img/notre_histoire.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Container wrapper adjusting padding from extreme desktop left-margin to clean responsive mobile padding */}
      <div className="w-full pl-6 md:pl-20 mt-[8%] md:mt-[3%]">
        <span className="text-[#e0296a] text-xs md:text-2xl font-normal tracking-wider block mb-2 md:mb-4">
          NOTRE HISTOIRE
        </span>
        
        <h2 
          className="text-[2.5rem] sm:text-4xl md:text-7xl font-semibold uppercase leading-[1.1] md:leading-none"
          style={{
            background: "linear-gradient(to right, #de2a6b, #8761a1)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
          une vision <br className="md:hidden" /> née
          <br className="max-md:hidden" />
          d&apos;un <br className="md:hidden" /> engagement
        </h2>
      </div>

      <div className="flex justify-center items-end">
        {/* <Image
        src="/img/Group 229.png"
        alt="Notre Histoire Hero"
        draggable={false}
        width={400}
        height={400}
        className="object-cover object-center mb-10"
        style={{ width: "auto", height: "auto" }}
      /> */}
      </div>
      {/* <div className="absolute inset-0 bg-black/10"></div> */}
    </section>
  );
}