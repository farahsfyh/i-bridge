import React from 'react';
import { Container, Heading, Text } from '@/components/ui';

export interface HeroProps {
  className?: string;
}

const Hero = React.forwardRef<HTMLElement, HeroProps>(
  ({ className }, ref) => {
    return (
      <section
        ref={ref}
        className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-24 ${className || ''}`}
        aria-labelledby="hero-heading"
      >
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-background via-primary-background/95 to-accent-primary/10">
          {/* Placeholder for hero image/montage */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-accent-primary/20 rounded-full blur-xl"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-accent-secondary/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-highlight/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-accent-primary/20 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Content */}
        <Container className="relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8 pt-8">
            {/* Main Headline */}
            <Heading 
              level={1} 
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              id="hero-heading"
            >
              Your Bridge to{' '}
              <span className="text-accent-primary block">Trusted Skills</span>
            </Heading>

            {/* Sub-headline */}
            <Text 
              variant="lead" 
              className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-700 leading-relaxed"
            >
              From traditional crafts to essential home services, i-Bridge connects 
              communities and empowers local talent.
            </Text>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <a 
                href="#get-started"
                className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-highlight hover:bg-highlight/90 text-primary-text focus:ring-highlight shadow-sm px-8 py-4 text-lg"
              >
                Get Started Now
              </a>
              <a 
                href="#how-it-works"
                className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border-2 border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white focus:ring-accent-primary px-8 py-4 text-lg"
              >
                Learn How It Works
              </a>
            </div>

            {/* Trust indicators */}
            <div className="pt-12">
              <Text variant="muted" className="mb-4">
                Trusted by communities nationwide
              </Text>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-accent-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-accent-primary font-bold text-sm">✓</span>
                  </div>
                  <Text size="sm" variant="muted">Verified Skills</Text>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-accent-secondary/20 rounded-full flex items-center justify-center">
                    <span className="text-accent-secondary font-bold text-sm">✓</span>
                  </div>
                  <Text size="sm" variant="muted">Local Talent</Text>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-highlight/20 rounded-full flex items-center justify-center">
                    <span className="text-highlight font-bold text-sm">✓</span>
                  </div>
                  <Text size="sm" variant="muted">Secure Payments</Text>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-text/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-text/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    );
  }
);

Hero.displayName = 'Hero';

export { Hero }; 