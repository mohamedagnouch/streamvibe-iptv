'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import MovieCarousel from './components/MovieCarousel';
import Stats from './components/Stats';
import Features from './components/Features';
import Pricing from './components/Pricing';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import PricingScrollHandler from './components/PricingScrollHandler';
import OrganizationSchema from './components/schema/OrganizationSchema';
import ProductSchema from './components/schema/ProductSchema';

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0e1a] via-[#1a1f35] to-[#0a0e1a]">
      <PricingScrollHandler />
      <OrganizationSchema />
      <ProductSchema />
      <Header />
      <Hero />
      <MovieCarousel />
      <Stats />
      <Features />
      <Pricing />
      <HowItWorks />
      <FAQ />
      <CTASection />
      <Footer />

    </main>
  );
}
