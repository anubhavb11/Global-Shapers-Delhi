"use client";
import Link from "next/link";
import TeamCard from "../TeamCard";
import { teamMembers } from "../../data/team";

export default function TeamSection() {
  // Get featured team members (first 6 for home page)
  const featuredMembers = teamMembers.slice(0, 6);

  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 bg-white flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0D5392] mb-4 text-center">Our Team</h2>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Meet the passionate young leaders who are driving change and making a difference in our community.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {featuredMembers.map((member) => (
            <TeamCard key={member.fullName} member={member} />
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            href="/team"
            className="bg-[#0D5392] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#08305c] transition-colors inline-flex items-center gap-2"
          >
            Meet Our Full Team
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
