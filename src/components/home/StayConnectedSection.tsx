import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function StayConnectedSection() {
  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 bg-white flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
      {/* Left: Newsletter and Socials */}
      <div className="flex-1 flex flex-col gap-6 max-w-md text-center lg:text-left">
        <h2 className="text-xl sm:text-2xl font-bold text-[#0D5392] mb-2">Stay Connected with Us</h2>
        <form className="flex flex-col sm:flex-row gap-2 mb-4">
          <input 
            type="email" 
            placeholder="Your email" 
            className="px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#0D5392] text-sm sm:text-base" 
          />
          <button 
            type="submit" 
            className="bg-[#0D5392] text-white px-4 py-2 rounded font-semibold hover:bg-[#08305c] transition text-sm sm:text-base"
          >
            Subscribe
          </button>
        </form>
        <div className="flex gap-4 text-[#0D5392] text-xl sm:text-2xl justify-center lg:justify-start">
          <a href="#" aria-label="LinkedIn" className="hover:text-[#08305c] transition"><FaLinkedin /></a>
          <a href="#" aria-label="Twitter" className="hover:text-[#08305c] transition"><FaTwitter /></a>
          <a href="#" aria-label="Instagram" className="hover:text-[#08305c] transition"><FaInstagram /></a>
        </div>
      </div>
      {/* Right: Image Placeholder */}
      <div className="flex-1 flex items-center justify-center order-2 lg:order-1">
        <div className="w-full max-w-sm sm:w-80 h-32 sm:h-48 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center text-lg sm:text-2xl text-gray-400 p-4">
          [Image]
        </div>
      </div>
    </section>
  );
} 