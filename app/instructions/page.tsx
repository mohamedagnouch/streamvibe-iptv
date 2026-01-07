'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { Tv, Smartphone, Monitor, Tablet, Download, PlayCircle, Settings, CheckCircle2, AlertCircle, ExternalLink, Copy, Check } from 'lucide-react';

const deviceTypes = [
  {
    id: 'smart-tv',
    name: 'Smart TV',
    icon: Tv,
    description: 'Samsung, LG, Sony, Android TV',
    color: 'from-blue-500 to-indigo-600',
    apps: [
      { name: 'Authorized Media Player', recommended: true },
      { name: 'Official Streaming App', recommended: true },
      { name: 'Universal Player', recommended: false },
    ],
    steps: [
      {
        icon: Download,
        title: 'Install Authorized Application',
        description: 'Navigate to your Smart TV\'s app store (Google Play Store, LG Content Store, or Samsung Apps).',
        details: [
          'Search for authorized playback software',
          'Select the official application from the results',
          'Click Install and wait for download to complete',
          'Application will appear in your home menu once installed',
        ],
      },
      {
        icon: PlayCircle,
        title: 'Launch Application',
        description: 'Open the official streaming application from your Smart TV\'s menu.',
        details: [
          'Locate the app icon in your apps section',
          'Click to launch the application',
          'Wait for the app to load completely',
        ],
      },
      {
        icon: Settings,
        title: 'Configure Connection',
        description: 'Set up your streaming connection using our secure hub API.',
        details: [
          'Select "Add New User" or "Login with Xtream Codes"',
          'Choose "Xtream Codes API" as login method',
          'Keep your credentials email ready',
        ],
      },
      {
        icon: CheckCircle2,
        title: 'Enter Credentials',
        description: 'Input your subscription details provided in the welcome email.',
        details: [
          'Server URL: Enter the provided server address',
          'Username: Your unique account username',
          'Password: Your secure account password',
          'Click "Add User" or "Login" to proceed',
        ],
      },
      {
        icon: PlayCircle,
        title: 'Start Streaming',
        description: 'Browse and enjoy thousands of official live channels and 96,000+ VOD titles.',
        details: [
          'Navigate through Live TV, Movies, and Series sections',
          'Use search to find specific content',
          'Add favorites for quick access',
          'Enjoy streaming in up to 4K quality',
        ],
      },
    ],
  },
  {
    id: 'android',
    name: 'Android',
    icon: Smartphone,
    description: 'Phones, Tablets & Android TV',
    color: 'from-green-500 to-emerald-600',
    apps: [
      { name: 'Authorized Media Player', recommended: true },
      { name: 'Official Streaming App', recommended: true },
      { name: 'Universal Player', recommended: false },
    ],
    steps: [
      {
        icon: Download,
        title: 'Download from Play Store',
        description: 'Get the official streaming application from Google Play Store.',
        details: [
          'Open Google Play Store on your device',
          'Search for our official application',
          'Tap on the authorized playback software',
          'Click Install and accept permissions',
        ],
      },
      {
        icon: PlayCircle,
        title: 'Open Application',
        description: 'Launch the official playback application from your device.',
        details: [
          'Find the app icon on your home screen or app drawer',
          'Tap to open the application',
          'Allow any necessary permissions',
        ],
      },
      {
        icon: Settings,
        title: 'Select Login Method',
        description: 'Choose Xtream Codes API for the best experience.',
        details: [
          'Tap "Add New User" or similar option',
          'Select "Login with Xtream Codes API"',
          'Prepare your subscription credentials',
        ],
      },
      {
        icon: CheckCircle2,
        title: 'Input Credentials',
        description: 'Enter your StreamVibe subscription details.',
        details: [
          'Server URL: Copy from your welcome email',
          'Username: Your account username',
          'Password: Your account password',
          'Tap "Add User" to complete setup',
        ],
      },
      {
        icon: PlayCircle,
        title: 'Enjoy Content',
        description: 'Stream anywhere, anytime on your Android device.',
        details: [
          'Browse Live TV, Movies, and Series',
          'Download content for offline viewing',
          'Configure your personal access hub',
          'Stream on the go with mobile data or WiFi',
        ],
      },
    ],
  },
  {
    id: 'ios',
    name: 'iOS',
    icon: Tablet,
    description: 'iPhone, iPad & Apple TV',
    color: 'from-purple-500 to-pink-600',
    apps: [
      { name: 'Authorized Media Player', recommended: true },
      { name: 'Official Streaming App', recommended: true },
      { name: 'Secondary Web Player', recommended: false },
    ],
    steps: [
      {
        icon: Download,
        title: 'Download from App Store',
        description: 'Install the official playback application from Apple App Store.',
        details: [
          'Open the App Store on your iOS device',
          'Search for our authorized application',
          'Verify it\'s the official app',
          'Tap Get and authenticate with Face ID/Touch ID',
        ],
      },
      {
        icon: PlayCircle,
        title: 'Launch App',
        description: 'Open the official streaming application on your device.',
        details: [
          'Locate the app icon on your home screen',
          'Tap to open',
          'Grant necessary permissions if prompted',
        ],
      },
      {
        icon: Settings,
        title: 'Choose Login Type',
        description: 'Select Xtream Codes API login method.',
        details: [
          'Tap "Add New User" or "+" button',
          'Select "Login with Xtream Codes API"',
          'Have your credentials ready',
        ],
      },
      {
        icon: CheckCircle2,
        title: 'Enter Details',
        description: 'Input your subscription information.',
        details: [
          'Server URL: From your welcome email',
          'Username: Your unique username',
          'Password: Your secure password',
          'Tap "Add" or "Login" to finish',
        ],
      },
      {
        icon: PlayCircle,
        title: 'Start Watching',
        description: 'Access premium content on your Apple device.',
        details: [
          'Explore Live TV, Movies, and Series',
          'Use AirPlay to stream to Apple TV',
          'Download favorites for offline viewing',
          'Enjoy seamless iOS integration',
        ],
      },
    ],
  },
  {
    id: 'pc',
    name: 'PC/Mac',
    icon: Monitor,
    description: 'Windows, macOS & Linux',
    color: 'from-orange-500 to-red-600',
    apps: [
      { name: 'VLC Media Player', recommended: true },
      { name: 'Authorized Hub Player', recommended: true },
      { name: 'Standard Web Interface', recommended: false },
    ],
    steps: [
      {
        icon: Download,
        title: 'Download VLC Player',
        description: 'Get the free VLC Media Player for your computer.',
        details: [
          'Visit videolan.org in your web browser',
          'Click "Download VLC" for your OS',
          'Choose the correct version (Windows/Mac/Linux)',
          'Save the installer to your computer',
        ],
      },
      {
        icon: Settings,
        title: 'Install VLC',
        description: 'Run the installer and complete the setup.',
        details: [
          'Double-click the downloaded installer',
          'Follow the installation wizard',
          'Accept default settings or customize',
          'Wait for installation to complete',
        ],
      },
      {
        icon: PlayCircle,
        title: 'Open Network Stream',
        description: 'Access VLC\'s network streaming feature.',
        details: [
          'Launch VLC Media Player',
          'Go to Media menu → Open Network Stream',
          'Or use keyboard shortcut: Ctrl+N (Cmd+N on Mac)',
        ],
      },
      {
        icon: CheckCircle2,
        title: 'Add Secure Connection',
        description: 'Enter your StreamVibe official access URL.',
        details: [
          'Copy Access URL from your welcome email',
          'Paste into the network URL field',
          'Click "Play" to load your content access',
          'Access hub will appear in the sidebar',
        ],
      },
      {
        icon: PlayCircle,
        title: 'Browse & Watch',
        description: 'Navigate channels and start streaming.',
        details: [
          'View content list in the left sidebar',
          'Click any channel to start streaming',
          'Use keyboard shortcuts for control',
          'Enjoy full-screen viewing experience',
        ],
      },
    ],
  },
];

export default function InstructionsPage() {
  const [selectedDevice, setSelectedDevice] = useState(deviceTypes[0]);
  const [copiedUrl, setCopiedUrl] = useState(false);

  const handleCopyUrl = () => {
    navigator.clipboard.writeText('http://your-server-url.com:port');
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0e1a] via-[#1a1f35] to-[#0a0e1a]">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/20 rounded-full px-6 py-2.5 mb-6">
              <CheckCircle2 className="w-4 h-4 text-orange-500" />
              <span className="text-orange-400 text-sm font-semibold">Professional Setup Guide</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="text-white">Installation </span>
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 bg-clip-text text-transparent">Instructions</span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-6">
              Complete step-by-step guides for all devices. Get official access in under 5 minutes.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: 'Setup Time', value: '< 5 min' },
              { label: 'Difficulty', value: 'Easy' },
              { label: 'Support', value: '24/7' },
              { label: 'Success Rate', value: '99.9%' },
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
      </section>

      {/* Device Tabs */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {deviceTypes.map((device) => {
              const Icon = device.icon;
              const isSelected = selectedDevice.id === device.id;

              return (
                <button
                  key={device.id}
                  onClick={() => setSelectedDevice(device)}
                  className={`group relative px-6 py-4 rounded-2xl transition-all duration-300 ${isSelected
                    ? 'bg-gradient-to-r ' + device.color + ' shadow-2xl scale-105'
                    : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-gray-400 group-hover:text-white'}`} />
                    <div className="text-left">
                      <div className={`font-bold text-sm ${isSelected ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                        {device.name}
                      </div>
                      <div className={`text-xs ${isSelected ? 'text-white/80' : 'text-gray-500 group-hover:text-white/80'}`}>
                        {device.description}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Recommended Apps */}
          <div className="mb-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Download className="w-5 h-5 text-orange-500" />
              Recommended Applications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {selectedDevice.apps.map((app, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border ${app.recommended
                    ? 'bg-gradient-to-br from-orange-500/10 to-pink-500/10 border-orange-500/30'
                    : 'bg-white/5 border-white/10'
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-semibold ${app.recommended ? 'text-white' : 'text-gray-400'}`}>
                      {app.name}
                    </span>
                    {app.recommended && (
                      <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full font-bold">
                        Recommended
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Installation Steps */}
          <div className="space-y-6">
            {selectedDevice.steps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Step Number */}
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${selectedDevice.color} flex items-center justify-center shadow-lg`}>
                        <StepIcon className="w-6 h-6 text-white" />
                      </div>

                      {/* Step Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-white font-bold text-lg">
                            Step {index + 1}: {step.title}
                          </h4>
                        </div>
                        <p className="text-gray-400 mb-4">
                          {step.description}
                        </p>

                        {/* Details List */}
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start gap-3 text-gray-300 text-sm">
                              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Credentials Info Box */}
          <div className="mt-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-bold text-lg mb-2">
                  Important: Your Credentials
                </h4>
                <p className="text-gray-300 mb-4">
                  After purchasing a subscription, you'll receive an email with your login credentials:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="text-gray-400 text-sm mb-1">Server URL</div>
                    <div className="text-white font-mono text-sm flex items-center gap-2">
                      <span className="truncate">http://server.com:port</span>
                      <button
                        onClick={handleCopyUrl}
                        className="p-1 hover:bg-white/10 rounded transition-colors"
                        title="Copy URL"
                      >
                        {copiedUrl ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="text-gray-400 text-sm mb-1">Username</div>
                    <div className="text-white font-mono text-sm">your_username</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="text-gray-400 text-sm mb-1">Password</div>
                    <div className="text-white font-mono text-sm">••••••••</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Assistance?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Our expert support team is available <span className="font-bold text-orange-400">24/7</span> to help you with installation, troubleshooting, or any questions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/15626380287?text=Hello%2C%20I%20need%20help%20with%20StreamVibe%20setup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Contact Support
              </a>
              <Link
                href="/#pricing"
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 hover:scale-105 transition-all"
              >
                View Plans
                <ExternalLink className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}