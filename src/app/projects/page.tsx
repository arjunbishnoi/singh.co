"use client";

import ClientNavigation from "@/components/ClientNavigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="min-h-screen">
      <ClientNavigation />
      <main className="content-container pt-32">
        <h1 className="section-title mb-8">projects.</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {/* Project 1 */}
          <Link href="/projects/heineken" className="project-card">
            <img 
              src="/heineken/1.jpg"
              alt="HEINEKEN Project" 
              className="project-image heineken-preview-image"
            />
            <div className="project-overlay">
              <h3 className="project-title">HEINEKEN</h3>
            </div>
          </Link>

          {/* Project 2 */}
          <Link href="/projects/cattie-talkie" className="project-card">
            <img 
              src="/cattie-talkie/1.jpg"
              alt="CATTIE TALKIE Project" 
              className="project-image"
            />
            <div className="project-overlay">
              <h3 className="project-title">CATTIE TALKIE</h3>
            </div>
          </Link>

          {/* Project 3 */}
          <Link href="/projects/pawpatrol" className="project-card">
            <img 
              src="/paw-patrol/1.png"
              alt="PAW PATROL Project" 
              className="project-image"
            />
            <div className="project-overlay">
              <h3 className="project-title">PAW PATROL</h3>
            </div>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
} 