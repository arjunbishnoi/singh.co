"use client";

import ClientNavigation from "@/components/ClientNavigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function OtherThings() {
  return (
    <div className="min-h-screen">
      <ClientNavigation />
      <main className="content-container pt-32">
        <h1 className="section-title mb-8">other things.</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {/* Item 1 */}
          <Link href="/other-things/personal-photography" className="project-card">
            <img 
              src="https://picsum.photos/800/600?random=5" 
              alt="Personal Photography" 
              className="project-image"
            />
            <div className="project-overlay">
              <h3 className="project-title">Personal Photography</h3>
            </div>
          </Link>

          {/* Item 2 */}
          <Link href="/other-things/travel-adventures" className="project-card">
            <img 
              src="https://picsum.photos/800/600?random=6" 
              alt="Travel Adventures" 
              className="project-image"
            />
            <div className="project-overlay">
              <h3 className="project-title">Travel Adventures</h3>
            </div>
          </Link>

          {/* Item 3 */}
          <Link href="/other-things/creative-writing" className="project-card">
            <img 
              src="https://picsum.photos/800/600?random=7" 
              alt="Creative Writing" 
              className="project-image"
            />
            <div className="project-overlay">
              <h3 className="project-title">Creative Writing</h3>
            </div>
          </Link>

          {/* Item 4 */}
          <Link href="/other-things/art-collection" className="project-card">
            <img 
              src="https://picsum.photos/800/600?random=8" 
              alt="Art Collection" 
              className="project-image"
            />
            <div className="project-overlay">
              <h3 className="project-title">Art Collection</h3>
            </div>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
} 