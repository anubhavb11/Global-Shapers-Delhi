export default function UpdatesSection() {
  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 bg-white flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#0D5392] mb-8 text-center">Latest Insights & Updates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col items-center bg-white border border-gray-100 rounded-lg p-4 sm:p-6">
            <div className="w-full aspect-video border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center text-lg sm:text-2xl text-gray-400 mb-4 p-4">[Image]</div>
            <div className="font-semibold text-base sm:text-lg text-[#0D5392] mb-2 text-center">Update Title</div>
            <div className="text-xs sm:text-sm text-[#0D5392] mb-2 text-center leading-relaxed">
              Short summary of the update or event goes here.
            </div>
            <div className="text-xs text-gray-500">May 2024</div>
          </div>
        ))}
      </div>
    </section>
  );
} 