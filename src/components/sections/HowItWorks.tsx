import React from 'react';
import { Container, Heading, Text } from '@/components/ui';
import { ProcessStep } from '@/components/sections/ProcessStep';

export interface HowItWorksProps {
  className?: string;
}

const HowItWorks = React.forwardRef<HTMLElement, HowItWorksProps>(
  ({ className }, ref) => {
    const processSteps = [
      {
        step: 1,
        title: "Create Your Profile",
        description: "Simple sign-up to build your showcase or post a job. Set up your skills, experience, and what you're looking for.",
        icon: "👤"
      },
      {
        step: 2,
        title: "Discover & Connect",
        description: "Employers find skilled individuals; talent finds opportunities. Browse profiles and connect with the perfect match.",
        icon: "🔍"
      },
      {
        step: 3,
        title: "Collaborate & Complete",
        description: "Use in-app messaging to agree on terms and get the job done. Communicate seamlessly throughout the project.",
        icon: "🤝"
      },
      {
        step: 4,
        title: "Rate & Review",
        description: "Build trust within the community with a two-way feedback system. Share your experience and help others succeed.",
        icon: "⭐"
      }
    ];

    return (
      <section
        ref={ref}
        id="how-it-works"
        className={`py-20 bg-white ${className || ''}`}
        aria-labelledby="how-it-works-heading"
      >
        <Container>
          {/* Section Header */}
          <div className="text-center mb-16">
            <Heading 
              level={2} 
              id="how-it-works-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-text mb-6"
            >
              How It Works
            </Heading>
            <Text 
              variant="lead" 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Simple steps to connect with trusted local talent or offer your skills to your community.
            </Text>
          </div>

          {/* Process Steps Grid */}
          <div className="relative">
            {/* Desktop Connecting Lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-accent-primary/20 transform -translate-y-1/2 z-0"></div>
            
            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {processSteps.map((step, index) => (
                <ProcessStep
                  key={step.step}
                  step={step.step}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                  delay={index * 100}
                  className="animate-fade-in-up"
                />
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Text variant="muted" className="mb-6">
              Ready to get started? Join thousands of people already using i-Bridge.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/auth"
                className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white hover:bg-gray-50 text-primary-text focus:ring-accent-primary shadow-sm px-8 py-3 text-lg border border-gray-200"
              >
                Get Started Now
              </a>
              <a 
                href="#find-talent"
                className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border-2 border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white focus:ring-accent-primary px-8 py-3 text-lg"
              >
                Browse Talent
              </a>
            </div>
          </div>
        </Container>
      </section>
    );
  }
);

HowItWorks.displayName = 'HowItWorks';

export { HowItWorks }; 