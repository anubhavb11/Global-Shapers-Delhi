import Link from "next/link";

export default function JoinUsSection() {
  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 bg-white flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#0D5392] mb-4 text-center">Join Us in Making Change</h2>
      <p className="text-base sm:text-lg text-[#0D5392] mb-6 text-center max-w-2xl leading-relaxed">
        Be a part of our vibrant community. Lead impactful initiatives for Delhi and beyond.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <Link href="/join" className="bg-[#0D5392] text-white px-6 py-3 rounded font-semibold text-base sm:text-lg hover:bg-[#08305c] transition text-center">
          Join
        </Link>
        <Link href="/contact" className="bg-white border border-[#0D5392] text-[#0D5392] px-6 py-3 rounded font-semibold text-base sm:text-lg hover:bg-[#0D5392]/10 transition text-center">
          Contact
        </Link>
      </div>
    </section>
  );
} 