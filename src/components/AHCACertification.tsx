'use client';

import { useState } from 'react';
import Image from 'next/image';

interface AHCACertificationProps {
  bgWhite?: boolean;
}

export default function AHCACertification({ bgWhite = false }: AHCACertificationProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
        <section className={`py-24 ${bgWhite ? 'bg-white' : 'bg-elizabeth-gradient-diagonal'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left: Logo - Larger on desktop */}
              <div className="flex justify-center lg:justify-end">
                <div 
                  className="cursor-pointer group transform rotate-6 transition-transform duration-300 group-hover:rotate-0"
                  onClick={() => setShowModal(true)}
                  role="button"
                  tabIndex={0}
                  aria-label="Click to view AHCA certificate"
                >
                  <div className="relative">
                    {/* Recuadro blanco con efecto brochazo */}
                    <div className="relative bg-white p-12 shadow-2xl transition-all duration-300 group-hover:shadow-3xl group-hover:-translate-y-2 overflow-hidden">
                      {/* Esquina izquierda - efecto brochazo blanco */}
                      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none"></div>
                      {/* Esquina derecha - efecto brochazo blanco */}
                      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white via-white/50 to-transparent pointer-events-none"></div>
                      
                      {/* Imagen completamente RECTA - sin bordes */}
                      <div className="relative z-10 transform -rotate-6">
                        <div className="bg-white p-1">
                          <Image
                            src="/Home/ahca_certificacion.jpeg"
                            alt="AHCA Certification"
                            width={500}
                            height={500}
                            className="w-full h-auto block"
                            unoptimized
                          />
                        </div>
                      </div>
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300 flex items-center justify-center z-20 transform -rotate-6">
                        <span className="text-white bg-black/70 px-6 py-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                          View Certificate
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Text Content */}
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-bold tracking-[0.2em] uppercase text-black/70 mb-8">
                    First Class Service Guaranteed
                  </p>
                </div>
                
                <h2 className="text-4xl sm:text-5xl font-bold text-black leading-tight mb-8">
                  AHCA Certified Professional Cleaners in Los Angeles, CA
                </h2>
                
                <p className="text-xl text-black/80 leading-relaxed">
                  <span className="font-bold text-black">Elizabeth&apos;s Cleaning Services, LLC</span> holds professional certification from the 
                  <span className="font-bold text-black"> American House Cleaners Association</span>—a nationally recognized organization dedicated to advancing professional standards and best practices in the residential and commercial cleaning industry.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Certificate Modal */}
        {showModal && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setShowModal(false)}
          >
            <div className="relative max-w-6xl w-full bg-white rounded-2xl p-4 sm:p-8 shadow-2xl">
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black text-white rounded-full p-2 hover:bg-gray-800 transition-colors z-10"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Certificate Image */}
              <div className="relative w-full" style={{ aspectRatio: '3/2' }}>
                <Image
                  src="/About/ahca_certificate.jpeg"
                  alt="AHCA Certificate - American House Cleaners Association - Nancy Elizabeth Torres"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>

              {/* Certificate Info */}
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-black mb-2">
                  Professional AHCA Certificate
                </h3>
                <p className="text-gray-700 mb-4">
                  Nancy Elizabeth Torres - Certified May 2023
                </p>
                <a 
                  href="https://www.theahca.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-black hover:text-gray-700 font-semibold"
                >
                  🌐 American House Cleaners Association
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </>
    );
}

