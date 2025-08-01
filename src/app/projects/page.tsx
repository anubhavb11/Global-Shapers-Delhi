export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto flex flex-col gap-8">
      <h1 className="text-3xl font-bold text-[#0D5392] mb-2">Projects</h1>
      {/* Filter placeholder */}
      <div className="flex gap-4 mb-6">
        <button className="px-4 py-2 rounded bg-[#0D5392] text-white">All</button>
        <button className="px-4 py-2 rounded bg-[#0D5392]/10 text-[#0D5392]">Climate</button>
        <button className="px-4 py-2 rounded bg-[#0D5392]/10 text-[#0D5392]">Education</button>
        <button className="px-4 py-2 rounded bg-[#0D5392]/10 text-[#0D5392]">Mental Health</button>
        {/* Add more filters as needed */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Example project card */}
        <div className="bg-white border border-[#0D5392]/10 rounded-lg p-4 flex flex-col gap-2">
          <div className="w-full h-32 bg-[#0D5392]/10 rounded mb-2 flex items-center justify-center text-[#0D5392]">[Image]</div>
          <div className="font-semibold text-lg">Project Name</div>
          <div className="text-sm text-gray-600">2-3 line summary of the project goes here. Brief, impactful, and clear.</div>
          <div className="flex gap-2 mt-2">
            <span className="bg-[#0D5392]/10 text-[#0D5392] px-2 py-1 rounded text-xs">Climate</span>
            {/* Add more tags as needed */}
          </div>
          <a href="#" className="text-[#0D5392] underline text-sm mt-2">Read more</a>
        </div>
        {/* Repeat for more projects or map from data */}
      </div>
    </section>
  );
} 