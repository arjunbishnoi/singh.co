"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface SlideshowProps {
  images: string[];
  altPrefix: string;
  hideControls?: boolean;
  autoplay?: boolean;
}

export default function Slideshow({ images, altPrefix, hideControls = false, autoplay = false }: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);
    return () => clearInterval(timer);
  }, [autoplay]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative w-full aspect-[3/2] md:aspect-[4/3] rounded-2xl overflow-hidden mb-2">
        <Image
          src={images[currentIndex]}
          alt={`${altPrefix} ${currentIndex + 1}`}
          fill
          className="object-cover"
          priority={currentIndex === 0}
        />
        
        {!hideControls && (
          <>
            {/* Navigation Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
              aria-label="Previous slide"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
              aria-label="Next slide"
            >
              →
            </button>
          </>
        )}
      </div>

      {/* Dots - now below the slideshow */}
      {!hideControls && (
        <div className="flex justify-center gap-2 mb-8">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-black' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
} 