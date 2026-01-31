import { Zap, Shield, Smartphone, Headphones, Clock, Star } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export default function Features() {
  const { t } = useTranslation();

  const features = [
    {
      id: 1,
      icon: Zap,
      title: t('features.feature1Title'),
      description: t('features.feature1Description'),
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 2,
      icon: Shield,
      title: t('features.feature2Title'),
      description: t('features.feature2Description'),
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 3,
      icon: Smartphone,
      title: t('features.feature3Title'),
      description: t('features.feature3Description'),
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 4,
      icon: Headphones,
      title: t('features.feature4Title'),
      description: t('features.feature4Description'),
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 5,
      icon: Clock,
      title: t('features.feature5Title'),
      description: t('features.feature5Description'),
      color: 'from-red-500 to-rose-500',
    },
    {
      id: 6,
      icon: Star,
      title: t('features.feature6Title'),
      description: t('features.feature6Description'),
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section id="features" className="py-20 px-6 bg-[#0a0e1a] relative overflow-hidden border-t border-white/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #ff6b35 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-4">
            <Star className="w-4 h-4 text-orange-500" />
            <span className="text-orange-400 text-sm font-semibold tracking-wide uppercase">Premium Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            {t('features.heading')}
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            {t('features.subheading')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative bg-white/5 backdrop-blur-xl rounded-[32px] p-8 border border-white/10 hover:border-orange-500/40 transition-all duration-500 h-full shadow-2xl">
                  {/* Icon Container */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl shadow-black/20`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed font-light">
                    {feature.description}
                  </p>

                  {/* Decorative Element */}
                  <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-pink-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 relative rounded-[40px] p-10 md:p-16 text-center overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-pink-700 group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter">
              {t('features.bannerTitle')}
            </h3>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-3xl mx-auto font-medium">
              {t('features.bannerSubheading')}
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center gap-3 bg-white text-orange-600 px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-[0_20px_40px_rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-300"
            >
              <span>{t('features.viewPlans')}</span>
              <Zap className="w-5 h-5" fill="currentColor" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
