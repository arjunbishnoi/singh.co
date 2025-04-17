"use client";

import Link from "next/link";
import { useState } from "react";

export default function ClientNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const basePath = process.env.NODE_ENV === 'production' ? '' : '';

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-16 z-50 bg-[#FAF9F6]">
        <div className="h-full relative">
          {/* Logo - Fixed to left corner */}
          <Link href={`${basePath}/`} className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-bold text-black tracking-[-0.04em]">
            mansi.
          </Link>
          
          {/* Centered Navigation */}
          <div className="container h-full mx-auto">
            <div className="h-full flex items-center justify-center">
              <div className="hidden md:flex items-center space-x-12">
                <Link href={`${basePath}/about`} className="text-base font-semibold text-black hover:text-gray-400 transition-colors tracking-[-0.04em] lowercase">
                  About
                </Link>
                <Link href={`${basePath}/projects`} className="text-base font-semibold text-black hover:text-gray-400 transition-colors tracking-[-0.04em] lowercase">
                  Projects
                </Link>
                <Link href={`${basePath}/other-things`} className="text-base font-semibold text-black hover:text-gray-400 transition-colors tracking-[-0.04em] lowercase">
                  Other Things
                </Link>
                <Link href={`${basePath}/contact`} className="text-base font-semibold text-black hover:text-gray-400 transition-colors tracking-[-0.04em] lowercase">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button - Fixed to right with consistent gutter */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="relative w-10 h-10">
              {/* Center Square - appears when menu is open */}
              <div className={`absolute w-2 h-2 bg-black transition-all duration-300 left-4 top-4 ${
                isMenuOpen ? 'opacity-100' : 'opacity-0'
              }`}></div>
              
              {/* Top Left Square */}
              <div className={`absolute w-2 h-2 bg-black transition-all duration-300 ${
                isMenuOpen ? 'top-4 left-2' : 'top-2 left-2'
              }`}></div>
              
              {/* Top Right Square */}
              <div className={`absolute w-2 h-2 bg-black transition-all duration-300 ${
                isMenuOpen ? 'top-4 right-2' : 'top-2 right-2'
              }`}></div>
              
              {/* Bottom Left Square */}
              <div className={`absolute w-2 h-2 bg-black transition-all duration-300 ${
                isMenuOpen ? 'bottom-4 left-2' : 'bottom-2 left-2'
              }`}></div>
              
              {/* Bottom Right Square */}
              <div className={`absolute w-2 h-2 bg-black transition-all duration-300 ${
                isMenuOpen ? 'bottom-4 right-2' : 'bottom-2 right-2'
              }`}></div>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed top-16 left-0 right-0 bottom-0 bg-[#FAF9F6] z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="container mx-auto h-full flex flex-col items-center justify-center -mt-20 space-y-10 text-4xl">
          <Link 
            href={`${basePath}/about`}
            className="text-black hover:text-gray-400 transition-colors tracking-[-0.04em] lowercase font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            about
          </Link>
          <Link 
            href={`${basePath}/projects`}
            className="text-black hover:text-gray-400 transition-colors tracking-[-0.04em] lowercase font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            projects
          </Link>
          <Link 
            href={`${basePath}/other-things`}
            className="text-black hover:text-gray-400 transition-colors tracking-[-0.04em] lowercase font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            other things
          </Link>
          <Link 
            href={`${basePath}/contact`}
            className="text-black hover:text-gray-400 transition-colors tracking-[-0.04em] lowercase font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            contact
          </Link>
        </div>
      </div>
    </>
  );
} 