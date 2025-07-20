import React from 'react';
import { Container, Heading, Text } from '@/components/ui';
import { Feature } from '@/components/sections/Feature';

export interface FeaturesProps {
  className?: string;
}

const Features = React.forwardRef<HTMLElement, FeaturesProps>(
  ({ className }, ref) => {
    const features = [
      {
        title: "Access Diverse Talent",
        description: "Connect with a wide range of skilled professionals, from traditional craftspeople to modern service providers, all in one trusted platform.",
        icon: "🌟",
        color: "primary" as const
      },
      {
        title: "Empower Local Communities",
        description: "Support local artisans and service providers while strengthening your community's economy and preserving valuable traditional skills.",
        icon: "🤝",
        color: "secondary" as const
      },
      {
        title: "Secure & Simple",
        description: "Easy-to-use platform with secure communication and payments. Your safety and convenience are our top priorities.",
        icon: "🔒",
        color: "highlight" as const
      },
      {
        title: "Build Your Reputation",
        description: "Transparent rating system helps you stand out and build trust within your community. Quality work gets recognized and rewarded.",
        icon: "⭐",
        color: "accent" as const
      }
    ];

    return (
      <section
        ref={ref}
        id="features"
        className={`py-20 bg-primary-background ${className || ''}`}
        aria-labelledby="features-heading"
      >
        <Container>
          {/* Section Header */}
          <div className="text-center mb-16">
            <Heading 
              level={2} 
              id="features-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-text mb-6"
            >
              Why Choose i-Bridge?
            </Heading>
            <Text 
              variant="lead" 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Discover the unique advantages that make i-Bridge the preferred platform for connecting communities with trusted local talent.
            </Text>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Feature
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                color={feature.color}
                className="animate-fade-in-up"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both'
                }}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Text variant="muted" className="mb-6">
              Ready to experience the i-Bridge difference? Join our growing community today.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/auth"
                className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white hover:bg-gray-50 text-primary-text focus:ring-accent-primary shadow-sm px-8 py-3 text-lg border border-gray-200"
              >
                Get Started Now
              </a>
              <a 
                href="#how-it-works"
                className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border-2 border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white focus:ring-accent-primary px-8 py-3 text-lg"
              >
                Learn More
              </a>
            </div>
          </div>
        </Container>
      </section>
    );
  }
);

Features.displayName = 'Features';

export { Features }; 