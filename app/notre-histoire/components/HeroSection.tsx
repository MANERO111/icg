import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-[90%] mx-auto bg-white mt-10 h-[700px] flex flex-col justify-between rounded-4xl relative overflow-hidden"
      style={{
        backgroundImage: "url('/img/notre_histoire.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full mt-[3%]">
        <span className="text-[#e0296a] md:text-2xl text-lg pb-10 pt-10 ml-20 mt-20 font-normal">NOTRE HISTOIRE</span><br /><br />
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
          une vision née
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
          d&apos;un engagement
        </span>
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
