import React from 'react';
import Image from 'next/image';
import { Event } from '@/data/events';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Event Image */}
      <div className="relative h-48">
        <Image
          src={event.image || "/images/impact.png"}
          alt={event.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-white text-sm font-medium">{event.date}</span>
        </div>
        <div className="absolute bottom-4 left-4">
          <div className="text-white text-sm font-medium bg-[#0D5392]/80 backdrop-blur-sm rounded-full px-3 py-1">
            Global Shapers Delhi
          </div>
        </div>
      </div>

      {/* Event Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#0D5392] mb-3 line-clamp-2">
          {event.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {event.description}
        </p>

        {/* Event Highlights */}
        <div className="mb-4">
          <h4 className="font-semibold text-[#0D5392] mb-2">Event Highlights:</h4>
          <ul className="space-y-1">
            {event.highlights.slice(0, 3).map((highlight, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start">
                <span className="text-[#0D5392] mr-2">•</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {event.tags.slice(0, 4).map((tag, index) => (
            <span key={index} className="bg-blue-100 text-[#0D5392] text-xs px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Engagement Metrics */}
        <div className="flex items-center justify-center pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>👍 {event.engagement.likes}</span>
            <span>💬 {event.engagement.comments}</span>
            <span>📤 {event.engagement.shares}</span>
          </div>
        </div>
      </div>
    </div>
  );
} 