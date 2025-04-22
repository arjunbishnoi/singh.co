"use client";

import ClientNavigation from "@/components/ClientNavigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import Slideshow from "@/components/Slideshow";

export default function ContentStrategy() {
  const images = [
    "https://picsum.photos/800/600?random=3",
    "https://picsum.photos/800/600?random=31",
    "https://picsum.photos/800/600?random=32",
    "https://picsum.photos/800/600?random=33"
  ];

  return (
    <div className="min-h-screen">
      <ClientNavigation />
      <main className="content-container pt-32">
        <Link href="/projects" className="back-nav">
          <svg className="back-nav-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Projects
        </Link>
        <h1 className="section-title mb-16">Content Strategy</h1>
        
        <div className="grid grid-cols-1 gap-8 mb-32">
          <Slideshow images={images} />
        </div>
      </main>
      <Footer />
    </div>
  );
} 