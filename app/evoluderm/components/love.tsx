import Image from 'next/image';

export default function DermaTechSynergy() {
  return (
    <section className="bg-white py-6 px-4 max-w-6xl mx-auto font-sans text-[#1a1a1a]">
      {/* Header Logo Area */}
      <div className="flex justify-center items-center mb-10">
        <h1 className="text-5xl  font-semibold mb-4 text-gray-700" style={{fontFamily: "Poppins"}}>
            <span className='font-light'>Love</span>  everyday 
        </h1>
      </div>

      {/* Intro Grid */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 text-[18px] leading-relaxed text-gray-900 text-justify">
        <p>
          Une marque française d’hygiène et de beauté qui accompagne chaque instant du quotidien avec des soins accessibles, efficaces et sensoriels.
        </p>
        <p>
          Avec plus de 225 produits, Evoluderm propose une offre complète pour répondre à tous les besoins de toute la famille.
        </p>
      </div>

      {/* Core Technology Section */}
      <div className="text-center max-w-5xl mx-auto mb-10">
        <h2 className="text-xl font-bold tracking-wider uppercase mb-4 text-black">
          Des formules simples, naturelles et performantes
        </h2>
        <p className="text-[17px] leading-relaxed text-gray-900  ">
          Evoluderm développe des soins qui allient efficacité et simplicité, avec une attention particulière portée à la qualité des ingrédients.
Les formules sont pensées pour répondre aux besoins quotidiens de la peau, tout en respectant son équilibre naturel et en offrant une expérience sensorielle agréable. 
        </p>
        {/* <p className="text-[17px] leading-relaxed text-gray-900">
          Il agit au cœur de la peau pour :
        </p> */}
      </div>
    </section>
  );
}