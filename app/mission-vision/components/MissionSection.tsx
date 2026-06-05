import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="w-full max-w-[90%] mx-auto py-6 px-6 flex flex-col md:flex-row md:grid-cols-[1fr.5_1fr] md:gap-24 gap-12 items-center">
      <div className="relative h-[400px] justify-self-center lg:w-[50%] w-full">
        <Image 
          src="/img/labo.png" 
          alt="Notre mission"
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <div className="lg:w-[50%] w-full">
        <h2 className="text-[#e0296a] text-3xl font-bold mb-4 font-sans ">Notre mission</h2>
        <p className="text-gray-900 w-[80%] font-normal text-[24px] leading-[1.8]">
          Offrir des solutions innovantes et efficaces pour la beauté et le bien-être, en combinant science et expertise. Cette mission s&apos;inscrit dans une démarche concrète : répondre aux besoins réels des consommateurs avec des produits intelligents, utiles, performants et adaptés à leur quotidien.
        </p>
      </div>
    </section>
  );
}
