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
        scrolled ? 'bg-[#02143a]/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
            <Globe className="w-4.5 h-4.5 text-white" strokeWidth={2.5} />
          </div>
          <span className="font-orbitron text-white font-bold text-lg tracking-wide">
            Visa<span className="text-sky-400">Path</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {['Services', 'Countries', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sky-100 hover:text-white text-sm font-medium transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/apply"
            className="px-5 py-2 rounded-lg font-orbitron text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 transition-all duration-200 shadow-md shadow-sky-900/40"
          >
            Apply Now
          </Link>
        </div>

        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#02143a]/98 border-t border-sky-900/30 px-6 py-4 space-y-3">
          {['Services', 'Countries', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-sky-100 hover:text-white text-sm font-medium py-1"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </a>
          ))}
          <Link
            href="/apply"
            className="block mt-3 px-5 py-2.5 rounded-lg font-orbitron text-xs font-semibold text-white bg-sky-600 text-center"
          >
            Apply Now
          </Link>
        </div>
      )}
    </header>
  );
}
