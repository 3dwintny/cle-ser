import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/Button';
import { Card, CardHeader } from '@/components/Card';

export default function AboutPage() {
  const ourStory = `Elizabeth's Cleaning Services, LLC was born from a simple yet powerful vision: to transform homes and workplaces into spaces that inspire joy and productivity. Founded by Elizabeth Carter, our journey began with a single mission - to provide cleaning services that go beyond the surface, creating environments that truly reflect the lives and aspirations of our clients.

With over a decade of experience in the cleaning industry, Elizabeth recognized a gap in the market for personalized, high-quality cleaning services that treat every space with the care and attention it deserves. What started as a small operation serving local neighborhoods has grown into a trusted partner for residential and commercial cleaning needs throughout the community.

Our commitment to excellence is rooted in our founder's personal philosophy: that a clean space is not just about aesthetics, but about creating harmony between people and their environment. This belief drives everything we do, from the meticulous attention to detail in our cleaning processes to our dedication to building lasting relationships with our clients.

Today, Elizabeth's Cleaning Services, LLC continues to grow while maintaining the personal touch and quality standards that have made us a preferred choice for discerning clients who value both results and relationships.`;

  const ourMission = `At Elizabeth's Cleaning Services, LLC, our mission is to elevate the quality of life for our clients by delivering exceptional cleaning services that combine professional expertise, eco-friendly practices, and genuine care for every space we touch.

We believe that true cleanliness goes beyond the visible surface. Our trained professionals use industry-leading techniques and premium products to ensure every corner, every surface, and every hidden area meets our uncompromising standards.

We're committed to sustainable cleaning practices that protect both our clients' health and our planet. We use eco-friendly products and methods that are safe for families, pets, and the environment while delivering powerful cleaning results.

Every home and business is unique, and so are our cleaning solutions. We take the time to understand your specific needs, preferences, and schedule to create a customized cleaning plan that fits seamlessly into your lifestyle.

Building lasting relationships requires honesty, reliability, and clear communication. We provide transparent pricing, consistent scheduling, and open dialogue throughout our partnership.`;

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-elizabeth-gradient-diagonal">
        <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/About/sala_about.jpeg"
                  alt="Elegant living space showcasing our cleaning expertise"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
                {/* Elegant overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/5"></div>
                {/* Decorative frame elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-white/60 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/40 rounded-full"></div>
                <div className="absolute top-1/2 left-4 w-1 h-1 bg-white/30 rounded-full"></div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
                About Us
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                We take pride in what we do. Our professional team is dedicated to providing exceptional cleaning services that exceed your expectations.
              </p>
              <div className="w-24 h-1 bg-red-600 mb-8"></div>
              <Link href="/contact">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800 border-black">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="prose prose-lg max-w-4xl mx-auto text-gray-700 font-noto">
            {ourStory.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 leading-relaxed text-justify text-lg lg:text-xl">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-elizabeth-gradient-diagonal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="prose prose-lg max-w-4xl mx-auto text-black font-noto">
            {ourMission.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 leading-relaxed text-justify text-lg lg:text-xl">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Credentials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Professional Credentials
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Certified by industry-leading organizations to ensure the highest standards of cleaning excellence
            </p>
            <div className="w-24 h-1 bg-black mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Certificate Display - Made Larger */}
            <div className="order-2 lg:order-1">
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border-4 border-black hover:border-elizabeth-gold transition-all duration-300">
                <div className="aspect-[3/2] relative rounded-xl overflow-hidden">
                  <Image
                    src="/About/ahca_certificate.jpeg"
                    alt="American House Cleaners Association Certificate of Completion"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                {/* Certificate Badge - Using Brand Colors */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-elizabeth-gradient-diagonal rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L13.09 8.26L19 7L14.74 12L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12L5 7L10.91 8.26L12 2Z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Credentials Content - Simplified */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-elizabeth-gold">
                <h3 className="text-2xl font-bold text-black mb-4">
                  AHCA Certified Professional
                </h3>
                <p className="text-black mb-4">
                  Nancy Elizabeth Torres has successfully completed the American House Cleaners Association Certification Course, demonstrating expertise in professional cleaning standards and health-focused cleaning practices.
                </p>
                <div className="flex items-center text-sm text-black">
                  <svg className="w-4 h-4 mr-2 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Certified: May 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-elizabeth-gradient-diagonal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-700">
              We take pride in what we do.
            </p>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
          </div>

          <div className="mb-8">
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
              Our dedicated team is committed to providing exceptional cleaning services with attention to detail and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Elizabeth', 
                role: '', 
                image: '/About/Elizabet.png'
              },
              { 
                name: 'Fernando', 
                role: '', 
                image: '/About/Fernando.png'
              },
              { 
                name: 'Maria', 
                role: '', 
                image: '/About/Maria.png'
              }
            ].map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500/20 to-blue-200/20 rounded-full mx-auto mb-4 flex items-center justify-center relative overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover rounded-full"
                      unoptimized
                    />
                    {/* Decorative elements */}
                    <div className="absolute top-2 right-2 w-6 h-6 bg-white/20 rounded-full"></div>
                    <div className="absolute bottom-2 left-2 w-4 h-4 bg-white/20 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Join our satisfied clients and discover why Elizabeth&apos;s Cleaning Service
            is the trusted choice for exceptional cleaning services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="outline" size="lg" className="bg-black text-white border-black hover:bg-gray-800">
                Get Started Today
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" className="bg-white text-black border-2 border-black hover:bg-gray-100">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}