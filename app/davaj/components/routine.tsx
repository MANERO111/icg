import Image from 'next/image';

export default function PdvRoutine() {
  return (
    <section className="bg-white py-12 px-4 max-w-7xl mx-auto font-sans text-[#1a1a1a]">
      
      {/* Top Section: Background Product Pic with Title & Progress Timeline */}
      <div className="w-full h-[700px] rounded-2xl border border-gray-100 shadow-sm overflow-hidden bg-cover bg-center bg-no-repeat mb-10 pt-8 pb-48 md:pb-64 px-4 md:px-8 "
      style={{ backgroundImage: "url('/img/davaj_ps.png')" }}
      >
        {/* Main Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-2xl font-bold uppercase tracking-wide text-black mb-3">
             Une routine simple pour une hygiène intime optimale
          </h2>
          <p className="text-[15px] md:text-[16px] text-gray-900 leading-relaxed">
            Davaj propose une routine adaptée :
          </p>
        </div>

        {/* Horizontal Step Progress Line */}
        <div className="max-w-6xl mx-auto relative px-4 mt-6">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-4 left-[12%] right-[12%] h-[1px] bg-gray-400 -z-0" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0 text-center relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-[#d82365] rounded-full flex items-center justify-center text-white text-sm font-bold mb-2 shadow-sm">
                1
              </div>
              <p className="text-[12px] font-semibold uppercase text-gray-800 tracking-wider leading-tight">
               Nettoyer avec <br />
              un soin adapté
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-[#d82365] rounded-full flex items-center justify-center text-white text-sm font-bold mb-2 shadow-sm">
                2
              </div>
              <p className="text-[12px] font-semibold uppercase text-gray-800 tracking-wider leading-tight max-w-[120px]">
                Respecter le pH <br />
              physiologique
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-[#d82365] rounded-full flex items-center justify-center text-white text-sm font-bold mb-2 shadow-sm">
                3
              </div>
              <p className="text-[12px] font-semibold uppercase text-gray-800 tracking-wider leading-tight max-w-[160px]">
               Maintenir l’équilibre <br />
                  de la flore
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-[#d82365] rounded-full flex items-center justify-center text-white text-sm font-bold mb-2 shadow-sm">
                4
              </div>
              <p className="text-[12px] font-semibold uppercase text-gray-800 tracking-wider leading-tight max-w-[110px]">
                Prévenir les <br />
                inconforts
              </p>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}