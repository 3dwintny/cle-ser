'use client';

import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/Button';
import PhotoSlider from '@/components/PhotoSlider';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center" style={{ backgroundColor: '#EEDBA5' }}>
        {/* Background Image - Products of cleaning */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-600/20 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-black/20 rounded-full"></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-red-600/20 rounded-full"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-black/20 rounded-full"></div>
        </div>

        {/* Content - Two Column Layout */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
                Elizabeth&apos;s Cleaning Service
              </h1>
              <p className="text-xl sm:text-2xl text-gray-800 mb-6">
                Professional Home & Office Cleaning Services
              </p>
              <div className="mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold text-red-600">Trusted cleaning</span> for your home and office. 
                  Our professional team guarantees exceptional service with eco-friendly products and advanced techniques. 
                  <span className="font-semibold text-black">Your perfect space, every visit!</span>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="tel:+1-562-639-2990">
                  <Button size="lg" className="bg-black hover:bg-gray-800 text-white shadow-lg border border-black">
                    📞 Call Now
                  </Button>
                </a>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white shadow-lg">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Photo Slider */}
            <div className="flex justify-center lg:justify-end">
              <PhotoSlider />
            </div>
            
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-black/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-black/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <p className="text-2xl sm:text-3xl font-medium text-black">
            Elizabeth&apos;s Cleaning Service — Relax — we&apos;ll handle the cleaning.
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
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
            <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
          </div>
        </div>
      </section>


      {/* Additional Services */}
      <section className="py-20" style={{ backgroundColor: '#EEDBA5' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Professional cleaning solutions tailored to your specific needs
            </p>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow hover:border-red-600">
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/Home/sala.jpeg"
                  alt="Beautiful residential living space"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Residential Cleaning</h3>
              <p className="text-gray-700 mb-4">
                Complete home cleaning services for all living spaces. Regular maintenance and deep cleaning available.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• All rooms and living areas</li>
                <li>• Kitchen and bathroom detail</li>
                <li>• Vacuum and mop floors</li>
                <li>• Dust all surfaces</li>
              </ul>
            </div>
            
            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow hover:border-red-600">
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/Home/ofcie_services.jpg"
                  alt="Professional office cleaning services"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Commercial Cleaning</h3>
              <p className="text-gray-700 mb-4">
                Professional office and business cleaning services. Flexible scheduling to fit your business hours.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Office spaces and workstations</li>
                <li>• Common areas and reception</li>
                <li>• Post-construction cleanup</li>
                <li>• Restroom sanitization</li>
              </ul>
            </div>
            
            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow hover:border-red-600">
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/Home/deep_clean.jpeg"
                  alt="Professional deep cleaning service"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Deep Cleaning</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive deep cleaning service for special occasions or annual maintenance.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Window cleaning inside & out</li>
                <li>• Appliance deep clean</li>
                <li>• Furniture and upholstery</li>
                <li>• Baseboards and trim</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Elizabeth&apos;s Cleaning?
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
