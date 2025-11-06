import Link from 'next/link';
import { Facebook, MessageCircle, CreditCard, Headphones, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 p-2 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-gray-900">SONITV</span>
            </Link>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Premium IPTV streaming service with 23,000+ channels and 96,000+ VOD titles. 
              Experience entertainment like never before.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-orange-500 flex items-center justify-center transition-colors group"
              >
                <Facebook className="w-5 h-5 text-gray-600 group-hover:text-white" />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-orange-500 flex items-center justify-center transition-colors group"
              >
                <MessageCircle className="w-5 h-5 text-gray-600 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/features" className="text-gray-600 hover:text-orange-500 transition-colors text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-orange-500 transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/channels" className="text-gray-600 hover:text-orange-500 transition-colors text-sm">
                  Channels
                </Link>
              </li>
              <li>
                <Link href="/instructions" className="text-gray-600 hover:text-orange-500 transition-colors text-sm">
                  Setup Instructions
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-orange-500 transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-orange-500 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-orange-500 transition-colors text-sm">
                  Blog & News
                </Link>
              </li>
              <li>
                <Link href="/reseller" className="text-gray-600 hover:text-orange-500 transition-colors text-sm">
                  Reseller Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-orange-500 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-orange-500 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-gray-600 hover:text-orange-500 transition-colors text-sm">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-600 text-sm">
              © 2025 SONITV. All rights reserved.
            </p>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-orange-500" />
                <span>Secure Payment</span>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-orange-500" />
                <span>24/7 Support</span>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-orange-500" />
                <span>30-Day Money Back</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Large Background Text */}
      <div className="relative overflow-hidden bg-gray-50 py-8">
        <div className="container mx-auto px-6">
          <div className="text-[120px] md:text-[180px] font-bold text-gray-200 text-center leading-none select-none">
            SONITV
          </div>
        </div>
      </div>
    </footer>
  );
}
