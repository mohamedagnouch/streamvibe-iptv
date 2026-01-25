'use client';

import { Zap, Shield, Smartphone, Headphones, Clock, Star } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Experience buffer-free streaming with our high-speed servers and optimized CDN network.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 2,
    icon: Shield,
    title: 'Secure & Private',
    description: 'Your data is encrypted and protected. Stream with confidence and complete privacy.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 3,
    icon: Smartphone,
    title: 'Multi-Device',
    description: 'Watch on any device - Smart TV, phone, tablet, PC, or streaming stick.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 4,
    icon: Headphones,
    title: '24/7 Support',
    description: 'Our expert support team is always available to help you with any questions.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 5,
    icon: Clock,
    title: 'Instant Activation',
    description: 'Start streaming immediately after purchase. No waiting, no delays.',
    color: 'from-red-500 to-rose-500',
  },
  {
    id: 6,
    icon: Star,
    title: '4K Quality',
    description: 'Enjoy crystal-clear 4K Ultra HD streaming on supported channels and content.',
    color: 'from-indigo-500 to-purple-500',
  },
];

export default function Features() {
  return (
    <section className="py-12 px-6 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #ff6b35 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-4">
            <Star className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 text-sm font-medium">Premium Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Features
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience a reliable streaming platform with features designed for your entertainment
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl hover:border-orange-300 transition-all duration-300 h-full">
                  {/* Icon Container */}
                  <div className="mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative Element */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-orange-500/5 to-pink-600/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Streaming?
          </h3>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied customers and experience premium legal streaming today
          </p>
          <a
            href="#pricing"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            View Plans & Pricing
          </a>
        </div>
      </div>
    </section>
  );
}
