"use client";

import ClientNavigation from "@/components/ClientNavigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Women() {
  return (
    <div className="min-h-screen">
      <ClientNavigation />
      <main className="content-container pt-24">
        <div className="flex justify-between items-start mb-8">
          <h1 className="section-title">WOMEN</h1>
          <Link href="/other-things" className="back-nav pt-1 whitespace-nowrap">
            <svg className="back-nav-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Other Things
          </Link>
        </div>

        <div className="mb-16">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-2xl transform hover:scale-[1.02] transition-transform duration-300">
            <p className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight tracking-[-0.04em]">
              "everything i am,<br />
              i owe it all to<br />
              all the women in my life."
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-32">
          <div className="aspect-[9/16] rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <img 
              src="/women/1.jpg" 
              alt="Women 1" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[9/16] rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <img 
              src="/women/2.jpg" 
              alt="Women 2" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[9/16] rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <img 
              src="/women/3.jpg" 
              alt="Women 3" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[9/16] rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <img 
              src="/women/4.jpg" 
              alt="Women 4" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[9/16] rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <img 
              src="/women/5.jpg" 
              alt="Women 5" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[9/16] rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <img 
              src="/women/6.jpg" 
              alt="Women 6" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[9/16] rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <img 
              src="/women/7.jpg" 
              alt="Women 7" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[9/16] rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <img 
              src="/women/8.jpg" 
              alt="Women 8" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 