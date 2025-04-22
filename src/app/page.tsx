"use client";

import ClientNavigation from "@/components/ClientNavigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("mansisingh1301@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen">
      <ClientNavigation />
      <main className="px-8 md:px-12 pt-40 sm:pt-32 md:pt-40">
        {/* Hero Section */}
        <div className="flex flex-col gap-8 sm:gap-16 mb-32">
          {/* Hero Title */}
          <div className="flex flex-col items-center sm:items-start w-full">
            <h1 className="hero-title w-full text-center sm:text-left">MANSI</h1>
            <h1 className="hero-title w-full text-center sm:text-left">SINGH</h1>
          </div>

          {/* Contact Email */}
          <div className="flex items-center justify-center sm:justify-start w-full mb-12 sm:mb-0">
            <button 
              onClick={copyEmail} 
              className="hero-email min-w-[280px] transition-all duration-300 hover:scale-[1.02]"
              onMouseEnter={() => document.body.style.cursor = 'copy'}
              onMouseLeave={() => document.body.style.cursor = 'auto'}
            >
              {copied ? "Copied!" : "mansisingh1301@gmail.com"}
            </button>
          </div>

          {/* Hero Text */}
          <div className="hero-text w-full text-center sm:text-right">
            <p style={{ lineHeight: '0.8', marginBottom: '0' }} className="sm:line-height-normal sm:mb-4">Account Manager. Content Strategist.</p>
            <p style={{ lineHeight: '0.8', marginBottom: '0' }} className="sm:line-height-normal sm:mb-4">Visual Storyteller. Toronto-based.</p>
            <p style={{ lineHeight: '0.8', marginBottom: '0' }} className="sm:line-height-normal">Welcome to the heart of my work.</p>
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="mb-48 scroll-mt-40 relative">
          <div className="section-header">
            <h2 className="section-title mb-0">about.</h2>
            <a 
              href="/resume.pdf" 
              download
              className="view-all-btn inline-flex items-center gap-2"
            >
              <span>Resume</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </a>
          </div>
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0">
              <img 
                src="/profile/profile.jpg" 
                alt="Mansi Singh" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="about-text pl-0 md:pl-8">
              <p>
                Hi, I'm Mansi Singh — A Toronto-based Account Manager and Content Strategist who thrives at the intersection of creativity, strategy, and people. With a background in advertising, strategy and content production, I bring client visions to life by bridging big ideas with creative execution—where "what if" meets "what works."
              </p>
              <p>
                With a creative soul and a strategic mind, I effortlessly bridge the gap between the client and my team. Whether I'm crafting pitch decks, managing campaigns, or shaping brand narratives, I work at the crossroads of creative ideas and strategic execution.
              </p>
              <p>
                When I'm not working, you'll find me obsessing over a film, out capturing photos, or exploring Toronto one neighbourhood at a time. This portfolio is a curated mix of my work, passions, and perspective—thanks for being here.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section Preview */}
        <section className="mb-48 relative">
          <div className="absolute -top-24 left-0 right-0 h-px bg-gray-200 w-full"></div>
          <div className="section-header">
            <h2 className="section-title mb-0">projects.</h2>
            <Link href="/projects" className="view-all-btn">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-48 scroll-mt-40 relative">
          <div className="absolute -top-24 left-0 right-0 h-px bg-gray-200 w-full"></div>
          <h2 className="section-title">contact.</h2>
          <div className="flex justify-center">
            <form className="contact-form max-w-2xl w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="form-input"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="form-input"
                  />
                </div>
              </div>
              <div>
                <textarea 
                  placeholder="Message" 
                  rows={4}
                  className="form-input resize-none"
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
