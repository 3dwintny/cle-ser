import Link from 'next/link';
import Button from '@/components/Button';
import { Card, CardHeader, CardBody } from '@/components/Card';
import siteConfig from '../../../site.config.json';

export default function AboutPage() {
  const ourStory = `Elizabeth's Cleaning Service was born from a simple yet powerful vision: to transform homes and workplaces into spaces that inspire joy and productivity. Founded by Elizabeth Carter, our journey began with a single mission - to provide cleaning services that go beyond the surface, creating environments that truly reflect the lives and aspirations of our clients.

With over a decade of experience in the cleaning industry, Elizabeth recognized a gap in the market for personalized, high-quality cleaning services that treat every space with the care and attention it deserves. What started as a small operation serving local neighborhoods has grown into a trusted partner for residential and commercial cleaning needs throughout the community.

Our commitment to excellence is rooted in our founder's personal philosophy: that a clean space is not just about aesthetics, but about creating harmony between people and their environment. This belief drives everything we do, from the meticulous attention to detail in our cleaning processes to our dedication to building lasting relationships with our clients.

Today, Elizabeth's Cleaning Service continues to grow while maintaining the personal touch and quality standards that have made us a preferred choice for discerning clients who value both results and relationships.`;

  const ourMission = `At Elizabeth's Cleaning Service, our mission is to elevate the quality of life for our clients by delivering exceptional cleaning services that combine professional expertise, eco-friendly practices, and genuine care for every space we touch.

We believe that true cleanliness goes beyond the visible surface. Our trained professionals use industry-leading techniques and premium products to ensure every corner, every surface, and every hidden area meets our uncompromising standards.

We're committed to sustainable cleaning practices that protect both our clients' health and our planet. We use eco-friendly products and methods that are safe for families, pets, and the environment while delivering powerful cleaning results.

Every home and business is unique, and so are our cleaning solutions. We take the time to understand your specific needs, preferences, and schedule to create a customized cleaning plan that fits seamlessly into your lifestyle.

Building lasting relationships requires honesty, reliability, and clear communication. We provide transparent pricing, consistent scheduling, and open dialogue throughout our partnership.`;

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-brand-500/20 to-accent-200/20">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-500/10 to-accent-200/10"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="order-2 lg:order-1">
              <div className="w-full h-96 bg-gradient-to-br from-brand-500/20 to-accent-200/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="w-48 h-48 bg-white/30 rounded-full flex items-center justify-center">
                  <span className="text-8xl">👩‍💼</span>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-8 right-8 w-12 h-12 bg-white/20 rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-8 h-8 bg-white/20 rounded-full"></div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 mb-6">
                About Us
              </h1>
              <p className="text-xl text-muted-200 mb-8">
                We take pride in what we do. Our professional team is dedicated to providing exceptional cleaning services that exceed your expectations.
              </p>
              <Link href="/contact">
                <Button size="lg">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-4">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-brand-500 mx-auto"></div>
          </div>

          <div className="prose prose-lg max-w-4xl mx-auto text-muted-200">
            {ourStory.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-bg-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-4">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-brand-500 mx-auto"></div>
          </div>

          <div className="prose prose-lg max-w-4xl mx-auto text-muted-200">
            {ourMission.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-muted-200">
              We take pride in what we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Elizabeth Carter', role: 'Founder', icon: '👩‍💼' },
              { name: 'Fernando Lopez', role: 'Staff', icon: '👨‍💼' },
              { name: 'Maria Rodriguez', role: 'Staff', icon: '👩‍💼' }
            ].map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-32 h-32 bg-gradient-to-br from-brand-500/20 to-accent-200/20 rounded-full mx-auto mb-4 flex items-center justify-center relative overflow-hidden">
                    <span className="text-4xl z-10">{member.icon}</span>
                    {/* Decorative elements */}
                    <div className="absolute top-2 right-2 w-6 h-6 bg-white/20 rounded-full"></div>
                    <div className="absolute bottom-2 left-2 w-4 h-4 bg-white/20 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-ink-900">
                    {member.name}
                  </h3>
                  <p className="text-muted-200">{member.role}</p>
                </CardHeader>
                <CardBody>
                  <p className="text-sm text-muted-200">
                    Dedicated to providing exceptional cleaning services with attention to detail and care.
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join our satisfied clients and discover why Elizabeth's Cleaning Service
            is the trusted choice for exceptional cleaning services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="outline" size="lg" className="bg-white text-brand-500 border-white hover:bg-gray-50">
                Get Started Today
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}