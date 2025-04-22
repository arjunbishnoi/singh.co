"use client";

import ClientNavigation from "@/components/ClientNavigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import Slideshow from "@/components/Slideshow";

export default function TravelAdventures() {
  const images = [
    "https://picsum.photos/800/600?random=6",
    "https://picsum.photos/800/600?random=11",
    "https://picsum.photos/800/600?random=12"
  ];

  return (
    <div className="min-h-screen">
      <ClientNavigation />
      <main className="content-container pt-32">
        <Link href="/other-things" className="back-nav">
          <svg className="back-nav-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          back to other things
        </Link>
        
        <h1 className="section-title mb-8">travel adventures.</h1>
        
        <div className="mb-32">
          <Slideshow images={images} />
        </div>
      </main>
      <Footer />
    </div>
  );
} 