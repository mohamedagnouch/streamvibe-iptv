import Link from 'next/link';
import { Zap, Shield, Clock, ArrowRight } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export default function CTASection() {
  const { t } = useTranslation();

  return (
    <section id="cta" className="relative py-24 px-6 overflow-hidden">
      {/* Background with premium gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-600 to-pink-700"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-white rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-8 py-3 mb-10 shadow-xl">
            <Zap className="w-5 h-5 text-white" />
            <span className="text-white font-bold tracking-wide uppercase text-sm">{t('cta.badge')}</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
            {t('cta.heading')}
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            {t('cta.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <a
              href="/#pricing"
              className="group inline-flex items-center gap-3 bg-white text-orange-600 px-10 py-5 rounded-2xl font-black text-xl hover:bg-gray-50 transition-all hover:scale-105 shadow-[0_20px_50px_rgba(255,255,255,0.2)]"
            >
              {t('cta.buttonText')}
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
            <a
              href="https://wa.me/15626380287?text=Hello%2C%20I%20want%20to%20learn%20more%20about%20StreamVibe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              {t('cta.contact')}
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] p-8 shadow-2xl hover:scale-105 transition-transform duration-500">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg border border-white/10">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3 tracking-tight">{t('cta.guarantee')}</h3>
              <p className="text-white/70 text-sm font-light leading-relaxed">
                {t('cta.guaranteeDesc')}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] p-8 shadow-2xl hover:scale-105 transition-transform duration-500">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg border border-white/10">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3 tracking-tight">{t('cta.activation')}</h3>
              <p className="text-white/70 text-sm font-light leading-relaxed">
                {t('cta.activationDesc')}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] p-8 shadow-2xl hover:scale-105 transition-transform duration-500">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg border border-white/10">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3 tracking-tight">{t('cta.support')}</h3>
              <p className="text-white/70 text-sm font-light leading-relaxed">
                {t('cta.supportDesc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
