"use client";

import ClientNavigation from "@/components/ClientNavigation";
import Footer from "@/components/Footer";

export default function Projects() {
  return (
    <div className="min-h-screen">
      <ClientNavigation />
      <main className="content-container pt-32">
        <h1 className="section-title mb-16">projects.</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {/* Project 1 */}
          <div className="project-card">
            <img 
              src="https://picsum.photos/800/600?random=1" 
              alt="Project 1" 
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">Brand Identity Design</h3>
              <p className="project-description">A comprehensive brand identity system for a luxury lifestyle company, including logo design, typography, and brand guidelines.</p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <img 
              src="https://picsum.photos/800/600?random=2" 
              alt="Project 2" 
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">Social Media Campaign</h3>
              <p className="project-description">Strategic social media campaign that increased engagement by 200% and drove significant brand awareness.</p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <img 
              src="https://picsum.photos/800/600?random=3" 
              alt="Project 3" 
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">Content Strategy</h3>
              <p className="project-description">Developed and implemented a content strategy that doubled website traffic and improved conversion rates.</p>
            </div>
          </div>

          {/* Project 4 */}
          <div className="project-card">
            <img 
              src="https://picsum.photos/800/600?random=4" 
              alt="Project 4" 
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">Digital Marketing</h3>
              <p className="project-description">Comprehensive digital marketing campaign that generated 150% ROI through targeted advertising and content marketing.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 