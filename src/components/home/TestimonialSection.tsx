'use client';

import { useState, useEffect, useCallback } from 'react';
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
      quote: "Global Shapers Delhi has been instrumental in shaping my understanding of social impact. The collaborative environment and diverse perspectives have enriched my journey as a changemaker.",
      name: "Aakarshi Srivastava",
      role: "Manager, Adam Smith International",
      image: "/images/testimonials/Aakarshi_Srivastava.jpg"
    },
    {
      id: 2,
      quote: "The network and opportunities provided by Global Shapers Delhi have opened doors I never imagined. It's a community that truly believes in the power of young leaders.",
      name: "Akanksha Mehta",
      role: "Student, University of Delhi ",
      image: "/images/testimonials/Akanksha_Mehta.jpg"
    },
  {
    id: 3,
    quote: "Being part of this community has taught me that real change happens when passionate individuals come together with a shared vision for a better tomorrow.",
    name: "Ayush Thakur",
    role: "Consultant, Ministry of Youth Affairs & Sports ",
    image: "/images/testimonials/Ayush_Thakur.jpeg"
  },
  {
    id: 4,
    quote: "The Global Shapers Delhi hub has provided me with invaluable experiences in community building and social innovation. Every project is a learning opportunity.",
    name: "Mahima Bhagat",
    role: "Consultant, Technology Strategy and Transformation - Deloitte India",
    image: "/images/testimonials/Mahima_Bhagat.jpeg"
  },
  {
    id: 5,
    quote: "This community has shown me that age is just a number when it comes to creating meaningful impact. The support and mentorship here are unparalleled.",
    name: "Mannan Morvi",
    role: "Researcher - Crashfree India",
    image: "/images/testimonials/Mannan_Morvi.jpg"
  },
  {
    id: 6,
    quote: "Global Shapers Delhi has been my platform for growth, learning, and making a difference. The collaborative spirit here is truly inspiring.",
    name: "Rishabh Rohilla",
    role: "Founder, Rish R. Overseas & Shamta Foundation",
    image: "/images/testimonials/Rishabh_Rohilla.jpeg"
  },
  {
    id: 7,
    quote: "The diversity of thought and the commitment to positive change in this community is remarkable. It's been an honor to be part of such impactful initiatives.",
    name: "Sanskriti Choubey",
    role: "CGM - Fellow",
    image: "/images/testimonials/Sanskriti_Choubey.jpg"
  },
  {
    id: 8,
    quote: "Through Global Shapers Delhi, I've discovered the power of collective action and the importance of youth voices in shaping our future.",
    name: "Twisha Bansal",
    role: "Fellow (Health Awareness Project)",
    image: "/images/testimonials/Twisha_Bansal.jpeg"
  },
  {
    id: 9,
    quote: "Being part of the Global Shapers Delhi Hub has been one of the most rewarding journeys of my life. I started as a fellow in 2020, full of curiosity and passion to make a difference, and over time, grew into the roles of Shaper, Impact Officer, and Curator. Each step taught me something new — about leadership, collaboration, and the power of community. The experience culminated in the incredible opportunity to be a Davos50 Delegate in 2024, which allowed me to understand global perspectives and the potential of young changemakers. What I cherish most is how this platform constantly challenged me to grow, pushed me to think bigger, gave me a perfect springboard and connected me with inspiring people committed to creating lasting impact. It’s a space full of opportunities, learning, and purpose.",
    name: "Pranidhi Sawhney",
    role: "Consultant, The World Bank",
    image: "/images/testimonials/Pranidhi_Sawhney.jpg"
  },
  {
    id: 10,
    quote: "Being part of the Global Shapers New Delhi Hub has been one of the most rewarding experiences for me. What makes the hub special is not just the ambitious projects we run — on mental health, health, education, climate, and financial literacy — but the energy and commitment of the people behind them. I’ve seen first-hand how the team goes beyond talk and actually builds initiatives that create real impact. Whether it’s challenging stigma around mental health, helping young people make informed financial choices, or opening up opportunities in education and health, the work always feels grounded in what communities really need. For me, the best part has been the culture of collaboration and empathy. Everyone brings different strengths, but we share the same purpose of making change happen. It’s taught me how powerful youth-led action can be when we work together with focus and heart.",
    name: "Arshiya Verma",
    role: "Senior Associate, Dimagi",
    image: "/images/testimonials/Arshiya_Verma.jpg"
  }
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning]);

  const prevTestimonial = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning]);

  const handleUserInteraction = useCallback(() => {
    setIsPaused(true);
    // Resume auto-advance after 10 seconds of inactivity
    setTimeout(() => setIsPaused(false), 10000);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextTestimonial();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning, isPaused, nextTestimonial]);

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
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-8 py-12 sm:px-12 sm:py-16"
                >
                  <div className="max-w-3xl mx-auto text-center">
                    {/* Quote */}
                    <div className="mb-8">
                      <div className="text-4xl sm:text-5xl text-blue-600 mb-4">&ldquo;</div>
                      <blockquote className="text-lg sm:text-xl text-gray-700 leading-relaxed italic">
                        {testimonial.quote.slice(0, 300)}...
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
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const fallback = target.nextElementSibling as HTMLElement;
                              if (fallback) fallback.style.display = 'flex';
                            }}
                          />
                          <div 
                            className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-lg sm:text-xl"
                            style={{ display: 'none' }}
                          >
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