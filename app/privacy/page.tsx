'use client';

import React from 'react';
import Link from 'next/link';
import {
  Shield,
  Lock,
  Eye,
  UserCheck,
  FileText,
  Globe,
  Smartphone,
  Server,
  Bell,
  Mail,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Clock,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export default function PrivacyPage() {
  const { t } = useTranslation();

  const sections = [
    { id: 'collection', label: t('privacy.quickNav.collection'), icon: Eye },
    { id: 'sharing', label: t('privacy.quickNav.sharing'), icon: Globe },
    { id: 'security', label: t('privacy.quickNav.security'), icon: Lock },
    { id: 'rights', label: t('privacy.quickNav.rights'), icon: UserCheck },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Background patterns */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(51,65,85,0.05)_0%,transparent_50%)]" />
        <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-slate-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 shadow-sm border border-slate-200 mb-8 animate-fade-in">
            <Shield className="w-4 h-4 text-slate-100" />
            <span className="text-slate-100 text-xs font-bold tracking-wider uppercase">
              {t('privacy.hero.badge')}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight">
            <span className="text-gray-900">{t('privacy.hero.heading')}</span>
            <span className="bg-gradient-to-r from-slate-600 to-gray-800 bg-clip-text text-transparent">{t('privacy.hero.headingAccent')}</span>
          </h1>

          <p className="text-gray-600 text-sm">
            {t('privacy.hero.lastUpdated')}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative pb-24 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Sidebar Navigation */}
            <aside className="lg:w-1/4">
              <div className="sticky top-32 space-y-4">
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                  <h3 className="text-gray-900 font-bold mb-4 px-2">{t('privacy.quickNav.title')}</h3>
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

                <div className="bg-slate-900 rounded-3xl p-6 shadow-slate-200 shadow-lg text-white">
                  <h4 className="font-bold mb-2">{t('privacy.commitment.title')}</h4>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {t('privacy.commitment.description')}
                  </p>
                </div>
              </div>
            </aside>

            {/* Content Area */}
            <div className="lg:w-3/4">
              <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-slate-100 space-y-16">

                {/* Section 1: Data Collection */}
                <div id="collection" className="scroll-mt-32 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                      <Eye className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{t('privacy.sections.collection.title')}</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-slate-400" />
                        {t('privacy.sections.collection.personal.title')}
                      </h3>
                      <p className="text-gray-600 text-sm">{t('privacy.sections.collection.personal.description')}</p>
                      <ul className="space-y-3">
                        {Object.entries(t('privacy.sections.collection.personal.items')).map(([key, value]) => (
                          <li key={key} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                            <span className="text-gray-600 text-sm font-medium">{value as string}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        <Smartphone className="w-5 h-5 text-slate-400" />
                        {t('privacy.sections.collection.usage.title')}
                      </h3>
                      <p className="text-gray-600 text-sm">{t('privacy.sections.collection.usage.description')}</p>
                      <ul className="space-y-3">
                        {Object.entries(t('privacy.sections.collection.usage.items')).map(([key, value]) => (
                          <li key={key} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                            <span className="text-gray-600 text-sm font-medium">{value as string}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{t('privacy.sections.collection.cookies.title')}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {t('privacy.sections.collection.cookies.description')}
                    </p>
                  </div>
                </div>

                {/* Section 2: How We Use Data */}
                <div id="usage" className="scroll-mt-32 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center">
                      <Server className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{t('privacy.sections.usage.title')}</h2>
                  </div>
                  <p className="text-gray-600">{t('privacy.sections.usage.description')}</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {Object.entries(t('privacy.sections.usage.items')).map(([key, value]) => (
                      <div key={key} className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-indigo-400" />
                        <span className="text-sm font-semibold text-gray-700">{value as string}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 3: Data Sharing */}
                <div id="sharing" className="scroll-mt-32 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white">
                      <Globe className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{t('privacy.sections.sharing.title')}</h2>
                  </div>

                  <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 -mr-16 -mt-16 rounded-full group-hover:scale-110 transition-transform duration-500" />
                    <h3 className="text-xl font-bold mb-2">{t('privacy.sections.sharing.noSell.title')}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {t('privacy.sections.sharing.noSell.description')}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">{t('privacy.sections.sharing.providers.title')}</h3>
                    <p className="text-gray-600 text-sm">{t('privacy.sections.sharing.providers.description')}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {Object.entries(t('privacy.sections.sharing.providers.items')).map(([key, value]) => (
                        <div key={key} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                          <CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0" />
                          <span className="text-sm font-medium text-gray-700">{value as string}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 italic">
                      {t('privacy.sections.sharing.providers.note')}
                    </p>
                  </div>
                </div>

                {/* Section 4: Security */}
                <div id="security" className="scroll-mt-32 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center">
                      <Lock className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{t('privacy.sections.security.title')}</h2>
                  </div>
                  <p className="text-gray-600">{t('privacy.sections.security.description')}</p>
                  <div className="space-y-4">
                    {Object.entries(t('privacy.sections.security.items')).map(([key, value]) => (
                      <div key={key} className="flex items-start gap-4 p-5 rounded-3xl bg-white border border-slate-100 hover:border-emerald-200 transition-colors shadow-sm group">
                        <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <p className="text-gray-800 text-sm font-bold">{value as string}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 5: Retention */}
                <div id="retention" className="scroll-mt-32 p-8 rounded-[32px] bg-slate-50 border border-slate-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Clock className="w-6 h-6 text-slate-400" />
                    {t('privacy.sections.retention.title')}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">{t('privacy.sections.retention.description')}</p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {Object.entries(t('privacy.sections.retention.items')).map(([key, value]) => (
                      <div key={key} className="p-4 rounded-2xl bg-white shadow-sm text-center">
                        <span className="text-xs font-bold text-gray-800">{value as string}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-6 pt-6 border-t border-slate-200">
                    {t('privacy.sections.retention.note')}
                  </p>
                </div>

                {/* Section 6: Rights */}
                <div id="rights" className="scroll-mt-32 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center">
                      <UserCheck className="w-6 h-6 text-orange-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{t('privacy.sections.rights.title')}</h2>
                  </div>
                  <p className="text-gray-600">{t('privacy.sections.rights.description')}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {Object.entries(t('privacy.sections.rights.items')).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between p-5 rounded-3xl bg-slate-50 border border-slate-100 group">
                        <span className="text-gray-800 font-bold">{value as string}</span>
                        <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-orange-500 transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 11: Contact */}
                <div id="contact" className="scroll-mt-32 p-8 md:p-12 rounded-[40px] bg-slate-900 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 -mr-32 -mt-32 rounded-full" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 -ml-32 -mb-32 rounded-full" />

                  <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                      <h2 className="text-3xl font-bold leading-tight">{t('privacy.sections.contact.title')}</h2>
                      <p className="text-slate-400 leading-relaxed max-w-md">
                        {t('privacy.sections.contact.description')}
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                            <Mail className="w-5 h-5 text-blue-400" />
                          </div>
                          <div>
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{t('privacy.sections.contact.emailTeam')}</p>
                            <p className="font-bold">privacy@streamvibe.com</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                            <MessageSquare className="w-5 h-5 text-green-400" />
                          </div>
                          <div>
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{t('privacy.sections.contact.whatsapp')}</p>
                            <p className="font-bold">+44 7451 281655</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-full md:w-auto shrink-0 p-8 rounded-[32px] bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                      <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-4">
                        <Clock className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">{t('privacy.sections.contact.responseTime')}</p>
                      <p className="text-xl font-bold">{t('privacy.sections.contact.within')}</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Back to Top */}
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
            By using StreamVibe, you acknowledge that you have read and understood this Privacy Policy.
            We are committed to providing a secure and transparent streaming experience for all our users.
          </p>
        </div>
      </section>
    </div>
  );
}
