"use client";

import ClientNavigation from "@/components/ClientNavigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import Slideshow from "@/components/Slideshow";

export default function ContentStrategy() {
  const images = [
    "/paw-patrol/1.png",
    "/paw-patrol/2.png",
    "/paw-patrol/3.png",
    "/paw-patrol/4.png",
    "/paw-patrol/5.png",
    "/paw-patrol/6.png"
  ];

  return (
    <div className="min-h-screen">
      <ClientNavigation />
      <main className="content-container pt-24">
        <div className="flex justify-between items-start mb-8">
          <h1 className="section-title">PAW PATROL</h1>
          <Link href="/projects" className="back-nav pt-1 whitespace-nowrap">
            <svg className="back-nav-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Projects
          </Link>
        </div>
        <div className="text-lg sm:text-xl md:text-2xl text-gray-600 tracking-[-0.04em] mb-16 font-semibold -mt-8">
          <p><span className="text-black">AM:</span> Mansi Singh</p>
          <p><span className="text-black">Copywriter:</span> Sara Azad</p>
          <p><span className="text-black">Art Director(s):</span> Vanya Verma and Anushree Chatterjee</p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 mb-32">
          <Slideshow images={images} />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Ask</h2>
            <div className="bg-gray-900 text-white p-6 rounded-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <p className="text-lg text-gray-300 leading-relaxed">
                Position PAW Patrol as a valuable ally to modern parents by transforming it from "just a kids show" into a meaningful tool that builds family confidence and connection.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Core Message</h2>
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-3xl font-bold mb-4">PAW Has Your Back</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Because every parent deserves to be heard.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Insight</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Parents aren't just looking for shows their kids love — they're looking for shows that support them as parents. In the everyday chaos of parenting toddlers, being heard by your own child can feel impossible. Confidence in parenting starts when parents feel seen and supported too.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Big Idea</h2>
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-3xl font-bold mb-4">PAW Has Your Back</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                PAW Patrol becomes more than entertainment — it becomes a bridge. A voice that helps parents connect with their children in the moments they need it most.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Strategy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900 text-white p-6 rounded-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3">1</span>
                  Get
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Millennial and Gen Z parents of 2-to-5-year-olds who doubt PAW Patrol's value
                </p>
              </div>
              <div className="bg-gray-900 text-white p-6 rounded-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3">2</span>
                  To
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  See it as a parenting ally that helps them communicate, calm, and connect
                </p>
              </div>
              <div className="bg-gray-900 text-white p-6 rounded-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3">3</span>
                  By
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Letting PAW Patrol "speak" for them — through cameos, filters, and real-life mascot moments that surprise and support both parent and child
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900 text-white p-6 rounded-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3">1</span>
                  OOH & Experiential
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  PAW Patrol mascots surprise families in public spaces (e.g., malls) by showing up during toddler meltdowns to help parents soothe their kids. Hidden cameras in security rooms cue the mascots when help is needed.
                </p>
              </div>
              <div className="bg-gray-900 text-white p-6 rounded-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3">2</span>
                  Social
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  AR filters where kids can interact with their favorite characters while parents enjoy a moment of calm (or control). Giving parents tools to guide behavior in fun, non-frustrating ways.
                </p>
              </div>
              <div className="bg-gray-900 text-white p-6 rounded-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3">3</span>
                  App
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  A mobile app that lets parents record personal voice messages using their child's favorite PAW Patrol characters. "Brush your teeth," "Go to sleep," or even "Take off that underwear hat," now has Chase delivering the message. Because sometimes, parents need backup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 