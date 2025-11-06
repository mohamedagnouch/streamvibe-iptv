import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-8">
          <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-emerald-400 text-sm font-medium">#1 Best IPTV Service in The World</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          All-In-One Premium
          <br />
          <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            IPTV Service Today!
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Lightning-fast IPTV and streaming with movies,
          <br />
          sports, anime and more in stunning quality.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a 
            href="#pricing" 
            className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-red-700 transition-all shadow-lg shadow-orange-500/30"
          >
            Claim 30% Off
          </a>
          <Link 
            href="/trial" 
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all flex items-center gap-2"
          >
            <span>LXIMAQ</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </Link>
        </div>

        {/* Money-back Guarantee */}
        <div className="flex items-center justify-center gap-2 text-gray-400">
          <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm">30-day money-back guarantee</span>
        </div>
      </div>
    </section>
  );
}
