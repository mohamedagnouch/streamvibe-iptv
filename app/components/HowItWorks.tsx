import { ShoppingCart, Mail, Play, CreditCard, Shield, Zap } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export default function HowItWorks() {
  const { t } = useTranslation();

  return (
    <section id="how-it-works" className="py-20 px-6 bg-gradient-to-br from-orange-600 via-red-600 to-pink-700 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-center text-white mb-20 tracking-tighter">
          {t('howItWorks.heading')}
        </h2>

        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="flex-1 text-white">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xl">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <div className="text-6xl font-black opacity-20 tracking-tighter">01</div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">{t('howItWorks.step1Title')}</h3>
            <p className="text-white/80 text-lg mb-8 leading-relaxed font-light">
              {t('howItWorks.step1Description')}
            </p>
            <div className="flex gap-4 flex-wrap">
              <div className="bg-white/10 backdrop-blur-sm px-5 py-3 rounded-2xl text-sm font-semibold flex items-center gap-3 border border-white/10">
                <CreditCard className="w-5 h-5" />
                Credit Card
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-5 py-3 rounded-2xl text-sm font-semibold flex items-center gap-3 border border-white/10">
                <Shield className="w-5 h-5" />
                PayPal
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-5 py-3 rounded-2xl text-sm font-semibold flex items-center gap-3 border border-white/10">
                <Zap className="w-5 h-5" />
                Crypto
              </div>
            </div>
          </div>
          <div className="flex-1 relative group">
            <div className="bg-white/5 backdrop-blur-xl rounded-[40px] border border-white/20 p-8 max-w-md mx-auto transform hover:scale-105 transition-all duration-700 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=400&fit=crop"
                alt="Place your order"
                className="w-full h-56 md:h-72 object-cover rounded-[24px] mb-6 shadow-xl"
              />
              <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-green-500/20">
                    ✓
                  </div>
                  <div>
                    <div className="font-bold text-white text-base">{t('howItWorks.orderConfirmed')}</div>
                    <div className="text-xs text-white/60">{t('howItWorks.processing')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-24">
          <div className="flex-1 text-white">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xl">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div className="text-6xl font-black opacity-20 tracking-tighter">02</div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">{t('howItWorks.step2Title')}</h3>
            <p className="text-white/80 text-lg mb-8 leading-relaxed font-light">
              {t('howItWorks.step2Description')}
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/10 inline-block">
              <div className="text-sm font-bold mb-4 flex items-center gap-2">
                <span className="text-xl">📧</span> {t('howItWorks.checkEmail')}
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm font-medium text-white/90">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  {t('howItWorks.credentials')}
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-white/90">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  {t('howItWorks.serverUrl')}
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-white/90">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  {t('howItWorks.instructions')}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 relative group">
            <div className="bg-white/5 backdrop-blur-xl rounded-[40px] border border-white/20 p-8 max-w-md mx-auto transform hover:scale-105 transition-all duration-700 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=500&h=400&fit=crop"
                alt="Get your account"
                className="w-full h-56 md:h-72 object-cover rounded-[24px] mb-6 shadow-xl"
              />
              <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
                <div className="text-[10px] font-bold text-white/60 mb-3 tracking-widest uppercase">ACCOUNT DETAILS</div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/60">Username:</span>
                    <span className="font-mono font-bold text-white">user****@mail.com</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/60">Status:</span>
                    <span className="text-green-400 font-bold flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-white">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xl">
                <Play className="w-8 h-8 text-white" />
              </div>
              <div className="text-6xl font-black opacity-20 tracking-tighter">03</div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">{t('howItWorks.step3Title')}</h3>
            <p className="text-white/80 text-lg mb-8 leading-relaxed font-light">
              {t('howItWorks.step3Description')}
            </p>
            <div className="flex gap-4 flex-wrap">
              <div className="bg-white/10 backdrop-blur-sm px-5 py-3 rounded-2xl text-sm font-semibold border border-white/10">
                📱 Mobile
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-5 py-3 rounded-2xl text-sm font-semibold border border-white/10">
                📺 Smart TV
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-5 py-3 rounded-2xl text-sm font-semibold border border-white/10">
                💻 Desktop
              </div>
            </div>
          </div>
          <div className="flex-1 relative group">
            <div className="bg-white/5 backdrop-blur-xl rounded-[40px] border border-white/20 p-8 max-w-md mx-auto transform hover:scale-105 transition-all duration-700 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=400&fit=crop"
                alt="Enjoy watching"
                className="w-full h-56 md:h-72 object-cover rounded-[24px] mb-6 shadow-xl"
              />
              <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white text-base mb-1">{t('howItWorks.nowStreaming')}</div>
                    <div className="text-xs text-white/60">{t('howItWorks.quality4K')}</div>
                  </div>
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
                    ▶
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
    </section>
  );
}
