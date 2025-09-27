"use client";
import Link from "next/link";
import EventCard from "../EventCard";
import { recentEvents } from "../../data/events";

export default function EventsSection() {
  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 bg-gray-50 flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0D5392] mb-4 text-center">Our Events</h2>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Join us in our latest events and initiatives that bring together young leaders to create meaningful change.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {recentEvents.slice(0, 3).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            href="/events"
            className="bg-[#0D5392] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#08305c] transition-colors inline-flex items-center gap-2"
          >
            View All Events
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
