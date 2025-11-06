import Header from './components/Header';
import Hero from './components/Hero';
import MovieCarousel from './components/MovieCarousel';
import Pricing from './components/Pricing';
import PromoPopup from './components/PromoPopup';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a1929] via-[#0d1f33] to-[#0a1929]">
      <PromoPopup />
      <Header />
      <Hero />
      <MovieCarousel />
      <Pricing />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Footer />
      
      {/* Floating Action Button */}
      <a
        href="#contact"
        className="fixed bottom-8 right-8 bg-gradient-to-r from-orange-500 to-red-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all z-50 group"
        aria-label="Contact Us"
      >
        <svg 
          className="w-6 h-6 transform group-hover:rotate-12 transition-transform" 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      </a>
    </main>
  );
}
