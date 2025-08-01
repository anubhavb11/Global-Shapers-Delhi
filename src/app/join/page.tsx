export default function Join() {
  return (
    <section className="max-w-3xl mx-auto flex flex-col gap-8">
      <h1 className="text-3xl font-bold text-[#0D5392] mb-2">Join Us</h1>
      <div className="text-lg text-[#0D5392] mb-4">
        <p>Interested in joining the Global Shapers New Delhi Hub? We welcome passionate young leaders committed to making a difference in Delhi and beyond.</p>
        <p className="mt-2">Recruitment cycles open periodically. Please check below for the current status and application details.</p>
      </div>
      {/* Recruitment status placeholder */}
      <div className="bg-[#0D5392]/10 rounded p-4 mb-4">
        <span className="font-semibold">Current Status:</span> <span className="text-[#0D5392]">Recruitment is currently <b>open</b> / closed</span>
      </div>
      <a href="#" className="inline-block bg-[#0D5392] text-white px-6 py-3 rounded font-semibold text-lg hover:bg-[#08305c] transition">Apply Now</a>
      {/* Testimonials placeholder */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">What Our Members Say</h2>
        <div className="w-full h-24 bg-[#0D5392]/10 rounded flex items-center justify-center text-[#0D5392] text-base">[Add testimonials here]</div>
      </div>
      {/* Recruitment/event image placeholder */}
      <div className="w-full h-40 bg-[#0D5392]/10 rounded flex items-center justify-center text-[#0D5392] text-lg mt-8">[Add recruitment or event image here]</div>
    </section>
  );
} 