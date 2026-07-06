import Image from 'next/image';

export default function GalbyProductRanges() {
  return (
    <section className="bg-white py-16 px-4 max-w-7xl mx-auto font-sans text-[#1a1a1a]">
      {/* Title */}
      <div className="text-center md:mb-10">
        <h2 className="text-sm md:text-2xl font-semibold uppercase tracking-wide text-black">
          LES GAMMES GALBY DERMATECH
        </h2>
      </div>

      {/* 3-Column Image Grid */}
      <div className="grid grid-cols-3 gap-2 md:gap-8 mb-10">
        {/* Card 1: HYDRASKIN */}
        <div className="w-full h-auto overflow-hidden md:rounded-2xl rounded-sm shadow-sm">
          <Image
            src="/img/hydraskin_g.png" // Replace with your first top image
            alt="Hydraskin Range"
            width={400}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card 2: MATISKIN */}
        <div className="w-full h-auto overflow-hidden md:rounded-2xl rounded-sm shadow-sm">
          <Image
            src="/img/matiskin_g.png" // Replace with your second top image
            alt="Matiskin Range"
            width={400}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card 3: UNISKIN */}
        <div className="w-full h-auto overflow-hidden md:rounded-2xl rounded-sm shadow-sm">
          <Image
            src="/img/uniskin_g.png" // Replace with your third top image
            alt="Uniskin Range"
            width={400}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

 {/* Middle Explainer Text */}
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 px-2">
        <p className="text-[11px] md:text-[18px] leading-relaxed text-gray-800 font-medium">
          Galby Dermatech s&apos;engage aux côtés des médecins, pharmaciens et parapharmacies en proposant des solutions
        </p>
      </div>

      {/* Process / Pillars Timeline */}
      <div className="max-w-7xl mx-auto px-2 md:px-4 relative">
        {/* Horizontal Progress Line for both Mobile & Desktop to match the layout image */}
        <div className="absolute w-[78%] md:w-[80%] top-[14px] left-[11%] right-[11%] h-[2px] bg-gray-300" />

        {/* Changed grid-cols-2 back to a clean 4-column linear horizontal layout even on mobile */}
        <div className="grid grid-cols-4 gap-0 text-center relative z-10">
          {/* Step 1 */}
          <div className="flex flex-col items-center relative">
            <div className="w-5 h-5 md:w-7 md:h-7 bg-[#d82365] rounded-full flex items-center justify-center text-white mb-3 shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-[11px] sm:text-[14px] md:text-[15px] font-medium text-gray-500">Efficaces</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center relative">
            <div className="w-5 h-5 md:w-7 md:h-7 bg-[#d82365] rounded-full flex items-center justify-center text-white mb-3 shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-[11px] sm:text-[14px] md:text-[15px] font-medium text-gray-500">Testées</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center relative">
            <div className="w-5 h-5 md:w-7 md:h-7 bg-[#d82365] rounded-full flex items-center justify-center text-white mb-3 shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-[11px] sm:text-[14px] md:text-[15px] font-medium text-gray-500">À résultats visibles</p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center relative">
            <div className="w-5 h-5 md:w-7 md:h-7 bg-[#d82365] rounded-full flex items-center justify-center text-white mb-3 shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-[10px] sm:text-[13px] md:text-[15px] font-medium text-gray-500 leading-tight max-w-[90px] sm:max-w-[150px]">
              Basées sur la Microbiome-Tech
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}