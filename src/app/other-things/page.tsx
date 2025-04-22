"use client";

import ClientNavigation from "@/components/ClientNavigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function OtherThings() {
  return (
    <div className="min-h-screen">
      <ClientNavigation />
      <main className="content-container pt-32">
        <h1 className="section-title mb-8">other things.</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {/* Item 1 */}
          <Link href="/other-things/iris" className="project-card relative aspect-[4/3]">
            <Image 
              src="/videos/iris/poster.jpg" 
              alt="IRIS" 
              fill
              className="object-cover"
              priority
            />
            <div className="project-overlay">
              <h3 className="project-title">IRIS</h3>
            </div>
          </Link>

          {/* Item 2 */}
          <Link href="/other-things/women" className="project-card relative aspect-[4/3]">
            <Image 
              src="/women/8.JPG" 
              alt="WOMEN" 
              fill
              className="object-cover"
              priority
            />
            <div className="project-overlay">
              <h3 className="project-title">WOMEN</h3>
            </div>
          </Link>

          {/* Item 3 */}
          <Link href="/other-things/shimla-people-and-i" className="project-card relative aspect-[4/3]">
            <Image 
              src="/shimla/8.JPG" 
              alt="SHIMLA, PEOPLE AND I." 
              fill
              className="object-cover"
              priority
            />
            <div className="project-overlay">
              <h3 className="project-title">SHIMLA, PEOPLE AND I.</h3>
            </div>
          </Link>

          {/* Item 4 */}
          <Link href="/other-things/being-dead" className="project-card relative aspect-[4/3]">
            <Image 
              src="/being-dead/9.JPG" 
              alt="BEING DEAD" 
              fill
              className="object-cover"
              priority
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