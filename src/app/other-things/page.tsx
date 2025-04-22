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
          <Link href="/other-things/iris" className="project-card">
            <img 
              src="/videos/iris/poster.jpg" 
              alt="IRIS" 
              className="project-image"
            />
            <div className="project-overlay">
              <h3 className="project-title">IRIS</h3>
            </div>
          </Link>

          {/* Item 2 */}
          <Link href="/other-things/women" className="project-card">
            <img 
              src="/women/8.jpg" 
              alt="WOMEN" 
              className="project-image"
            />
            <div className="project-overlay">
              <h3 className="project-title">WOMEN</h3>
            </div>
          </Link>

          {/* Item 3 */}
          <Link href="/other-things/shimla-people-and-i" className="project-card">
            <img 
              src="/shimla/8.jpg" 
              alt="SHIMLA, PEOPLE AND I." 
              className="project-image"
            />
            <div className="project-overlay">
              <h3 className="project-title">SHIMLA, PEOPLE AND I.</h3>
            </div>
          </Link>

          {/* Item 4 */}
          <Link href="/other-things/being-dead" className="project-card">
            <img 
              src="/being-dead/9.jpg" 
              alt="BEING DEAD" 
              className="project-image"
            />
            <div className="project-overlay">
              <h3 className="project-title">BEING DEAD</h3>
            </div>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
} 