export default function TestimonialSection() {
  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 bg-white flex flex-col items-center">
      <div className="max-w-2xl mx-auto text-center">
        <div className="italic text-base sm:text-lg text-[#0D5392] mb-6 leading-relaxed">
          "Being a part of the Global Shapers Community has transformed my perspective on leadership and collaboration. Together, we are making a tangible impact on our communities and beyond."
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-dashed border-gray-200 rounded-full flex items-center justify-center text-lg sm:text-2xl text-gray-400">[Photo]</div>
          <div className="font-semibold text-[#0D5392] text-sm sm:text-base">Member Name</div>
          <div className="text-xs sm:text-sm text-[#0D5392]">Role / Project Lead</div>
        </div>
      </div>
    </section>
  );
} 