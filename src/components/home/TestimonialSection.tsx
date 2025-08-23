'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Being a part of the Global Shapers Community has transformed my perspective on leadership and collaboration. Together, we are making a tangible impact in our communities and beyond.",
    name: "Aditi Sharma",
    role: "Youth Advocate, NGO",
    image: "/images/testimonials/aditi.jpg"
  },
  {
    id: 2,
    quote: "The Global Shapers Delhi hub has given me the platform to connect with like-minded individuals who are passionate about creating positive change. It's incredible to see what we can achieve together.",
    name: "Rahul Verma",
    role: "Social Entrepreneur",
    image: "/images/testimonials/rahul.jpg"
  },
  {
    id: 3,
    quote: "Through various projects and initiatives, I've learned the true meaning of collaborative leadership. The impact we create ripples far beyond our immediate community.",
    name: "Priya Patel",
    role: "Community Organizer",
    image: "/images/testimonials/priya.jpg"
  },
  {
    id: 4,
    quote: "The mentorship and support I've received from fellow shapers has been invaluable. This community truly embodies the spirit of youth-led change and innovation.",
    name: "Arjun Singh",
    role: "Tech for Good Advocate",
    image: "/images/testimonials/arjun.jpg"
  }
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextTestimonial();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning, isPaused]);

  const nextTestimonial = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevTestimonial = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handleUserInteraction = () => {
    setIsPaused(true);
    // Resume auto-advance after 10 seconds of inactivity
    setTimeout(() => setIsPaused(false), 10000);
  };

  const goToTestimonial = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    handleUserInteraction();
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // Touch handlers for mobile swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleUserInteraction();
      nextTestimonial();
    }
    if (isRightSwipe) {
      handleUserInteraction();
      prevTestimonial();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handleUserInteraction();
        prevTestimonial();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleUserInteraction();
        nextTestimonial();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleUserInteraction, prevTestimonial, nextTestimonial]);

  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 ">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Members Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our community members about their transformative experiences
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Testimonial Cards */}
          <div 
            className="relative overflow-hidden rounded-2xl bg-white shadow-lg"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-8 py-12 sm:px-12 sm:py-16"
                >
                  <div className="max-w-3xl mx-auto text-center">
                    {/* Quote */}
                    <div className="mb-8">
                      <div className="text-4xl sm:text-5xl text-blue-600 mb-4">&ldquo;</div>
                      <blockquote className="text-lg sm:text-xl text-gray-700 leading-relaxed italic">
                        {testimonial.quote}
                      </blockquote>
                      <div className="text-4xl sm:text-5xl text-blue-600 mt-4">&rdquo;</div>
                    </div>

                    {/* Profile */}
                    <div className="flex flex-col items-center gap-4">
                      <div className="relative">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-blue-100 shadow-lg relative">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-lg sm:text-xl text-gray-900">
                          {testimonial.name}
                        </div>
                        <div className="text-sm sm:text-base text-gray-600">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => {
                handleUserInteraction();
                prevTestimonial();
              }}
              disabled={isTransitioning}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed z-10"
              aria-label="Previous testimonial"
            >
              <IoChevronBack className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={() => {
                handleUserInteraction();
                nextTestimonial();
              }}
              disabled={isTransitioning}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed z-10"
              aria-label="Next testimonial"
            >
              <IoChevronForward className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => goToTestimonial(index)}
                disabled={isTransitioning}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>


        </div>


      </div>
    </section>
  );
} 