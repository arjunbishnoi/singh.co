"use client";

import ClientNavigation from "@/components/ClientNavigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Iris() {
  return (
    <div className="min-h-screen">
      <ClientNavigation />
      <main className="content-container pt-24">
        <div className="flex justify-between items-start mb-8">
          <h1 className="section-title">IRIS</h1>
          <Link href="/other-things" className="back-nav pt-1 whitespace-nowrap">
            <svg className="back-nav-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Other Things
          </Link>
        </div>

        <div className="text-lg sm:text-xl md:text-2xl text-gray-600 tracking-[-0.04em] mb-16 font-semibold -mt-8">
          <p><span className="text-black">Concept:</span> Mansi Singh</p>
          <p><span className="text-black">Creative Direction:</span> Mansi and Tejaswini</p>
        </div>
        
        <div className="mb-16">
          <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden">
            <video 
              className="w-full h-full object-cover"
              controls
              autoPlay
              loop
              muted
              playsInline
              poster="/videos/iris/poster.jpg"
            >
              <source src="/videos/iris/iris-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2">
              <p className="text-lg leading-relaxed mb-6">
                When the world stood still during COVID-19, so did we. With nowhere to go and nothing to prove, we found ourselves face to face with the one person we often overlook—ourselves.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                This piece was born out of isolation but bloomed into connection. As a team at IRIS, we turned our lenses inward, capturing raw, unfiltered portraits of the parts of ourselves we usually hide—the awkward, the imperfect, the overlooked. It was more than just a creative exercise; it was an act of love. A quiet rebellion against the polished perfection we're used to showing.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                The project reminded us that beauty doesn't always scream. Sometimes it whispers from the shadows we once tried to ignore. And in documenting those pieces, we found something unexpected: acceptance, vulnerability, and self-love.
              </p>
              <p className="text-lg leading-relaxed">
                This is not just a visual story—it's a mirror. One we held up to ourselves. One we now hold up to the world.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 