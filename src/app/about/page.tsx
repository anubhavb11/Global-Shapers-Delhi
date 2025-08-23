export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full py-16 px-4 sm:px-6 bg-gradient-to-br from-[#0D5392] to-[#08305c] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            About Us
          </h1>
          <p className="text-xl sm:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Global Shapers Delhi Hub is a dynamic community of young people driven to create positive change in our city and beyond.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="w-full py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D5392] mb-6">
              Who We Are
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                We are a part of the <strong>Global Shapers Community</strong>, an initiative of the World Economic Forum (WEF), which unites passionate changemakers dedicated to improving the state of the world through local action.
              </p>
              <p>
                We believe in the power of youth to influence dialogue and drive impact. Our members are committed to addressing the most pressing challenges of our time, from climate action and education to gender equity and civic engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="w-full py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D5392] mb-6">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our work is consistently delivered through three core pillars that drive our mission forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Interaction */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[#0D5392] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0D5392] mb-4 text-center">Interaction</h3>
              <p className="text-gray-600 leading-relaxed">
                We actively collaborate with a diverse range of stakeholders, including leaders from business, government, and civil society, as well as fellow members of the World Economic Forum. This engagement fosters a vibrant exchange of ideas and resources.
              </p>
            </div>

            {/* Insight */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[#0D5392] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0D5392] mb-4 text-center">Insight</h3>
              <p className="text-gray-600 leading-relaxed">
                We create value by providing our members with unique insights that engender a better understanding of global, regional, and industry agendas. This knowledge equips us to develop informed and strategic solutions.
              </p>
            </div>

            {/* Impact */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[#0D5392] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0D5392] mb-4 text-center">Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                We deliver tangible results by catalyzing and enhancing innovative, community-driven solutions to pressing local and global challenges. Our projects are designed to create lasting, sustainable change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D5392] mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our actions are guided by a set of core values that define our community and drive our mission forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Commitment to the Community",
              "Transparency and Accountability", 
              "Impact and Sustainability",
              "Integrity",
              "Diversity and Inclusivity",
              "Humility"
            ].map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#0D5392]">
                <h3 className="text-lg font-semibold text-[#0D5392] mb-2">{value}</h3>
                <p className="text-gray-600 text-sm">
                  {value === "Commitment to the Community" && "We are dedicated to serving and uplifting the communities we work with."}
                  {value === "Transparency and Accountability" && "We operate with openness and take responsibility for our actions and their outcomes."}
                  {value === "Impact and Sustainability" && "Our focus is on creating meaningful and lasting change."}
                  {value === "Integrity" && "We act with honesty and strong moral principles."}
                  {value === "Diversity and Inclusivity" && "We embrace and celebrate the diverse backgrounds, perspectives, and ideas of our members and partners."}
                  {value === "Humility" && "We approach our work with a sense of humbleness and a willingness to learn from others."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="w-full py-16 px-4 sm:px-6 bg-[#0D5392] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Our Global Presence
              </h2>
              <div className="space-y-4 text-lg opacity-90 leading-relaxed">
                <p>
                  The Global Shapers Delhi Hub is one of over <strong>500 city-based hubs</strong> operating in more than <strong>150 countries and territories</strong>.
                </p>
                <p>
                  This extensive network allows us to learn from and contribute to a global movement of young leaders driving grassroots change. We are proud to represent Delhi on this worldwide platform, connecting local action to global solutions.
                </p>
              </div>
              <div className="mt-8">
                <a 
                  href="https://www.globalshapers.org/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-white text-[#0D5392] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg"
                >
                  Learn More at Global Shapers
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-white/10 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold mb-4">500+</div>
                  <div className="text-xl opacity-90">City-based hubs worldwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 