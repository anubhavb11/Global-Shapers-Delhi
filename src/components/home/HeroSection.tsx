import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full bg-white py-8 sm:py-12 px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-8 min-h-[80vh]">
      {/* Left: Headline and CTA */}
      <div className="flex-1 flex flex-col items-start max-w-xl text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-[#0D5392] leading-tight">
          Empowering Youth for a Sustainable Future
        </h1>
        <p className="text-base sm:text-lg lg:text-xl mb-6 text-[#0D5392] leading-relaxed">
          Join passionate young leaders in Delhi making a real impact. Together, we drive change for our city and our world.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link href="/join" className="bg-[#0D5392] text-white px-6 py-3 rounded font-semibold text-base sm:text-lg hover:bg-[#08305c] transition text-center">
            Join Us
          </Link>
          <Link href="/projects" className="bg-white border border-[#0D5392] text-[#0D5392] px-6 py-3 rounded font-semibold text-base sm:text-lg hover:bg-[#0D5392]/10 transition text-center">
            Explore Our Work
          </Link>
        </div>
      </div>
      {/* Right: Hero Image Placeholder */}
      <div className="flex-1 flex items-center justify-center w-full max-w-md">
        <div className="w-full aspect-square max-w-xs border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center text-lg sm:text-2xl text-gray-400 p-4">
          [Hero Image]
        </div>
      </div>
    </section>
  );
} 