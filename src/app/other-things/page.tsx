"use client";

import ClientNavigation from "@/components/ClientNavigation";
import Footer from "@/components/Footer";

export default function OtherThings() {
  return (
    <div className="min-h-screen">
      <ClientNavigation />
      <main className="content-container pt-32">
        <h1 className="section-title mb-16">other things.</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {/* Content will go here */}
          <div className="about-text">
            <p>Coming soon...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 