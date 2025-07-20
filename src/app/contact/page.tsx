import { ContactForm } from '@/components/forms/ContactForm';
import { Navigation } from '@/components/common/Navigation';
import { Footer } from '@/components/sections/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-primary-background">
      <Navigation />
      
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-text mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about i-Bridge? We&apos;re here to help you connect with trusted local talent 
              and traditional skills in your community.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-primary-text mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-accent-primary text-xl">📧</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-text mb-1">Email</h3>
                      <p className="text-gray-600">hello@i-bridge.com</p>
                      <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-secondary/10 rounded-full flex items-center justify-center">
                      <span className="text-accent-secondary text-xl">📞</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-text mb-1">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-500">Monday - Friday, 9 AM - 6 PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-highlight/10 rounded-full flex items-center justify-center">
                      <span className="text-highlight text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-text mb-1">Office</h3>
                      <p className="text-gray-600">123 Community Street</p>
                      <p className="text-gray-600">Local Town, ST 12345</p>
                      <p className="text-sm text-gray-500">United States</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-primary-text mb-4">Frequently Asked Questions</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-primary-text">How do I get started?</h4>
                    <p className="text-sm text-gray-600">
                      Simply create an account and choose whether you want to hire talent or offer your skills.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-text">Is i-Bridge available in my area?</h4>
                    <p className="text-sm text-gray-600">
                      We&apos;re expanding to new communities regularly. Contact us to check availability.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-text">How do you verify service providers?</h4>
                    <p className="text-sm text-gray-600">
                      All service providers go through a verification process including background checks and skill assessments.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-accent-primary/5 p-6 rounded-lg">
                <h3 className="font-semibold text-primary-text mb-2">Support Hours</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Our support team is available to help you with any questions or issues.
                </p>
                <div className="text-sm text-gray-600">
                  <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM EST</p>
                  <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM EST</p>
                  <p><strong>Sunday:</strong> Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 