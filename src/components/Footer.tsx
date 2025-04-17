export default function Footer() {
  return (
    <footer className="bg-black text-white py-32 mt-32">
      <div className="container mx-auto px-4">
        <div className="mb-32">
          <h2 className="text-6xl font-normal mb-4">
            Curious about what we can <span className="text-gray-500">create together?</span>
          </h2>
          <h2 className="text-6xl font-normal">
            Let's bring something <span className="text-gray-500">extraordinary to life!</span>
          </h2>
        </div>

        <div className="flex items-center gap-8 mb-32">
          <a href="/contact" className="bg-white text-black px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-colors">
            Get in Touch
          </a>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-lg">Available For Work</span>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <a href="mailto:mansisingh1301@gmail.com" className="text-lg hover:underline">
            mansisingh1301@gmail.com
          </a>
          <div className="text-lg">
            Designed<br />
            by Mansi Singh
          </div>
          <div className="text-lg">
            All rights reserved,<br />
            MANSI ©2025
          </div>
        </div>
      </div>
    </footer>
  );
} 