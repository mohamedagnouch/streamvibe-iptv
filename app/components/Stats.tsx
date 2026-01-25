'use client';

import { Users, Tv, Globe, Award } from 'lucide-react';

const stats = [
  {
    id: 1,
    icon: Tv,
    value: '37,591+',
    label: 'Live Channels',
    description: 'Premium TV channels worldwide',
  },
  {
    id: 2,
    icon: Globe,
    value: '115+',
    label: 'Countries',
    description: 'Global content coverage',
  },
  {
    id: 3,
    icon: Users,
    value: '500K+',
    label: 'Happy Customers',
    description: 'Satisfied subscribers globally',
  },
  {
    id: 4,
    icon: Award,
    value: '99.9%',
    label: 'Uptime',
    description: 'Reliable streaming service',
  },
];

export default function Stats() {
  return (
    <section className="py-12 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-orange-500 to-red-600 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-2 mb-4">
            <Award className="w-4 h-4 text-orange-600" />
            <span className="text-orange-700 text-sm font-medium">Industry Leading</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted Platform
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied users and enjoy high-quality streaming
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-4 md:p-8 shadow-lg border border-gray-200 hover:shadow-2xl hover:border-orange-300 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="mb-4 md:mb-6">
                    <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/30">
                      <Icon className="w-5 h-5 md:w-8 md:h-8 text-white" />
                    </div>
                  </div>

                  {/* Value */}
                  <div className="mb-1 md:mb-2">
                    <div className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                  </div>

                  {/* Label */}
                  <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-1 md:mb-2 leading-tight">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm">
                    {stat.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/5 via-red-500/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-700 text-sm font-medium">
              Join 500,000+ satisfied customers today
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
