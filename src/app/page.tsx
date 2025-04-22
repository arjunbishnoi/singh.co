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
      <main className="px-8 md:px-12 pt-32 sm:pt-20 md:pt-24">
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
              className="hero-email"
              onMouseEnter={() => document.body.style.cursor = 'copy'}
              onMouseLeave={() => document.body.style.cursor = 'auto'}
            >
              mansisingh1301@gmail.com
            </button>
            {copied && (
              <span className="ml-2 text-sm text-gray-500">Copied!</span>
            )}
          </div>

          {/* Hero Text */}
          <div className="hero-text w-full text-center sm:text-right">
            <p style={{ lineHeight: '0.8', marginBottom: '0' }} className="sm:line-height-normal sm:mb-4">Account Manager. Content Strategist.</p>
            <p style={{ lineHeight: '0.8', marginBottom: '0' }} className="sm:line-height-normal sm:mb-4">Visual Storyteller. Toronto - based.</p>
            <p style={{ lineHeight: '0.8', marginBottom: '0' }} className="sm:line-height-normal">Welcome to the heart of my work.</p>
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="mb-48 scroll-mt-40 relative">
          <h2 className="section-title pl-0">about.</h2>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mansi" 
                alt="Mansi Singh" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="about-text pl-0">
              <p>
                I'm a multifaceted professional with a passion for crafting compelling narratives and driving business growth. With a background in account management and content strategy, I specialize in bridging the gap between creative vision and strategic execution.
              </p>
              <p>
                My approach combines analytical thinking with creative problem-solving, allowing me to develop innovative solutions that resonate with audiences and deliver measurable results. I believe in the power of storytelling to create meaningful connections and drive engagement across all platforms.
              </p>
              <p>
                Based in Toronto, I work with clients and teams globally, bringing a diverse perspective and adaptable mindset to every project. Whether it's developing content strategies, managing client relationships, or creating visual narratives, I'm committed to excellence and continuous growth.
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
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-48 scroll-mt-40 relative">
          <div className="absolute -top-24 left-0 right-0 h-px bg-gray-200 w-full"></div>
          <h2 className="section-title">contact.</h2>
          <form className="contact-form">
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
        </section>
      </main>
      <Footer />
    </div>
  );
}
