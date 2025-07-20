import React from 'react';
import { cn } from '@/lib/utils';

// Heading Component
export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: 'default' | 'accent' | 'muted';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ 
    className, 
    level = 1, 
    variant = 'default',
    as,
    children, 
    ...props 
  }, ref) => {
    const baseStyles = "font-bold tracking-tight";
    
    const sizes = {
      1: "text-4xl md:text-6xl lg:text-7xl",
      2: "text-3xl md:text-4xl lg:text-5xl", 
      3: "text-2xl md:text-3xl lg:text-4xl",
      4: "text-xl md:text-2xl lg:text-3xl",
      5: "text-lg md:text-xl lg:text-2xl",
      6: "text-base md:text-lg lg:text-xl"
    };
    
    const variants = {
      default: "text-primary-text",
      accent: "text-accent-primary",
      muted: "text-gray-600"
    };
    
    const elementType = as || `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    
    const elementProps = {
      className: cn(
        baseStyles,
        sizes[level],
        variants[variant],
        className
      ),
      ref,
      ...props
    };
    
    switch (elementType) {
      case 'h1':
        return <h1 {...elementProps}>{children}</h1>;
      case 'h2':
        return <h2 {...elementProps}>{children}</h2>;
      case 'h3':
        return <h3 {...elementProps}>{children}</h3>;
      case 'h4':
        return <h4 {...elementProps}>{children}</h4>;
      case 'h5':
        return <h5 {...elementProps}>{children}</h5>;
      case 'h6':
        return <h6 {...elementProps}>{children}</h6>;
      default:
        return <h1 {...elementProps}>{children}</h1>;
    }
  }
);

Heading.displayName = 'Heading';

// Text Component
export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';
  variant?: 'default' | 'muted' | 'accent' | 'lead';
  as?: 'p' | 'span' | 'div';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ 
    className, 
    size = 'base',
    variant = 'default',
    as: Component = 'p',
    weight = 'normal',
    children, 
    ...props 
  }, ref) => {
    const sizes = {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      '2xl': "text-2xl"
    };
    
    const variants = {
      default: "text-primary-text",
      muted: "text-gray-600",
      accent: "text-accent-primary",
      lead: "text-xl text-gray-700 leading-relaxed"
    };
    
    const weights = {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold"
    };
    
    const elementProps = {
      className: cn(
        sizes[size],
        variants[variant],
        weights[weight],
        className
      ),
      ref,
      ...props
    };
    
    if (Component === 'span') {
      return <span {...elementProps}>{children}</span>;
    } else if (Component === 'div') {
      return <div {...elementProps}>{children}</div>;
    } else {
      return <p {...elementProps}>{children}</p>;
    }
  }
);

Text.displayName = 'Text';

// Link Component
export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'underline';
  external?: boolean;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ 
    className, 
    variant = 'default',
    external = false,
    children, 
    ...props 
  }, ref) => {
    const baseStyles = "transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
    
    const variants = {
      default: "text-accent-primary hover:text-accent-primary/80 focus:ring-accent-primary",
      accent: "text-highlight hover:text-highlight/80 focus:ring-highlight",
      underline: "text-primary-text underline decoration-accent-primary hover:decoration-accent-primary/80 focus:ring-accent-primary"
    };
    
    const externalProps = external ? {
      target: "_blank",
      rel: "noopener noreferrer"
    } : {};
    
    return (
      <a
        className={cn(
          baseStyles,
          variants[variant],
          className
        )}
        ref={ref}
        {...externalProps}
        {...props}
      >
        {children}
        {external && (
          <svg 
            className="inline-block w-4 h-4 ml-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
            />
          </svg>
        )}
      </a>
    );
  }
);

Link.displayName = 'Link';

export { Heading, Text, Link }; 