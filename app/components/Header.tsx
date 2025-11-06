import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a1929]/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-orange-500 to-red-600 p-2 rounded-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-white">SONITV</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
              Pricing
            </a>
            <Link href="/channels" className="text-gray-300 hover:text-white transition-colors">
              Channels
            </Link>
            <Link href="/instructions" className="text-gray-300 hover:text-white transition-colors">
              Instructions
            </Link>
            <Link href="/reseller" className="text-gray-300 hover:text-white transition-colors">
              Reseller
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Link 
              href="/contact" 
              className="text-gray-300 hover:text-white transition-colors hidden md:block"
            >
              Contact Us
            </Link>
            <a 
              href="/#pricing" 
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all"
            >
              Claim 30% OFF
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
