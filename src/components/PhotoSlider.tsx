'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const PhotoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Lista dinámica de imágenes de la carpeta Home
  // Para agregar más imágenes, simplemente añade la ruta aquí
  const homeImages = [
    "/Home/bano_1.jpeg",
    "/Home/cocina.jpeg",
    "/Home/habitacion_1.jpeg",  
    "/Home/sala.jpeg",
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % homeImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [homeImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Photo Display */}
        <div className="aspect-square relative overflow-hidden">
          <Image
            src={homeImages[currentSlide]}
            alt={`Cleaning service ${currentSlide + 1}`}
            fill
            className="object-cover transition-all duration-500"
            priority
          />
          
          {/* Navigation arrows */}
          <button 
            onClick={() => goToSlide(currentSlide === 0 ? homeImages.length - 1 : currentSlide - 1)}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-all z-20"
          >
            <span className="text-gray-600">‹</span>
          </button>
          <button 
            onClick={() => goToSlide((currentSlide + 1) % homeImages.length)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-all z-20"
          >
            <span className="text-gray-600">›</span>
          </button>
        </div>
        
        {/* Slide indicators */}
        <div className="flex justify-center py-4 space-x-2">
          {homeImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-yellow-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        
        {/* Slide counter */}
        <div className="text-center pb-4">
          <span className="text-xs text-gray-500">
            {currentSlide + 1} of {homeImages.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PhotoSlider;