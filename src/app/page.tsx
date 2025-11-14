'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/Button';
import PhotoSlider from '@/components/PhotoSlider';
import AHCACertification from '@/components/AHCACertification';

export default function Home() {
  const [currentReview, setCurrentReview] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Reviews data - REALES de Google
  const reviews = [
    {
      name: "Jajaira Rodriguez",
      date: "5 months ago",
      rating: 5,
      text: "I've been using this cleaning service for biweekly cleanings, and I couldn't be happier! Every time they leave, my home feels so fresh and spotless. The little details, like the folds on my towels, toilet paper, and even paper towels - it's those thoughtful touches that really stand out.",
      initial: "J"
    },
    {
      name: "Sophia Garcia",
      date: "4 months ago",
      rating: 5,
      text: "Elizabeth and her team always does a wonderful job! They go above and beyond what I expect and they have the best customer service! I love that my house smells super clean without being over bearing with cleaning product scents.",
      initial: "S"
    },
    {
      name: "Jenny Moya",
      date: "A year ago",
      rating: 5,
      text: "Hired Elizabeths cleaning service for my house and I really like overall their service. Very punctual and professional, I love that the product being used does not damage any of my furniture. My bathroom is spotless now, the shower glass had stains for years and now it looks brand new, very shining.",
      initial: "J"
    },
    {
      name: "Yvonne Williams",
      date: "A year ago",
      rating: 5,
      text: "I am positively thrilled that a good friend recommended them to me. Elizabeths Cleaning Service is detail oriented and so cheerful while they do an outstanding job! When they are done cleaning, my home smells wonderful and not full of strong chemicals.",
      initial: "Y"
    },
    {
      name: "Natali Alvarez",
      date: "A year ago",
      rating: 5,
      text: "Elizabeths cleaning service is extremely professional, friendly and efficient. You can tell they care about their clients by the quality of work they provide. They always do an outstanding job, and I'm never disappointed with their work.",
      initial: "N"
    },
    {
      name: "Tammy Boren",
      date: "A year ago",
      rating: 5,
      text: "The ladies at Elizabeths Cleaning Service really care & do amazing job. They feel like part of the family now. They take pride in their work & the level of detail is so appreciated. They have so many magic tricks to address hard to clean or problem areas.",
      initial: "T"
    }
  ];

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-rotate reviews every 3 seconds - infinito
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => prev + 1);
    }, 3000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Slider */}
        <div className="absolute inset-0">
          <PhotoSlider />
          {/* Dark overlay for better text contrast - like Pro Help example */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        </div>

        {/* Content - Centered Layout */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 sm:pt-28 md:pt-24 lg:pt-0">
          <div className="text-center">
            
            {/* Main Content */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" 
                  style={{ 
                    textShadow: '0 0 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6), 1px 1px 2px rgba(0,0,0,0.9), -1px -1px 2px rgba(0,0,0,0.9), 1px -1px 2px rgba(0,0,0,0.9), -1px 1px 2px rgba(0,0,0,0.9)'
                  }}>
                Elizabeth&apos;s Cleaning Services, LLC
              </h1>
              <p className="text-xl sm:text-2xl text-white mb-6" 
                 style={{ 
                   textShadow: '0 0 15px rgba(0,0,0,0.7), 0 0 30px rgba(0,0,0,0.5), 1px 1px 1px rgba(0,0,0,0.8), -1px -1px 1px rgba(0,0,0,0.8)'
                 }}>
                Professional Home & Office Cleaning Services
              </p>
              
              {/* Description */}
              <div className="mb-8">
                    <p className="text-lg text-white leading-relaxed" 
                       style={{ 
                         textShadow: '0 0 15px rgba(0,0,0,0.7), 1px 1px 1px rgba(0,0,0,0.9), -1px -1px 1px rgba(0,0,0,0.9)'
                       }}>
                      <span className="font-semibold text-yellow-300" 
                            style={{ 
                              textShadow: '0 0 15px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,1), -1px -1px 2px rgba(0,0,0,1)'
                            }}>
                        Trusted cleaning
                      </span> for your home and office. Our professional team guarantees exceptional service with eco-friendly products and advanced techniques. <span className="font-semibold text-white">Your perfect space, every visit!</span>
                    </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="tel:+1-562-639-2990">
                      <Button size="lg" className="bg-white hover:bg-gray-100 text-black shadow-xl border-2 border-white font-bold">
                        📞 Call Now
                      </Button>
                    </a>
                    <Link href="/contact">
                      <Button variant="outline" size="lg" className="border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-black shadow-xl bg-transparent backdrop-blur-sm font-bold">
                        Get Quote
                      </Button>
                    </Link>
              </div>
            </div>
            
          </div>
        </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2">
              <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
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

      {/* Professional Certification Section - AHCA Component */}
      <AHCACertification />

      {/* Our Services */}
      <section className="py-24 bg-white">
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
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Experience the comfort of a spotless home with Elizabeths Cleaning Service. Our professional team provides meticulous cleaning solutions designed to refresh every corner of your home. We combine attention to detail with care and discretion, ensuring a clean, welcoming, and harmonious environment.
                </p>
                <p className="text-gray-700 font-semibold mb-3">Our Residential Cleaning includes:</p>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Complete dusting and vacuuming of all rooms
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Mopping and floor care
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Deep cleaning of bathrooms and kitchens
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Disinfection of high-touch areas (light switches, handles, etc.)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Interior window cleaning and baseboards
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Trash removal and surface organization
                  </li>
                </ul>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  Whether you need weekly, biweekly, or occasional service, we tailor every visit to meet your home&apos;s unique needs.
                </p>
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
                <p className="text-gray-600 mb-4 leading-relaxed">
                  At Elizabeths Cleaning Service, we understand that a clean workspace reflects professionalism and inspires productivity. Our commercial cleaning programs are designed for offices, stores, and business facilities of all sizes. We maintain your space in pristine condition so your clients and team can focus on what truly matters.
                </p>
                <p className="text-gray-700 font-semibold mb-3">Our Commercial Cleaning includes:</p>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Office and lobby cleaning
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Dusting, vacuuming, and mopping
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Restroom sanitation and restocking supplies
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Kitchen and breakroom cleaning
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Interior glass and window cleaning
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Trash removal and surface disinfecting
                  </li>
                </ul>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  We customize our cleaning schedules to your business hours — daily, weekly, or after-hours service available.
                </p>
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
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Bring your home or business to its best condition with our detailed deep-cleaning service. We focus on every corner — visible or hidden — for a truly refreshed space.
                </p>
                <p className="text-gray-700 font-semibold mb-3">Our Deep Cleaning includes:</p>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Detailed cleaning of bathrooms and kitchens
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Disinfection of high-touch surfaces
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Baseboards, doors, and frames cleaned by hand
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Inside and behind appliances (oven, fridge, etc.)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Dust removal from vents, fans, and light fixtures
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Floors vacuumed, mopped, and sanitized
                  </li>
                </ul>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  Perfect for move-ins, move-outs, seasonal cleaning, or post-renovation care.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>

            {/* Carpet & Floor Care */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/service/almacen_carpet.jpeg"
                  alt="Professional baseboards and door frames cleaning"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Carpet & Floor Cleaning Experts</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Protect and restore the beauty of your floors and carpets with our specialized cleaning treatments.
                </p>
                <p className="text-gray-700 font-semibold mb-3">Our Floor Care includes:</p>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Deep carpet extraction and stain removal
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Tile and grout cleaning and sanitizing
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Wood floor polishing and shine restoration
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Vinyl and laminate cleaning and finishing
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-elizabeth-gold rounded-full mr-3"></div>
                    Odor removal and deodorizing treatments
                  </li>
                </ul>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  We use advanced techniques and gentle products to preserve your surfaces and ensure long-lasting results.
                </p>
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

      {/* Customer Reviews Section - FONDO DORADO */}
      <section className="py-24 bg-elizabeth-gradient-diagonal overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
              TRUSTED BY DOZENS
            </h2>
            <p className="text-xl text-black/80 max-w-3xl mx-auto">
              See what our happy Pico Rivera, CA customers are saying — <span className="font-bold text-black">4.9 ⭐ rating</span> on Google
            </p>
          </div>

          {/* Google Rating Badge - Clickeable y elegante */}
          <div className="flex justify-center mb-12">
            <a 
              href="https://www.google.com/search?sca_esv=a7a7f7107bf5a5bb&cs=1&sxsrf=AE3TifMUlZRhce-Eyzt0XQ-eLsVo91vtvg:1762411433786&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-EyNJdekwLDAaq6kH8FY55t6NKNOj6JQRRZOX5lrLd9PUx_nppuTCn-6fFbkkbx_JBtENVmkr746I2t0syS_lhT45p8McoW8qT2dAwd77fnLXenXtrg%3D%3D&q=Elizabeth%27s+cleaning+services+Reviews&sa=X&ved=2ahUKEwjQ1dWb9tyQAxXMRzABHZ6CCRMQ0bkNegQIIxAE&cshid=1762411526065125&biw=1695&bih=921&dpr=2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white rounded-2xl shadow-2xl p-8 border-2 border-white/50 hover:shadow-3xl hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className="text-center">
                <p className="text-3xl font-bold text-black mb-2 group-hover:text-gray-700 transition-colors">4.9</p>
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-8 h-8 text-yellow-400 fill-current group-hover:text-yellow-500 transition-colors" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 group-hover:text-gray-800 transition-colors">
                  Based on <span className="font-bold text-black">38 reviews</span>
                </p>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="font-semibold text-black group-hover:text-gray-700 transition-colors">Google</span>
                </div>
                {/* Subtle hint text */}
                <p className="text-xs text-gray-400 group-hover:text-gray-600 transition-colors italic">
                  Click to see all 38 reviews
                </p>
              </div>
            </a>
          </div>

          {/* Reviews Slider - Infinito */}
          <div className="max-w-6xl mx-auto">
              <div className="relative">
                {/* Reviews Slider */}
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ 
                      transform: `translateX(-${(currentReview % reviews.length) * (isMobile ? 100 : 100/3)}%)` 
                    }}
                  >
                    {/* Duplicamos los reviews para efecto infinito */}
                    {[...reviews, ...reviews, ...reviews].map((review, index) => (
                      <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-4 md:px-4">
                        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-7 border-2 border-white/80 hover:shadow-3xl hover:scale-105 transition-all duration-300 h-full">
                          {/* Header */}
                          <div className="flex items-start gap-3 mb-4">
                            {/* Avatar */}
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-elizabeth-gradient-diagonal flex items-center justify-center text-white text-lg font-bold shadow-lg">
                              {review.initial}
                            </div>
                            
                            {/* Name, Date, and Stars */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-1">
                                <h3 className="text-base font-bold text-black truncate pr-2">{review.name}</h3>
                                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                </svg>
                              </div>
                              <p className="text-xs text-gray-500 mb-2">{review.date}</p>
                              <div className="flex gap-1">
                                {[...Array(review.rating)].map((_, i) => (
                                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                  </svg>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          {/* Review Text */}
                          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                            {review.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-2 mt-8">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReview(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        (currentReview % reviews.length) === index 
                          ? 'bg-black w-8' 
                          : 'bg-white/60 hover:bg-white/80'
                      }`}
                      aria-label={`Go to review ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
          </div>

        </div>
      </section>

      {/* Why Choose Us Section - FONDO BLANCO */}
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
