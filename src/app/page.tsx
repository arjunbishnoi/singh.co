import ClientNavigation from "@/components/ClientNavigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <ClientNavigation />
      <main className="container mx-auto px-4 pt-32">
        <div className="flex flex-col gap-20">
          {/* Hero Title */}
          <div className="flex flex-col gap-2">
            <h1 className="hero-title">MANSI</h1>
            <h1 className="hero-title">SINGH</h1>
          </div>

          {/* Contact Email */}
          <div>
            <a href="mailto:mansisingh1301@gmail.com" className="hero-email">
              mansisingh1301@gmail.com
            </a>
          </div>

          {/* Hero Text */}
          <div className="max-w-3xl">
            <p className="hero-text">
              Account Manager. Content Strategist.<br />
              Visual Storyteller. Toronto - based.<br />
              Welcome to the heart of my work.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
