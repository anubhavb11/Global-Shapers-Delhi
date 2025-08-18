import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full bg-white py-6 sm:py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Top Heading - Above the image */}
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-4 text-center uppercase tracking-wide">
          WELCOME TO GLOBAL SHAPERS
        </h2>
        
        {/* "DELHI HUB" Text positioned above image with minimal overlay */}
        <div className="relative w-full max-w-4xl mb-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#0D5392] leading-tight uppercase tracking-wide text-center mb-2">
            DELHI HUB
          </h1>
          
          {/* Main Group Photo Container */}
          <div className="relative w-full aspect-[4/3] max-h-[150px] sm:max-h-[300px] rounded-lg overflow-hidden -mt-4">
            <Image
              src="/images/global_shapers_grp.png"
              alt="Global Shapers Delhi Hub Team"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        {/* Slogan - Below the image */}
        <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-black mb-4 text-center leading-tight">
          Shaping a Better Delhi, Driving Global Change.
        </h3>
        
        {/* Descriptive Paragraph - Below the slogan */}
        <p className="text-sm sm:text-base lg:text-lg text-black max-w-3xl mx-auto text-center leading-relaxed mb-8">
          Welcome to the New Delhi Hub of the Global Shapers Community, where passionate young leaders unite to tackle pressing global challenges. Together, we drive impactful projects that foster change and inspire future generations.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link 
            href="/join" 
            className="bg-[#0D5392] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-[#08305c] transition duration-300 text-center shadow-lg hover:shadow-xl"
          >
            Join Us
          </Link>
          <Link 
            href="/projects" 
            className="bg-white border-2 border-[#0D5392] text-[#0D5392] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-[#0D5392]/10 transition duration-300 text-center shadow-lg hover:shadow-xl"
          >
            Explore Our Work
          </Link>
        </div>
      </div>
    </section>
  );
} 