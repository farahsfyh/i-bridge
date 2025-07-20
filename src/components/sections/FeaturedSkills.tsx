import React from 'react';
import { Container, Heading, Text } from '@/components/ui';
import { SkillCategory } from '@/components/sections/SkillCategory';

export interface FeaturedSkillsProps {
  className?: string;
}

const FeaturedSkills = React.forwardRef<HTMLElement, FeaturedSkillsProps>(
  ({ className }, ref) => {
    const skillCategories = [
      {
        title: "Home Services",
        description: "Professional cleaning, repairs, and maintenance services for your home.",
        icon: "🏠",
        color: "primary" as const,
        href: "/categories/home-services"
      },
      {
        title: "Traditional Crafts",
        description: "Handcrafted pottery, woodworking, and textile creations with traditional techniques.",
        icon: "🎨",
        color: "secondary" as const,
        href: "/categories/traditional-crafts"
      },
      {
        title: "Gardening & Farming",
        description: "Landscaping, agriculture, and sustainable farming solutions for your space.",
        icon: "🌱",
        color: "highlight" as const,
        href: "/categories/gardening-farming"
      },
      {
        title: "Tailoring & Fashion",
        description: "Custom clothing, alterations, and fashion design services tailored to you.",
        icon: "👗",
        color: "accent" as const,
        href: "/categories/tailoring-fashion"
      },
      {
        title: "Repairs",
        description: "Expert electronics, appliance, and general repair services to fix what's broken.",
        icon: "🔧",
        color: "primary" as const,
        href: "/categories/repairs"
      },
      {
        title: "Art & Design",
        description: "Custom artwork, interior design, and creative solutions for your space.",
        icon: "🎭",
        color: "secondary" as const,
        href: "/categories/art-design"
      }
    ];

    return (
      <section
        ref={ref}
        id="featured-skills"
        className={`py-20 bg-primary-background ${className || ''}`}
        aria-labelledby="featured-skills-heading"
      >
        <Container>
          {/* Section Header */}
          <div className="text-center mb-16">
            <Heading 
              level={2} 
              id="featured-skills-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-text mb-6"
            >
              Featured Skills & Categories
            </Heading>
            <Text 
              variant="lead" 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Discover talented professionals across diverse categories, from traditional crafts to modern services.
            </Text>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <SkillCategory
                key={category.title}
                title={category.title}
                description={category.description}
                icon={category.icon}
                color={category.color}
                href={category.href}
                className="animate-fade-in-up"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both'
                }}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Text variant="muted" className="mb-6">
              Can&apos;t find what you&apos;re looking for? Explore our complete directory of skills and services.
            </Text>
            <a 
              href="/categories"
              className="inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white hover:bg-gray-50 text-primary-text focus:ring-accent-primary shadow-sm px-8 py-3 text-lg border border-gray-200"
            >
              Explore All Skills
              <span className="text-lg">→</span>
            </a>
          </div>
        </Container>
      </section>
    );
  }
);

FeaturedSkills.displayName = 'FeaturedSkills';

export { FeaturedSkills }; 