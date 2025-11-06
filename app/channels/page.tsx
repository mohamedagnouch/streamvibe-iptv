'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChannelLogos from '../components/ChannelLogos';
import { ShieldCheck, Search } from 'lucide-react';

const countries = [
  { 
    name: 'United States', 
    code: 'us', 
    channelCount: 14298, 
    status: 'Available',
    channels: [
      { id: 1, name: 'CNN', icon: 'CNN', category: 'News', status: 'Live' },
      { id: 2, name: 'ESPN', icon: 'ESPN', category: 'Sports', status: 'Live' },
      { id: 3, name: 'HBO', icon: 'HBO', category: 'Entertainment', status: 'Live' },
      { id: 4, name: 'Fox News', icon: 'FOX', category: 'News', status: 'Live' },
      { id: 5, name: 'NBC', icon: 'NBC', category: 'General', status: 'Live' },
      { id: 6, name: 'Disney Channel', icon: 'DSN', category: 'Kids', status: 'Live' },
      { id: 7, name: 'National Geographic', icon: 'NGC', category: 'Documentary', status: 'Live' },
      { id: 8, name: 'MTV', icon: 'MTV', category: 'Music', status: 'Live' },
    ]
  },
  { 
    name: 'Canada', 
    code: 'ca', 
    channelCount: 1815, 
    status: 'Available',
    channels: [
      { id: 1, name: 'CBC', icon: 'CBC', category: 'General', status: 'Live' },
      { id: 2, name: 'TSN', icon: 'TSN', category: 'Sports', status: 'Live' },
      { id: 3, name: 'CTV', icon: 'CTV', category: 'General', status: 'Live' },
      { id: 4, name: 'Sportsnet', icon: 'SN', category: 'Sports', status: 'Live' },
      { id: 5, name: 'City TV', icon: 'CITY', category: 'General', status: 'Live' },
      { id: 6, name: 'Global TV', icon: 'GLB', category: 'General', status: 'Live' },
    ]
  },
  { 
    name: 'Afghanistan', 
    code: 'af', 
    channelCount: 47, 
    status: 'Available',
    channels: [
      { id: 1, name: 'Tolo TV', icon: 'TOLO', category: 'General', status: 'Live' },
      { id: 2, name: 'Ariana TV', icon: 'ARI', category: 'General', status: 'Live' },
      { id: 3, name: '1TV Afghanistan', icon: '1TV', category: 'News', status: 'Live' },
      { id: 4, name: 'Lemar TV', icon: 'LMR', category: 'Entertainment', status: 'Live' },
    ]
  },
  { 
    name: 'Aland', 
    code: 'ax', 
    channelCount: 1, 
    status: 'Available',
    channels: [
      { id: 1, name: 'Åland TV', icon: 'ÅTV', category: 'General', status: 'Live' },
    ]
  },
  { 
    name: 'Albania', 
    code: 'al', 
    channelCount: 120, 
    status: 'Available',
    channels: [
      { id: 1, name: 'RTSH', icon: 'RTSH', category: 'General', status: 'Live' },
      { id: 2, name: 'Top Channel', icon: 'TOP', category: 'General', status: 'Live' },
      { id: 3, name: 'Klan TV', icon: 'KLAN', category: 'Entertainment', status: 'Live' },
      { id: 4, name: 'Vizion Plus', icon: 'VIZ+', category: 'General', status: 'Live' },
      { id: 5, name: 'News 24', icon: 'N24', category: 'News', status: 'Live' },
    ]
  },
  { 
    name: 'Algeria', 
    code: 'dz', 
    channelCount: 48, 
    status: 'Available',
    channels: [
      { id: 1, name: 'ENTV', icon: 'ENTV', category: 'General', status: 'Live' },
      { id: 2, name: 'Echorouk TV', icon: 'ECH', category: 'News', status: 'Live' },
      { id: 3, name: 'Ennahar TV', icon: 'ENN', category: 'News', status: 'Live' },
      { id: 4, name: 'Canal Algérie', icon: 'CAL', category: 'General', status: 'Live' },
    ]
  },
  { 
    name: 'American Samoa', 
    code: 'as', 
    channelCount: 6, 
    status: 'Available',
    channels: [
      { id: 1, name: 'KVZK-TV', icon: 'KVZK', category: 'General', status: 'Live' },
      { id: 2, name: 'KKHJ-LP', icon: 'KKHJ', category: 'General', status: 'Live' },
    ]
  },
  { 
    name: 'Andorra', 
    code: 'ad', 
    channelCount: 2, 
    status: 'Available',
    channels: [
      { id: 1, name: 'ATV', icon: 'ATV', category: 'General', status: 'Live' },
      { id: 2, name: 'Andorra Televisió', icon: 'AND', category: 'General', status: 'Live' },
    ]
  },
  { 
    name: 'Angola', 
    code: 'ao', 
    channelCount: 35, 
    status: 'Available',
    channels: [
      { id: 1, name: 'TPA', icon: 'TPA', category: 'General', status: 'Live' },
      { id: 2, name: 'TV Zimbo', icon: 'ZMB', category: 'General', status: 'Live' },
      { id: 3, name: 'Record TV Angola', icon: 'REC', category: 'General', status: 'Live' },
      { id: 4, name: 'Zap Viva', icon: 'ZAP', category: 'Entertainment', status: 'Live' },
    ]
  },
  { 
    name: 'Anguilla', 
    code: 'ai', 
    channelCount: 3, 
    status: 'Available',
    channels: [
      { id: 1, name: 'Caribbean Cable', icon: 'CCC', category: 'General', status: 'Live' },
      { id: 2, name: 'AXA TV', icon: 'AXA', category: 'General', status: 'Live' },
    ]
  },
  { 
    name: 'Antarctica', 
    code: 'aq', 
    channelCount: 0, 
    status: 'Coming Soon',
    channels: []
  },
  { 
    name: 'Antigua and Barbuda', 
    code: 'ag', 
    channelCount: 2, 
    status: 'Available',
    channels: [
      { id: 1, name: 'ABS TV', icon: 'ABS', category: 'General', status: 'Live' },
      { id: 2, name: 'Observer Radio', icon: 'OBS', category: 'General', status: 'Live' },
    ]
  },
  { 
    name: 'Argentina', 
    code: 'ar', 
    channelCount: 375, 
    status: 'Available',
    channels: [
      { id: 1, name: 'Telefe', icon: 'TLF', category: 'General', status: 'Live' },
      { id: 2, name: 'El Trece', icon: 'TR13', category: 'General', status: 'Live' },
      { id: 3, name: 'América TV', icon: 'AME', category: 'General', status: 'Live' },
      { id: 4, name: 'TN', icon: 'TN', category: 'News', status: 'Live' },
      { id: 5, name: 'ESPN Argentina', icon: 'ESPN', category: 'Sports', status: 'Live' },
      { id: 6, name: 'Fox Sports', icon: 'FOX', category: 'Sports', status: 'Live' },
    ]
  },
  { 
    name: 'Armenia', 
    code: 'am', 
    channelCount: 30, 
    status: 'Available',
    channels: [
      { id: 1, name: 'Armenia 1', icon: 'ARM1', category: 'General', status: 'Live' },
      { id: 2, name: 'Shant TV', icon: 'SHT', category: 'General', status: 'Live' },
      { id: 3, name: 'Kentron TV', icon: 'KEN', category: 'General', status: 'Live' },
      { id: 4, name: 'Yerkir Media', icon: 'YRK', category: 'News', status: 'Live' },
    ]
  },
  { 
    name: 'Aruba', 
    code: 'aw', 
    channelCount: 14, 
    status: 'Available',
    channels: [
      { id: 1, name: 'Telearuba', icon: 'TLA', category: 'General', status: 'Live' },
      { id: 2, name: 'ATV Aruba', icon: 'ATV', category: 'General', status: 'Live' },
      { id: 3, name: 'Canal 90', icon: 'C90', category: 'General', status: 'Live' },
    ]
  },
  { 
    name: 'Australia', 
    code: 'au', 
    channelCount: 812, 
    status: 'Available',
    channels: [
      { id: 1, name: 'ABC', icon: 'ABC', category: 'General', status: 'Live' },
      { id: 2, name: 'Seven Network', icon: 'CH7', category: 'General', status: 'Live' },
      { id: 3, name: 'Nine Network', icon: 'CH9', category: 'General', status: 'Live' },
      { id: 4, name: 'Ten Network', icon: 'CH10', category: 'General', status: 'Live' },
      { id: 5, name: 'SBS', icon: 'SBS', category: 'General', status: 'Live' },
      { id: 6, name: 'Fox Sports', icon: 'FOX', category: 'Sports', status: 'Live' },
    ]
  },
  { 
    name: 'Austria', 
    code: 'at', 
    channelCount: 109, 
    status: 'Available',
    channels: [
      { id: 1, name: 'ORF1', icon: 'ORF1', category: 'General', status: 'Live' },
      { id: 2, name: 'ORF2', icon: 'ORF2', category: 'General', status: 'Live' },
      { id: 3, name: 'ATV', icon: 'ATV', category: 'General', status: 'Live' },
      { id: 4, name: 'Servus TV', icon: 'SRV', category: 'General', status: 'Live' },
      { id: 5, name: 'Puls 4', icon: 'PLS4', category: 'Entertainment', status: 'Live' },
    ]
  },
  { 
    name: 'Azerbaijan', 
    code: 'az', 
    channelCount: 28, 
    status: 'Available',
    channels: [
      { id: 1, name: 'AzTV', icon: 'AZTV', category: 'General', status: 'Live' },
      { id: 2, name: 'İTV', icon: 'ITV', category: 'General', status: 'Live' },
      { id: 3, name: 'Space TV', icon: 'SPC', category: 'General', status: 'Live' },
      { id: 4, name: 'Lider TV', icon: 'LDR', category: 'News', status: 'Live' },
    ]
  },
  { 
    name: 'Bahamas', 
    code: 'bs', 
    channelCount: 14, 
    status: 'Available',
    channels: [
      { id: 1, name: 'ZNS-TV', icon: 'ZNS', category: 'General', status: 'Live' },
      { id: 2, name: 'Cable Bahamas', icon: 'CBL', category: 'General', status: 'Live' },
      { id: 3, name: 'JCN', icon: 'JCN', category: 'General', status: 'Live' },
    ]
  },
  { 
    name: 'Bahrain', 
    code: 'bh', 
    channelCount: 6, 
    status: 'Available',
    channels: [
      { id: 1, name: 'Bahrain TV', icon: 'BTV', category: 'General', status: 'Live' },
      { id: 2, name: 'Bahrain Sports', icon: 'BSP', category: 'Sports', status: 'Live' },
      { id: 3, name: 'Al Mamlaka', icon: 'MLK', category: 'General', status: 'Live' },
    ]
  },
];

export default function ChannelsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState<typeof countries[0] | null>(null);
  const itemsPerPage = 10;

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCountries = filteredCountries.slice(startIndex, startIndex + itemsPerPage);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 min-h-screen flex items-center">
        <div className="container mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-700 text-sm font-medium">World's #1 IPTV Service</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight">
            37591+ Channels
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Access 25,000+ premium live TV channels from 115+ countries worldwide. Sports, 
            entertainment, news, movies, and international content in stunning 4K quality.
          </p>

          {/* CTA Button */}
          <div className="mb-8">
            <a
              href="/#pricing"
              className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-red-700 transition-all shadow-lg shadow-orange-500/30"
            >
              Start Watching Now
            </a>
          </div>

          {/* Money-back Guarantee */}
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <span className="text-sm">30-day money-back guarantee</span>
          </div>
        </div>
      </section>

      {/* Orange Gradient Background with Channel Logos and Table */}
      <div className="relative bg-gradient-to-b from-orange-400 via-orange-500 to-red-600 pb-20">
        {/* Channel Logos Carousel */}
        <div className="container mx-auto px-6 pt-12">
          <ChannelLogos />
        </div>

        {/* Countries Table */}
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Search Bar */}
            <div className="p-6 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search channels..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Country</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Channels</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {paginatedCountries.map((country, index) => (
                    <>
                      <tr 
                        key={index} 
                        onClick={() => setSelectedCountry(selectedCountry?.name === country.name ? null : country)}
                        className="hover:bg-gray-50 transition-colors cursor-pointer"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <svg 
                              className={`w-5 h-5 text-gray-400 transition-transform ${selectedCountry?.name === country.name ? 'rotate-90' : ''}`}
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <img
                              src={`https://flagcdn.com/w40/${country.code}.png`}
                              srcSet={`https://flagcdn.com/w80/${country.code}.png 2x`}
                              width="40"
                              alt={`${country.name} flag`}
                              className="rounded shadow-sm"
                            />
                            <span className="text-gray-900 font-medium">{country.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-gray-700">
                          {country.channelCount.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                            country.status === 'Available' 
                              ? 'bg-emerald-100 text-emerald-700' 
                              : 'bg-orange-100 text-orange-700'
                          }`}>
                            {country.status}
                          </span>
                        </td>
                      </tr>
                      
                      {/* Collapsible Channels Row */}
                      {selectedCountry?.name === country.name && (
                        <tr>
                          <td colSpan={3} className="px-0 py-0">
                            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                              <h4 className="text-lg font-bold text-gray-900 mb-4">
                                Channels for {country.name}
                              </h4>
                              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                                <table className="w-full">
                                  <thead className="bg-gray-100 border-b border-gray-200">
                                    <tr>
                                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Channel</th>
                                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Category</th>
                                      <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Status</th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-gray-200">
                                    {country.channels.map((channel) => (
                                      <tr key={channel.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-4 py-3">
                                          <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded flex items-center justify-center text-white font-bold text-xs shadow-sm">
                                              {channel.icon}
                                            </div>
                                            <span className="text-gray-900 text-sm font-medium">{channel.name}</span>
                                          </div>
                                        </td>
                                        <td className="px-4 py-3 text-gray-700 text-sm">{channel.category}</td>
                                        <td className="px-4 py-3 text-center">
                                          <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                                            {channel.status}
                                          </span>
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                                {country.channelCount > country.channels.length && (
                                  <div className="px-4 py-3 bg-gray-50 text-center text-sm text-gray-600">
                                    Showing {country.channels.length} of {country.channelCount.toLocaleString()} channels
                                  </div>
                                )}
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-center gap-4">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              <span className="text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Floating Action Button */}
        <a
          href="/#pricing"
          className="fixed bottom-8 right-8 bg-white text-orange-500 p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all z-50 group"
          aria-label="Get Started"
        >
          <svg 
            className="w-6 h-6 transform group-hover:rotate-12 transition-transform" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </a>
      </div>

      <Footer />
    </main>
  );
}
