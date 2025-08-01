export default function Shapers() {
  return (
    <section className="max-w-5xl mx-auto flex flex-col gap-8">
      <h1 className="text-3xl font-bold text-[#0D5392] mb-2">Our Shapers</h1>
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold text-[#0D5392]">Current Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Example member card */}
          <div className="bg-white border border-[#0D5392]/10 rounded-lg p-4 flex flex-col items-center">
            <div className="w-24 h-24 bg-[#0D5392]/10 rounded-full mb-3 flex items-center justify-center text-[#0D5392]">[Photo]</div>
            <div className="font-semibold text-lg">Name</div>
            <div className="text-sm text-[#0D5392]">Focus Area</div>
            <div className="text-xs text-gray-500">Profession</div>
          </div>
          {/* Repeat for more members or map from data */}
        </div>
      </div>
      <div className="flex flex-col gap-6 mt-8">
        <h2 className="text-2xl font-semibold text-[#0D5392]">Alumni</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Example alumni card */}
          <div className="bg-white border border-[#0D5392]/10 rounded-lg p-4 flex flex-col items-center">
            <div className="w-24 h-24 bg-[#0D5392]/10 rounded-full mb-3 flex items-center justify-center text-[#0D5392]">[Photo]</div>
            <div className="font-semibold text-lg">Name</div>
            <div className="text-sm text-[#0D5392]">Focus Area</div>
            <div className="text-xs text-gray-500">Profession</div>
          </div>
          {/* Repeat for more alumni or map from data */}
        </div>
      </div>
    </section>
  );
} 