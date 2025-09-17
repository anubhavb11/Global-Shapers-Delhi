import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Join Us",
  description: "Join Global Shapers Delhi and become part of a community of young leaders making positive change. Apply now to be part of our initiatives in climate action, mental health, and youth leadership.",
  keywords: ["Join Global Shapers Delhi", "Apply Now", "Youth Leadership", "Volunteer", "Delhi Hub", "Young Leaders", "Social Impact"],
  openGraph: {
    title: "Join Us - Global Shapers Delhi",
    description: "Join Global Shapers Delhi and become part of a community of young leaders making positive change. Apply now to be part of our initiatives in climate action, mental health, and youth leadership.",
    url: "/join",
  },
  twitter: {
    title: "Join Us - Global Shapers Delhi",
    description: "Join Global Shapers Delhi and become part of a community of young leaders making positive change. Apply now to be part of our initiatives in climate action, mental health, and youth leadership.",
  },
};

export default function Join() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D5392] mb-6 text-center leading-tight">
            Join Us in Making Change
          </h1>
          
          {/* Hero Image */}
          <div className="relative w-full max-w-4xl mb-8">
            <div className="relative w-full aspect-[4/3] max-h-[300px] sm:max-h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/join-us.png"
                alt="Join Global Shapers Delhi"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Hero Description */}
          <p className="text-lg sm:text-xl text-[#0D5392] max-w-3xl mx-auto text-center leading-relaxed mb-8">
            Be a part of our vibrant community. Lead impactful initiatives for Delhi and beyond. 
            We welcome passionate young leaders committed to making a difference in our city and the world.
          </p>
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="https://linktr.ee/globalshapersdelhihub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#0D5392] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#08305c] transition duration-300 text-center shadow-lg hover:shadow-xl"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* Recruitment Status Section */}
      <section className="w-full py-12 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0D5392] mb-4">
                Current Recruitment Status
              </h2>
              <p className="text-lg text-gray-600">
                Stay updated on our recruitment cycles and application opportunities
              </p>
            </div>
            
            <div className="bg-[#0D5392]/10 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-lg text-[#0D5392]">
                  Recruitment is currently <span className="text-green-600 font-bold">OPEN</span>
                </span>
              </div>
              <p className="text-center text-gray-700">
                We are actively seeking passionate young leaders to join our community. 
                Applications are being accepted for the current cycle.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-2xl font-bold text-[#0D5392] mb-2">18-27</div>
                <div className="text-gray-600">Age Range</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-2xl font-bold text-[#0D5392] mb-2">Delhi NCR</div>
                <div className="text-gray-600">Location</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-2xl font-bold text-[#0D5392] mb-2">Ongoing</div>
                <div className="text-gray-600">Application Status</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combined Section: Testimonials & Application Process */}
      <section className="w-full py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0D5392] mb-4">
              Application Process
            </h2>
            <p className="text-lg text-gray-600">
              Simple steps to join our community of changemakers
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0D5392] text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0D5392] mb-2">Submit Application</h3>
                  <p className="text-gray-600">Fill out our comprehensive application form with your details and motivation</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0D5392] text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0D5392] mb-2">Interview Process</h3>
                  <p className="text-gray-600">Meet with our team to discuss your goals and alignment with our mission</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0D5392] text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0D5392] mb-2">Join the Community</h3>
                  <p className="text-gray-600">Begin your journey as a Global Shaper and start making impact</p>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="mt-8 text-center">
              <a 
                href="https://linktr.ee/globalshapersdelhihub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#0D5392] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#08305c] transition duration-300 text-center shadow-lg hover:shadow-xl inline-block"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 