"use client";

import { usePathname, useRouter } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    
    if (path.startsWith('#')) {
      // Handle smooth scroll on current page
      if (pathname === '/') {
        const element = document.getElementById(path.substring(1));
        if (element) {
          const navHeight = 150;
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
      // Regular page navigation
      router.push(path);
    }
  };

  return (
    <footer className="bg-black text-white py-16 sm:py-24 md:py-32 mt-16 sm:mt-24 md:mt-32">
      <div className="content-container">
        <div className="mb-16 sm:mb-24 md:mb-32">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-4">
            Curious about what we can <span className="text-gray-500">create together?</span>
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal">
            Let's bring something <span className="text-gray-500">extraordinary to life!</span>
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 mb-16 sm:mb-24 md:mb-32">
          <a 
            href="#contact" 
            onClick={(e) => handleNavigation(e, '#contact')}
            className="bg-white text-black px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg md:text-xl font-medium tracking-[-0.04em] rounded-full transition-all duration-200 ease-out hover:bg-gray-100 hover:scale-[1.02]"
          >
            Get in Touch
          </a>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-base sm:text-lg font-semibold">Available For Work</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8 sm:gap-0">
          <a href="mailto:mansisingh1301@gmail.com" className="text-base sm:text-lg underline hover:no-underline">
            mansisingh1301@gmail.com
          </a>
          <div className="text-base sm:text-lg">
            Designed<br />
            by Mansi Singh
          </div>
          <div className="text-base sm:text-lg">
            All rights reserved,<br />
            MANSI ©2025
          </div>
        </div>
      </div>
    </footer>
  );
} 