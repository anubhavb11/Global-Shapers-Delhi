export default function Media() {
  return (
    <section className="max-w-5xl mx-auto flex flex-col gap-8">
      <h1 className="text-3xl font-bold text-[#0D5392] mb-2">Media & Updates</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {/* Example media card */}
        <div className="bg-white border border-[#0D5392]/10 rounded-lg p-4 flex flex-col items-center">
          <div className="w-full h-32 bg-[#0D5392]/10 rounded mb-2 flex items-center justify-center text-[#0D5392]">[Photo]</div>
          <div className="font-semibold text-base">Event Name</div>
          <div className="text-xs text-gray-500">Short description or date</div>
        </div>
        {/* Repeat for more media items or map from data */}
      </div>
      <div className="flex gap-6 justify-center mt-4">
        <a href="#" className="text-[#0D5392] underline text-base" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="#" className="text-[#0D5392] underline text-base" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="#" className="text-[#0D5392] underline text-base" target="_blank" rel="noopener noreferrer">Linktree</a>
      </div>
    </section>
  );
} 