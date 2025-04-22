"use client";

import { useState, useEffect } from 'react';

interface SlideshowProps {
  images: string[];
  altPrefix: string;
}

export default function Slideshow({ images, altPrefix }: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8">
      <img
        src={images[currentIndex]}
        alt={`${altPrefix} ${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />
    </div>
  );
} 