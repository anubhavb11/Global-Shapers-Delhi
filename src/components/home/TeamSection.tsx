import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function TeamSection() {
  return (
    <section className="w-full py-16 px-4 bg-white flex flex-col items-center">
      <h2 className="text-3xl font-bold text-[#0D5392] mb-8">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-5xl mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col items-center bg-white border border-gray-100 rounded-lg p-6">
            <div className="w-24 h-24 border-2 border-dashed border-gray-200 rounded-full flex items-center justify-center text-2xl text-gray-400 mb-4">[Photo]</div>
            <div className="font-semibold text-lg text-[#0D5392]">Name Surname</div>
            <div className="text-sm text-[#0D5392] mb-2">Leadership Role</div>
            <div className="flex gap-3 mt-2 text-[#0D5392]">
              <FaLinkedin />
              <FaTwitter />
              <FaEnvelope />
            </div>
          </div>
        ))}
      </div>
      <button className="bg-[#0D5392] text-white px-6 py-2 rounded font-semibold text-base hover:bg-[#08305c] transition">See All</button>
    </section>
  );
} 