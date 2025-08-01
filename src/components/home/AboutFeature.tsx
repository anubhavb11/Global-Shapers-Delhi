export default function AboutFeature() {
  return (
    <section className="w-full py-16 px-4 flex flex-col md:flex-row items-center gap-12 bg-white">
      {/* Left: Image Placeholder */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-64 h-64 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center text-2xl text-gray-400">
          [About Image]
        </div>
      </div>
      {/* Right: Feature Section */}
      <div className="flex-1 flex flex-col gap-6 max-w-xl">
        <h2 className="text-3xl font-bold text-[#0D5392]">About Us</h2>
        <p className="text-lg text-[#0D5392]">Delhi Hub is part of the Global Shapers Community, driving local solutions for a better tomorrow.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="flex flex-col items-center text-center">
            <span className="text-2xl mb-2">🌍</span>
            <div className="font-semibold text-[#0D5392]">Our Vision</div>
            <div className="text-sm text-[#0D5392]">A sustainable, inclusive, and thriving Delhi.</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-2xl mb-2">🚀</span>
            <div className="font-semibold text-[#0D5392]">Our Mission</div>
            <div className="text-sm text-[#0D5392]">Empowering youth to lead impactful projects.</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-2xl mb-2">✨</span>
            <div className="font-semibold text-[#0D5392]">What Makes Us Unique</div>
            <div className="text-sm text-[#0D5392]">Diverse, passionate, and action-oriented community.</div>
          </div>
        </div>
      </div>
    </section>
  );
} 