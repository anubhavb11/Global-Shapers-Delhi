export default function ImpactStats() {
  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-8 sm:gap-12 bg-white">
      {/* Left: Headline and Stats */}
      <div className="flex-1 flex flex-col gap-6 max-w-xl text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0D5392] leading-tight">
          Empowering Change Through Collective Action
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mt-4 justify-center lg:justify-start">
          <div className="flex flex-col items-center lg:items-start">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#0D5392]">150+</div>
            <div className="text-sm sm:text-base text-[#0D5392]">Members</div>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#0D5392]">30+</div>
            <div className="text-sm sm:text-base text-[#0D5392]">Projects</div>
          </div>
        </div>
        <div className="text-xs sm:text-sm text-[#0D5392] mt-2">Location: Delhi, India</div>
      </div>
      {/* Right: Video/Image Placeholder */}
      <div className="flex-1 flex items-center justify-center order-2 lg:order-1">
        <div className="w-full max-w-sm sm:w-80 h-32 sm:h-48 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center text-lg sm:text-2xl text-gray-400 p-4">
          [Video/Image]
        </div>
      </div>
    </section>
  );
} 