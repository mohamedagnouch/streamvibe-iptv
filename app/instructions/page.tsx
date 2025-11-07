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
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
            <span className="text-emerald-700 text-sm font-medium">Step-by-Step Setup Guide</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Setup Instructions
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Follow these simple steps to install and configure StreamVibe IPTV on your device. Choose your device type for detailed setup instructions.
          </p>
        </div>
      </section>

      {/* Device Selection */}
      <section className="py-12 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Select Your Device
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {deviceTypes.map((device) => {
              const Icon = device.icon;
              const isSelected = selectedDevice.id === device.id;
              
              return (
                <button
                  key={device.id}
                  onClick={() => setSelectedDevice(device)}
                  className={`p-6 rounded-2xl border-2 transition-all text-left ${
                    isSelected
                      ? 'border-orange-500 bg-gradient-to-br from-orange-50 to-red-50 shadow-lg shadow-orange-500/20'
                      : 'border-gray-200 bg-white hover:border-orange-300 hover:shadow-md'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    isSelected
                      ? 'bg-gradient-to-r from-orange-500 via-red-500 to-pink-600'
                      : 'bg-gray-100'
                  }`}>
                    <Icon className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-gray-600'}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
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
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 px-8 py-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  {(() => {
                    const Icon = selectedDevice.icon;
                    return <Icon className="w-7 h-7" />;
                  })()}
                  {selectedDevice.name} Setup Guide
                </h3>
              </div>

              {/* Steps */}
              <div className="p-8">
                <div className="space-y-4">
                  {selectedDevice.instructions.map((instruction) => (
                    <div
                      key={instruction.step}
                      className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow"
                    >
                      <button
                        onClick={() => setExpandedStep(expandedStep === instruction.step ? null : instruction.step)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold">{instruction.step}</span>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900">
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
                        <div className="px-6 pb-4 pt-2 border-t border-gray-100">
                          <p className="text-gray-600 leading-relaxed pl-14">
                            {instruction.description}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Success Message */}
                <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-xl">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-emerald-900 mb-1">
                        Setup Complete!
                      </h5>
                      <p className="text-emerald-700 text-sm">
                        You're all set! If you encounter any issues, our 24/7 support team is here to help.
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
     
      <Footer />
    </main>
  );
}