import { Navigation } from '@/components/common/Navigation';
import { Hero } from '@/components/sections/Hero';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { FeaturedSkills } from '@/components/sections/FeaturedSkills';
import { Testimonials } from '@/components/sections/Testimonials';
import { Features } from '@/components/sections/Features';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "i-Bridge",
    "description": "i-Bridge connects communities with skilled professionals in traditional crafts, home services, and essential skills. Find trusted local talent or offer your expertise to your community.",
    "url": "https://i-bridge.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://i-bridge.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "sameAs": [
      "https://facebook.com/ibridge",
      "https://instagram.com/ibridge",
      "https://linkedin.com/company/ibridge",
      "https://twitter.com/ibridge"
    ]
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "i-Bridge",
    "description": "Connecting communities with trusted local talent and traditional skills",
    "url": "https://i-bridge.com",
    "logo": "https://i-bridge.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "hello@i-bridge.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    }
  };

  return (
    <main className="min-h-screen bg-primary-background">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData)
        }}
      />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Featured Skills Section */}
      <FeaturedSkills />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Features Section */}
      <Features />

      {/* Find Talent Section */}
      <section 
        id="find-talent" 
        className="py-20 bg-primary-background"
        aria-labelledby="find-talent-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              id="find-talent-heading"
              className="text-3xl md:text-4xl font-bold text-primary-text mb-4"
            >
              Find Trusted Talent
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover skilled professionals in traditional crafts, home services, and essential skills.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-accent-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl" aria-hidden="true">🏠</span>
              </div>
              <h3 className="font-semibold text-primary-text mb-2">Home Services</h3>
              <p className="text-sm text-gray-600">Cleaning, repairs, maintenance</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-accent-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl" aria-hidden="true">🎨</span>
              </div>
              <h3 className="font-semibold text-primary-text mb-2">Traditional Crafts</h3>
              <p className="text-sm text-gray-600">Woodworking, pottery, textiles</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-highlight/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl" aria-hidden="true">🌱</span>
              </div>
              <h3 className="font-semibold text-primary-text mb-2">Garden & Landscaping</h3>
              <p className="text-sm text-gray-600">Design, planting, maintenance</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-accent-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl" aria-hidden="true">🔧</span>
              </div>
              <h3 className="font-semibold text-primary-text mb-2">Technical Skills</h3>
              <p className="text-sm text-gray-600">Electronics, computers, repairs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Skills Section */}
      <section 
        id="offer-skills" 
        className="py-20 bg-white"
        aria-labelledby="offer-skills-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              id="offer-skills-heading"
              className="text-3xl md:text-4xl font-bold text-primary-text mb-4"
            >
              Offer Your Skills
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Turn your expertise into opportunities. Connect with your community and earn doing what you love.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-primary-text mb-4">
                Why Offer Your Skills on i-Bridge?
              </h3>
              <ul className="space-y-4" role="list">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent-primary/10 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-accent-primary text-sm" aria-hidden="true">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-text">Flexible Schedule</h4>
                    <p className="text-gray-600 text-sm">Work when it suits you and your lifestyle</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent-secondary/10 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-accent-secondary text-sm" aria-hidden="true">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-text">Local Connections</h4>
                    <p className="text-gray-600 text-sm">Build relationships within your community</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-highlight/10 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-highlight text-sm" aria-hidden="true">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-text">Secure Payments</h4>
                    <p className="text-gray-600 text-sm">Get paid safely and on time, every time</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-primary-background p-8 rounded-lg">
              <h4 className="text-lg font-semibold text-primary-text mb-4">Ready to Get Started?</h4>
              <p className="text-gray-600 mb-6">
                Join thousands of skilled professionals who are already connecting with their communities through i-Bridge.
              </p>
              <a 
                href="/auth"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-primary-text font-semibold py-3 px-6 rounded-lg transition-colors w-full focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 border border-gray-200"
                aria-label="Create your professional profile"
              >
                Create Your Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section 
        id="about-us" 
        className="py-20 bg-primary-background"
        aria-labelledby="about-us-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              id="about-us-heading"
              className="text-3xl md:text-4xl font-bold text-primary-text mb-4"
            >
              About i-Bridge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re building bridges between communities and the skilled individuals who make them stronger.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-primary-text mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 mb-6">
                i-Bridge exists to preserve traditional skills, support local economies, and create meaningful connections 
                between people who need services and those who can provide them with expertise and care.
              </p>
              <p className="text-gray-600">
                We believe that every community has hidden talent waiting to be discovered, and every skill has value 
                that deserves recognition and fair compensation.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4" role="list" aria-label="i-Bridge statistics">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-accent-primary mb-2">10K+</div>
                <div className="text-sm text-gray-600">Skilled Professionals</div>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-accent-secondary mb-2">50K+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-highlight mb-2">100+</div>
                <div className="text-sm text-gray-600">Communities Served</div>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-accent-primary mb-2">4.9★</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
    </div>
      </section>

      {/* Final CTA Section */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
