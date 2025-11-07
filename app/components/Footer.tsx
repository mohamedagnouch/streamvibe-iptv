import Link from 'next/link';
import { Facebook, MessageCircle, CreditCard, Headphones, ShieldCheck } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-1">
            <Link href="/" className="mb-4 inline-block transition-transform hover:scale-105">
              <Logo variant="dark" size="md" showText={true} />
            </Link>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Premium IPTV streaming service with 37,591+ live channels and 96,000+ VOD titles from 115+ countries. 
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
                <a 
                  href="https://wa.me/212618467167?text=Hello%2C%20I%20need%20help%20with%20StreamVibe%20IPTV.%20Can%20you%20assist%20me%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-orange-500 transition-colors text-sm"
                >
                  Contact Us
                </a>
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
              © 2025 StreamVibe. All rights reserved.
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
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-50 via-red-50 to-pink-50 py-8">
        <div className="container mx-auto px-6">
          <div className="text-[120px] md:text-[180px] font-bold bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 bg-clip-text text-transparent text-center leading-none select-none">
            StreamVibe
          </div>
        </div>
      </div>
    </footer>
  );
}
