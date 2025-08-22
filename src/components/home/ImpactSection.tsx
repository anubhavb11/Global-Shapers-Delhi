import Image from "next/image";
import Link from "next/link";

export default function ImpactSection() {
  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#0D5392] rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Content */}
            <div className="p-6 sm:p-10 lg:p-12 text-white">
              <p className="text-sm font-semibold opacity-80 mb-3">Impact</p>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
                Empowering Change Through
                <br className="hidden sm:block" /> Collective Action
              </h2>
              <p className="text-base sm:text-lg opacity-90 mb-10 max-w-2xl">
                The New Delhi Hub has successfully completed over 30 impactful projects,
                engaging more than 150 young leaders. Together, we are transforming our
                community and driving sustainable change.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                <div>
                  <div className="text-5xl font-bold mb-2">50+</div>
                  <p className="opacity-90">
                    Active members dedicated to local and global impact.
                  </p>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">6</div>
                  <p className="opacity-90">
                    Ongoing Projects addressing critical community challenges.
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-6">
                <Link
                  href="/about"
                  className="inline-block bg-white text-[#0D5392] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-md"
                >
                  Learn More
                </Link>
                <Link
                  href="/join"
                  className="inline-flex items-center gap-2 text-white font-semibold group"
                >
                  Join Us
                  <span className="transition-transform group-hover:translate-x-0.5">›</span>
                </Link>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative min-h-[260px] sm:min-h-[320px] lg:min-h-full">
              <Image
                src="/images/impact.png"
                alt="Impact projects visual"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/25" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}