'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ChevronDown, MessageCircle, Rocket, CreditCard, Wrench, Tv, Shield, HelpCircle } from 'lucide-react';

const faqCategories = [
  {
    category: 'Getting Started',
    icon: Rocket,
    color: 'blue',
    questions: [
      {
        question: 'What is StreamVibe?',
        answer: 'StreamVibe is a premium global streaming hub that provides access to thousands of official live TV channels and 96,000+ VOD titles from over 115 countries worldwide. You can watch sports, movies, series, news, and entertainment content in HD and 4K quality on any compatible device.',
      },
      {
        question: 'How do I get started?',
        answer: 'Getting started is easy! Simply choose an authorized subscription plan, complete the payment, and you\'ll receive your access credentials via email within minutes. Then download the official playback application on your device, enter your details, and start streaming immediately.',
      },
      {
        question: 'What devices are supported?',
        answer: 'StreamVibe works on Smart TVs (Samsung, LG, Android TV), smartphones and tablets (Android & iOS), computers (Windows, Mac, Linux), streaming devices (Fire Stick, Roku, Apple TV), and gaming consoles (Xbox, PlayStation).',
      },
      {
        question: 'Do I need special equipment?',
        answer: 'No special equipment is required! You only need a device with an internet connection and an official media playback application compatible with our hub. These applications are free to download from your device\'s official app store.',
      },
    ],
  },
  {
    category: 'Subscription & Billing',
    icon: CreditCard,
    color: 'green',
    questions: [
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, cryptocurrency (Bitcoin, USDT), and bank transfers. All payments are processed securely through encrypted channels.',
      },
      {
        question: 'Can I cancel my subscription anytime?',
        answer: 'Yes, you can cancel your subscription at any time. There are no cancellation fees. If you cancel within the first 30 days and are not satisfied, you\'re eligible for a full refund under our money-back guarantee.',
      },
      {
        question: 'Do subscriptions auto-renew?',
        answer: 'No, our subscriptions do not auto-renew. You have full control over your subscription. When your subscription period ends, you can choose to renew manually at your convenience.',
      },
      {
        question: 'Can I upgrade or downgrade my plan?',
        answer: 'Yes, you can upgrade or downgrade your plan at any time. Contact our support team, and we\'ll help you switch plans. Any remaining credit from your current plan will be applied to your new subscription.',
      },
    ],
  },
  {
    category: 'Technical Support',
    icon: Wrench,
    color: 'orange',
    questions: [
      {
        question: 'What internet speed do I need?',
        answer: 'For SD quality: 5 Mbps minimum. For HD quality: 10 Mbps minimum. For 4K quality: 25 Mbps minimum. We recommend a stable internet connection for the best streaming experience.',
      },
      {
        question: 'Why is my stream buffering?',
        answer: 'Buffering can be caused by slow internet connection, server overload, or device issues. Try: 1) Testing your internet speed, 2) Restarting your device and router, 3) Switching to a different server in the app, 4) Closing other apps using bandwidth.',
      },
      {
        question: 'How do I update my streaming app?',
        answer: 'Go to your device\'s app store (Google Play Store, Apple App Store, etc.), search for your playback application, and click "Update" if an update is available. Keeping your application updated ensures the best performance and security.',
      },
      {
        question: 'Can I use my subscription on multiple devices?',
        answer: 'Yes! Our plans support multiple simultaneous connections. The Basic plan allows 1 device, Premium allows 2 devices, and Ultimate allows 3 devices to stream at the same time.',
      },
    ],
  },
  {
    category: 'Content & Features',
    icon: Tv,
    color: 'purple',
    questions: [
      {
        question: 'What channels are included?',
        answer: 'We offer access to thousands of official channels including world-class sports, entertainment, news, movies, series, documentaries, kids content, and international programming from 115+ countries, all via authorized secondary distribution.',
      },
      {
        question: 'Do you have VOD (Video on Demand)?',
        answer: 'Yes! We have a massive library of 96,000+ movies and TV series on demand. You can watch the latest releases, classic films, and complete TV series seasons anytime you want.',
      },
      {
        question: 'Is there an EPG (Electronic Program Guide)?',
        answer: 'Yes, we provide a comprehensive EPG that shows you what\'s currently playing and upcoming programs for the next 7 days. You can easily browse and plan what to watch.',
      },
      {
        question: 'Can I record shows?',
        answer: 'Yes, with compatible authorized playback applications, you can record live TV shows and watch them later. The recording feature depends on your software\'s specific capabilities.',
      },
    ],
  },
  {
    category: 'Account & Security',
    icon: Shield,
    color: 'red',
    questions: [
      {
        question: 'Is my personal information secure?',
        answer: 'Absolutely! We use industry-standard SSL encryption to protect all your personal and payment information. We never share your data with third parties. Read our Privacy Policy for complete details.',
      },
      {
        question: 'How do I reset my password?',
        answer: 'Contact our support team via WhatsApp or email with your account details. Our team will verify your identity and help you reset your password securely within minutes.',
      },
      {
        question: 'Can I share my account with others?',
        answer: 'Your subscription is for personal use only. Sharing credentials with others violates our Terms of Service and may result in account suspension. However, you can use your subscription on multiple devices as per your plan.',
      },
      {
        question: 'What happens if my account is suspended?',
        answer: 'Accounts are only suspended for violations of our Terms of Service (sharing credentials, illegal use, etc.). If suspended, contact support to resolve the issue. In most cases, issues can be resolved quickly.',
      },
    ],
  },
];

export default function FAQPage() {
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-6 bg-gradient-to-b from-blue-50 via-indigo-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-5 py-2 mb-5">
            <MessageCircle className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 text-sm font-bold">Help Center</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight">
            <span className="text-gray-900">Frequently Asked </span>
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Questions</span>
          </h1>

          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Find instant answers to common questions about StreamVibe
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-white border border-blue-200 rounded-full px-4 py-2 shadow-sm">
              <HelpCircle className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-gray-700">25+ Questions</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-blue-200 rounded-full px-4 py-2 shadow-sm">
              <MessageCircle className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-gray-700">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-blue-200 rounded-full px-4 py-2 shadow-sm">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
              <span className="text-sm font-semibold text-gray-700">Helpful Answers</span>
            </div>
          </div>

        </div>
      </section>

      {/* Category Cards */}
      <section className="py-6 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {faqCategories.map((cat, index) => {
              const Icon = cat.icon;
              const colorClasses: Record<string, string> = {
                blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
                green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
                orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
                purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
                red: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
              };
              return (
                <a
                  key={index}
                  href={`#${cat.category.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`bg-gradient-to-br ${colorClasses[cat.color]} text-white p-5 rounded-2xl hover:scale-105 transition-all shadow-lg hover:shadow-xl text-center group`}
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-sm leading-tight">{cat.category}</h3>
                  <p className="text-xs mt-1 opacity-90">{cat.questions.length} questions</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-8 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            {faqCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              const colorClasses: Record<string, string> = {
                blue: 'bg-blue-100 text-blue-600 border-blue-300',
                green: 'bg-green-100 text-green-600 border-green-300',
                orange: 'bg-orange-100 text-orange-600 border-orange-300',
                purple: 'bg-purple-100 text-purple-600 border-purple-300',
                red: 'bg-red-100 text-red-600 border-red-300',
              };
              return (
                <div key={categoryIndex} id={category.category.toLowerCase().replace(/\s+/g, '-')}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-xl ${colorClasses[category.color]} flex items-center justify-center border-2`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {category.category}
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {category.questions.map((faq, index) => {
                      const questionId = `${categoryIndex}-${index}`;
                      const isExpanded = expandedQuestion === questionId;

                      return (
                        <div
                          key={index}
                          className="border-2 border-gray-200 rounded-xl overflow-hidden bg-white hover:border-blue-300 hover:shadow-lg transition-all"
                        >
                          <button
                            onClick={() => setExpandedQuestion(isExpanded ? null : questionId)}
                            className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all"
                          >
                            <h3 className="text-base font-bold text-gray-900 pr-4">
                              {faq.question}
                            </h3>
                            <ChevronDown
                              className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform ${isExpanded ? 'rotate-180' : ''
                                }`}
                            />
                          </button>

                          {isExpanded && (
                            <div className="px-5 pb-4 pt-3 border-t-2 border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50">
                              <p className="text-gray-800 leading-relaxed text-sm font-medium">
                                {faq.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-3xl shadow-2xl p-10 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-5 border-2 border-white/30">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Still Have Questions?
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our expert support team is available <span className="font-bold text-white">24/7</span> to assist you
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/212618467167?text=Hello%2C%20I%20have%20a%20question%20about%20StreamVibe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Live Chat Support
                </a>
                <a
                  href="mailto:support@streamvibe.com"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white/20 hover:scale-105 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
