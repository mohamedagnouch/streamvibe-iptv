'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { navigateToPricing } from '../utils/navigation';
import { Menu, X, ChevronDown, Phone, Sparkles } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#pricing', label: 'Pricing', onClick: navigateToPricing },
    { href: '/channels', label: 'Channels' },
    { href: '/instructions', label: 'Setup Guide' },
    { href: '/reseller', label: 'Reseller Program' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-[#0a0e1a] lg:bg-[#0a0e1a]/95 lg:backdrop-blur-xl border-b border-white/10 shadow-2xl'
        : 'bg-[#0a0e1a] lg:bg-[#0a0e1a]/80 lg:backdrop-blur-lg border-b border-white/5 shadow-md lg:shadow-none'
        }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-10 lg:h-12">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-50 transition-transform hover:scale-105 duration-300"
          >
            <Logo variant="light" size="sm" showText={true} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              link.onClick ? (
                <a
                  key={index}
                  href={link.href}
                  onClick={link.onClick}
                  className="relative group text-gray-300 hover:text-white transition-all px-4 py-1 rounded-xl cursor-pointer"
                >
                  <span className="relative z-10 font-medium">{link.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-600 group-hover:w-3/4 transition-all duration-300"></div>
                </a>
              ) : (
                <Link
                  key={index}
                  href={link.href}
                  className="relative group text-gray-300 hover:text-white transition-all px-4 py-1 rounded-xl"
                >
                  <span className="relative z-10 font-medium">{link.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-600 group-hover:w-3/4 transition-all duration-300"></div>
                </Link>
              )
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Contact Button */}
            <a
              href="https://wa.me/212618467167?text=Hello%2C%20I%20need%20help%20with%20StreamVibe.%20Can%20you%20assist%20me%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all px-4 py-1.5 rounded-xl hover:bg-white/5 border border-white/10 hover:border-white/20"
            >
              <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span className="font-medium">Support</span>
            </a>

            {/* Get Started Button */}
            <a
              href="/#pricing"
              onClick={navigateToPricing}
              className="relative group bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white px-6 py-1.5 rounded-xl font-bold hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Get Started
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-50 p-1.5 text-white hover:text-orange-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#0a0e1a] backdrop-blur-xl transition-all duration-300 ${isMobileMenuOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
          }`}
        style={{ top: '40px' }}
      >
        <div className="container mx-auto px-6 py-8">
          <nav className="flex flex-col gap-2 mb-8">
            {navLinks.map((link, index) => (
              link.onClick ? (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => {
                    link.onClick(e);
                    setIsMobileMenuOpen(false);
                  }}
                  className="group flex items-center justify-between text-gray-300 hover:text-white transition-all px-6 py-4 rounded-xl hover:bg-white/5 border border-white/5 hover:border-orange-500/30"
                >
                  <span className="font-medium text-lg">{link.label}</span>
                  <ChevronDown className="w-5 h-5 -rotate-90 group-hover:translate-x-1 transition-transform" />
                </a>
              ) : (
                <Link
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group flex items-center justify-between text-gray-300 hover:text-white transition-all px-6 py-4 rounded-xl hover:bg-white/5 border border-white/5 hover:border-orange-500/30"
                >
                  <span className="font-medium text-lg">{link.label}</span>
                  <ChevronDown className="w-5 h-5 -rotate-90 group-hover:translate-x-1 transition-transform" />
                </Link>
              )
            ))}
          </nav>

          {/* Mobile CTA Buttons */}
          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/212618467167?text=Hello%2C%20I%20need%20help%20with%20StreamVibe.%20Can%20you%20assist%20me%3F"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 text-white px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all font-medium"
            >
              <Phone className="w-5 h-5" />
              Contact Support
            </a>
            <a
              href="/#pricing"
              onClick={(e) => {
                navigateToPricing(e);
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white px-6 py-4 rounded-xl font-bold shadow-xl shadow-orange-500/30"
            >
              <Sparkles className="w-5 h-5" />
              Get Started Now
            </a>
          </div>

          {/* Mobile Menu Footer */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">Available 24/7</p>
              <a
                href="tel:+212618467167"
                className="text-orange-400 font-semibold text-lg hover:text-orange-300 transition-colors"
              >
                +212 618 467 167
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
