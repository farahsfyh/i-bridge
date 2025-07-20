import React from 'react';
import { Card, CardContent, Heading, Text } from '@/components/ui';
import { cn } from '@/lib/utils';

export interface SkillCategoryProps {
  title: string;
  description: string;
  icon: string;
  color: 'primary' | 'secondary' | 'highlight' | 'accent';
  className?: string;
  href?: string;
  style?: React.CSSProperties;
}

const SkillCategory = React.forwardRef<HTMLDivElement, SkillCategoryProps>(
  ({ title, description, icon, color, className, href, style }, ref) => {
    const colorClasses = {
      primary: {
        bg: 'bg-accent-primary/10',
        icon: 'text-accent-primary',
        border: 'border-accent-primary/20',
        hover: 'hover:border-accent-primary/40 hover:bg-accent-primary/15'
      },
      secondary: {
        bg: 'bg-accent-secondary/10',
        icon: 'text-accent-secondary',
        border: 'border-accent-secondary/20',
        hover: 'hover:border-accent-secondary/40 hover:bg-accent-secondary/15'
      },
      highlight: {
        bg: 'bg-highlight/10',
        icon: 'text-highlight',
        border: 'border-highlight/20',
        hover: 'hover:border-highlight/40 hover:bg-highlight/15'
      },
      accent: {
        bg: 'bg-accent-primary/5',
        icon: 'text-accent-primary',
        border: 'border-accent-primary/15',
        hover: 'hover:border-accent-primary/30 hover:bg-accent-primary/10'
      }
    };

    const colors = colorClasses[color];

    const content = (
      <Card
        ref={ref}
        className={cn(
          "group cursor-pointer transition-all duration-300 transform hover:-translate-y-1",
          "border-2 hover:shadow-lg h-full w-full",
          colors.bg,
          colors.border,
          colors.hover,
          className
        )}
        style={style}
      >
        <CardContent className="p-6 text-center h-full flex flex-col justify-between">
          <div>
            {/* Icon */}
            <div className={cn(
              "w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
              colors.bg,
              "group-hover:scale-110 transition-transform duration-300"
            )}>
              <span className={cn("text-2xl", colors.icon)}>{icon}</span>
            </div>

            {/* Content */}
            <Heading level={3} className="text-xl font-semibold text-primary-text mb-3 group-hover:text-accent-primary transition-colors">
              {title}
            </Heading>
            <Text variant="muted" className="text-sm leading-relaxed">
              {description}
            </Text>
          </div>

          {/* Hover Indicator */}
          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-8 h-0.5 bg-accent-primary mx-auto rounded-full"></div>
          </div>
        </CardContent>
      </Card>
    );

    if (href) {
      return (
        <a href={href} className="block">
          {content}
        </a>
      );
    }

    return content;
  }
);

SkillCategory.displayName = 'SkillCategory';

export { SkillCategory }; 