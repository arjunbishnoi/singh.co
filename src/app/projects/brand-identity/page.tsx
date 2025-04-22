"use client";

import ClientNavigation from "@/components/ClientNavigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import Slideshow from "@/components/Slideshow";

export default function BrandIdentity() {
  const images = [
    "/heineken/1.jpg",  // AC Milan Instagram post
    "/heineken/2.jpg",  // Team coasters
    "/heineken/3.jpg",  // Liverpool Instagram post
    "/heineken/4.jpg",  // OOH campaign grid (Tottenham)
    "/heineken/5.jpg",  // OOH campaign grid (Madrid/Liverpool)
    "/heineken/6.jpg",  // Team bottles
    "/heineken/7.jpg",  // Real Madrid Instagram post
    "/heineken/8.jpg",  // Passport
    "/heineken/9.jpg"   // OOH billboard
  ];

  return (
    <div className="min-h-screen">
      <ClientNavigation />
      <main className="content-container pt-24">
        <div className="flex justify-between items-start mb-8">
          <h1 className="section-title">HEINEKEN</h1>
          <Link href="/projects" className="back-nav pt-1 whitespace-nowrap">
            <svg className="back-nav-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Projects
          </Link>
        </div>
        <div className="text-lg sm:text-xl md:text-2xl text-gray-600 tracking-[-0.04em] mb-16 font-semibold -mt-8">
          <p><span className="text-black">AM:</span> Mansi Singh & Kate Law</p>
          <p><span className="text-black">Copywriter:</span> Matthew Strezos</p>
          <p><span className="text-black">Art Director:</span> Patrick Romain</p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 mb-32">
          <Slideshow images={images} />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">The Ask</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Create a brand experience for Heineken to make fresh connections, culturally connect across boundaries and borders to make a fresher world and inspire togetherness and joy.
                </p>
                <div className="bg-gray-900 text-white p-8 rounded-2xl transform hover:scale-[1.02] transition-transform duration-300">
                  <p className="text-xl font-medium">
                    Core Message: <span className="text-gray-300">Spark new connections. Bring people together!</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Insight</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Borders don't define nations — shared experiences do.
                  In today's world, communities are not formed by borders or territory, they are created by a web of shared experiences uniting under a cultural umbrella.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Big Idea</h2>
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-3xl font-bold mb-4">Find Your Home Game</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Heineken invites displaced soccer fans — expats, immigrants, students, travelers — to reconnect with their roots and passions by finding their "home game" in a new city.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Strategy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900 text-white p-6 rounded-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3">1</span>
                  Get
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Soccer fans living away from their hometowns or home countries
                </p>
              </div>
              <div className="bg-gray-900 text-white p-6 rounded-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3">2</span>
                  To
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Gather at local pubs and venues to watch games and share the spirit of their home teams
                </p>
              </div>
              <div className="bg-gray-900 text-white p-6 rounded-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3">3</span>
                  By
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Using Heineken as the connector — helping fans "Find Your Home Game" and recreate the familiar joy of watching matches with their community, even from afar.
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