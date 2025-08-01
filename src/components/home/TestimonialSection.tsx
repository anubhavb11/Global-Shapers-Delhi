export default function TestimonialSection() {
  return (
    <section className="w-full py-16 px-4 bg-white flex flex-col items-center">
      <div className="max-w-2xl mx-auto text-center">
        <div className="italic text-lg text-[#0D5392] mb-6">“Being a part of the Global Shapers Community has transformed my perspective on leadership and collaboration. Together, we are making a tangible impact on our communities and beyond.”</div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 border-2 border-dashed border-gray-200 rounded-full flex items-center justify-center text-2xl text-gray-400">[Photo]</div>
          <div className="font-semibold text-[#0D5392]">Member Name</div>
          <div className="text-sm text-[#0D5392]">Role / Project Lead</div>
        </div>
      </div>
    </section>
  );
} 