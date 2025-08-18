import Link from "next/link";
import Image from "next/image";

export default function AboutFeature() {
  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Dark blue card with rounded corners */}
        <div className="bg-[#0D5392] rounded-2xl overflow-hidden shadow-xl">
          <div className="flex flex-col lg:flex-row">
            {/* Left: Vertical Photo */}
            <div className="w-full lg:w-1/3 order-2 lg:order-1">
              <div className="relative w-full h-64 lg:h-full min-h-[300px]">
                <Image
                  src="/images/aboutusPic.jpg"
                  alt="Global Shapers Delhi Hub Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Right: Text Content and Button */}
            <div className="w-full lg:w-2/3 order-1 lg:order-2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center lg:text-left mb-4">
                About Us!
              </h2>
              
              {/* Sub-heading */}
              <p className="text-base sm:text-lg text-white text-center lg:text-left mb-6 opacity-90">
                The Global Shapers Delhi Hub is a dynamic community city and the world.
              </p>
              
              {/* Main body text */}
              <p className="text-sm sm:text-base lg:text-lg text-white leading-relaxed mb-8 text-left">
                The Global Shapers Delhi Hub is a dynamic community of young leaders dedicated to creating meaningful impact across New Delhi. As part of the World Economic Forum's Global Shapers Community, we unite passionate individuals from diverse backgrounds to address pressing urban challenges—from sustainability and public health to technology and inclusion. Through innovative projects, collaborative workshops, and strategic partnerships, our members drive positive change while nurturing personal and professional growth. We are committed to diversity, inclusion, and empowering the next generation of changemakers to transform both our city and the world.
              </p>
              
              {/* Button */}
              <div className="text-center lg:text-left">
                <Link 
                  href="/about" 
                  className="inline-block bg-white text-[#0D5392] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl"
                >
                  Explore more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 