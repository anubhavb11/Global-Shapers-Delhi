import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full bg-white py-12 px-4 flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Left: Headline and CTA */}
      <div className="flex-1 flex flex-col items-start max-w-xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-[#0D5392]">Empowering Youth for a Sustainable Future</h1>
        <p className="text-lg sm:text-xl mb-6 text-[#0D5392]">Join passionate young leaders in Delhi making a real impact. Together, we drive change for our city and our world.</p>
        <Link href="/join" className="bg-[#0D5392] text-white px-6 py-3 rounded font-semibold text-lg hover:bg-[#08305c] transition">Join Us</Link>
      </div>
      {/* Right: Hero Image Placeholder */}
      <div className="flex-1 flex items-center justify-center w-full max-w-md">
        <div className="w-full aspect-square max-w-xs border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center text-2xl text-gray-400">
          [Hero Image]
        </div>
      </div>
    </section>
  );
} 