'use client';

import Link from 'next/link';
import { Facebook, MessageCircle, Instagram, Twitter, Mail, Phone, MapPin, Shield, Award, Zap, CreditCard, Headphones, ShieldCheck } from 'lucide-react';
import Logo from './Logo';
import { useTranslation } from '../hooks/useTranslation';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-[#0a0e1a] border-t border-white/5">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>

      <div className="container mx-auto px-6 py-12">
        {/* Brand & SEO Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16 border-b border-white/5 pb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-6 inline-block transition-transform hover:scale-105">
              <Logo variant="light" size="md" showText={true} />
            </Link>
            <h2 className="text-white text-xl font-bold mb-4">{t('footer.seoTitle')}</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
              {t('footer.description')}
            </p>
          </div>
          <div className="flex items-center gap-4 lg:justify-end lg:col-span-2">
            <div className="text-right hidden sm:block">
              <p className="text-white font-bold text-sm tracking-widest uppercase">{t('footer.officialSupport')}</p>
              <p className="text-gray-500 text-xs">{t('footer.available247')}</p>
            </div>
            <a href="https://wa.me/15626380287" className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-2xl shadow-lg shadow-green-500/20 hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10 mb-12">

          {/* Product Links */}
          <div>
            <h3 className="text-white font-bold mb-3 md:mb-4 text-sm md:text-base">{t('footer.product')}</h3>
            <ul className="space-y-2 md:space-y-2.5">
              <li>
                <a href="/#pricing" className="text-gray-400 hover:text-orange-500 transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t('footer.pricingPlans')}
                </a>
              </li>
              <li>
                <Link href="/channels" className="text-gray-400 hover:text-orange-500 transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t('footer.channelList')}
                </Link>
              </li>
              <li>
                <Link href="/instructions" className="text-gray-400 hover:text-orange-500 transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t('footer.setupGuide')}
                </Link>
              </li>
              <li>
                <Link href="/reseller" className="text-gray-400 hover:text-orange-500 transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t('footer.becomeReseller')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-bold mb-3 md:mb-4 text-sm md:text-base">{t('footer.support')}</h3>
            <ul className="space-y-2 md:space-y-2.5">
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-orange-500 transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t('footer.faq')}
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/15626380287?text=Hello%2C%20I%20need%20help%20with%20StreamVibe.%20Can%20you%20assist%20me%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t('footer.contactUs')}
                </a>
              </li>
              <li>
                <Link href="/tutorials" className="text-gray-400 hover:text-orange-500 transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t('footer.videoTutorials')}
                </Link>
              </li>
              <li>
                <a href="https://wa.me/15626380287" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t('footer.liveChat')}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-bold mb-3 md:mb-4 text-sm md:text-base">{t('footer.legal')}</h3>
            <ul className="space-y-2 md:space-y-2.5">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-orange-500 transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t('footer.termsOfService')}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-orange-500 transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t('footer.privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-gray-400 hover:text-orange-500 transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t('footer.refundPolicy')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-orange-500" />
                <span>{t('footer.securePayment')}</span>
              </div>
              <span className="text-gray-600">•</span>
              <div className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-orange-500" />
                <span>{t('footer.support247')}</span>
              </div>
              <span className="text-gray-600">•</span>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-orange-500" />
                <span>{t('footer.moneyBack')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>


    </footer>
  );
}
