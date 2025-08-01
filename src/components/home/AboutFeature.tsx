export default function AboutFeature() {
  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-8 sm:gap-12 bg-white">
      {/* Left: Image Placeholder */}
      <div className="flex-1 flex items-center justify-center order-2 lg:order-1">
        <div className="w-48 h-48 sm:w-64 sm:h-64 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center text-lg sm:text-2xl text-gray-400 p-4">
          [About Image]
        </div>
      </div>
      {/* Right: Feature Section */}
      <div className="flex-1 flex flex-col gap-6 max-w-xl order-1 lg:order-2 text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0D5392]">About Us</h2>
        <p className="text-base sm:text-lg text-[#0D5392] leading-relaxed">
          Delhi Hub is part of the Global Shapers Community, driving local solutions for a better tomorrow.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-4">
          <div className="flex flex-col items-center text-center p-4">
            <span className="text-2xl mb-2">🌍</span>
            <div className="font-semibold text-[#0D5392] text-sm sm:text-base">Our Vision</div>
            <div className="text-xs sm:text-sm text-[#0D5392] mt-1">A sustainable, inclusive, and thriving Delhi.</div>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <span className="text-2xl mb-2">🚀</span>
            <div className="font-semibold text-[#0D5392] text-sm sm:text-base">Our Mission</div>
            <div className="text-xs sm:text-sm text-[#0D5392] mt-1">Empowering youth to lead impactful projects.</div>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <span className="text-2xl mb-2">✨</span>
            <div className="font-semibold text-[#0D5392] text-sm sm:text-base">What Makes Us Unique</div>
            <div className="text-xs sm:text-sm text-[#0D5392] mt-1">Diverse, passionate, and action-oriented community.</div>
          </div>
        </div>
      </div>
    </section>
  );
} 