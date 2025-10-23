'use client';

import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/Button';
import PhotoSlider from '@/components/PhotoSlider';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Slider */}
        <div className="absolute inset-0">
          <PhotoSlider />
          {/* White overlay for text readability */}
          <div className="absolute inset-0 bg-white/60"></div>
        </div>

        {/* Content - Centered Layout */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 sm:pt-28 md:pt-24 lg:pt-0">
          <div className="text-center">
            
            {/* Main Content */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
                Elizabeth&apos;s Cleaning Services, LLC
              </h1>
              <p className="text-xl sm:text-2xl text-black/90 mb-6">
                Professional Home & Office Cleaning Services
              </p>
              
              {/* Description */}
              <div className="mb-8">
                    <p className="text-lg text-black/80 leading-relaxed">
                      <span className="font-semibold text-red-600">Trusted cleaning</span> for your home and office. Our professional team guarantees exceptional service with eco-friendly products and advanced techniques.<span className="font-semibold text-black">Your perfect space, every visit!</span>
                    </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="tel:+1-562-639-2990">
                      <Button size="lg" className="bg-black hover:bg-gray-800 text-white shadow-lg border border-black">
                        📞 Call Now
                      </Button>
                    </a>
                    <Link href="/contact">
                      <Button variant="outline" size="lg" className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white shadow-lg bg-white/90 backdrop-blur-sm">
                        Get Quote
                      </Button>
                    </Link>
              </div>
            </div>
            
          </div>
        </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2">
              <div className="w-6 h-10 border-2 border-black/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-black/50 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <p className="text-2xl sm:text-3xl font-medium text-black">
            Elizabeth&apos;s Cleaning Services, LLC — Relax — we&apos;ll handle the cleaning.
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4 mb-12"></div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Scrubbed spotless outshines the rest!
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-black mb-6">
            Our professional staff cares for your home as if it was our own.
          </h3>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We understand that a clean and healthy environment is essential for your well-being and productivity. 
            Our team uses eco-friendly products and advanced cleaning techniques to ensure your space is not only 
            spotless but also safe for your family and pets. We customize our services to meet your specific needs, 
            whether you need a one-time deep clean or regular maintenance.
          </p>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-24 bg-elizabeth-gradient-diagonal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Services Header */}
          <div className="text-center mb-20">
            <div className="inline-block">
              <div className="w-16 h-0.5 bg-elizabeth-gold mb-4"></div>
              <p className="text-sm font-medium text-elizabeth-gold tracking-wider uppercase">LOS ANGELES, CA</p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-black mt-6 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-black/80 max-w-3xl mx-auto leading-relaxed">
              Professional cleaning solutions tailored to your specific needs. 
              We provide comprehensive services that go beyond regular cleaning to make your space truly exceptional.
            </p>
          </div>

          {/* Services Grid - Premium Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Residential Cleaning */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/Home/sala.jpeg"
                  alt="Beautiful residential living space"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Residential Cleaning</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Complete home cleaning services for all living spaces. Regular maintenance and deep cleaning available to keep your home spotless and comfortable.
                </p>
                <ul className="text-gray-700 space-y-2 mb-8">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    All rooms and living areas
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Kitchen and bathroom detail
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Vacuum and mop floors
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Dust all surfaces
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>

            {/* Commercial Cleaning */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/Home/ofcie_services.jpg"
                  alt="Professional office cleaning services"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Commercial Cleaning</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Professional office and business cleaning services. Flexible scheduling to fit your business hours and maintain a pristine work environment.
                </p>
                <ul className="text-gray-700 space-y-2 mb-8">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Office spaces and workstations
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Common areas and reception
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Post-construction cleanup
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Restroom sanitization
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>

            {/* Deep Cleaning */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/Home/deep_clean.jpeg"
                  alt="Professional deep cleaning service"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Deep Cleaning</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Comprehensive deep cleaning service for special occasions or annual maintenance. We go beyond surface cleaning to restore your space to its original beauty.
                </p>
                <ul className="text-gray-700 space-y-2 mb-8">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Window cleaning inside & out
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Appliance deep clean
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Furniture and upholstery
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Baseboards and trim
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>

            {/* Baseboards & Floor Care */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/service/almacen.jpeg"
                  alt="Professional baseboards and door frames cleaning"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Baseboards & Floor Care</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Specialized cleaning for baseboards, door frames, carpet cleaning, and professional floor care including stone, marble polishing, and buffing.
                </p>
                <ul className="text-gray-700 space-y-2 mb-8">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Baseboards and door frames cleaning
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Carpet deep cleaning
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Stone and marble floor polishing
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Floor buffing and shine restoration
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Why Choose Elizabeth&apos;s Cleaning Services, LLC?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;re more than just a cleaning service - we&apos;re your trusted cleaning partner
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fully Insured</h3>
              <p className="text-gray-600 text-sm">
                Licensed and fully insured for your complete peace of mind
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-50 border border-yellow-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Eco-Friendly</h3>
              <p className="text-gray-600 text-sm">
                Safe, eco-friendly products that protect your family and environment
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Experienced Team</h3>
              <p className="text-gray-600 text-sm">
                Years of experience with countless satisfied customers in our community
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-50 border border-yellow-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Always On Time</h3>
              <p className="text-gray-600 text-sm">
                Punctual service that respects your schedule and time
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
