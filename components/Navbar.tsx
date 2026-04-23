'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Globe, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white backdrop-blur-md shadow-sm shadow-gray-200/50 border-b border-gray-100' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/jpeg-01-scaled.jpg"
            alt="Mz Global Logo"
            className="h-14 w-auto object-contain"
          />
          {/* <span className="font-orbitron text-gray-800 font-bold text-lg tracking-wide">
            Mz <span className="text-blue-600">Global</span>
          </span> */}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {['Services', 'Countries', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/apply"
            className="px-5 py-2 rounded-lg font-orbitron text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-md shadow-blue-200"
          >
            Apply Now
          </Link>
        </div>

        <button
          className="md:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-3 shadow-lg">
          {['Services', 'Countries', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-gray-700 hover:text-blue-600 text-sm font-medium py-2 transition-colors duration-200"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </a>
          ))}
          <Link
            href="/apply"
            className="block mt-4 px-5 py-2.5 rounded-lg font-orbitron text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 text-center transition-all duration-200"
            onClick={() => setMobileOpen(false)}
          >
            Apply Now
          </Link>
        </div>
      )}
    </header>
  );
}
