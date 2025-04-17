"use client";

import Link from "next/link";
import { useState } from "react";

export default function ClientNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const basePath = process.env.NODE_ENV === 'production' ? '' : '';

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto h-full px-4">
          <div className="flex items-center justify-center h-full relative">
            <Link href={`${basePath}/`} className="absolute left-4 text-2xl font-bold text-black">
              mansi.
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              <Link href={`${basePath}/about`} className="text-base font-semibold text-gray-800 hover:text-black transition-colors tracking-wider lowercase">
                About
              </Link>
              <Link href={`${basePath}/projects`} className="text-base font-semibold text-gray-800 hover:text-black transition-colors tracking-wider lowercase">
                Projects
              </Link>
              <Link href={`${basePath}/other-things`} className="text-base font-semibold text-gray-800 hover:text-black transition-colors tracking-wider lowercase">
                Other Things
              </Link>
              <Link href={`${basePath}/contact`} className="text-base font-semibold text-gray-800 hover:text-black transition-colors tracking-wider lowercase">
                Contact
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="absolute right-4 md:hidden w-8 h-8 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute block w-full h-0.5 bg-black transition-all duration-300 transform ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
                <span className={`absolute block w-full h-0.5 bg-black transition-all duration-300 top-3 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute block w-full h-0.5 bg-black transition-all duration-300 transform ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed top-16 left-0 right-0 bottom-0 bg-white z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="h-full flex flex-col items-center justify-center space-y-8">
          <Link 
            href={`${basePath}/about`}
            className="text-2xl font-semibold text-gray-800 hover:text-black transition-colors tracking-wider lowercase"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href={`${basePath}/projects`}
            className="text-2xl font-semibold text-gray-800 hover:text-black transition-colors tracking-wider lowercase"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link 
            href={`${basePath}/other-things`}
            className="text-2xl font-semibold text-gray-800 hover:text-black transition-colors tracking-wider lowercase"
            onClick={() => setIsMenuOpen(false)}
          >
            Other Things
          </Link>
          <Link 
            href={`${basePath}/contact`}
            className="text-2xl font-semibold text-gray-800 hover:text-black transition-colors tracking-wider lowercase"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
} 