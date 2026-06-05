import Image from 'next/image';

export default function PdvRoutine() {
  return (
    <section className="bg-white py-12 px-4 max-w-7xl mx-auto font-sans text-[#1a1a1a]">
      
      {/* Top Section: Background Product Pic with Title & Progress Timeline */}
      <div className="w-full h-[700px] rounded-2xl border border-gray-100 shadow-sm overflow-hidden bg-cover bg-right bg-no-repeat mb-10 pt-8 pb-48 md:pb-64 px-4 md:px-8 "
      style={{ backgroundImage: "url('/img/reistill_products.png')" }}
      >
        {/* Main Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-2xl font-bold uppercase tracking-wide text-black mb-3">
             Reistill propose une gamme complète de soins adaptés à chaque besoin capillaire :
          </h2>
          <p className="text-[15px] md:text-[16px] text-gray-900 leading-relaxed">
             Une réponse complète pour chaque type de cheveu et chaque besoin spécifique.

          </p>
        </div>

      </div>


    </section>
  );
}