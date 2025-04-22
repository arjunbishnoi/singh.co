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
          <Link href="/projects/brand-identity" className="project-card">
            <img 
              src="https://picsum.photos/800/600?random=1" 
              alt="Project 1" 
              className="project-image"
            />
            <div className="project-overlay">
              <h3 className="project-title">Brand Identity Design</h3>
            </div>
          </Link>

          {/* Project 2 */}
          <Link href="/projects/social-media" className="project-card">
            <img 
              src="https://picsum.photos/800/600?random=2" 
              alt="Project 2" 
              className="project-image"
            />
            <div className="project-overlay">
              <h3 className="project-title">Social Media Campaign</h3>
            </div>
          </Link>

          {/* Project 3 */}
          <Link href="/projects/content-strategy" className="project-card">
            <img 
              src="https://picsum.photos/800/600?random=3" 
              alt="Project 3" 
              className="project-image"
            />
            <div className="project-overlay">
              <h3 className="project-title">Content Strategy</h3>
            </div>
          </Link>

          {/* Project 4 */}
          <Link href="/projects/digital-marketing" className="project-card">
            <img 
              src="https://picsum.photos/800/600?random=4" 
              alt="Project 4" 
              className="project-image"
            />
            <div className="project-overlay">
              <h3 className="project-title">Digital Marketing</h3>
            </div>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
} 