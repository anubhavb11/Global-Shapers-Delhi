import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function StayConnectedSection() {
  return (
    <section className="w-full py-16 px-4 bg-white flex flex-col md:flex-row items-center gap-12">
      {/* Left: Newsletter and Socials */}
      <div className="flex-1 flex flex-col gap-6 max-w-md">
        <h2 className="text-2xl font-bold text-[#0D5392] mb-2">Stay Connected with Us</h2>
        <form className="flex gap-2 mb-4">
          <input type="email" placeholder="Your email" className="px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#0D5392]" />
          <button type="submit" className="bg-[#0D5392] text-white px-4 py-2 rounded font-semibold hover:bg-[#08305c] transition">Subscribe</button>
        </form>
        <div className="flex gap-4 text-[#0D5392] text-2xl">
          <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
        </div>
      </div>
      {/* Right: Image Placeholder */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-80 h-48 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center text-2xl text-gray-400">
          [Image]
        </div>
      </div>
    </section>
  );
} 