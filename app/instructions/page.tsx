'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Tv, Smartphone, Monitor, Tablet, ChevronDown } from 'lucide-react';

const deviceTypes = [
  {
    id: 'smart-tv',
    name: 'Smart TV',
    icon: Tv,
    description: 'Samsung, LG, Android TV',
    instructions: [
      {
        step: 1,
        title: 'Download IPTV App',
        description: 'Go to your TV\'s app store and search for "IPTV Smarters Pro" or "TiviMate". Download and install the app.',
      },
      {
        step: 2,
        title: 'Open the App',
        description: 'Launch the IPTV app you just installed on your Smart TV.',
      },
      {
        step: 3,
        title: 'Add Playlist',
        description: 'Select "Add New User" or "Add Playlist". Choose the "Login with Xtream Codes API" option.',
      },
      {
        step: 4,
        title: 'Enter Credentials',
        description: 'Enter the server URL, username, and password provided in your welcome email.',
      },
      {
        step: 5,
        title: 'Start Watching',
        description: 'Once logged in, you can browse through thousands of channels and start streaming!',
      },
    ],
  },
  {
    id: 'android',
    name: 'Android Device',
    icon: Smartphone,
    description: 'Phones & Tablets',
    instructions: [
      {
        step: 1,
        title: 'Download from Play Store',
        description: 'Open Google Play Store and search for "IPTV Smarters Pro". Download and install the app.',
      },
      {
        step: 2,
        title: 'Launch the App',
        description: 'Open IPTV Smarters Pro on your Android device.',
      },
      {
        step: 3,
        title: 'Select Login Method',
        description: 'Choose "Login with Xtream Codes API" from the options.',
      },
      {
        step: 4,
        title: 'Input Your Details',
        description: 'Enter your server URL, username, and password from your subscription email.',
      },
      {
        step: 5,
        title: 'Enjoy Streaming',
        description: 'Browse channels, movies, and series. Add favorites for quick access!',
      },
    ],
  },
  {
    id: 'ios',
    name: 'iOS Device',
    icon: Tablet,
    description: 'iPhone & iPad',
    instructions: [
      {
        step: 1,
        title: 'Download from App Store',
        description: 'Open the App Store and search for "IPTV Smarters Pro". Download and install.',
      },
      {
        step: 2,
        title: 'Open the Application',
        description: 'Launch IPTV Smarters Pro on your iOS device.',
      },
      {
        step: 3,
        title: 'Choose Login Type',
        description: 'Select "Login with Xtream Codes API" option.',
      },
      {
        step: 4,
        title: 'Enter Login Information',
        description: 'Fill in the server URL, username, and password provided to you.',
      },
      {
        step: 5,
        title: 'Start Streaming',
        description: 'Access all your channels and content. Enjoy streaming on the go!',
      },
    ],
  },
  {
    id: 'pc',
    name: 'PC/Mac',
    icon: Monitor,
    description: 'Windows & macOS',
    instructions: [
      {
        step: 1,
        title: 'Download VLC Player',
        description: 'Visit videolan.org and download VLC Media Player for your operating system.',
      },
      {
        step: 2,
        title: 'Install VLC',
        description: 'Run the installer and follow the installation wizard to complete setup.',
      },
      {
        step: 3,
        title: 'Open Network Stream',
        description: 'Launch VLC, go to Media > Open Network Stream (or Ctrl+N).',
      },
      {
        step: 4,
        title: 'Enter M3U URL',
        description: 'Paste your M3U playlist URL provided in your welcome email and click Play.',
      },
      {
        step: 5,
        title: 'Browse Channels',
        description: 'Access the playlist from the sidebar and select any channel to start watching.',
      },
    ],
  },
];

export default function InstructionsPage() {
  const [selectedDevice, setSelectedDevice] = useState(deviceTypes[0]);
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-12 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full px-5 py-2 mb-5">
            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span className="text-blue-700 text-sm font-semibold">Easy Setup in 5 Minutes</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight">
            <span className="text-gray-900">Quick </span>
            <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">Setup Guide</span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Get started in minutes! Follow our <span className="font-semibold text-gray-900">step-by-step instructions</span> to install StreamVibe IPTV on any device.
          </p>
        </div>
      </section>

      {/* Device Selection */}
      <section className="py-10 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Choose Your Device
            </h2>
            <p className="text-gray-600 text-sm">Select your device type to view specific setup instructions</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {deviceTypes.map((device) => {
              const Icon = device.icon;
              const isSelected = selectedDevice.id === device.id;
              
              return (
                <button
                  key={device.id}
                  onClick={() => setSelectedDevice(device)}
                  className={`p-5 rounded-2xl border-2 transition-all text-left hover:scale-105 ${
                    isSelected
                      ? 'border-orange-500 bg-gradient-to-br from-orange-50 to-red-50 shadow-lg shadow-orange-500/20'
                      : 'border-gray-200 bg-white hover:border-orange-300 hover:shadow-md'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${
                    isSelected
                      ? 'bg-gradient-to-r from-orange-500 via-red-500 to-pink-600'
                      : 'bg-gray-100'
                  }`}>
                    <Icon className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-gray-600'}`} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    {device.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {device.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Instructions Steps */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl border-2 border-gray-200 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 px-6 py-5">
                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                  {(() => {
                    const Icon = selectedDevice.icon;
                    return <Icon className="w-7 h-7" />;
                  })()}
                  {selectedDevice.name} Setup Guide
                </h3>
              </div>

              {/* Steps */}
              <div className="p-6">
                <div className="space-y-3">
                  {selectedDevice.instructions.map((instruction) => (
                    <div
                      key={instruction.step}
                      className="border-2 border-gray-200 rounded-xl overflow-hidden bg-gradient-to-r from-white to-gray-50 hover:shadow-lg hover:border-orange-300 transition-all"
                    >
                      <button
                        onClick={() => setExpandedStep(expandedStep === instruction.step ? null : instruction.step)}
                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-orange-50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                            <span className="text-white font-bold">{instruction.step}</span>
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-gray-900">
                              {instruction.title}
                            </h4>
                          </div>
                        </div>
                        <ChevronDown 
                          className={`w-5 h-5 text-gray-400 transition-transform ${
                            expandedStep === instruction.step ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      {expandedStep === instruction.step && (
                        <div className="px-5 pb-4 pt-2 border-t-2 border-gray-200 bg-white">
                          <p className="text-gray-700 leading-relaxed pl-14 text-sm">
                            {instruction.description}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Success Message */}
                <div className="mt-6 p-5 bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-300 rounded-xl shadow-md">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-bold text-emerald-900 mb-1">
                        🎉 Setup Complete!
                      </h5>
                      <p className="text-emerald-800 text-sm font-medium">
                        You're ready to stream! Need help? Our <span className="font-bold">24/7 support team</span> is always available.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Need Help Section */}
      <section className="py-12 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl shadow-xl border-2 border-blue-200 p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Need Help?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Our expert support team is available <span className="font-bold text-blue-600">24/7</span> to assist you with setup, troubleshooting, or any questions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/212618467167?text=Hello%2C%20I%20need%20help%20with%20StreamVibe%20setup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Live Chat Support
              </a>
              <a
                href="/#pricing"
                className="inline-flex items-center gap-2 bg-white text-gray-900 border-2 border-gray-300 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 hover:scale-105 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                View Pricing Plans
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}