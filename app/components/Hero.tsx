'use client';

import Link from 'next/link';
import { navigateToPricing } from '../utils/navigation';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/5 via-red-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-5xl text-center relative z-10">
        {/* Premium Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 backdrop-blur-xl border border-orange-500/20 rounded-full px-5 py-2.5 mb-8 shadow-lg shadow-orange-500/10">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-3 h-3 bg-orange-500 rounded-full animate-ping"></div>
            <div className="relative w-2 h-2 bg-orange-400 rounded-full"></div>
          </div>
          <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent text-sm font-semibold tracking-wide">
            #1 Premium IPTV Service Worldwide
          </span>
        </div>

        {/* Main Heading with Enhanced Typography */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
          <span className="block mb-2">Stream Without Limits</span>
          <span className="block bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent drop-shadow-2xl">
            19,000+ Live Channels
          </span>
        </h1>

        {/* Elegant Subheading */}
        <p className="text-gray-300 text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Experience premium entertainment with <span className="text-white font-medium">80,000+ VOD</span>, live sports, movies, and series in stunning <span className="text-white font-medium">4K quality</span>
        </p>

        {/* Modern CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-12">
          <a 
            href="/#pricing" 
            onClick={navigateToPricing}
            className="group relative bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 shadow-xl shadow-orange-500/30 hover:scale-105"
          >
            <span className="relative z-10">Get Started Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-pink-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <Link 
            href="/channels" 
            className="group bg-white/5 backdrop-blur-xl border-2 border-white/10 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 flex items-center gap-3 hover:scale-105"
          >
            <span>View Channels</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2 text-gray-300 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">30-Day Money Back</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
            <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">99.9% Uptime</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
            <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            <span className="font-medium">24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
