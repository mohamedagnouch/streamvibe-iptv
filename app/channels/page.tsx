'use client';

import { useState, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Globe, Search, TrendingUp, Tv, Film, Trophy, Newspaper, Baby, Music, BookOpen, ChevronRight, CheckCircle, MapPin, Play } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import Breadcrumbs from '../components/Breadcrumbs';
import WebPageSchema from '../components/schema/WebPageSchema';

const popularCountries = [
  { name: 'United States', code: 'us', channels: 14298, flag: '🇺🇸' },
  { name: 'United Kingdom', code: 'gb', channels: 3842, flag: '🇬🇧' },
  { name: 'Canada', code: 'ca', channels: 1815, flag: '🇨🇦' },
  { name: 'France', code: 'fr', channels: 2156, flag: '🇫🇷' },
  { name: 'Germany', code: 'de', channels: 1923, flag: '🇩🇪' },
  { name: 'Spain', code: 'es', channels: 1687, flag: '🇪🇸' },
  { name: 'Italy', code: 'it', channels: 1542, flag: '🇮🇹' },
  { name: 'Brazil', code: 'br', channels: 1398, flag: '🇧🇷' },
];

const allCountries = [
  { name: 'United States', code: 'us', channels: 14298, region: 'North America' },
  { name: 'United Kingdom', code: 'gb', channels: 3842, region: 'Europe' },
  { name: 'Canada', code: 'ca', channels: 1815, region: 'North America' },
  { name: 'France', code: 'fr', channels: 2156, region: 'Europe' },
  { name: 'Germany', code: 'de', channels: 1923, region: 'Europe' },
  { name: 'Spain', code: 'es', channels: 1687, region: 'Europe' },
  { name: 'Italy', code: 'it', channels: 1542, region: 'Europe' },
  { name: 'Brazil', code: 'br', channels: 1398, region: 'South America' },
  { name: 'Australia', code: 'au', channels: 812, region: 'Oceania' },
  { name: 'India', code: 'in', channels: 1256, region: 'Asia' },
  { name: 'Japan', code: 'jp', channels: 987, region: 'Asia' },
  { name: 'Mexico', code: 'mx', channels: 654, region: 'North America' },
  { name: 'Argentina', code: 'ar', channels: 375, region: 'South America' },
  { name: 'Netherlands', code: 'nl', channels: 289, region: 'Europe' },
  { name: 'Belgium', code: 'be', channels: 156, region: 'Europe' },
  { name: 'Portugal', code: 'pt', channels: 198, region: 'Europe' },
  { name: 'Turkey', code: 'tr', channels: 445, region: 'Asia' },
  { name: 'Russia', code: 'ru', channels: 1123, region: 'Europe' },
  { name: 'Poland', code: 'pl', channels: 287, region: 'Europe' },
  { name: 'Sweden', code: 'se', channels: 145, region: 'Europe' },
  { name: 'Norway', code: 'no', channels: 98, region: 'Europe' },
  { name: 'Denmark', code: 'dk', channels: 87, region: 'Europe' },
  { name: 'Finland', code: 'fi', channels: 76, region: 'Europe' },
  { name: 'Greece', code: 'gr', channels: 123, region: 'Europe' },
  { name: 'South Korea', code: 'kr', channels: 567, region: 'Asia' },
  { name: 'China', code: 'cn', channels: 892, region: 'Asia' },
  { name: 'Thailand', code: 'th', channels: 234, region: 'Asia' },
  { name: 'Vietnam', code: 'vn', channels: 178, region: 'Asia' },
  { name: 'Indonesia', code: 'id', channels: 298, region: 'Asia' },
  { name: 'Philippines', code: 'ph', channels: 156, region: 'Asia' },
  { name: 'Saudi Arabia', code: 'sa', channels: 234, region: 'Middle East' },
  { name: 'UAE', code: 'ae', channels: 189, region: 'Middle East' },
  { name: 'Egypt', code: 'eg', channels: 267, region: 'Africa' },
  { name: 'South Africa', code: 'za', channels: 198, region: 'Africa' },
  { name: 'Morocco', code: 'ma', channels: 145, region: 'Africa' },
  { name: 'Nigeria', code: 'ng', channels: 123, region: 'Africa' },
];

export default function ChannelsPage() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const categories = [
    { id: 'all', name: t('channels.categories.all'), icon: Globe, count: 37591 },
    { id: 'sports', name: t('channels.categories.sports'), icon: Trophy, count: 8500 },
    { id: 'movies', name: t('channels.categories.movies'), icon: Film, count: 6200 },
    { id: 'news', name: t('channels.categories.news'), icon: Newspaper, count: 4800 },
    { id: 'entertainment', name: t('channels.categories.entertainment'), icon: Tv, count: 9500 },
    { id: 'kids', name: t('channels.categories.kids'), icon: Baby, count: 2800 },
    { id: 'music', name: t('channels.categories.music'), icon: Music, count: 1900 },
    { id: 'documentary', name: t('channels.categories.documentary'), icon: BookOpen, count: 3891 },
  ];

  const filteredCountries = useMemo(() => {
    return allCountries.filter(country =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCountries = filteredCountries.slice(startIndex, startIndex + itemsPerPage);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0e1a] via-[#1a1f35] to-[#0a0e1a]">
      <WebPageSchema
        name="Channel List - 37,591+ Live TV Channels"
        description="Browse our extensive collection of premium live TV channels from 115+ countries"
        url="/channels"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Channels', url: '/channels' }
        ]}
      />

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <Breadcrumbs items={[{ name: 'Channels', href: '/channels' }]} />

          <div className="text-center mb-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/20 rounded-full px-6 py-2.5 mb-6">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-orange-400 text-sm font-semibold">{t('channels.hero.badge')}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 bg-clip-text text-transparent">37,591+</span>
              <span className="text-white"> {t('channels.hero.heading')}</span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-6">
              {t('channels.hero.subheading', { count: 115 })}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { label: t('channels.hero.stats.channels'), value: '37,591+' },
                { label: t('channels.hero.stats.countries'), value: '115+' },
                { label: t('channels.hero.stats.vod'), value: '96,000+' },
                { label: t('channels.hero.stats.quality4K'), value: '2,500+' },
              ].map((stat, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {t('channels.categories.heading')}
            </h2>
            <p className="text-gray-400 text-lg">
              {t('channels.categories.subheading')}
            </p>
          </div>

          {/* Category Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {categories.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group relative p-6 rounded-2xl transition-all duration-300 ${isSelected
                    ? 'bg-gradient-to-br from-orange-500 to-pink-600 shadow-2xl scale-105'
                    : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10'
                    }`}
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${isSelected ? 'bg-white/20' : 'bg-white/10'
                      }`}>
                      <Icon className={`w-7 h-7 ${isSelected ? 'text-white' : 'text-gray-400 group-hover:text-white'}`} />
                    </div>
                    <div>
                      <div className={`font-bold text-sm mb-1 ${isSelected ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                        {category.name}
                      </div>
                      <div className={`text-xs ${isSelected ? 'text-white/80' : 'text-gray-500'}`}>
                        {t('channels.categories.channelsCount', { count: category.count })}
                      </div>
                    </div>
                  </div>
                  {isSelected && (
                    <div className="absolute top-3 right-3">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Popular Countries */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-orange-500" />
              {t('channels.popular.heading')}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {popularCountries.map((country, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{country.flag}</span>
                    <div className="flex-1">
                      <div className="text-white font-semibold text-sm group-hover:text-orange-400 transition-colors">
                        {country.name}
                      </div>
                      <div className="text-gray-400 text-xs">
                        {t('channels.all.channelsCount', { count: country.channels })}
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-500 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Countries Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden">
            {/* Header with Search */}
            <div className="p-6 border-b border-white/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Globe className="w-6 h-6 text-orange-500" />
                  {t('channels.all.heading')}
                </h3>
                <div className="text-gray-400 text-sm">
                  {t('channels.all.countriesFound', { count: filteredCountries.length })}
                </div>
              </div>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={t('channels.all.searchPlaceholder')}
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Countries Grid */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {paginatedCountries.map((country, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-orange-500/30 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        <img
                          src={`https://flagcdn.com/w40/${country.code}.png`}
                          srcSet={`https://flagcdn.com/w80/${country.code}.png 2x`}
                          width="40"
                          alt={`${country.name} flag`}
                          className="rounded shadow-sm"
                        />
                        <div>
                          <div className="text-white font-semibold text-sm group-hover:text-orange-400 transition-colors">
                            {country.name}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-400">
                            <MapPin className="w-3 h-3" />
                            {country.region}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-bold text-lg">
                          {country.channels.toLocaleString()}
                        </div>
                        <div className="text-gray-400 text-xs">{t('channels.all.channelsCount')}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="px-6 py-5 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
                {t('channels.all.previous')}
              </button>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-400">
                  {t('channels.all.pageOf', { current: currentPage, total: totalPages })}
                </span>
              </div>
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                {t('channels.all.next')}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/20 rounded-3xl p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <Play className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('channels.cta.heading')}
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              {t('channels.cta.description')}
            </p>
            <a
              href="/#pricing"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              {t('channels.cta.button')}
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
