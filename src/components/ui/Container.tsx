import React from 'react';
import { cn } from '@/lib/utils';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  as?: React.ElementType;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ 
    className, 
    size = 'lg', 
    padding = 'md',
    as: Component = 'div',
    children, 
    ...props 
  }, ref) => {
    const maxWidths = {
      sm: "max-w-3xl",
      md: "max-w-4xl", 
      lg: "max-w-7xl",
      xl: "max-w-screen-xl",
      full: "max-w-none"
    };
    
    const paddingStyles = {
      none: "",
      sm: "px-4 sm:px-6",
      md: "px-4 sm:px-6 lg:px-8",
      lg: "px-4 sm:px-6 lg:px-8 xl:px-12"
    };
    
    return React.createElement(
      Component,
      {
        className: cn(
          "mx-auto",
          maxWidths[size],
          paddingStyles[padding],
          className
        ),
        ref,
        ...props
      },
      children
    );
  }
);

Container.displayName = 'Container';

export { Container }; 