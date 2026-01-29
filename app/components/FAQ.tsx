'use client';

import { useState } from 'react';
import { Smartphone, BookOpen, Users, Tv, Zap } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);
  const { t } = useTranslation();

  const faqs = [
    {
      id: 1,
      icon: Smartphone,
      question: t('faq.question1'),
      answer: t('faq.answer1'),
    },
    {
      id: 2,
      icon: BookOpen,
      question: t('faq.question2'),
      answer: t('faq.answer2'),
    },
    {
      id: 3,
      icon: Users,
      question: t('faq.question3'),
      answer: t('faq.answer3'),
    },
    {
      id: 4,
      icon: Tv,
      question: t('faq.question4'),
      answer: t('faq.answer4'),
    },
    {
      id: 5,
      icon: Zap,
      question: t('faq.question5'),
      answer: t('faq.answer5'),
    },
  ];

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-12 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-10">
          {t('faq.heading')}
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
