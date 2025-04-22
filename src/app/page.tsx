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
      <main className="content-container pt-32">
        {/* Hero Section */}
        <div className="flex flex-col gap-20 mb-32">
          {/* Hero Title */}
          <div>
            <h1 className="hero-title">MANSI</h1>
            <h1 className="hero-title">SINGH</h1>
          </div>

          {/* Contact Email */}
          <div className="flex items-center">
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
          <div className="hero-text">
            <p>Account Manager. Content Strategist.</p>
            <p>Visual Storyteller. Toronto - based.</p>
            <p>Welcome to the heart of my work.</p>
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="mb-48 scroll-mt-40 relative">
          <h2 className="section-title text-4xl font-bold tracking-tight mt-24">about.</h2>
          <div className="about-text">
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
        </section>

        {/* Projects Section Preview */}
        <section className="mb-48 relative">
          <div className="absolute -top-24 left-0 right-0 h-px bg-gray-200 w-full"></div>
          <div className="section-header mt-24">
            <h2 className="section-title text-4xl font-bold tracking-tight mb-0">projects.</h2>
            <Link href="/projects" className="view-all-btn">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-48 scroll-mt-40 relative">
          <div className="absolute -top-24 left-0 right-0 h-px bg-gray-200 w-full"></div>
          <h2 className="section-title text-4xl font-bold tracking-tight mt-24">contact.</h2>
          <form className="contact-form">
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
