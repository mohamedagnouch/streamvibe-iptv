import Link from 'next/link';
import { Facebook, MessageCircle, Instagram, Twitter, Mail, Phone, MapPin, Shield, Award, Zap, CreditCard, Headphones, ShieldCheck } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0e1a] border-t border-white/5">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>

      <div className="container mx-auto px-6 py-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <Link href="/" className="mb-4 inline-block transition-transform hover:scale-105">
              <Logo variant="light" size="md" showText={true} />
            </Link>
            <p className="text-gray-400 text-sm mb-5 leading-relaxed">
              Premium global streaming hub with <span className="text-orange-500 font-semibold">official</span> live channels and <span className="text-orange-500 font-semibold">96,000+</span> VOD titles.
            </p>

            {/* Social Media */}
            <div className="mb-4">
              <p className="text-gray-500 text-xs mb-3 uppercase tracking-wider">Follow Us</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 flex items-center justify-center transition-all duration-300 group border border-white/10 hover:border-transparent"
                >
                  <Facebook className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 flex items-center justify-center transition-all duration-300 group border border-white/10 hover:border-transparent"
                >
                  <Instagram className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 flex items-center justify-center transition-all duration-300 group border border-white/10 hover:border-transparent"
                >
                  <Twitter className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://wa.me/15626380287"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 flex items-center justify-center transition-all duration-300 group border border-white/10 hover:border-transparent"
                >
                  <MessageCircle className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-bold mb-3 md:mb-4 text-sm md:text-base">Product</h3>
            <ul className="space-y-2 md:space-y-2.5">
              <li>
                <a href="/#pricing" className="text-gray-400 hover:text-orange-500 transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Pricing Plans
                </a>
              </li>
              <li>
                <Link href="/channels" className="text-gray-400 hover:text-orange-500 transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Channel List
                </Link>
              </li>
              <li>
                <Link href="/instructions" className="text-gray-400 hover:text-orange-500 transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Setup Guide
                </Link>
              </li>
              <li>
                <Link href="/reseller" className="text-gray-400 hover:text-orange-500 transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Become Reseller
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-bold mb-3 md:mb-4 text-sm md:text-base">Support</h3>
            <ul className="space-y-2 md:space-y-2.5">
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-orange-500 transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  FAQ
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/15626380287?text=Hello%2C%20I%20need%20help%20with%20StreamVibe.%20Can%20you%20assist%20me%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact Us
                </a>
              </li>
              <li>
                <Link href="/tutorials" className="text-gray-400 hover:text-orange-500 transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Video Tutorials
                </Link>
              </li>
              <li>
                <a href="https://wa.me/15626380287" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Live Chat
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-bold mb-3 md:mb-4 text-sm md:text-base">Legal</h3>
            <ul className="space-y-2 md:space-y-2.5">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-orange-500 transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-orange-500 transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-gray-400 hover:text-orange-500 transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © 2025 StreamVibe. All rights reserved.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-orange-500" />
                <span>Secure Payment</span>
              </div>
              <span className="text-gray-600">•</span>
              <div className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-orange-500" />
                <span>24/7 Support</span>
              </div>
              <span className="text-gray-600">•</span>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-orange-500" />
                <span>30-Day Money Back</span>
              </div>
            </div>
          </div>
        </div>
      </div>


    </footer>
  );
}
