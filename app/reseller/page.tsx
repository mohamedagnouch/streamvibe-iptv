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
  Award,
  Rocket,
  Target,
  Briefcase,
  ChevronRight,
  Sparkles,
  Percent
} from 'lucide-react';

const benefits = [
  {
    icon: DollarSign,
    title: 'Competitive Wholesale Pricing',
    description: 'Industry-leading margins with volume discounts. Earn up to 70% profit on every subscription.',
    highlight: 'Up to 70% Profit',
  },
  {
    icon: Users,
    title: 'Advanced Reseller Panel',
    description: 'Powerful dashboard to manage customers, subscriptions, credits, and analytics in real-time.',
    highlight: 'Full Control',
  },
  {
    icon: Headphones,
    title: 'Priority 24/7 Support',
    description: 'Dedicated support team for resellers. Technical assistance, business guidance, and instant help.',
    highlight: '24/7 Available',
  },
  {
    icon: Zap,
    title: 'Instant Activation',
    description: 'Create and activate customer accounts instantly. Automated system with zero delays.',
    highlight: 'Real-time',
  },
  {
    icon: Shield,
    title: 'White Label Solution',
    description: 'Complete branding customization. Your logo, domain, and brand identity on all platforms.',
    highlight: 'Your Brand',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Infrastructure',
    description: 'From 10 to 10,000+ customers. Our infrastructure grows with your business needs.',
    highlight: 'Unlimited Growth',
  },
];

const features = [
  {
    title: '37,591+ Live Channels',
    description: 'Global content from 115+ countries',
    icon: Globe,
    stat: '37K+',
  },
  {
    title: '96,000+ VOD Library',
    description: 'Movies, series, and premium content',
    icon: Star,
    stat: '96K+',
  },
  {
    title: '99.9% Uptime SLA',
    description: 'Enterprise-grade reliability',
    icon: Shield,
    stat: '99.9%',
  },
  {
    title: 'Real-time Analytics',
    description: 'Track sales and customer activity',
    icon: BarChart3,
    stat: 'Live',
  },
];

const pricingTiers = [
  {
    name: 'Starter',
    subtitle: 'Perfect for beginners',
    credits: 50,
    price: 250,
    pricePerCredit: 5.00,
    discount: 0,
    features: [
      '50 subscription credits',
      'Reseller panel access',
      'Email & chat support',
      'Basic analytics dashboard',
      'Customer management tools',
      'Payment tracking',
    ],
    popular: false,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'Professional',
    subtitle: 'Most popular choice',
    credits: 100,
    price: 450,
    pricePerCredit: 4.50,
    discount: 10,
    features: [
      '100 subscription credits',
      'Advanced reseller panel',
      'Priority support 24/7',
      'Advanced analytics & reports',
      'White label options',
      'API access',
      'Custom branding',
      'Volume discounts',
    ],
    popular: true,
    color: 'from-orange-500 to-pink-600',
  },
  {
    name: 'Enterprise',
    subtitle: 'For serious businesses',
    credits: 500,
    price: 1750,
    pricePerCredit: 3.50,
    discount: 30,
    features: [
      '500+ subscription credits',
      'Full white label solution',
      'Dedicated account manager',
      'Custom branding package',
      'Priority technical support',
      'Custom API integration',
      'Volume pricing tiers',
      'Marketing materials',
      'Training & onboarding',
    ],
    popular: false,
    color: 'from-purple-500 to-pink-600',
  },
];

const testimonials = [
  {
    name: 'Michael Rodriguez',
    role: 'IPTV Reseller',
    location: 'Miami, USA',
    avatar: 'MR',
    comment: 'Best reseller program I\'ve joined. The panel is intuitive and support is exceptional. My business has grown 300% in just 6 months!',
    rating: 5,
    revenue: '$15K/month',
  },
  {
    name: 'Sarah Thompson',
    role: 'Business Owner',
    location: 'London, UK',
    avatar: 'ST',
    comment: 'The white label option allowed me to build my own brand. Customers love the service quality and I love the profit margins!',
    rating: 5,
    revenue: '$22K/month',
  },
  {
    name: 'Ahmed Hassan',
    role: 'Tech Entrepreneur',
    location: 'Dubai, UAE',
    avatar: 'AH',
    comment: 'Professional service with excellent uptime. Managing hundreds of customers is effortless with their reseller panel.',
    rating: 5,
    revenue: '$35K/month',
  },
];

const stats = [
  { label: 'Active Resellers', value: '500+', icon: Users },
  { label: 'Monthly Revenue', value: '$2M+', icon: DollarSign },
  { label: 'Customer Satisfaction', value: '98%', icon: Star },
  { label: 'Average Profit Margin', value: '65%', icon: TrendingUp },
];

export default function ResellerPage() {

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0e1a] via-[#1a1f35] to-[#0a0e1a]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/20 rounded-full px-6 py-2.5 mb-6">
              <Award className="w-4 h-4 text-orange-500" />
              <span className="text-orange-400 text-sm font-semibold">Partner Program</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="text-white">Build Your </span>
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 bg-clip-text text-transparent">IPTV Empire</span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-6">
              Join <span className="text-white font-semibold">500+ successful resellers</span> earning with StreamVibe. Get wholesale pricing, powerful tools, and <span className="text-white font-semibold">24/7 support</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="https://wa.me/212618467167?text=Hello%2C%20I%27m%20interested%20in%20becoming%20a%20StreamVibe%20reseller"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
              >
                <Rocket className="w-5 h-5" />
                Become a Partner
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 hover:scale-105 transition-all"
              >
                View Pricing
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                    <Icon className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-xs">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-orange-500/30 transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="w-8 h-8 text-orange-500" />
                    <span className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
                      {feature.stat}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-orange-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Why Partner with StreamVibe
            </h2>
            <p className="text-gray-400 text-lg">
              Everything you need to build a profitable IPTV business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-orange-500/30 transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-xs bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full font-semibold">
                      {benefit.highlight}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-orange-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-10 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-gray-400 text-lg">Launch your IPTV business today</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: 'Choose Your Package',
                description: 'Select a reseller plan that fits your business goals. Get instant access to your dashboard.',
                icon: Target,
              },
              {
                step: 2,
                title: 'Add Customers',
                description: 'Use your credits to create accounts. Set your own prices and manage everything from one panel.',
                icon: Users,
              },
              {
                step: 3,
                title: 'Earn & Scale',
                description: 'Keep the profit margin. Grow your customer base and increase your monthly revenue.',
                icon: TrendingUp,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center mx-auto shadow-2xl">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white text-gray-900 flex items-center justify-center font-bold text-sm shadow-lg">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Reseller Pricing Plans
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose the package that fits your business. All plans include full panel access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative rounded-3xl overflow-hidden transition-all ${
                  tier.popular
                    ? 'bg-gradient-to-b from-orange-500/10 to-transparent border-2 border-orange-500 shadow-2xl scale-105'
                    : 'bg-white/5 backdrop-blur-sm border border-white/10'
                }`}
              >
                {tier.popular && (
                  <div className="bg-gradient-to-r from-orange-500 to-pink-600 text-white text-center py-2 text-sm font-bold flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    MOST POPULAR
                  </div>
                )}

                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{tier.name}</h3>
                    <p className="text-gray-400 text-sm">{tier.subtitle}</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl font-bold text-white">${tier.price}</span>
                      <span className="text-gray-400">/ {tier.credits} credits</span>
                    </div>
                    <div className="text-sm text-gray-400 mb-2">
                      ${tier.pricePerCredit.toFixed(2)} per credit
                    </div>
                    {tier.discount > 0 && (
                      <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full">
                        <Percent className="w-3 h-3" />
                        Save {tier.discount}%
                      </div>
                    )}
                  </div>

                  <a
                    href={`https://wa.me/212618467167?text=Hello%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(tier.name)}%20reseller%20package`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 rounded-xl font-bold mb-6 transition-all text-center block ${
                      tier.popular
                        ? 'bg-gradient-to-r from-orange-500 to-pink-600 text-white hover:shadow-2xl hover:scale-105'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    Get Started
                  </a>

                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <Briefcase className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Need a Custom Solution?</h3>
            <p className="text-gray-400 mb-4">Contact us for enterprise pricing and custom packages</p>
            <a
              href="https://wa.me/212618467167?text=Hello%2C%20I%27m%20interested%20in%20enterprise%20pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-400 font-semibold hover:text-orange-300 transition-colors"
            >
              Contact Sales Team
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-gray-400 text-lg">Real results from our reseller partners</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-orange-500/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full font-semibold">
                    {testimonial.revenue}
                  </span>
                </div>

                <p className="text-gray-300 leading-relaxed mb-3 text-sm">{testimonial.comment}</p>
                <p className="text-xs text-gray-500">{testimonial.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/20 rounded-3xl p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your IPTV Business?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join 500+ successful resellers earning with StreamVibe. Get started today with no setup fees.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/212618467167?text=Hello%2C%20I%27m%20ready%20to%20become%20a%20StreamVibe%20reseller"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
              >
                Get Started Now
                <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
