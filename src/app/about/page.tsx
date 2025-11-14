import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/Button';
import { Card, CardHeader } from '@/components/Card';
import AHCACertification from '@/components/AHCACertification';

export default function AboutPage() {
  const ourStory = `Founded in Pico Rivera, California, Elizabeths Cleaning Service LLC began with a simple vision: to provide professional cleaning services that transform homes and workplaces into spaces of comfort and productivity.

What started as a local operation has grown into a trusted partner for residential and commercial cleaning throughout Los Angeles County. Our success is built on meticulous attention to detail, genuine care for every space we touch, and lasting relationships with our clients who value quality and reliability.`;

  const ourMission = `Our mission is to deliver exceptional cleaning services that elevate your quality of life through professional expertise, eco-friendly practices, and personalized care.

We use safe, eco-friendly products and AHCA-certified techniques to ensure every space meets the highest standards of cleanliness—protecting your family, pets, and the environment.

Every client is unique. We create customized cleaning plans that fit your specific needs, schedule, and lifestyle, backed by transparent pricing and reliable service you can trust.`;

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

      {/* Professional Credentials Section - Using Component (fondo blanco) */}
      <AHCACertification bgWhite />

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