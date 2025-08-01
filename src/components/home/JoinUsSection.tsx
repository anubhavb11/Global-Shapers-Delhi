import Link from "next/link";

export default function JoinUsSection() {
  return (
    <section className="w-full py-16 px-4 bg-white flex flex-col items-center">
      <h2 className="text-3xl font-bold text-[#0D5392] mb-4">Join Us in Making Change</h2>
      <p className="text-lg text-[#0D5392] mb-6 text-center max-w-2xl">Be a part of our vibrant community. Lead impactful initiatives for Delhi and beyond.</p>
      <div className="flex gap-4">
        <Link href="/join" className="bg-[#0D5392] text-white px-6 py-3 rounded font-semibold text-lg hover:bg-[#08305c] transition">Join</Link>
        <Link href="/contact" className="bg-white border border-[#0D5392] text-[#0D5392] px-6 py-3 rounded font-semibold text-lg hover:bg-[#0D5392]/10 transition">Contact</Link>
      </div>
    </section>
  );
} 