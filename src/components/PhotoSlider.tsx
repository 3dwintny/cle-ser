'use client';

import { useState, useEffect } from 'react';

const PhotoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample photos - you can replace these with actual cleaning service photos
  const slides = [
    {
      id: 1,
      title: "Kitchen Deep Clean",
      description: "Spotless results every time",
      emoji: "🍽️",
      bg: "from-blue-50 to-blue-100"
    },
    {
      id: 2,
      title: "Bathroom Sanitization",
      description: "Germ-free and sparkling",
      emoji: "🛁",
      bg: "from-green-50 to-green-100"
    },
    {
      id: 3,
      title: "Living Space Refresh",
      description: "Comfortable and clean",
      emoji: "🛋️",
      bg: "from-yellow-50 to-yellow-100"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
        {/* Photo Display */}
        <div className="aspect-square bg-gradient-to-br rounded-xl flex items-center justify-center relative overflow-hidden transition-all duration-500">
          <div className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.bg} transition-all duration-500`}></div>
          
          <div className="text-center relative z-10">
            <div className="text-6xl mb-4 transition-all duration-300">{currentSlideData.emoji}</div>
            <p className="text-gray-800 font-semibold text-lg">{currentSlideData.title}</p>
            <p className="text-gray-600 text-sm mt-2">{currentSlideData.description}</p>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-100 rounded-full opacity-50"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 bg-gray-200 rounded-full opacity-50"></div>
          
          {/* Navigation arrows */}
          <button 
            onClick={() => goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-all"
          >
            <span className="text-gray-600">‹</span>
          </button>
          <button 
            onClick={() => goToSlide((currentSlide + 1) % slides.length)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-all"
          >
            <span className="text-gray-600">›</span>
          </button>
        </div>
        
        {/* Slide indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {slides.map((_, index) => (
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
        <div className="text-center mt-2">
          <span className="text-xs text-gray-500">
            {currentSlide + 1} of {slides.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PhotoSlider;
