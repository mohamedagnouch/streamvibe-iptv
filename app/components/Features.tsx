import { Shield, Clock, Star } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export default function Features() {
  const { t } = useTranslation();

  const features = [
    {
      id: 2,
      icon: Shield,
      title: t('features.feature2Title'),
      description: t('features.feature2Description'),
      color: 'from-green-500 to-emerald-500',
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

      </div>
    </section>
  );
}
