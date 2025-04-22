"use client";

import { useState } from "react";

interface SlideshowProps {
  images: string[];
}

export default function Slideshow({ images }: SlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="project-detail">
      <div className="relative group">
        {/* Main Image Container */}
        <div className="project-card bg-white">
          <div className="project-image-container">
            <img 
              src={images[currentSlide]} 
              alt={`Slide ${currentSlide + 1}`} 
              className="project-image"
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="slideshow-dots">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`slideshow-dot ${
              currentSlide === index ? 'active' : 'inactive'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 