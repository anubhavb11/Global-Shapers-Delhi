import type { Metadata } from "next";
import EventCard from "@/components/EventCard";
import { recentEvents, socialMedia } from "@/data/events";

export const metadata: Metadata = {
  title: "Our Events",
  description: "Explore our recent events and initiatives from the Global Shapers New Delhi Hub.",
  keywords: ["Global Shapers New Delhi", "Events", "Updates", "Delhi NCR", "Youth Leadership"],
  openGraph: {
    title: "Our Events - Global Shapers New Delhi",
    description: "Explore our recent events and initiatives from the Global Shapers New Delhi Hub.",
    url: "/media",
  },
  twitter: {
    title: "Our Events - Global Shapers New Delhi",
    description: "Explore our recent events and initiatives from the Global Shapers New Delhi Hub.",
  },
};

export default function Events() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0D5392] mb-4">
            Our Events
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay connected with our latest events, initiatives, and youth-led dialogues. 
            Follow our journey of creating positive change through leadership and social impact.
          </p>
        </div>

        {/* Recent Events Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#0D5392] mb-8 text-center">
            Recent Events & Initiatives
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {recentEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        {/* Social Media Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#0D5392] mb-6 text-center">
            Connect With Us
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Follow us on social media to stay updated with our latest events, initiatives, and youth leadership opportunities.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialMedia.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${platform.color} text-white rounded-lg p-6 text-center hover:scale-105 transition-transform duration-200 group`}
              >
                <div className="text-3xl mb-2">{platform.icon}</div>
                <div className="font-semibold">{platform.name}</div>
                <div className="text-xs opacity-90 group-hover:opacity-100">
                  Follow us
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-[#0D5392] to-[#1E40AF] rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive updates about upcoming events, youth leadership opportunities, and our impact stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <button className="bg-white text-[#0D5392] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 