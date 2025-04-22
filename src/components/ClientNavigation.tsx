"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function ClientNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (path.startsWith('#')) {
      // Handle smooth scroll on current page
      if (pathname === '/') {
        const element = document.getElementById(path.substring(1));
        if (element) {
          const navHeight = 150; // Increased from 96 to 200 for more breathing room
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - navHeight,
            behavior: 'smooth'
          });
        }
      } else {
        // If on a different page, navigate to home and then scroll
        router.push(`/${path}`);
      }
    } else {
      // Regular page navigation - no scroll manipulation
      router.push(path);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-20 md:h-24 z-50 bg-[#FAF9F6] overflow-hidden">
        <div className="h-full relative">
          {/* Logo - Fixed to left corner */}
          <a 
            href="/" 
            onClick={(e) => handleNavigation(e, '/')}
            className="absolute left-8 md:left-12 top-1/2 -translate-y-1/2 text-3xl md:text-4xl font-bold text-black tracking-[-0.04em]"
          >
            mansi.
          </a>
          
          {/* Centered Navigation */}
          <div className="h-full mx-auto px-8 md:px-12">
            <div className="h-full flex items-center justify-center">
              <div className="hidden lg:flex items-center space-x-16">
                <a 
                  href="#about" 
                  onClick={(e) => handleNavigation(e, '#about')}
                  className="text-lg md:text-xl font-semibold text-black hover:text-gray-400 transition-colors tracking-[-0.04em] lowercase"
                >
                  About
                </a>
                <a 
                  href="/projects"
                  onClick={(e) => handleNavigation(e, '/projects')}
                  className="text-lg md:text-xl font-semibold text-black hover:text-gray-400 transition-colors tracking-[-0.04em] lowercase"
                >
                  Projects
                </a>
                <a 
                  href="/other-things"
                  onClick={(e) => handleNavigation(e, '/other-things')}
                  className="text-lg md:text-xl font-semibold text-black hover:text-gray-400 transition-colors tracking-[-0.04em] lowercase"
                >
                  Other Things
                </a>
                <a 
                  href="#contact"
                  onClick={(e) => handleNavigation(e, '#contact')}
                  className="text-lg md:text-xl font-semibold text-black hover:text-gray-400 transition-colors tracking-[-0.04em] lowercase"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden absolute right-8 md:right-12 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="relative w-10 h-10">
              <div className={`absolute w-2 h-2 bg-black transition-all duration-300 left-4 top-4 ${
                isMenuOpen ? 'opacity-100' : 'opacity-0'
              }`}></div>
              <div className={`absolute w-2 h-2 bg-black transition-all duration-300 ${
                isMenuOpen ? 'top-4 left-2' : 'top-2 left-2'
              }`}></div>
              <div className={`absolute w-2 h-2 bg-black transition-all duration-300 ${
                isMenuOpen ? 'top-4 right-2' : 'top-2 right-2'
              }`}></div>
              <div className={`absolute w-2 h-2 bg-black transition-all duration-300 ${
                isMenuOpen ? 'bottom-4 left-2' : 'bottom-2 left-2'
              }`}></div>
              <div className={`absolute w-2 h-2 bg-black transition-all duration-300 ${
                isMenuOpen ? 'bottom-4 right-2' : 'bottom-2 right-2'
              }`}></div>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed top-20 md:top-24 left-0 right-0 h-0 bg-[#FAF9F6] z-40 transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen ? 'h-[calc(100vh-5rem)] md:h-[calc(100vh-6rem)]' : 'h-0'
        }`}
      >
        <div className="h-full content-container flex flex-col items-start justify-center -mt-20 space-y-10 text-4xl">
          <a 
            href="#about"
            onClick={(e) => handleNavigation(e, '#about')}
            className={`text-black hover:text-gray-400 transition-all duration-500 tracking-[-0.04em] lowercase font-medium ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: isMenuOpen ? '0.1s' : '0s' }}
          >
            about
          </a>
          <a 
            href="/projects"
            onClick={(e) => handleNavigation(e, '/projects')}
            className={`text-black hover:text-gray-400 transition-all duration-500 tracking-[-0.04em] lowercase font-medium ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: isMenuOpen ? '0.2s' : '0s' }}
          >
            projects
          </a>
          <a 
            href="/other-things"
            onClick={(e) => handleNavigation(e, '/other-things')}
            className={`text-black hover:text-gray-400 transition-all duration-500 tracking-[-0.04em] lowercase font-medium ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: isMenuOpen ? '0.3s' : '0s' }}
          >
            other things
          </a>
          <a 
            href="#contact"
            onClick={(e) => handleNavigation(e, '#contact')}
            className={`text-black hover:text-gray-400 transition-all duration-500 tracking-[-0.04em] lowercase font-medium ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: isMenuOpen ? '0.4s' : '0s' }}
          >
            contact
          </a>
        </div>
      </div>
    </>
  );
} 