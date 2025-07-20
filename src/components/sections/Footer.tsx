import React from 'react';
import { Container, Heading, Text, Link } from '@/components/ui';

export interface FooterProps {
  className?: string;
}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ className }, ref) => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
      company: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Mission', href: '/mission' },
        { label: 'Team', href: '/team' },
        { label: 'Careers', href: '/careers' }
      ],
      services: [
        { label: 'Find Talent', href: '/find-talent' },
        { label: 'Offer Skills', href: '/offer-skills' },
        { label: 'How It Works', href: '/how-it-works' },
        { label: 'Success Stories', href: '/stories' }
      ],
      support: [
        { label: 'Help Center', href: '/help' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Safety & Trust', href: '/safety' }
      ],
      legal: [
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Cookie Policy', href: '/cookies' },
        { label: 'Accessibility', href: '/accessibility' }
      ]
    };

    const socialLinks = [
      { label: 'Facebook', href: '#', icon: '📘' },
      { label: 'Instagram', href: '#', icon: '📷' },
      { label: 'LinkedIn', href: '#', icon: '💼' },
      { label: 'Twitter', href: '#', icon: '🐦' }
    ];

    return (
      <footer
        ref={ref}
        className={`bg-primary-background text-primary-text ${className || ''}`}
        aria-labelledby="footer-heading"
      >
        <Container>
          {/* Main Footer Content */}
          <div className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <Heading level={3} id="footer-heading" className="text-2xl font-bold mb-4">
                  i-Bridge
                </Heading>
                <Text variant="muted" className="text-gray-700 mb-6 leading-relaxed">
                  Connecting communities with trusted local talent and traditional skills. 
                  We bridge the gap between skilled professionals and those who need their expertise.
                </Text>
                
                {/* Contact Info */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-primary-text">
                    <span className="text-lg">📧</span>
                    <span>hello@i-bridge.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary-text">
                    <span className="text-lg">📞</span>
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary-text">
                    <span className="text-lg">📍</span>
                    <span>Community-driven, everywhere</span>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <Text variant="muted" className="text-sm font-medium mb-3 text-gray-700">
                    Follow Us
                  </Text>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="w-10 h-10 bg-accent-primary/20 hover:bg-accent-primary/30 rounded-full flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-primary-background"
                        aria-label={`Follow us on ${social.label}`}
                      >
                        <span className="text-lg">{social.icon}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Company Links */}
              <div>
                <Heading level={4} className="text-lg font-semibold mb-4">
                  Company
                </Heading>
                <ul className="space-y-2">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-700 hover:text-primary-text transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services Links */}
              <div>
                <Heading level={4} className="text-lg font-semibold mb-4">
                  Services
                </Heading>
                <ul className="space-y-2">
                  {footerLinks.services.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-700 hover:text-primary-text transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <Heading level={4} className="text-lg font-semibold mb-4">
                  Support
                </Heading>
                <ul className="space-y-2">
                  {footerLinks.support.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-700 hover:text-primary-text transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-300 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="text-center md:text-left">
                <Text variant="muted" className="text-sm text-gray-700">
                  &copy; {currentYear} i-Bridge. All rights reserved.
                </Text>
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap justify-center gap-6">
                {footerLinks.legal.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-gray-700 hover:text-primary-text transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </footer>
    );
  }
);

Footer.displayName = 'Footer';

export { Footer }; 