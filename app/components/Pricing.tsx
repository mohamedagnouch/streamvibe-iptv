'use client';

import { useState } from 'react';

const pricingPlans = [
  {
    id: 1,
    name: '1 MONTH',
    badge: null,
    prices: {
      1: 20.99,
      2: 38.99,
      3: 52.99,
      4: 72.99,
      5: 92.99,
    },
    originalPrices: {
      1: null,
      2: null,
      3: null,
      4: 99.99,
      5: 119.99,
    },
    discount: {
      1: null,
      2: null,
      3: null,
      4: '30%',
      5: '25%',
    },
    features: [
      'Thousands of Official Channels',
      '96,000+ Official VOD Titles',
      'USA, MEX, LATINO, CA, FR, IT',
      'Premium Streaming Access',
      '99.9% Uptime',
      'Categorized Series & Movies',
      '4K / FHD / HD / SD',
      '24/7 Global Access',
      'Support All Devices',
      'Advanced Stream Optimization',
      'Instant Activation',
    ],
  },
  {
    id: 2,
    name: '3 MONTHS',
    badge: null,
    prices: {
      1: 38.99,
      2: 74.98,
      3: 102.97,
      4: 142.96,
      5: 182.95,
    },
    originalPrices: {
      1: null,
      2: null,
      3: null,
      4: 199.96,
      5: 239.95,
    },
    discount: {
      1: null,
      2: null,
      3: null,
      4: '30%',
      5: '25%',
    },
    features: [
      'Thousands of Official Channels',
      '96,000+ Official VOD Titles',
      'USA, MEX, LATINO, CA, FR, IT',
      'Premium Streaming Access',
      '99.9% Uptime',
      'Categorized Series & Movies',
      '4K / FHD / HD / SD',
      '24/7 Global Access',
      'Support All Devices',
      'Advanced Stream Optimization',
      'Instant Activation',
    ],
  },
  {
    id: 3,
    name: '6 MONTHS',
    badge: null,
    prices: {
      1: 52.99,
      2: 102.98,
      3: 142.97,
      4: 198.96,
      5: 254.95,
    },
    originalPrices: {
      1: 71.94,
      2: 143.88,
      3: 199.82,
      4: 279.76,
      5: 359.70,
    },
    discount: {
      1: '30%',
      2: '30%',
      3: '30%',
      4: '30%',
      5: '30%',
    },
    features: [
      'Thousands of Official Channels',
      'All Top Official VOD',
      'USA, MEX, LATINO, CA, FR, IT',
      'Premium Streaming Access',
      '99.9% Uptime',
      'Categorized Series & Movies',
      '4K / FHD / HD / SD',
      '24/7 Global Access',
      'Support All Devices',
      'Advanced Stream Optimization',
      'Instant Activation',
    ],
  },
  {
    id: 4,
    name: '12 MONTHS',
    badge: 'MOST POPULAR',
    prices: {
      1: 72.99,
      2: 142.98,
      3: 198.97,
      4: 277.96,
      5: 356.95,
    },
    originalPrices: {
      1: 99.99,
      2: 199.98,
      3: 279.97,
      4: 391.96,
      5: 503.95,
    },
    discount: {
      1: '30%',
      2: '30%',
      3: '30%',
      4: '30%',
      5: '30%',
    },
    features: [
      'Thousands of Official Channels',
      'All Top Official VOD',
      'USA, MEX, LATINO, CA, FR, IT',
      'Premium Streaming Access',
      '99.9% Uptime',
      '<strong>24/7 Premium Support</strong>',
      '4K / FHD / HD / SD',
      '24/7 Official Access',
      'Support All Devices',
      'Advanced Stream Optimization',
      'Instant Activation',
    ],
  },
];

export default function Pricing() {
  const [selectedDevices, setSelectedDevices] = useState(1);

  return (
    <section id="pricing" className="py-16 px-6 bg-gradient-to-b from-[#0d1f33] to-[#0a1929]">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Don't miss the
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Exclusive Streaming deals
            </span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="bg-orange-500 text-white px-4 py-1 rounded text-sm font-semibold">
              End in 30d 23h 59m 59s
            </span>
            <span className="text-gray-400">or 30 Bundles left</span>
            <span className="text-gray-400">or 30 Bundles left</span>
          </div>
        </div>

        {/* Device Count Selector */}
        <div className="mb-8">
          <h3 className="text-center text-white text-lg font-semibold mb-4">
            Select Device Count
          </h3>
          <p className="text-center text-gray-400 text-sm mb-6">5 Devices available</p>
          <div className="flex justify-center flex-wrap gap-2 md:gap-4 px-2">
            {[1, 2, 3, 4, 5].map((count) => (
              <button
                key={count}
                onClick={() => setSelectedDevices(count)}
                className={`w-9 h-9 md:w-12 md:h-12 rounded-lg font-semibold transition-all ${selectedDevices === count
                  ? 'bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white shadow-lg shadow-orange-500/30'
                  : 'bg-white/10 text-gray-400 hover:bg-white/20'
                  }`}
              >
                {count}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl overflow-hidden ${plan.badge
                ? 'bg-gradient-to-b from-orange-500/20 to-transparent border-2 border-orange-500'
                : 'bg-white/5 border border-gray-700'
                }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white text-center py-2 text-sm font-semibold">
                  ⭐ {plan.badge}
                </div>
              )}

              <div className="p-6">
                {/* Plan Name */}
                <div className="text-center mb-6">
                  <span className="text-gray-400 text-sm">{plan.name}</span>

                  {/* Price */}
                  <div className="mt-2">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold text-white">
                        {plan.prices[selectedDevices as keyof typeof plan.prices].toFixed(2)}
                      </span>
                      <span className="text-gray-400">$US</span>
                      {plan.discount[selectedDevices as keyof typeof plan.discount] && (
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                          {plan.discount[selectedDevices as keyof typeof plan.discount]} OFF
                        </span>
                      )}
                    </div>
                    {plan.originalPrices[selectedDevices as keyof typeof plan.originalPrices] && (
                      <div className="text-gray-500 line-through text-sm mt-1">
                        Was {plan.originalPrices[selectedDevices as keyof typeof plan.originalPrices]?.toFixed(2)} $US
                      </div>
                    )}
                  </div>

                  {/* Subtitle */}
                  <p className="text-gray-400 text-xs mt-3">
                    {selectedDevices} {selectedDevices === 1 ? 'Device' : 'Devices'} - Instant Activation - Secure Payment
                  </p>
                </div>

                {/* Order Button */}
                <a
                  href={`https://wa.me/15626380287?text=Hello%2C%20I%27d%20like%20to%20order%20the%20${encodeURIComponent(plan.name)}%20plan%20for%20${selectedDevices}%20device${selectedDevices > 1 ? 's' : ''}.%20Price%3A%20%24${plan.prices[selectedDevices as keyof typeof plan.prices].toFixed(2)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all mb-6 text-center block"
                >
                  Order now
                </a>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span
                        className="text-gray-300"
                        dangerouslySetInnerHTML={{ __html: feature }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
