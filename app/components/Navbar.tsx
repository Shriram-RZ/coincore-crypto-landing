'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gradient">
          CoinCore
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#service" className="text-textMuted hover:text-white transition">
            Service
          </a>
          <a href="#support" className="text-textMuted hover:text-white transition">
            Support
          </a>
          <a href="#resource" className="text-textMuted hover:text-white transition">
            Resource
          </a>
        </div>

        {/* CTA Button */}
        <button className="hidden md:block btn-primary text-white">
          Download
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card mt-4 mx-6 p-6 space-y-4">
          <a href="#service" className="block text-textMuted hover:text-white transition">
            Service
          </a>
          <a href="#support" className="block text-textMuted hover:text-white transition">
            Support
          </a>
          <a href="#resource" className="block text-textMuted hover:text-white transition">
            Resource
          </a>
          <button className="w-full btn-primary text-white">
            Download
          </button>
        </div>
      )}
    </nav>
  );
}