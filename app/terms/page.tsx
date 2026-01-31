'use client';

import React from 'react';
import Link from 'next/link';
import {
  FileText,
  ShieldCheck,
  User,
  CreditCard,
  Scale,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Shield,
  Clock,
  ExternalLink,
  MessageSquare,
  Mail,
  Zap,
  Globe,
  Settings,
  Lock,
  Ban
} from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export default function TermsPage() {
  const { t } = useTranslation();

  const sections = [
    { id: 'acceptance', label: t('terms.quickNav.acceptance'), icon: ShieldCheck },
    { id: 'account', label: t('terms.quickNav.account'), icon: User },
    { id: 'payment', label: t('terms.quickNav.payment'), icon: CreditCard },
    { id: 'rights', label: t('terms.quickNav.rights'), icon: Scale },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-200/20 rounded-full blur-[120px] -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gray-200/20 rounded-full blur-[120px] -ml-32 -mb-32" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-slate-400 animate-pulse" />
            <span className="text-gray-600 text-xs font-bold tracking-wider uppercase">
              {t('terms.hero.badge')}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight">
            <span className="text-gray-900">{t('terms.hero.heading')}</span>
            <span className="bg-gradient-to-r from-slate-600 to-gray-800 bg-clip-text text-transparent">{t('terms.hero.headingAccent')}</span>
          </h1>

          <p className="text-gray-600 text-sm">
            {t('terms.hero.lastUpdated')}
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="relative pb-12 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[32px] p-8 md:p-10 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 -mr-16 -mt-16 rounded-full group-hover:scale-110 transition-transform duration-700" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                <AlertCircle className="w-8 h-8 text-slate-300" />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-xl font-bold text-white mb-2">{t('terms.notice.title')}</h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {t('terms.notice.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="relative pb-24 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Sidebar Sticky Nav */}
            <aside className="lg:w-1/4">
              <div className="sticky top-32 space-y-4">
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                  <h3 className="text-gray-900 font-bold mb-4 px-2">{t('terms.quickNav.title')}</h3>
                  <nav className="space-y-1">
                    {sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-600 hover:text-slate-900 hover:bg-slate-50 transition-all group"
                      >
                        <section.icon className="w-4 h-4 text-slate-400 group-hover:text-slate-600" />
                        <span className="text-sm font-medium">{section.label}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </aside>

            {/* Terms Content */}
            <div className="lg:w-3/4 space-y-12">
              <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-slate-100 space-y-16">

                {/* 1. Acceptance */}
                <div id="acceptance" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-slate-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('terms.sections.acceptance.title')}</h2>
                  </div>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-gray-600 leading-relaxed">
                      {t('terms.sections.acceptance.text1')}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {t('terms.sections.acceptance.text2')}
                    </p>
                  </div>
                </div>

                {/* 2. Service Description */}
                <div id="description" className="space-y-8">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                    <Zap className="w-6 h-6 text-yellow-500" />
                    {t('terms.sections.description.title')}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {t('terms.sections.description.description')}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {Object.entries(t('terms.sections.description.items')).map(([key, value]) => (
                      <div key={key} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                        <CheckCircle2 className="w-5 h-5 text-slate-400 mt-0.5" />
                        <span className="text-sm font-medium text-gray-700">{value as string}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Account */}
                <div id="account" className="scroll-mt-32 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center">
                      <User className="w-6 h-6 text-slate-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('terms.sections.account.title')}</h2>
                  </div>

                  <div className="space-y-8">
                    <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{t('terms.sections.account.creation.title')}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{t('terms.sections.account.creation.text')}</p>
                    </div>
                    <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{t('terms.sections.account.security.title')}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{t('terms.sections.account.security.text')}</p>
                    </div>
                    <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{t('terms.sections.account.sharing.title')}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed text-red-600 font-medium italic">{t('terms.sections.account.sharing.text')}</p>
                    </div>
                  </div>
                </div>

                {/* 4. Payment */}
                <div id="payment" className="scroll-mt-32 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-slate-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('terms.sections.payment.title')}</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-slate-100 rounded-3xl p-6 hover:shadow-md transition-shadow">
                      <h3 className="font-bold mb-2 text-gray-900">{t('terms.sections.payment.plans.title')}</h3>
                      <p className="text-gray-600 text-sm">{t('terms.sections.payment.plans.text')}</p>
                    </div>
                    <div className="border border-slate-100 rounded-3xl p-6 hover:shadow-md transition-shadow">
                      <h3 className="font-bold mb-2 text-gray-900">{t('terms.sections.payment.payment.title')}</h3>
                      <p className="text-gray-600 text-sm">{t('terms.sections.payment.payment.text')}</p>
                    </div>
                    <div className="border border-slate-100 rounded-3xl p-6 hover:shadow-md transition-shadow">
                      <h3 className="font-bold mb-2 text-gray-900">{t('terms.sections.payment.renewal.title')}</h3>
                      <p className="text-gray-600 text-sm">{t('terms.sections.payment.renewal.text')}</p>
                    </div>
                    <div className="border border-slate-100 rounded-3xl p-6 hover:shadow-md transition-shadow">
                      <h3 className="font-bold mb-2 text-gray-900">{t('terms.sections.payment.refunds.title')}</h3>
                      <p className="text-gray-600 text-sm">{t('terms.sections.payment.refunds.text')}</p>
                    </div>
                  </div>
                </div>

                {/* 5. Acceptable Use */}
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                    <Ban className="w-6 h-6 text-red-500" />
                    {t('terms.sections.acceptableUse.title')}
                  </h2>
                  <p className="text-gray-600">{t('terms.sections.acceptableUse.description')}</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {Object.entries(t('terms.sections.acceptableUse.items')).map(([key, value]) => (
                      <div key={key} className="flex items-center gap-3 p-4 rounded-2xl bg-red-50/50 border border-red-100">
                        <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                        <span className="text-sm font-medium text-gray-700">{value as string}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 rounded-2xl bg-red-50 border border-red-100 text-red-700 text-xs font-medium">
                    {t('terms.sections.acceptableUse.note')}
                  </div>
                </div>

                {/* 6. Intellectual Property */}
                <div id="rights" className="scroll-mt-32 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center">
                      <Scale className="w-6 h-6 text-slate-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('terms.sections.intellectualProperty.title')}</h2>
                  </div>
                  <div className="space-y-6">
                    <div className="border-l-4 border-slate-200 pl-6 py-2">
                      <h3 className="font-bold text-gray-900 mb-2">{t('terms.sections.intellectualProperty.rights.title')}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{t('terms.sections.intellectualProperty.rights.text')}</p>
                    </div>
                    <div className="border-l-4 border-slate-200 pl-6 py-2">
                      <h3 className="font-bold text-gray-900 mb-2">{t('terms.sections.intellectualProperty.license.title')}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{t('terms.sections.intellectualProperty.license.text')}</p>
                    </div>
                  </div>
                </div>

                {/* 12. Contact */}
                <div id="contact" className="scroll-mt-32 p-8 md:p-12 rounded-[40px] bg-slate-900 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 -mr-32 -mt-32 rounded-full" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 -ml-32 -mb-32 rounded-full" />

                  <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <h2 className="text-3xl font-bold leading-tight">{t('terms.sections.contact.title')}</h2>
                      <p className="text-slate-400 leading-relaxed">
                        {t('terms.sections.contact.description')}
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                            <Mail className="w-5 h-5 text-slate-300" />
                          </div>
                          <div>
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{t('terms.sections.contact.email')}</p>
                            <p className="font-bold">legal@streamvibe.com</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                            <MessageSquare className="w-5 h-5 text-slate-300" />
                          </div>
                          <div>
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{t('terms.sections.contact.whatsapp')}</p>
                            <p className="font-bold">+44 7451 281655</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center">
                      <Clock className="w-10 h-10 text-slate-300 mx-auto mb-4" />
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">{t('terms.sections.contact.hours')}</p>
                      <p className="text-lg font-bold">Mon - Sun: 9:00 AM - 11:00 PM GMT</p>
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

      {/* Footer Disclaimer */}
      <section className="py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-xs max-w-2xl mx-auto leading-relaxed uppercase tracking-widest font-bold">
            Legal notice: These terms represent a binding agreement between you and StreamVibe.
            Unauthorized reproduction or distribution of this service is strictly prohibited.
          </p>
        </div>
      </section>
    </div>
  );
}
