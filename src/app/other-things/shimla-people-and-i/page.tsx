"use client";

import ClientNavigation from "@/components/ClientNavigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ShimlaPeopleAndI() {
  return (
    <div className="min-h-screen">
      <ClientNavigation />
      <main className="content-container pt-24">
        <div className="flex justify-between items-start mb-8">
          <h1 className="section-title">SHIMLA, PEOPLE AND I.</h1>
          <Link href="/other-things" className="back-nav pt-1 whitespace-nowrap">
            <svg className="back-nav-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Other Things
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-32">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <img 
              src="/shimla/1.jpg" 
              alt="Shimla 1" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <img 
              src="/shimla/2.jpg" 
              alt="Shimla 2" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <img 
              src="/shimla/3.jpg" 
              alt="Shimla 3" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <img 
              src="/shimla/4.jpg" 
              alt="Shimla 4" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <img 
              src="/shimla/5.jpg" 
              alt="Shimla 5" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <img 
              src="/shimla/6.jpg" 
              alt="Shimla 6" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <img 
              src="/shimla/7.jpg" 
              alt="Shimla 7" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <img 
              src="/shimla/8.jpg" 
              alt="Shimla 8" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <img 
              src="/shimla/9.jpg" 
              alt="Shimla 9" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 