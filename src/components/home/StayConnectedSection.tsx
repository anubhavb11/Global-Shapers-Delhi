import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

export default function StayConnectedSection() {
  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 bg-white">
      <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 max-w-6xl mx-auto">
        {/* Left: Content and Linktree Link */}
        <div className="flex-1 flex flex-col gap-6 max-w-md text-center lg:text-left">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0D5392] mb-2">Stay Connected with Us</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Join our community and keep updated on exciting projects and opportunities at the New Delhi Hub.
          </p>
          <a 
            href="https://linktr.ee/globalshapersdelhihub" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#0D5392] text-white px-6 py-3 rounded font-semibold hover:bg-[#08305c] transition text-sm sm:text-base w-full sm:w-auto"
          >
            Connect with Us
            <FaExternalLinkAlt className="text-sm" />
          </a>
          <p className="text-xs text-gray-500">
            Click to access our Linktree with all our social media links and resources
          </p>
          <div className="flex gap-4 text-[#0D5392] text-xl sm:text-2xl justify-center lg:justify-start">
            <a 
              href="https://www.linkedin.com/company/global-shapers-new-delhi-hub/?originalSubdomain=in" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn" 
              className="hover:text-[#08305c] transition"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://x.com/ShapersDelhi" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="X (Twitter)" 
              className="hover:text-[#08305c] transition"
            >
              <FaXTwitter />
            </a>
            <a 
              href="https://www.instagram.com/globalshapersdelhihub/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram" 
              className="hover:text-[#08305c] transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        {/* Right: Join Us Image */}
        <div className="flex-1 flex items-center justify-center w-full lg:w-auto">
          <div className="relative w-full max-w-sm sm:max-w-md lg:w-80 h-48 sm:h-56 lg:h-64 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/join-us.png"
              alt="Join our community - diverse group of young people collaborating"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
} 