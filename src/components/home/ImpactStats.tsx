export default function ImpactStats() {
  return (
    <section className="w-full py-16 px-4 flex flex-col md:flex-row items-center gap-12 bg-white">
      {/* Left: Headline and Stats */}
      <div className="flex-1 flex flex-col gap-6 max-w-xl">
        <h2 className="text-3xl font-bold text-[#0D5392]">Empowering Change Through Collective Action</h2>
        <div className="flex gap-8 mt-4">
          <div className="flex flex-col items-center">
            <div className="text-3xl font-extrabold text-[#0D5392]">150+</div>
            <div className="text-base text-[#0D5392]">Members</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-extrabold text-[#0D5392]">30+</div>
            <div className="text-base text-[#0D5392]">Projects</div>
          </div>
        </div>
        <div className="text-sm text-[#0D5392] mt-2">Location: Delhi, India</div>
      </div>
      {/* Right: Video/Image Placeholder */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-80 h-48 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center text-2xl text-gray-400">
          [Video/Image]
        </div>
      </div>
    </section>
  );
} 