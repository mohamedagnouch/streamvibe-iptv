'use client';

import React from 'react';
import Link from 'next/link';
import {
  History,
  ShieldCheck,
  HelpCircle,
  MessageSquare,
  Mail,
  CheckCircle2,
  XCircle,
  AlertCircle,
  ArrowRight,
  ChevronRight,
  CreditCard,
  Clock,
  DollarSign,
  Info,
  Smartphone,
  Shield,
  FileText
} from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export default function RefundPage() {
  const { t } = useTranslation();

  const sections = [
    { id: 'eligibility', label: t('refund.quickNav.eligibility'), icon: CheckCircle2 },
    { id: 'non-refundable', label: t('refund.quickNav.nonRefundable'), icon: XCircle },
    { id: 'how-to-request', label: t('refund.quickNav.howToRequest'), icon: MessageSquare },
    { id: 'processing-time', label: t('refund.quickNav.processingTime'), icon: Clock },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(5,150,105,0.03)_0%,transparent_50%)]" />
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 shadow-sm border border-emerald-100 mb-8 animate-fade-in">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="text-emerald-700 text-xs font-bold tracking-wider uppercase">
              {t('refund.hero.badge')}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight">
            <span className="text-gray-900">{t('refund.hero.heading')}</span>
            <span className="bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">{t('refund.hero.headingAccent')}</span>
          </h1>

          <p className="text-gray-600 text-sm">
            {t('refund.hero.lastUpdated')}
          </p>
        </div>
      </section>

      {/* 30-Day Highlight */}
      <section className="relative pb-16 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-xl shadow-emerald-900/5 border border-emerald-50 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 -mr-16 -mt-16 rounded-full group-hover:scale-110 transition-transform duration-700" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 rounded-[32px] bg-emerald-600 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-200">
                <DollarSign className="w-10 h-10 text-white" />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{t('refund.guarantee.title')}</h2>
                <p className="text-gray-600 leading-relaxed font-medium">
                  {t('refund.guarantee.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-24 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Sidebar Sticky Navigation */}
            <aside className="lg:w-1/4">
              <div className="sticky top-32 space-y-4">
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                  <h3 className="text-gray-900 font-bold mb-4 px-2">{t('refund.quickNav.title')}</h3>
                  <nav className="space-y-1">
                    {sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-600 hover:text-emerald-700 hover:bg-emerald-50 transition-all group"
                      >
                        <section.icon className="w-4 h-4 text-slate-400 group-hover:text-emerald-500" />
                        <span className="text-sm font-medium">{section.label}</span>
                      </a>
                    ))}
                  </nav>
                </div>

                <div className="bg-emerald-900 rounded-3xl p-6 shadow-emerald-200 shadow-lg text-white">
                  <h4 className="font-bold mb-2">{t('refund.sections.commitment.title')}</h4>
                  <p className="text-emerald-100 text-xs leading-relaxed">
                    {t('refund.sections.commitment.description')}
                  </p>
                </div>
              </div>
            </aside>

            {/* Policy Content */}
            <div className="lg:w-3/4 space-y-12">
              <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-slate-100 space-y-20">

                {/* 1. Eligibility */}
                <div id="eligibility" className="scroll-mt-32 space-y-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{t('refund.sections.eligibility.title')}</h2>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{t('refund.sections.eligibility.guarantee.title')}</h3>
                      <p className="text-gray-600 text-sm mb-6">{t('refund.sections.eligibility.guarantee.description')}</p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {Object.entries(t('refund.sections.eligibility.guarantee.items')).map(([key, value]) => (
                          <div key={key} className="flex gap-4 p-5 rounded-3xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors group">
                            <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                              <CheckCircle2 className="w-5 h-5 text-emerald-600 group-hover:text-white" />
                            </div>
                            <span className="text-gray-700 text-sm font-semibold leading-snug" dangerouslySetInnerHTML={{ __html: value as string }} />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{t('refund.sections.eligibility.reasons.title')}</h3>
                      <p className="text-gray-600 text-sm mb-6">{t('refund.sections.eligibility.reasons.description')}</p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {Object.entries(t('refund.sections.eligibility.reasons.items')).map(([key, value]) => (
                          <div key={key} className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 text-center">
                            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">{value as string}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Non-Refundable */}
                <div id="non-refundable" className="scroll-mt-32 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center">
                      <XCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{t('refund.sections.nonRefundable.title')}</h2>
                  </div>
                  <p className="text-gray-600">{t('refund.sections.nonRefundable.description')}</p>
                  <div className="space-y-4">
                    {Object.entries(t('refund.sections.nonRefundable.items')).map(([key, value]: [string, any]) => (
                      <div key={key} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-3xl bg-white border border-slate-100 hover:border-red-100 transition-colors shadow-sm gap-4">
                        <div className="flex items-center gap-4">
                          <XCircle className="w-5 h-5 text-red-400" />
                          <div>
                            <p className="text-gray-900 font-bold">{value.title}</p>
                            <p className="text-gray-500 text-xs">{value.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. How to Request */}
                <div id="how-to-request" className="scroll-mt-32 space-y-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{t('refund.sections.request.title')}</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-gray-900">{t('refund.sections.request.process.title')}</h3>
                      <div className="space-y-6 relative ml-4">
                        <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-slate-100" />
                        {[1, 2, 3, 4, 5].map((step) => {
                          const stepData = (t('refund.sections.request.process') as any)[`step${step}`];
                          return (
                            <div key={step} className="relative pl-8">
                              <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-white border-4 border-blue-500 shadow-sm" />
                              <h4 className="text-sm font-bold text-gray-900">{stepData.title}</h4>
                              <p className="text-xs text-gray-500 leading-relaxed">{stepData.description}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{t('refund.sections.request.required.title')}</h3>
                      <p className="text-gray-600 text-sm mb-6">{t('refund.sections.request.required.description')}</p>
                      <ul className="space-y-4">
                        {Object.entries(t('refund.sections.request.required.items')).map(([key, value]) => (
                          <li key={key} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-blue-400" />
                            <span className="text-gray-700 text-sm font-bold">{value as string}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 4. Processing Time */}
                <div id="processing-time" className="scroll-mt-32 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{t('refund.sections.processing.title')}</h2>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="p-8 rounded-[32px] bg-emerald-900 text-white text-center">
                      <p className="text-emerald-300 text-xs font-bold uppercase tracking-widest mb-2">{t('refund.sections.processing.approval.title')}</p>
                      <p className="text-2xl font-bold">{t('refund.sections.processing.approval.text')}</p>
                    </div>
                    <div className="p-8 rounded-[32px] bg-slate-100 text-center">
                      <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">{t('refund.sections.processing.refund.title')}</p>
                      <p className="text-2xl font-bold text-gray-900">{t('refund.sections.processing.refund.text')}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-900">{t('refund.sections.processing.methods.title')}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {Object.entries(t('refund.sections.processing.methods.items')).map(([key, value]) => (
                        <div key={key} className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-100">
                          <CreditCard className="w-5 h-5 text-slate-400" />
                          <span className="text-sm font-medium text-gray-700">{value as string}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 italic px-2">
                      {t('refund.sections.processing.methods.note')}
                    </p>
                  </div>
                </div>

                {/* 6. Disputes */}
                <div className="scroll-mt-32 p-8 md:p-12 rounded-[40px] bg-slate-900 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 -mr-32 -mt-32 rounded-full" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 -ml-32 -mb-32 rounded-full" />

                  <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <h2 className="text-3xl font-bold leading-tight">{t('refund.sections.disputes.notice.title')}</h2>
                      <p className="text-slate-400 leading-relaxed font-medium">
                        {t('refund.sections.disputes.notice.description')}
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                            <Mail className="w-5 h-5 text-emerald-400" />
                          </div>
                          <div>
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{t('refund.sections.contact.email')}</p>
                            <p className="font-bold">support@streamvibe.com</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                            <MessageSquare className="w-5 h-5 text-emerald-400" />
                          </div>
                          <div>
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{t('refund.sections.contact.whatsapp')}</p>
                            <p className="font-bold">+44 7451 281655</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                      <h4 className="font-bold mb-4">{t('refund.sections.disputes.steps.description')}</h4>
                      <ul className="space-y-4">
                        {Object.entries(t('refund.sections.disputes.steps.items')).map(([key, value]) => (
                          <li key={key} className="flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-300">{value as string}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

              </div>

              <div className="mt-12 flex justify-center">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white shadow-sm border border-slate-200 text-gray-600 font-bold hover:bg-slate-50 transition-all group"
                >
                  <FileText className="w-4 h-4" />
                  Back to Top
                  <ChevronRight className="w-4 h-4 -rotate-90 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Footer */}
      <section className="py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
            Your trust is our most valuable asset. We are committed to processing all refund requests
            fairly and transparently according to this policy.
          </p>
        </div>
      </section>
    </div>
  );
}
