import Image from 'next/image';

export default function MagiclearRoutine() {
  return (
    <section className="bg-white py-12 px-4 max-w-7xl mx-auto font-sans text-[#1a1a1a]">
      
      {/* Top Section: Background Product Pic with Title & Progress Timeline */}
      <div className="w-full h-[700px] rounded-2xl border border-gray-100 shadow-sm overflow-hidden bg-cover bg-center bg-no-repeat mb-10 pt-8 pb-48 md:pb-64 px-4 md:px-8 "
      style={{ backgroundImage: "url('/img/routine_pic.png')" }}
      >
        {/* Main Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-2xl font-bold uppercase tracking-wide text-black mb-3">
            UNE ROUTINE COMPLÈTE POUR UN TEINT UNIFORME
          </h2>
          <p className="text-[15px] md:text-[16px] text-gray-900 leading-relaxed">
            Magiclear propose une approche globale en 4 étapes, permettant de traiter efficacement toutes les phases des problématiques pigmentaires.
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
                HYGIÈNE
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-[#d82365] rounded-full flex items-center justify-center text-white text-sm font-bold mb-2 shadow-sm">
                2
              </div>
              <p className="text-[12px] font-semibold uppercase text-gray-800 tracking-wider leading-tight max-w-[110px]">
                TRAITEMENT D&apos;ATTAQUE
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-[#d82365] rounded-full flex items-center justify-center text-white text-sm font-bold mb-2 shadow-sm">
                3
              </div>
              <p className="text-[12px] font-semibold uppercase text-gray-800 tracking-wider leading-tight max-w-[120px]">
                PRÉVENTION & RÉMANENCE
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-[#d82365] rounded-full flex items-center justify-center text-white text-sm font-bold mb-2 shadow-sm">
                4
              </div>
              <p className="text-[12px] font-semibold uppercase text-gray-800 tracking-wider leading-tight max-w-[110px]">
                PROTECTION SPF 50+
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Single Results Container */}
      <div className= "bg-[#f0f3f8]  p-6 md:p-8 ">
        {/* Progress Grid (Single Image Component) */}
        <div className="w-full max-w-7xl mx-auto mb-8  overflow-hidden ">
          <img
            src="/img/b_after.jpg" // Replace with your single combined 4-step face image
            alt="Evolution des résultats progressifs"
            className='w-full  object-contain'
          />
        </div>

        {/* Professional Footer Statement */}
        <div className="flex items-center justify-center gap-16 max-w-3xl mx-auto  ">
          {/* Doctor Icon Circle */}
          <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0 border border-blue-50">
            <Image 
              src="/img/doctor.png" // Replace with your png doctor icon
              alt="" 
              width={120} 
              height={120} 
            />
          </div>
          {/* Divider line */}
          <div className="w-px h-24 bg-gray-700 hidden sm:block" />
          
          <p className="text-[16px] leading-relaxed text-gray-700">
            Elle accompagne les professionnels comme les consommateurs avec des <span className="font-bold text-black">protocoles fiables et performants.</span>
          </p>
        </div>
      </div>

    </section>
  );
}