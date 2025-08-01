import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function TeamSection() {
  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 bg-white flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#0D5392] mb-8 text-center">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col items-center bg-white border border-gray-100 rounded-lg p-4 sm:p-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 border-2 border-dashed border-gray-200 rounded-full flex items-center justify-center text-lg sm:text-2xl text-gray-400 mb-4">[Photo]</div>
            <div className="font-semibold text-base sm:text-lg text-[#0D5392] text-center">Name Surname</div>
            <div className="text-xs sm:text-sm text-[#0D5392] mb-2 text-center">Leadership Role</div>
            <div className="flex gap-3 mt-2 text-[#0D5392] text-lg sm:text-xl">
              <FaLinkedin className="cursor-pointer hover:text-[#08305c] transition" />
              <FaTwitter className="cursor-pointer hover:text-[#08305c] transition" />
              <FaEnvelope className="cursor-pointer hover:text-[#08305c] transition" />
            </div>
          </div>
        ))}
      </div>
      <button className="bg-[#0D5392] text-white px-6 py-2 rounded font-semibold text-sm sm:text-base hover:bg-[#08305c] transition">
        See All
      </button>
    </section>
  );
} 