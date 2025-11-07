'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  Shield, 
  Headphones, 
  Zap,
  CheckCircle,
  Star,
  BarChart3,
  Globe,
  Clock,
  Award
} from 'lucide-react';
import { navigateToPricing } from '../utils/navigation';

const benefits = [
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description: 'Get the best wholesale rates in the industry. Higher margins mean more profit for your business.',
  },
  {
    icon: Users,
    title: 'Reseller Panel',
    description: 'Powerful management dashboard to control all your customers, subscriptions, and credits.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: '24/7 priority support for resellers. We help you succeed with technical and business assistance.',
  },
  {
    icon: Zap,
    title: 'Instant Activation',
    description: 'Create and activate customer accounts instantly. No delays, no waiting periods.',
  },
  {
    icon: Shield,
    title: 'White Label Option',
    description: 'Brand the service as your own. Custom branding and domain options available.',
  },
  {
    icon: TrendingUp,
    title: 'Grow Your Business',
    description: 'Scale easily with our infrastructure. From 10 to 10,000 customers, we support your growth.',
  },
];

const features = [
  {
    title: '23,000+ Live Channels',
    description: 'Offer your customers access to premium channels worldwide',
    icon: Globe,
  },
  {
    title: '96,000+ VOD Titles',
    description: 'Movies, series, and entertainment content library',
    icon: Star,
  },
  {
    title: '99.9% Uptime',
    description: 'Reliable service your customers can count on',
    icon: Shield,
  },
  {
    title: 'Real-time Analytics',
    description: 'Track your sales and customer activity',
    icon: BarChart3,
  },
];

const pricingTiers = [
  {
    name: 'Starter',
    credits: '50 Credits',
    price: '$250',
    pricePerCredit: '$5.00',
    features: [
      '50 subscription credits',
      'Reseller panel access',
      'Email support',
      'Basic analytics',
      'Customer management',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    credits: '100 Credits',
    price: '$450',
    pricePerCredit: '$4.50',
    savings: 'Save 10%',
    features: [
      '100 subscription credits',
      'Advanced reseller panel',
      'Priority support 24/7',
      'Advanced analytics',
      'White label options',
      'API access',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    credits: '500+ Credits',
    price: 'Custom',
    pricePerCredit: '$3.50+',
    savings: 'Save 30%',
    features: [
      '500+ subscription credits',
      'Full white label solution',
      'Dedicated account manager',
      'Custom branding',
      'Priority technical support',
      'Custom API integration',
      'Volume discounts',
    ],
    popular: false,
  },
];

const testimonials = [
  {
    name: 'Michael Rodriguez',
    role: 'IPTV Reseller',
    location: 'Miami, USA',
    avatar: 'https://i.pravatar.cc/150?img=12',
    comment: 'Best reseller program I\'ve joined. The panel is easy to use and support is always there when I need them. My business has grown 300% in 6 months!',
    rating: 5,
  },
  {
    name: 'Sarah Thompson',
    role: 'Business Owner',
    location: 'London, UK',
    avatar: 'https://i.pravatar.cc/150?img=5',
    comment: 'The white label option allowed me to build my own brand. Customers love the service quality and I love the profit margins!',
    rating: 5,
  },
  {
    name: 'Ahmed Hassan',
    role: 'Tech Entrepreneur',
    location: 'Dubai, UAE',
    avatar: 'https://i.pravatar.cc/150?img=8',
    comment: 'Professional service with excellent uptime. The reseller panel makes managing hundreds of customers effortless.',
    rating: 5,
  },
];

export default function ResellerPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-700 text-sm font-medium">Become a Reseller Partner</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Start Your IPTV Reseller Business
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-10">
            Join the StreamVibe reseller program and start your own IPTV business with our powerful reseller panel, competitive bulk pricing, and comprehensive support. Access 23,000+ live channels and 96,000+ VOD titles for your customers. No technical skills required.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="https://wa.me/212618467167?text=Hello%2C%20I%27m%20interested%20in%20becoming%20a%20StreamVibe%20reseller.%20Can%20you%20provide%20me%20with%20more%20information%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-orange-500/50 transition-all"
            >
              Get Started Now
            </a>
            <a
              href="#benefits"
              className="inline-block bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-orange-500 hover:text-orange-500 transition-all"
            >
              Learn More
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>500+ Active Resellers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>No Setup Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Instant Activation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Become a <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 bg-clip-text text-transparent">Reseller</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to build and grow a successful IPTV business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl hover:border-orange-300 transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 text-lg">Start earning in 3 simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sign Up</h3>
              <p className="text-gray-600">
                Choose your reseller package and create your account. Get instant access to your reseller panel.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Add Customers</h3>
              <p className="text-gray-600">
                Use your credits to create customer accounts. Set your own prices and manage subscriptions easily.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Earn Profit</h3>
              <p className="text-gray-600">
                Keep the difference between wholesale and retail price. Scale your business and maximize profits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Reseller Pricing Plans
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose the package that fits your business needs. All plans include full reseller panel access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative rounded-3xl overflow-hidden ${
                  tier.popular
                    ? 'bg-gradient-to-b from-orange-500/10 to-transparent border-2 border-orange-500 shadow-2xl scale-105'
                    : 'bg-white border-2 border-gray-200 shadow-lg'
                }`}
              >
                {tier.popular && (
                  <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white text-center py-2 text-sm font-semibold">
                    ⭐ MOST POPULAR
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="mb-6">
                    <div className="text-5xl font-bold text-gray-900 mb-2">{tier.price}</div>
                    <div className="text-gray-600">{tier.credits}</div>
                    <div className="text-sm text-gray-500 mt-1">{tier.pricePerCredit} per credit</div>
                    {tier.savings && (
                      <div className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mt-2">
                        {tier.savings}
                      </div>
                    )}
                  </div>

                  <a
                    href={`https://wa.me/212618467167?text=Hello%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(tier.name)}%20reseller%20package%20(${encodeURIComponent(tier.credits)}).%20Can%20you%20help%20me%20get%20started%3F`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 rounded-lg font-semibold mb-6 transition-all text-center block ${
                      tier.popular
                        ? 'bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white hover:shadow-xl'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </a>

                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Need a custom solution for your business?</p>
            <a
              href="https://wa.me/212618467167?text=Hello%2C%20I%27m%20interested%20in%20enterprise%20pricing%20for%20the%20reseller%20program.%20Can%20you%20provide%20a%20custom%20quote%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-orange-600 font-semibold hover:text-orange-700 transition-colors"
            >
              Contact us for enterprise pricing →
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-gray-600 text-lg">See what our reseller partners have to say</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-2xl transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-3">{testimonial.comment}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
