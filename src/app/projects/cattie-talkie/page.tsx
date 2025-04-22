"use client";

import ClientNavigation from "@/components/ClientNavigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import Slideshow from "@/components/Slideshow";

export default function CattieTalkie() {
  const images = [
    "/cattie-talkie/1.jpg",
    "/cattie-talkie/2.jpg",
    "/cattie-talkie/3.jpg",
    "/cattie-talkie/4.jpg"
  ];

  return (
    <div className="min-h-screen">
      <ClientNavigation />
      <main className="content-container pt-24">
        <div className="flex justify-between items-start mb-8">
          <h1 className="section-title">CATTIE TALKIE</h1>
          <Link href="/projects" className="back-nav pt-1 whitespace-nowrap">
            <svg className="back-nav-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Projects
          </Link>
        </div>
        <div className="text-lg sm:text-xl md:text-2xl text-gray-600 tracking-[-0.04em] mb-8 font-semibold -mt-4">
          <p><span className="text-black">The Team:</span> Mansi Singh, Sarvleen Kaur, Emily Judd</p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-32">
          <Slideshow images={images} altPrefix="CATTIE TALKIE" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">The Ask</h2>
                <div className="bg-gray-900 text-white p-6 rounded-2xl transform hover:scale-[1.02] transition-transform duration-300">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Create a new tech product within an existing tech company.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Target Audience</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Urban, independent, and open-minded millennial cat owners (primarily women) in Canadian cities like Toronto, Vancouver, and Ottawa. They're adventurous, health-conscious, child-free, and treat their cats like family — seeking emotional connection and stress relief through pet companionship.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Positioning Statement</h2>
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <p className="text-lg text-gray-300 leading-relaxed">
                For cat lovers who want to challenge the old saying "a dog is a human's best friend" — Cattie Talkie deepens the human-feline bond through seamless communication and smarter caregiving.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Product: Cattie Talkie</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900 text-white p-6 rounded-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3">1</span>
                  Smart Device
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  A smart device that translates between cat and human, turning meows into meaning.
                </p>
              </div>
              <div className="bg-gray-900 text-white p-6 rounded-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3">2</span>
                  Features
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  It tracks behavior, stores "conversations," and reminds owners of key tasks like vet visits or restocking supplies.
                </p>
              </div>
              <div className="bg-gray-900 text-white p-6 rounded-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3">3</span>
                  Experience
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Cattie Talkie transforms pet care into a more connected, intuitive, and joyful experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 