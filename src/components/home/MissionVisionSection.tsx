import Image from "next/image";

export default function MissionVisionSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Vision Column */}
          <div className="text-center">
            {/* Vision Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 relative">
                <Image
                  src="/images/vision.png"
                  alt="Vision Icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            {/* Vision Heading */}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 text-center">
              Vision
            </h2>
            
            {/* Vision Text */}
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              To be a catalyst for change by nurturing empowered youth who inspire progress, 
              champion equity, and transform both Delhi and the wider world into more 
              sustainable and inclusive communities.
            </p>
          </div>
          
          {/* Mission Column */}
          <div className="text-center">
            {/* Mission Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 relative">
                <Image
                  src="/images/misson.png"
                  alt="Mission Icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            {/* Mission Heading */}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 text-center">
              Mission
            </h2>
            
            {/* Mission Text */}
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Empower a diverse community of young leaders in New Delhi to drive innovative 
              solutions for urban challenges, fostering sustainable development, inclusivity, 
              and positive social impact through collaborative projects and partnerships.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
} 