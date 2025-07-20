import React from 'react';
import { Container, Heading, Text } from '@/components/ui';

export interface FinalCTAProps {
  className?: string;
}

const FinalCTA = React.forwardRef<HTMLElement, FinalCTAProps>(
  ({ className }, ref) => {
    return (
      <section
        ref={ref}
        id="final-cta"
        className={`py-20 bg-gradient-to-br from-accent-primary/10 via-accent-secondary/5 to-highlight/10 ${className || ''}`}
        aria-labelledby="final-cta-heading"
      >
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            {/* Background Decorative Elements */}
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-accent-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-accent-secondary/20 rounded-full blur-xl"></div>
              <div className="absolute top-1/2 -left-4 w-8 h-8 bg-highlight/30 rounded-full blur-lg"></div>
              <div className="absolute top-1/2 -right-4 w-6 h-6 bg-accent-primary/25 rounded-full blur-lg"></div>
              
              {/* Main Content */}
              <div className="relative z-10">
                {/* Headline */}
                <Heading 
                  level={2} 
                  id="final-cta-heading"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-text mb-6"
                >
                  Ready to Build Your Bridge?
                </Heading>
                
                {/* Subheadline */}
                <Text 
                  variant="lead" 
                  className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
                >
                  Join thousands of people who are already connecting, creating, and thriving through i-Bridge.
                </Text>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                  {/* Hire Talent Button */}
                  <a 
                    href="/auth"
                    className="group relative inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-4 bg-white hover:bg-gray-50 text-primary-text focus:ring-accent-primary shadow-lg hover:shadow-xl transform hover:-translate-y-1 px-8 py-4 text-lg min-w-[200px] border border-gray-200"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <span>👥</span>
                      I Want to Hire Talent
                      <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </span>
                  </a>

                  {/* Offer Skills Button */}
                  <a 
                    href="/auth"
                    className="group relative inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-4 bg-white hover:bg-gray-50 text-primary-text focus:ring-accent-secondary shadow-lg hover:shadow-xl transform hover:-translate-y-1 px-8 py-4 text-lg min-w-[200px] border border-gray-200"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <span>🛠️</span>
                      I Want to Offer My Skills
                      <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </span>
                  </a>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🔒</span>
                    <span className="text-sm font-medium">Secure & Trusted</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">⚡</span>
                    <span className="text-sm font-medium">Quick Setup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">💯</span>
                    <span className="text-sm font-medium">Free to Join</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }
);

FinalCTA.displayName = 'FinalCTA';

export { FinalCTA }; 