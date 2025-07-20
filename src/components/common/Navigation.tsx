'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container, Icon } from '@/components/ui';
import { cn, handleSmoothScroll } from '@/lib/utils';

export interface NavigationProps {
  className?: string;
}

const Navigation = React.forwardRef<HTMLElement, NavigationProps>(
  ({ className }, ref) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect for sticky navigation
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle mobile menu toggle
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    // Close mobile menu when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Element;
        if (!target.closest('.mobile-menu') && !target.closest('.hamburger-button')) {
          setIsMenuOpen(false);
        }
      };

      if (isMenuOpen) {
        document.addEventListener('click', handleClickOutside);
      }

      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, [isMenuOpen]);

    const navigationLinks = [
      { href: '#how-it-works', label: 'How It Works' },
      { href: '#find-talent', label: 'Find Talent' },
      { href: '#offer-skills', label: 'Offer Skills' },
      { href: '#about-us', label: 'About Us' },
      { href: '/contact', label: 'Contact' },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      handleSmoothScroll(e);
      setIsMenuOpen(false);
    };

    return (
      <nav
        ref={ref}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled 
            ? 'bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-100' 
            : 'bg-transparent',
          className
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <Container>
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link 
                href="/" 
                className="text-2xl font-bold text-primary-text hover:text-accent-primary transition-colors"
                aria-label="i-Bridge Home"
              >
                i-Bridge
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-primary-text hover:text-accent-primary transition-colors font-medium"
                  onClick={handleNavClick}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a 
                href="/auth"
                className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border-2 border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white focus:ring-accent-primary px-4 py-2 text-sm"
              >
                Login
              </a>
              <a 
                href="/auth"
                className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-highlight hover:bg-highlight/90 text-primary-text focus:ring-highlight shadow-sm px-4 py-2 text-sm"
              >
                Sign Up
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden hamburger-button p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <Icon 
                name={isMenuOpen ? 'close' : 'menu'} 
                size="lg" 
                className="text-primary-text"
              />
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={cn(
              'mobile-menu md:hidden transition-all duration-300 ease-in-out',
              isMenuOpen 
                ? 'max-h-96 opacity-100 visible' 
                : 'max-h-0 opacity-0 invisible'
            )}
          >
            <div className="py-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm rounded-b-lg shadow-lg">
              <div className="space-y-4">
                {navigationLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-primary-text hover:text-accent-primary transition-colors font-medium py-2"
                    onClick={handleNavClick}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <a 
                    href="/auth"
                    className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border-2 border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white focus:ring-accent-primary px-4 py-2 text-sm w-full"
                  >
                    Login
                  </a>
                  <a 
                    href="/auth"
                    className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-highlight hover:bg-highlight/90 text-primary-text focus:ring-highlight shadow-sm px-4 py-2 text-sm w-full"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    );
  }
);

Navigation.displayName = 'Navigation';

export { Navigation }; 