'use client';

import { useState } from 'react';
import { Smartphone, BookOpen, Users, Tv, Zap } from 'lucide-react';

const faqs = [
  {
    id: 1,
    icon: Smartphone,
    question: 'What devices can I use to watch SONI IPTV?',
    answer: 'SONI IPTV works on a wide range of devices including Smart TVs (Samsung, LG, Android TV), streaming devices (Fire Stick, Roku, Apple TV), mobile devices (iOS and Android), computers (Windows, Mac, Linux), and gaming consoles (Xbox, PlayStation). You can use our service on any device that supports IPTV players like VLC, IPTV Smarters, or TiviMate.',
  },
  {
    id: 2,
    icon: BookOpen,
    question: 'Is there a setup guide for first-time users?',
    answer: 'Yes! We provide comprehensive setup guides for all supported devices. After your purchase, you\'ll receive an email with step-by-step instructions, video tutorials, and our dedicated support team is available 24/7 to help you get started. Most users complete the setup in less than 5 minutes.',
  },
  {
    id: 3,
    icon: Users,
    question: 'Can I use one account on multiple devices?',
    answer: 'Absolutely! When you select your subscription plan, you can choose the number of devices (1-5 connections). This means you can watch on multiple devices simultaneously. For example, if you choose 3 devices, you can watch on your TV, phone, and tablet at the same time.',
  },
  {
    id: 4,
    icon: Tv,
    question: 'What kind of content is included?',
    answer: 'Our service includes 19,000+ live TV channels from around the world (USA, UK, Canada, Latin America, Europe, Asia), 80,000+ movies and TV shows on demand, premium sports channels (NFL, NBA, UFC, Soccer), international channels in multiple languages, and premium content from Netflix, Apple TV+, Disney+, and more. All content is available in HD, Full HD, and 4K quality.',
  },
  {
    id: 5,
    icon: Zap,
    question: 'How fast is activation after payment?',
    answer: 'Activation is instant! Once your payment is confirmed, you\'ll receive your login credentials via email within minutes. Our automated system ensures you can start watching immediately. In rare cases where manual verification is needed, activation takes no more than 30 minutes.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-12 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-10">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors hover:bg-gray-50"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex-shrink-0 w-6 h-6 text-orange-500">
                    <faq.icon className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                </div>
                <svg
                  className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${openId === faq.id ? 'rotate-180' : ''
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="px-6 pb-6 pt-2">
                  <p className="text-gray-600 leading-relaxed pl-12">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
