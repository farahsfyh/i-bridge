import React from 'react';
import { Card, CardContent, Heading, Text } from '@/components/ui';
import { cn } from '@/lib/utils';

export interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  icon: string;
  className?: string;
  delay?: number;
}

const ProcessStep = React.forwardRef<HTMLDivElement, ProcessStepProps>(
  ({ step, title, description, icon, className, delay = 0 }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          "relative group hover:shadow-lg transition-all duration-300",
          className
        )}
        style={{
          animationDelay: `${delay}ms`,
          animationFillMode: 'both'
        }}
      >
        <CardContent className="p-6 text-center">
          {/* Step Number */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="w-8 h-8 bg-accent-primary text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
              {step}
            </div>
          </div>

          {/* Icon */}
          <div className="w-16 h-16 bg-accent-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 mt-2">
            <span className="text-2xl">{icon}</span>
          </div>

          {/* Content */}
          <Heading level={3} className="text-xl font-semibold text-primary-text mb-3">
            {title}
          </Heading>
          <Text variant="muted" className="text-sm leading-relaxed">
            {description}
          </Text>

          {/* Connecting Line (for desktop) */}
          {step < 4 && (
            <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent-primary/30 transform -translate-y-1/2">
              <div className="w-2 h-2 bg-accent-primary rounded-full absolute -top-1 right-0"></div>
            </div>
          )}
        </CardContent>
      </Card>
    );
  }
);

ProcessStep.displayName = 'ProcessStep';

export { ProcessStep }; 