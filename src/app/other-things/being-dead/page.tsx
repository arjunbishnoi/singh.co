"use client";

import ClientNavigation from "@/components/ClientNavigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import Slideshow from "@/components/Slideshow";

export default function BeingDead() {
  const images = [
    "/being-dead/1.jpg",
    "/being-dead/2.jpg",
    "/being-dead/3.jpg",
    "/being-dead/4.jpg",
    "/being-dead/5.jpg",
    "/being-dead/6.jpg",
    "/being-dead/7.jpg",
    "/being-dead/8.jpg",
    "/being-dead/9.jpg",
    "/being-dead/10.jpg",
    "/being-dead/11.jpg"
  ];

  return (
    <div className="min-h-screen">
      <ClientNavigation />
      <main className="content-container pt-24">
        <div className="flex justify-between items-start mb-8">
          <h1 className="section-title">BEING DEAD</h1>
          <Link href="/other-things" className="back-nav pt-1 whitespace-nowrap">
            <svg className="back-nav-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Other Things
          </Link>
        </div>
        
        <Slideshow images={images} altPrefix="BEING DEAD" />
        
        <div className="max-w-3xl mx-auto mb-32">
          <p className="text-lg leading-relaxed text-gray-700 space-y-6">
            <span className="block font-medium text-gray-900">It is the power of the mind to be unconquerable.</span>
            
            This photo-story is about my constant struggle with myself, anxiety and dissociation. This is a story of me getting away from myself, losing myself. The return of the voices would end in a migraine that made my whole body throb. I could do nothing except lie in a blacked-out room waiting for the voices to get infected by the pains in my head and clear off.
            
            Knowing I was different with my sadness, dissociation and the voices that no one else seemed to hear made me feel isolated, disconnected. I took everything too seriously. I analysed things to death. I turned every word, and the intonation of every word over in my mind trying to decide exactly what it meant, whether there was a subtext or an implied criticism.
            
            I tried to recall the expressions on people's faces, how those expressions changed, what they meant, whether what they said and the look on their faces matched and were therefore genuine or whether it was a sham, the kind word touched by irony or sarcasm, the smile that means pity.
            
            That is what I would often be thinking and such thoughts ate away at the façade of self-confidence I was constantly raising and repairing. I could no longer discern what was real and what was fake. Everything, including the present, seemed to be both too much and nothing at all.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
} 