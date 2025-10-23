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
    <div className="absolute inset-0 w-full h-full">
      {/* Background Images */}
      <Image
        src={homeImages[currentSlide]}
        alt={`Cleaning service ${currentSlide + 1}`}
        fill
        className="object-cover transition-all duration-1000"
        priority
        unoptimized
      />
      
      {/* Navigation arrows */}
      <button 
        onClick={() => goToSlide(currentSlide === 0 ? homeImages.length - 1 : currentSlide - 1)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white/30 transition-all z-30"
      >
        <span className="text-white text-xl">‹</span>
      </button>
      <button 
        onClick={() => goToSlide((currentSlide + 1) % homeImages.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white/30 transition-all z-30"
      >
        <span className="text-white text-xl">›</span>
      </button>
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {homeImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
      
      {/* Slide counter */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30">
        <span className="text-white/80 text-sm bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
          {currentSlide + 1} of {homeImages.length}
        </span>
      </div>
    </div>
  );
};

export default PhotoSlider;