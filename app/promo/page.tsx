'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Server, Zap, Shield, Globe, Play, CheckCircle } from 'lucide-react';

export default function PromoPage() {
    const [selectedDevices, setSelectedDevices] = useState(1);

    const pricingPlans = [
        { name: '1 Month Access', prices: { 1: 14.99, 2: 29.99, 3: 44.99, 4: 59.99, 5: 74.99 }, popular: false },
        { name: '3 Months Access', prices: { 1: 35.99, 2: 71.98, 3: 99.97, 4: 139.96, 5: 179.95 }, popular: false },
        { name: '6 Months Access', prices: { 1: 49.99, 2: 99.98, 3: 139.97, 4: 195.96, 5: 251.95 }, popular: false },
        { name: '12 Months Access', prices: { 1: 69.99, 2: 139.98, 3: 195.97, 4: 274.96, 5: 353.95 }, popular: true },
    ];
    return (
        <main className="min-h-screen bg-gradient-to-b from-[#0a0e1a] via-[#1a1f35] to-[#0a0e1a] text-white font-sans">

            {/* Header */}
            <header className="absolute top-0 w-full z-50 px-6 py-6 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-tr from-orange-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Server className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xl font-black tracking-wider uppercase">Cloud<span className="text-orange-500">Stream</span></span>
                </div>
                {/* No navigation to the main IPTV site to prevent crawlers */}
                <Link href="#pricing" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white px-6 py-2.5 rounded-full font-bold transition-all">
                    Get Started
                </Link>
            </header>

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-4 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full opacity-30 pointer-events-none">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
                    <div className="absolute top-40 right-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
                </div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-sm font-semibold tracking-wide text-gray-300">Enterprise-Grade Media Infrastructure</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
                        The Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">Cloud Media</span> Server
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Deploy your own high-performance media server in seconds. Enjoy 99.9% uptime, global CDN delivery, and blazing fast streaming capabilities.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="#pricing" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-lg shadow-orange-500/20">
                            Deploy Server Now
                        </Link>
                        <a href="#features" className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-lg hover:bg-white/10 transition">
                            Explore Features
                        </a>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-24 px-4 bg-black/20">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black mb-4">Why Choose Our Infrastructure?</h2>
                        <p className="text-gray-400">Everything you need to host and stream media reliably.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <Zap />, title: 'Ultra-Fast Delivery', desc: 'Powered by a global CDN ensuring your media loads instantly anywhere in the world.' },
                            { icon: <Shield />, title: 'Secure & Private', desc: 'Enterprise-grade encryption and DDoS protection keeps your server safe 24/7.' },
                            { icon: <Globe />, title: 'Global Coverage', desc: 'Data centers strategically located across Europe, Americas, and Asia.' },
                        ].map((feature, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition">
                                <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6 text-orange-400">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-24 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black mb-4">Simple, Transparent Pricing</h2>
                        <p className="text-gray-400">Select the cloud access duration that fits your needs.</p>
                    </div>

                    {/* Device Selector */}
                    <div className="mb-12">
                        <h3 className="text-center text-white text-base md:text-lg font-bold mb-5">
                            Select Number of Nodes / Devices
                        </h3>
                        <div className="flex justify-center gap-3 md:gap-4 flex-wrap px-4">
                            {[1, 2, 3, 4, 5].map((count) => (
                                <button
                                    key={count}
                                    onClick={() => setSelectedDevices(count)}
                                    className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl font-black text-lg transition-all ${selectedDevices === count
                                            ? 'bg-gradient-to-r from-orange-500 to-pink-600 text-white shadow-lg shadow-orange-500/30 ring-2 ring-orange-500/50'
                                            : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                                        }`}
                                >
                                    {count}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pricingPlans.map((plan, i) => (
                            <div key={i} className={`relative bg-[#111827] border ${plan.popular ? 'border-orange-500 shadow-2xl shadow-orange-500/20' : 'border-white/10'} rounded-3xl p-8 flex flex-col`}>
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-pink-600 text-white text-xs font-black uppercase tracking-widest py-1.5 px-4 rounded-full">
                                        Best Value
                                    </div>
                                )}
                                <h3 className="text-xl font-bold text-gray-300 mb-2">{plan.name}</h3>
                                <div className="mb-2 flex items-baseline gap-1">
                                    <span className="text-4xl font-black">€{plan.prices[selectedDevices as keyof typeof plan.prices].toFixed(2)}</span>
                                </div>
                                <p className="text-xs text-gray-500 mb-6 uppercase tracking-wider font-semibold">
                                    {selectedDevices} Virtual Node{selectedDevices > 1 ? 's' : ''}
                                </p>
                                <ul className="space-y-4 mb-8 flex-1">
                                    {['Instant Setup', 'Unlimited Bandwidth', '99.9% Uptime SLA', '24/7 Priority Support'].map(feature => (
                                        <li key={feature} className="flex items-center gap-3 text-sm text-gray-400">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href={`/promo/checkout?plan=${encodeURIComponent(plan.name)}&price=${plan.prices[selectedDevices as keyof typeof plan.prices].toFixed(2)}&devices=${selectedDevices}`}
                                    className={`w-full py-4 rounded-xl font-bold text-center transition ${plan.popular
                                        ? 'bg-gradient-to-r from-orange-500 to-pink-600 text-white hover:opacity-90'
                                        : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                                        }`}
                                >
                                    Select Plan
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/10 py-12 text-center text-gray-500 text-sm">
                <p>© {new Date().getFullYear()} CloudStream Infrastructure. All rights reserved.</p>
                <div className="flex justify-center gap-4 mt-4">
                    <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
                </div>
            </footer>
        </main>
    );
}
