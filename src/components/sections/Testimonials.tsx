"use client";

import React, { useState, useEffect } from 'react';
import { Container, Heading, Text } from '@/components/ui';
import { Testimonial } from '@/components/sections/Testimonial';
import { cn } from '@/lib/utils';

export interface TestimonialsProps {
  className?: string;
}

const Testimonials = React.forwardRef<HTMLElement, TestimonialsProps>(
  ({ className }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
      {
        quote: "i-Bridge helped me find an amazing local tailor who created custom curtains for my home. The quality was exceptional!",
        author: "Sarah M.",
        role: "Homeowner",
        rating: 5,
        avatar: undefined
      },
      {
        quote: "As a woodworker, i-Bridge has connected me with customers who truly appreciate handcrafted quality.",
        author: "Miguel R.",
        role: "Artisan",
        rating: 5,
        avatar: undefined
      },
      {
        quote: "Found a reliable gardener through i-Bridge who transformed our backyard. Highly recommend!",
        author: "David L.",
        role: "Property Owner",
        rating: 5,
        avatar: undefined
      }
    ];

    // Auto-rotate testimonials
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change every 5 seconds

      return () => clearInterval(interval);
    }, [testimonials.length]);

    const goToTestimonial = (index: number) => {
      setCurrentIndex(index);
    };

    const goToPrevious = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    };

    const goToNext = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    };

    return (
      <section
        ref={ref}
        id="testimonials"
        className={`py-20 bg-white ${className || ''}`}
        aria-labelledby="testimonials-heading"
      >
        <Container>
          {/* Section Header */}
          <div className="text-center mb-16">
            <Heading 
              level={2} 
              id="testimonials-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-text mb-6"
            >
              What Our Community Says
            </Heading>
            <Text 
              variant="lead" 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Real stories from people who have found trusted talent and meaningful opportunities through i-Bridge.
            </Text>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative max-w-4xl mx-auto">
            {/* Testimonials Container */}
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <Testimonial
                      quote={testimonial.quote}
                      author={testimonial.author}
                      role={testimonial.role}
                      rating={testimonial.rating}
                      avatar={testimonial.avatar}
                      isActive={index === currentIndex}
                      className="animate-fade-in-up"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 lg:-translate-x-8 bg-white border-2 border-accent-primary/20 hover:border-accent-primary/40 text-accent-primary hover:bg-accent-primary hover:text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
              aria-label="Previous testimonial"
            >
              <span className="text-xl">‹</span>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 lg:translate-x-8 bg-white border-2 border-accent-primary/20 hover:border-accent-primary/40 text-accent-primary hover:bg-accent-primary hover:text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
              aria-label="Next testimonial"
            >
              <span className="text-xl">›</span>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2",
                    index === currentIndex 
                      ? "bg-accent-primary" 
                      : "bg-gray-300 hover:bg-gray-400"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === currentIndex ? "true" : "false"}
                />
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <Text variant="muted" className="mb-6">
              Join thousands of satisfied users who trust i-Bridge
            </Text>
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span className="text-sm font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">👥</span>
                <span className="text-sm font-medium">10K+ Users</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                <span className="text-sm font-medium">Verified Professionals</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }
);

Testimonials.displayName = 'Testimonials';

export { Testimonials }; 