import React from 'react';
import { Card, CardContent, Heading, Text } from '@/components/ui';
import { cn } from '@/lib/utils';

export interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  rating: number;
  avatar?: string;
  className?: string;
  isActive?: boolean;
}

const Testimonial = React.forwardRef<HTMLDivElement, TestimonialProps>(
  ({ quote, author, role, rating, avatar, className, isActive = false }, ref) => {
    // Generate star rating display
    const renderStars = (rating: number) => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        stars.push(
          <span
            key={i}
            className={cn(
              "text-lg",
              i <= rating ? "text-highlight" : "text-gray-300"
            )}
          >
            ★
          </span>
        );
      }
      return stars;
    };

    return (
      <Card
        ref={ref}
        className={cn(
          "transition-all duration-500 ease-in-out",
          "bg-white border-2 hover:border-accent-primary/30",
          "transform hover:-translate-y-1 hover:shadow-lg",
          isActive ? "opacity-100 scale-100" : "opacity-60 scale-95",
          className
        )}
      >
        <CardContent className="p-8 text-center">
          {/* Star Rating */}
          <div className="flex justify-center mb-4">
            {renderStars(rating)}
          </div>

          {/* Quote */}
          <blockquote className="mb-6">
            <Text 
              variant="lead" 
              className="text-lg text-gray-700 italic leading-relaxed"
            >
              &ldquo;{quote}&rdquo;
            </Text>
          </blockquote>

          {/* Author Info */}
          <div className="flex items-center justify-center gap-4">
            {/* Avatar */}
            <div className="w-12 h-12 bg-accent-primary/10 rounded-full flex items-center justify-center">
              {avatar ? (
                <img 
                  src={avatar} 
                  alt={`${author} avatar`}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <span className="text-accent-primary font-semibold text-lg">
                  {author.charAt(0).toUpperCase()}
                </span>
              )}
            </div>

            {/* Author Details */}
            <div className="text-left">
              <Heading level={4} className="text-base font-semibold text-primary-text">
                {author}
              </Heading>
              {role && (
                <Text variant="muted" className="text-sm">
                  {role}
                </Text>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
);

Testimonial.displayName = 'Testimonial';

export { Testimonial }; 